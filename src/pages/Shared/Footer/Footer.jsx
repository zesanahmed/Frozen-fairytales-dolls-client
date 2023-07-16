import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6">
            <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="col-span-2 sm:col-span-1">
                    <h3 className="text-xl font-semibold mb-6">About Us</h3>
                    <p className="text-sm">We are passionate about Disney dolls and bringing the magic of Disney characters to life. Explore our collection of Disney princesses, Frozen dolls, animation characters, and more.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-6">Products</h3>
                    <ul className="text-sm">
                        <li>Disney Princess Dolls</li>
                        <li>Frozen Dolls</li>
                        <li>Animation Character Dolls</li>
                        <li>Donald Duck Merchandise</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-6">Customer Support</h3>
                    <ul className="text-sm">
                        <li>Contact Us</li>
                        <li>Shipping Information</li>
                        <li>Returns & Exchanges</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-6">Stay Connected</h3>
                    <ul className="text-sm">
                        <li>Follow Us on Instagram</li>
                        <li>Like Us on Facebook</li>
                        <li>Subscribe to Our Newsletter</li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-8 border-t border-gray-600 pt-8">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Disney Dolls Store. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
