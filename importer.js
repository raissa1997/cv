const uploadedImageDiv=document.getElementById("uploadedImage");
const fileUpload=document.getElementById("fileUpload");
 fileUpload.addEventListener("change", getImage, false);
 let cropper = null;
const cropButton = document.getElementById("cropButton");
cropButton.addEventListener("click", cropImage);
let myGreatImage = null;
const croppedImage = document.getElementById("croppedImage");

function getImage(){
    console.log("images", this.files[0]);
    const imageToProcess = this.files[0];

    // display uploaded images

    let newImg = new Image(imageToProcess.width, imageToProcess.height);
    newImg.src = imageToProcess;
    newImg.src = URL.createObjectURL(imageToProcess) ;
    newImg.id ="myGreatImage";
    newImg.style.width="150px";
    newImg.style.height="150px";
    newImg.style.borderRadius="50%";
    newImg.style.marginRight="5px";
    newImg.style.marginTop="0px";
    //uploadedImageDiv.style.border="2px solid blue";
    uploadedImageDiv.appendChild(newImg); 
    myGreatImage = document.getElementById("myGreatImage");

    processImage();
    //const inputn=document.querySelector('#fileUpload');
   // const ouputn=document.querySelector('#uploadedImage');
   // inputn.addEventListener('input',(event)=>{
       // const name =event.target.value;
       // document.querySelector('#uploadedImage').textContent=name;
    //});

   } 
   function processImage(){
    cropButton.style.display = "block";
    cropper = new Cropper(myGreatImage, {
      aspectRatio: 1,
      crop(event) {
        console.log(
          Math.round(event.detail.width),
          Math.round(event.detail.height)
        );
        const canvas = this.cropper.getCroppedCanvas();
        croppedImage.src = canvas.toDataURL("image/png");
      }
    });

   }
   function cropImage() {
    const imgurl = cropper.getCroppedCanvas().toDataURL();
    const img = document.createElement("img");
    img.src = imgurl;
    document.getElementById("cropResult").appendChild(img);
  }

