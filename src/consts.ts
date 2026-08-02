// Single source of truth for site-wide values so nothing gets hand-typed
// inconsistently across pages. Fill these in first when starting a new
// client project — everything else (BaseHead, Header, Footer, schema)
// reads from here.

export const SITE_TITLE = 'Marcy Cona';
export const SITE_DESCRIPTION = 'Portfolio of Marcy Cona — two decades of creative direction, brand, and advertising work in beauty and consumer products.';

export const SITE_PHONE = ''; // no public phone number for this portfolio site
export const SITE_EMAIL = 'sheridesignn@gmail.com';
export const SITE_ADDRESS = ''; // no public address — portfolio site, not a storefront

// Header shows Home/Portfolio/About inline plus a separate "let's connect"
// CTA button (see Header.astro) rather than listing Contact a second time;
// NAV_LINKS itself stays the full set for the mobile menu and footer.
export const NAV_LINKS = [
	{ label: 'Home', href: '/' },
	{ label: 'Portfolio', href: '/portfolio/' },
	{ label: 'About', href: '/about/' },
	{ label: 'Contact', href: '/contact/' },
];
