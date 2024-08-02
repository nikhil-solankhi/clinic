import React from 'react';

function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-6 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-2">© 2024 Dr. Sheetal's Spandan Clinic. All rights reserved.</p>
        <p className="text-sm">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> | 
          <a href="/terms-of-service" className="hover:underline ml-2">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
