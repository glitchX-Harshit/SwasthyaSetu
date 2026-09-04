import { Activity, Clock, Users } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Top metrics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">Active Patients</dt>
                  <dd className="text-lg font-semibold text-gray-900">--</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Activity className="h-6 w-6 text-healthcare-red" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">Critical Referrals</dt>
                  <dd className="text-lg font-semibold text-gray-900">--</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Clock className="h-6 w-6 text-healthcare-orange" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">Pending Triage</dt>
                  <dd className="text-lg font-semibold text-gray-900">--</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Recent Referrals Queue</h3>
        </div>
        <div className="p-6 text-center text-gray-500">
          <p>No referrals to display.</p>
        </div>
      </div>
    </div>
  );
}
