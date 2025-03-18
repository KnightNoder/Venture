import { useEffect, useRef, useState } from "react";
import Globe from "globe.gl";

const GlobeComponent = ({ cities, continent }) => {
  const globeRef = useRef(null);
  const globeInstanceRef = useRef(null);
  const [highlightedCountry, setHighlightedCountry] = useState(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const globe = Globe()(globeRef.current);
    globeInstanceRef.current = globe;

    // Set globe settings
    globe
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
      .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
      .backgroundColor("#000000") 
      .pointOfView(getContinentView(continent), 2000); 

    const countryData = [
      {
        id: "france",
        name: "France",
        lat: 46.603354,
        lng: 1.888334,
        coordinates: [
          [
            [2.55, 51.09], [8.23, 42.33], [9.56, 42.15], [9.22, 41.38], [8.75, 41.58], [8.31, 40.85], [6.85, 43.01],
            [3.59, 43.07], [2.55, 51.09] 
          ]
        ]
      },
      {
        id: "germany",
        name: "Germany",
        lat: 51.165691,
        lng: 10.451526,
        coordinates: [
          [
            [6.15, 50.80], [9.92, 50.32], [10.45, 51.13], [12.14, 50.12], [13.84, 50.73], [14.12, 51.05],
            [14.68, 51.05], [15.02, 51.11], [14.33, 52.36], [12.93, 53.14], [10.94, 53.55], [8.66, 54.40],
          ]
        ]
      },
      {
        id: "italy",
        name: "Italy",
        lat: 41.87194,
        lng: 12.56738,
        coordinates: [
          [
            [6.63, 47.70], [10.49, 46.61], [12.37, 46.77], [13.84, 46.51], [13.70, 45.59], [12.46, 45.40],
            [12.33, 44.95], [13.95, 44.80], [14.26, 42.75], [15.52, 41.96], [16.17, 41.74], [18.45, 40.84],
            [18.38, 40.35], [17.74, 40.28], [16.63, 38.91], [15.69, 38.21], [15.69, 37.44], [15.69, 36.65],
            [15.69, 35.49], [14.94, 35.70], [12.57, 35.70], [10.60, 36.03], [8.44, 38.23], [6.63, 47.70] 
          ]
        ]
      },
      {
        id: "spain",
        name: "Spain",
        lat: 40.463667,
        lng: -3.74922,
        coordinates: [
          [
            [-9.39, 43.03], [-8.65, 42.34], [-6.75, 43.03], [-4.79, 43.57], [-3.82, 43.41], [-1.38, 43.03],
            [0.70, 42.81], [3.32, 42.44], [3.32, 40.48], [2.15, 39.93], [0.53, 39.31], [-0.79, 38.84],
            [-2.50, 36.43], [-5.37, 36.03], [-7.45, 36.95], [-9.39, 38.73], [-9.39, 43.03] 
          ]
        ]
      }
    ];

    const countryMap = {};
    countryData.forEach(country => {
      countryMap[country.name] = country;
      countryMap[country.id] = country;
      countryMap[country.name.toLowerCase()] = country;
    });
    
    const polygonsData = countryData.map(country => ({
      properties: { name: country.name, id: country.id },
      geometry: {
        type: 'Polygon',
        coordinates: country.coordinates
      }
    }));

    const updatePolygons = () => {
      globe.polygonsData(polygonsData)
        .polygonCapColor(d => {
          const countryName = d.properties.name;
          return countryName === highlightedCountry ? "rgba(255, 0, 0, 0.5)" : "rgba(0, 0, 255, 0.2)";
        })
        .polygonSideColor(d => {
          const countryName = d.properties.name;
          return countryName === highlightedCountry ? "rgba(255, 0, 0, 0.5)" : "rgba(0, 0, 255, 0.2)";
        })
        .polygonStrokeColor(d => {
          const countryName = d.properties.name;
          return countryName === highlightedCountry ? "rgba(255, 0, 0, 1)" : "rgba(0, 0, 255, 0.5)";
        })
        .polygonAltitude(0.01); 
    };

    updatePolygons();

    globe.pointsData(cities)
      .pointAltitude(0.05) 
      .pointColor(() => "yellow") 
      .pointRadius(0.5) 
      .onPointClick(({ url }) => window.open(url, "_blank")) 
      .onPointHover(point => {
        console.log("Hover point:", point); // Debug info
        
        if (point && point.country) {
          console.log("Hovering over country:", point.country); // Debug info
          
          const countryKey = point.country;
          const lowerCaseKey = countryKey.toLowerCase();
          
          let country = countryMap[countryKey] || 
                        countryMap[lowerCaseKey] ||
                        Object.values(countryMap).find(c => 
                          c.name.toLowerCase() === lowerCaseKey ||
                          c.id.toLowerCase() === lowerCaseKey);
          
          if (country) {
            console.log("Found matching country:", country.name); // Debug info
            setHighlightedCountry(country.name);
          } else {
            console.log("No matching country found for:", countryKey); // Debug info
            setHighlightedCountry(null);
          }
        } else {
          console.log("No point or no country property"); // Debug info
          setHighlightedCountry(null);
        }
      })
      .labelsData(cities) // Add labels
      .labelText("name") // Show name
      .labelSize(1.5) // Make labels readable
      .labelColor(() => "white") // White text for contrast
      .labelResolution(2);

    return () => {
      // Cleanup
      if (globeInstanceRef.current) {
        globeInstanceRef.current._destructor();
      }
    };
  }, [cities, continent]);

  // Use effect to update highlighting when state changes
  useEffect(() => {
    if (globeInstanceRef.current) {
      globeInstanceRef.current
        .polygonCapColor(d => {
          const countryName = d.properties.name;
          return countryName === highlightedCountry ? "rgba(255, 0, 0, 0.5)" : "rgba(0, 0, 255, 0.2)";
        })
        .polygonSideColor(d => {
          const countryName = d.properties.name;
          return countryName === highlightedCountry ? "rgba(255, 0, 0, 0.5)" : "rgba(0, 0, 255, 0.2)";
        })
        .polygonStrokeColor(d => {
          const countryName = d.properties.name;
          return countryName === highlightedCountry ? "rgba(255, 0, 0, 1)" : "rgba(0, 0, 255, 0.5)";
        });
    }
  }, [highlightedCountry]);

  return <div ref={globeRef} style={{ width: "100vw", height: "90vh" }} />;
};

// Helper function to get the initial view for a continent
const getContinentView = (continent) => {
  switch (continent) {
    case "Europe":
      return { lat: 50, lng: 10, altitude: 2.5 }; // Center on Europe
    case "Asia":
      return { lat: 34, lng: 100, altitude: 2.5 }; // Center on Asia
    case "North America":
      return { lat: 45, lng: -100, altitude: 2.5 }; // Center on North America
    default:
      return { lat: 0, lng: 0, altitude: 2.5 }; // Default view
  }
};

export default GlobeComponent;