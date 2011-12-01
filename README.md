
# Webclip Detection

This script attempts to detect if the current web page is being displayed 
on an iOS device as a full screen web clip. Full screen web clips allow
an app-like user experience from a web page, complete with home screen icons.

The intended use case for this script is displaying a prompt to add a web clip 
if the user is on an iOS device but not viewing the page via a web clip. 

Web clip add prompts often take the form of graphical instructions pointing at the 
"extras arrow" button in the Safari toolbar or a link to an iOS Configuration 
Profile which will install the web clip.

Since web clip use is detected by measuring the height of the viewport, the 
viewport scale *must* be locked to 1.0. 

You must also set the 
<tt>apple-mobile-web-app-capable</tt> meta variable to "yes," making your 
app full screen when run as a web clip.  This reclaims the vertical space 
otherwise taken up by the Safari navigation bar. The presense of this extra 
vertical space is the signal used to detect web clip use. 

Locking the viewport and setting the fullscreen web clip meta variable:

    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0" />
    <meta name="apple-mobile-web-app-capable" content="yes" />

Example JavaScript:

    if (webclipDetect.isIos() && !webclipDetect.isWebclip()) {
		if (window.confirm('Would you like to install this App to your home screen?') {
			// link to Configuration Profile created with iPhone Configuration Utility
			window.location = 'https://app.example.com/ios/app-web-clip.mobileprovision';
		}
	}

