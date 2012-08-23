function ResultsWindow() {
	var scanResponse = true;
	
	var win = Ti.UI.createWindow({
		title: 'Scan Results',
		backgroundColor: '#ccc',
		tabBarHidden: 'true'
	});
	
	if (scanResponse) {
		var nextTabIndex = 4;
		var navAction = "Get My Score";
	} else {
		var nextTabIndex = 2;
		var navAction = "Try Again";
   	}
    
    var btnNav = Ti.UI.createButton({
    	title: navAction,
    	color: '#000',
    	right: 10,
    	bottom: 10
    })
    btnNav.addEventListener('click',function(e) 
    {
		tabGroup.setActiveTab(nextTabIndex);
	});
	
    
    win.add(btnNav);

    return win;
}
module.exports = ResultsWindow;
