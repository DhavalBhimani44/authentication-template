# 🔐 Next.js 15 Authentication Template

A modern and extensible authentication template built using **Next.js 15**, **BetterAuth**, and **Drizzle ORM**. Designed for fast, secure, and scalable full-stack applications.

---

## 🚀 Features

- ✅ Built with **Next.js 15 App Router**
- 🔐 Authentication powered by **BetterAuth**
- 💃 **Drizzle ORM** for type-safe PostgreSQL database access
- 📄 Zod schema validation
- 🌐 Social login (Google, GitHub)
- 🧪 Full form handling with React Hook Form
- 💅 UI powered by **shadcn/ui** and **Tailwind CSS**
- ⚙️ Built-in loading state, error handling, and form validation

---

## 🧱 Tech Stack

| Tool            | Purpose                                  |
| --------------- | ---------------------------------------- |
| Next.js 15      | Full-stack framework (App Router)        |
| BetterAuth      | Authentication (sign-up, sign-in, OAuth) |
| Drizzle ORM     | SQL ORM for PostgreSQL                   |
| Zod             | Input validation                         |
| React Hook Form | Form state management                    |
| Shadcn/UI       | Accessible component library             |
| Tailwind CSS    | Utility-first CSS framework              |

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/DhavalBhimani44/authentication-template.git
cd authentication-template
```

### 2. Install dependencies

```bash
pnpm install
```

or

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add:

```env
DATABASE_URL =
BETTER_AUTH_SECRET =
BETTER_AUTH_URL =

GITHUB_CLIENT_ID =
GITHUB_CLIENT_SECRET =

GOOGLE_CLIENT_ID =
GOOGLE_CLIENT_SECRET =
```

You can just rename `.env.example` to `.env` and add in your credentials.

---

## ⚒️ Database Setup

Run migrations using Drizzle:

```bash
npm db:push
```

To open drizzle studio on local pc:

```bash
npm db:studio
```

---

## 🧪 Run Development Server

```bash
npm run dev
# or
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚖️ Customization

- ✅ Add new providers in `authClient.signIn.social(...)`
- ✅ Update styles via Tailwind or shadcn themes
- ✅ Extend schema validations using Zod
- ✅ Swap database (e.g., MySQL, SQLite) via Drizzle

---

## 🧑‍💻 Author

Created by [Dhaval Bhimani](https://github.com/DhavalBhimani44)

---

## ⭐️ Feedback

If you find this project helpful, please give it a ⭐️ on GitHub!
