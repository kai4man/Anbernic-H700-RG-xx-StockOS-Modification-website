# Anbernic Bezel Custom Manager - User Guide

## Overview
The Anbernic Bezel Custom Manager is a tool designed for Anbernic handheld gaming devices that allows users to:
- View and manage bezel overlays for different game systems
- Apply custom bezels to individual ROMs
- Reset bezel configurations to default settings
- Support multiple languages and device resolutions

## Supported Devices
The application supports various Anbernic models including:
- RGcubexx
- RG34xx/RG34xxSP
- RG28xx
- RG35xx+_P
- RG35xxH
- RG35xxSP
- RG40xxH/RG40xxV
- RG35xxPRO

## Installation
1. Copy all program files to your Anbernic device:
   ```
   /mnt/mmc/Roms/APPS/
   ```

2. Ensure the following directory structure exists:
   ```
   /mnt/mmc/anbernic/bezels
   /mnt/mod/ctrl/configs/
   ```

## Key Features
- **Multi-language support**: Automatically detects system language
- **System-specific bezels**: Manage bezels per console/system
- **Visual preview**: See bezel images before applying
- **Configuration management**: Save and reset bezel preferences

## Usage Instructions

### Main Menu Navigation
- **UP/DOWN**: Navigate through available systems
- **L1/R1**: Page up/down through system list
- **L2/R2**: Jump 100 items in system list
- **A**: Select highlighted system
- **Y**: Open help menu
- **MENU**: Exit application

### System Bezel Management
After selecting a system:
- **UP/DOWN**: Navigate through available ROM bezels
- **A**: Apply selected bezel to the ROM
- **B**: Return to system selection
- **X**: Reset bezel configuration to default
- **MENU**: Exit application

### Help Menu
- **B**: Return to previous screen
- **MENU**: Exit application

## File Locations
- Bezel configurations: `/mnt/mmc/anbernic/bezels/[System Name]/`
- Custom bezel settings: `/mnt/mmc/anbernic/custom/`
- System configuration: `/mnt/mod/ctrl/configs/system.cfg`

## Supported Systems
The application supports bezels for numerous gaming systems including:
```
GB, GBC, GBA, PS, N64, MD, CPS1, CPS2, CPS3, NEOGEO, 
PCE, PICO, SATURN, DREAMCAST, and many more
```

## Troubleshooting
1. **No bezels found**:
   - Ensure bezel files exist in `/mnt/mmc/anbernic/bezels/[System Name]/`
   - Verify bezel files have `.cfg` extension
   
2. **Image not displaying**:
   - Check associated image file exists in the same directory as the `.cfg` file
   - Verify image format is supported (PNG, JPG)

3. **Configuration not saving**:
   - Ensure `/mnt/mod/ctrl/configs/` directory exists
   - Verify device has write permissions

## Reset Options
To completely reset all bezel configurations:
1. Navigate to a system
2. Press **X** to reset bezels for that system
3. Alternatively, delete `/mnt/mod/ctrl/configs/system.cfg`

## Version Information
Current version: v1.2

## Support
For additional support, please refer to the Anbernic community forums or official documentation channels.