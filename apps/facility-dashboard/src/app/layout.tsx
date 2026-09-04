import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'SwasthyaSetu | Facility Dashboard',
  description: 'Healthcare facility management and triage dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen overflow-hidden bg-gray-50">
        <Navigation />
        <div className="flex flex-1 flex-col overflow-hidden">
          <header className="flex h-16 items-center justify-between border-b bg-white px-6">
            <h1 className="text-xl font-semibold text-gray-800">Overview</h1>
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 font-semibold text-sm">
                DH
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
