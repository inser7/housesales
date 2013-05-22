ymaps.ready(rovioMapInit);
var rovioMap;

var nearObjects = [
    {
        "location": "Петрозаводск, ул. Торнева, 2",
        "icon": 'twirl#redStretchyIcon',
        "label": "магазин Ленторг"
    },
    {
        "location": "Петрозаводск, ул. Балтийская, 11А",
        "icon": 'twirl#blueStretchyIcon',
        "label": "детсад"
    },
];

function rovioMapInit() {
    rovioMap = new ymaps.Map ("map", {
        center: [61.765891, 34.376584],
        zoom: 16,
    });

    
    rovioMap.controls.add('mapTools');
    rovioMap.controls.add('smallZoomControl');

    for (var i in nearObjects) {      
        var icon = nearObjects[i].icon;
        var label = nearObjects[i].label;

        var geocoder = ymaps.geocode(nearObjects[i].location);
    
        geocoder.then(
            function (res) {
                alert(res);
                var obj = res.geoObjects.get(0);
                obj.options.set('preset', icon);
                obj.properties.set('iconContent', i);
                rovioMap.geoObjects.add(res.geoObjects);
            });
    }
}
    
