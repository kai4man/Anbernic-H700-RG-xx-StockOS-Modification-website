# Change Log

## v3.7.0

### New Features:
* Added "System_Monitor" to display various temperature and battery information (Credits: @kai4man)
* Added "Modified_System_Online_Upgrade" features
* Added support for official OEM game features
* Time zone settings in "Modify_System_Settings" now display UTC offset
* Added M-key exit functionality to the custom updater

### Updates:
* Enhanced the "Tiny Scraper" utility (Credits: @kai4man)
* Updated arcade game name database (Credits: @kai4man)
* Update the 'PortMaster' feature to improve download speed
* Optimized custom update package format for faster installation and improved stability

### Fixes:
* Fixed incorrect audio output when running ports games via HDMI (Thanks: @kasra9400)
* Fixed screen rotation issue when running ports game on rg28xx
* Resolved multiple issues in custom firmware features
* Addressed bugs in custom update packages
* Fixed weather display issues in the "Clock" feature

## v3.6 Hotfix_Patch1

### New Features:
* Added display of time difference relative to UTC+0 in the "Modify_System_Settings" time zone setting
* Added M exit function to the mod updater program

### Fixed:
* Fixed crash issue in the "Clock" function
* Fixed infinite reboot issue with lossless update packages

## v3.6

### New Features:
* "Custom System Settings" added "Set Timezone" function (Credit: Honor Holly's suggestion)
* "Custom System Settings" added IP address and current timezone display
* "Clock" feature added weather display

### Updates:
* Enhanced "PortMaster" functionality (Credit: @kai4man contribution)
  * Added multilingual support
  * Fixed system language detection
  * Implemented GUI for Port Master update progress
  * Modified pre-download mechanism during runtime
  * Preserved previously installed runtimes during Port Master updates
  * Added GUI for runtime download progress
  * Port Master settings now include SD card selection for port downloads
  * Settings apply immediately on first attempt - no longer requires reopening Port Master
* Updated system installation scripts
* Moved "Temporary SAMBA Server" and "Temporary SSH Server" features into "Custom System Settings"
* Updated select shaders

### Fixes:
* Resolved energy efficiency issues in modified system emulators
* Fixed occasional stuttering during modified system startup

### Stock OS Updates:
* **20250523 (RG34xxSP)**: Update wiliwili to the latest version, resolve the issue of crash when retro arch exits
* **20250211 (Other Models)**: Added support for third-party game downloader RixelHK, added WIFI history management, added quick game deletion in game lists, adjusted game list thumbnail display effects, updated universal emulator to V1.20.0, added support for N64 ROM file extensions

## v3.5

### New Features:
* Added RG34xxSP support
* Added "ProtMaster" for online port game downloads (compatibility not guaranteed) (Credits: @kai4man)
* Added Syncthing support for cross-device game/save synchronization (Credits: @x86tech)
* Added power button combos (Credits: @frankysour)
  * Short press: Sleep
  * M(F) + Power: Instant shutdown
* Added "Modify_System_Settings" consolidating existing system configurations
* Added "Modify_System_Tools" merging existing system utilities
* Added SAMBA support
* Added "Image_Browser"
* Added "Clock" with timer/stopwatch
* Added multi-language support for APPS
* Added new emulator overlay files

### Updates:
* Revamped "Theme_Manager" replacing original theme/logo managers
* Updated "Tiny_Scraper" and "Bezel_Custom_Manager"
* Improved system installation scripts

### Fixes:
* Fixed RG28xx overlay positioning
* Fixed issues with some third-party themes
* Fixed minor SSH issues
* Other known bug fixes

## v3.4

### New Features:
* Added "Boot Package Mods", supports RG34xx, RG35xxSP only (thanks: TheGammaSqueeze)
  * Custom refresh rates improve gameplay smoothness
  * Settings for Black Frame Insertion (BFI) & normal modes shared
  * Easy-to-follow recovery tips for image retention
* Added "Tiny Scraper" feature (RG28xx is not supported), capture game screenshots online (thanks: Julioevm)
* Added "Bezels Custom Manager" to set the default bezel file for each emulation (inspired by Tiny Scraper)
* Added the function of automatically adapting the system language to the arcade nds emulation

### Updates:
* Modified the SSH Server and added a temporary activation function to prevent the screen from being turned off and disconnected after the screen timeout (thanks: Skeeve) (RG28xx is not supported)
* Modified the automatic expansion function to automatically hide linux under Windows Partition (thanks: HikariCalyx)
* Modify the "Power_LED_Switch" function (the power light is only on the front-end interface in auto mode)
* Modify the automatic shader of some simulators
* Modify the bezels file to adapt to the new version of the retroarch
* Modify some scripts to optimize execution efficiency

### Stock OS Updates:
* **20241223**: Added full screen option for arcade simulator, added support for NT2 and NT3 format games in ons simulator core, added support for pico-8 third-party simulator and online game store, added PDF reader, added the function of handheld as WiFi hotspot online, added the module of automatically recording the last browsed, updated psp simulator to v1.18.1, updated wiliwili to v1.5, updated the handle button configuration, modified the system brightness adjustment to 8 levels, modified the recognition of card 1 in the e-book function, fixed the execution efficiency of dot and other shaders, optimized the system and fixed other known issues

## v3.3

### Updates:
* Remove the 'Night Mode' function
* Modify the "Theme Manager" resource to adapt to the new system theme

### Fixes:
* Fix the issue of ineffective recovery in the "Backup & Restore Set" function
* Fix the issue of consecutive shortcut keys

## v3.2

### New Features:
* Compatible with RG34xx models
* Added the function of "switching cores", modified the dead zone parameter of the joystick, and optimized the user experience (only supports RG35xxH and RG40xx, thank you: TheGammaSqueeze)
* Added "Simple Terminal" function (thank you: haoict)
* Added the "System Quick Settings" function, which allows for one click quick setting of system functions

### Updates:
* Modify the initial startup script to shorten the initial startup time
* Modify the game startup script to use the game independent configuration function

### Fixes:
* Fix issues with settings such as masks, shaders, and vertical arcade games
* Fix other known issues

### Stock OS Updates:
* **20241018**: Fix the battery icon display issue, optimize the stability of the Bluetooth connection controller (without RG28xx), fix known issues

## v3.1

### New Features:
* Added the "Auto_load_save" first-run prompt function

### Fixes:
* Fixed the problem of automatic time synchronization when connected to the Internet
* Fixed the confusion of the default official theme icon order in the "Theme Manager"
* Fixed the problem of "Arcade_Core_AUTO"
* Fixed the issue with the "Random-Emulation" feature
* Fixed some known issues

## v3.0

* Adapt to new models
* Add bootlogo manager
* Add custom mask and shader functions
* Update more vertical arcade mask files
* Update some key recognition scripts
* Modify the script for the random game function
* Fix issues with mask scripts
* Fix some known issues

## v2.9

* Adapt to RG40xxV
* Added the language selection function for the first startup (Simplified Chinese and English)
* Modified the default display ratio of ppsspp
* Fixed the special BIOS recognition problem of psx games
* Fixed the English text error of "Backup_&_Restore_Set"

### Stock OS Updates:
* **RG28xx-v1.0.6-20240822**: Added Yabasanshiro standalone emulator, fixed known bugs
* **RG35XX+-P-V1.1.6-20240822**: Added Yabasanshiro standalone emulator, updated Retroarch to 1.19.1, fixed known bugs
* **RG35XXH-V1.1.6-20240822**: Added Yabasanshiro standalone emulator, updated Retroarch to 1.19.1, fixed known bugs
* **RG40XXH-V1.0.3-240822**: Added Yabasanshiro standalone emulator, updated Retroarch to 1.19.1, fixed known bugs
* **RG35XXSP-V1.0.7-240830**: Added Yabasanshiro standalone emulator, updated Retroarch to 1.19.1, added standby mode (Normal standby, Super standby), fixed known bugs
* **40XXV-V1.0.2-240901**: Updated Retroarch to 1.19.1, fixed known bugs

## v2.8

* Added NDS Pinyin cheat code (due to drastic limitations, Chinese characters are displayed as Hanyu Pinyin)
* Added 512MB swap space
* Modified ports game cross key analog joystick function switching vibration prompt (enable vibration once, disable vibration twice)

### Stock OS Updates:
* Add low-power sleep mode

## v2.7

* Added ports game cross key analog joystick function (press the power button to switch)
* Fixed the mame2010 core crash problem
* Fixed the missing RA shortcut key setting function for some models

### Stock OS Updates:
* Add low-power sleep mode

## v2.6

* Newly adapted to 64-bit systems
* Modified the automatic expansion script to enhance compatibility

### Stock OS Updates:
* **RG40xxH**: up to 20240702
* **RG35xxH**: up to 20240626 - Upgrade 64-bit Linux system, add PC ported games, fix known bugs
* **RG35xxP (2024)**: up to 20240626 - Upgrade 64-bit Linux system, add PC ported games, fix known bugs
* **RG35xxSP**: up to 20240625 - Upgrade 64-bit Linux system, add PC ported games, fix known bugs

## v2.5

* Added "Auto_load_save" switch function
* Modified GBA default mask file to distinguish between SP and non-SP models
* Updated "Theme Manager" code
* Fixed issues with "Real_Time_Game_Guide"
* Fixed other issues

### Stock OS Updates:
* **RG28xx**: up to 20240511
* **RG35xx SP**: up to 20240531 - Added LR key to switch previous/next song when closing the cover of the music player, the cover does not sleep when closing the cover under HDMI function, fixed known bugs
* **RG35xx PLUS (2024) & RG35xx H**: 20240614 - Add DC emulator to recognize M3U files, add music player with L and R keys to switch previous and next tracks, upgrade RA version to v1.18, fix known bugs

## v2.4

* Upgraded the retroarch of RG35xxP and 35xxH to v1.18.0
* Modified the vertical arcade, turbo hotkeys and bezel scripts to solve the problem of multi-model adaptation
* Modified the "Theme Manager" script to solve the problem that may occur when installing MacOS package theme
* Fixed the problem of turning off random logo in "Theme Manager"
* Fix other issues

### Stock OS Updates:
* **RG28xx & RG35xx SP**: 20240511
* **RG35xx PLUS (2024) & RG35xx H**: 20240428

## v2.3

* Added the "RA_Combination_keys" function, which can use L1 or R1 as the combination function of A+B or A+Y
* Added the "Theme_Manager" function to support the installation of custom themes
* Merge all H700 modification files
* Updated the default GB bezel file
* Modified the default display achievement settings of Retroarch
* Modify "Switch_font_size" functionality to fit custom themes
* Fixed the problem that the "RA hotkey" setting function disappeared
* Fixed the problem that the "RA_TurboKey" cancellation setting was invalid
* Fixed the problem of the "Arcade_Core_AUTO" function
* Fixed the transition effect of the music playback animation
* Fixed some bootlogo image problems
* Fixed the problem in the RA startup script
* Fixed other issues in APPS script

## v2.2

* Added first boot quick setup function
* Add more bootlogo
* Modify the music player animation effect
* Retroarch advanced menu mode is enabled by default
* Fix bug in startup script

## v2.1

* Added "Mirr._with_CLD_Lid" function (only supports 35xxSP)
* Added "Real_Time_Game_Guide" function
  * Only supports Retroarch and strategy files in .txt or .epub format
  * Place the Guide file in the directory where the corresponding game is located, and the file name must be the same as the corresponding game rom
  * After entering the game, press L2+R2, and then press the cross key ↓ to automatically display the corresponding guide content. Press the M key to return to the game.
* Added support for Japanese language in magic modification function
* Added APPS function name to automatically follow the system language switching function (only supports Chinese, English, and Japanese)
* Added "Backup_&_Restore_TF1_Save", giving priority to backing up to TF2: /anbernic/backup/savegame.dat
* Added "Switch_font_size" function (some text will go out of bounds under large fonts)
* Added the function of checking the remaining space of the magic modification upgrade package
* Modified "Quick_shutdown" to Standby & Shutdown Settings, adding support for screen timeout and cover closing (35xxSP) settings
* Modify "Show_info" to "Show_MOD_info" to display more content and allow manual control
* Fixed the problem of black screen in history after upgrading the upgrade package
* Fixed errors in some function scripts

## v2.0

* Upgrade to v2.0
* New "APPS" feature script interaction mode
* Add screen timeout action setting function
* Add "RA TurboKey" setting function
* Modify the "Quick shutdown, bezel, shader, arcade core auto" function to be ON by default
* Modify RA: "Increment Save State Index Automatically" to be disabled by default
* Modify some script content
* Fix errors in some feature scripts

## v1.6 - fix

* Fixed the problem of e-book crash after installation of upgrade package

## v1.6

* Add default L2 key as activation shortcut for continuous sending
* Add "Show Info" function to view system version and other information
* Add "Move APPS" feature
* Modify the "Random" function to support all games, collections, history and individual simulators
* Modify the "Random-bootlogo" to automatically restore the default startup logo when it is closed
* Modify the installation program and streamline the installation package volume
* Modify, complete, and merge partial masks
* Modify the sound effects of the default theme
* Fix mask display issue during HDMI output
* Other minor adjustments

## v1.5

* Adapt to the new stock os
* Modify the Bezels-AUTO function script
* Fixed issues in update script

## v1.4

* Add "Random Rom" function
* Add "Random Logo" function
* Add prboom core
* Add vibration prompt for "Quick Shutdown"
* Prioritize using tf2 to save files when modifying Backup and Restore functions
* Modify the default settings for bezels and shader to MANUAL
* Modify SSH and NTP installation scripts
* Remove duplicate settings from SSH installation files

## v1.3 - fix1

* Fix the issue of game crashes in the previous version of Retroarch
* Fix the issue with activating the soft keyboard in DOS simulator L2

## v1.3

* Add NTP online automatic synchronization function for date, time, and time zone
* Add SSH and NTP switch functions (Default Off)
* Add automatic recovery function for damaged retroarch.cfg file
* Add ppsspp Cheats file
* Fix the issue of some RA cores being unable to access files in real-time
* Fix partition display error issue after automatic expansion
* Fix the default bezel files to reduce brightness
* Fix upgrade the program to be suitable for both new and old versions of the system to be used simultaneously
* Fix n64 settings to improve simulation performance
* Upgrades can also be performed under the same version (equivalent to reinstallation)

## v1.2

* Add ssh feature: root/root
* Add mpv playback function (No executable method has been provided yet)
* Add APPS script prompt function
* Modify the automatic expansion partition script

## v1.1

* Add power led control function
* Add backup and restore system data function
* RG35xxH adds change RA hotkey function
* Update some feature icons
* Fix installation errors in the previous version
* Fix the issue of "Quick shutdown"