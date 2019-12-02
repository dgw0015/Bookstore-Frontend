export class Queries {

   selectQuery1 = "SELECT S.category_name FROM bookstore.db_book B, db_subject S, db_supplier P WHERE B.SupplierID = 2 AND B.SubjectID = S.SubjectID AND P.company_name = supplier2;";

   selectQuery2 = 'SELECT B.Title, B.unit_price FROM bookstore.db_book B where B.SupplierID = 3 AND B.unit_price = (select MAX(B2.unit_price) from bookstore.db_book B2 WHERE B2.SupplierID = 3 AND B2.unit_price);';

   selectQuery3 = 'SELECT Distinct B.Title FROM db_book B, db_order O, db_order_detail OD, db_customer C WHERE B.BookID = OD.BookID AND OD.OrderID = O.OrderID AND O.CustomerID = C.CustomerID AND C.last_name = \'lastname1\' AND C.first_name = \'firstname1\';';

   selectQuery4 = 'SELECT B.Title FROM bookstore.db_book B WHERE B.Quantity > 10;';

   selectQuery5 = 'SELECT SUM(OD.Quantity*B.unit_price) FROM db_book B, db_order_detail OD, db_order O, db_customer C WHERE OD.BookID = B.BookID AND O.OrderID = OD.OrderID AND C.CustomerID = O.CustomerID AND C.first_name = \'firstname1\' AND C.last_name = \'lastname1\';';

   selectQuery6 = 'SELECT FirstName, LastName FROM (SELECT C.first_name AS FirstName, C.last_name AS LastName, SUM(OD.Quantity * B.unit_price) AS TotalPurchases FROM db_book B, db_order_detail OD, db_order O, db_customer C WHERE OD.BookID = B.BookID AND O.OrderID = OD.OrderID AND C.CustomerID = O.CustomerID GROUP BY C.CustomerID HAVING TotalPurchases < 80) AS temporary;';

   selectQuery7 = 'SELECT B.Title FROM db_book B, db_supplier S WHERE B.SupplierID = S.SupplierID AND S.company_name = \'supplier2\';';

   selectQuery8 = 'SELECT C.first_name, C.last_name, SUM(OD.Quantity * B.unit_price) AS TotalPurchases FROM db_book B, db_order_detail OD, db_order O, db_customer C WHERE OD.BookID = B.BookID AND O.OrderID = OD.OrderID AND C.CustomerID = O.CustomerID GROUP BY C.CustomerID ORDER BY TotalPurchases DESC;';

   selectQuery9 = 'SELECT B.Title, S.shipper_name FROM db_book B, db_shipper S, db_order O, db_order_detail OD WHERE B.BookID = OD.BookID AND OD.OrderID = O.OrderID AND O.ShipperID = S.ShipperID AND O.shipped_date = \'8/4/2016\';';

   selectQuery10 = 'SELECT Distinct B.Title FROM db_book B, db_order O, db_order_detail OD, db_customer C WHERE B.BookID = OD.BookID AND OD.OrderID = O.OrderID AND O.CustomerID = C.CustomerID AND C.first_name=\'firstname1\' AND C.last_name=\'lastname1\' AND B.BookID IN (SELECT B1.bookID FROM db_book B1, db_order O1, db_order_detail OD1, db_customer WHERE B1.BookID = OD1.BookID AND OD1.OrderID = O1.OrderID AND O1.CustomerID = C1.CustomerID AND C1.first_name=\'firstname4\' AND C1.last_name=\'lastname4\');';

   selectQuery11 = 'SELECT B.Title FROM db_book B, db_employee E, db_order O, db_order_detail OD WHERE OD.BookID = B.BookID AND OD.OrderID = O.OrderID AND O.EmployeeID = E.EmployeeID AND E.first_name = \'firstname6\' AND last_name=\'lastname6\';';

   selectQuery12 = 'SELECT B.Title, OD.Quantity FROM db_book B, db_order_detail OD WHERE B.BookID = OD.BookID ORDER BY OD.Quantity ASC;';

   selectQuery13 = 'SELECT FirstName, LastName FROM (select C.first_name AS FirstName, C.last_name AS LastName, SUM(OD.Quantity) AS NumberBooksOrdered FROM db_customer C, db_order O, db_order_detail OD WHERE OD.OrderID = O.orderID AND O.CustomerID = C.CustomerID GROUP BY C.CustomerID HAVING NumberBooksOrdered >= 2) AS temporary;';

   selectQuery14 = 'SELECT C.first_name, C.last_name, B.Title FROM db_customer C, db_subject Sb, db_book B, db_order O, db_order_detail OD WHERE O.OrderID = OD.OrderID AND B.BookID = OD.BookID AND O.CustomerID = C.CustomerID AND B.SubjectID = Sb.SubjectID AND (Sb.category_name = \'category3\' OR Sb.category_name = \'category4\');';

   selectQuery15 = 'SELECT C.first_name, C.last_name FROM db_order O, db_order_detail OD, db_customer C, db_book B WHERE O.OrderID = OD.OrderID AND O.CustomerID = C.CustomerID AND OD.BookID = B.BookID AND B.Author = \'author1\';';

   selectQuery16 = 'SELECT E.first_name, E.last_name, SUM(B.unit_price * OD.Quantity) AS TotalSaleOfOrder FROM db_book B, db_employee E, db_order O, db_order_detail OD WHERE O.OrderID = OD.OrderID AND B.BookID = OD.BookID AND O.EmployeeID = E.EmployeeID GROUP BY E.EmployeeID;';

   selectQuery17 = 'SELECT B.Title, sum(OD.Quantity) AS TotalQuantity FROM db_book B, db_order O, db_order_detail OD WHERE B.BookID = OD.BookID AND O.OrderID = OD.OrderID AND (O.shipped_date is NULL OR O.shipped_date > \'8/4/2016\') GROUP BY B.Title;';

   selectQuery18 = 'SELECT C.first_name, C.last_name, SUM(OD.Quantity) AS TotalOrders FROM db_customer C, db_order O, db_order_detail OD WHERE OD.OrderID = O.orderID AND O.CustomerID = C.CustomerID GROUP BY C.CustomerID HAVING TotalOrders > 1 ORDER BY TotalOrders DESC;';

   selectQuery19 = 'SELECT C.first_name, C.last_name, C.Phone, SUM(OD.Quantity) AS TotalOrders FROM db_customer C, db_order O, db_order_detail OD WHERE OD.OrderID = O.orderID AND O.CustomerID = C.CustomerID GROUP BY C.CustomerID HAVING TotalOrders > 3;';

}
