// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
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

win1.add(cameraButton);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);

var win3 = Titanium.UI.createWindow({  
    title:'Tab 3',
    backgroundColor:'#fff'
});
var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 3',
    window:win3
});

var label3 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 3',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win3.add(label3);

var win4 = Titanium.UI.createWindow({  
    title:'Tab 4',
    backgroundColor:'#fff'
});
var tab4 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 4',
    window:win4
});

var label4 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 4',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win4.add(label4);

var win5 = Titanium.UI.createWindow({  
    title:'Tab 5',
    backgroundColor:'#fff'
});
var tab5 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 5',
    window:win5
});

var label5 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 5',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win5.add(label5);

var win6 = Titanium.UI.createWindow({  
    title:'Tab 6',
    backgroundColor:'#fff'
});
var tab6 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 6',
    window:win6
});

var label6= Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 6',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win6.add(label6);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);  
tabGroup.addTab(tab4);  
tabGroup.addTab(tab5);
tabGroup.addTab(tab6);  
  


// open tab group
tabGroup.open();
