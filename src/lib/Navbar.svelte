<script>
    import IoLogoLinkedin from 'svelte-icons/io/IoLogoLinkedin.svelte'
    import IoLogoGithub from 'svelte-icons/io/IoLogoGithub.svelte'

</script>

<nav class='bg-transparent dark:text-white'>
    <ul class="flex justify-start ml-8">
        <li class="p-6">
            <a role='button' href='/' class="transition ease-in-out duration-200 hover:bg-yellow-500 hover:text-white  p-3 rounded-md">
                Home
            </a>
        </li>
        <li class="p-6">
            <a role='button' href='/about' class="transition ease-in-out duration-200 hover:bg-yellow-500 hover:text-white  p-3 rounded-md">
                About
            </a>
        </li>

        <li class='p-4 hidden md:block ml-auto'>
            <a target='_blank' href='https://www.linkedin.com/in/brandyn-britton/'>
                <div class='hover:text-yellow-400 hover:opacity-100 opacity-50  transition-colors bg-opacity-50' style='width: 40px;'>
                    <IoLogoLinkedin  />
                </div>

            </a>
        </li>


        <li class='p-4 hidden md:block' >
            <a target='_blank' href='https://github.com/goodpie'>
                <div class='hover:text-yellow-400 hover:opacity-100 opacity-50  transition-colors bg-opacity-50' style='width: 40px;'>
                    <IoLogoGithub  />
                </div>
            </a>
        </li>

        <li class="p-6 mr-8">
            <a target='_blank' href='https://brandyn-britton-portfolio.s3.ap-southeast-2.amazonaws.com/Brandyn-Britton-Resume-2021.docx' class="whitespace-nowrap transition ease-in-out duration-200 bg-yellow-500 bg-opacity-50 hover:bg-yellow-400 hover:bg-opacity-100 hover:text-black  p-3 rounded-md">
                Download Resume
            </a>
        </li>

    </ul>
</nav>

<style>
    nav {
        height: 10vh;
    }
</style>
