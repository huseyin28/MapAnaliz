import {Level1} from './Level1.js'
import {UI} from './UI.js'
let map;
$(document).ready(ready);

function ready() {
    MapObject.init()
    console.log(new Level1())
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


        this.addControl();
    },
    addControl: function () {
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

                container.onmouseover = function(){
                    container.style.backgroundColor = '#efefef'; 
                }
                container.onmouseout = function(){
                    container.style.backgroundColor = 'white'; 
                }

                a.onclick = function () {
                    UI.ToggleDashboardPanel(this);
                }

                return container;
            }
        });
        map.addControl(new customControl())
    }
}

/*
<style type="text/css">div.image {max-width: 256px;max-height: 256px;background-image: url()}</style>
*/