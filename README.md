# AI Component Comparison App

A powerful AI-driven platform that allows you to generate and compare UI components across four major React libraries simultaneously: **Shadcn UI**, **Material UI**, **Ant Design**, and **Chakra UI v3**.

![AI Generator Preview](https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60)

## 🚀 Features

- **Multi-Library Generation**: Describe a component once and see it implemented in 4 different design systems side-by-side.
- **Interactive Sandbox**: Live editable previews for every generated component powered by `@codesandbox/sandpack`.
- **Iterative Refinement**: Chat with the AI to modify existing code. Say "Make the button red" or "Add a label", and it will update the specific component.
- **Persistent State**: Seamlessly toggle between **Code** and **Preview** views without losing your sandbox state or refreshing.
- **Modern Tech Stack**: Built with Next.js 16 (App Router), TypeScript, and Gemini 1.5 Flash.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **AI Engine**: [Google Gemini 1.5 Flash](https://deepmind.google/technologies/gemini/)
- **Component Libraries**:
  - [Shadcn UI](https://ui.shadcn.com/) (Tailwind CSS)
  - [Material UI (MUI)](https://mui.com/)
  - [Ant Design (Antd)](https://ant.design/)
  - [Chakra UI v3](https://v3.chakra-ui.com/)
- **Live Preview**: [Sandpack](https://sandpack.codesandbox.io/)

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- Google Gemini API Key

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/krishna21sai/Component-Comparison-app.git
   cd Component-Comparison-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   Create a `.env.local` file in the root directory and add your keys:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 💡 Usage

1. Enter a prompt in the search bar (e.g., "A modern login form with glassmorphism").
2. Click **Generate All**.
3. Use the **Preview** toggle (Eye icon) to see the live components.
4. Use the **Code** toggle (Code icon) to view and copy the implementation.
5. Provide follow-up prompts to refine the generated components.


## 🌐 Deployment (Vercel)

1. Push your latest code to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your repository.
4. In the **Environment Variables** section, add `GEMINI_API_KEY`.
5. Click **Deploy**.

## 📄 License

This project is licensed under the MIT License.