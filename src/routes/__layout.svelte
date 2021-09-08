<script>
	import Navbar from '$components/Navbar.svelte';

	if (typeof window !== 'undefined') {
		// Determine background color for globe based on theme
		const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const bgColor = isDarkMode ? 0x111827 : 0XFFFFFF;


		VANTA.GLOBE({
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

</script>

<Navbar></Navbar>

<slot></slot>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    * {
        margin: 0;
        padding: 0;
		}

		body {
				min-height: 100vh;
		}

    ::selection {
        background-color: #FFA700;
        color: white;
    }



</style>
