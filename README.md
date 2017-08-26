Colemak Mod-DH Downloads
========================

**See the [Colemak Mod-DH Project Home Page](http://colemakmods.github.io/mod-dh/ "Colemak Mod-DH") for information on this project.**

## Linux: XKB files

Mod-DH is now supported by [DreymaR's Big Bag of Keyboard Tricks](http://forum.colemak.com/viewtopic.php?id=1438). 

To enable it, edit the symbols/colemak file as mentioned in this [Colemak forum discussion](https://forum.colemak.com/topic/1438-dreymars-big-bag-of-keyboard-tricks-linuxxkb-files-included/).

## Linux: Xmodmap / console files

There are currently a selection of files for [xmodmap](http://www.x.org/archive/X11R6.8.2/doc/xmodmap.1.html). See the [xmodmap folder](xmodmap/) download area for details. You may need to customize these for your own language/region.

Keymap files for the console are also provided in the [console folder](console/), These can also be generated and installed by running `make install` in [generate-linux-keymaps](generate-linux-keymaps/) as root. Since the location of console keymap files varies depending on the distro, you may need to specify a different directory than the default `/usr/share/keymaps` (which is correct for Debian-based distros): `# make KEYMAP_PREFIX=/usr/share/kbd/keymaps install`.

## Android: APK for physical keyboard

An android application package (APK), with source files, is available, allowing you to type Mod-DH on a physical keyboard connected to your Android device. See the [android section](android/) for detailed instructions.

## Windows: AutoHotKey

The fastest way to try out Mod-DH on Windows is to use the [AutoHotKey](https://autohotkey.com/) scripts. See the [autohotkey folder](autohotkey/) for downloads.

## Windows: KLC files

There are also files for [Microsoft Keyboard Layout Creator](http://msdn.microsoft.com/en-GB/goglobal/bb964665.aspx "Keyboard Layout Creator") (KLC). To use, load them into Keyboard Layout Creator and use the menu option "Project > Build DLL and Setup Package".

### ISO (UK) keyboard

**UK Mod-DH:**  
[Download KLC](klc/moddh-iso-uk.klc?raw=true)  
[Download ZIP](klc/moddh-iso-uk.zip?raw=true)  
![UK Mod-DH (full)](klc/moddh-iso-uk.jpg)

**UK Mod-DH (wide):**  
[Download KLC](klc/moddh-iso-uk-wide.klc?raw=true)  
[Download zip](klc/moddh-iso-uk-wide.zip?raw=true)  
![UK Mod-DH (left)](klc/moddh-iso-uk-wide.jpg)


### ANSI (US) keyboard  

**US Mod-DH:**  
[Download KLC](klc/moddh-ansi-us.klc?raw=true)  
[Download zip](klc/moddh-ansi-us.zip?raw=true)  
![US Mod-DH (full)](klc/moddh-ansi-us.jpg)

**US Mod-DH Wide:**  
[Download KLC](klc/moddh-ansi-us-wide.klc?raw=true)  
[Download zip](klc/moddh-ansi-us-wide.zip?raw=true)  
![US Mod-DH (full)](klc/moddh-ansi-us-wide.jpg)

**US Mod-DH (alternative home):**  
[Download KLC](klc/moddh-ansi-us-alt.klc?raw=true)  


### Matrix keyboard  

**Matrix Mod-DH:**  
[Download KLC](klc/moddh-ansi-us.klc?raw=true)


