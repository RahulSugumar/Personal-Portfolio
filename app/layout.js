import "./globals.css";

export const metadata = {
  title: "Rahul Sugumar | Full-Stack Developer & AI Engineer",
  description:
    "Portfolio of Rahul Sugumar — Full-Stack Developer, AI/ML Engineer. Skilled in React, Node, MongoDB, Machine Learning, NPTEL Certified.",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg text-fg">
        <div className="fixed -top-40 right-0 w-[700px] h-[700px] bg-accent/10 blur-[200px] opacity-30 pointer-events-none"></div>
        <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 blur-[180px] opacity-20 pointer-events-none"></div>
        {children}  
      </body>
    </html>
  );
}
