import "katex/dist/katex.min.css"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
return (
  <html lang="en-ZA">
    <body>{children}</body>
  </html>
);
}
