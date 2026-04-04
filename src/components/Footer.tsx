const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-body">
        <div className="flex items-center gap-2">
          <span className="font-heading font-bold text-foreground">K OPTIK</span>
          <span>&</span>
          <span className="font-heading font-bold text-foreground">AUDITION</span>
        </div>
        <p>© {new Date().getFullYear()} K Optik & Audition. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
