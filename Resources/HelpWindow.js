function HelpWindow(message) {
	var win = Ti.UI.createWindow({
		title: 'Instructions',
		backgroundColor: '#fff',
		tabBarHidden: 'true'
	});
	
    
	var label1 = Ti.UI.createLabel({
      color: '#000',
      font: { fontSize:14 },
      text: 'We are ready to scan your test.\n- Line up the red circles with the circles on the paper.\n- Focus and make sure lighting is good.',
      textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
      left: 10,
      right: 10,
      width: 'auto', height: 'auto'
    });	
    win.add(label1);
    
    if(message){
    	var messageLabel = Ti.UI.createLabel({
	    	color: 'red',
	      	font: { fontSize:14 },
	      	text: message,
	      	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
	      	top: 10,
	      	left: 10,
	      	width: 'auto', height: 'auto'
    	});	
    	win.add(messageLabel);	
    }
    win.add(label1);
    
    var image = Titanium.UI.createImageView({url:'ui/images/cameraIcon.jpeg'});
	var cameraButton = Titanium.UI.createButton({title: '  Scan', image:'ui/images/cameraIcon.png', width:'150', height:'40',right: '10', bottom: '10'});
	cameraButton.addEventListener('click', opencamera); 
	
	function opencamera() { 
		
	var quadrantIICircle = Titanium.UI.createView({
		width:28,
		height:28,
		borderColor:'red',
		borderWidth:2,
		borderRadius:25,
		top:20,
		left:20
	});
	
	var quadrantIVCircle = Titanium.UI.createView({
		width:28,
		height:28,
		borderColor:'red',
		borderWidth:2,
		borderRadius:25,
		bottom:20,
		right:30
	});
	
	var button = Titanium.UI.createButton({
		color:'#fff',
		backgroundImage:'/images/BUTT_grn_on.png',
		backgroundSelectedImage:'/images/BUTT_grn_off.png',
		backgroundDisabledImage: '/images/BUTT_gry_on.png',
		bottom:10,
		width:301,
		height:57,
		font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
		title:'Take Picture'
	});
	
		button.addEventListener('click',function()
	{
		quadrantIICircle.borderColor = 'blue';
		quadrantIVCircle.borderColor = 'blue';
		Ti.Media.takePicture();
		messageView.animate({visible:true});
		setTimeout(function(){	
			quadrantIICircle.borderColor = 'red';
			quadrantIVCircle.borderColor = 'red';
			messageView.animate({visible:false});
		},500);
	});
	
	var messageView = Titanium.UI.createView({
		height:30,
		width:250,
		visible:false
	});
	
	var indView = Titanium.UI.createView({
		height:30,
		width:250,
		backgroundColor:'#000',
		borderRadius:10,
		opacity:0.7
	});
	messageView.add(indView);
	
	// message
	var message = Titanium.UI.createLabel({
		text:'Picture Taken',
		color:'#fff',
		font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
		width:'auto',
		height:'auto'
	});
	messageView.add(message);
	
	var overlay = Titanium.UI.createView();
	overlay.add(quadrantIICircle);
	overlay.add(quadrantIVCircle);
	overlay.add(button);
	overlay.add(messageView);
		
		Titanium.Media.showCamera({
			success:function(event){
				
				var loadView = Ti.UI.createView({
				    backgroundColor: 'black',
				    opacity: 0.75,
				    height: 480,
				    width: 320
				});
 
				var loadIndicator = Ti.UI.createActivityIndicator({
				    style: Ti.UI.iPhone.ActivityIndicatorStyle.BIG,
				    message: 'Saving picture...',
				    font : 'Arial',
				    color: '#FFF'
				});
 
				loadView.add(loadIndicator);
				
				win.add(loadView);
				loadIndicator.show();
				var image = event.media;
				var imageDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'downloaded_images');
				if (! imageDir.exists()) {
	 				imageDir.createDirectory();
				}
				var f = Titanium.Filesystem.getFile(imageDir.resolve(),"grid.jpg");
				f.write(image);
    			//loadIndicator.hide();
    				
    				var i1 = f.read();
					var xhr = Titanium.Network.createHTTPClient();
					xhr.open('POST','http://172.16.218.137:8080/smarttrack/rest/ccss/assignments/image/', false); // false makes it synchronous
					xhr.onload = function() { 
						Titanium.API.info(this.responseText);
						if(this.responseText=="\"\""){
							Titanium.API.info("EMTPY!");
							var HelpWindow = require('HelpWindow'),
							helpWin = new HelpWindow('Pleaes retake the picture. Remember to align the red circles on the screen to the black circles on the paper.');
							helpWin.open();
						}
						else{
							loadIndicator.message = 'Extracting responses from image...';
							var first = 1;
							var last = this.responseText.length-1;
							var responseText = this.responseText.substring(first, last);
							var ScanWindow = require('ScanWindow'),
							scanWin = new ScanWindow(responseText);
							scanWin.open()
							handleAfterSentRouting(this.responseText);	
						}
					};
					xhr.send(i1);
    				
    				var ScoreWindow = require('ResultsWindow'),
					resultsWin = new ScoreWindow();
					scoreWin.open();
	        },
	        cancel:function(){
	        		
	        },
	        error:function(error){
	        	var a = Titanium.UI.createAlertDialog({title:'Camera'});
	 			if (error.code == Titanium.Media.NO_CAMERA){
	            	a.setMessage('Your device does not seem to have a camera.');
	            }
	           	else{
	            	a.setMessage('Unexpected error: ' + error.code);
	            }
	           	a.show();
	           	
	           	var imageDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'downloaded_images');
				var f = Titanium.Filesystem.getFile(imageDir.resolve(), "grid.jpg");
	           	
	           	var i1 = f.read();
				var xhr = Titanium.Network.createHTTPClient();
				xhr.open('POST','http://172.16.218.137:8080/smarttrack/rest/ccss/assignments/image/', false); // false makes it synchronous
				xhr.onload = function() { 
					Titanium.API.info(this.responseText);
					if(this.responseText=="\"\""){
						Titanium.API.info("EMTPY!");
						var HelpWindow = require('HelpWindow'),
						helpWin = new HelpWindow('Pleaes retake the picture. Remember to align the red circles on the screen to the black circles on the paper.');
						helpWin.open();
					}
					else{
						var first = 1;
						var last = this.responseText.length-1;
						var responseText = this.responseText.substring(first, last);
						var ScanWindow = require('ScanWindow'),
						scanWin = new ScanWindow(responseText);
						scanWin.open()
						handleAfterSentRouting(this.responseText);	
					}
				};
				xhr.send(i1);
	      	},
	        saveToPhotoGallery:false,
	        allowImageEditing:true,
	        overlay:overlay,
	        showControls:false
		})	
	};
	
    
    win.add(cameraButton);

    return win;
}
module.exports = HelpWindow;
