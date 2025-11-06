import "./globals.css";

export const metadata = {
  title: "Rahul Sugumar — Portfolio",
  description: "Full-Stack Developer & AI/ML Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg text-fg">{children}</body>
    </html>
  );
}
