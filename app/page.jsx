import CardGrid from "./components/GridCards.jsx";
import RootLayout from "./RooLayout.jsx";
import { generateMetadata } from "./utils/metaData.js";

export const metadata = generateMetadata({
  title: "Home",
  description: "Find the best luxury rehab centers in the world.",
  path: "/",
  image: "/luxury-rehab-centers.jpg",
  twitter: {
    card: "summary_large_image",
    site: "@recoveryrehab",
  },
});

export default function Home() {
  return (
    <RootLayout>
      <CardGrid />
    </RootLayout>
  );
}
