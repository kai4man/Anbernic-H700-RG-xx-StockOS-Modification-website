# Temporary SAMBA Server - User Documentation

## Overview
This script (`Temporary_SAMBA_Server.sh`) provides a temporary SAMBA server setup for sharing files over a network. It displays the device's IP address and credentials for access, then allows users to enable/disable SAMBA services interactively. The script is designed for specific hardware environments and includes controller input handling.

---

## Prerequisites
- **MPV Player**: Required for displaying IP information (`/usr/bin/mpv` must be installed).
- **SystemD**: Used to manage SAMBA services (`smbd` and `nmbd`).
- **Network Interface**: A valid IPv4 address on `wlan0` is required for functionality.
- **Hardware Compatibility**: Script exits automatically if the hardware model is `RG28xx`.

---

## Features
1. **IP Address Display**:  
   - Automatically detects the IPv4 address of `wlan0` and generates an `.srt` file to display it alongside login credentials (User: `root`, Pass: `root`).  
   - Shows a language-specific image (`sambatmp-${LANG_CUR}.png`) with the IP overlay for 6000 seconds (default).

2. **SAMBA Service Control**:  
   - **Enable**: Starts and enables `smbd` and `nmbd` services if inactive.  
   - **Disable**: Stops and disables services if `global.samba=0` is set in `/mnt/mod/ctrl/configs/system.cfg`.

3. **Input Handling**:  
   - Listens for controller input events (e.g., function key release) to exit the script gracefully.  
   - Reloads device configurations if controllers or devices are reattached.

---

## Installation
1. Ensure your device is running supported firmware
2. Place the application files in the appropriate directory (typically `/mnt/mmc/Roms/APPS/`)
3. The application will automatically detect your hardware model

## Usage Instructions
1. **Run the Script**:  
   Execute the script with Bash:  
   ```bash
   ./Temporary_SAMBA_Server.sh
   ```

2. **Access Shared Files**:  
   - Connect to the device via SAMBA using the displayed IP address and credentials.  
   - Example: `\\<IP_ADDRESS>` (Windows) or `smb://<IP_ADDRESS>` (Linux/macOS).

3. **Exit the Script**:  
   Press the designated **function key** (configured in `system.cfg`) to:  
   - Terminate the MPV player.  
   - Disable SAMBA services (if configured).  
   - Exit the script.

---

## Error Handling
- **No IP Address**: Displays `noconn-${LANG_CUR}.png` and exits if `wlan0` has no IPv4 address.  
- **Missing MPV**: Exits with an error if MPV is not installed.  
- **Hardware Incompatibility**: Script auto-removes itself if the hardware is `RG28xx`.

---

## Configuration
- **Language Support**: Uses `${LANG_CUR}` to load language-specific images (e.g., `sambatmp-en.png`).  
- **Input Devices**: Dynamically detects devices via `get_devices` (sourced from `/mnt/mod/ctrl/configs/functions`).  
- **SAMBA Settings**: Controlled by `/mnt/mod/ctrl/configs/system.cfg` (e.g., `global.samba=0`).

---

## Files
| File | Purpose |
|------|---------|
| `ip.srt` | Temporary subtitle file with IP and credentials. |
| `sambatmp-${LANG_CUR}.png` | Background image for IP display. |
| `noconn-${LANG_CUR}.png` | Error image shown when no IP is detected. |

---

## Notes
- **Security**: Default credentials (`root:root`) are insecure. Change them in production environments.  
- **Logs**: Script outputs errors to `/dev/null`; modify for debugging.  
- **Rotation**: Uses `${rotate_28}` variable for display orientation (if defined).
```