import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  return (
    <header className="shell border-b border-border">
      <div className="flex items-center justify-between h-16">
        <Link href="/" className="text-sm font-medium hover:text-muted-foreground transition-colors">
          Felipe Benini
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/projects" className="text-sm hover:text-muted-foreground transition-colors">
            Projects
          </Link>
          <Link
            href="https://github.com/FelBenini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-muted-foreground transition-colors"
          >
            GitHub
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
