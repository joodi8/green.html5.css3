var mapContainer = document.getElementById('map'),
mapOptions = {
    center: new kakao.maps.LatLng(37.48905341260665, 126.55682887917185),
    level: 3
};

var map = new kakao.maps.Map(mapContainer, mapOptions);