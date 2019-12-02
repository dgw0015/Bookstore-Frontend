export class Order {
   orderID: number;
   customerID: number;
   employeeID: number;
   orderDate: string;
   shippedDate: string;
   shipperID: number;

   constructor(orderID: number, customerID: number, employeeID: number, orderDate: string,
               shipperDate: string, shipperID: number)  {

      this.orderID = orderID;
      this.customerID = customerID;
      this.employeeID = employeeID;
      this.orderDate = orderDate;
      this.shippedDate = shipperDate;
      this.shipperID = shipperID;
   }

}
