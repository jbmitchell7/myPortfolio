interface Project {
	title: string;
	description: string;
	screenshot: string;
	github: string;
	projectUrl: string;
}

export const projects: Project[] = [
	{
		title: "Sleeper Fantasy Focus",
		description: "This is an Angular website that uses the Sleeper App API to display standings and a bubble chart from ng2-charts to show you live info on your favorite Sleeper fantasy league. If you have a league ID enter it in the field, if not feel free to use 725424222041657344 as an example.",
		screenshot: "img/projects/sff.png",
		github: "https://github.com/jbmitchell7/sleeperfantasyfocus",
		projectUrl: "https://portfolio.thundercloud.dev/sleeperfantasyfocus"
	},
	{
		title: "Flickbase",
		description: "Flickbase is a front end for themoviedb.org API and is currently in early access on the Google Play Store. It includes the ability to log in to existing TMDB accounts, as well as creating and updating a watchlist unique to the flickbase app. Users can search for movies, tv shows, and people in the film and television industry.",
		screenshot: "img/projects/flickbase.png",
		github: "https://github.com/jbmitchell7/flickbase",
		projectUrl: "https://play.google.com/store/apps/details?id=cloud.jakemitchell.flickbase"
	},
	{
		title: "Space Renegade",
		description: "Space Renegade is a game built using Python and the Kivy engine. It is a pixel art game where you control a ship and must dodge incoming asteroids while trying to shoot down alien ships. The more alien ships you destroy, the higher your score. It can be run on a computer using Python.",
		screenshot: "img/projects/space-renegade.png",
		github: "https://github.com/jbmitchell7/Space_Renegade",
		projectUrl: "https://github.com/jbmitchell7/Space_Renegade"
	},
]