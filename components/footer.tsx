import { ModeToggle } from "./mode-toggle";

export default function Footer() {
    return (
        <footer className="border sticky top-full py-2 mt-6">
            <div className="container h-12 flex items-center justify-between">
                <p className="text-muted-foregroundp text-sm">&copy; JunK</p>
                <ModeToggle />
            </div>
        </footer>
    );
}
