<script>
    const style = {
        warpper: `bg-[#071E26] p-4 text-[#D1EFCB] flex`,
        logo: `w-1/4`,
        infoWrapper: `flex flex-col px-10 justify-end items-end w-full`,
        inline: `items-center`,
        link: ``,
    }

    import daomentLogo from '$lib/Daomentsello.svg'
</script>


<div class={style.warpper}>
    <img class={style.logo} src={daomentLogo} alt="" fill="none">
    <div class={style.infoWrapper}>
        <div class={style.inline}>How it works</div>
        <div class={style.inline}>Contact Us</div>
    </div>
</div>