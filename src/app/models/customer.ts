export class Customer {
   customerID: number;
   lastName: string;
   firstName: string;
   phone: string;

   constructor(customerID: number, firstName: string, lastName: string, phone: string) {
      this.customerID = customerID;
      this.lastName = lastName;
      this.firstName = firstName;
      this.phone = phone;
   }
}
