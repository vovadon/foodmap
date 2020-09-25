var mapOptions = {
   center: [44.956, 34.1055],
   zoom: 13
}

var map = new L.map('map', mapOptions);

var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
});
map.addLayer(layer);

var marker1 = L.marker([44.942741, 34.094513]).addTo(map);
var marker2 = L.marker([44.972193, 34.095743]).addTo(map);
var marker3 = L.marker([44.934900, 34.134001]).addTo(map);
var cfc = L.marker([44.962743, 34.085257]).addTo(map);

var kfu = L.polygon([
    [44.935664, 34.133936],
    [44.936888, 34.133005],
    [44.937828, 34.135513],
    [44.936479, 34.136305]
]).addTo(map);

marker1.bindPopup("<center><b>Лучшая шаурма в городе!</b></br>От 100р</center>")
marker2.bindPopup("<b>Неплохой донер</b>")
marker3.bindPopup("<center><b>Me Gusta</b></br>Цена завышена</center>")
cfc.bindPopup("<center><b>Crimean Fried Chicken</b></br>Неплохие бургеры</center>")
kfu.bindPopup("<b>КФУ им. В.И. Вернадского</b>").openPopup();