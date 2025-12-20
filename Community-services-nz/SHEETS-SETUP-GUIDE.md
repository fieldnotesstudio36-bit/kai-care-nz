# 🚀 COMPLETE GOOGLE SHEETS SETUP GUIDE
## Step-by-Step: Moving Kai & Care NZ to Google Sheets

---

## ⏱️ TIME NEEDED: 15 minutes

---

## 📋 STEP 1: CREATE YOUR GOOGLE SHEET (3 minutes)

1. Go to **https://sheets.google.com**
2. Click **"Blank"** to create a new spreadsheet
3. At the top, click "Untitled spreadsheet" and rename it:
   ```
   Kai & Care NZ - Services Database
   ```
4. Click on the sheet tab at the bottom (says "Sheet1") and rename it to:
   ```
   Services
   ```

✅ **Sheet created!**

---

## 📥 STEP 2: IMPORT YOUR SERVICES DATA (2 minutes)

### Method A: Import the CSV (Easiest!)

1. In your Google Sheet, click **File → Import**
2. Click **"Upload"** tab
3. Drag and drop **SERVICES-IMPORT.csv** (I created this for you!)
4. Choose:
   - Import location: **"Replace current sheet"**
   - Separator type: **"Comma"**
5. Click **"Import data"**

🎉 **All 40 services are now in your sheet!**

### Method B: Manual Copy-Paste (If CSV doesn't work)

1. Open **GOOGLE-SHEETS-TEMPLATE.md**
2. Copy the column headers
3. Paste into Row 1 of your Google Sheet
4. Copy the example rows
5. Paste starting from Row 2

---

## 🔒 STEP 3: MAKE IT PUBLIC (READ-ONLY) (2 minutes)

1. Click the **"Share"** button (top right corner)
2. Under "General access", click **"Restricted"**
3. Change it to **"Anyone with the link"**
4. Make sure it says **"Viewer"** (not Editor!)
5. Click **"Copy link"**

✅ **Your sheet is now publicly readable!**

---

## 🆔 STEP 4: GET YOUR SHEET ID (1 minute)

Look at the URL you just copied. It looks like:
```
https://docs.google.com/spreadsheets/d/1a2b3c4d5e6f7g8h9i0j_EXAMPLE_ID/edit#gid=0
```

The **Sheet ID** is the long string between `/d/` and `/edit`:
```
1a2b3c4d5e6f7g8h9i0j_EXAMPLE_ID
```

**Copy this ID** - you'll need it in the next step!

---

## 💻 STEP 5: UPDATE YOUR APP CODE (5 minutes)

1. Open **app-v3-SHEETS-VERSION.html** in VS Code
2. Press **Ctrl+F** (Cmd+F on Mac)
3. Search for: `YOUR_SHEET_ID_HERE`
4. You'll find this line:
   ```javascript
   const SHEET_ID = 'YOUR_SHEET_ID_HERE';
   ```
5. Replace `YOUR_SHEET_ID_HERE` with your actual Sheet ID:
   ```javascript
   const SHEET_ID = '1a2b3c4d5e6f7g8h9i0j_EXAMPLE_ID';
   ```
6. **Save** the file (Ctrl+S or Cmd+S)

✅ **App is now connected to your Google Sheet!**

---

## ✅ STEP 6: TEST IT! (2 minutes)

1. **Close** any open browser tabs with the app
2. **Double-click** app-v3-SHEETS-VERSION.html
3. Wait a few seconds for it to load
4. Click through the categories

### ✅ It Works If:
- All categories show services
- Services have correct information
- Images load properly

### ❌ If It Doesn't Work:
- Check your Sheet ID is correct
- Make sure the sheet is public ("Anyone with the link")
- Make sure your sheet is named "Services" (exact spelling)
- Open browser console (F12) to see any error messages

---

## 🎉 YOU'RE DONE!

### What You Can Do Now:

✅ **Add new services** - Just add rows to your Google Sheet!  
✅ **Update services** - Edit any cell in your sheet  
✅ **Add cities** - Change the "city" column for any service  
✅ **Remove services** - Delete rows from your sheet  
✅ **Share editing access** - Let team members help update  

### 💡 Changes Take Effect:
- Instantly for new visitors
- Existing visitors need to refresh the page

---

## 🎯 PRO TIPS FOR MAINTAINING YOUR SHEET:

### 1. Data Validation for Categories
To prevent typos in the "category" column:
1. Select the entire "category" column (click column letter "C")
2. Click **Data → Data validation**
3. Choose **"List of items"**
4. Enter: `Food,Clothing,Community,Whanau,Activities,Health,Legal,Transport,Employment`
5. Click **Save**

Now you get a dropdown when entering categories!

### 2. Freeze the Header Row
1. Click on Row 2 (the first data row)
2. Click **View → Freeze → 1 row**

Now headers stay visible when you scroll!

### 3. Add Filters
1. Click any cell in Row 1
2. Click **Data → Create a filter**
3. Little dropdown arrows appear in headers
4. Click them to filter by city, category, etc.

### 4. Conditional Formatting
Highlight rows based on city:
1. Select all data rows
2. Click **Format → Conditional formatting**
3. Format cells if: "Text contains"
4. Value: "Nelson"
5. Choose a color
6. Click **Done**

---

## 📊 ORGANIZING FOR GROWTH:

### Option A: One Sheet, All Cities
Keep everything on the "Services" sheet with different city values

**Pros:**
- Simple to manage
- Easy to filter
- App loads faster

**Cons:**
- Gets crowded with many cities

### Option B: Multiple Sheets (One Per City)
Create separate sheets: "Nelson", "Auckland", "Wellington"

**Pros:**
- Organized by region
- Easier to see city-specific services

**Cons:**
- Need to update app code to fetch from multiple sheets
- Slightly more complex

**My Recommendation:** Start with Option A, switch to Option B when you have 100+ services.

---

## 🆘 TROUBLESHOOTING:

### Problem: "Services not loading"
**Fix:** 
- Check Sheet ID is correct
- Make sure sheet is public
- Check browser console for errors (F12)

### Problem: "Some services missing"
**Fix:**
- Make sure sheet is named "Services" exactly
- Check no empty rows in your data
- Verify all required columns have data

### Problem: "Images not showing"
**Fix:**
- Check image URLs are complete (start with https://)
- Use Unsplash URLs or other reliable image hosts
- If blank, app will use default image

### Problem: "Website button not working"
**Fix:**
- Make sure URLs start with https:// or http://
- Check for typos in website column
- Leave blank if service has no website

---

## 🎊 NEXT STEPS:

1. ✅ Test adding a new service to your sheet
2. ✅ Refresh the app and see it appear!
3. ✅ Share the sheet with anyone who helps maintain it
4. ⏳ Set up Stripe payment links
5. ⏳ Create QR code for app distribution
6. ⏳ Deploy to GitHub Pages

---

**Questions? Issues? Let me know and I'll help troubleshoot!**
