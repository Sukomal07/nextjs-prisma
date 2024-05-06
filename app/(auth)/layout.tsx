export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen">
            <p className="text-center p-2 border-b border-slate-600 text-xl">20% off on registration</p>
            {children}
        </div>
    )
}