# 🔧 CODE MODIFICATIONS FOR GOOGLE SHEETS

## Quick Guide: Converting app-v3-COMPLETE.html to use Google Sheets

---

## STEP 1: Add Sheet ID Variable (2 lines to ADD)

**WHERE:** Right after `<script>` tag (around line 450)

**ADD THIS CODE:**
```javascript
        // Google Sheets Configuration
        const SHEET_ID = 'YOUR_SHEET_ID_HERE';  // Replace with your actual Sheet ID
        const SHEET_NAME = 'Services';
        let SERVICES = [];  // Will be populated from Google Sheets
```

---

## STEP 2: Delete Hardcoded Services (100+ lines to DELETE)

**WHERE:** Find the line that starts with `const SERVICES = [`

**DELETE:** Everything from `const SERVICES = [` down to the closing `];` 

**This includes all 40 services** (around lines 470-920)

---

## STEP 3: Add Function to Fetch from Google Sheets (30 lines to ADD)

**WHERE:** Right after where you deleted the services

**ADD THIS CODE:**
```javascript
        // Fetch services from Google Sheets
        async function loadServicesFromSheet() {
            try {
                const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;
                const response = await fetch(url);
                const text = await response.text();
                
                // Parse Google's JSON response
                const json = JSON.parse(text.substring(47).slice(0, -2));
                const rows = json.table.rows;
                
                // Convert to services array
                SERVICES = rows.map((row, index) => {
                    const cells = row.c;
                    return {
                        id: cells[0]?.v || index + 1,
                        name: cells[1]?.v || '',
                        category: cells[2]?.v || '',
                        city: cells[3]?.v || '',
                        address: cells[4]?.v || '',
                        phone: cells[5]?.v || '',
                        hours: cells[6]?.v || '',
                        notes: cells[7]?.v || '',
                        image: cells[8]?.v || 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
                        website: cells[9]?.v || ''
                    };
                });
                
                render();
            } catch (error) {
                console.error('Error loading services:', error);
                document.getElementById('app').innerHTML = `
                    <div style="text-align: center; padding: 50px; color: white;">
                        <h2>⚠️ Could not load services</h2>
                        <p>Please check your internet connection and Sheet ID</p>
                    </div>
                `;
            }
        }
```

---

## STEP 4: Add Website Button to Service Detail Page

**WHERE:** Find the section with "Get Directions" and "Call Now" buttons (around line 1050)

**FIND THIS:**
```javascript
                                    <button class="btn btn-primary" onclick="getDirections('${service.address}', '${service.city}')">
                                        🗺️ Directions / Ara
                                    </button>
                                    ${service.phone ? `
                                    <button class="btn btn-secondary" onclick="callPhone('${service.phone}')">
                                        📞 Waea / Call
                                    </button>
                                    ` : ''}
```

**REPLACE WITH:**
```javascript
                                    <button class="btn btn-primary" onclick="getDirections('${service.address}', '${service.city}')">
                                        🗺️ Directions / Ara
                                    </button>
                                    ${service.phone ? `
                                    <button class="btn btn-secondary" onclick="callPhone('${service.phone}')">
                                        📞 Waea / Call
                                    </button>
                                    ` : ''}
                                    ${service.website ? `
                                    <button class="btn btn-secondary" onclick="window.open('${service.website}', '_blank')" style="background: #4caf50;">
                                        🌐 Visit Website
                                    </button>
                                    ` : ''}
```

---

## STEP 5: Update Initialization Code

**WHERE:** Find the bottom of the script, the last few lines (around line 1270)

**FIND THIS:**
```javascript
        // Initialize app
        render();
```

**REPLACE WITH:**
```javascript
        // Initialize app - load from Google Sheets
        loadServicesFromSheet();
```

---

## ✅ THAT'S IT!

Save the file and test it!

---

## 🎯 SUMMARY OF CHANGES:

1. ✅ Added Sheet ID configuration
2. ✅ Deleted hardcoded services array  
3. ✅ Added function to fetch from Google Sheets
4. ✅ Added website button
5. ✅ Changed initialization to load from Sheets

**Total modifications:** 
- ~3 small additions
- ~1 large deletion (services array)
- ~1 button addition
- ~1 line change

---

## 💡 ALTERNATIVE: Use the Pre-Made Version

If this seems complicated, I can create **app-v3-SHEETS-COMPLETE.html** with all these changes already done. 

Just say "create the complete Sheets version" and I'll build it!
