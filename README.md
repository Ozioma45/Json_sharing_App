# ShareApp 📤

A full-stack web application built with **Next.js 14 (App Router)**, **Clerk** for authentication, and **Prisma** as the ORM. ShareApp allows authenticated users to store, manage, and share structured JSON data easily.

---

# Click [HERE](https://json-sharing-app-pnuw.vercel.app/), FOR LIVE PREVIEW

## 🚀 Features

- 🔐 User authentication via [Clerk.dev](https://clerk.dev)
- 📁 Authenticated dashboard to manage JSON data
- 💾 Store JSON in a PostgreSQL database using Prisma ORM
- 🔍 Fetch individual JSON records by ID
- 🌐 REST API routes with secure access control
- 🧑 Automatic user creation on first login
- 🎨 Clean UI with React and TailwindCSS
- ✍️ CodeMirror integration for beautiful JSON rendering

---

## 🛠 Tech Stack

| Frontend             | Backend              | Authentication | Database            |
| -------------------- | -------------------- | -------------- | ------------------- |
| Next.js (App Router) | Node.js              | Clerk.dev      | PostgreSQL + Prisma |
| React                | API Routes (App Dir) |                |                     |
| TailwindCSS          |                      |                |                     |

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Ozioma45/Json_sharing_App.git
cd Json_sharing_App
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root and add the following:

```env
DATABASE_URL=your_postgresql_database_url
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

> You can get the Clerk keys from your [Clerk dashboard](https://dashboard.clerk.dev/).

---

### 4. Set Up Prisma

```bash
npx prisma generate
npx prisma migrate dev --name init
```

This will generate the client and initialize the database schema.

---

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to get started.

---

## 📁 Folder Structure

```
.
├── app/
│   ├── api/
│   │   └── json/        # API routes for GET/POST JSON
│   └── dashboard/       # Protected user dashboard
├── components/          # Reusable UI components
├── lib/                 # Database client (Prisma)
├── prisma/              # Prisma schema
├── public/              # Static assets
├── styles/              # Global styles
└── .env                 # Environment variables
```

---

## 🧪 Future Improvements

- 📝 Add editing and deleting capabilities for JSON entries
- 🔗 Generate shareable public links
- 📊 View analytics on shared JSON
- 🔒 Role-based access control

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a pull request

---

## 📄 License

This project is licensed under the MIT License.

---

## 💬 Support

For any questions or feedback, feel free to reach out via [issues](https://github.com/Ozioma45/Json_sharing_App/issues) or email me at [oziomaegole@gmail.com](mailto:oziomaegole@gmail.com).

---

> Built with ❤️ using Next.js and Clerk

```

```
