<script context="module">
	export const load = async ({ fetch })  => {
		const res = await fetch('/api/projects');
		const projects = await res.json();
		return {
			props: {
				projects
			}
		}
	}
</script>

<script>
	export let projects
	console.log(projects)

const style = {
    cards: `grid sm:grid-cols-2 lg:grid-cols-3`,
    card: `flex flex-col m-2 hover:shadow-sm hover:shadow-[#D1EFCB] rounded-2xl bg-white overflow-hidden border border-gray-100`,
	cardContent: `p-6`
}

</script>

<div class={style.cards}>
    {#each projects as project}
        <a class={style.card} href={`/project/${project.id}`}>
            <div><img src={project.image_url} alt=""></div>
			<div class={style.cardContent}>
				<div class="inline-block text-gray-600 text-xs uppercase font-semibold tracking-wide">
					<span class="bg-teal-600 text-white px-2 rounded-full">{project.asset_type}</span>
					<span>{project.total_tokens_available.toLocaleString('en-US')} tokens</span>
					<!-- <span>&bull; ${project.price_per_token.toLocaleString('en-US')} / token</span> -->
				</div>
				<div class="font-semibold text-lg leading-tight truncate">{project.name}</div>
				<div class="mt-1">{project.expected_yearly_return}%
					<span class="text-gray-600 text-sm">/ year</span>
				</div>
				<div class="mt-2">
					<span class="text-teal-600 font-semibold">${project.price.toLocaleString('en-US')}</span>
					<span class="text-gray-600 text-sm justify-end"> ${project.price_per_token.toLocaleString('en-US')} / token</span>
				</div>

			</div>

        </a>
    {/each}
</div>