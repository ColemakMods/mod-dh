
# Colemak Mod-DH for Android physical keyboards

Here are Colemak Mod-DH layouts for a **physical** keyboard connected to an Android device via USB or Bluetooth. This is distinct from the "soft keyboard" configuration that appears on screen. Once installed, you can set your Android device to recognise a connected physical keyboard to any of the supported Mod-DH varaints listed below.

- Mod-DH ANSI US
- Mod-DH ANSI US wide
- Mod-DH ISO US
- Mod-DH ISO US wide 
- Mod-DH ISO UK
- Mod-DH ISO UK wide
- standard Colemak
- standard Colemak wide

For layout diagrams, see the [Mod-DH keyboard layouts page](http://colemakmods.github.io/mod-dh/keyboards.html)

## Installing

**[Install direct from Google Play](http://play.google.com/store/apps/details?id=io.github.colemakmods.mod_dh)**

Or, compile the APK yourself from source - see below.

Presented here are instructions for a stock Android device, but be aware the there may be some variation between devices.

1. Connect a keyboard to the Android device. 
2. Go to Settings > Language & Input.
3. Find "Physical keyboard" in the list. Selecting this option will bring up a list of currently enabled keyboards. 
4. Select "Set up Keyboard Layouts" to add more layouts.
5. Assuming the APK was installed correctly, the list of available layouts will now include the Colemak Mod-DH variants. Set the checkbox for the one (or several) you want to use. 

The currently active layout is switchable using Control-spacebar.

## Limitations

Only the main layout arrangments are supported. Modifier keys, backspace, AltGr layers etc remain as per the defaults. Extend layer is not supported.

## Making modifications

You may want to make your own custom modifications to the keyboard mappings. In most cases, this will involve redefining which keyboard scan code is mapped to which pre-defined key name. These mappings are defined in the format:


    map key   <scan-code>   <key-name>


For example, suppose you wanted so switch the "6" and "equals" keys in the US ANSI wide layout. To do this, edit the file ```app/src/main/res/raw/moddh_ansi_us_wide.kcm```, and change the following lines:

    map key    7    EQUALS
    map key    8    6
to

    map key    7    6
    map key    8    EQUALS

Then recompile the package. See *Compiling* section below

## Compiling

To compile the APK:

1. Download and install the Android developer tools from [http://developer.android.com/](http://developer.android.com/)

2. Build the app using the command: `./gradlew assemble`
	
3. The compiled APK will be created in `app/build/outputs/apk`


