import Link from 'next/link';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Clock,
  Users,
} from 'lucide-react';

const referrals = [
  {
    patientId: 'P-1042',
    risk: 'HIGH',
    reason: 'Breathing difficulty',
    eta: '12 min',
    status: 'INCOMING',
  },
  {
    patientId: 'P-1044',
    risk: 'HIGH',
    reason: 'Danger signs',
    eta: '8 min',
    status: 'INCOMING',
  },
  {
    patientId: 'P-1045',
    risk: 'MEDIUM',
    reason: 'High fever',
    eta: '20 min',
    status: 'DEPARTED',
  },
  {
    patientId: 'P-1048',
    risk: 'LOW',
    reason: 'Routine follow-up',
    eta: '35 min',
    status: 'CREATED',
  },
];

function RiskBadge({ risk }: { risk: string }) {
  const styles = {
    HIGH: 'bg-red-50 text-red-700 ring-red-600/20',
    MEDIUM: 'bg-orange-50 text-orange-700 ring-orange-600/20',
    LOW: 'bg-green-50 text-green-700 ring-green-600/20',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${
        styles[risk as keyof typeof styles]
      }`}
    >
      {risk}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    INCOMING: 'bg-blue-50 text-blue-700',
    DEPARTED: 'bg-purple-50 text-purple-700',
    CREATED: 'bg-gray-100 text-gray-700',
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
        styles[status as keyof typeof styles]
      }`}
    >
      {status}
    </span>
  );
}

export default function Dashboard() {
  const highPriorityReferrals = referrals.filter(
    (referral) => referral.risk === 'HIGH'
  );

  return (
    <div className="space-y-6">

      {/* Page heading */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Facility Overview
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Monitor referrals, patient flow, and priority cases.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

        {/* Total Referrals */}
        <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total Referrals
              </p>

              <p className="mt-2 text-3xl font-bold text-gray-900">
                24
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Today
              </p>
            </div>

            <div className="rounded-lg bg-primary-50 p-3">
              <Activity className="h-6 w-6 text-primary-600" />
            </div>
          </div>
        </div>

        {/* Critical Referrals */}
        <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Critical Referrals
              </p>

              <p className="mt-2 text-3xl font-bold text-red-600">
                5
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Require attention
              </p>
            </div>

            <div className="rounded-lg bg-red-50 p-3">
              <AlertTriangle className="h-6 w-6 text-red-500" />
            </div>
          </div>
        </div>

        {/* Pending Triage */}
        <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Pending Triage
              </p>

              <p className="mt-2 text-3xl font-bold text-orange-600">
                8
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Waiting for assessment
              </p>
            </div>

            <div className="rounded-lg bg-orange-50 p-3">
              <Clock className="h-6 w-6 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Arrived */}
        <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Arrived Today
              </p>

              <p className="mt-2 text-3xl font-bold text-green-600">
                11
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Patients received
              </p>
            </div>

            <div className="rounded-lg bg-green-50 p-3">
              <Users className="h-6 w-6 text-green-500" />
            </div>
          </div>
        </div>

      </div>

      {/* High Priority Referrals */}
      <section className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200">

        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <div>
            <h3 className="font-semibold text-gray-900">
              High Priority Referrals
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              Cases that may require immediate attention
            </p>
          </div>

          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
            {highPriorityReferrals.length} Active
          </span>
        </div>

        <div className="divide-y divide-gray-100">

          {highPriorityReferrals.map((referral) => (
            <div
              key={referral.patientId}
              className="flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
            >

              {/* Referral information */}
              <div className="flex items-center gap-4">

                <div className="rounded-lg bg-red-50 p-2.5">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>

                <div>
                  <div className="flex items-center gap-2">

                    <p className="font-semibold text-gray-900">
                      {referral.patientId}
                    </p>

                    <RiskBadge risk={referral.risk} />

                  </div>

                  <p className="mt-1 text-sm text-gray-500">
                    {referral.reason}
                  </p>
                </div>

              </div>

              {/* Referral actions */}
              <div className="flex items-center gap-5 text-sm">

                <div>
                  <p className="text-xs text-gray-400">
                    ETA
                  </p>

                  <p className="font-semibold text-gray-900">
                    {referral.eta}
                  </p>
                </div>

                <StatusBadge status={referral.status} />

                <Link
                  href={`/referrals/${referral.patientId}`}
                  className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                  aria-label={`View ${referral.patientId}`}
                >
                  <ArrowRight className="h-5 w-5" />
                </Link>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* Recent Referrals */}
      <section className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200">

        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">

          <div>
            <h3 className="font-semibold text-gray-900">
              Recent Referrals
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              Latest referral activity at this facility
            </p>
          </div>

          <Link
            href="/referrals"
            className="text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            View all
          </Link>

        </div>

        {/* Desktop table */}
        <div className="hidden overflow-x-auto md:block">

          <table className="min-w-full">

            <thead className="bg-gray-50">
              <tr>

                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Patient
                </th>

                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Risk
                </th>

                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Reason
                </th>

                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  ETA
                </th>

                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Status
                </th>

                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Action
                </th>

              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">

              {referrals.map((referral) => (
                <tr
                  key={referral.patientId}
                  className="hover:bg-gray-50"
                >

                  <td className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-gray-900">
                    {referral.patientId}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4">
                    <RiskBadge risk={referral.risk} />
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-600">
                    {referral.reason}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-600">
                    {referral.eta}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4">
                    <StatusBadge status={referral.status} />
                  </td>

                  <td className="whitespace-nowrap px-5 py-4">

                    <Link
                      href={`/referrals/${referral.patientId}`}
                      className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50 hover:text-primary-700"
                    >
                      View
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* Mobile cards */}
        <div className="divide-y divide-gray-100 md:hidden">

          {referrals.map((referral) => (
            <div
              key={referral.patientId}
              className="space-y-3 p-5"
            >

              <div className="flex items-center justify-between">

                <span className="font-semibold text-gray-900">
                  {referral.patientId}
                </span>

                <RiskBadge risk={referral.risk} />

              </div>

              <p className="text-sm text-gray-600">
                {referral.reason}
              </p>

              <div className="flex items-center justify-between">

                <span className="text-sm text-gray-500">
                  ETA: {referral.eta}
                </span>

                <div className="flex items-center gap-3">

                  <StatusBadge status={referral.status} />

                  <Link
                    href={`/referrals/${referral.patientId}`}
                    className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                    aria-label={`View ${referral.patientId}`}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}