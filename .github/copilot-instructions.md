# Copilot Instructions for MemoryVault (React + Vite)

## Project Overview
- **Framework:** React (with Vite for fast builds and HMR)
- **Routing:** React Router (`src/App.jsx`)
- **State Persistence:** Uses `localStorage` for storing time capsules
- **Component Structure:**
  - `src/components/`: Shared UI (Header, Footer)
  - `src/pages/`: Main app pages (Home, Dashboard, CreateCapsule, CapsuleDetail)

## Key Patterns & Conventions
- **Capsule Data:**
  - Capsules are stored as an array in `localStorage` under the key `capsules`
  - CRUD operations are performed directly on this array (see `Dashboard.jsx`)
- **Navigation:**
  - Use `useNavigate` and `<Link>` from React Router for page transitions
  - Editing a capsule passes state via `navigate('/createcapsule', { state: { capsule, index } })`
- **Styling:**
  - CSS files per component/page (e.g., `App.css`, `Home.css`)
  - Inline styles for dynamic UI effects (hover, color)
- **Unlock Logic:**
  - Capsules have an `unlockDate` property; UI shows "Locked" or "Unlocked" based on current date

## Developer Workflows
- **Start Dev Server:**
  - `npm run dev` (Vite)
- **Build for Production:**
  - `npm run build`
- **Linting:**
  - ESLint config in `eslint.config.js`
- **No Test Suite:**
  - No test files or test runner detected

## Integration Points
- **No backend/API:**
  - All data is client-side (localStorage)
- **No authentication/authorization**
- **No external state management (Redux, etc.)**

## Examples
- **Capsule CRUD:** See `Dashboard.jsx` for delete/edit logic
- **Routing:** See `App.jsx` for route definitions
- **Component Usage:** Header/Footer imported in `App.jsx`, reused across pages

## Recommendations for AI Agents
- Maintain localStorage data structure for capsules
- Use React Router for navigation and state passing
- Follow existing CSS and inline style conventions
- Reference `src/pages/` for main flows, `src/components/` for shared UI

---
If any section is unclear or missing, please provide feedback for further refinement.
