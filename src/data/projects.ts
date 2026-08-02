// One entry per case study, each rendered at /portfolio/{slug}/ by
// src/pages/portfolio/[slug].astro. Add a new entry here for every new
// photo/project — no other file needs to change for a new project page to
// appear. Client/industry values are lowercase to match the site's own
// lowercase-heading convention when rendered directly as labels.
//
// Groupings below are a best-effort reconstruction from the real site's
// screenshots and the images themselves (packaging wordmarks, meta shown
// on her actual project pages) — confirm/correct the client attribution
// and groupings against the live site if anything looks off.
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
		slug: 'wella-color-perfect-campaign',
		title: 'Wella Color Perfect campaign',
		client: 'wella',
		industry: 'commercial',
		heroImage: {
			src: '/images/gallery/wella-color-perfect-hero.jpg',
			alt: 'Wella Color Perfect campaign still, "100% intense" hair color creative on a purple background',
		},
		supportingImages: [
			{
				src: '/images/gallery/wella-color-perfect-supporting.jpg',
				alt: 'Wella Color Perfect campaign still, model with wind-blown hair on a purple background',
			},
		],
	},
	{
		slug: 'wella-campaign-creative',
		title: 'Wella campaign creative',
		client: 'wella',
		industry: 'commercial',
		heroImage: {
			src: '/images/gallery/wella-campaign-double-exposure.jpg',
			alt: 'Wella campaign creative combining bold color art with a model portrait',
		},
	},
	{
		slug: 'wella-campaign-photography',
		title: 'Wella campaign photography',
		client: 'wella',
		industry: 'commercial',
		heroImage: {
			src: '/images/gallery/wella-campaign-portrait-2.jpg',
			alt: 'Wella hair color campaign portrait, model with warm brunette waves',
		},
		supportingImages: [
			{
				src: '/images/gallery/wella-campaign-portrait-1.jpg',
				alt: 'Wella campaign photograph, model with a hair color applicator',
			},
			{
				src: '/images/gallery/wella-campaign-portrait-3.jpg',
				alt: 'Wella hair color campaign portrait, model with warm copper-blonde hair',
			},
			{
				src: '/images/gallery/wella-campaign-portrait-4.jpg',
				alt: 'Wella hair color campaign portrait, close-up with hand resting against the face',
			},
		],
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
		slug: 'wella-color-campaign-vibrant',
		title: 'Wella color campaign',
		client: 'wella',
		industry: 'commercial',
		heroImage: {
			src: '/images/gallery/wella-color-campaign-vibrant.jpg',
			alt: 'Wella hair color campaign portrait, model with vibrant red curly hair laughing outdoors',
		},
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
		slug: 'clairol-packaging-collection',
		title: 'Clairol packaging collection',
		client: 'clairol',
		industry: 'packaging',
		heroImage: {
			src: '/images/gallery/clairol-colorstrong-packaging.jpg',
			alt: 'Clairol ColorStrong packaging design',
		},
		supportingImages: [
			{
				src: '/images/gallery/clairol-colorstrong-toscana-packaging.jpg',
				alt: 'Clairol ColorStrong packaging, Toscana medium brown shade',
			},
			{
				src: '/images/gallery/clairol-natural-instincts-packaging.jpg',
				alt: 'Clairol Natural Instincts packaging with coconut oil and aloe',
			},
			{
				src: '/images/gallery/clairol-bold-bright-packaging.jpg',
				alt: 'Clairol Bold & Bright packaging, Piña Colada shade',
			},
			{
				src: '/images/gallery/clairol-textures-tones-packaging.jpg',
				alt: 'Clairol Textures & Tones packaging, Midnight Blue shade',
			},
		],
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
		supportingImages: [
			{
				src: '/images/gallery/clairol-brand-film-supporting.jpg',
				alt: 'Still from a Clairol brand campaign video, close-up of flowing dark hair',
			},
		],
	},
	{
		slug: 'clairol-hair-studio-application',
		title: 'Clairol Hair Studio — application demo',
		client: 'clairol',
		industry: 'commercial',
		heroImage: {
			src: '/images/gallery/clairol-hair-studio-application.jpg',
			alt: 'Still from a Clairol Hair Studio product application demo video',
		},
	},
	{
		slug: 'clairol-beach-campaign',
		title: 'Clairol beach campaign',
		client: 'clairol',
		industry: 'commercial',
		heroImage: {
			src: '/images/gallery/clairol-beach-campaign.jpg',
			alt: 'Still from a Clairol lifestyle campaign video, model laughing outdoors',
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
