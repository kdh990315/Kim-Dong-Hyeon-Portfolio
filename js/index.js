document.addEventListener('DOMContentLoaded', function() {

	//인트로 svg 애니메이션
	const Group = document.querySelector('.svg-main'),
		Paths = Group.querySelectorAll('path');

		Paths.forEach((item, index) => {
			const length = item.getTotalLength();

		//path 각각의 길이
		item.style.setProperty('--length', length);
		//path 각각의 딜레이 시간
		item.style.setProperty('--delay', index * 100 + 'ms');
		//path 각각의 지속시간
		item.style.setProperty('--duration', length * 2 + 'ms');
		})

	//인트로 svg 애니메이션



	//포트폴리오 이미지

	let portfolioImg = document.querySelectorAll('.portfolio-img'),
		portfolioImgWrap = document.querySelector('.portfolio-img-wrap');

	portfolioImg.forEach((item, index) => {
		item.addEventListener('mouseover', () => {
			portfolioImg[index].style.top = -(portfolioImg[index].clientHeight) + portfolioImgWrap.clientHeight + 'px';
		});
		item.addEventListener('mouseleave', () => {
			portfolioImg[index].style.top = 0;
		})
	})

	//포트폴리오 이미지

	//테스트

	let portfolioName = document.querySelectorAll('.portfolio-text-num h2'),
		asd = '';

		portfolioName[0].charAt()


		



	//테스트










	

	//숫자 애니메이션


	let skillBar = document.querySelectorAll('.skill-bar'),
		docElem = document.documentElement,
		docElemScrollValue,
		aboutMeWrap = document.querySelector('.about-me-wrap'),
		skillBarActive = false,
		aboutMeWrapHeight = 0,
		aboutMeScrollPos = 0;

	function scrollAnimation() {
		window.addEventListener('scroll', () => {

			//최상단부터 보이는 화면의 윗부분까지의 스크롤 양
			docElemScrollValue = Math.floor(docElem.scrollTop);

			//'about-me-wrap'의 높이 / 4
			aboutMeWrapHeight = Math.floor(aboutMeWrap.offsetHeight / 4)


			aboutMeScrollPos = docElem.scrollHeight - aboutMeWrap.offsetHeight - aboutMeWrapHeight


			if (docElemScrollValue > aboutMeScrollPos) {
				
				if(!skillBarActive) {
					for(let i = 0; i < skillBar.length; i++) {
						startnumAnimate(i);
					}
					skillBarActive = true;
				}
			}
		})


	}

	

	scrollAnimation();


	function startnumAnimate(idx) {
		let initialRate = 0,
			targetRate = skillBar[idx].getAttribute('data-num'),
			skillRate = document.querySelectorAll('.skill-rate'),
			numAnimate = setInterval(() => {
				initialRate++;
				skillRate[idx].innerText = `${initialRate}%`
				skillBar[idx].style.width = `${initialRate}%`
				if(initialRate == targetRate) {
					clearInterval(numAnimate);
				}
			}, 20);

	}






	//숫자 애니메이션



});//DOMContentLoaded