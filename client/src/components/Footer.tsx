export default function Footer() {
  return (
    <footer className="py-8 bg-black">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Why Not Studio. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
