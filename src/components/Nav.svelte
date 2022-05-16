<script context="module">
</script>

<script>
    import NavItems from "./NavItems.svelte"

    import walletStore from '../stores/walletStore'
    let connected = $walletStore.connected;
	let metamask = $walletStore.metamask;
    let account = $walletStore.account;

    $: walletStore.update((currenSettings) => {
		console.log(connected + '  ' + account + '  ' + metamask);
        currenSettings.metamask = metamask;
		currenSettings.connected = connected;
		currenSettings.account = account;
        // checkIfWalletConnected()
		return currenSettings;
	});

    let visibleMenu = false

    const connectWallet = async () => {
        connected = true
        account = '0x34393949320202939942949dsf99329dsf930404'
    };


    const removeWallet = async () => {
        connected = false
        account = undefined

        if (visibleMenu) {
            visibleMenu = false
        }
    }

    const changeWallet = async () => {
        console.log(account)
    }

    const checkIfWalletConnected = async () => {
    }

    const showMenu = async () => {
        if (!visibleMenu) {
            visibleMenu = true
        } else {
            visibleMenu = false
        }
    }

    export let logo

    const style = {
        wrapper: `p-4 w-screen flex justify-between items-center sticky top-0 text-[#232822] bg-[#071E26] z-10`,
        headerLogo: `flex w-1/4 items-center justify-start`,
        nav: `flex flex-1 justify-start items-center`,
        navTopVisibility: `invisible sm:visible md:justify-center`,
        navBottomVisibility: `sm:invisible items-center justify-center`,
        navItemsContainer: `flex bg-purple-500 rounded-3xl`,
        navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
        activeNavItem: `bg-[#20242A]`,
        buttonsContainer: `flex md:w-1/4 justify-end items-center w-full`,
        button: `flex items-center bg-[#D1EFCB] rounded-2xl mx-2 text-[0.9rem] font-semibold crusor-pointer`,
        buttonPadding: `p-2`,
        buttonTextContainer: `h-8 flex items-center`,
        buttonIconContainer: `flex items-center justify-center w-8 h-8`,
        buttonAccent: `bg-[#071E26] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#D1EFCB]`,

        navBottomWrapper: `sticky bottom-0 p-2 w-full flex`,
        navBottomSticky: `sticky bottom-0 w-full`
    }
</script>

<div class={style.wrapper}>
    <a class={style.headerLogo} href="/">
        <img src={logo} alt="" height=40 width=40>
    </a>

    <NavItems visibility={style.navTopVisibility}/>

    <div class={style.buttonsContainer}>
        <div class={`${style.button} ${style.buttonPadding}`}>
            {#if !$walletStore.connected}
                <button on:click={connectWallet} class={`${style.buttonAccent} ${style.buttonPadding}`}>
                    Connect Wallet
                </button>
            {:else}
                <div on:click={showMenu} class={style.buttonPadding}>
                    {$walletStore.account.slice(0,4)}...{$walletStore.account.slice(-4)}
                </div>

            {/if}
            
        </div>
    

        {#if visibleMenu}
            <div class="absolute bottom-0 right-0 m-2">
                <div class="absolute top-0 right-0 p-4 bg-white rounded-md">
                    <p>choice</p>
                    <p>choice</p>
                    <p on:click={removeWallet}>disconnect</p>
                </div>
            </div>
        {/if}
    </div>
</div>