/* Defines a Book entity. */
export class Book   {
   bookID: number;
   title: string;
   unitPrice: string;
   author: string;
   quantity: number;
   supplierID: number;
   subjectID: number;

   constructor(bookID: number, title: string, unitPrice: string, author: string,
               quantity: number, supplierID: number, subjectID: number) {
      this.bookID = bookID;
      this.title = title;
      this.unitPrice = unitPrice;
      this.author = author;
      this.quantity = quantity;
      this.supplierID = supplierID;
      this.subjectID = subjectID;
   }
}
