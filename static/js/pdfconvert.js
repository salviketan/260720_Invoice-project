// *****Function to print/save invoice in pdf format***** //
var printbtn = document.getElementById("createpdf");
printbtn.addEventListener("click", printPdf);

function printPdf() {
  window.print();
}

// *****Function to upload image***** //
window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
    if (this.files && this.files[0]) {
      var img = document.querySelector('img');  // $('img')[0]
      img.src = URL.createObjectURL(this.files[0]); // set src to blob url
      img.onload = imageIsLoaded;
    }
  });
});

// function imageIsLoaded() { 
//   alert("Your image is uploaded.");  
// }