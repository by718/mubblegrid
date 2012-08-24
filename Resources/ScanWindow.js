function ScanWindow() {
	var win = Ti.UI.createWindow({
		title: 'Scan',
		backgroundColor: '#ccc',
		tabBarHidden: 'true'
	});
	
	var imageDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'downloaded_images');
	var f = Titanium.Filesystem.getFile(imageDir.resolve(), "grid.jpg");
	
	var imageView = Titanium.UI.createImageView({
    	height:200,
    	width:200,
        image:f.nativePath
    });
    
	win.add(imageView);

    var btnNav = Ti.UI.createButton({
    	title: 'Use',
    	color: '#000',
    	right: 75,
    	bottom: 10,
    	width:75
    })
    
    var btnRetake = Ti.UI.createButton({
    	title: 'Retake',
    	color: '#000',
    	left: 75,
    	bottom: 10
    })
    
    var emailButton=Titanium.UI.createButton({title:"Email My Score",height:36,left:105,top:181,width:120});
	emailButton.addEventListener('click', function () {
		alert("Alert!");
	});
	win.add(emailButton);
    
    btnNav.addEventListener('click',function(e) 
    {
		tabGroup.setActiveTab(3);
	});
	
	btnRetake.addEventListener('click',function(e) 
    {
		var HelpWindow = require('HelpWindow'),
		helpWin = new HelpWindow();
		helpWin.open();
	});
    
    win.add(btnNav);
    win.add(btnRetake);

    return win;
}
module.exports = ScanWindow;
