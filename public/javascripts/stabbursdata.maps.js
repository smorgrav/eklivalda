var MM = Microsoft.Maps;
var LOC_EKLIVALDA_CENTER=new MM.Location(63.23700,9.77397);
var LOC_ZONE1_CENTER=new MM.Location(63.23142,9.77408);
var LOC_ZONE2_CENTER=new MM.Location(63.23700,9.77397);
var LOC_ZONE3_CENTER=new MM.Location(63.2413,9.7725);

function loc_get_map(mycenter) {
    map = new MM.Map(document.getElementById("myMap"),
		  {credentials:"Ak_hQuq2IBvsYoMYU-Vg_Oq6qYjyvwPu_1M3OP-6naja4C9LICkBuu3gjhau1thP",
		  theme: new MM.Themes.BingTheme(),
		  showMapTypeSelector:false,
		  showBreadcrumb: false,
		  //disablePanning: true,
		  center: mycenter,
		  mapTypeId: "r",
		  zoom:14});

		//
		// Adding statens kartverk layer
		//
		try {
          var tileSource = new MM.TileSource({uriConstructor: 'http://opencache.statkart.no/gatekeeper/gk/gk.open_ve?quadkey={quadkey}&format=image/png&layers=topo2'});
          var tilelayer= new MM.TileLayer({ mercator: tileSource, opacity: 1.0 });
          map.entities.push(tilelayer);
        } catch(err) {
          alert( 'Error Message:' + err.message);
        }
        return map;
}

function loc_add_boarder(map,x1,y1,x2,y2,title) {
    var line = new MM.Polyline([new MM.Location(x1,y1), new MM.Location(x2,y2)], {strokeColor: new MM.Color(255, 50, 75, 1.0), strokeThickness: 8});
    var box = new MM.Infobox(new MM.Location(x1,y1), {title: title, visible: false, offset:new MM.Point(0,0)});
    MM.Events.addHandler(line, 'mouseover', ( function(ibox) { return function() { ibox.setOptions({visible:true});}})(box) );
    MM.Events.addHandler(line, 'mouseout', ( function(ibox) { return function() { ibox.setOptions({visible:false});}})(box) );
    map.entities.push(line);
    map.entities.push(box);
}

function loc_add_cabin(map,x1,y1,title,description,image) {
	var pin = new MM.Pushpin(new MM.Location(x1,y1));
	map.entities.push(pin);
	var infobox = new MM.Infobox(new MM.Location(x1,y1), {title: description, description: '<img src="/assets/images/map/' + image +'.jpg" width=200 height=134 alt="Image of cabin">', pushpin: pin});
	map.entities.push(infobox);
}

function loc_add_access(map,x1,y1,title,description,image) {
	var pin = new MM.Pushpin(new MM.Location(x1,y1));
	map.entities.push(pin);
	map.entities.push(new MM.Infobox(new MM.Location(x1,y1), {title: description, description: '<img src="/assets/images/map/' + image +'.jpg" width=200 height=134 alt="Access to fish zone">', pushpin: pin}));
}

function loc_add_zone1(map) {
  loc_add_boarder(map,63.22944,9.77586,63.22919,9.77427, $.i18n.prop('map.boarder') + ' ' + $.i18n.prop('menu.zone1'));
  loc_add_cabin(map,63.23142,9.77408,  $.i18n.prop('menu.zone1'), $.i18n.prop('map.cabin') + ' ' + $.i18n.prop('menu.zone1'), 'zone1cabin');
  loc_add_access(map,63.2323,9.77793,  $.i18n.prop('menu.zone1'), $.i18n.prop('map.access') + ' ' + $.i18n.prop('menu.zone1'),'zone1access');
}

function loc_add_boarder_1to2(map) {
  loc_add_access(map,63.23185,9.7624, $.i18n.prop('menu.zone1') + ' ' + $.i18n.prop('general.and') +  ' ' + $.i18n.prop('menu.zone2'),
        $.i18n.prop('map.access') + ' ' + $.i18n.prop('menu.zone1') + ' ' + $.i18n.prop('general.and') +  ' ' + $.i18n.prop('menu.zone2'),'zone12access');	// Til øya
  loc_add_boarder(map,63.23472,9.77,63.23614,9.77507, $.i18n.prop('map.boarder') + ' ' + $.i18n.prop('menu.zone1') + ',' +  $.i18n.prop('menu.zone2'));
}

function loc_add_zone2(map) {
  loc_add_cabin(map,63.23881,9.77528, $.i18n.prop('menu.zone2'), $.i18n.prop('map.cabin') + ' ' + $.i18n.prop('menu.zone2'), 'zone2cabin');
  loc_add_cabin(map,63.23783,9.77456, $.i18n.prop('menu.zone2'), $.i18n.prop('map.shelter') + ' ' + $.i18n.prop('menu.zone2'), 'zone2cabin2');
  loc_add_access(map,63.23949,9.78075, $.i18n.prop('menu.zone2'), $.i18n.prop('map.access') + ' ' + $.i18n.prop('menu.zone2'), 'zone2access');
}

function loc_add_boarder_2to3(map) {
  loc_add_cabin(map,63.24010,9.77491, $.i18n.prop('menu.zone2'), $.i18n.prop('map.shelter') + ' ' + $.i18n.prop('menu.zone2'), 'zone2cabin3');
  loc_add_boarder(map,63.24004,9.77459,63.24003,9.77323, $.i18n.prop('map.boarder') + ' ' + $.i18n.prop('menu.zone2') + ',' +  $.i18n.prop('menu.zone3'));
}

function loc_add_zone3(map) {
  loc_add_cabin(map,63.2413,9.7725,  $.i18n.prop('menu.zone3'), $.i18n.prop('map.shelter') + ' ' + $.i18n.prop('menu.zone3'), 'zone3cabin');
  loc_add_access(map,63.24354,9.77112,  $.i18n.prop('menu.zone3'), $.i18n.prop('map.access') + ' ' + $.i18n.prop('menu.zone3'),'zone3access');
  loc_add_boarder(map,63.24275,9.77426,63.24271,9.77190, $.i18n.prop('map.boarder') + ' ' + $.i18n.prop('menu.zone3'));
  loc_add_boarder(map,63.24545,9.77637,63.24574,9.77512, $.i18n.prop('map.boarder') + ' ' + $.i18n.prop('menu.zone3'));
  loc_add_boarder(map,63.24683,9.77928,63.24731,9.77754, $.i18n.prop('map.boarder') + ' ' + $.i18n.prop('menu.zone3'));
}

function loc_add_all_eklivalda(map) {
   loc_add_zone1(map, true);
   loc_add_boarder_1to2(map);
   loc_add_zone2(map, false);
   loc_add_boarder_2to3(map);
   loc_add_zone3(map);
}
