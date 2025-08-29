# Time Application Usage Manual

## Overview

This application is a multi-functional time utility that includes:

- **Clock**: Real-time date and time display with weather information.
- **Timer**: Countdown timer with configurable hours, minutes, seconds, and end alert.
- **Stopwatch**: Precision stopwatch with millisecond display.

It is designed to run on different RG device models with adaptable screen resolutions and supports multilingual interface.

---

## Installation

1. Ensure your device is running supported firmware
2. Place the application files in the appropriate directory (typically `/mnt/mmc/Roms/APPS/`)
3. The application will automatically detect your hardware model

---

## File Structure

* `main.py` – Entry point, initializes device hardware info and system language, runs main application loop.
* `app.py` – Main logic for console, clock, timer, stopwatch, and UI management.
* `graphic.py` – Graphics rendering module using Pillow for drawing shapes, text, and handling framebuffer updates.
* `input.py` – Handles input events from device buttons or joystick keys.
* `language.py` – Loads and provides multilingual translation via JSON language files.
* `weather.py` – Fetches current weather based on device IP location using **wttr.in** API.

---

## Features and Usage

### 1. Starting the Application

Run:

```bash
python main.py
```

### 2. Console Menu

* Navigate using **DY** key (up/down).
* Select an option by pressing **A**.
* Exit by pressing **MENUF**.

Available options:

* **CLOCK**
* **TIMER**
* **STOPWATCH**

---

### 3. Clock

Displays:

* Current date and time (updated every second).
* Real-time weather data including temperature, humidity, and condition for your city.

**Exit**: Slide key or press **MENUF** to return to console.

---

### 4. Timer

#### Configuration

* Adjust using **DY** to increment/decrement:

  * **Seconds**
  * **Minutes**
  * **Hours**
  * **At the end** (choose between **Sound** or **Vibrate** alert)

* Switch setting option using **DX**.

* Press **START** to begin countdown.

* Exit configuration by pressing **MENUF**.

#### During Countdown

* Displays remaining time in `HH:MM:SS` format.
* When finished:

  * Plays sound (`sound.wav`) or vibrates based on your selection.
* Return to console with **slide key**.

---

### 5. Stopwatch

* **START**: Start or stop timing.
* **SELECT**: Reset stopwatch.
* Displays time with precision up to **centiseconds** (00:00:00.00).

**Exit**:

* Press **MENUF** to return to console.

---

## Language Support

The application supports multiple languages including:

* Simplified Chinese (zh\_CN)
* Traditional Chinese (zh\_TW)
* English (en\_US)
* Japanese (ja\_JP)
* Korean (ko\_KR)
* Spanish (es\_LA)
* Russian (ru\_RU)
* German (de\_DE)
* French (fr\_FR)
* Portuguese (pt\_BR)

Languages are auto-selected based on system configuration files:

* `/mnt/vendor/oem/board.ini`
* `/mnt/vendor/oem/language.ini`

---

## Hardware Compatibility

Supports multiple RG device models such as:

* RG35xxH
* RG40xxH
* RG28xx
* And others as mapped in `main.py`.

Screen resolutions adjust accordingly based on the detected hardware info.

---

## Weather API

Uses **wttr.in** with IP geolocation. If the location fails to fetch, defaults to **New York**.

Data includes:

* Temperature
* Humidity
* Weather condition

Updated every **5 minutes** in a background thread.

---

## Notes

* Ensure **/dev/fb0** framebuffer device is accessible with write permissions.
* The application uses **threading** for input polling and weather updates; run in an environment with thread support.
* For **sound alerts**, `aplay` is called; ensure it is installed on your system if running on Linux.
