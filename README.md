# StockFlow Web POC

## Setup

1. Run `npm install`.
2. Copy `.env.example` to `.env.local` and set `VITE_CLERK_PUBLISHABLE_KEY` to the publishable key for the StockFlow Clerk application. Keep the Clerk secret key out of this frontend project.
3. Run `npm run dev`.

Clerk manages browser sessions. New users can sign up, but cannot open StockFlow pages until an administrator sets their Clerk user **Public metadata** to `{"role":"stock-manager"}` or `{"role":"fdo"}`. The user can select **Check access again** on the pending page after the role is assigned.

The route table uses `RouteAccess.PUBLIC` and `RouteAccess.PROTECTED`. Protected Stock Manager and FDO pages also declare their required role. The frontend route guard controls page access; any future backend API must verify Clerk authentication and roles separately.
