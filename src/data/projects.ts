export const projects = [
	{
		title: 'GlucoseBar',
		href: 'https://codeberg.org/heyimnel/GlucoseBar',
		linkText: "heyimnel/codeberg",
		size: '20',
		color: 'var(--color-text)',
		get icon() {
			return `<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="${this.size}" height="${this.size}" fill="${this.color}" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path></svg>`;
		},
		description: 'MacOS menubar app for glucose monitoring through dexcom servers \nor xDrip+ web server'
	},
];
