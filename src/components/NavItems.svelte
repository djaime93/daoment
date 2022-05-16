<script>
    const style = {
        nav: `flex flex-1 justify-start items-center md:justify-center`,
        navItemsContainer: `flex bg-[#D1EFCB] rounded-3xl`,
        navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl hover:bg-[#071E26] hover:text-[#D1EFCB]`,
        activeNavItem: `bg-[#A7BFA2]`,
    }

    const styleVisibility = `invisible sm:visible md:justify-center`
    const stvsb = `sm:invisible`

    export let visibility
</script>

<div class={`${style.nav} ${visibility}`}>
    <div class={style.navItemsContainer}>
        <a class={`${style.navItem} ${style.activeNavItem}`} href="/">Market</a>
        <a class={style.navItem} href="https://daoment.gitbook.io/copy-of-daoment-faqs/" target="_blank">FAQ</a>
    </div>
</div>