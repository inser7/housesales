ymaps.ready(rovioMapInit);
var rovioMap;

var nearObjects = [
    {
        "location": "Петрозаводск, ул. Торнева, 2",
        "icon": 'twirl#redStretchyIcon',
        "label": "Магазин Ленторг"
    },
    {
        "location": "Петрозаводск, ул. Парфенова, 5",
        "icon": 'twirl#redStretchyIcon',
        "label": "Магазин Магнит"
    },
    {
        "location": "Петрозаводск, ул. Балтийская, 11А",
        "icon": 'twirl#blueStretchyIcon',
        "label": "Детсад"
    },
    {
        "location": "Петрозаводск, ул. Парфенова, 8А",
        "icon": 'twirl#blueStretchyIcon',
        "label": "Школа №2"
    },
    {
        "location": "Петрозаводск, ул. Лыжная, 22А",
        "icon": 'twirl#blueStretchyIcon',
        "label": "Почта"
    },
    {
        "location": "Петрозаводск, ул. Ровио, 14",
        "icon": 'twirl#blueStretchyIcon',
        "label": "Поликлиника"
    },
];

// Function to set point corresponding to i-th description
// Currying hack from http://www.svendtofte.com/code/curried_javascript/
function setPoint(i, map, res) {
    if (arguments.length < 3) {
        return function(res) {
            var obj = res.geoObjects.get(0);
            obj.options.set('preset', nearObjects[i].icon);
            obj.properties.set('iconContent', nearObjects[i].label);
            map.geoObjects.add(res.geoObjects);
        }
    }
}

function rovioMapInit() {
    rovioMap = new ymaps.Map ("map", {
        center: [61.765891, 34.376584],
        zoom: 16,
    });
    
    rovioMap.controls.add('mapTools');
    rovioMap.controls.add('smallZoomControl');

    for (var i in nearObjects) {      
        var geocoder = ymaps.geocode(nearObjects[i].location);
    
        geocoder.then(setPoint(i, rovioMap));
    }
}
    
