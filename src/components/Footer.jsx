const Footer = () => {
  return (
    <footer className="bg-[--color-lihaxa-darkteal] text-white text-center py-4 mt-8">
      <p className="text-sm">
        © {new Date().getFullYear()} Lihaxa Health. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
