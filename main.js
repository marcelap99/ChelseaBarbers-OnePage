// HAMBURGER CODE OPEN CLOSES NAV

//grab elements needed
let navBar = document.getElementById("navBar");

//toggle to animate and open / close
document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
    this.classList.toggle( "activateAnimation" );
    navBar.classList.toggle("openNav");

  });

  // GOOGLE MAP CODE

  function initMap() {
  // The location of Chelsea Barbers
  var chelseaBarbers = {lat: 40.747696, lng: -74.003655};
  // The map, centered at Chelsea Barbers this creates new map with zoom and styling
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 18, center: chelseaBarbers, styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]     });
  // The marker, positioned at Chelsea Barbers
  var marker = new google.maps.Marker({position: chelseaBarbers, map: map});
}


// SWIPER JS IAMGE GALLERY CODE

// coverflow effect: methods / params - with loop & autoplay,  arrow navigation. swiperjs.com/api/#parameters

var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      coverflowEffect: {
        rotate: 40,
        stretch: 25,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
    autoplay:{
      delay: 3000,
      disableOnInteraction: false,
    },
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });
