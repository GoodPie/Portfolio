<svelte:head>
	<title>Brandyn Britton - Contact Me</title>
</svelte:head>

<main id='contact-container' style='height: 90vh' class='p-16 flex justify-center items-center flex-col dark:text-white'>

	<form class='flex items-center justify-center flex-col w-4/12'>

		<label class='py-4 self-start text-left'>Your Name</label>
		<input class='rounded border-black p-1 w-full text-black' type='text' name='contact-name'/>


		<label class='py-4 self-start text-left'>Email Address</label>
		<input class='rounded border-black p-1 w-full text-black' type='email' name='contact-email-address'/>

		<label class='py-4 self-start text-left'>Message</label>
		<textarea class='rounded border-black p-1 w-full text-black p-3' name='contact-message'></textarea>

		<button type='submit' class='bg-yellow-500 hover:bg-yellow-600 transition duration-300 p-3 w-full my-4 rounded text-white'>
			Send Message
		</button>

	</form>

	<p class='my-2'>Or</p>

	<a class='my-2 text-lg text-black dark:text-white hover:text-yellow-500 transition duration-200' href='mailto:brandynbb96@gmail.com' target='_blank'>
		Send me an email directly
	</a>
</main>

<style>
	@tailwind forms

	#contact-container {
			height: 90vh;
	}
</style>

