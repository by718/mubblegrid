// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create Welcome/Home Window window
//
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Welcome',
    window:welcomeWin
});

var WelcomeWindow = require('WelcomeWindow'),
		welcomeWin = new WelcomeWindow();

//
// create help window
//
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Help',
    window:helpWin
});

var HelpWindow = require('HelpWindow'),
		helpWin = new HelpWindow();


// Other Windows

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

var ScoreWindow = require('ScoreWindow'), 
scoreWin = new ScoreWindow();

var tab6 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 6',
    window:scoreWin
});



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
