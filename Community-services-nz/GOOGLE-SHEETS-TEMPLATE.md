# 📊 GOOGLE SHEETS TEMPLATE FOR KAI & CARE NZ

## Create Your Google Sheet with These Exact Column Headers:

### **Sheet Name:** "Services"

| Column A | Column B | Column C | Column D | Column E | Column F | Column G | Column H | Column I | Column J |
|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| **id** | **name** | **category** | **city** | **address** | **phone** | **hours** | **notes** | **image** | **website** |

---

## Column Descriptions:

- **id**: Unique number (1, 2, 3, etc.)
- **name**: Service name (e.g., "Nelson City Mission Food Bank")
- **category**: Must be EXACTLY one of these:
  - Food
  - Clothing
  - Community
  - Whanau
  - Activities
  - Health
  - Legal
  - Transport
  - Employment
- **city**: City name (e.g., "Nelson", "Auckland", "Wellington")
- **address**: Full street address
- **phone**: Phone number (e.g., "03-548-1154")
- **hours**: Opening hours (e.g., "Mon-Fri 9am-4pm")
- **notes**: Additional info, special requirements
- **image**: Image URL from Unsplash (or leave blank for default)
- **website**: Full website URL (e.g., "https://www.example.com") - leave blank if none

---

## 📝 EXAMPLE ROWS:

Here are the first 3 services as examples:

| id | name | category | city | address | phone | hours | notes | image | website |
|----|------|----------|------|---------|-------|-------|-------|-------|---------|
| 1 | Nelson City Mission Food Bank | Food | Nelson | 46 Waimea Road, Nelson | 03-548-1154 | Mon-Fri 9am-4pm | Photo ID required, referral needed | https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80 | https://www.nelsoncitymission.org.nz |
| 2 | St Vincent de Paul Op Shop Nelson | Clothing | Nelson | 140 Rutherford Street, Nelson | 03-548-4804 | Mon-Sat 9am-4pm | Affordable clothing and household items | https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80 | https://www.svdp.org.nz |
| 3 | Nelson Public Library | Community | Nelson | 27 Halifax Street, Nelson | 03-546-8100 | Mon-Fri 9am-6pm, Sat-Sun 10am-4pm | Free WiFi, computers, warm space, JP services available | https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80 | https://nelson.govt.nz/library |

---

## 🎯 HOW TO SET UP:

### Step 1: Create the Sheet
1. Go to **Google Sheets** (sheets.google.com)
2. Create a new blank spreadsheet
3. Name it: **"Kai & Care NZ - Services Database"**
4. In the first row, add the column headers exactly as shown above

### Step 2: Add Your Services
1. Copy all 40 services from **SERVICES-DATA-COMPLETE.js**
2. Paste them into your sheet (I'll give you a pre-formatted CSV to import!)
3. Add any new services easily - just add new rows

### Step 3: Make It Public (Read-Only)
1. Click **Share** (top right)
2. Click **"Anyone with the link"**
3. Set permission to **"Viewer"** (read-only)
4. Click **Copy link**

### Step 4: Get Your Sheet ID
From the URL you copied, it looks like:
```
https://docs.google.com/spreadsheets/d/1a2b3c4d5e6f7g8h9i0j/edit
```

The Sheet ID is the part between `/d/` and `/edit`:
```
1a2b3c4d5e6f7g8h9i0j
```

Copy this ID - you'll need it!

---

## 📋 BENEFITS:

✅ Add new cities by just adding rows (no coding!)  
✅ Update service details instantly  
✅ Organize by tabs (one per city if you want)  
✅ Share with team members to help update  
✅ Export to CSV anytime  
✅ Filter and sort easily  

---

## 🔄 UPDATING THE APP:

Once your Sheet is ready:
1. Copy your Sheet ID
2. Open **app-v3-SHEETS-VERSION.html**
3. Find the line: `const SHEET_ID = 'YOUR_SHEET_ID_HERE';`
4. Replace with your actual Sheet ID
5. Save and test!

The app will automatically fetch services from your Sheet every time it loads!

---

## 💡 PRO TIPS:

- **Use data validation** for the "category" column to prevent typos
- **Freeze the header row** so it stays visible when scrolling
- **Add a "Last Updated" column** to track changes
- **Create separate tabs** for different cities if it gets large
- **Keep a backup tab** with all original data

---

**Next: See SHEETS-SETUP-GUIDE.md for complete step-by-step instructions!**
