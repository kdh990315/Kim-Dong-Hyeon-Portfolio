document.addEventListener('DOMContentLoaded', function() {


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













	

	//숫자 애니메이션


	let skillBar = document.querySelectorAll('.skill-bar');


	function startnumAnimate(idx) {
		let initialRate = 0,
			targetRate = skillBar[idx].getAttribute('data-num'),
			skillRate = document.querySelectorAll('.skill-rate'),
			numAnimate = setInterval(() => {
				initialRate++;
				skillRate[idx].innerText = `${initialRate}%`;
				skillBar[idx].style.width = `${initialRate}%`
				if(initialRate == targetRate) {
					clearInterval(numAnimate);
				}
			}, 20);

	}
	for(let i = 0; i < skillBar.length; i++) {
		startnumAnimate(i);
	}

	//숫자 애니메이션



});//DOMContentLoaded