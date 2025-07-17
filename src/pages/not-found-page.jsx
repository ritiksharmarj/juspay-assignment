import { Link } from "react-router";
import { ArrowLineLeftIcon } from "@/components/icons";

export default function PageNotFound() {
  return (
    <main className="flex h-dvh items-center justify-center bg-gray-0 px-6 py-24 sm:py-32 lg:px-8">
      <div className="flex flex-col items-center text-center">
        <p className="font-semibold text-base text-brand-600">404</p>
        <h1 className="mt-4 font-bold text-3xl tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base text-gray-500 leading-7">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <Link
          to="/"
          className="mt-10 flex items-center justify-center gap-2 font-medium text-brand-600 text-sm transition-all hover:text-brand-700"
        >
          <ArrowLineLeftIcon size={20} />
          <span>Back to home</span>
        </Link>
      </div>
    </main>
  );
}
