import defaultImage from "./assets/images/alamcharity-orphanage.jpg";

const CONFIG = {
	name: "AlamCharity",

	origin: "https://alamcharity.org",
	basePathname: "/",
	trailingSlash: false,

	title: "AlamCharity",
	description: "Nonprofit Org",
	defaultImage: defaultImage,

	defaultTheme: "system", // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

	language: "en",
	textDirection: "ltr",
};

export const SITE = { ...CONFIG, blog: undefined };
