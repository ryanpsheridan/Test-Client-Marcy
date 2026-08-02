// Single source of truth for site-wide values so nothing gets hand-typed
// inconsistently across pages. Fill these in first when starting a new
// client project — everything else (BaseHead, Header, Footer, schema)
// reads from here.

export const SITE_TITLE = 'Marcy Cona';
export const SITE_DESCRIPTION = 'Portfolio of Marcy Cona — two decades of creative direction, brand, and advertising work in beauty and consumer products.';

export const SITE_PHONE = ''; // no public phone number for this portfolio site
export const SITE_EMAIL = 'marcycona@gmail.com';
export const SITE_ADDRESS = ''; // no public address — portfolio site, not a storefront

// Header is just a logo + hamburger at every screen size — this full set
// is what populates the overlay menu (and the footer nav).
//
// Portfolio is intentionally left out — the homepage viewer already
// serves that role. The page itself (src/pages/portfolio.astro and
// portfolio/[slug].astro) still exists and is reachable directly; it's
// just not linked from nav. Add it back here if that changes.
export const NAV_LINKS = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about/' },
	{ label: 'Contact', href: '/contact/' },
];
