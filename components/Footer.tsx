export default function Footer() {
  return (
    <footer className="bg-bg1 border-t border-white/10 py-6 sm:py-8 px-4 sm:px-6 text-center">
      <p className="text-sm sm:text-base text-zinc-600">
        © {new Date().getFullYear()} Adereso — People & Careers
      </p>
    </footer>
  );
}
