export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Saurabh Mohan. All rights reserved.
        </p>
        <p className="text-xs text-muted">
          Built with care.
        </p>
      </div>
    </footer>
  );
}
