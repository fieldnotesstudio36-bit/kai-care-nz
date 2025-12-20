// ====================
// NATIONAL HELPLINES (Display at top of Hauora page)
// ====================

const NATIONAL_HELPLINES = {
    emergency: [
        { name: "Emergency Services", number: "111", desc: "Police, Fire, Ambulance" },
        { name: "Poison Centre", number: "0800 764 766", desc: "24/7 poisoning advice" }
    ],
    mental_health: [
        { name: "Need to Talk", number: "1737", desc: "Call or text, 24/7" },
        { name: "Lifeline", number: "0800 543 354", desc: "24/7 support" },
        { name: "Suicide Crisis Helpline", number: "0508 828 865", desc: "0508 TAUTOKO, 24/7" },
        { name: "Depression Helpline", number: "0800 111 757", desc: "Free text 4202" },
        { name: "Samaritans", number: "0800 726 666", desc: "24/7 listening service" },
        { name: "Youthline", number: "0800 376 633", desc: "Free text 234, for young people" }
    ],
    family_violence: [
        { name: "Women's Refuge", number: "0800 733 843", desc: "24/7 crisis line" },
        { name: "Family Violence Info Line", number: "0800 456 450", desc: "Information & support" },
        { name: "Shakti (migrant women)", number: "0800 742 584", desc: "Culturally competent support" },
        { name: "Shine", number: "0508 744 633", desc: "Domestic abuse helpline" }
    ],
    sexual_assault: [
        { name: "Safe to Talk", number: "0800 044 334", desc: "Sexual harm helpline, 24/7" }
    ],
    addiction: [
        { name: "Alcohol Drug Helpline", number: "0800 787 797", desc: "Free text 8681, 24/7" },
        { name: "Gambling Helpline", number: "0800 654 655", desc: "Free text 8006, 24/7" }
    ],
    rainbow: [
        { name: "OUTLine", number: "0800 688 5463", desc: "6pm-9pm daily, LGBTQ+ support" }
    ]
};

// ====================
// JUSTICE OF PEACE INFO (Display in Legal Support)
// ====================

const JP_INFO = {
    title: "Justice of the Peace (JP) Services",
    description: "JPs are volunteers who can certify documents, witness signatures, and administer oaths - ALL FREE",
    services: [
        "Certify copies of documents",
        "Witness signatures",
        "Administer oaths and declarations",
        "All services completely free"
    ],
    how_to_find: [
        "Visit https://justiceofthepeace.org.nz and search by location",
        "Check your local library (many have JP service times)",
        "Citizens Advice Bureau often has JPs available",
        "Nelson Public Library - check website for JP service times",
        "Richmond Library - check website for JP service times"
    ]
};

// ====================
// BUS ROUTES (Display in Transport)
// ====================

const BUS_ROUTES = [
    {
        name: "Route 1: Richmond - Stoke - Nelson",
        description: "Every 30 minutes weekdays, connects Richmond to Nelson via Stoke",
        link: "https://ebus.nz/routes-and-timetables/richmond-nelson-via-waimea-road/"
    },
    {
        name: "Route 2: Richmond - Tāhunanui - Nelson",
        description: "Every 30 minutes, beach route via Tāhunanui",
        link: "https://ebus.nz/routes-and-timetables/"
    },
    {
        name: "Route 4: Nelson - Airport - Tāhunanui",
        description: "Airport connection, multiple times daily",
        link: "https://ebus.nz/routes-and-timetables/"
    },
    {
        name: "Route 5: Nelson - Motueka Express",
        description: "Express service to Motueka",
        link: "https://ebus.nz/routes-and-timetables/"
    },
    {
        name: "Route 6: Nelson - Wakefield - Brightwater",
        description: "Rural express service",
        link: "https://ebus.nz/routes-and-timetables/"
    }
];

const BUS_INFO = {
    intro: "Nelson Tasman's eBus service connects Nelson, Richmond, Stoke, and Motueka with affordable electric buses.",
    fares: [
        "$2 flat fare on Bee Card (urban Nelson-Richmond routes)",
        "Community Services Card holders get cheaper rates",
        "SuperGold Card: Free off-peak travel",
        "Cash accepted (higher fare than Bee Card)"
    ],
    bee_card_info: [
        "Purchase at Richmond Library, Nelson i-SITE, or online at ebus.nz",
        "Load money at participating retailers",
        "Tap on and off when you board"
    ]
};

// ====================
// FACEBOOK GROUPS (Add these as info sections)
// ====================

const FACEBOOK_GROUPS = {
    buy_sell: [
        "Nelson Buy Sell Swap",
        "Nelson Bargains & For Sale",
        "Nelson Second Hand Sunday",
        "Richmond Buy Sell Swap",
        "Motueka Buy Sell Exchange"
    ],
    jobs: [
        "Nelson Jobs & Work",
        "Nelson Hospitality Jobs",
        "Nelson & Tasman Jobs"
    ],
    housing: [
        "Nelson Flats & Flatmates Wanted",
        "Richmond Rentals",
        "Nelson Housing & Flatshares"
    ]
};

// Note: Facebook group links change frequently. Users can search these names on Facebook.
// Add this info to Op Shops, Work, and as general resources.
