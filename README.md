Colemak Mod-DH Downloads
========================

**See the [Colemak Mod-DH Project Home Page](http://colemakmods.github.io/mod-dh/ "Colemak Mod-DH") for information on this project.**

# Windows

### AutoHotKey

The fastest way to try out Colemak-DH on Windows is to use the [AutoHotKey](https://autohotkey.com/) scripts. See the ![download](gfx/arrow-circle-down.png)[**autohotkey folder**](autohotkey/) for downloads.

### EPKL (Big Bag)

A comprehensive Colemak-DH implementation for Windows (plus many extra features) is available in [DreymaR's Big Bag, EPKL edition](https://forum.colemak.com/topic/1467-dreymars-big-bag-of-keyboard-tricks-pklwindows-edition/).

### KLC files and Installers

There are files for [Microsoft Keyboard Layout Creator](https://www.microsoft.com/en-us/download/details.aspx?id=102134 "MS Keyboard Layout Creator") (MSKLC), together with the generated installers. See the ![download](gfx/arrow-circle-down.png)[**KLC folder**](klc/) for more information and downloads.

### EurKEY

There is a project implementing [EurKEY Colemak-DH](https://gitlab.com/jungganz/eurkey-colemak-mod-dh) offering Microsoft KLC files.

# Linux

### XKB

Support for Colemak-DH exists in recent versions xkeyboard-config (at least as of 2.34). 

Usage examples:

		setxkbmap us -variant colemak_dh
		setxkbmap uk -variant colemak_dh_iso

### XKB (Big Bag)

A comprehensive Colemak-DH implementation for Linux (plus many extra features) is available in [DreymaR's Big Bag, XKB edition](https://forum.colemak.com/topic/1438-dreymars-big-bag-of-keyboard-tricks-linuxxkb-files-included/)

### Xmodmap and console files

To quickly try out Colemak-DH, there are mapping files for [xmodmap](http://www.x.org/archive/X11R6.8.2/doc/xmodmap.1.html) available in the ![download](gfx/arrow-circle-down.png)[**xmodmap folder**](xmodmap/) download area. You may need to customize these for your own language/region. Keymap files for the Linux console are provided by the [kbd project](https://kbd-project.org/) since v2.6.2, which is included with most Linux distributions.

Alternatively, keymap files can be generated yourself by running `generate` script in ![download](gfx/arrow-circle-down.png)[**generate-linux-keymaps**](generate-linux-keymaps/).

### EurKEY

There is a project implementing [EurKEY Colemak-DH](https://gitlab.com/jungganz/eurkey-colemak-mod-dh) offering Linux XKB mapping files.

# macOS

### Installable bundle

Colemak-DH mappings for macOS have been contributed in the ![download](gfx/arrow-circle-down.png)[**macOS folder**](macOS/)

### Homebrew

Homebrew user can use the following command to install Colemak-DH to macOS:

```sh
brew install --cask colemak-dh # Install Colemak-DH
brew install --cask colemak-dhk # Install Colemak-DHk
```

# Cross platform (Windows, Linux, Mac)

### KMonad configurations

There are Colemak-DH configurations for the [KMonad](https://github.com/david-janssen/kmonad) program. This application allows manipulation of the raw input from the keyboard device, allowing arbitrary and advanced remapping in a cross-platform friendly way. See the ![download](gfx/arrow-circle-down.png)[**KMonad folder**](kmonad/) for configuration files.

# Android

## APK for physical keyboards

An Android Application Package (APK), with source files, is available, allowing you to type Colemak-DH on a physical keyboard connected to your Android device. See the ![download](gfx/arrow-circle-down.png)[**android section**](android/) for detailed instructions.

## Virtual (software) keyboards

*N.B. Colemak-DH is designed for touch-typing on a physical keyboard and may not be optimal for phone-based software keyboards. Nonetheless, some software keyboard apps now support Colemak-DH:*

[FlorisBoard](https://f-droid.org/packages/dev.patrickgold.florisboard/) - An open source soft-keyboard project [(source code)](https://github.com/florisboard/florisboard)


