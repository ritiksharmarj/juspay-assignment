# Juspay Assignment

This is a saas app built with modern web tech including React 19, Vite, and Tailwind CSS 4.

- Home - https://juspay-assignment-ochre.vercel.app/
- Order List - https://juspay-assignment-ochre.vercel.app/order-list

## Setup

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (v22 or newer is recommended)
- [pnpm](https://pnpm.io/installation) package manager

### Installation

- Clone the repository:

  ```bash
  git clone https://github.com/ritiksharmarj/juspay-assignment.git
  ```

- Navigate to the project directory:

  ```bash
  cd juspay-assignment
  ```

- Install the dependencies:

  ```bash
  pnpm install
  ```

- Run the app:

  ```bash
  pnpm dev
  ```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Design Decisions

- Reusable component structure using function component and hooks. Find in `src/components/ui`.
- **Tailwind CSS** for styling approach and **Radix UI** as UI lib which enable rapid and consistent UI development.
- Stored all selection colors in `src/globals.css` for both light and dark mode to switch theme easily without writing too many tailwind css like `dark:bg-primary-brand`.
- All the charts related components using `Recharts`.

## Challenges & Improvements

1.  **Sidebar Component**:

    - **Challenge**: Initially I created `SidebarLeft` and `SidebarRight` component and it had duplicate logic and also was handling many unnecessary conditions to make it responsive.
    - **Improvement**: Refactored twice before reaching to this stage of `Sidebar` component. Now I created seperate `src/components/ui/sidebar.jsx` component to handle all the conditions and responsiveness. It accepts side which is left by default but for the right sidebar pass the side right. It uses `Sheet` built with radix dialog for smaller screens to open sidebars smoothly over the screen.

2.  **Collapsible Menus**:

    - **Challenge**: The collapsible sidebar menus did not automatically open when a user navigated directly to a child route.
    - **Improvement**: The `Collapsible` component now accept a `defaultOpen` prop. In the left sidebar component, it set to `true` if the current URL matches any sub-menu item's route, ensuring the active menu is expanded on page load.
