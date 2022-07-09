$(document).ready(function(){

	let liveSearchBtn = $('#serachlive-btn')
	liveSearchBtn.click(function(event){
		event.preventDefault()
		console.log(liveSearchBtn)
	})

	//initialize map
	let location = [32.6485,51.6801]
	let map = L.map('map-tilelayer').setView(location, 16);
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19
	}).addTo(map);

	// let North = map.getBounds().getNorth()
	// let south = map.getBounds().getSouth()
	// let East = map.getBounds().getEast()
	// let West = map.getBounds().getWest()
	map.on('dblclick' , function(event){
		L.marker(event.latlng).addTo(map)
		document.getElementById('modal-location').style.setProperty('display','block')
		document.getElementById('lngLoc').innerHTML = event.latlng.lng 	
		document.getElementById('latLoc').innerHTML = event.latlng.lat 	
	})

	let formRecord = document.getElementById('data-record')
	formRecord.addEventListener("submit", function(event){
		event.preventDefault()
		
	})


})


//Right Menu
let tabsVerticalInner = $('#accordian');
let selectorVerticalInner = $('#accordian').find('li').length;
let activeItemVerticalInner = tabsVerticalInner.find('.active');
let activeWidthVerticalHeight = activeItemVerticalInner.innerHeight();
let activeWidthVerticalWidth = activeItemVerticalInner.innerWidth();
let itemPosVerticalTop = activeItemVerticalInner.position();
let itemPosVerticalLeft = activeItemVerticalInner.position();
$(".selector-active").css({
	"top":itemPosVerticalTop.top + "px", 
	"left":itemPosVerticalLeft.left + "px",
	"height": activeWidthVerticalHeight + "px",
	"width": activeWidthVerticalWidth + "px"
});
$("#accordian").on("click","li",function(e){
	$('#accordian ul li').removeClass("active");
	$(this).addClass('active');
	let activeWidthVerticalHeight = $(this).innerHeight();
	let activeWidthVerticalWidth = $(this).innerWidth();
	let itemPosVerticalTop = $(this).position();
	let itemPosVerticalLeft = $(this).position();
	$(".selector-active").css({
		"top":itemPosVerticalTop.top + "px", 
		"left":itemPosVerticalLeft.left + "px",
		"height": activeWidthVerticalHeight + "px",
		"width": activeWidthVerticalWidth + "px"
	});
});
//add active class-on another-page move
jQuery(document).ready(function($){
  // Get current path and find target link
  let path = window.location.pathname.split("/").pop();
  // Account for home page with empty path
  if ( path == '' ) {
    path = 'index.html';
  }
  let target = $('#accordian ul li a[href="'+path+'"]');
  // Add active class to target link
  target.parent().addClass('active');
});