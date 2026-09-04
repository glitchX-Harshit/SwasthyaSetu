# Frontline Mobile Application (Flutter)

Mobile client designed for frontline health workers (ASHA/ANM) supporting:
- Offline-first patient and encounter logging
- Bi-directional sync with SwasthyaSetu backend
- Digital triage and referral workflows

## Structure
- `lib/core/`: Networking, local persistence, offline sync, themes.
- `lib/features/`: Feature modules (auth, patient registration, encounters, referrals).
- `lib/shared/`: Shared UI components, widgets, and utility models.
