<script>
    import Nav from "../components/Nav.svelte"
    import Footer from "../components/Footer.svelte"
    import NavItems from "../components/NavItems.svelte"
    import logo from "$lib/IconoVerde.svg"

    const style = {
        wrapper: `min-h-max min-h-full flex flex-col bg-[#F9FDF8] text-[#232822] accent-[#D1EFCB] outline-red-400`,
        navBottomVisibility: `sm:invisible items-center justify-center`,
    }
</script>

<div class={style.wrapper}>
    <Nav {logo}/>
    <slot/>
    <div class="flex sticky bottom-0 p-2">
        <NavItems visibility={style.navBottomVisibility}/>
    </div>
    <Footer/>
</div>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>