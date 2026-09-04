import Link from 'next/link';
import { Activity, LayoutDashboard, Users, Settings } from 'lucide-react';

export default function Navigation() {
  return (
    <div className="flex h-screen w-64 flex-col border-r bg-white">
      <div className="flex h-16 items-center px-6 border-b">
        <Activity className="h-6 w-6 text-primary-600 mr-2" />
        <span className="font-semibold text-lg tracking-tight text-gray-900">
          SwasthyaSetu
        </span>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-4">
          <Link
            href="/"
            className="flex items-center rounded-md bg-primary-50 px-3 py-2 text-sm font-medium text-primary-900"
          >
            <LayoutDashboard className="mr-3 h-5 w-5 text-primary-500" />
            Dashboard
          </Link>
          
          <Link
            href="#"
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            <Users className="mr-3 h-5 w-5 text-gray-400" />
            Patients
          </Link>

          <Link
            href="#"
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            <Activity className="mr-3 h-5 w-5 text-gray-400" />
            Referrals
          </Link>
        </nav>
      </div>

      <div className="border-t p-4">
        <Link
          href="#"
          className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        >
          <Settings className="mr-3 h-5 w-5 text-gray-400" />
          Facility Settings
        </Link>
      </div>
    </div>
  );
}
