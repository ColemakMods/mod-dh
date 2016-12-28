# for Debian; /usr/share/kbd/keymaps for Arch
KEYMAP_PREFIX ?= /usr/share/keymaps
COLEMAK_KEYMAP_DIR = $(KEYMAP_PREFIX)/i386/colemak

generate:
	cd generate-linux-keymaps && ./generate -o ../

install:
	install -d "$(COLEMAK_KEYMAP_DIR)"
	install -D -m 644 console/*.map "$(COLEMAK_KEYMAP_DIR)"

.PHONY: generate install
