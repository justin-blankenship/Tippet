var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 35.616240, lng: -82.564870 },
        zoom: 19
    });

    // Listen for click on map and add marker
    // google.maps.event.addListener(map, 'click', function(event) {
    //   addMarker({coords:event.latLng});
    // });

    // Array of Markers
    var markers = [{
        coords: { lat: 35.616240, lng: -82.564870 },
        content: '<h5>Zeis Hall</h5>'
    }];

    // Loop through Markers
    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    // Add Marker Function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            animation: google.maps.Animation.DROP,
            map: map
        });

        // Check for Custom Icon
        if (props.iconImage) {
            // Set icon image
            marker.setIcon(props.iconImage);
        }

        // Check content
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        }
    }

}