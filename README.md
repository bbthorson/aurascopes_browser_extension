# Aurascopes Browser Extention
Update your browser's new page with a personalized horoscope

---

### Set up
In order to test this locally, follow these instructions:
#### Access Chrome Extensions Settings
Open your Google Chrome browser and click on the three vertical dots in the top-right corner to access the Chrome menu. From the menu, select “Settings.”

#### Navigate to Extensions
In the Chrome settings, scroll down and click on the “Extensions” option located in the left-hand sidebar. Alternatively, you can directly enter the following URL in the address bar: chrome://extensions/

#### Enable Developer Mode
Once you are on the Extensions page, toggle on the “Developer mode” switch located in the top-right corner. This will enable advanced options for testing and loading unpacked extensions.

#### Load the Unpacked Extension
After enabling Developer mode, three new buttons will appear at the top of the Extensions page. Click on the “LOAD UNPACKED” button.

#### Select the Unzipped Extension Folder
A file browser window will open. Navigate to the unzipped build folder of the extension that you downloaded in Step 1. Select the folder and click “OK” or “Open” to proceed.

#### Verify Successful Upload
Once the folder is selected, Chrome will load the extension, and you will see it listed among your installed extensions. Look for the icon of the extension, usually displayed as a puzzle piece, in the Chrome toolbar.

#### Pin the Extension (Optional)
To easily access the extension while testing, you can pin it to the Chrome toolbar. Right-click on the extension’s icon and select the “Pin” option from the context menu. This will keep the extension icon visible even when you close and reopen Chrome.

---

This application currently uses Zapier to update the browser's local storage, but I'm intending to move that functionality to the Backend code base.