// One entry per case study, each rendered at /portfolio/{slug}/ by
// src/pages/portfolio/[slug].astro. Add a new entry here for every new
// photo/project — no other file needs to change for a new project page to
// appear. Client/industry values are lowercase to match the site's own
// lowercase-heading convention when rendered directly as labels.
export interface Project {
	slug: string;
	title: string;
	client: string;
	industry: string;
	heroImage: { src: string; alt: string };
	supportingImages?: { src: string; alt: string }[];
}

export const projects: Project[] = [
	{
		slug: 'wella-campaign-creative',
		title: 'Wella campaign creative',
		client: 'wella',
		industry: 'commercial',
		heroImage: {
			src: '/images/gallery/wella-campaign-double-exposure.jpg',
			alt: 'Wella campaign creative combining bold color art with a model portrait',
		},
		supportingImages: [
			{
				src: '/images/gallery/wella-color-perfect-campaign.jpg',
				alt: 'Wella Color Perfect campaign photograph',
			},
		],
	},
	{
		slug: 'clairol-color-campaign',
		title: 'Clairol color campaign',
		client: 'clairol',
		industry: 'commercial',
		heroImage: {
			src: '/images/gallery/clairol-pink-hair-campaign.jpg',
			alt: 'Clairol hair color campaign portrait featuring soft pink-toned hair',
		},
	},
	{
		slug: 'wella-koleston-packaging',
		title: 'Wella Koleston packaging',
		client: 'wella',
		industry: 'packaging',
		heroImage: {
			src: '/images/gallery/wella-koleston-packaging.jpg',
			alt: 'Wella Koleston Brilho Infinito packaging lineup',
		},
	},
	{
		slug: 'clairol-colorstrong-packaging',
		title: 'Clairol ColorStrong packaging',
		client: 'clairol',
		industry: 'packaging',
		heroImage: {
			src: '/images/gallery/clairol-colorstrong-packaging.jpg',
			alt: 'Clairol ColorStrong packaging design',
		},
	},
	{
		slug: 'clairol-brand-film',
		title: 'Clairol brand film',
		client: 'clairol',
		industry: 'commercial',
		heroImage: {
			src: '/images/gallery/clairol-campaign-video-still.jpg',
			alt: 'Still from a Clairol brand campaign video',
		},
	},
	{
		slug: 'clairol-allure-award',
		title: "Clairol — Allure Editors' Choice",
		client: 'clairol',
		industry: 'press & awards',
		heroImage: {
			src: '/images/gallery/clairol-allure-award.jpg',
			alt: "Allure Editors' Choice Award graphic for a Clairol root-touch-up product",
		},
	},
];
