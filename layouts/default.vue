<template>
	<div class="flex min-h-screen  bg-gray-100 pb-20">
		<div class="h-full w-[240px] fixed top-0 left-0 bg-white px-3 space-y-5">

			<div class="p-3">
				<NuxtLink to="/">
					<img
						src="/image/ncloud-logo.png"
						class="  h-[26px] object-contain   "
						alt=""
					>
				</NuxtLink>
			</div>

			<UVerticalNavigation :links="links" />
		</div>
		<div class="flex-auto h-full pl-[240px]  ">
			<Player/>
			<slot/>
		</div>
	</div>


</template>

<script setup>
const links = [
	{
		label: 'Home',
		icon: 'i-heroicons-home',
		to: '/'
	}, {
		label: 'Page 1',
		icon: 'i-heroicons-chart-bar',
		to: '/page1'
	}, {
		label: 'Page 2',
		icon: 'i-heroicons-command-line',
		to: '/page2'
	}
]

</script>

<style scoped>


</style>
