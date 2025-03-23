import { useEffect, useRef, useState } from "react";
import Globe from "globe.gl";

const GlobeComponent = ({ cities, continent }) => {
  const globeRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const globeInstanceRef = useRef(null);
  const [highlightedCountry, setHighlightedCountry] = useState(null);
  const initialViewRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = Math.min(window.innerWidth, 1200); // Cap max width
        const height =
          window.innerHeight < 500
            ? window.innerHeight * 0.7 // For very small heights
            : window.innerWidth < 768
              ? window.innerHeight * 0.6 // Mobile
              : window.innerHeight * 0.9; // Desktop

        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!globeRef.current) return;

    const globe = Globe()(globeRef.current);
    globeInstanceRef.current = globe;

    // Store initial view to return to when unhovered
    initialViewRef.current = getContinentView(continent);

    globe
      .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-night.jpg")
      .bumpImageUrl("https://unpkg.com/three-globe/example/img/earth-topology.png")
      .backgroundColor("#000011")
      .pointOfView(initialViewRef.current, 0);

    // More accurate GeoJSON data for European countries
    const countryData = [
      {
        id: "france",
        name: "France",
        lat: 46.603354,
        lng: 1.888334,
        coordinates: [
          [
            [-4.7913, 48.2261], // Brittany north coast
            [-2.0964, 49.3677], // Normandy coast
            [1.5664, 50.9848], // Belgian border
            [2.6621, 51.0793], // Northeast corner
            [8.2297, 48.9501], // Eastern border with Germany
            [7.5366, 47.6009], // Swiss border
            [6.8022, 45.9261], // Alpine border
            [7.7191, 43.7196], // Italian border
            [7.4316, 43.7495], // Monaco coast
            [4.8331, 43.3852], // Mediterranean coast
            [3.0762, 42.4149], // Spanish border
            [-1.7847, 43.3626], // Western Pyrenees
            [-1.0778, 45.5811], // Bay of Biscay coast
            [-4.7913, 48.2261]  // Back to start
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
            [8.1567, 54.9079], // Northern coast
            [9.4456, 54.8204], // Baltic Sea coast
            [10.9831, 54.3803], // Baltic coast east
            [13.6392, 54.0756], // Polish border north
            [14.5703, 53.9324], // Polish border northeast
            [14.6406, 51.9496], // Polish border east
            [14.8371, 50.8661], // Czech border northeast
            [12.4033, 50.1679], // Czech border southeast
            [13.0330, 49.0392], // Czech border south
            [12.2180, 47.7039], // Austrian border
            [10.1788, 47.2742], // Alpine border
            [8.5254, 47.5706], // Swiss border
            [7.5894, 47.5840], // French border south
            [6.1377, 49.4633], // Luxembourg border
            [6.0425, 50.6401], // Belgian border
            [5.8658, 51.0535], // Dutch border
            [6.8967, 53.4769], // North Sea coast
            [8.1567, 54.9079]  // Back to start
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
            [13.8062, 46.5088], // Austrian border
            [13.5938, 46.4324], // Slovenian border
            [13.7134, 45.6388], // Trieste area
            [12.4390, 45.4219], // Venice area
            [12.3346, 44.4938], // Adriatic coast
            [13.7080, 42.4614], // Central Adriatic
            [14.7852, 41.9022], // East coast
            [15.8574, 41.1748], // Southeast corner
            [16.9189, 40.8380], // Southeast coast
            [17.9590, 40.6336], // Heel of the boot
            [18.4204, 40.1049], // Bottom of heel
            [17.4463, 40.1477], // Gulf of Taranto
            [16.5332, 39.0531], // Calabria
            [15.9082, 38.2431], // Strait of Messina
            [15.1050, 38.0297], // Sicily north coast
            [13.2373, 37.5029], // Sicily west coast
            [12.4390, 37.8023], // Sicily southwest
            [12.0703, 38.2977], // Sicily northwest
            [12.6465, 38.3239], // Back to Sicily north
            [15.6299, 38.2592], // Back to mainland
            [14.1943, 40.8512], // Tyrrhenian coast
            [12.3960, 41.8850], // Rome area
            [10.3564, 43.7247], // Tuscany coast
            [8.8330, 44.4063], // Ligurian coast
            [7.5894, 43.9336], // French border
            [6.9873, 45.8287], // Alpine border with France
            [7.8564, 45.9177], // Alpine border with Switzerland
            [10.4956, 46.5384], // Alpine border
            [12.2092, 46.7321], // Dolomites
            [13.8062, 46.5088]  // Back to start
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
            [-9.3018, 43.3626], // Northwest corner (Galicia)
            [-8.3081, 43.7792], // North coast
            [-3.1729, 43.5996], // Bilbao area
            [-1.7847, 43.3626], // French border
            [3.3223, 42.4491], // Mediterranean border with France
            [3.2080, 41.8910], // Costa Brava
            [2.1973, 41.3851], // Barcelona area
            [0.7910, 40.8905], // East coast
            [-0.1318, 39.4699], // Valencia area
            [-0.7471, 38.3413], // Alicante area
            [-4.7473, 36.7212], // Costa del Sol
            [-5.6134, 36.0126], // Strait of Gibraltar
            [-7.5234, 37.2435], // Portuguese border south
            [-7.0312, 38.7100], // Portuguese border central
            [-6.9873, 41.9022], // Portuguese border north
            [-8.6768, 42.2803], // Northwest coast
            [-9.3018, 43.3626]  // Back to start
          ]
        ]
      }
    ];

    const polygonsData = countryData.map((country) => ({
      properties: { name: country.name, id: country.id },
      geometry: { type: "Polygon", coordinates: country.coordinates },
    }));

    globe
      .polygonsData(polygonsData)
      .polygonCapColor((d) => 
        d.properties.name === highlightedCountry
          ? "rgba(255, 100, 100, 0.9)" // Red when highlighted
          : "rgba(0, 150, 255, 0.3)"   // Blue for normal state
      )
      .polygonSideColor(() => "rgba(0, 100, 0, 0.15)") 
      .polygonStrokeColor(() => "#111")
      .polygonAltitude((d) =>
        d.properties.name === highlightedCountry ? 0.12 : 0.06
      )
      .polygonsTransitionDuration(300) // smooth transition
      .polygonLabel(({ properties: d }) => `
        <div style="
          background-color: rgba(0, 0, 0, 0.75);
          color: white;
          padding: 10px;
          border-radius: 5px;
          font-family: Arial, sans-serif;
          font-size: 14px;
          line-height: 1.4;
        ">
          <div><b>${d.name}</b></div>
          <div>Click to explore ${d.name}</div>
        </div>
      `)
      .onPolygonHover((polygon) => {
        if (polygon) {
          setHighlightedCountry(polygon.properties.name);
        } else {
          setHighlightedCountry(null);
        }
      })
      .onPolygonClick((polygon) => {
        if (polygon && polygon.properties) {
          const country = polygon.properties.name;
          const targetCity = cities.find(city => city.country === country);
          if (targetCity && targetCity.url) {
            window.open(targetCity.url, "_blank");
          }
        }
      });

    // City markers with glowing effect
    globe
      .pointsData(cities)
      .pointAltitude(0.07) // Slightly higher than countries
      .pointColor(() => "#FFD700") // Gold color
      .pointRadius(() => 0.5)
      .pointResolution(15) // Makes the dots look smoother
      .pointsMerge(true) // More efficient rendering
      .onPointClick(({ url }) => window.open(url, "_blank"))
      .onPointHover((point) => {
        if (point && point.country) {
          setHighlightedCountry(point.country);
        }
      })
      .labelsData(cities)
      .labelText("name")
      .labelSize(1.5)
      .labelColor(() => "white")
      .labelResolution(2)
      .labelAltitude(0.01) // Add some depth to labels
      .labelDotRadius(0.3) // Add dot connector
      .labelDotOrientation(() => 'bottom');

    return () => {
      if (globeInstanceRef.current) {
        globeInstanceRef.current._destructor();
      }
    };
  }, [cities, continent]);

  useEffect(() => {
    if (globeInstanceRef.current) {
      globeInstanceRef.current
        .polygonCapColor((d) =>
          d.properties.name === highlightedCountry
            ? "rgba(255, 100, 100, 0.9)"  // Red when highlighted (made more vivid)
            : "rgba(0, 150, 255, 0.3)",   // Blue for normal state
        )
        .polygonAltitude((d) =>
          d.properties.name === highlightedCountry ? 0.12 : 0.06,
        );
      
      // IMPORTANT: Don't change the point of view when hovering
      // This was causing the cursor to move away from the country
    }
  }, [highlightedCountry]);

  return (
    <>
      <div
        ref={containerRef}
        className="w-full"
        style={{ height: dimensions.height }}
      >
        <div
          ref={globeRef}
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "100vw",
            overflow: "hidden",
          }}
        />
      </div>
    </>
  );
};

const getContinentView = (continent) => {
  switch (continent) {
    case "Europe":
      return { lat: 48, lng: 10, altitude: 2.5 };
    case "Asia":
      return { lat: 34, lng: 100, altitude: 2.5 };
    case "North America":
      return { lat: 45, lng: -100, altitude: 2.5 };
    default:
      return { lat: 0, lng: 0, altitude: 2.5 };
  }
};

export default GlobeComponent;