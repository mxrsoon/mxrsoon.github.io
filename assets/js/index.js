let themeMeta;

const themeColors = {
	dark: "#2c2c2c",
	light: "#d3d3d3"
};

function updateThemeColor(dark) {
	themeMeta.content = dark ? themeColors.dark : themeColors.light;
}

function setupTheme() {
	const media = matchMedia("(prefers-color-scheme: dark)");
	media.addEventListener("change", event => updateThemeColor(event.matches));
	updateThemeColor(media.matches);
}

function setupDocument() {
	themeMeta = document.querySelector("meta[name='theme-color']");
	setupTheme();
}

function main() {
	document.addEventListener("DOMContentLoaded", setupDocument);
}

main();