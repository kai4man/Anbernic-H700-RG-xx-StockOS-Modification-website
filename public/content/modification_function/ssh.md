## SSH Temporary Server - Quick Usage Guide

### What It Does
This script sets up a temporary SSH server on your device, displays the IP address and login details on-screen, and lets you control the service using physical inputs (e.g., buttons).

### How to Use
1.Run the Script:
Go to 'APP Center', find 'APPS', and run the 'Temporary_SSH_Server'.
Start SSH if inactive.

2.Show a full-screen image with the device’s IP, port (22), and credentials (User: root, Pass: root).

3.Connect via SSH:
Use the displayed IP and port to access your device:
ssh root@[IP_ADDRESS]

4.Exit the Service:
Press the configured function key (M/F button).

The script stops SSH (if global.ssh=0 is set) and closes the display.

### Notes
Security: Change the default password (root) using passwd.