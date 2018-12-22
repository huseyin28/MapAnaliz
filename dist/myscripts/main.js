import {Level1} from './Level1.js'
import {UI} from './UI.js'
let map;
$(document).ready(ready);

function ready() {
    MapObject.init()
}

let MapObject = {
    TileLayers: {},
    init: function () {
        map = L.map('map');
        map.fitBounds([
            [34.7506398050501, 24.620361328125004],
            [43.02071359427862, 45.71411132812501]
        ]);
        map.zoomControl.setPosition('bottomright');

        this.TileLayers["Mapbox"] = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: '<a href="https://huseyin28.github.io/" target="_blank">Hüseyin Yılmaz</a>',
            id: 'mapbox.streets'
        }).addTo(map);
        L.control.scale().addTo(map);
        L.control.layers(this.TileLayers).addTo(map);


        this.addEditableControl();
        this.addDashboardControl();
    },
    addDashboardControl: function () {
        var customControl = L.Control.extend({
            options: {
                position: 'topright'
            },

            onAdd: function (map) {
                let container = L.DomUtil.create('div', 'leaflet-control-layers leaflet-control leaflet-control-custom');
                let a = document.createElement('a');
                a.className = 'leaflet-control-layers-toggle';
                a.style.backgroundImage = 'none';
                a.innerHTML = '<svg height="30px" viewBox="1 1 511.99931 511.99931" width="30px"><path d="m256 0c-141.386719 0-256 114.613281-256 256 0 141.382812 114.613281 256 256 256 141.382812 0 256-114.617188 256-256-.167969-141.316406-114.683594-255.832031-256-256zm223.183594 240h-207.183594v-207.183594c110.917969 8.054688 199.128906 96.265625 207.183594 207.183594zm-447.183594 16c.183594-117.386719 90.914062-214.746094 208-223.183594v223.183594c0 4.25 1.695312 8.328125 4.703125 11.328125l157.761719 157.761719c-93.195313 81.074218-234.472656 71.25-315.546875-21.949219-35.492188-40.796875-55-93.066406-54.917969-147.140625zm393.089844 146.464844-130.464844-130.464844h184.558594c-3.398438 48.207031-22.386719 93.996094-54.09375 130.464844zm0 0" fill="#8a8a8a"/></svg>';
                a.style.backgroundPosition = 'center center';
                a.style.paddingTop = '7px';
                a.style.cursor = 'pointer';
                a.style.textAlign = 'center';
                a.title = 'Dashboard';
                container.appendChild(a);

                a.onclick = function () {
                    UI.ToggleDashboardPanel(this);
                }

                return container;
            }
        });
        map.addControl(new customControl())
    },
    addEditableControl : function () {
        var customControl = L.Control.extend({
            options: {
                position: 'topright'
            },

            onAdd: function (map) {
                let container = L.DomUtil.create('div', 'leaflet-control-layers leaflet-control leaflet-control-custom');
                let a = document.createElement('a');
                a.className = 'leaflet-control-layers-toggle';
                a.style.backgroundImage = 'none';
                a.innerHTML = '<svg height="30px" viewBox="0 0 476.76426 476" width="30px"><path d="m451.023438 26.117188c-34.386719-34.3125-90.058594-34.3125-124.449219 0v.046874l-285.582031 285.550782c-.648438.683594-1.171876 1.472656-1.542969 2.335937-.101563.214844-.195313.433594-.273438.65625-.097656.21875-.1875.4375-.261719.664063l-38.65625 151.761718c-.714843 2.742188.082032 5.660157 2.085938 7.664063s4.921875 2.796875 7.664062 2.085937l151.753907-38.640624c.230469-.0625.429687-.183594.65625-.261719.230469-.078125.457031-.171875.679687-.273438.859375-.371093 1.648438-.894531 2.328125-1.542969l285.542969-285.558593.054688-.042969c34.320312-34.382812 34.320312-90.0625 0-124.445312zm-11.3125 11.308593c25.886718 25.949219 28.1875 67.183594 5.351562 95.851563l-101.191406-101.203125c28.664062-22.835938 69.898437-20.53125 95.839844 5.351562zm-107.472657 5.707031 101.808594 101.757813-28.679687 28.6875-101.808594-101.804687zm-303.445312 376.800782c12.628906 5.671875 22.742187 15.78125 28.414062 28.414062l-38.117187 9.703125zm44 24.421875c-7.367188-18.199219-21.800781-32.632813-40-40l18.144531-71.382813 93.230469 93.238282zm86.976562-25.199219-101.808593-101.785156 234.289062-234.289063 101.804688 101.808594zm0 0" fill="#8a8a8a"/></svg>';
                a.style.backgroundPosition = 'center center';
                a.style.paddingTop = '7px';
                a.style.cursor = 'pointer';
                a.style.textAlign = 'center';
                a.title = 'Editable';
                container.appendChild(a);

                a.onclick = function () {
                    UI.ToggleEditablePanel(this);
                }

                return container;
            }
        });
        map.addControl(new customControl())
    }
}
 