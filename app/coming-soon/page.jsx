import RootLayout from "../RooLayout"

export default function ComingSoon() {
  return (
    <RootLayout>
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-colorTitle">Coming Soon</h1>
        <p className="text-colorText">We're working on this feature. Stay tuned!</p>
      </div>
    </RootLayout>
  );
}
