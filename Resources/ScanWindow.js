function ScanWindow() {
	var win = Ti.UI.createWindow({
		title: 'Scan',
		backgroundColor: '#ccc',
		tabBarHidden: 'true'
	});
	
	var cameraButton = Titanium.UI.createButton({title: 'Take Picture'});
	cameraButton.addEventListener('click', opencamera); 
	
	function opencamera() { 
		Titanium.Media.showCamera({
			success:function(event){
				var image = event.media;
	 			imageView.image = image;
	        },
	        cancel:function(){},
	            error:function(error){
	                var a = Titanium.UI.createAlertDialog({title:'Camera'});
	 				if (error.code == Titanium.Media.NO_CAMERA){
	                    a.setMessage('Your device does not seem to have a camera.');
	                }
	                else{
	                    a.setMessage('Unexpected error: ' + error.code);
	                }
	                a.show();
	            },
	            saveToPhotoGallery:true,
	            allowImageEditing:true
		})};
	win.add(cameraButton)
	
    var btnNav = Ti.UI.createButton({
    	title: 'Use',
    	color: '#000',
    	right: 10,
    	bottom: 10
    })
    
    btnNav.addEventListener('click',function(e) 
    {
		tabGroup.setActiveTab(3);
	});
    
    win.add(btnNav);

    return win;
}
module.exports = ScanWindow;
