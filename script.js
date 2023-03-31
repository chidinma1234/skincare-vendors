'use strict';
const skinCare = [
  {
    id: 1,
    nameOfVendor: 'Teeka4',
    state: 'lagos',
    instagramLink: 'https://www.instagram.com/shopwitteeka4/',
    instagramHandle: '@shopwitteeka4',
    img: './images/item-1.png',

    desc: `This is an online skincare store with affordable prices. They stock varieties of skincare products.You have to order stricly via their website`,
  },
  {
    id: 2,
    nameOfVendor: 'hermosamart',
    state: 'lagos',
    instagramLink: 'https://www.instagram.com/hermosamart.ng/',
    instagramHandle: '@hermosamart.ng',
    img: './images/item-2.jpg',
    desc: `This is an online skincare store.Their price are fair. You have to order stricly via their website`,
  },
  {
    id: 3,
    nameOfVendor: 'Buy Better',
    state: 'lagos',
    instagramLink: 'https://www.instagram.com/buybetter.ng/',
    instagramHandle: '@buybetter',
    img: './images/item-3.png',
    desc: `This is one of the popular skincare stores that has a walk-in address, and also offers retail and wholesale price. Their store is located Wumego Crescent off Admiralty Road through christ avenue, Lekki Phase 1, Lagos. You can also shop via their website `,
  },
  {
    id: 4,
    nameOfVendor: 'Coco Rosey',
    state: 'lagos',
    instagramLink: 'https://www.instagram.com/_cocorosey/',
    instagramHandle: '@_cocorosey',
    img: './images/item-4.jpg',
    desc: `This is an online skincare store.You place your order strictly via their website. All necessary details are there via their instagram handle @cocorosey`,
  },
  {
    id: 5,
    nameOfVendor: 'Paxo Beauty',
    state: 'lagos',
    instagramLink: 'https://www.instagram.com/paxobeauty/',
    instagramHandle: '@paxobeauty',
    img: './images/item-5.png',
    desc: `Paxo beauty is a distributor for brand like beauty formula, face facts etc. Aside from having a website, they also have an app that makes shopping with them seamless. It is a hub for really affordable skincare products or skincare haul on a budget`,
  },
  {
    id: 6,
    nameOfVendor: 'Dee Skinstore',
    state: 'lagos',
    instagramLink: 'https://www.instagram.com/deeskinstore/',
    instagramHandle: '@deeskinstore',
    img: './images/item-6.jpg',
    desc: `This is an online store and price of products are affordable`,
  },
  {
    id: 7,
    nameOfVendor: 'Beauty Prism',
    state: 'lagos',
    instagramLink: 'https://www.instagram.com/thebeautyprismng/',
    instagramHandle: '@thebeautyprismng',
    img: './images/item-7.jpg',
    desc: ` They have a walk in address and also a website. You can check out their website and address on their instagram handle`,
  },
  {
    id: 8,
    nameOfVendor: 'Skin Pop Essentiel',
    state: 'abuja',
    instagramLink: 'https://www.instagram.com/skinpopessentiel/',
    instagramHandle: '@skinpopessentiel',
    img: './images/item-8.jpg',
    desc: ` They have a wide range of products, with good prices. They have a walk in address and also a website.`,
  },
  {
    id: 9,
    nameOfVendor: 'Beautyfinds.ng',
    state: 'abuja',
    instagramLink: 'https://www.instagram.com/beautyfinds.ng/',
    instagramHandle: '@beautyfinds.ng',
    img: './images/item-9.jpg',
    desc: ` This is an online store. Their products are affordable.`,
  },
  {
    id: 10,
    nameOfVendor: 'Perfect Trust',
    state: 'abuja',
    instagramLink: 'https://www.instagram.com/beautyfinds.ng/',
    instagramHandle: '@beautyfinds.ng',
    img: './images/item-9.jpg',
    desc: ` They have various walk-in store and also a website.`,
  },
  {
    id: 11,
    nameOfVendor: '24 Eleven',
    state: 'lagos',
    instagramLink: 'https://www.instagram.com/beautyfinds.ng/',
    instagramHandle: '@official24elevenbeauty',
    img: './images/item-11.png',
    desc: ` This is an online store. Their products are affordable. You place orders strictly via their website`,
  },
  {
    id: 12,
    nameOfVendor: 'Skinfieldbeauty',
    state: 'lagos',
    instagramLink: 'https://www.instagram.com/skinfieldbeauty/',
    instagramHandle: '@skinfieldbeauty',
    img: './images/item-12.jpg',
    desc: ` This is an online store. Their products are affordable.`,
  },
  {
    id: 13,
    nameOfVendor: 'Skinfinite.ng',
    state: 'lagos',
    instagramLink: 'https://www.instagram.com/skinfinite.ng/',
    instagramHandle: '@skinfinite.ng',
    img: './images/item-13.jpg',
    desc: ` This is an online and offline store.`,
  },
  {
    id: 14,
    nameOfVendor: 'Shadremmy Beauty',
    state: 'abuja',
    instagramLink: 'https://www.instagram.com/shadremmybeauty/',
    instagramHandle: '@shadremmybeauty',
    img: './images/item-14.jpg',
    desc: `This is an offline and online store.They stock varieties of skincare products at an affordable price`,
  },
  {
    id: 15,
    nameOfVendor: 'Beaute Unlimited',
    state: 'warri',
    instagramLink: 'https://www.instagram.com/beaute_unlimited/',
    instagramHandle: '@beaute_unlimited',
    img: './images/item-15.jpg',
    desc: ` This is an online  and offline store. Their products are affordable.`,
  },
  {
    id: 16,
    nameOfVendor: 'Kly Cosmetics Store',
    state: 'warri',
    instagramLink: 'https://www.instagram.com/kly_cosmeticsandstore/',
    instagramHandle: '@kly_cosmeticsandstore',
    img: './images/item-16.jpg',
    desc: ` This is an online and offline store.`,
  },
  {
    id: 17,
    nameOfVendor: 'HomaSkin',
    state: 'warri',
    instagramLink: 'https://www.instagram.com/homaskin_/',
    instagramHandle: '@homaskin_',
    img: './images/item-17.jpg',
    desc: ` This is an online store and they have varieties of skincare products.`,
  },
  {
    id: 18,
    nameOfVendor: 'The Skin Hook Up',
    state: 'port-harcourt',
    instagramLink: 'https://www.instagram.com/theskinhookup.ng/',
    instagramHandle: '@theskinhookup.ng',
    img: './images/item-18.jpg',
    desc: ` This is an online store.`,
  },
  {
    id: 19,
    nameOfVendor: 'Bellissimo Store',
    state: 'port-harcourt',
    instagramLink: 'https://www.instagram.com/bellissimo_storeng/',
    instagramHandle: '@bellissimo_storeng',
    img: './images/item-19.jpg',
    desc: ` This is an online store that operates at two states.`,
  },
  {
    id: 20,
    nameOfVendor: 'Allure Beauty',
    state: 'lagos',
    instagramLink: 'https://www.instagram.com/allurebeautystore/',
    instagramHandle: '@allurebeautystore',
    img: './images/item-20.jpg',
    desc: ` This is an online and offline store and their products are affordable.`,
  },
];
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

//***Function to display the list of vendors */
const displayVendors = function (skinCareList) {
  let display = skinCareList.map((item) => {
    return `<article class="menu-item">
                <img src=${item.img} alt="menu-item" class="photo" />
                <div class="item-info">
                    <header>
                        <h4>${item.nameOfVendor}</h4>
                    </header>
                    <p class="item-text">
                        ${item.desc}</p>
                    
                    <p>You
                        can find all the necessary information via their instagram handle <a href= "${item.instagramLink}">${item.instagramHandle}</a>
                    </p>
                </div>
            </article>`;
  });
  display = display.join('');
  sectionCenter.innerHTML = display;
};

// *************Function to display the buttons******/
const displayFilterBtns = function () {
  let displaybtn = skinCare.reduce(
    (values, item) => {
      if (!values.includes(item.state)) {
        values.push(item.state);
      }
      return values;
    },
    ['all']
  );
  console.log(displaybtn);
  let displaybtns = displaybtn.map((item) => {
    return `<button class="filter-btn" type="button" data-id="${item}">${item}</button>`;
  });
  displaybtns = displaybtns.join('');
  btnContainer.innerHTML = displaybtns;
  //selecting the btn after it is created
  const filterBtn = btnContainer.querySelectorAll('.filter-btn');
  filterBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const stateBtn = e.currentTarget.dataset.id;
      const states = skinCare.filter((item) => {
        if (item.state === stateBtn) {
          return item.state;
        }
      });
      if (stateBtn === 'all') {
        displayVendors(skinCare);
      } else {
        displayVendors(states);
      }
    });
  });
};

window.addEventListener('DOMContentLoaded', () => {
  displayVendors(skinCare);
  displayFilterBtns();
});
