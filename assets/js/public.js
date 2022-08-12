	function formvalidation(bname,btype){
		if(bname === "" || btype === ""){
			return false
		}
		return true
	}	

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
		let lat
		let lng
		map.on('dblclick' , function(event){
			L.marker(event.latlng).addTo(map)
			document.getElementById('modal-location').style.setProperty('display','block')
			lat = event.latlng.lng 
			lng = event.latlng.lat 	
			document.getElementById('lngLoc').innerHTML = lng
			document.getElementById('latLoc').innerHTML = lat

		})

		let formRecord = document.getElementById('data-record')

		formRecord.addEventListener("submit", function(event){
			event.preventDefault()
			let businame = document.getElementById('bussinessId').value
			let busitype = document.getElementById('type-location').value

			if(formvalidation(businame,busitype)){
				
				var data={
					action: "record-business",
					namebusiness : businame,
					typebusiness : busitype,
					latloc : lat,
					lngloc : lng
				  };
				  makeRequest('POST', "http://localhost/Livemap/process/record-location.php",data).then(function(data){
					var results=JSON.parse(data);
				  });
				
				function makeRequest (method, url, data) {
					let xhr = new XMLHttpRequest();
					xhr.open(method, url);
					xhr.send(data);
					xhr.send();
				}

				document.getElementById('modal-location').style.setProperty('display','none')
			}
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