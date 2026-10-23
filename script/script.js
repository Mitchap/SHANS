    let menuOpen = false;
    function toggleMenu() {
        menuOpen = !menuOpen;
        const menu = document.getElementById('mobileMenu');
        const bar1 = document.getElementById('bar1');
        const bar2 = document.getElementById('bar2');
        const bar3 = document.getElementById('bar3');
        if (menuOpen) {
            menu.classList.remove('hidden');
            menu.classList.add('flex');
            bar1.classList.add('rotate-45', 'translate-y-2');
            bar2.classList.add('opacity-0');
            bar3.classList.add('-rotate-45', '-translate-y-2');
        } else {
            menu.classList.add('hidden');
            menu.classList.remove('flex');
            bar1.classList.remove('rotate-45', 'translate-y-2');
            bar2.classList.remove('opacity-0');
            bar3.classList.remove('-rotate-45', '-translate-y-2');
        }
    }