import {Component, OnInit} from '@angular/core';
import {Sql} from '../models/sql';
import {NgForm, NgModel} from '@angular/forms';
import {Queries} from '../models/queries';
import {DataService} from '../data/data.service';
import {Customer} from '../models/customer';
import {Book} from '../models/book';
import {Employee} from '../models/employee';
import {Order} from '../models/order';
import {Shipper} from '../models/shipper';
import {Subject} from '../models/subject';
import {Supplier} from '../models/supplier';


@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   attributeString: String;
   postError = false;
   postErrorMessage = '';

   // changes the visible tables
   activeTable = 'all';

   selectAllBooks: string;
   selectAllCustomers: string;
   selectAllEmployees: string;
   selectAllOrders: string;
   selectAllOrderDetails: string;
   selectAllShippers: string;
   selectAllSubjects: string;
   selectAllSuppliers: string;


   book: Book = {
      bookID: null,
      title: null,
      unitPrice: null,
      author: null,
      quantity: null,
      subjectID: null,
      supplierID: null
   };

   customer: Customer = {
      customerID: null,
      firstName: null,
      lastName: null,
      phone: null
   };

   employee: Employee = {
      employeeID: null,
      firstName:null,
      lastName: null
   };

   order: Order = {
      orderID: null,
      customerID: null,
      employeeID: null,
      orderDate: null,
      shippedDate: null,
      shipperID: null
   };

   shipper: Shipper = {
      shipperID: null,
      shipper_name: null
   };

   subject: Subject = {
      subjectID: null,
      category_name: null
   };

   supplier: Supplier = {
      supplierID: null,
      companyName: null,
      contactFirstName: null,
      contactLastName: null,
      phone: null
   };


   mySql : Sql = {
      statement: null,
   };

   query : Queries = {
        selectQuery1: null,
        selectQuery2: null,
        selectQuery3 : null,
        selectQuery4 : null,
        selectQuery5 : null,
        selectQuery6 : null,
        selectQuery7 : null,
        selectQuery8 : null,
        selectQuery9 : null,
        selectQuery10 : null,
        selectQuery11 : null,
        selectQuery12 : null,
        selectQuery13 : null,
        selectQuery14 : null,
        selectQuery15 : null,
        selectQuery16 : null,
        selectQuery17 : null,
        selectQuery18 : null,
        selectQuery19 : null
  };

  constructor(private dataService: DataService)   {
     this.mySql.statement = '';
     this.query.selectQuery1 = 'SELECT S.category_name FROM db_book B, db_subject S, db_supplier P WHERE B.SupplierID = 2 AND B.SubjectID = S.SubjectID AND P.company_name = supplier2;';
     this.query.selectQuery2 = 'SELECT B.Title, B.unit_price FROM db_book B where B.SupplierID = 3 AND B.unit_price = (select MAX(B2.unit_price) FROM bookstore.db_book B2 WHERE B2.SupplierID = 3 AND B2.unit_price);';
     this.query.selectQuery3 = 'SELECT Distinct B.Title FROM db_book B, db_order O, db_order_detail OD, db_customer C WHERE B.BookID = OD.BookID AND OD.OrderID = O.OrderID AND O.CustomerID = C.CustomerID AND C.last_name = lastname1 AND C.first_name = firstname1;';
     this.query.selectQuery4 = 'SELECT B.Title FROM db_book B WHERE B.Quantity > 10;';
     this.query.selectQuery5 = 'SELECT SUM(OD.Quantity*B.unit_price) FROM db_book B, db_order_detail OD, db_order O, db_customer C WHERE OD.BookID = B.BookID AND O.OrderID = OD.OrderID AND C.CustomerID = O.CustomerID AND C.first_name = firstname1 AND C.last_name = lastname1;';
     this.query.selectQuery6 = 'SELECT FirstName, LastName FROM (SELECT C.first_name AS FirstName, C.last_name AS LastName, SUM(OD.Quantity * B.unit_price) AS TotalPurchases FROM db_book B, db_order_detail OD, db_order O, db_customer C WHERE OD.BookID = B.BookID AND O.OrderID = OD.OrderID AND C.CustomerID = O.CustomerID GROUP BY C.CustomerID HAVING TotalPurchases < 80) AS temporary;';
     this.query.selectQuery7 = 'SELECT B.Title FROM db_book B, db_supplier S WHERE B.SupplierID = S.SupplierID AND S.company_name = supplier2;';
     this.query.selectQuery8 = 'SELECT C.first_name, C.last_name, SUM(OD.Quantity * B.unit_price) AS TotalPurchases FROM db_book B, db_order_detail OD, db_order O, db_customer C WHERE OD.BookID = B.BookID AND O.OrderID = OD.OrderID AND C.CustomerID = O.CustomerID GROUP BY C.CustomerID ORDER BY TotalPurchases DESC;';
     this.query.selectQuery9 = 'SELECT B.Title, S.shipper_name FROM db_book B, db_shipper S, db_order O, db_order_detail OD WHERE B.BookID = OD.BookID AND OD.OrderID = O.OrderID AND O.ShipperID = S.ShipperID AND O.shipped_date = 8/4/2016;';
     this.query.selectQuery10 = 'SELECT Distinct B.Title FROM db_book B, db_order O, db_order_detail OD, db_customer C WHERE B.BookID = OD.BookID AND OD.OrderID = O.OrderID AND O.CustomerID = C.CustomerID AND C.first_name = firstname1 AND C.last_name = lastname1 AND B.BookID IN (SELECT B1.bookID FROM db_book B1, db_order O1, db_order_detail OD1, db_customer WHERE B1.BookID = OD1.BookID AND OD1.OrderID = O1.OrderID AND O1.CustomerID = C1.CustomerID AND C1.first_name = firstname4 AND C1.last_name = lastname4;';
     this.query.selectQuery11 = 'SELECT B.Title FROM db_book B, db_employee E, db_order O, db_order_detail OD WHERE OD.BookID = B.BookID AND OD.OrderID = O.OrderID AND O.EmployeeID = E.EmployeeID AND E.first_name = firstname6 AND last_name = lastname6;';
     this.query.selectQuery12 = 'SELECT B.Title, OD.Quantity FROM db_book B, db_order_detail OD WHERE B.BookID = OD.BookID ORDER BY OD.Quantity ASC;';
     this.query.selectQuery13 = 'SELECT FirstName, LastName FROM (select C.first_name AS FirstName, C.last_name AS LastName, SUM(OD.Quantity) AS NumberBooksOrdered FROM db_customer C, db_order O, db_order_detail OD WHERE OD.OrderID = O.orderID AND O.CustomerID = C.CustomerID GROUP BY C.CustomerID HAVING NumberBooksOrdered >= 2) AS temporary;';
     this.query.selectQuery14 = 'SELECT C.first_name, C.last_name, B.Title FROM db_customer C, db_subject Sb, db_book B, db_order O, db_order_detail OD WHERE O.OrderID = OD.OrderID AND B.BookID = OD.BookID AND O.CustomerID = C.CustomerID AND B.SubjectID = Sb.SubjectID AND (Sb.category_name = category3 OR Sb.category_name = category4;';
     this.query.selectQuery15 = 'SELECT C.first_name, C.last_name FROM db_order O, db_order_detail OD, db_customer C, db_book B WHERE O.OrderID = OD.OrderID AND O.CustomerID = C.CustomerID AND OD.BookID = B.BookID AND B.Author = author1;';
     this.query.selectQuery16 = 'SELECT E.first_name, E.last_name, SUM(B.unit_price * OD.Quantity) AS TotalSaleOfOrder FROM db_book B, db_employee E, db_order O, db_order_detail OD WHERE O.OrderID = OD.OrderID AND B.BookID = OD.BookID AND O.EmployeeID = E.EmployeeID GROUP BY E.EmployeeID;';
     this.query.selectQuery17 = 'SELECT B.Title, sum(OD.Quantity) AS TotalQuantity FROM db_book B, db_order O, db_order_detail OD WHERE B.BookID = OD.BookID AND O.OrderID = OD.OrderID AND (O.shipped_date is NULL OR O.shipped_date > 8/4/2016 GROUP BY B.Title;';
     this.query.selectQuery18 = 'SELECT C.first_name, C.last_name, SUM(OD.Quantity) AS TotalOrders FROM db_customer C, db_order O, db_order_detail OD WHERE OD.OrderID = O.orderID AND O.CustomerID = C.CustomerID GROUP BY C.CustomerID HAVING TotalOrders > 1 ORDER BY TotalOrders DESC;';
     this.query.selectQuery19 = 'SELECT C.first_name, C.last_name, C.Phone, SUM(OD.Quantity) AS TotalOrders FROM db_customer C, db_order O, db_order_detail OD WHERE OD.OrderID = O.orderID AND O.CustomerID = C.CustomerID GROUP BY C.CustomerID HAVING TotalOrders > 3;';
     this.selectAllBooks = 'SELECT * FROM db_book;';
     this.selectAllCustomers = 'SELECT * FROM db_customer;';
     this.selectAllEmployees = 'SELECT * FROM db_employee;';
     this.selectAllOrders = 'SELECT * FROM db_order;';
     this.selectAllOrderDetails = 'SELECT * FROM db_order_details;';
     this.selectAllShippers = 'SELECT * FROM db_shipper;';
     this.selectAllSubjects = 'SELECT * FROM db_subject;';
     this.selectAllSuppliers = 'SELECT * FROM db_supplier;';
  }

  ngOnInit() {
  }

   onHttpError(errorResponse: any) {
      console.log('error: ', errorResponse);
      this.postError = true;
      this.postErrorMessage = errorResponse.error.errorMessage;
   }

  getActiveTable(): string {
     return this.activeTable
  }

  setActiveTable(tableName: string): void  {
     this.activeTable = tableName;
  }

  onBlur(field: NgModel): boolean {
     this.mySql.statement = field.value;
     const sqlLength = this.mySql.statement.length;
     this.mySql.statement.toLowerCase();
     let i = 0;
     while (i < sqlLength)  {
        if (this.mySql.statement.toLowerCase().charAt(i) === 'd')  {
           i++;
           if (this.mySql.statement.toLowerCase().charAt(i) === 'r')  {
              i++;
              if (this.mySql.statement.toLowerCase().charAt(i) === 'o')  {
                 i++;
                 if (this.mySql.statement.toLowerCase().charAt(i) === 'p')  {
                     return true;
                 }
              }
           }
        }
        else {
           i++;
        }
     }
     return false;
  }

  // Sets the active table to display whenever a SELECT statement is performed.
  onSubmitQuery(form: NgForm): void {
     if (form.valid) {
        if (this.mySql.statement.toLowerCase().startsWith('delete from `bookstore`.`db_customer`')
            || this.mySql.statement.toLowerCase().startsWith('delete from db_customer')) {
           this.deleteCustomer();
        }
        if (this.mySql.statement.toLowerCase().startsWith('delete from `bookstore`.`db_book`')
            || this.mySql.statement.toLowerCase().startsWith('delete from db_book')) {
           this.deleteBook();
        }
        if (this.mySql.statement.toLowerCase().startsWith('delete from `bookstore`.`db_employee`')
            || this.mySql.statement.toLowerCase().startsWith('delete from db_employee')) {
           this.deleteEmployee();
        }
        if (this.mySql.statement.toLowerCase().startsWith('delete from `bookstore`.`db_order`')
            || this.mySql.statement.toLowerCase().startsWith('delete from db_order')) {
           this.deleteOrder();
        }
        if (this.mySql.statement.toLowerCase().startsWith('delete from `bookstore`.`db_shipper`')
            || this.mySql.statement.toLowerCase().startsWith('delete from db_shipper')) {
           this.deleteShipper();
        }
        if (this.mySql.statement.toLowerCase().startsWith('delete from `bookstore`.`db_subject`')
            || this.mySql.statement.toLowerCase().startsWith('delete from db_subject')) {
           this.deleteSubject();
        }
        if (this.mySql.statement.toLowerCase().startsWith('delete from `bookstore`.`db_supplier`')
            || this.mySql.statement.toLowerCase().startsWith('delete from db_supplier')) {
           this.deleteSupplier();
        }
        if (this.mySql.statement.toString().toLowerCase().startsWith('get all')) {
           this.setActiveTable('all');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.query.selectQuery1.toLowerCase()) {
           this.setActiveTable('category-nameOnly-table');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.query.selectQuery2.toLowerCase()) {
           this.setActiveTable('titleAndPrice');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.query.selectQuery3.toLowerCase()) {
           this.setActiveTable('titleOnly');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.query.selectQuery4.toLowerCase()) {
           this.setActiveTable('titleOnlyUnits');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.query.selectQuery5.toLowerCase()) {
           this.setActiveTable('totalPrice');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.query.selectQuery6.toLowerCase()) {
           this.setActiveTable('firstAndLastName');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.query.selectQuery7.toLowerCase()) {
           this.setActiveTable('titleOnlyBySupplier');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.query.selectQuery8.toLowerCase()) {
           this.setActiveTable('firstLastNameAndTotalPurchases');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.query.selectQuery9.toLowerCase()) {
           this.setActiveTable('titleAndShipperName');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.query.selectQuery10.toLowerCase()) {
           this.setActiveTable('titlesOnlyByCustomerOrder');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.query.selectQuery11.toLowerCase()) {
           this.setActiveTable('titleOnlyByEmployee');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.query.selectQuery12.toLowerCase()) {
           this.setActiveTable('titleAndQuantity');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.query.selectQuery13.toLowerCase()) {
           this.setActiveTable('namesByOrderAmount');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.query.selectQuery14.toLowerCase()) {
           this.setActiveTable('firstLastNameAndTitle');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.query.selectQuery15.toLowerCase()) {
           this.setActiveTable('namesByAuthor');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.query.selectQuery16.toLowerCase()) {
           this.setActiveTable('firstLastNameTotalSale');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.query.selectQuery17.toLowerCase()) {
           this.setActiveTable('titleAndTotalQuantity');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.query.selectQuery18.toLowerCase()) {
           this.setActiveTable('firstLastNameAndTotalOrders');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.query.selectQuery19.toLowerCase()) {
           this.setActiveTable('namesWithPhoneAndTotalOrders');
        }
        if (this.mySql.statement.toString()
            .toLowerCase() === this.selectAllBooks.toLowerCase() || this.mySql.statement.toString().toLowerCase()
            .startsWith('select * from db_book')) {
           this.setActiveTable('bookTable');
        }
        if (this.mySql.statement.toString()
            .toLowerCase() === this.selectAllCustomers.toLowerCase() || this.mySql.statement.toString().toLowerCase()
            .startsWith('select * from db_customer')) {
           this.setActiveTable('customerTable');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.selectAllEmployees
            .toLowerCase() || this.mySql.statement.toString().toLowerCase()
            .startsWith('select * from db_employee')) {
           this.setActiveTable('employeeTable');
        }
        if (this.mySql.statement.toString()
            .toLowerCase() === this.selectAllOrders.toLowerCase() || this.mySql.statement.toString().toLowerCase()
            .startsWith('select * from db_order')) {
           this.setActiveTable('orderTable');
        }
        if (this.mySql.statement.toString()
            .toLowerCase() === this.selectAllOrderDetails.toLowerCase() || this.mySql.statement.toString().toLowerCase()
            .startsWith('select * from db_order_details')) {
           this.setActiveTable('orderDetailsTable');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.selectAllSuppliers.toLowerCase() || this.mySql.statement.toString().toLowerCase()
            .startsWith('select * from db_supplier')) {
           this.setActiveTable('supplierTable');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.selectAllSubjects.toLowerCase() || this.mySql.statement.toString().toLowerCase()
            .startsWith('select * from db_subject')) {
           this.setActiveTable('subjectTable');
        }
        if (this.mySql.statement.toString().toLowerCase() === this.selectAllShippers.toLowerCase() || this.mySql.statement.toString().toLowerCase()
            .startsWith('select * from db_shipper')) {
           this.setActiveTable('shipperTable');
        }
        if (this.mySql.statement.toLowerCase().startsWith('insert into `db_book`')
            || this.mySql.statement.toLowerCase().startsWith('insert into db_book')) {
           this.createBookHandler();
        }
        if (this.mySql.statement.toLowerCase().startsWith('insert into `db_customer`')
            || this.mySql.statement.toLowerCase().startsWith('insert into db_customer')) {
           this.createCustomerHandler();
        }
        if (this.mySql.statement.toLowerCase().startsWith('insert into `db_employee`')
        || this.mySql.statement.toLowerCase().startsWith('insert into db_employee')) {
           this.createEmployeeHandler();
        }
        if (this.mySql.statement.toLowerCase().startsWith('insert into `db_order`')
            || this.mySql.statement.toLowerCase().startsWith('insert into db_order')) {
           this.createOrderHandler();
        }
        if (this.mySql.statement.toLowerCase().startsWith('insert into `db_shipper`')
            || this.mySql.statement.toLowerCase().startsWith('insert into db_shipper')) {
           this.createShipperHandler();
        }
        if (this.mySql.statement.toLowerCase().startsWith('insert into `db_subject`')
            || this.mySql.statement.toLowerCase().startsWith('insert into db_subject')) {
           this.createSubjectHandler();
        }
        if (this.mySql.statement.toLowerCase().startsWith('insert into `db_supplier`')
            || this.mySql.statement.toLowerCase().startsWith('insert into db_supplier')) {
           this.createSupplierHandler();
        }
     }

   }

  // Create new book statement.
   createBookHandler(): void  {
     const x = this.mySql.statement.indexOf('(');
     const y = this.mySql.statement.indexOf(')');

     this.attributeString = this.mySql.statement.substring(x + 1, y).trim();
     let id = this.attributeString.split(',').splice(0,1).toString().trim();
     this.book.bookID = parseInt(id);
     this.book.title = this.attributeString.split(',').splice(1,1).toString().trim();
     this.book.unitPrice = this.attributeString.split(',').splice(2,1).toString().trim();
     this.book.author = this.attributeString.split(',').splice(3,1).toString().trim();
     let quantity = this.attributeString.split(',').splice(4,1).toString().trim();
     this.book.quantity = parseInt(quantity);
     let subjectID = this.attributeString.split(',').splice(5, 1).toString().trim();
     let supplierID = this.attributeString.split(',').splice(6,1).toString().trim();
     this.book.supplierID = parseInt(subjectID);
     this.book.subjectID = parseInt(supplierID);

     this.book = new Book(this.book.bookID, this.book.title, this.book.unitPrice, this.book.author,
         this.book.quantity, this.book.subjectID, this.book.supplierID);

     this.dataService.createBook(this.book).subscribe(
         result => console.log('success: ', result),
         error => this.onHttpError(error)
     );
   }

  // Create new customer statement.
  createCustomerHandler(): void {
     const x = this.mySql.statement.indexOf('(');
     const y = this.mySql.statement.indexOf(')');

     this.attributeString = this.mySql.statement.substring(x + 1, y).trim();
     this.customer.phone = this.attributeString.split(',').splice(3,1).toString().trim();
     this.customer.lastName = this.attributeString.split(',').splice(2, 1).toString().trim();
     this.customer.firstName = this.attributeString.split(',').splice(1, 1).toString().trim();
     let id = this.attributeString.split(',').splice(0, 1).toString().trim();
     this.customer.customerID = parseInt(id);
     this.customer = new Customer(this.customer.customerID, this.customer.lastName,
         this.customer.firstName, this.customer.phone);

     this.dataService.createCustomer(this.customer).subscribe(
          result => console.log('success: ', result),
          error => this.onHttpError(error)
        );

  }

  // create a new employee
   createEmployeeHandler(): void    {
      const a = this.mySql.statement.indexOf('(');
      const b = this.mySql.statement.indexOf(')');

      this.attributeString = this.mySql.statement.substring(a + 1, b).trim();
      let id = this.attributeString.split(',').splice(0, 1).toString().trim();
      this.employee.employeeID = parseInt(id);
      this.employee.firstName = this.attributeString.split(',').splice(1, 1).toString().trim();
      this.employee.lastName = this.attributeString.split(',').splice(2, 1).toString().trim();

      this.employee = new Employee(this.employee.employeeID, this.employee.firstName, this.employee.lastName);

      this.dataService.createEmployee(this.employee).subscribe(
          result => console.log('success: ', result),
          error => this.onHttpError(error)
      );
   }

   // create a new order
   createOrderHandler(): void    {
     const n = this.mySql.statement.indexOf('(');
     const o = this.mySql.statement.indexOf(')');

     this.attributeString = this.mySql.statement.substring(n + 1, o).trim();
     console.log(this.attributeString);
     let orderId = this.attributeString.split(',').splice(0,1).toString().trim();
     let customerId = this.attributeString.split(',').splice(1, 1).toString().trim();
     let employeeId = this.attributeString.split(',').splice(2, 1).toString().trim();

     this.order.orderID = parseInt(orderId);
     this.order.customerID = parseInt(customerId);
     this.order.employeeID = parseInt(employeeId);
     this.order.orderDate = this.attributeString.split(',').splice(3,1).toString().trim();
     this.order.shippedDate = this.attributeString.split(',').splice(4,1).toString().trim();
     let shipperId = this.attributeString.split(',').splice(5,1).toString().trim();
     this.order.shipperID = parseInt(shipperId);

      this.order = new Order(this.order.orderID, this.order.customerID, this.order.employeeID, this.order.orderDate,
                        this.order.shippedDate, this.order.shipperID);
      this.dataService.createOrder(this.order).subscribe(
          result => console.log('success: ', result),
          error => this.onHttpError(error)
      );
   }

   createShipperHandler(): void  {
      const n = this.mySql.statement.indexOf('(');
      const o = this.mySql.statement.indexOf(')');

      this.attributeString = this.mySql.statement.substring(n + 1, o).trim();
      let id = this.attributeString.split(',').splice(0, 1).toString().trim();
      this.shipper.shipperID = parseInt(id);
      this.shipper.shipper_name = this.attributeString.split(',').splice(1, 1).toString().trim();

      this.shipper = new Shipper(this.shipper.shipperID, this.shipper.shipper_name);

      this.dataService.createShipper(this.shipper).subscribe(
          result => console.log('success: ', result),
          error => this.onHttpError(error)
      );
  }

   createSubjectHandler(): void  {
     const a = this.mySql.statement.indexOf('(');
     const b = this.mySql.statement.indexOf(')');

     this.attributeString = this.mySql.statement.substring(a + 1, b).trim();
     let id = this.attributeString.split(',').splice(0, 1).toString().trim();
     this.subject.subjectID = parseInt(id);
     this.subject.category_name = this.attributeString.split(',').splice(1, 1).toString().trim();

     this.subject = new Subject(this.subject.subjectID, this.subject.category_name);

      this.dataService.createSubject(this.subject).subscribe(
          result => console.log('success: ', result),
          error => this.onHttpError(error)
      );

   }

   createSupplierHandler(): void {
      const x = this.mySql.statement.indexOf('(');
      const y = this.mySql.statement.indexOf(')');

      this.attributeString = this.mySql.statement.substring(x + 1, y).trim();
      let id = this.attributeString.split(',').splice(0, 1).toString().trim();
      this.supplier.supplierID = parseInt(id);
      this.supplier.companyName = this.attributeString.split(',').splice(1, 1).toString().trim();
      this.supplier.contactFirstName = this.attributeString.split(',').splice(2, 1).toString().trim();
      this.supplier.contactLastName = this.attributeString.split(',').splice(3, 1).toString().trim();
      this.supplier.phone = this.attributeString.split(',').splice(4,1).toString().trim();

      this.supplier = new Supplier(this.supplier.supplierID, this.supplier.companyName, this.supplier.contactFirstName,
                  this.supplier.contactLastName, this.supplier.phone);

      this.dataService.createSupplier(this.supplier).subscribe(
          result => console.log('success: ', result),
          error => this.onHttpError(error)
      );
   }

   deleteBook(): void   {
     const y = this.mySql.statement.indexOf('=');

     let id1 = this.mySql.statement.charAt(y + 3).toString().trim();
     if (this.mySql.statement.charAt(y + 4).toString() != '`') {
        let id = this.mySql.statement.substring(y+3, y+5).toString().trim();
        this.book.bookID = parseInt(id);
     }
     else   {
        this.book.bookID = parseInt(id1);
     }

      this.dataService.deleteBook(this.book.bookID).subscribe(
          result => console.log('success', result),
          error => this.onHttpError(error)
      );

   }

   deleteCustomer(): void  {
      const y = this.mySql.statement.indexOf('=');

      let id = this.mySql.statement.charAt(y + 3).toString().trim();
      let customerID = parseInt(id);

      this.dataService.deleteCustomer(customerID).subscribe(
          result => console.log('success', result),
          error => this.onHttpError(error)
      );
   }

   deleteEmployee(): void  {
     const y = this.mySql.statement.indexOf('=');

     let id = this.mySql.statement.charAt(y + 3).toString().trim();
     let employeeID = parseInt(id);

      this.dataService.deleteEmployee(employeeID).subscribe(
          result => console.log('success', result),
          error => this.onHttpError(error)
      );
   }

   deleteOrder(): void  {
      const y = this.mySql.statement.indexOf('=');

      let id = this.mySql.statement.charAt(y + 3).toString().trim();
      let orderID = parseInt(id);

      this.dataService.deleteOrder(orderID).subscribe(
          result => console.log('success', result),
          error => this.onHttpError(error)
      );
   }

   deleteShipper(): void {
      const y = this.mySql.statement.indexOf('=');

      let id = this.mySql.statement.charAt(y + 3).toString().trim();
      let shipperID = parseInt(id);

      this.dataService.deleteShipper(shipperID).subscribe(
          result => console.log('success', result),
          error => this.onHttpError(error)
      );
   }

   deleteSubject(): void   {
      const y = this.mySql.statement.indexOf('=');

      let id = this.mySql.statement.charAt(y + 3).toString().trim();
      let subjectID = parseInt(id);

      this.dataService.deleteSubject(subjectID).subscribe(
          result => console.log('success', result),
          error => this.onHttpError(error)
      );
   }

   deleteSupplier(): void  {
      const y = this.mySql.statement.indexOf('=');

      let id = this.mySql.statement.charAt(y + 3).toString().trim();
      let supplierID = parseInt(id);

      this.dataService.deleteSupplier(supplierID).subscribe(
          result => console.log('success', result),
          error => this.onHttpError(error)
      );
   }


}
