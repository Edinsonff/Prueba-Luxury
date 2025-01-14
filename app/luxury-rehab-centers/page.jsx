import PaginatedList from "../components/PaginatedList.jsx";
import RootLayout from "../RooLayout.jsx";
import { generateMetadata } from "../utils/metaData.js";

export const metadata = generateMetadata({
  title: "Luxury Rehab Centers",
  description: "Find the best luxury rehab centers in the world.",
  path: "/luxury-rehab-centers",
  image: "/luxury-rehab-centers.jpg",
  twitter: {
    card: "summary_large_image",
    site: "@recoveryrehab",
  },
});

export default function LuxuryRehabCenters() {
  return (
    <RootLayout>
        <PaginatedList />
    </RootLayout>
  );
}
