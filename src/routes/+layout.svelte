<script>
	import Navbar from '$lib/Navbar.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	if (typeof window !== 'undefined') {
		// Determine background color for globe based on theme
		const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const bgColor = isDarkMode ? 0x111827 : 0XFFFFFF;

		window.VANTA.GLOBE({
			el: "body",
			mouseControls: true,
			touchControls: true,
			gyroControls: true,
			minHeight: 200.00,
			minWidth: 200.00,
			scale: 2.00,
			scaleMobile: 1.00,
			color: 0xededed,
			color2: 0xFFA700,
			backgroundColor: bgColor
		})
	}
	import "../app.css";


</script>



<Navbar></Navbar>


<slot></slot>


