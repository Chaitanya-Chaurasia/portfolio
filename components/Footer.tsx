import Link from 'next/link';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { LinkedInLogoIcon } from '@radix-ui/react-icons';
import { InstagramLogoIcon } from '@radix-ui/react-icons';
import { ExternalLink } from 'lucide-react';

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
                        <Link href="https://github.com/Chaitanya-Chaurasia/portfolio" target="_blank" rel="noopener noreferrer">
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
                    </div>
                </div>
            </div>
        </footer>
    )
}