var MM = Microsoft.Maps;

function addBoarder(map,x1,y1,x2,y2,title) {
    var line = new MM.Polyline([new MM.Location(x1,y1), new MM.Location(x2,y2)], {strokeColor: new MM.Color(255, 50, 75, 1.0), strokeThickness: 8});
    var box = new MM.Infobox(new MM.Location(x1,y1), {title: title, visible: false, offset:new MM.Point(0,0)});
    MM.Events.addHandler(line, 'mouseover', ( function(ibox) { return function() { ibox.setOptions({visible:true});}})(box) );
    MM.Events.addHandler(line, 'mouseout', ( function(ibox) { return function() { ibox.setOptions({visible:false});}})(box) );
    map.entities.push(line);
    map.entities.push(box);
}

function addCabin(map,x1,y1,title,description,image) {
	var pin = new MM.Pushpin(new MM.Location(x1,y1));
	map.entities.push(pin);
	var infobox = new MM.Infobox(new MM.Location(x1,y1), {title: title, description: description + '<img src="/assets/images/' + image +'.jpg" width=200 height=134 alt="Image of cabin">', pushpin: pin}); 
	map.entities.push(infobox);
}

function addAccess(map,x1,y1,title,description,image) {
	var pin = new MM.Pushpin(new MM.Location(x1,y1));
	map.entities.push(pin);
	map.entities.push(new MM.Infobox(new MM.Location(x1,y1), {title: title, description: description + '<img src="/assets/images/' + image +'.jpg" width=200 height=134 alt="Access to fish zone">', pushpin: pin}));
}
