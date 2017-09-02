Colemak Mod-DH Downloads
========================

**See the [Colemak Mod-DH Project Home Page](http://colemakmods.github.io/mod-dh/ "Colemak Mod-DH") for information on this project.**

## Windows: AutoHotKey

The fastest way to try out Mod-DH on Windows is to use the [AutoHotKey](https://autohotkey.com/) scripts. See the ![download](gfx/arrow-circle-down.png)[**autohotkey folder**](autohotkey/) for downloads.

## Windows: KLC files

There are also files for [Microsoft Keyboard Layout Creator](http://msdn.microsoft.com/en-GB/goglobal/bb964665.aspx "Keyboard Layout Creator") (KLC). See the ![download](gfx/arrow-circle-down.png)[**KLC folder**](klc/) for more information and downloads.

## Linux: XKB files

Mod-DH is now supported by [DreymaR's Big Bag of Keyboard Tricks](http://forum.colemak.com/viewtopic.php?id=1438). 

This is the recommended way to install Mod-DH in Linux. To enable it, edit the symbols/colemak file as mentioned in this [Colemak forum discussion](https://forum.colemak.com/topic/1438-dreymars-big-bag-of-keyboard-tricks-linuxxkb-files-included/). The source files are in DreymaR's ![download](gfx/arrow-circle-down.png)[**BigBagKbdTrixXKB**](https://github.com/DreymaR/BigBagKbdTrixXKB) repository.

## Linux: Xmodmap / console files

There are currently a selection of files for [xmodmap](http://www.x.org/archive/X11R6.8.2/doc/xmodmap.1.html), there are available in the ![download](gfx/arrow-circle-down.png)[**xmodmap folder**](xmodmap/) download area. You may need to customize these for your own language/region. Keymap files for the console are also provided in the ![download](gfx/arrow-circle-down.png)[**console folder**](console/).

The files can also be generated and installed by running `make install` in ![download](gfx/arrow-circle-down.png)[**generate-linux-keymaps**](generate-linux-keymaps/) as root. Since the location of console keymap files varies depending on the distro, you may need to specify a different directory than the default `/usr/share/keymaps` (which is correct for Debian-based distros): `# make KEYMAP_PREFIX=/usr/share/kbd/keymaps install`.

## Android: APK for physical keyboard

An Android application package (APK), with source files, is available, allowing you to type Mod-DH on a physical keyboard connected to your Android device. See the ![download](gfx/arrow-circle-down.png)[**android section**](android/) for detailed instructions.

