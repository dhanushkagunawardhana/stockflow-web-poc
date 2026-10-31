# StockFlow Web POC

## Setup

1. Run `npm install`.
2. Copy `.env.example` to `.env.local` and set `VITE_CLERK_PUBLISHABLE_KEY` to the publishable key for the StockFlow Clerk application. Keep the Clerk secret key out of this frontend project.
3. Run `npm run dev`.

## Stock Summary API demo

The Stock Summary page now loads its cards, chart, and product table from the sibling `stockflow-server-poc` project. Start local MongoDB, follow that project's README to install dependencies and seed the demo data, then run its API on port 4000. Set `VITE_SERVER_URL` in `.env.local` if the API uses a different address. The warehouse and month controls request new data; product search and status filtering run in the browser. The Add Stock dialog is a visual demo and does not write to MongoDB.

Clerk manages browser sessions. New users can sign up, but cannot open StockFlow pages until an administrator sets their Clerk user **Public metadata** to `{"role":"stock-manager"}` or `{"role":"fdo"}`. The user can select **Check access again** on the pending page after the role is assigned.

The route table uses `RouteAccess.PUBLIC` and `RouteAccess.PROTECTED`. Protected Stock Manager and FDO pages also declare their required role. The frontend route guard controls page access; any future backend API must verify Clerk authentication and roles separately.
