// *****Function to print/save invoice in pdf format***** //
var printbtn = document.getElementById("createpdf");
printbtn.addEventListener("click", hidebtnprint);

function hidebtnprint() {
    window.print();
  }