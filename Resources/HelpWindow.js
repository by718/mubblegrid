function HelpWindow() {
	var win = Ti.UI.createWindow({
		title: 'Instructions',
		backgroundColor: '#ccc',
		tabBarHidden: 'true'
	});
	
	var image = Ti.UI.createImageView({
      image:'/images/myimage.png',
      width: 100, height: 100,
      backgroundColor: '#00f'
    });
    win.add(image);
    
	var label1 = Ti.UI.createLabel({
      color: '#000',
      font: { fontSize:14 },
      text: 'We are ready to scan your test.\n- Focus and make sure lighting is good.\n- Capture all 4 corners.',
      textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
      left: 10,
      right: 10,
      width: 'auto', height: 'auto'
    });	
    win.add(label1);
    
    var btnNav = Ti.UI.createButton({
    	title: 'Scan',
    	color: '#000',
    	right: 10,
    	bottom: 10
    })
    
    btnNav.addEventListener('click',function(e) 
    {
		tabGroup.setActiveTab(2);
	});
    
    win.add(btnNav);

    return win;
}
module.exports = HelpWindow;
