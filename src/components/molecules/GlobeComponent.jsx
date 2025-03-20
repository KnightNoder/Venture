import { useEffect, useRef, useState } from "react";
import Globe from "globe.gl";

const GlobeComponent = ({ cities, continent }) => {
  const globeRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const globeInstanceRef = useRef(null);
  const [highlightedCountry, setHighlightedCountry] = useState(null);

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

    globe
      .globeImageUrl(
        "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
      )
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
            [2.55, 51.09],
            [8.23, 42.33],
            [9.56, 42.15],
            [9.22, 41.38],
            [8.75, 41.58],
            [8.31, 40.85],
            [6.85, 43.01],
            [3.59, 43.07],
            [2.55, 51.09],
          ],
        ],
      },
      {
        id: "germany",
        name: "Germany",
        lat: 51.165691,
        lng: 10.451526,
        coordinates: [
          [
            [6.15, 50.8],
            [9.92, 50.32],
            [10.45, 51.13],
            [12.14, 50.12],
            [13.84, 50.73],
            [14.12, 51.05],
            [14.68, 51.05],
            [15.02, 51.11],
            [14.33, 52.36],
            [12.93, 53.14],
            [10.94, 53.55],
            [8.66, 54.4],
          ],
        ],
      },
      {
        id: "italy",
        name: "Italy",
        lat: 41.87194,
        lng: 12.56738,
        coordinates: [
          [
            [6.63, 47.7],
            [10.49, 46.61],
            [12.37, 46.77],
            [13.84, 46.51],
            [13.7, 45.59],
            [12.46, 45.4],
            [12.33, 44.95],
            [13.95, 44.8],
            [14.26, 42.75],
            [15.52, 41.96],
            [16.17, 41.74],
            [18.45, 40.84],
            [18.38, 40.35],
            [17.74, 40.28],
            [16.63, 38.91],
            [15.69, 38.21],
            [15.69, 37.44],
            [15.69, 36.65],
            [15.69, 35.49],
            [14.94, 35.7],
            [12.57, 35.7],
            [10.6, 36.03],
            [8.44, 38.23],
            [6.63, 47.7],
          ],
        ],
      },
      {
        id: "spain",
        name: "Spain",
        lat: 40.463667,
        lng: -3.74922,
        coordinates: [
          [
            [-9.39, 43.03],
            [-8.65, 42.34],
            [-6.75, 43.03],
            [-4.79, 43.57],
            [-3.82, 43.41],
            [-1.38, 43.03],
            [0.7, 42.81],
            [3.32, 42.44],
            [3.32, 40.48],
            [2.15, 39.93],
            [0.53, 39.31],
            [-0.79, 38.84],
            [-2.5, 36.43],
            [-5.37, 36.03],
            [-7.45, 36.95],
            [-9.39, 38.73],
            [-9.39, 43.03],
          ],
        ],
      },
    ];

    const polygonsData = countryData.map((country) => ({
      properties: { name: country.name, id: country.id },
      geometry: { type: "Polygon", coordinates: country.coordinates },
    }));

    const updatePolygons = () => {
      globe
        .polygonsData(polygonsData)
        .polygonCapColor((d) =>
          d.properties.name === highlightedCountry
            ? "rgba(255, 50, 50, 0.8)"
            : "rgba(0, 150, 255, 0.3)",
        )
        .polygonSideColor(() => "rgba(0, 0, 0, 0.5)")
        .polygonStrokeColor(() => "rgba(255, 255, 255, 0.7)")
        .polygonAltitude((d) =>
          d.properties.name === highlightedCountry ? 0.05 : 0.01,
        );
    };

    updatePolygons();

    // City markers with glowing effect
    globe
      .pointsData(cities)
      .pointAltitude(0.05)
      .pointColor(() => "cyan")
      .pointRadius(() => 0.5)
      .pointResolution(15) // Makes the dots look smoother
      .onPointClick(({ url }) => window.open(url, "_blank"))
      .onPointHover((point) => {
        if (point && point.country) {
          setHighlightedCountry(point.country);
          globe.pointOfView(
            { lat: point.lat, lng: point.lng, altitude: 1.5 },
            1000,
          );
        } else {
          setHighlightedCountry(null);
        }
      })
      .labelsData(cities)
      .labelText("name")
      .labelSize(2.5)
      .labelColor(() => "white")
      .labelResolution(2);

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
            ? "light-green"
            : "rgba(0, 150, 255, 0.3)",
        )
        .polygonAltitude((d) =>
          d.properties.name === highlightedCountry ? 0.05 : 0.01,
        );
    }
  }, [highlightedCountry]);

  return (
    <>
      <div
        ref={containerRef}
        className="100vw"
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
      return { lat: 50, lng: 10, altitude: 2.5 };
    case "Asia":
      return { lat: 34, lng: 100, altitude: 2.5 };
    case "North America":
      return { lat: 45, lng: -100, altitude: 2.5 };
    default:
      return { lat: 0, lng: 0, altitude: 2.5 };
  }
};

export default GlobeComponent;
