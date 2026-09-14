import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  User,
} from 'lucide-react';

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

export default async function ReferralDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const referral = referrals[id as keyof typeof referrals];

  if (!referral) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Referral not found
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            The referral you are looking for does not exist.
          </p>

          <Link
            href="/referrals"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to referrals
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/referrals"
          className="rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>

        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Referral Details
            </h2>

            <RiskBadge risk={referral.risk} />
          </div>

          <p className="mt-1 text-sm text-gray-500">
            Referral ID: {referral.patientId}
          </p>
        </div>
      </div>

      {/* Patient Information */}
      <section className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">

        <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
          <div className="rounded-lg bg-primary-50 p-2.5">
            <User className="h-5 w-5 text-primary-600" />
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">
              Patient Information
            </h3>

            <p className="text-xs text-gray-500">
              Basic patient details
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <p className="text-xs font-medium text-gray-400">
              Patient Name
            </p>
            <p className="mt-1 font-semibold text-gray-900">
              {referral.patientName}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-400">
              Patient ID
            </p>
            <p className="mt-1 font-semibold text-gray-900">
              {referral.patientId}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-400">
              Age / Gender
            </p>
            <p className="mt-1 font-semibold text-gray-900">
              {referral.age} / {referral.gender}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-400">
              Contact
            </p>

            <div className="mt-1 flex items-center gap-1">
              <Phone className="h-4 w-4 text-gray-400" />
              <p className="font-semibold text-gray-900">
                {referral.phone}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Referral Information */}
      <section className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">

        <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
          <div className="rounded-lg bg-orange-50 p-2.5">
            <MapPin className="h-5 w-5 text-orange-600" />
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">
              Referral Information
            </h3>

            <p className="text-xs text-gray-500">
              Details about this referral
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

          <div>
            <p className="text-xs font-medium text-gray-400">
              Reason for Referral
            </p>

            <p className="mt-1 text-lg font-semibold text-gray-900">
              {referral.reason}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-400">
              Risk Level
            </p>

            <div className="mt-2">
              <RiskBadge risk={referral.risk} />
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-400">
              Referred From
            </p>

            <p className="mt-1 font-semibold text-gray-900">
              {referral.referredFrom}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-400">
              Referred To
            </p>

            <p className="mt-1 font-semibold text-gray-900">
              {referral.referredTo}
            </p>
          </div>

        </div>
      </section>

      {/* Current Status */}
      <section className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">

        <h3 className="font-semibold text-gray-900">
          Current Status
        </h3>

        <div className="mt-4 flex flex-wrap items-center gap-6">

          <div>
            <p className="text-xs font-medium text-gray-400">
              Status
            </p>

            <div className="mt-2">
              <StatusBadge status={referral.status} />
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-400">
              Estimated Arrival
            </p>

            <div className="mt-2 flex items-center gap-2 font-semibold text-gray-900">
              <Clock className="h-4 w-4 text-orange-500" />
              {referral.eta}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-400">
              Created
            </p>

            <div className="mt-2 flex items-center gap-2 font-semibold text-gray-900">
              <Calendar className="h-4 w-4 text-gray-500" />
              {referral.createdAt}
            </div>
          </div>

        </div>
      </section>

      {/* Referral Timeline */}
      <section className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">

        <h3 className="font-semibold text-gray-900">
          Referral Timeline
        </h3>

        <div className="mt-5 space-y-5">

          <div className="flex gap-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-500" />

            <div>
              <p className="font-medium text-gray-900">
                Referral Created
              </p>

              <p className="text-sm text-gray-500">
                {referral.createdAt}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-500" />

            <div>
              <p className="font-medium text-gray-900">
                Referral Accepted
              </p>

              <p className="text-sm text-gray-500">
                Facility has received the referral.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="mt-0.5 h-5 w-5 text-orange-500" />

            <div>
              <p className="font-medium text-gray-900">
                Patient Arrival
              </p>

              <p className="text-sm text-gray-500">
                Estimated arrival: {referral.eta}
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}