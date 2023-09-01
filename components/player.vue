<template>
	<div :class="route.path != '/' ? 'floating ' : '' ">
		<div class="playerWarp" :class="route.path != '/' ? 'duration-100' : '' ">
			<div class="playerArea">
				<div class="player" id="player"></div>
			</div>
		</div>
	</div>
</template>

<script setup>
let player = null;
const route = useRoute();

onMounted(()=>{
	player = new ncplayer('player',{
		playlist:[
			{
				file:'https://fsxikvammvwv14470411.cdn.ntruss.com/hls/9N5-iJ4f9tdzE6D708PTmg__/vod/j5IXBfIJ83893893_,1080,720,480,p.mp4.smil/master.m3u8',
				poster:'https://wnfosehmzhuc12665447.cdn.ntruss.com/thumb/sample_thumb.png?type=m&w=1024&h=760&ttype=jpg',
				description: {
					title: "네이버클라우드 소개 영상",
					created_at: "2023.07.13",
					profile_name: "네이버클라우드",
					profile_image: "https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202208/d127c8db642716d84b3201f1d152e52a.png"
				},
			}
		],
		autostart:true,
	});
})

</script>

<style scoped>
.playerWarp{
	width:100%;
	background-color: #000;
	overflow: auto;
}
.playerArea{
	max-width: 980px;
	margin:auto;
	aspect-ratio: 16/9;
}


.floating .playerArea{
	max-width:100%;
}
.floating .playerWarp{
	position: fixed;
	width:380px;
	aspect-ratio: 16/9;
	right: 20px;
	bottom:10px;
	box-shadow: cyan 0 0 10px;
}

</style>
