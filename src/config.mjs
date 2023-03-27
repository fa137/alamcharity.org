import defaultImage from "./assets/images/alamcharity-orphanage.jpg";

const CONFIG = {
	name: "alamcharity",

	origin: "https://alamcharity.org",
	basePathname: "/",
	trailingSlash: false,

	title: "alamcharity",
	description: "A nonprofit organization dedicated to providing support and assistance to orphanages and underprivileged communities.",
	defaultImage: defaultImage,

	defaultTheme: "system", // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

	language: "en",
	textDirection: "ltr",
};

export const SITE = { ...CONFIG, blog: undefined };
