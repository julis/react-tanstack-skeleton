# Frontend Skeleton

A modern React.js frontend skeleton built with the latest web development tools and best practices.

## 🚀 Features

- **React 18+** - Latest React with hooks and concurrent features
- **TypeScript** - Type safety and enhanced developer experience
- **TanStack Router** - Type-safe, file-based routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Vite** - Fast build tool and development server
- **ESLint & Prettier** - Code linting and formatting

## 📦 Tech Stack

- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [TanStack Router](https://tanstack.com/router) - Type-safe routing
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Vite](https://vitejs.dev/) - Build tool

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd frontend-skeleton
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   ├── layout/         # Layout components
│   ├── features/       # Feature-specific components
│   └── common/         # Common/shared components
├── pages/              # Page components
├── routes/             # TanStack Router route definitions
├── lib/                # Utility functions
└── assets/             # Static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## 📄 Routes

The application includes the following routes:

- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/dashboard` - Dashboard (with nested routes)
- `/dashboard/settings` - Dashboard settings

## 🎨 Styling

This project uses Tailwind CSS for styling with the default shadcn/ui theme. You can:

- Modify `tailwind.config.js` for custom configuration
- Update CSS variables in `src/index.css` for theme customization
- Use shadcn/ui components with consistent styling

## 🧩 Adding Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.