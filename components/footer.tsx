import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs font-medium text-muted-foreground">
            {currentYear} &copy; Chaitanya Chaurasia.
          </div>
          <div className="text-xs font-medium text-muted-foreground flex items-center gap-2">
            <GitHubLogoIcon className="w-4 h-4" />
            <Link
              href="https://github.com/Chaitanya-Chaurasia/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              source code
            </Link>
            <ExternalLink className="w-2 h-2" />
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/Chaitanya-Chaurasia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GitHubLogoIcon className="w-4 h-4" />
            </Link>
            <Link
              href="https://linkedin.com/in/chai-t"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInLogoIcon className="w-4 h-4" />
            </Link>
            <Link
              href="https://instagram.com/chaitanya_chaurasia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <InstagramLogoIcon className="w-4 h-4" />
            </Link>
            <Link
              href="https://x.com/itschai_tea"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="X"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                id="X--Streamline-Simple-Icons"
                height="14"
                width="14"
              >
                <path
                  d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8 -7.584 -6.638 7.584H0.474l8.6 -9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                  strokeWidth="1"
                  className="stroke-muted-foreground fill-muted-foreground hover:stroke-foreground hover:fill-foreground transition-colors"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
