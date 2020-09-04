// ***** Written in jQuery ***** //
// *****Function to print/save invoice in pdf format***** //
// $(document).ready(() => {
  
//   let specialElementHandlers = {
//     '#editor':(element, renderer) => {
//       return true;
//     }
//   };

//   $(".createPdf").click(() => {
//     let doc = new jsPDF();
//     pdfContent = $("#table").html();
    
//     doc.fromHTML(pdfContent, 15, 15, {
//       'width': 170,
//       'elementHandlers': specialElementHandlers
//     });

//     // ***** Save the PDF ***** //
//     doc.save('YourInvoie.pdf')
//     console.log("Add print pdf fuctinallilty");

//   })

// });