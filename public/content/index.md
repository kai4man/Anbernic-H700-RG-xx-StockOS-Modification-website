# Welcome to the RG35xx P/H/SP/2024 & RG28xx & RG40XX H/V Stock OS Modification

# OS_Image

Function

* Based on stock os improvement, modify partition arrangement, and support automatic expansion of partitions. 
* Supports TF cards with a capacity of 16GB or more. 
* Excluding games, you need to copy and add games yourself.

Description

* Used to create a brand new system for TF1
* After flashing, all the original data of TF1 will be lost. Please make a backup in advance

Usage

1. After downloading the. 7z compressed file, you need to decompress and obtain the. img image file
1. Burn the included .img to a MicroSD (>= 16GB) using your tool of choice (Rufus, Balena Etcher, dd, etc)
    - tip: https://github.com/cbepx-me/Anbernic-H700-RG-xx-StockOS-Modification/issues/68
1. After completing the card swiping, there is no need for any other operation. Please insert the card directly and start up. The first startup will automatically complete the expansion of the game partition, create directory, and install script files,During this period, it will automatically restart. Please be patient and wait for the operation to complete
1. After successfully starting the system, you can connect to the computer through a card reader and copy game files to the corresponding folder in the "ROMS" partition
1. Use partitioning tools to hide all partitions except for the ROMS partition, so that they do not pop up like windows that need to be formatted every time

# Update_Package

Function

This non-destructive upgrade patch is produced on the basis of the officially released new version of the system image. It adds some personally produced functions and can be used to upgrade the original official system or the modified system without affecting the original game and game archives. Upgrade (lossless upgrade).

Description

* Support both Stock OS and Stock OS MOD system upgrades simultaneously
* Require the system version before upgrading to be no less than 20231212

Usage

1. After downloading the patch pack, unzip it to obtain the "APPS" folder
1. Copy the "APPS" folder to the "Roms" folder in the TF 1 or TF 2 card game partition
1. After booting up, enter "RA Game", find the corresponding "APPS" simulator, and run "RG35xxX_Upgrade_202xxxxx" inside it
1. Follow the prompts to complete the system upgrade
1. The first restart may take a longer time, please be patient and wait

# Stock OS theme folder description

path:

/mnt/vendor/res1 and /mnt/vendor/res2

File and folder description


`res1` - The theme resource folder of the old version system UI

`Boot`: The second screen logo image displayed when the host starts

`Charge_ Mode`: Animated image displayed during shutdown and charging

`Desktop_ Res`: Game hall interface material images (where the HDMI folder corresponds to the images displayed when connecting to an external TV, and the LCD folder corresponds to the images displayed on the host screen, the same below)

`Game_ Menu`: Front end main interface material image

`Game_ Overlay`: Picture of the border of some emulators in the game hall

`Loading`: The logo image displayed during game loading and exiting

`Retro`: RA game interface icon image

`Setjoy`: Key setting image

`Setkey`: Button setting image

`Shutdown`: shutdown display image and warning image when low battery

`Sound`: Key sound effect file

`Test`: Key test material image

`Theme`: Front end main interface icon image

`Wallpapers`: Front end background image

`WiFi`: WiFi prompt material image

`res2` - The theme resource folder of the new version system UI

`desktop_res`: TF card selection interface image resources

`theme`: Front end main interface icon image

Important reminder

* When making modifications, please follow the file format, resolution, transparency effect, file name, and other parameters of the original material images to avoid display errors!
* The main interface icon and background image contain ten resource folders numbered "0-9". After modification, please select the corresponding number in the host settings.

`Imgs` - Preview image folder

There is only one PNG format image file in this folder, which is a preview image of the corresponding theme installation script. It can be used as a preview theme effect in the console game list.
Important note: The image file name must be exactly the same as the theme installation script file name. For example, if the script file name is "Theme ABC. sh", the preview image file name should be "Theme ABC. png".

Installation method

After completing the customization, please copy the "Theme-Original2.sh", "Theme-Original2", and "Imgs" script files and two folders together to the "Roms/APPS" folder in the game partition of Card 1 or Card 2. 
After booting up, enter "RA Games - APPS" to see the "Theme-Original2" function. After running, complete the theme installation.

# PORTS

Third party ported games.

Usage

1. Extract the `.zip` file to obtain the `PORTS` folder
1. Copy the `PORTS` folder to the `Roms` folder of TF1 or TF2
1. After booting up, enter the corresponding TF card's `APPS` and run the corresponding game startup file

Enjoy it!