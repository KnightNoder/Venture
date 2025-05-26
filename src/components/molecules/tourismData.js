// tourismData.js - Complete European Tourism Data
export const tourismData = [
  {
    country: "Andorra",
    description: "Andorra is a picturesque microstate nestled in the Pyrenees, known for its ski resorts, mountain trails, and duty-free shopping. With its charming capital, Andorra la Vella, it is a perfect year-round escape for nature and adventure lovers.",
    basicInfo: {
      capital: "Reykjavík",
      currency: "Icelandic Króna (ISK)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "F"],
      timeZone: "Greenwich Mean Time (GMT, UTC +0) – no daylight saving time",
      officialLanguage: "Icelandic",
      otherLanguages: []
    },
    popularAttractions: [
      { name: "Golden Circle Route", description: "Includes Þingvellir National Park, Gullfoss Waterfall, and Geysir" },
      { name: "Blue Lagoon", description: "Iconic geothermal spa located near Reykjavík" },
      { name: "Northern Lights (Aurora Borealis)", description: "Best viewed from October to March" },
      { name: "Jökulsárlón Glacier Lagoon", description: "Icebergs floating on a stunning glacial lake" },
      { name: "Vatnajökull National Park", description: "Home to Europe's largest glacier" },
      { name: "Ring Road (Route 1)", description: "A scenic drive that circles the entire island" },
      { name: "Skógafoss & Seljalandsfoss", description: "Two of the most breathtaking waterfalls in Iceland" },
      { name: "Reykjavík", description: "The quirky, colorful capital known for culture, music, and nightlife" },
      { name: "Black Sand Beach (Reynisfjara)", description: "Notable for striking basalt formations and a dramatic coastline" },
      { name: "Ice Cave Tours & Glacier Hiking", description: "Unique adventures exploring Iceland's frozen landscapes" }
    ],
    faq: {
      famousFor: ["Volcanoes", "Glaciers", "Geothermal spas", "Northern Lights", "Waterfalls", "Unspoiled landscapes"],
      entryRequirements: "Schengen visa required for non-EU citizens",
      tipping: "Not expected; service is usually included in prices",
      weather: {
        winter: { months: "Nov–Mar", description: "Cold, snowy, and dark — best for viewing the Northern Lights", temperature: "avg -3°C to 3°C" },
        summer: { months: "Jun–Aug", description: "Cool and bright, with the Midnight Sun phenomenon", temperature: "avg 10°C to 15°C" }
      },
      bestTimeToVisit: {
        winter: "Perfect for seeing the Northern Lights and exploring ice caves",
        springSummer: "Summer: Ideal for road trips and hiking"
      }
    }
  },
  {
    country: "Austria",
    description: "Austria is a cultural gem in the heart of Europe, known for its alpine landscapes, classical music, and historic cities like Vienna and Salzburg. It is a year-round destination, perfect for skiing, sightseeing, and scenic road trips.",
    basicInfo: {
      capital: "Vienna",
      currency: "Euro (€)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "F"],
      timeZone: "Central European Time (CET, UTC +1)",
      officialLanguage: "German",
      otherLanguages: []
    },
    popularAttractions: [
      { name: "Vienna", description: "Home to Mozart, grand palaces (Schönbrunn, Hofburg), and world-class museums" },
      { name: "Salzburg", description: "A picturesque old town and the birthplace of Mozart" },
      { name: "Hallstatt", description: "A fairytale lakeside village and UNESCO World Heritage Site" },
      { name: "Innsbruck", description: "A gateway to the Alps and a hub for winter sports" },
      { name: "Vienna State Opera", description: "Iconic among classical music lovers" },
      { name: "Lake Wolfgang (Wolfgangsee)", description: "Known for scenic boat rides and hiking trails" },
      { name: "Grossglockner High Alpine Road", description: "A breathtaking drive through the Austrian Alps" },
      { name: "Melk Abbey", description: "A stunning baroque monastery overlooking the Danube" }
    ],
    faq: {
      famousFor: ["Classical music", "Alpine skiing", "Castles", "Lakes", "Baroque architecture"],
      entryRequirements: "No visa needed for EU citizens; Schengen visa accepted for others",
      tipping: "5–10% is appreciated; often included in the bill",
      weather: {
        winter: { months: "Dec–Feb", description: "Cold and snowy, perfect for skiing", temperature: "avg -5°C to 3°C" },
        summer: { months: "Jun–Aug", description: "Warm and pleasant", temperature: "avg 15°C to 27°C" }
      },
      bestTimeToVisit: {
        winter: "Ideal for alpine skiing",
        springSummer: "Great for city tours, hiking, and music festivals"
      }
    }
  },
  {
    country: "Belgium",
    description: "Belgium is a charming blend of medieval towns, modern cities, and rich cultural heritage. Known for its chocolates, waffles, and world-famous beers, it is also home to iconic sites like Brussels' Grand Palace, Bruges' canals, and Ghent's Gothic architecture. A perfect destination for food lovers, history buffs, and art enthusiasts alike.",
    basicInfo: {
      capital: "Brussels",
      currency: "Euro (€)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "E"],
      timeZone: "Central European Time (CET, UTC +1)",
      officialLanguage: "Dutch",
      otherLanguages: ["French", "German"]
    },
    popularAttractions: [
      { name: "Grand Place (Brussels)", description: "A stunning central square and UNESCO World Heritage Site" },
      { name: "Bruges", description: "A medieval city known for its canals, cobblestone streets, and chocolate shops" },
      { name: "Ghent", description: "A vibrant mix of Gothic architecture, history, and student energy" },
      { name: "Belgian Beer Tour", description: "Visit breweries and taste unique local brews" },
      { name: "Choco-Story", description: "Chocolate museums located in Brussels and Bruges" },
      { name: "Royal Museum of Fine Arts (Antwerp)", description: "Home to works by Rubens and Van Dyck" },
      { name: "Battlefields of Flanders (Ypres)", description: "WWI memorials and museums" },
      { name: "Ostend", description: "Belgium's beach town on the North Sea" }
    ],
    faq: {
      famousFor: ["Chocolates", "Waffles", "Beer", "Medieval towns", "Art", "EU institutions"],
      entryRequirements: "No visa needed for EU citizens; Schengen visa accepted for others",
      tipping: "Optional but appreciated (rounding up is common)",
      weather: {
        winter: { months: "Dec–Feb", description: "Cold and damp", temperature: "avg 0°C to 6°C" },
        summer: { months: "Jun–Aug", description: "Mild and pleasant", temperature: "avg 15°C to 25°C" }
      },
      bestTimeToVisit: {
        winter: "Christmas markets and festive atmosphere",
        springSummer: "Spring (April–June) and Autumn (Sept–Oct) for fewer crowds and great weather"
      }
    }
  },
  {
    country: "Croatia",
    description: "Croatia offers a stunning mix of crystal-clear coastlines, charming old towns, and island escapes. From Dubrovnik's ancient walls to the waterfalls of Plitvice, it is a Mediterranean gem with a rich history and natural beauty.",
    basicInfo: {
      capital: "Zagreb",
      currency: "Euro (€) (adopted in 2023)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "F"],
      timeZone: "Central European Time (CET, UTC +1)",
      officialLanguage: "Croatian",
      otherLanguages: []
    },
    popularAttractions: [
      { name: "Dubrovnik", description: "The \"Pearl of the Adriatic,\" with medieval walls and Game of Thrones filming spots" },
      { name: "Split", description: "Home to the impressive Diocletian's Palace and vibrant waterfront" },
      { name: "Plitvice Lakes National Park", description: "Breathtaking waterfalls and turquoise lakes" },
      { name: "Hvar Island", description: "Chic island escape with crystal-clear waters and nightlife" },
      { name: "Zlatni Rat Beach (Bol)", description: "One of Europe's most photographed beaches" },
      { name: "Korčula", description: "Birthplace of Marco Polo, known for its fortified old town" },
      { name: "Zagreb", description: "The capital with museums, cafes, and a lively arts scene" },
      { name: "Krka National Park", description: "Waterfalls and walking trails, with swimming allowed in select areas" },
      { name: "Rovinj & Pula (Istria)", description: "Italian-influenced coastal towns with Roman ruins and seafood" }
    ],
    faq: {
      famousFor: ["Adriatic coastline", "Ancient Roman ruins", "National parks", "Island hopping", "Game of Thrones filming sites"],
      entryRequirements: "No visa needed for EU citizens; Schengen visa accepted for others",
      tipping: "Not mandatory, but 5–10% is appreciated in restaurants and taxis",
      weather: {
        winter: { months: "Dec–Feb", description: "Mild winters on coast, cold inland", temperature: "Coastal: mild, Inland: can snow" },
        summer: { months: "Jun–Aug", description: "Hot summers", temperature: "25–35°C coastal, warm inland" }
      },
      bestTimeToVisit: {
        winter: "Mild coastal weather",
        springSummer: "May to September: Ideal for beaches, sailing, and festivals. Spring and Autumn: Fewer crowds and pleasant weather"
      }
    }
  },
  {
    country: "Cyprus",
    description: "Cyprus is a sun-soaked island blending Mediterranean charm with ancient history and coastal beauty. With golden beaches, ancient ruins, and a mix of Greek and Turkish culture, it's a perfect all-season destination.",
    basicInfo: {
      capital: "Nicosia",
      currency: "Euro (€)",
      voltage: "240V, 50Hz",
      plugTypes: ["G"],
      timeZone: "Eastern European Time (EET, UTC +2)",
      officialLanguage: "Greek",
      otherLanguages: ["Turkish"]
    },
    popularAttractions: [
      { name: "Ancient Kourion", description: "Stunning Greco-Roman ruins featuring an amphitheater overlooking the sea" },
      { name: "Fig Tree Bay (Protaras)", description: "One of Cyprus's most famous beaches, known for its crystal-clear waters" },
      { name: "Kykkos Monastery", description: "A lavish Byzantine monastery nestled in the Troodos Mountains" },
      { name: "Aphrodite's Rock (Petra tou Romiou)", description: "The mythical birthplace of the goddess Aphrodite" },
      { name: "Kolossi Castle", description: "A well-preserved medieval fortress near Limassol" },
      { name: "Troodos Mountains", description: "Ideal for hiking, wine tasting, and exploring mountain villages" },
      { name: "Nicosia Old Town", description: "A historic city center with narrow alleys, shops, and cultural sites" },
      { name: "Lara Bay", description: "A remote beach and nesting site for endangered sea turtles" },
      { name: "Paphos Archaeological Park", description: "A UNESCO World Heritage Site known for ancient mosaics and Roman villas" }
    ],
    faq: {
      famousFor: ["Beaches", "Ancient ruins", "Mountain villages", "Mediterranean cuisine", "Year-round sunshine"],
      entryRequirements: "EU citizens don't need a visa; others may require a Schengen or national visa",
      tipping: "Optional, but 5–10% is appreciated",
      weather: {
        winter: { months: "Dec–Feb", description: "Mild, with occasional rain", temperature: "avg 10–17°C" },
        summer: { months: "Jun–Aug", description: "Hot and dry", temperature: "avg 30–38°C" }
      },
      bestTimeToVisit: {
        winter: "Mild winter weather",
        springSummer: "April to June and September to October: Ideal for beach weather and fewer crowds"
      }
    }
  },
  {
    country: "Czechia",
    description: "Czechia is a storybook destination, known for its medieval towns, world-class beer, and one of Europe's most beautiful capitals—Prague. From cobblestone alleys to majestic castles, it blends history, culture, and charm.",
    basicInfo: {
      capital: "Prague",
      currency: "Czech Koruna (CZK)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "E"],
      timeZone: "Central European Time (CET, UTC +1)",
      officialLanguage: "Czech",
      otherLanguages: []
    },
    popularAttractions: [
      { name: "Prague Castle", description: "One of the largest ancient castles in the world, overlooking the city" },
      { name: "Charles Bridge", description: "Iconic 14th-century bridge featuring statues and street artists" },
      { name: "Pilsner Urquell Brewery (Plzeň)", description: "The birthplace of the world's first pale lager" },
      { name: "Český Krumlov", description: "A UNESCO-listed fairy-tale town with a castle and old-world charm" },
      { name: "Bohemian Switzerland National Park", description: "Known for its dramatic sandstone formations and scenic hiking trails" },
      { name: "Karlovy Vary", description: "A famous spa town renowned for its thermal springs and colorful architecture" },
      { name: "Krkonoše Mountains", description: "Ideal for hiking and skiing" },
      { name: "Old Town Square (Prague)", description: "Home to the Astronomical Clock and Gothic architecture" },
      { name: "Kutná Hora", description: "A UNESCO World Heritage Site famous for the Bone Church (Sedlec Ossuary)" }
    ],
    faq: {
      famousFor: ["Castles", "Beer culture", "Fairy-tale towns", "Gothic and Baroque architecture", "Thermal spas"],
      entryRequirements: "Schengen visa required for non-EU citizens",
      tipping: "A 10% tip in restaurants is customary",
      weather: {
        winter: { months: "Dec–Feb", description: "Cold, sometimes snowy", temperature: "avg -1°C to 5°C" },
        summer: { months: "Jun–Aug", description: "Warm and pleasant", temperature: "avg 20–27°C" }
      },
      bestTimeToVisit: {
        winter: "Christmas markets and winter charm",
        springSummer: "May to September: Ideal for sightseeing, festivals, and mild weather"
      }
    }
  },
  {
    country: "Denmark",
    description: "Denmark blends minimalist design, rich history, and modern sustainability into one vibrant package. From Copenhagen's canals to fairy-tale castles and cozy cafes, it is a Scandinavian escape full of charm and culture.",
    basicInfo: {
      capital: "Copenhagen",
      currency: "Danish Krone (DKK)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "K"],
      timeZone: "Central European Time (CET, UTC +1)",
      officialLanguage: "Danish",
      otherLanguages: []
    },
    popularAttractions: [
      { name: "Tivoli Gardens (Copenhagen)", description: "One of the world's oldest amusement parks" },
      { name: "Rosenborg Castle", description: "Home to Denmark's crown jewels" },
      { name: "The Little Mermaid Statue", description: "An iconic tribute to Hans Christian Andersen" },
      { name: "Nyhavn", description: "A colorful harbor lined with cafes, perfect for cycling and walking" },
      { name: "Møns Klint", description: "Stunning white chalk cliffs on the Baltic Sea" },
      { name: "The National Museum of Denmark (Copenhagen)", description: "Features rich cultural and historical exhibits" },
      { name: "Skagen", description: "A beach town where two seas meet" },
      { name: "ARoS Aarhus Art Museum", description: "Famous for its rainbow-colored rooftop walkway" },
      { name: "Odense", description: "The birthplace of Hans Christian Andersen, filled with fairy-tale charm" },
      { name: "Freetown Christiania (Copenhagen)", description: "A unique, self-governed community known for its alternative lifestyle" }
    ],
    faq: {
      famousFor: ["Scandinavian design", "Cycling culture", "Royal palaces", "Fairy-tale castles", "Hygge lifestyle", "Sustainability"],
      entryRequirements: "Schengen visa required for non-EU citizens",
      tipping: "Not mandatory; service charge is included, but small tips are appreciated",
      weather: {
        winter: { months: "Dec–Feb", description: "Cold and windy", temperature: "avg 0°C to 5°C" },
        summer: { months: "Jun–Aug", description: "Mild and pleasant", temperature: "avg 17°C to 22°C" }
      },
      bestTimeToVisit: {
        winter: "Christmas markets and cozy hygge atmosphere",
        springSummer: "May to September: Ideal for the best weather and outdoor activities"
      }
    }
  },
  {
    country: "Finland",
    description: "Finland is a land of contrasts—snowy winters with auroras, endless summer days, serene lakes, and world-famous saunas. It is a peaceful, nature-rich destination, ideal for both adventure and relaxation.",
    basicInfo: {
      capital: "Helsinki",
      currency: "Euro (€)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "F"],
      timeZone: "Eastern European Time (EET, UTC +2)",
      officialLanguage: "Finnish",
      otherLanguages: ["Swedish"]
    },
    popularAttractions: [
      { name: "Lapland", description: "Visit Santa Claus Village, go husky sledding, and see the Northern Lights" },
      { name: "Helsinki", description: "A stylish capital with impressive design, sea views, and vibrant markets" },
      { name: "Rovaniemi", description: "The official hometown of Santa Claus and a prime location for aurora viewing" },
      { name: "Lake Saimaa & Finnish Lakeland", description: "Ideal for kayaking, staying in cottages, and nature escapes" },
      { name: "Traditional Finnish Saunas", description: "Found throughout the country, often situated by lakes" },
      { name: "Turku Castle", description: "One of the oldest buildings in Finland, rich in medieval history" },
      { name: "Nuuksio & Koli National Parks", description: "Perfect for hiking and spotting Finnish wildlife" },
      { name: "Temppeliaukio Church (Rock Church)", description: "A remarkable church carved into solid rock in Helsinki" },
      { name: "Flow Festival (Helsinki)", description: "A popular summer festival celebrating music and the arts" },
      { name: "Winter Activities", description: "Ice fishing, skiing, snowshoeing, and visiting reindeer farms are essential Finnish winter experiences" }
    ],
    faq: {
      famousFor: ["Saunas", "Northern Lights", "Thousands of lakes", "Design", "Lapland", "Being one of the happiest countries on Earth"],
      entryRequirements: "Schengen visa required for non-EU citizens",
      tipping: "Not expected, but rounding up is appreciated",
      weather: {
        winter: { months: "Dec–Feb", description: "Cold and snowy, ideal for viewing the Northern Lights", temperature: "avg -15°C to -3°C" },
        summer: { months: "Jun–Aug", description: "Mild and bright, with long daylight hours", temperature: "avg 15°C to 25°C" }
      },
      bestTimeToVisit: {
        winter: "For snow, skiing, Northern Lights, and visiting Santa Claus Village",
        springSummer: "For lakes, festivals, and experiencing the Midnight Sun"
      }
    }
  },
  {
    country: "France",
    description: "France is a dream destination known for its rich culture, world-class cuisine, romantic cities, and stunning landscapes. From the Eiffel Tower to the French Riviera, it seamlessly blends art, elegance, and adventure like no other.",
    basicInfo: {
      capital: "Paris",
      currency: "Euro (€)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "E"],
      timeZone: "Central European Time (CET, UTC +1)",
      officialLanguage: "French",
      otherLanguages: []
    },
    popularAttractions: [
      { name: "Eiffel Tower (Paris)", description: "An iconic symbol and must-see monument" },
      { name: "Louvre Museum", description: "Home to the Mona Lisa and countless masterpieces" },
      { name: "Mont-Saint-Michel", description: "A magical island abbey off the coast of Normandy" },
      { name: "Loire Valley", description: "Renowned for its castles, vineyards, and scenic drives" },
      { name: "French Riviera (Nice, Cannes, Saint-Tropez)", description: "Glamorous beaches and vibrant festivals" },
      { name: "Chamonix & the French Alps", description: "Ideal for skiing, hiking, and mountain adventures" },
      { name: "Bordeaux & Burgundy", description: "Renowned wine regions offering vineyard tours and tastings" },
      { name: "Palace of Versailles", description: "A stunning royal residence with exquisite gardens" },
      { name: "Provence", description: "Known for its lavender fields, sun-soaked villages, and Mediterranean charm" },
      { name: "Lyon", description: "The culinary capital of France and a UNESCO World Heritage city" }
    ],
    faq: {
      famousFor: ["Eiffel Tower", "Wine", "Cuisine", "Fashion", "Art", "History", "Riviera beaches", "The Alps"],
      entryRequirements: "Schengen visa required for non-EU citizens",
      tipping: "Service is usually included in restaurants; an additional 5–10% is appreciated but optional",
      weather: {
        winter: { months: "Dec–Feb", description: "Cold to mild", temperature: "avg 3°C to 10°C" },
        summer: { months: "Jun–Aug", description: "Warm and sunny", temperature: "avg 20°C to 30°C" }
      },
      bestTimeToVisit: {
        winter: "Christmas markets and cozy atmosphere",
        springSummer: "Spring (April–June) and Autumn (September–October): Pleasant weather and fewer crowds"
      }
    }
  },
  {
    country: "Germany",
    description: "Germany offers a perfect blend of history, culture, and innovation—from fairy-tale castles and historic cities to cutting-edge design and world-famous beer festivals. It's a must-visit destination for culture lovers, foodies, and nature seekers alike.",
    basicInfo: {
      capital: "Berlin",
      currency: "Euro (€)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "F"],
      timeZone: "Central European Time (CET, UTC +1)",
      officialLanguage: "German",
      otherLanguages: []
    },
    popularAttractions: [
      { name: "Neuschwanstein Castle (Bavaria)", description: "An iconic fairy-tale castle nestled in the Alps" },
      { name: "Berlin", description: "Explore the Berlin Wall, Brandenburg Gate, and vibrant street art scene" },
      { name: "Munich", description: "Famous for Oktoberfest and its Bavarian charm" },
      { name: "Nuremberg & Cologne Christmas Markets", description: "Magical holiday experiences with festive lights and local crafts" },
      { name: "Black Forest", description: "Dense woodlands, hiking trails, and picturesque villages" },
      { name: "Rhine Valley", description: "Scenic river cruises with vineyards and medieval castles" },
      { name: "Autobahn & BMW Museum (Munich)", description: "A must for car and engineering enthusiasts" },
      { name: "Dresden", description: "A baroque gem with art, opera, and beautifully restored architecture" },
      { name: "Leipzig", description: "A city of music, associated with Bach and Mendelssohn" },
      { name: "Heidelberg", description: "A romantic town known for its historic university and riverside castle" }
    ],
    faq: {
      famousFor: ["Castles", "Beer culture", "Christmas markets", "History", "Engineering", "Forests"],
      entryRequirements: "Schengen visa for non-EU citizens",
      tipping: "Optional but appreciated—round up or 5–10% at restaurants",
      weather: {
        winter: { months: "Dec–Feb", description: "Cold, with snow in many regions", temperature: "avg -1°C to 5°C" },
        summer: { months: "Jun–Aug", description: "Mild to warm", temperature: "avg 20°C to 30°C" }
      },
      bestTimeToVisit: {
        winter: "Christmas markets and winter festivities",
        springSummer: "May to October for festivals, sightseeing, and pleasant weather"
      }
    }
  },
  {
    country: "Greece",
    description: "Greece blends ancient history with breathtaking island views, offering visitors everything from the wonders of the Acropolis to sun-drenched beaches. It's the ultimate escape for culture, food, and sea lovers alike.",
    basicInfo: {
      capital: "Athens",
      currency: "Euro (€)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "F"],
      timeZone: "Eastern European Time (EET, UTC +2)",
      officialLanguage: "Greek",
      otherLanguages: []
    },
    popularAttractions: [
      { name: "Acropolis of Athens", description: "An ancient citadel featuring the Parthenon, a symbol of classical Greece" },
      { name: "Santorini", description: "World-famous for its white-washed buildings, breathtaking sunsets, and volcanic beaches" },
      { name: "Mykonos", description: "A chic island known for its vibrant nightlife, iconic windmills, and stunning coastlines" },
      { name: "Meteora Monasteries", description: "Majestic cliff-top monasteries offering dramatic views" },
      { name: "Navagio Beach (Zakynthos)", description: "Also known as Shipwreck Beach, accessible only by boat" },
      { name: "Delphi", description: "Once considered the center of the ancient world, featuring well-preserved ruins" },
      { name: "Samaria Gorge (Crete)", description: "A must-do hike for nature enthusiasts" },
      { name: "Rhodes Old Town", description: "A UNESCO World Heritage Site with medieval architecture and ancient ruins" },
      { name: "Peloponnese Region", description: "Home to Olympia, ancient theaters, and renowned wineries" },
      { name: "Greek Tavernas & Seaside Cafés", description: "Local food is an essential part of the Greek experience" }
    ],
    faq: {
      famousFor: ["Ancient ruins", "Whitewashed islands", "Mediterranean cuisine", "Beaches", "Mythology"],
      entryRequirements: "Schengen visa required for non-EU citizens",
      tipping: "Not mandatory, but 5–10% is appreciated in restaurants",
      weather: {
        winter: { months: "Dec–Feb", description: "Mild to cool, with occasional rain", temperature: "avg 7°C to 15°C" },
        summer: { months: "Jun–Aug", description: "Hot and dry", temperature: "avg 28°C to 35°C" }
      },
      bestTimeToVisit: {
        winter: "Mild weather for sightseeing",
        springSummer: "April to June and September to October: Ideal weather and fewer crowds"
      }
    }
  },
  {
    country: "Hungary",
    description: "Hungary is where grand architecture, rich culture, and relaxing thermal baths converge. With Budapest's stunning skyline and the countryside's rustic charm, it's one of Europe's most underrated destinations.",
    basicInfo: {
      capital: "Budapest",
      currency: "Hungarian Forint (HUF)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "F"],
      timeZone: "Central European Time (CET, UTC +1)",
      officialLanguage: "Hungarian",
      otherLanguages: []
    },
    popularAttractions: [
      { name: "Buda Castle (Budapest)", description: "A UNESCO World Heritage Site offering panoramic views of the city" },
      { name: "Chain Bridge & Parliament Building", description: "Iconic landmarks along the Danube River" },
      { name: "Széchenyi Thermal Bath", description: "One of Europe's largest and most famous thermal bath complexes" },
      { name: "Fisherman's Bastion", description: "Offers fairy-tale views over Budapest" },
      { name: "Central Market Hall", description: "A paradise for foodies, offering Hungarian cuisine and souvenirs" },
      { name: "Tokaj Wine Region", description: "UNESCO-listed, known for its world-famous sweet dessert wines" },
      { name: "Lake Balaton", description: "Central Europe's largest lake, ideal for summer vacations" },
      { name: "Hungarian State Opera House", description: "An architectural masterpiece and cultural hub" },
      { name: "Ruin Bars (Budapest)", description: "Trendy bars located in abandoned buildings, offering a unique nightlife experience" },
      { name: "Eger Castle & Thermal Spa", description: "A charming baroque town known for its historical sites and local wines" }
    ],
    faq: {
      famousFor: ["Thermal baths", "Grand architecture", "The Danube River", "Ruin bars", "Paprika-rich cuisine"],
      entryRequirements: "Schengen visa required for non-EU citizens",
      tipping: "A 10% tip is common and appreciated, especially in restaurants",
      weather: {
        winter: { months: "Dec–Feb", description: "Cold, with possible snowfall", temperature: "avg -2°C to 5°C" },
        summer: { months: "Jun–Aug", description: "Warm and sunny", temperature: "avg 22°C to 30°C" }
      },
      bestTimeToVisit: {
        winter: "Thermal baths and Christmas markets",
        springSummer: "April to October: Spring and autumn offer mild weather, while summer is ideal for festivals and outdoor activities"
      }
    }
  },
  {
    country: "Iceland",
    description: "Iceland is a land of fire and ice—where waterfalls, volcanoes, glaciers, and geothermal lagoons create a surreal natural wonderland. It's perfect for adventure seekers, nature lovers, and those chasing the Northern Lights.",
    basicInfo: {
      capital: "Reykjavík",
      currency: "Icelandic Króna (ISK)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "F"],
      timeZone: "Greenwich Mean Time (GMT, UTC +0) – no daylight saving time",
      officialLanguage: "Icelandic",
      otherLanguages: []
    },
    popularAttractions: [
      { name: "Golden Circle Route", description: "Includes Þingvellir National Park, Gullfoss Waterfall, and Geysir" },
      { name: "Blue Lagoon", description: "Iconic geothermal spa located near Reykjavík" },
      { name: "Northern Lights (Aurora Borealis)", description: "Best viewed from October to March" },
      { name: "Jökulsárlón Glacier Lagoon", description: "Icebergs floating on a stunning glacial lake" },
      { name: "Vatnajökull National Park", description: "Home to Europe's largest glacier" },
      { name: "Ring Road (Route 1)", description: "A scenic drive that circles the entire island" },
      { name: "Skógafoss & Seljalandsfoss", description: "Two of the most breathtaking waterfalls in Iceland" },
      { name: "Reykjavík", description: "The quirky, colorful capital known for culture, music, and nightlife" },
      { name: "Black Sand Beach (Reynisfjara)", description: "Notable for striking basalt formations and a dramatic coastline" },
      { name: "Ice Cave Tours & Glacier Hiking", description: "Unique adventures exploring Iceland's frozen landscapes" }
    ],
    faq: {
      famousFor: ["Volcanoes", "Glaciers", "Geothermal spas", "Northern Lights", "Waterfalls", "Unspoiled landscapes"],
      entryRequirements: "Schengen visa required for non-EU citizens",
      tipping: "Not expected; service is usually included in prices",
      weather: {
        winter: { months: "Nov–Mar", description: "Cold, snowy, and dark — best for viewing the Northern Lights", temperature: "avg -3°C to 3°C" },
        summer: { months: "Jun–Aug", description: "Cool and bright, with the Midnight Sun phenomenon", temperature: "avg 10°C to 15°C" }
      },
      bestTimeToVisit: {
        winter: "Perfect for seeing the Northern Lights and exploring ice caves",
        springSummer: "Summer: Ideal for road trips and hiking"
      }
    }
  },
  {
    country: "Ireland",
    description: "Ireland enchants with its emerald-green landscapes, vibrant cities, historic castles, and legendary hospitality. From Dublin's pubs to the Cliffs of Moher, it's a perfect mix of charm, culture, and natural beauty.",
    basicInfo: {
      capital: "Dublin",
      currency: "Euro (€)",
      voltage: "230V, 50Hz",
      plugTypes: ["G"],
      timeZone: "Greenwich Mean Time (GMT, UTC +0) / Irish Standard Time (summer: UTC +1)",
      officialLanguage: "Irish",
      otherLanguages: ["English"]
    },
    popularAttractions: [
      { name: "Dublin", description: "Explore the Guinness Storehouse, Trinity College, and the lively Temple Bar" },
      { name: "Cliffs of Moher", description: "Iconic sea cliffs offering breathtaking views" },
      { name: "Blarney Castle (Cork)", description: "Kiss the famous Blarney Stone to receive the gift of gab" },
      { name: "Ring of Kerry", description: "A scenic driving route showcasing stunning coastal and rural Ireland" },
      { name: "Killarney National Park", description: "Features lakes, mountains, and deer-filled woodlands" },
      { name: "Giant's Causeway (Northern Ireland)", description: "Fascinating basalt columns steeped in mythology" },
      { name: "Rock of Cashel", description: "An ancient fortress offering panoramic views" },
      { name: "Galway", description: "Renowned for traditional Irish music, lively pubs, and arts festivals" },
      { name: "Wild Atlantic Way", description: "One of the world's longest defined coastal routes" },
      { name: "Aran Islands", description: "Remote and rugged, preserving traditional Irish culture" }
    ],
    faq: {
      famousFor: ["Rolling green landscapes", "Castles", "Literature", "Pubs", "Live music", "Folklore"],
      entryRequirements: "An Irish visa is required for some nationalities",
      tipping: "A 10% tip in restaurants is customary if the service charge is not included",
      weather: {
        winter: { months: "Dec–Feb", description: "Cool and damp, with mild temperatures", temperature: "avg 4°C to 8°C" },
        summer: { months: "Jun–Aug", description: "Mild and lush, with occasional rain", temperature: "avg 15°C to 20°C" }
      },
      bestTimeToVisit: {
        winter: "Cozy pubs and winter charm",
        springSummer: "May to September: Ideal for festivals, longer days, and vibrant, green landscapes"
      }
    }
  },
  {
    country: "Italy",
    description: "Italy is a captivating country where ancient history, vibrant cities, and breathtaking landscapes come together. From the ancient ruins of Rome to the romantic canals of Venice and the sun-kissed beaches of the Amalfi Coast, every corner feels like a postcard come to life.",
    basicInfo: {
      capital: "Rome",
      currency: "Euro (€)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "F", "L"],
      timeZone: "Central European Time (CET, UTC +1)",
      officialLanguage: "Italian",
      otherLanguages: []
    },
    popularAttractions: [
      { name: "Rome", description: "Explore the Colosseum, Vatican City, and the Pantheon" },
      { name: "Florence", description: "A Renaissance city brimming with art, architecture, and world-class museums" },
      { name: "Venice", description: "Glide through historic canals on a gondola" },
      { name: "Dolomites", description: "Majestic alpine peaks, ideal for hiking and skiing" },
      { name: "Amalfi Coast", description: "Scenic cliffside towns with breathtaking sea views" },
      { name: "Naples", description: "The birthplace of pizza and gateway to Pompeii" },
      { name: "Mount Vesuvius & Pompeii", description: "Discover ancient ruins near an active volcano" },
      { name: "Lake Como", description: "A blend of luxury, nature, and celebrity hideaways" },
      { name: "Tuscany", description: "Rolling hills, vineyards, and charming medieval villages" },
      { name: "Milan", description: "The fashion capital of Italy, home to Leonardo da Vinci's The Last Supper" }
    ],
    faq: {
      famousFor: ["Art", "History", "Fashion", "Cuisine", "Architecture", "Stunning coastlines"],
      entryRequirements: "Schengen visa required for non-EU citizens",
      tipping: "Not mandatory, but rounding up or leaving 5–10% in restaurants is appreciated",
      weather: {
        winter: { months: "Dec–Feb", description: "Mild in the south, cold in the north", temperature: "avg 3°C to 10°C" },
        summer: { months: "Jun–Aug", description: "Hot and dry", temperature: "avg 25°C to 35°C" }
      },
      bestTimeToVisit: {
        winter: "Mild southern weather and fewer crowds",
        springSummer: "April to June and September to October: Pleasant weather and fewer crowds"
      }
    }
  },
  {
    country: "Liechtenstein",
    description: "Liechtenstein is a tiny yet stunning Alpine country nestled between Switzerland and Austria. Known for its castles, mountain trails, and peaceful valleys, it's an ideal destination for nature lovers and those seeking off-the-beaten-path European charm.",
    basicInfo: {
      capital: "Vaduz",
      currency: "Swiss Franc (CHF)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "J"],
      timeZone: "Central European Time (CET, UTC +1)",
      officialLanguage: "German",
      otherLanguages: []
    },
    popularAttractions: [
      { name: "Vaduz Castle", description: "The official royal residence, perched on a hill above the capital" },
      { name: "Kunstmuseum Liechtenstein", description: "A modern art museum with striking architecture" },
      { name: "Malbun", description: "The country's top ski resort and a paradise for hikers" },
      { name: "Cathedral of St. Florin", description: "A Neo-Gothic church located in Vaduz" },
      { name: "The Eschnerberg Trail", description: "A scenic and historic hiking route" },
      { name: "Liechtenstein National Museum", description: "Offers insights into the country's rich history and culture" },
      { name: "Cycling along the Rhine River", description: "A peaceful and picturesque experience" },
      { name: "Postal Museum", description: "Celebrates the country's famous postage stamp heritage" },
      { name: "Gutenberg Castle (Balzers)", description: "A well-preserved hilltop castle offering panoramic views" }
    ],
    faq: {
      famousFor: ["Alpine scenery", "Medieval castles", "Hiking trails", "Being one of the world's smallest countries"],
      entryRequirements: "Schengen visa required for non-EU citizens",
      tipping: "Not mandatory, but 5–10% is appreciated in restaurants",
      weather: {
        winter: { months: "Dec–Feb", description: "Cold and snowy, ideal for skiing", temperature: "avg -1°C to 5°C" },
        summer: { months: "Jun–Aug", description: "Mild and pleasant", temperature: "avg 18°C to 25°C" }
      },
      bestTimeToVisit: {
        winter: "December to March: Winter sports",
        springSummer: "May to September: Hiking and sightseeing"
      }
    }
  },
  {
    country: "Luxembourg",
    description: "Luxembourg is a small yet culturally rich country known for its medieval castles, scenic valleys, and charming capital city. It offers a perfect blend of nature, history, and cosmopolitan life—all in one compact destination.",
    basicInfo: {
      capital: "Luxembourg City",
      currency: "Euro (€)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "F"],
      timeZone: "Central European Time (CET, UTC +1)",
      officialLanguage: "Luxembourgish",
      otherLanguages: ["French", "German"]
    },
    popularAttractions: [
      { name: "Vianden Castle", description: "One of Europe's most beautiful castles, perched on a hilltop" },
      { name: "Luxembourg City Old Quarters & Fortifications", description: "A UNESCO World Heritage Site with stunning cliffside views" },
      { name: "Müllerthal (Little Switzerland)", description: "Renowned for lush forests, hiking trails, and sandstone rock formations" },
      { name: "Upper Sûre Nature Park", description: "Perfect for kayaking, hiking, and enjoying natural landscapes" },
      { name: "Place d'Armes & Grand Ducal Palace (Luxembourg City)", description: "The vibrant heart of the capital, known for markets and royal charm" },
      { name: "Mudam (Museum of Modern Art)", description: "A contemporary art museum housed in a striking glass building" },
      { name: "Notre-Dame Cathedral", description: "A gothic architectural gem in Luxembourg City" },
      { name: "Chemin de Fer Touristique", description: "A scenic tourist train journey through old mining regions" },
      { name: "Local Specialties", description: "Savor Gromperekichelcher (crispy potato cakes) and wines from the Moselle Valley" }
    ],
    faq: {
      famousFor: ["Fairy-tale castles", "Rolling green hills", "Multicultural charm", "EU institutions"],
      entryRequirements: "Schengen visa required for non-EU citizens",
      tipping: "Optional, but 5–10% is appreciated in restaurants",
      weather: {
        winter: { months: "Dec–Feb", description: "Cold and damp", temperature: "avg 0°C to 6°C" },
        summer: { months: "Jun–Aug", description: "Mild and comfortable", temperature: "avg 18°C to 25°C" }
      },
      bestTimeToVisit: {
        winter: "Christmas markets and cozy atmosphere",
        springSummer: "May to September for sightseeing, festivals, and pleasant weather"
      }
    }
  },
  {
    country: "Malta",
    description: "Malta is a sun-drenched Mediterranean island nation known for its rich history, stunning coastlines, and crystal-clear waters. With ancient walled cities, UNESCO-listed temples, and a blend of European and Middle Eastern influences, Malta is a timeless destination that caters to both culture seekers and beach lovers.",
    basicInfo: {
      capital: "Valletta",
      currency: "Euro (€)",
      voltage: "230V, 50Hz",
      plugTypes: ["G"],
      timeZone: "Central European Time (CET, UTC +1)",
      officialLanguage: "Maltese",
      otherLanguages: ["English"]
    },
    popularAttractions: [
      { name: "Valletta", description: "A UNESCO World Heritage Site and one of Europe's smallest yet most historic capitals" },
      { name: "Mdina", description: "Known as the \"Silent City,\" this fortified hilltop town features medieval and Baroque architecture" },
      { name: "Blue Lagoon (Comino Island)", description: "A breathtaking turquoise bay, ideal for swimming, snorkeling, and boat trips" },
      { name: "Ħaġar Qim & Mnajdra Temples", description: "Prehistoric megalithic temples that are older than the pyramids" },
      { name: "St. John's Co-Cathedral", description: "A lavish Baroque cathedral housing masterpieces, including works by Caravaggio" },
      { name: "Marsaxlokk Fishing Village", description: "A traditional fishing port famous for its colorful boats and Sunday market" },
      { name: "Popeye Village", description: "Originally a film set, now a quirky amusement park popular with families" },
      { name: "Upper Barrakka Gardens", description: "Offers panoramic views of the Grand Harbour" },
      { name: "Gozo Island", description: "A quieter sister island known for its countryside, beaches, and the Citadel in Victoria" },
      { name: "The Three Cities (Vittoriosa, Senglea, Cospicua)", description: "Older than Valletta and rich in maritime history" }
    ],
    faq: {
      famousFor: ["Historical sites", "Mediterranean beaches", "Scuba diving", "Ancient temples"],
      entryRequirements: "Schengen visa required for non-EU citizens",
      tipping: "Not mandatory but appreciated; around 5–10% in restaurants and cafés",
      weather: {
        winter: { months: "Dec–Feb", description: "Mild with occasional rain", temperature: "avg 10°C to 17°C" },
        summer: { months: "Jun–Aug", description: "Hot and dry", temperature: "avg 25°C to 35°C" }
      },
      bestTimeToVisit: {
        winter: "Spring (Apr–Jun): Ideal for sightseeing and festivals",
        springSummer: "Summer (Jul–Sep): Best for beaches and water activities. Autumn (Sep–Oct): Warm weather with fewer crowds"
      }
    }
  },
  {
    country: "Monaco",
    description: "Monaco is a glamorous microstate on the French Riviera, renowned for its luxury lifestyle, upscale casinos, and stunning Mediterranean coastline. Despite being the second-smallest country in the world, Monaco dazzles with its royal heritage, the Formula 1 Grand Prix, and its iconic harbor lined with superyachts.",
    basicInfo: {
      capital: "Monaco (officially a city-state)",
      currency: "Euro (€)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "E"],
      timeZone: "Central European Time (CET, UTC+1)",
      officialLanguage: "French",
      otherLanguages: ["Italian", "English"]
    },
    popularAttractions: [
      { name: "Monte Carlo Casino", description: "A world-famous Belle Époque casino and architectural masterpiece" },
      { name: "Prince's Palace of Monaco", description: "The official residence of the royal family, featuring a daily changing of the guard" },
      { name: "Oceanographic Museum", description: "A historic marine science museum dramatically perched on a cliff" },
      { name: "Monaco Grand Prix", description: "A legendary Formula 1 race that winds through the city streets each May" },
      { name: "Larvotto Beach", description: "A popular public beach, ideal for sunbathing and swimming" },
      { name: "Jardin Exotique", description: "A cliffside garden showcasing rare cacti and offering panoramic views of the Riviera" },
      { name: "Monaco Cathedral", description: "The burial site of Princess Grace and Prince Rainier III" },
      { name: "Port Hercules", description: "The central marina, surrounded by restaurants and luxury yachts" },
      { name: "Japanese Garden", description: "A peaceful, Zen-inspired retreat in the heart of the city" },
      { name: "Fontvieille", description: "A modern district with shopping centers, a marina, and the Monaco Top Cars Collection" }
    ],
    faq: {
      famousFor: ["Luxury lifestyle", "Formula 1", "Casinos", "The royal family", "Mediterranean glamour"],
      entryRequirements: "Schengen visa required for non-EU citizens",
      tipping: "Service is usually included; rounding up or leaving 5–10% is appreciated for exceptional service",
      weather: {
        winter: { months: "Dec–Feb", description: "Mild and cool", temperature: "avg 8°C to 14°C" },
        summer: { months: "Jun–Aug", description: "Warm and sunny", temperature: "avg 20°C to 28°C" }
      },
      bestTimeToVisit: {
        winter: "Spring (Apr–Jun): Ideal weather and fewer crowds",
        springSummer: "May: Visit during the Monaco Grand Prix for a once-in-a-lifetime experience. Autumn (Sep–Oct): Great for beach weather without the summer rush"
      }
    }
  },
  {
    country: "Montenegro",
    description: "Montenegro is a Balkan gem nestled between the mountains and the Adriatic Sea, known for its dramatic landscapes, medieval towns, and pristine beaches. With a charming blend of Eastern European culture and Mediterranean beauty, Montenegro is a rising star for travelers seeking both adventure and relaxation.",
    basicInfo: {
      capital: "Podgorica",
      currency: "Euro (€) (not officially part of the Eurozone)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "F"],
      timeZone: "Central European Time (CET, UTC+1)",
      officialLanguage: "Montenegrin",
      otherLanguages: ["Serbian", "Bosnian", "Albanian", "Croatian"]
    },
    popularAttractions: [
      { name: "Kotor Old Town", description: "A UNESCO World Heritage Site with cobbled streets, medieval walls, and scenic views of the fjord" },
      { name: "Bay of Kotor (Boka Bay)", description: "A spectacular bay often called Europe's southernmost fjord" },
      { name: "Sveti Stefan", description: "A luxury island resort and iconic photo spot, rich in history and exclusivity" },
      { name: "Durmitor National Park", description: "A paradise for hiking, rafting, and skiing, featuring the Tara River Canyon—one of the deepest in Europe" },
      { name: "Budva Riviera", description: "Known for its beaches, vibrant nightlife, and charming walled old town" },
      { name: "Lovćen National Park", description: "Home to the Njegoš Mausoleum and panoramic mountain views" },
      { name: "Perast", description: "A picturesque coastal town with baroque architecture and nearby island churches" },
      { name: "Ostrog Monastery", description: "A striking white monastery built into a cliffside, revered by pilgrims of all faiths" },
      { name: "Lake Skadar", description: "The largest lake in the Balkans, ideal for birdwatching, boat tours, and exploring quaint lakeside villages" },
      { name: "Ulcinj", description: "A historic coastal town with long sandy beaches and a strong Albanian cultural influence" }
    ],
    faq: {
      famousFor: ["Mountains", "Adriatic beaches", "Medieval towns", "National parks"],
      entryRequirements: "Schengen visa required for non-EU citizens. Many other nationalities: Visa-free for short stays (check specific country rules)",
      tipping: "Not mandatory but appreciated; 5–10% is common in restaurants and cafés",
      weather: {
        winter: { months: "Dec–Feb", description: "Cold inland, mild on the coast", temperature: "avg 0°C to 12°C" },
        summer: { months: "Jun–Aug", description: "Hot and sunny, especially on the coast", temperature: "avg 25°C to 35°C" }
      },
      bestTimeToVisit: {
        winter: "Spring (Apr–Jun): Ideal for hiking and sightseeing",
        springSummer: "Summer (Jul–Sep): Perfect for beaches and coastal towns. Autumn (Sep–Oct): Mild weather and fewer tourists"
      }
    }
  },
  {
    country: "Netherlands",
    description: "The Netherlands is a flat and scenic country, famous for its canals, windmills, tulip fields, and vibrant cities. With a perfect mix of historical charm and modern innovation, it offers rich culture, bike-friendly cities, and a welcoming atmosphere year-round.",
    basicInfo: {
      capital: "Amsterdam",
      currency: "Euro (€)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "F"],
      timeZone: "Central European Time (CET, UTC+1)",
      officialLanguage: "Dutch",
      otherLanguages: ["English widely spoken"]
    },
    popularAttractions: [
      { name: "Amsterdam Canals", description: "A UNESCO World Heritage site and the heart of the Dutch capital" },
      { name: "Rijksmuseum", description: "Home to masterpieces by Rembrandt, Vermeer, and other Dutch masters" },
      { name: "Keukenhof Gardens", description: "One of the world's largest flower gardens, best visited in spring" },
      { name: "Kinderdijk Windmills", description: "Iconic Dutch windmills set in a picturesque countryside setting" },
      { name: "Van Gogh Museum", description: "A dedicated museum to the life and works of Vincent van Gogh" },
      { name: "Anne Frank House", description: "A moving museum documenting Anne Frank's life during WWII" },
      { name: "Zaanse Schans", description: "An open-air museum showcasing traditional Dutch life and crafts" },
      { name: "Rotterdam", description: "A modern architectural hub with a vibrant arts and culinary scene" },
      { name: "Giethoorn", description: "A charming, car-free village known as the \"Dutch Venice\"" },
      { name: "The Hague", description: "Seat of the Dutch government and home to international courts and beautiful beaches" }
    ],
    faq: {
      famousFor: ["Tulips", "Windmills", "Cycling", "Canals", "Art museums", "Liberal culture"],
      entryRequirements: "Schengen visa required",
      tipping: "Not required but appreciated; rounding up or leaving 5–10% at restaurants is common",
      weather: {
        winter: { months: "Dec–Feb", description: "Cold and damp", temperature: "avg 0°C to 6°C" },
        summer: { months: "Jun–Aug", description: "Mild and pleasant", temperature: "avg 17°C to 22°C" }
      },
      bestTimeToVisit: {
        winter: "Spring (Apr–May): For tulip season and Keukenhof Gardens",
        springSummer: "Summer (Jun–Aug): Ideal for cycling, festivals, and exploring cities. Autumn (Sep–Oct): Great for cultural activities and fewer crowds"
      }
    }
  },
  {
    country: "Norway",
    description: "Norway is a land of dramatic fjords, snow-capped peaks, and ethereal northern lights. Known for its natural beauty, outdoor adventures, and high standard of living, Norway offers a perfect blend of stunning landscapes and rich Scandinavian culture.",
    basicInfo: {
      capital: "Oslo",
      currency: "Norwegian Krone (NOK)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "F"],
      timeZone: "Central European Time (CET, UTC+1)",
      officialLanguage: "Norwegian (Bokmål and Nynorsk)",
      otherLanguages: ["English widely spoken"]
    },
    popularAttractions: [
      { name: "Geirangerfjord & Nærøyfjord", description: "UNESCO-listed fjords with towering cliffs and cascading waterfalls" },
      { name: "Oslo", description: "The capital city, home to the Royal Palace, Vigeland Park, and the Munch Museum" },
      { name: "Lofoten Islands", description: "A breathtaking archipelago known for fishing villages, hiking, and the midnight sun" },
      { name: "Tromsø", description: "A gateway for seeing the Northern Lights and Arctic adventures" },
      { name: "Bergen", description: "A colorful harbor city surrounded by mountains and fjords" },
      { name: "Preikestolen (Pulpit Rock)", description: "A cliff offering jaw-dropping views over the Lysefjord" },
      { name: "Flåm Railway", description: "One of the most scenic train journeys in the world" },
      { name: "Nordkapp (North Cape)", description: "The northernmost point in mainland Europe" },
      { name: "Svalbard", description: "A remote Arctic archipelago famous for polar bears and glaciers" },
      { name: "Rondane & Jotunheimen National Parks", description: "Ideal for hiking, wildlife spotting, and mountain vistas" }
    ],
    faq: {
      famousFor: ["Fjords", "Northern Lights", "Viking history", "Skiing", "Eco-friendly living"],
      entryRequirements: "Schengen visa required",
      tipping: "Not mandatory; rounding up or leaving 5–10% at restaurants is appreciated",
      weather: {
        winter: { months: "Dec–Feb", description: "Cold and snowy, great for skiing and Northern Lights", temperature: "avg -6°C to 2°C" },
        summer: { months: "Jun–Aug", description: "Mild and ideal for hiking and fjord cruises", temperature: "avg 13°C to 22°C" }
      },
      bestTimeToVisit: {
        winter: "Winter (Dec–Mar): For skiing and viewing the Northern Lights",
        springSummer: "Summer (Jun–Aug): For long days, outdoor activities, and fjord tours. Spring/Autumn: Quieter seasons with beautiful natural transitions"
      }
    }
  },
  {
    country: "Portugal",
    description: "Portugal is a coastal gem of Southern Europe, known for its golden beaches, historic cities, flavorful cuisine, and soulful Fado music. From the cobbled streets of Lisbon to the vineyards of the Douro Valley, Portugal offers a rich blend of culture, nature, and warm hospitality.",
    basicInfo: {
      capital: "Lisbon",
      currency: "Euro (€)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "F"],
      timeZone: "Western European Time (WET, UTC+0)",
      officialLanguage: "Portuguese",
      otherLanguages: ["English widely spoken in tourist areas"]
    },
    popularAttractions: [
      { name: "Lisbon", description: "The vibrant capital with historic trams, Belém Tower, and Alfama's old-world charm" },
      { name: "Porto", description: "A UNESCO-listed city known for its riverfront, bridges, and world-famous Port wine" },
      { name: "Douro Valley", description: "Terraced vineyards offering wine tours and scenic cruises along the Douro River" },
      { name: "Algarve", description: "Famous for its dramatic coastline, golden beaches, and picturesque fishing towns" },
      { name: "Sintra", description: "A fairytale town filled with palaces, castles, and forested hills" },
      { name: "Madeira", description: "A subtropical island known for hiking, botanical gardens, and rich cuisine" },
      { name: "Azores", description: "Volcanic islands with crater lakes, hot springs, and whale watching" },
      { name: "Évora", description: "A historic town with Roman ruins and a charming medieval vibe" },
      { name: "Óbidos", description: "A walled town known for its castle and Ginja cherry liqueur" },
      { name: "Fátima", description: "A famous pilgrimage site and spiritual center" }
    ],
    faq: {
      famousFor: ["Port wine", "Fado music", "Beautiful beaches", "Historic architecture", "Surfing"],
      entryRequirements: "Schengen visa required",
      tipping: "Not mandatory; rounding up or leaving 5–10% at restaurants and cafés is appreciated",
      weather: {
        winter: { months: "Dec–Feb", description: "Mild, especially in the south", temperature: "avg 8°C to 15°C" },
        summer: { months: "Jun–Aug", description: "Warm and dry", temperature: "avg 25°C to 35°C inland and south" }
      },
      bestTimeToVisit: {
        winter: "Spring (Mar–May): Pleasant weather, blooming landscapes, fewer crowds",
        springSummer: "Summer (Jun–Aug): Ideal for beaches and festivals. Autumn (Sep–Oct): Great for wine tours and coastal trips with fewer tourists"
      }
    }
  },
  {
    country: "Slovakia",
    description: "Slovakia is a Central European treasure known for its dramatic castles, alpine landscapes, and charming old towns. With the majestic High Tatras mountains and vibrant cities like Bratislava, Slovakia offers a blend of adventure, history, and cultural depth.",
    basicInfo: {
      capital: "Bratislava",
      currency: "Euro (€)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "E"],
      timeZone: "Central European Time (CET, UTC+1)",
      officialLanguage: "Slovak",
      otherLanguages: ["English and German commonly understood in tourist areas"]
    },
    popularAttractions: [
      { name: "Bratislava", description: "The riverside capital with a charming Old Town, Bratislava Castle, and lively cafés" },
      { name: "High Tatras (Vysoké Tatry)", description: "A stunning mountain range ideal for hiking, skiing, and wildlife spotting" },
      { name: "Spiš Castle", description: "One of the largest castle complexes in Europe and a UNESCO World Heritage Site" },
      { name: "Slovak Paradise National Park", description: "Known for ladders, gorges, waterfalls, and adventure trails" },
      { name: "Banská Štiavnica", description: "A historic mining town with beautiful baroque architecture and underground tunnels" },
      { name: "Orava Castle", description: "A dramatic hilltop fortress offering panoramic views and medieval history" },
      { name: "Demänovská Cave System", description: "A network of stunning ice and limestone caves near the Jasná ski resort" },
      { name: "Košice", description: "Eastern Slovakia's cultural hub with Gothic architecture and vibrant street life" },
      { name: "Vlkolínec", description: "A preserved folk village with wooden houses and UNESCO status" },
      { name: "Čičmany", description: "A picturesque village famous for its white geometric patterns on traditional wooden homes" }
    ],
    faq: {
      famousFor: ["Castles", "Hiking", "Skiing", "Thermal spas", "Folk culture", "Medieval towns"],
      entryRequirements: "Schengen visa required",
      tipping: "5–10% in restaurants is appreciated; rounding up is common for taxis and cafés",
      weather: {
        winter: { months: "Dec–Feb", description: "Cold and snowy, especially in mountain areas", temperature: "avg -5°C to 3°C" },
        summer: { months: "Jun–Aug", description: "Warm and sunny", temperature: "avg 20°C to 30°C" }
      },
      bestTimeToVisit: {
        winter: "Winter (Dec–Mar): Ideal for skiing and winter sports in the Tatras",
        springSummer: "Summer (Jun–Sep): Great for hiking, castles, and festivals. Spring/Autumn: Perfect for scenic landscapes and fewer tourists"
      }
    }
  },
  {
    country: "Slovenia",
    description: "Slovenia is a green jewel of Central Europe, where the Alps meet the Mediterranean. Known for its pristine lakes, fairy-tale castles, underground caves, and eco-conscious charm, Slovenia blends natural beauty with rich cultural heritage and outdoor adventure.",
    basicInfo: {
      capital: "Ljubljana",
      currency: "Euro (€)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "F"],
      timeZone: "Central European Time (CET, UTC+1)",
      officialLanguage: "Slovene",
      otherLanguages: ["English", "German", "Italian widely understood in tourist areas"]
    },
    popularAttractions: [
      { name: "Lake Bled", description: "A picture-perfect lake with a church on an island and a medieval cliffside castle" },
      { name: "Ljubljana", description: "The charming capital with a pedestrian-friendly old town, bridges, and riverside cafés" },
      { name: "Postojna Cave", description: "One of the world's largest karst cave systems, featuring an underground train ride" },
      { name: "Predjama Castle", description: "A dramatic Renaissance castle built into the mouth of a cave" },
      { name: "Triglav National Park", description: "Home to Mount Triglav and the stunning Julian Alps, ideal for hiking and skiing" },
      { name: "Lake Bohinj", description: "A tranquil alternative to Bled, nestled deep in the Alps and perfect for nature lovers" },
      { name: "Škocjan Caves", description: "A UNESCO World Heritage Site with vast underground chambers and waterfalls" },
      { name: "Piran", description: "A beautiful Venetian-style coastal town on the Adriatic Sea" },
      { name: "Soča Valley", description: "Known for its emerald-green river, rafting, kayaking, and WWI history" },
      { name: "Maribor", description: "A wine and cultural hub featuring the world's oldest grapevine" }
    ],
    faq: {
      famousFor: ["Lakes", "Caves", "Castles", "Alpine adventures", "Eco-tourism", "Wine"],
      entryRequirements: "Schengen visa required",
      tipping: "Not mandatory, but rounding up or leaving 5–10% is appreciated in restaurants and cafés",
      weather: {
        winter: { months: "Dec–Feb", description: "Cold, snowy in mountains", temperature: "avg -2°C to 5°C" },
        summer: { months: "Jun–Aug", description: "Warm and pleasant", temperature: "avg 20°C to 30°C" }
      },
      bestTimeToVisit: {
        winter: "Winter (Dec–Mar): Best for skiing and festive markets",
        springSummer: "Spring (Apr–Jun): Great for sightseeing and hiking with mild weather. Summer (Jul–Aug): Ideal for lakes, coast, and mountain activities. Autumn (Sep–Oct): Perfect for wine tours and fewer crowds"
      }
    }
  },
  {
    country: "Spain",
    description: "Spain is a vibrant and diverse country on the Iberian Peninsula, known for its sunny beaches, passionate flamenco, world-class cuisine, rich history, and stunning architecture. From the bustling streets of Madrid to the coastal charm of Barcelona and the white villages of Andalusia, Spain offers something for every traveler.",
    basicInfo: {
      capital: "Madrid",
      currency: "Euro (€)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "F"],
      timeZone: "Central European Time (CET, UTC +1); Canary Islands: Western European Time (WET, UTC +0)",
      officialLanguage: "Spanish",
      otherLanguages: []
    },
    popularAttractions: [
      { name: "Sagrada Família (Barcelona)", description: "Antoni Gaudí's iconic, still-under-construction basilica" },
      { name: "Alhambra (Granada)", description: "A breathtaking Moorish palace and fortress complex" },
      { name: "Park Güell (Barcelona)", description: "A colorful mosaic-filled park by Gaudí with panoramic city views" },
      { name: "Prado Museum (Madrid)", description: "One of the world's premier art galleries, housing works by Goya, Velázquez, and El Greco" },
      { name: "La Rambla (Barcelona)", description: "A lively pedestrian street full of shops, street performers, and cafés" },
      { name: "Mezquita-Catedral (Córdoba)", description: "A remarkable mosque-cathedral blending Islamic and Christian architecture" },
      { name: "Royal Palace (Madrid)", description: "The official residence of the Spanish royal family with stunning interiors" },
      { name: "Santiago de Compostela", description: "The final stop on the famous Camino pilgrimage, with a grand cathedral" },
      { name: "Costa del Sol", description: "A stretch of sunny beaches, resorts, and nightlife along the Mediterranean coast" },
      { name: "Ibiza & Balearic Islands", description: "Known for beautiful beaches, scenic villages, and vibrant nightlife" }
    ],
    faq: {
      famousFor: ["Tapas", "Flamenco", "Football", "Historical cities", "Beaches", "Festivals (like La Tomatina and Running of the Bulls)"],
      entryRequirements: "Schengen visa required",
      tipping: "Not obligatory, but rounding up or leaving 5–10% is appreciated in restaurants and taxis",
      weather: {
        winter: { months: "Dec–Feb", description: "Mild in the south, cooler in the north", temperature: "avg 5°C to 15°C" },
        summer: { months: "Jun–Aug", description: "Hot and dry, especially inland", temperature: "avg 25°C to 40°C" }
      },
      bestTimeToVisit: {
        winter: "Great for southern Spain, Christmas markets, and fewer crowds in major cities",
        springSummer: "Spring (Apr–Jun): Ideal for sightseeing and mild weather. Summer (Jul–Aug): Best for beaches and festivals, but can be very hot inland. Autumn (Sep–Oct): Great for wine tours, coastal visits, and fewer tourists"
      }
    }
  },
  {
    country: "Sweden",
    description: "Sweden is a Scandinavian gem known for its modern design, stunning natural landscapes, rich Viking heritage, and high quality of life. From the serene archipelagos and northern lights to vibrant cities like Stockholm and Gothenburg, Sweden offers a perfect blend of tradition and innovation.",
    basicInfo: {
      capital: "Stockholm",
      currency: "Swedish Krona (SEK)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "F"],
      timeZone: "Central European Time (CET, UTC +1)",
      officialLanguage: "Swedish",
      otherLanguages: ["English widely spoken"]
    },
    popularAttractions: [
      { name: "Gamla Stan (Stockholm)", description: "The picturesque old town with cobbled streets and historic buildings" },
      { name: "Vasa Museum (Stockholm)", description: "Home to a perfectly preserved 17th-century warship" },
      { name: "Drottningholm Palace", description: "A UNESCO-listed royal residence near Stockholm" },
      { name: "Abisko National Park", description: "One of the best places to see the Northern Lights in winter" },
      { name: "Kiruna & Icehotel", description: "A unique hotel made of ice and snow, rebuilt every winter" },
      { name: "Gothenburg Archipelago", description: "Stunning islands offering relaxed coastal charm" },
      { name: "Visby (Gotland Island)", description: "A medieval walled town and UNESCO World Heritage Site" },
      { name: "Liseberg Amusement Park (Gothenburg)", description: "A popular family-friendly attraction" },
      { name: "Öresund Bridge", description: "An iconic bridge-tunnel connecting Sweden with Denmark" },
      { name: "Swedish Lapland", description: "Ideal for dog sledding, snowmobiling, and cultural Sámi experiences" }
    ],
    faq: {
      famousFor: ["Clean design", "Northern Lights", "Fika (coffee culture)", "Lakes and forests", "ABBA", "IKEA", "Sustainability"],
      entryRequirements: "Schengen visa is required",
      tipping: "Not mandatory; rounding up or leaving 5–10% is appreciated in restaurants",
      weather: {
        winter: { months: "Dec–Feb", description: "Cold and snowy", temperature: "avg -10°C to 3°C, depending on the region" },
        summer: { months: "Jun–Aug", description: "Mild and pleasant with long daylight hours", temperature: "avg 15°C to 25°C" }
      },
      bestTimeToVisit: {
        winter: "Winter (Dec–Mar): Best for Northern Lights, winter sports, and Arctic experiences",
        springSummer: "Summer (May–Sep): Ideal for outdoor activities, hiking, and city exploration. Autumn (Sep–Nov): Beautiful fall colors and fewer crowds"
      }
    }
  },
  {
    country: "Switzerland",
    description: "Switzerland is a landlocked country in Central Europe renowned for its majestic Alps, pristine lakes, world-class chocolate, efficient public transport, and charming cities. A paradise for nature lovers, skiers, and culture seekers alike, Switzerland offers a seamless blend of outdoor adventure and urban sophistication.",
    basicInfo: {
      capital: "Bern",
      currency: "Swiss Franc (CHF)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "J"],
      timeZone: "Central European Time (CET, UTC +1)",
      officialLanguage: "German",
      otherLanguages: ["French", "Italian", "Romansh"]
    },
    popularAttractions: [
      { name: "Matterhorn (Zermatt)", description: "One of the most iconic peaks in the Alps, perfect for skiing and hiking" },
      { name: "Lake Geneva (Lac Léman)", description: "A stunning lake shared with France, surrounded by vineyards and charming lakeside towns" },
      { name: "Jungfraujoch – Top of Europe", description: "A high-altitude railway station offering breathtaking panoramic views of glaciers" },
      { name: "Château de Chillon (Montreux)", description: "A fairytale castle perched on the shores of Lake Geneva" },
      { name: "Lucerne", description: "Famous for its well-preserved medieval architecture, the Kapellbrücke (Chapel Bridge), and nearby Mt. Pilatus" },
      { name: "Interlaken", description: "The adventure capital, gateway to the Alps, popular for paragliding, hiking, and outdoor sports" },
      { name: "Bern", description: "The charming capital with a UNESCO-listed old town, historic fountains, and the iconic clock tower" },
      { name: "Geneva", description: "A cosmopolitan city hosting international organizations, museums, and the iconic Jet d'Eau fountain" },
      { name: "Lauterbrunnen Valley", description: "A picturesque valley dotted with waterfalls, cliffs, and quaint alpine villages" },
      { name: "St. Moritz", description: "A luxurious resort town renowned for skiing, upscale wellness, and alpine lifestyle" }
    ],
    faq: {
      famousFor: ["Swiss watches", "Chocolate", "Cheese fondue", "Skiing", "Scenic trains", "Neutrality", "Banking"],
      entryRequirements: "Schengen visa required",
      tipping: "Not obligatory; service is typically included. Rounding up or leaving about 5% is appreciated",
      weather: {
        winter: { months: "Dec–Feb", description: "Cold and snowy, perfect for skiing", temperature: "avg -5°C to 5°C" },
        summer: { months: "Jun–Aug", description: "Mild and pleasant, great for hiking and lake activities", temperature: "avg 18°C to 28°C" }
      },
      bestTimeToVisit: {
        winter: "Winter (Dec–Mar): Best for skiing, snowboarding, and experiencing snow-covered Alpine towns",
        springSummer: "Summer (Jun–Sep): Ideal for hiking, lake visits, and scenic train journeys. Autumn (Sep–Oct): Fewer tourists, stunning fall foliage, and vibrant wine harvest festivals"
      }
    }
  },
  {
    country: "United Kingdom",
    description: "The United Kingdom is a fascinating mix of historic grandeur, cultural vibrancy, and stunning landscapes. It includes England, Scotland, Wales, and Northern Ireland, offering iconic landmarks, royal heritage, rolling hills, and dramatic coastlines—from London's bustling city life to the serene Scottish Highlands.",
    basicInfo: {
      capital: "London",
      currency: "British Pound Sterling (GBP)",
      voltage: "230V, 50Hz",
      plugTypes: ["G"],
      timeZone: "Greenwich Mean Time (GMT, UTC +0); British Summer Time (BST, UTC +1 during summer)",
      officialLanguage: "English",
      otherLanguages: ["Welsh", "Scots Gaelic", "Irish spoken regionally"]
    },
    popularAttractions: [
      { name: "Big Ben & Houses of Parliament (London)", description: "Iconic Gothic masterpiece by the Thames" },
      { name: "Tower of London", description: "Historic fortress housing the Crown Jewels" },
      { name: "Edinburgh Castle (Scotland)", description: "Majestic stronghold with stunning city views" },
      { name: "Stonehenge (Wiltshire)", description: "Enigmatic prehistoric stone circle, UNESCO site" },
      { name: "The Lake District (England)", description: "National park with lakes, hiking trails, and literary ties" },
      { name: "Snowdonia National Park (Wales)", description: "Rugged landscapes and Wales' highest peak" },
      { name: "Giant's Causeway (Northern Ireland)", description: "Unique volcanic basalt columns" },
      { name: "Oxford & Cambridge", description: "Historic university cities with stunning architecture" },
      { name: "Windsor Castle", description: "Oldest inhabited castle, royal residence near London" },
      { name: "The Roman Baths (Bath)", description: "Ancient Roman spa complex and museum" }
    ],
    faq: {
      famousFor: ["The Royal Family", "Pubs", "Shakespeare", "Castles", "Football", "Harry Potter", "Afternoon tea", "Music (The Beatles, Queen, Adele)"],
      entryRequirements: "EU/EEA citizens: May need Electronic Travel Authorization (ETA) depending on current regulations. Others: Tourist visa required",
      tipping: "Optional in most places. 10–12.5% in restaurants is standard if service is not included. Not customary in pubs",
      weather: {
        winter: { months: "Dec–Feb", description: "Cold, wet, and grey", temperature: "avg 0°C to 7°C" },
        summer: { months: "Jun–Aug", description: "Mild and often rainy", temperature: "avg 15°C to 25°C" }
      },
      bestTimeToVisit: {
        winter: "Winter (Nov–Dec): Christmas markets, theater, and festive charm",
        springSummer: "Spring (Apr–Jun): Pleasant weather with gardens in bloom. Summer (Jul–Aug): Festivals, long days, and peak tourism. Autumn (Sep–Oct): Fewer crowds and colorful foliage"
      }
    }
  },
  {
    country: "Vatican City",
    description: "Vatican City is the smallest independent country in the world, both in size and population. Enclosed within Rome, Italy, it is the spiritual and administrative center of the Roman Catholic Church. Home to the Pope, stunning Renaissance art, and centuries of religious history, Vatican City is a must-visit destination for culture, history, and architecture enthusiasts.",
    basicInfo: {
      capital: "Vatican City",
      currency: "Euro (€)",
      voltage: "230V, 50Hz",
      plugTypes: ["C", "F"],
      timeZone: "Central European Time (CET, UTC +1)",
      officialLanguage: "Italian",
      otherLanguages: []
    },
    popularAttractions: [
      { name: "St. Peter's Basilica", description: "One of the largest and most important churches in Christianity, featuring Michelangelo's iconic dome and the Pietà sculpture" },
      { name: "St. Peter's Square", description: "A magnificent plaza designed by Bernini, where the Pope often addresses the public" },
      { name: "Vatican Museums", description: "A vast collection of art and artifacts ranging from ancient Rome to the Renaissance" },
      { name: "Sistine Chapel", description: "Famous for Michelangelo's ceiling frescoes, including The Creation of Adam and The Last Judgment" },
      { name: "Apostolic Palace", description: "The Pope's official residence and the administrative hub of the Holy See" },
      { name: "Vatican Gardens", description: "Lush private gardens open only to guided tours, showcasing tranquility and religious symbolism" },
      { name: "Vatican Necropolis", description: "An ancient underground cemetery beneath St. Peter's Basilica, accessible by special reservation" }
    ],
    faq: {
      famousFor: ["The Pope", "St. Peter's Basilica", "Michelangelo's Sistine Chapel", "Catholic Church leadership", "Religious pilgrimage"],
      entryRequirements: "No visa required for Vatican City itself; entry is via Rome, Italy (Schengen visa required for international travelers)",
      tipping: "Not expected within Vatican City specifically; standard Italian tipping practices apply in surrounding areas (5–10% in restaurants if service is not included)",
      weather: {
        winter: { months: "Dec–Feb", description: "Mild to cool", temperature: "avg 3°C to 12°C" },
        summer: { months: "Jun–Aug", description: "Hot and dry", temperature: "avg 20°C to 33°C" }
      },
      bestTimeToVisit: {
        winter: "Easter & Christmas: Special religious events and ceremonies (very busy)",
        springSummer: "Spring (Apr–Jun): Comfortable weather, fewer crowds. Autumn (Sep–Oct): Mild temperatures and beautiful light for photography"
      }
    }
  }
];

console.log(tourismData.length);


// Austria,