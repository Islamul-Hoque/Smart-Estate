import "../globals.css";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased">
                <section className="bg-[#F8FAFC] min-h-screen">
                    {children}
                </section>
            </body>
        </html>
    );
}