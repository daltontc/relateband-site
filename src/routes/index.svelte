<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import MediaQuery from '../lib/MediaQuery.svelte';
	import logo from '../lib/logo.png';
	import shows from '../lib/shows.png';
	import store from '../lib/store.png';
	import img1 from '../lib/background-photos/IMG_2638.jpg';
	import img2 from '../lib/background-photos/IMG_2655.jpg';
	import img3 from '../lib/background-photos/IMG_2662.jpg';
	import img4 from '../lib/background-photos/IMG_2698.jpg';
	import img5 from '../lib/background-photos/IMG_2730.jpg';
	import { page } from '$app/stores';

	// Import Swiper styles
	import 'swiper/css';
	import 'swiper/css/lazy';
	import 'swiper/css/effect-fade';
	import './style.css';

	import { Autoplay, EffectFade, Lazy } from 'swiper';

	let leftImages = [img1, img2, img3, img4, img5];

	let videos = [
		'https://media1.giphy.com/media/Vf3Rrp0lhDDJBxWAve/giphy.gif?cid=ecf05e47k1ye5svlq5xm2d7xort4ii5ghealyzxngb92c54c&rid=giphy.gif&ct=g',
		'https://media0.giphy.com/media/Zdg7tS9JPHO1cytujy/giphy.gif?cid=ecf05e47ascahmn7ylsws85qjlm46b9vqps20j6addsi1jrb&rid=giphy.gif&ct=g',
		'https://media3.giphy.com/media/JPsCw5RRo9e0eGgWo8/giphy.gif?cid=ecf05e47twtc25n5loecsthvpq8lcs62q396iuq9thy8ioqn&rid=giphy.gif&ct=g',
		'https://media4.giphy.com/media/XgB1iZOFFkUXbOhNXt/giphy.gif?cid=ecf05e47ascahmn7ylsws85qjlm46b9vqps20j6addsi1jrb&rid=giphy.gif&ct=g'
	];
</script>

<svelte:head>
	<title>Relate.</title>
</svelte:head>

<div class="h-screen w-screen flex">
	<Swiper
		centeredSlides={true}
		autoHeight={true}
		autoplay={{
			delay: 4000,
			disableOnInteraction: false
		}}
		effect={'fade'}
		navigation={false}
		speed={3000}
		modules={[Autoplay, EffectFade, Lazy]}
		class="pictures h-screen relative"
	>
		{#each leftImages as image}
			<SwiperSlide>
				<img class="w-full h-screen" src={image} alt="background image" />
			</SwiperSlide>
		{/each}
	</Swiper>
	<div class="absolute left-0 z-50">
		<nav>
			<ul>
				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">
						<img src={logo} />
					</a>
				</li>
				<li class="pl-10 pb-3" class:active={$page.url.pathname === '/shows'}>
					<a sveltekit:prefetch href="https://www.bandsintown.com/a/3236032-relate">
						<img src={shows} width="280" height="50" />
					</a>
				</li>
				<li class="pl-10" class:active={$page.url.pathname === '/Store'}>
					<a sveltekit:prefetch href="https://www.amazon.com">
						<img src={store} width="250" height="50" />
					</a>
				</li>
			</ul>
		</nav>
	</div>

	<MediaQuery query="(min-width: 1281px)" let:matches>
		{#if matches}
			<Swiper
				centeredSlides={true}
				autoHeight={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false
				}}
				effect={'fade'}
				navigation={false}
				speed={3000}
				modules={[Autoplay, EffectFade, Lazy]}
				class="videos h-full w-1/3"
			>
				{#each videos as video}
					<SwiperSlide>
						<img class="w-full h-screen" src={video} />
					</SwiperSlide>
				{/each}
			</Swiper>
		{/if}
	</MediaQuery>
</div>
