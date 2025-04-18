
export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 IconVerse. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="text-sm text-muted-foreground hover:underline">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:underline">
              Contact
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-auto max-w-md">
          <div className="bg-muted p-2 rounded-lg text-center text-sm text-muted-foreground">
            <div className="w-full h-[90px] bg-accent flex items-center justify-center">
              Ad Space
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
