import '../styles/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}<footer><h2>Footer</h2></footer></body>
    </html>
  );
}
