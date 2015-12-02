Required Graphics to Compile Build for Android

This ReadMe is intended as documentation of and basic technical specifications for 
the graphics files that must be uploaded during your app build for Android
smartphones and tablets. 


------------------------------------------------------------------------------------
Graphics Required for Build
------------------------------------------------------------------------------------
App for Android Smartphone & Tablet:
* LAUNCHER ICON [96x96 pixels; 32-bit PNG, may use alpha transparency]
* HIGH RESOLUTION LAUNCHER ICON [512X512 pixels; 24-bit PNG, with alpha]
* PORTRAIT SPLASH SCREEN - REGULAR [720X1280 pixels; PNG format, no alpha]
* PORTRAIT SPLASH SCREEN - LARGE [1600X2560 pixels; PNG format, no alpha]
* LANDSCAPE SPLASH SCREEN - REGULAR [1280X720 pixels; PNG format, no alpha]
* LANDSCAPE SPLASH SCREEN - LARGE [2560X1600 pixels; PNG format, no alpha]


IMPORTANT: If you wish to view updated splash screens in the XDK emulator, you must
place your updated splash screens in the XDK project folder within the 
.../3.4.0/_appmobi directory.   You must then rename them to the following for the 
XDK to recognize them:
splash_screen.png   (for phones)
splash_screen_tablet.png   (for tablets)


------------------------------------------------------------------------------------
Included Sample and Template Graphics
------------------------------------------------------------------------------------
This .ZIP file includes some sample graphics (PNGs) you can use as placeholders, as
well as templates (GIFs) to help you visualize the safe areas which are discussed 
in the Technical Considerations below.

------------------------------------------------------------------------------------
Technical Considerations
------------------------------------------------------------------------------------
Even though actual device resolutions often differ from the native (72ppi) resolution
of most computer monitors, as long as your graphics are saved at the specified pixel
dimensions, they should render correctly on device.

Due to the fact that smartphones and tablets running Android have varying aspect ratios
and resolutions, it's important to design your loading/splash screens around a safe
area that will not be cropped off when displayed on any device. There are templates 
included in this zip file for reference. The safe areas are:
	¦ Smartphone in portrait: The top 532 pixels, full width of 320px
	¦ Smartphone in landscape: The top, middle 533x295 pixels
	¦ Tablet in portrait: The top, middle 600x984 pixels 
	¦ Tablet in landscape: The top, middle 1024x560 pixels
	
	
-------------------------------------------------------------------
More Information
-------------------------------------------------------------------
At the time of this edit of the graphics ReadMe, more documentation about graphics
for Android apps could be found here:
http://developer.android.com/guide/practices/ui_guidelines/icon_design.html

At the time of this edit of the graphics ReadMe, documentation regarding graphics 
for submission to the Android Market could be found here:
http://www.google.com/support/androidmarket/developer/bin/answer.py?answer=1078870
