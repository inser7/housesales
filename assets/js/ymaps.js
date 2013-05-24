ymaps.ready(rovioMapInit);
var rovioMap;

var nearObjects = [
    {
        "location": "Петрозаводск, ул. Ровио, 8",
        "icon": 'twirl#blueDotIcon',
        "label": "Трехкомнатная квартира"        
    },
    // {
    //     "location": [61.765727,34.377867],
    //     "icon": 'twirl#trolleybusIcon',
    //     "label": "Остановка общественного транспорта (из города)"        
    // },    
    // {
    //     "location": [61.765627,34.37785],
    //     "icon": 'twirl#trolleybusIcon',
    //     "label": "Остановка общественного транспорта (в город)"        
    // },    
    {
        "location": "Петрозаводск, ул. Торнева, 2",
        "icon": 'twirl#shopIcon',
        "label": "Магазин Ленторг"
    },
    {
        "location": "Петрозаводск, ул. Парфенова, 5",
        "icon": 'twirl#shopIcon',
        "label": "Магазин Магнит"
    },
    {
        "location": "Петрозаводск, ул. Фролова, 13",
        "icon": 'twirl#shopIcon',
        "label": "Магазин Семья"
    },
    {
        "location": "Петрозаводск, ул. Балтийская, 11А",
        "icon": 'twirl#greenStretchyIcon',
        "hasIconText": true,
        "label": "Детсад"
    },
    {
        "location": "Петрозаводск, ул. Парфенова, 8А",
        "icon": 'twirl#greenStretchyIcon',
        "hasIconText": true,
        "label": "Школа №2"
    },
    {
        "location": "Петрозаводск, ул. Лыжная, 22А",
        "icon": 'twirl#mailPostIcon',
        "label": "Почтовое отделение №185011"
    },
    {
        "location": "Петрозаводск, ул. Ровио, 14",
        "icon": 'twirl#hospitalIcon',
        "label": "Филиал поликлиники №4"
    },
    {
        "location": "Петрозаводск, ул. Ровио, 13",
        "icon": 'twirl#hospitalIcon',
        "label": "Детская поликлиника №2"
    },
    {
        "location": "Петрозаводск, ул. Парфенова, 2",
        "icon": 'twirl#bankIcon',
        "label": "Сбербанк"
    },
    {
        "location": "Петрозаводск, ул. Фролова, 8",
        "icon": 'twirl#cafeIcon',
        "label": "Кафе Парижанка"
    },
];

// Function to set point corresponding to i-th description
// Currying hack from http://www.svendtofte.com/code/curried_javascript/
function setPoint(i, map, res) {
    if (arguments.length < 3) {
        return function(res) {
            var obj = res.geoObjects.get(0);
            obj.options.set('preset', nearObjects[i].icon);
            if (nearObjects[i].hasIconText) {
                obj.properties.set('iconContent', nearObjects[i].label);
            } else {
                obj.properties.set('hintContent', nearObjects[i].label);
            }
            map.geoObjects.add(res.geoObjects);
        }
    }
}

function rovioMapInit() {
    rovioMap = new ymaps.Map ("map", {
        center: [61.766032,34.377867],
        zoom: 16,
    });
    
    rovioMap.controls.add('mapTools');
    rovioMap.controls.add('smallZoomControl');

    for (var i in nearObjects) {      
        var geocoder = ymaps.geocode(nearObjects[i].location, {results: 25});
    
        geocoder.then(setPoint(i, rovioMap));
    }
}
    
