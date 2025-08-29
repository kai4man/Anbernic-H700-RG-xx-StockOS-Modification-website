# System Monitor Application Documentation

## Overview
This application provides real-time system monitoring for Anbernic handheld gaming devices. It displays temperature sensor readings and battery information in an easy-to-read graphical interface.

## Supported Devices
The application supports the following Anbernic models:
- RGcubexx
- RG34xx/RG34xxSP
- RG28xx
- RG35xx+_P
- RG35xxH
- RG35xxSP
- RG40xxH
- RG40xxV
- RG35xxPRO

## Features
1. **System Information Display**
   - Shows device model
   - Displays current system language

2. **Temperature Monitoring**
   - CPU temperature
   - GPU temperature
   - VE (Video Engine) temperature
   - DDR memory temperature

3. **Battery Information**
   - Battery temperature
   - Charge level (percentage)
   - Voltage
   - Charging status

4. **Visual Interface**
   - Clean graphical display with rounded rectangles
   - Grid background pattern
   - Color-coded information
   - Automatic language localization

## Installation
1. Ensure your device is running supported firmware
2. Place the application files in the appropriate directory (typically `/mnt/mmc/Roms/APPS/`)
3. The application will automatically detect your hardware model

## Usage
1. Run the application by executing:
   ```bash
   python main.py
   ```

2. The application will:
   - Start automatically in full-screen mode
   - Display system information at the top
   - Show temperature sensor readings in the middle section
   - Display battery information at the bottom

3. To exit the application:
   - Press any button on your device

## Language Support
The application supports multiple languages including:
- English (en_US)
- Chinese Simplified (zh_CN)
- Chinese Traditional (zh_TW)
- Japanese (ja_JP)
- Korean (ko_KR)
- Spanish (es_LA)
- Russian (ru_RU)
- German (de_DE)
- French (fr_FR)
- Portuguese (pt_BR)

The language is automatically detected from the system settings.

## Technical Details
- **Refresh Rate**: Information updates every 1 second
- **Logging**: All sensor readings are logged to `log.txt`
- **Input Handling**: Uses `/dev/input/event1` for button input
- **Display**: Direct framebuffer access for efficient rendering

## Troubleshooting
1. If the display appears incorrectly:
   - Check your device model is supported
   - Verify the screen resolution settings in `graphic.py`

2. If temperature readings are missing:
   - Ensure your device has the appropriate thermal zones in `/sys/class/thermal`

3. If battery information isn't showing:
   - Check if your device exposes battery information in `/sys/class/power_supply`

## License
This application is provided as-is without warranty. Users may modify and distribute the code freely.
