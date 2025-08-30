# Colemak Mod-DH Layouts for Kanata

This directory contains Colemak Mod-DH keyboard layout configurations for Kanata.

## About Colemak Mod-DH

Colemak Mod-DH is an improved version of the Colemak keyboard layout that addresses the D and H key positions for better ergonomics on row-staggered keyboards. It maintains the core benefits of Colemak while providing more comfortable hand positions.

**Official Colemak Mod-DH Project**: https://colemakmods.github.io/mod-dh/

## Available Configurations

### 1. `colemak-dh-ansi.kbd` - ANSI Keyboards
For standard US/ANSI keyboards (most common layout).

### 2. `colemak-dh-iso.kbd` - ISO Keyboards  
For European/UK keyboards with the additional key next to left shift.

### 3. `colemak-dh-matrix.kbd` - Matrix/Ortholinear Keyboards
For matrix or ortholinear keyboards where keys are aligned in a grid.

## Layout Features

Each configuration includes:

- **Colemak-DH**: The standard Mod-DH layout
- **Colemak-DHk**: Alternative variant with K and M positions swapped
- **QWERTY**: Fallback layer for comparison
- **Extend Layer**: Navigation and function keys accessible via Caps Lock
- **Layer Switching**: Quick switching between layouts

## Layout Comparison

```
QWERTY:     Q W E R T Y U I O P
            A S D F G H J K L ;
            Z X C V B N M , . /

Colemak-DH: Q W F P B J L U Y ;
            A R S T G M N E I O
            Z X C D V K H , . /

Colemak-DHk:Q W F P B J L U Y ;
            A R S T G K N E I O  
            Z X C D V M H , . /
```

## Usage Instructions

1. **Setup**: Configure your platform-specific input/output in the `defcfg` section:
   - Linux: Uncomment and set the device path
   - Windows: Uncomment `low-level-hook` and `send-event-sink`
   - macOS: Uncomment and set the keyboard name

2. **Layer Switching**: Hold Caps Lock and press number keys:
   - Caps + 1: Switch to QWERTY  
   - Caps + 2: Switch to Colemak-DH
   - Caps + 3: Switch to Colemak-DHk

3. **Extend Layer**: Hold Caps Lock to access:
   - Navigation: Arrow keys on NEIO/HJKL positions
   - Browser: Back/Forward on brackets
   - Editing: Cut/Copy/Paste on ZXC positions
   - Function keys and more

## Running the Configuration

```bash
# Run with a specific configuration
kanata --cfg path/to/colemak-dh-ansi.kbd

# For development/testing
kanata --cfg path/to/colemak-dh-ansi.kbd --debug
```

## Customization

These configurations are designed as starting points. You can:

- Modify the Extend layer shortcuts
- Add additional layers (symbols, numbers, etc.)
- Adjust tap-hold timings for your typing style
- Customize layer switching mechanisms

## Key Differences from KMonad

If you're coming from KMonad's Colemak-DH configurations:

1. **Syntax**: Kanata uses slightly different syntax (e.g., `layer-toggle` vs `layer-switch`)
2. **Configuration**: Platform setup is in `defcfg` rather than separate sections
3. **Features**: Kanata supports additional features like concurrent tap-hold
4. **Performance**: Kanata is generally more performant and has lower latency

## Troubleshooting

- **Keys not working**: Ensure your input device is correctly specified in `defcfg`
- **Layer switching issues**: Check that aliases are correctly defined
- **Timing issues**: Adjust tap-hold values (200ms default) for your typing speed

## Contributing

These configurations are part of adding Colemak Mod-DH support to Kanata. If you find issues or have improvements:

1. Test your changes thoroughly
2. Update documentation if needed
3. Consider backward compatibility
4. Submit improvements to the Kanata project

## Resources

- [Kanata Documentation](https://github.com/jtroo/kanata/blob/main/docs/config.adoc)
- [Colemak Mod-DH Official Site](https://colemakmods.github.io/mod-dh/)
- [DreymaR's Big Bag](https://dreymar.colemak.org/) - Comprehensive Colemak resources
- [r/Colemak Community](https://reddit.com/r/colemak)