export class Supplier {
   supplierID: number;
   companyName: string;
   contactFirstName: string;
   contactLastName: string;
   phone: string;

   constructor(supplierID: number, companyName: string, contactFirstName: string,
               contactLastName: string, phone: string)  {

      this.supplierID = supplierID;
      this.companyName = companyName;
      this.contactFirstName = contactFirstName;
      this.contactLastName = contactLastName;
      this.phone = phone;
   }

}
