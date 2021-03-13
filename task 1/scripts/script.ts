const gallery = <HTMLElement>document.querySelector('#pics');
const img = <HTMLImageElement>document.querySelector("#img");
const leftBtn = <HTMLElement>document.querySelector('#slide-left');
const rightBtn = <HTMLElement>document.querySelector('#slide-right');
const circlesCont = <HTMLElement>document.getElementById('circles');
const circles = document.getElementsByClassName('circle');

const imgArr: string[] = [
    'https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg',
    'https://lh3.googleusercontent.com/proxy/bxCMAndtTUmytS1x78GSFmiJRmFkntu2aPnqF4aGxaIvHYNJAPACmGRlJYkkmHQb87BHq8QZN1Oi9f34VBuGEruXr-1iI7_AhJxssw8WBDGunYXLyABYkgFb4X1LyiokmAIgKRvIbW55sEjR3SbTTNfUZgiqJnMMSTd8rBE',
    'https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/official/en_us/products/2017/rethinking-our-default-profile-photo/Avatar-Blog2-Round1.png.img.fullhd.medium.png',
    'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
    'https://www.brightful.me/content/images/2020/07/david-kovalenko-G85VuTpw6jg-unsplash.jpg',
    'https://www.hackingwithswift.com/uploads/matrix.jpg',
];

const DEFAULT_IMG = getRandomInt(3);

/* random potos virchev arraydan, arrays zomis mixedvit vamateb rgolebs da avtomaturad vadzlev
aktiur cres .active klas-s */
(function firstLoad() {
    img.src = imgArr[DEFAULT_IMG];
    for(let i in imgArr) {
        const circle = document.createElement('div');
        circle.classList.add('circle')
        circlesCont.appendChild(circle);
    }
    circles[DEFAULT_IMG].classList.add('active');
})();



function getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
}

function spin(direction: 'left' | 'right'): void {
    switch (direction) {
        case 'left': {
            for (let i = 0; i < imgArr.length; i++) {
                if (imgArr[i] === img.src) {
                    if (i === 0) {
                        gallery.removeChild(img);
                        img.src = imgArr[imgArr.length - 1];
                        gallery.appendChild(img);
                        circles[0].classList.remove('active')
                        circles[imgArr.length - 1].classList.add('active')
                        break;
                    } else {
                        gallery.removeChild(img);
                        img.src = imgArr[i - 1];
                        gallery.appendChild(img);
                        circles[i].classList.remove('active')
                        circles[i - 1].classList.add('active')
                        break;
                    }
                }
            };
            break;
        }
        case 'right': {
            for (let i = 0; i < imgArr.length; i++) {
                if (imgArr[i] === img.src) {
                    if (i === imgArr.length - 1) {
                        gallery.removeChild(img);
                        img.src = imgArr[0];
                        gallery.appendChild(img);
                        circles[imgArr.length - 1].classList.remove('active')
                        circles[0].classList.add('active')
                        break;
                    } else {
                        gallery.removeChild(img);
                        img.src = imgArr[i + 1];
                        gallery.appendChild(img);
                        circles[i].classList.remove('active')
                        circles[i + 1].classList.add('active')
                        break;
                    }
                }
            };
            break;
        }
    }
}

leftBtn.addEventListener(('click'), () => {
    spin('left');
})
rightBtn.addEventListener(('click'), () => {
    spin('right');
})



