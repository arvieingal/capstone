import UserNavbar from "@/components/UserNavbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // Ensure correct typing
}) {
  return (
    <>

      {children} {/* Use the children prop here */}
    </>
  );
}