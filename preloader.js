this.addEventListener("DOMContentLoaded", preloadImages, true);

function preloadImages(e) {
  console.log("before array");



    var imageArray = new Array("images/chelseaBarbersNavBar.jpg", "images/AboutBackgroundRazor-Guide-Gear-Patrol-Lead-Full-1600.jpg",
    "images/hoursServicesBackground.jpg",
    "images/contactPage.jpg",
    "images/reviewsPage.jpg",
    "images/galleryBackground.jpg",
    "images/826dc292cc7643e96a4b2e5cfbceb7a05b-NYM-Logo.rsquare.w330.jpg",
    "images/facebookIcon.png",
    "images/instagramIcon.png",
    "images/travelLiesureMagLogo.jpg",
    "images/twitterIcon.png",
    "galleryImages/1.jpg",
    "galleryImages/2.jpg",
    "galleryImages/3.jpg",
    "galleryImages/4.jpg",
    "galleryImages/5.jpg",
    "galleryImages/6.jpg",
    "galleryImages/7.jpg",
    "galleryImages/8.jpg",
    "galleryImages/10.jpg",
    "galleryImages/11.jpg",
    "galleryImages/12.jpg",
    "galleryImages/13.jpg",
    "galleryImages/14.jpg",
    "galleryImages/15.jpg",
    "galleryImages/16.jpg",
    "galleryImages/17.jpg",
    "images/fullreviewsbackground.jpg");



    for (var i = 0; i < imageArray.length; i++) {
      console.log("im in the loop");
      var tempImage = new Image();
      tempImage.src = imageArray[i];
  }

    console.log("after for loop");

};





// function preloader(){
//   console.log("I've been called");
//   // COUNTER
//   var i = 0;
//
//   // CREATE OBJECT
//   imageObj = new Image();
//
//   // SET IMAGE LIST
//   images = new Array();
//   images[0]= "images/chelseaBarbersNavBar.jpg"
//   images[1]="images/AboutBackgroundRazor-Guide-Gear-Patrol-Lead-Full-1600.jpg"
//   images[2]="images/hoursServicesBackground.jpg"
//   images[3]="images/contactPage.jpg"
//   images[4]="images/reviewsPage.jpg"
//   images[5]="images/galleryBackground.jpg"
//   images[6]="images/826dc292cc7643e96a4b2e5cfbceb7a05b-NYM-Logo.rsquare.w330.jpg"
//   images[7]="images/facebookIcon.png"
//   images[8]="images/instagramIcon.png"
//   images[9]="images/travelLiesureMagLogo.jpg"
//   images[10]="images/twitterIcon.png"
//   images[11]="galleryImages/1.jpg"
//   images[12]="galleryImages/2.jpg"
//   images[13]="galleryImages/3.jpg"
//   images[14]="galleryImages/4.jpg"
//   images[15]="galleryImages/5.jpg"
//   images[16]="galleryImages/6.jpg"
//   images[17]="galleryImages/7.jpg"
//   images[18]="galleryImages/8.jpg"
//   images[19]="galleryImages/9.jpg"
//   images[20]="galleryImages/10.jpg"
//   images[21]="galleryImages/11.jpg"
//   images[22]="galleryImages/12.jpg"
//   images[23]="galleryImages/13.jpg"
//   images[24]="galleryImages/14.jpg"
//   images[25]="galleryImages/15.jpg"
//   images[26]="galleryImages/16.jpg"
//   images[26]="galleryImages/17.jpg"
//   images[27]="images/fullreviewsbackground.jpg"
//
//   console.log("after image list");
//
//     // START PRELOADING
//   for(i = 0; i < 10; i++){
//       imageObj.src = images[i];
//
//   }
//
// console.log("after preloading");
// };
//
// preloader();
