import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


import { Book } from '../models/book';
import { Customer } from '../models/customer';
import { Employee } from '../models/employee';
import { Order } from '../models/order';
import { Shipper } from '../models/shipper';
import { Subject } from '../models/subject';
import { Supplier} from '../models/supplier';
import {SubjectCategoryName} from '../models/subjectCategoryName';
import {TitleAndPrice} from '../models/titleAndPrice';
import {TitleOnly} from '../models/titleOnly';
import {TotalPrice} from '../models/totalPrice';
import {FirstAndLastName} from '../models/firstAndLastName';
import {FirstLastNameTotalPurchases} from '../models/firstLastNameTotalPurchases';
import {TitleAndShipperName} from '../models/titleAndShipperName';
import {TitleAndQuantity} from '../models/titleAndQuantity';
import {FirstLastNameAndTitle} from '../models/firstLastNameAndTitle';
import {FirstLastNameTotalSale} from '../models/firstLastNameTotalSale';
import {TitleAndTotalQuantity} from '../models/titleAndTotalQuantity';
import {FirstLastNameAndTotalOrders} from '../models/firstLastNameAndTotalOrders';
import {FirstLastNameAndPhoneAndTotalOrders} from '../models/firstLastNameAndPhoneAndTotalOrders';
import {TitleOnlyByUnits} from '../models/titleOnlyByUnits';
import {TitleOnlyBySupplier} from '../models/titleOnlyBySupplier';
import {TitleOnlyByCustomerOrder} from '../models/titleOnlyByCustomerOrder';
import {TitleOnlyByEmployee} from '../models/titleOnlyByEmployee';
import {NamesByOrderAmount} from '../models/namesByOrderAmount';
import {NamesByAuthor} from '../models/namesByAuthor';
import {Observable} from 'rxjs';
import {OrderDetails} from '../models/orderDetails';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class DataService {

   private readonly allBooksUrl: string;
   private readonly allCustomersUrl: string;
   private readonly allEmployeesUrl: string;
   private readonly allOrdersUrl: string;
   private readonly allOrderDetailsUrl: string;
   private readonly allShippersUrl: string;
   private readonly allSubjectsUrl: string;
   private readonly allSuppliersUrl: string;
   private readonly query1Url: string;
   private readonly query2Url: string;
   private readonly query3Url: string;
   private readonly query4Url: string;
   private readonly query5Url: string;
   private readonly query6Url: string;
   private readonly query7Url: string;
   private readonly query8Url: string;
   private readonly query9Url: string;
   private readonly query10Url: string;
   private readonly query11Url: string;
   private readonly query12Url: string;
   private readonly query13Url: string;
   private readonly query14Url: string;
   private readonly query15Url: string;
   private readonly query16Url: string;
   private readonly query17Url: string;
   private readonly query18Url: string;
   private readonly query19Url: string;

   // POST or create entity endpoints.
   private readonly postNewBookUrl: string;
   private readonly postNewCustomerUrl: string;
   private readonly postNewEmployeeUrl: string;
   private readonly postNewOrderUrl: string;
   private readonly postNewShipperUrl: string;
   private readonly postNewSubjectUrl: string;
   private readonly postNewSupplierUrl: string;

   // DELETE entity endpoints.
   private readonly deleteBookUrl: string;
   private readonly deleteCustomerUrl: string;
   private readonly deleteEmployeeUrl: string;
   private readonly deleteOrderUrl: string;
   private readonly deleteShipperUrl: string;
   private readonly deleteSubjectUrl: string;
   private readonly deleteSupplierUrl: string;


   constructor(private http: HttpClient) {
    // setting the constant urls that are defined in the project.
     this.allBooksUrl = 'http://localhost:8080/api/allBooks';
     this.allCustomersUrl = 'http://localhost:8080/api/allCustomers';
     this.allEmployeesUrl = 'http://localhost:8080/api/allEmployees';
     this.allOrdersUrl = 'http://localhost:8080/api/allOrders';
     this.allOrderDetailsUrl = 'http://localhost:8080/api/allOrderDetails';
     this.allShippersUrl = 'http://localhost:8080/api/allShippers';
     this.allSubjectsUrl = 'http://localhost:8080/api/allSubjects';
     this.allSuppliersUrl = 'http://localhost:8080/api/allSuppliers';
     this.postNewBookUrl = 'http://localhost:8080/api/add/book';
     this.postNewCustomerUrl = 'http://localhost:8080/api/add/customer';
     this.postNewEmployeeUrl = 'http://localhost:8080/api/add/employee';
     this.postNewOrderUrl = 'http://localhost:8080/api/add/order';
     this.postNewShipperUrl = 'http://localhost:8080/api/add/shipper';
     this.postNewSubjectUrl = 'http://localhost:8080/api/add/subject';
     this.postNewSupplierUrl = 'http://localhost:8080/api/add/supplier';
     this.deleteBookUrl = 'http://localhost:8080/api/delete/book/';
     this.deleteCustomerUrl = 'http://localhost:8080/api/delete/customer/';
     this.deleteEmployeeUrl = 'http://localhost:8080/api/delete/employee/';
     this.deleteOrderUrl = 'http://localhost:8080/api/delete/order/';
     this.deleteShipperUrl = 'http://localhost:8080/api/delete/shipper/';
     this.deleteSubjectUrl = 'http://localhost:8080/api/delete/subject/';
     this.deleteSupplierUrl = 'http://localhost:8080/api/delete/suplier/';
     this.query1Url = 'http://localhost:8080/api/books/categoryName/bySupplierID/withCompanyName/2/supplier2';
     this.query2Url = 'http://localhost:8080/api/books/bySupplier/mostExpensiveFrom/3';
     this.query3Url = 'http://localhost:8080/api/books/unique/byFirstLast/firstname1/lastname1';
     this.query4Url = 'http://localhost:8080/api/books/byTitles/inStock/moreThan/10';
     this.query5Url = 'http://localhost:8080/api/orders/byFirstLast/totalPrice/firstname1/lastname1';
     this.query6Url = 'http://localhost:8080/api/orders/byAmount/customersSpent/greaterThan/80';
     this.query7Url = 'http://localhost:8080/api/books/bySupplierName/supplier2';
     this.query8Url = 'http://localhost:8080/api/orders/byTotalPurchases/orderDescending';
     this.query9Url = 'http://localhost:8080/api/books/byShippedDate/8/4/2016';
     this.query10Url = 'http://localhost:8080/api/books/unique/thatBoth/customerX/customerY/ordered/firstname1/lastname1/firstname4/lastname4';
     this.query11Url = 'http://localhost:8080/api/books/titles/byEmployeeName/responsibleFor/firstname6/lastname6';
     this.query12Url = 'http://localhost:8080/api/orders/allTitles/quantityOrdered/ascending';
     this.query13Url = 'http://localhost:8080/api/orders/booksCustomersHaveOrdered/atLeast/2';
     this.query14Url = 'http://localhost:8080/api/orders/byCategoryName/customersOrdered/fromCategory/category3/category4';
     this.query15Url = 'http://localhost:8080/api/orders/byCustomerName/orderedBook/writtenBy/author1';
     this.query16Url = 'http://localhost:8080/api/orders/employeesNames/totalSales';
     this.query17Url = 'http://localhost:8080/api/orders/byDate/bookTitlesAndQuantities/notYetShipped';
     this.query18Url = 'http://localhost:8080/api/customers/byOrders/customerNames/1/results/listByQuantity/descending';
     this.query19Url = 'http://localhost:8080/api/customers/orderedMoreThan/3/show/telephone/true';

     // all the post/create entity urls.

  }

  ///////////////////////////////////////////////////
  // ALL the get DATA methods.
  ////////////////////////////////////////////////////

  getAllBooks(): Observable<Book[]>  {
    return this.http.get<Book[]>(this.allBooksUrl);
  }

  getAllCustomers():Observable<Customer[]>   {
     return this.http.get<Customer[]>(this.allCustomersUrl);
  }

  getAllEmployees():Observable<Employee[]>   {
     return this.http.get<Employee[]>(this.allEmployeesUrl);
  }

  getAllOrders():Observable<Order[]>   {
     return this.http.get<Order[]>(this.allOrdersUrl);
  }

  getAllOrderDetails(): Observable<OrderDetails[]> {
      return this.http.get<OrderDetails[]>(this.allOrderDetailsUrl)
  }

  getAllShippers():Observable<Shipper[]>  {
     return  this.http.get<Shipper[]>(this.allShippersUrl);
  }

  getAllSubjects():Observable<Subject[]>  {
     return this.http.get<Subject[]>(this.allSubjectsUrl);
  }

  getAllSuppliers():Observable<Supplier[]>   {
     return this.http.get<Supplier[]>(this.allSuppliersUrl);
  }

  // 1
  getCategoryOfBooksBySupplier(): Observable<SubjectCategoryName[]> {
     return this.http.get<SubjectCategoryName[]>(this.query1Url);
   }


  // 2
   getMostExpensiveBookBySupplier(): Observable<TitleAndPrice[]>  {
     return this.http.get<TitleAndPrice[]>(this.query2Url);
   }

   // 3
   getUniqueNamesOrderedByCustomerName(): Observable<TitleOnly[]> {
     return this.http.get<TitleOnly[]>(this.query3Url);
   }

   // 4
   getBooksWithMoreThan10Units(): Observable<TitleOnlyByUnits[]>   {
     return this.http.get<TitleOnlyByUnits[]>(this.query4Url);
   }

   // 5
   getTotalSpentByCustomerName(): Observable<number>  {
     return this.http.get<number>(this.query5Url);
   }

   // 6
   customersSpentMoreThan80(): Observable<FirstAndLastName[]>  {
     return this.http.get<FirstAndLastName[]>(this.query6Url);
   }

   // 7
   bookTitlesFromSupplier2(): Observable<TitleOnlyBySupplier[]> {
     return this.http.get<TitleOnlyBySupplier[]>(this.query7Url);
   }

   // 8
   getNamesAndTotalPriceCustomersPaidDescending(): Observable<FirstLastNameTotalPurchases[]> {
     return this.http.get<FirstLastNameTotalPurchases[]>(this.query8Url);
   }

   // 9
   titlesOfBooksShippedOnFourth(): Observable<TitleAndShipperName[]> {
     return this.http.get<TitleAndShipperName[]>(this.query9Url);
   }

   // 10
   booksThatCustomer1And4BothOrdered(): Observable<TitleOnlyByCustomerOrder[]>  {
     return this.http.get<TitleOnlyByCustomerOrder[]>(this.query10Url);
   }

   // 11
   getBookTitleEmployee6Responsible(): Observable<TitleOnlyByEmployee[]> {
     return this.http.get<TitleOnlyByEmployee[]>(this.query11Url);
   }

   // 12
   getAllBooksOrderedAndQuantitiesAscending(): Observable<TitleAndQuantity[]>   {
     return this.http.get<TitleAndQuantity[]>(this.query12Url);
   }

   // 13
   getCustomerThatOrderedAtLeastTwo(): Observable<NamesByOrderAmount[]>   {
     return this.http.get<NamesByOrderAmount[]>(this.query13Url);
   }

   // 14
   customerOrderedCat3AndCat4(): Observable<FirstLastNameAndTitle[]> {
     return this.http.get<FirstLastNameAndTitle[]>(this.query14Url);
   }

   // 15
   customersOrderedBookByAuthor1(): Observable<NamesByAuthor[]>   {
     return this.http.get<NamesByAuthor[]>(this.query15Url);
   }

   // 16
   employeeNameAndTotalSale(): Observable<FirstLastNameTotalSale[]>  {
     return this.http.get<FirstLastNameTotalSale[]>(this.query16Url);
   }

   // 17
   openOrdersAfterAugust4(): Observable<TitleAndTotalQuantity[]>  {
     return this.http.get<TitleAndTotalQuantity[]>(this.query17Url);
   }

   // 18
   orderedMoreThan1BookDescendingQuantity(): Observable<FirstLastNameAndTotalOrders[]>  {
     return this.http.get<FirstLastNameAndTotalOrders[]>(this.query18Url);
   }

   // 19
   moreThan3AndPhone(): Observable<FirstLastNameAndPhoneAndTotalOrders[]>   {
     return this.http.get<FirstLastNameAndPhoneAndTotalOrders[]>(this.query19Url);
   }


   /////////////////////////////////////
   // All the create Methods. (POST)
   /////////////////////////////////////

   public createBook(book: Book): Observable<Book> {
      return this.http.post<Book>(this.postNewBookUrl, book);
   }

   public createCustomer(customer: Customer): Observable<Customer>  {
      return this.http.post<Customer>(this.postNewCustomerUrl, customer);
   }

   public createEmployee(employee: Employee): Observable<Employee> {
      return this.http.post<Employee>(this.postNewEmployeeUrl, employee);
   }

   public createOrder(order: Order): Observable<Order> {
      return this.http.post<Order>(this.postNewOrderUrl, order);
   }

   public createShipper(shipper: Shipper): Observable<Order> {
      return this.http.post<Order>(this.postNewShipperUrl, shipper);
   }

   public createSubject(subject: Subject): Observable<Subject> {
      return this.http.post<Subject>(this.postNewSubjectUrl, subject);
   }

   public createSupplier(supplier: Supplier): Observable<Supplier> {
      return this.http.post<Supplier>(this.postNewSupplierUrl, supplier);
   }


   ////////////////////////////////////////
   // All the delete methods (DELETE)
   ////////////////////////////////////////

   public deleteBook(bookID: number): Observable<any>  {
      return this.http.delete(this.deleteBookUrl + bookID);
   }

   public deleteCustomer(customerID: number): Observable<any>  {
      return this.http.delete(this.deleteCustomerUrl + customerID.toString());
   }

   public deleteEmployee(employeeID: number): Observable<any>  {
      return this.http.delete(this.deleteEmployeeUrl + employeeID.toString());
   }

   public deleteOrder(orderID: number): Observable<any>  {
      return this.http.delete(this.deleteOrderUrl + orderID.toString());
   }

   public deleteShipper(shipperID: number): Observable<any> {
      return this.http.delete(this.deleteShipperUrl + shipperID.toString());
   }

   public deleteSubject(subjectID: number): Observable<any> {
      return this.http.delete(this.deleteSubjectUrl + subjectID.toString());
   }

   public deleteSupplier(supplierID: number): Observable<any>  {
      return this.http.delete(this.deleteSupplierUrl + supplierID.toString());
   }



}
