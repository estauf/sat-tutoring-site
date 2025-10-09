export const metadata = {
  title: "SAT English Tutoring — Affordable 1-on-1",
  description: "Score-boosting SAT Reading & Writing tutoring.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
