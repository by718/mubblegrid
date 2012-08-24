function WelcomeWindow() {
	
	var win = Ti.UI.createWindow({
		title: 'Welcome',
		backgroundColor: '#fff',
		tabBarHidden: 'true'
	});
	
	var label1 = Ti.UI.createLabel({
      color: '#000',
      font: { fontSize:14 },
      text: 'Thank you for participating in a Kaplan practice test event! This app will help you scan your test grid using your phone so you can get your score right away.',
      textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
      top: 50,
      left: 10,
      right: 10,
      width: 'auto', height: 'auto'
    });
    
    win.add(label1);

	var btnNav = Ti.UI.createButton({
    	title: 'Get Started',
    	color: '#000',
    	right: 10,
    	bottom: 10
    })
    
    btnNav.addEventListener('click',function(e) 
    {
		var HelpWindow = require('HelpWindow'),
		helpWin = new HelpWindow();
		helpWin.open();
	});
    
    win.add(btnNav);
    
    return win;
}
module.exports = WelcomeWindow;
