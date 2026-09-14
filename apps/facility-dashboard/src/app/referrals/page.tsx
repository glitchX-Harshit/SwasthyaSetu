import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Phone,
  User,
} from 'lucide-react';
import Link from 'next/link';

const referrals = {
  'P-1042': {
    patientId: 'P-1042',
    patientName: 'Rajesh Kumar',
    age: 52,
    gender: 'Male',
    phone: '+91 98XXXXXX42',
    risk: 'HIGH',
    reason: 'Breathing difficulty',
    eta: '12 min',
    status: 'INCOMING',
    referredFrom: 'Primary Health Centre',
    referredTo: 'District Hospital',
    createdAt: 'Today, 10:32 AM',
  },

  'P-1044': {
    patientId: 'P-1044',
    patientName: 'Sunita Devi',
    age: 47,
    gender: 'Female',
    phone: '+91 97XXXXXX44',
    risk: 'HIGH',
    reason: 'Danger signs',
    eta: '8 min',
    status: 'INCOMING',
    referredFrom: 'Community Health Centre',
    referredTo: 'District Hospital',
    createdAt: 'Today, 10:45 AM',
  },

  'P-1045': {
    patientId: 'P-1045',
    patientName: 'Amit Singh',
    age: 35,
    gender: 'Male',
    phone: '+91 96XXXXXX45',
    risk: 'MEDIUM',
    reason: 'High fever',
    eta: '20 min',
    status: 'DEPARTED',
    referredFrom: 'Primary Health Centre',
    referredTo: 'District Hospital',
    createdAt: 'Today, 11:05 AM',
  },

  'P-1048': {
    patientId: 'P-1048',
    patientName: 'Priya Sharma',
    age: 29,
    gender: 'Female',
    phone: '+91 95XXXXXX48',
    risk: 'LOW',
    reason: 'Routine follow-up',
    eta: '35 min',
    status: 'CREATED',
    referredFrom: 'Community Health Centre',
    referredTo: 'District Hospital',
    createdAt: 'Today, 11:20 AM',
  },
};

function RiskBadge({ risk }: { risk: string }) {
  const styles = {
    HIGH: 'bg-red-50 text-red-700 ring-red-600/20',
    MEDIUM: 'bg-orange-50 text-orange-700 ring-orange-600/20',
    LOW: 'bg-green-50 text-green-700 ring-green-600/20',
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${
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
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
        styles[status as keyof typeof styles]
      }`}
    >
      {status}
    </span>
  );
}

export default function ReferralsPage() {
  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>

        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Referral Queue
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Monitor and review incoming patient referrals.
          </p>
        </div>
      </div>

      {/* Referral List */}
      <section className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200">

        <div className="border-b border-gray-200 px-5 py-4">
          <h3 className="font-semibold text-gray-900">
            Active Referrals
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            Select a referral to view patient and referral details.
          </p>
        </div>

        <div className="divide-y divide-gray-100">

          {Object.values(referrals).map((referral) => (
            <Link
              key={referral.patientId}
              href={`/referrals/${referral.patientId}`}
              className="block px-5 py-5 transition hover:bg-gray-50"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                {/* Patient */}
                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-50">
                    <User className="h-5 w-5 text-primary-600" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold text-gray-900">
                        {referral.patientName}
                      </p>

                      <span className="text-xs text-gray-400">
                        {referral.patientId}
                      </span>

                      <RiskBadge risk={referral.risk} />
                    </div>

                    <p className="mt-1 text-sm text-gray-500">
                      {referral.reason}
                    </p>
                  </div>
                </div>

                {/* Referral Information */}
                <div className="grid grid-cols-2 gap-5 text-sm sm:grid-cols-4">

                  <div>
                    <p className="text-xs text-gray-400">
                      ETA
                    </p>

                    <div className="mt-1 flex items-center gap-1 font-medium text-gray-700">
                      <Clock className="h-4 w-4" />
                      {referral.eta}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Status
                    </p>

                    <div className="mt-1">
                      <StatusBadge status={referral.status} />
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      From
                    </p>

                    <p className="mt-1 font-medium text-gray-700">
                      {referral.referredFrom}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Created
                    </p>

                    <div className="mt-1 flex items-center gap-1 font-medium text-gray-700">
                      <Calendar className="h-4 w-4" />
                      {referral.createdAt}
                    </div>
                  </div>

                </div>

              </div>
            </Link>
          ))}

        </div>
      </section>

      {/* Information Card */}
      <section className="rounded-xl border border-blue-100 bg-blue-50 p-5">

        <div className="flex gap-3">

          <div className="rounded-lg bg-blue-100 p-2">
            <MapPin className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <h3 className="font-semibold text-blue-900">
              Referral workflow
            </h3>

            <p className="mt-1 text-sm text-blue-700">
              Referrals can move through different stages such as
              Created, Departed, Incoming, and Arrived.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}