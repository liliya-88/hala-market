/* preloader */

const preloader = document.querySelector(".preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.classList.add("hide-preloader");
  });
}

/* end of preloader */

// ********** set date ************

const date = document.getElementById("date");
if (date) {
  date.innerHTML = new Date().getFullYear();
}

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    // linksContainer.classList.toggle("show-links");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0) {
      linksContainer.style.height = `${linksHeight}px`;
    } else {
      linksContainer.style.height = 0;
    }
  });
}

const nav = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
const whatsappLink = document.querySelector(".whatsapp-link");

// ********** fixed navbar ************

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;
  if (nav) {
    if (scrollHeight > navHeight) {
      nav.classList.add("fixed-nav");
    } else {
      nav.classList.remove("fixed-nav");
    }
  }
  if (topLink) {
    if (scrollHeight > 500) {
      topLink.classList.add("show-link");
    } else {
      topLink.classList.remove("show-link");
    }
  }
  if (whatsappLink) {
    if (scrollHeight > 500) {
      whatsappLink.classList.add("show-link");
    } else {
      whatsappLink.classList.remove("show-link");
    }
  }
});

// ********** end of fixed navbar ************

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
if (scrollLinks) {
  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // prevent default
      e.preventDefault();
      // navigate to specific spot
      const id = e.currentTarget.getAttribute("href").slice(1);
      const element = document.getElementById(id);
      // calculate the heights
      const navHeight = nav.getBoundingClientRect().height;
      const containerHeight = linksContainer.getBoundingClientRect().height;
      const fixedNav = element.offsetTop;
      let position = element.offsetTop - navHeight;

      if (!fixedNav) {
        position = position - navHeight;
      }
      if (navHeight > 82) {
        position = position + containerHeight;
      }

      window.scrollTo({
        left: 0,
        top: position,
      });
      linksContainer.style.height = 0;
    });
  });
}

/* tabs */

const about = document.querySelector(".about");
const tabBtn = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
if (about) {
  about.addEventListener("click", (e) => {
    const tab = e.target.dataset.tab;
    if (tab) {
      // remove active from other buttons

      tabBtn.forEach((btn) => {
        btn.classList.remove("active");
        e.target.classList.add("active");
      });
      // hide other articles
      articles.forEach((article) => {
        article.classList.remove("active");
      });
      const articleElem = document.getElementById(tab);
      articleElem.classList.add("active");
    }
  });
}

/* meat */

// get only unique categories - HARDEST ONE
// iterate over categories return buttons
// make sure to select buttons when they are available

// items
const menu = [
  {
    id: 1,
    title: "Спинка баранья",
    category: "баранина",
    price: 1300,
    img: "./images/lamb_ribs.jpg",
    desc: `Баранья спинка – это престижный отруб из передней четверти нашей баранины, выращенной на траве. Спинка баранья идеально подходит для семейного или праздничного мероприятия!`,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/lamb_back_meat.html",
  },
  {
    id: 2,
    title: "Вырезка говяжья",
    category: "говядина",
    price: 1500,
    img: "./images/filletOfBeef_img.jpg",
    desc: `Целое филе говядины — это действительно особенный кусок. Берется из наиболее недоиспользованной мускулатуры говядины, «разделывается» нашими квалифицированными мясниками, что означает удаление всего лишнего жира.  `,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/beef_tenderloin_meat_in_pokrov.html",
  },
  {
    id: 3,
    title: "Мякоть телячья",
    category: "телятина",
    price: 950,
    img: "./images/filletOfVeal_meat.jpg",
    desc: `Телячья мякоть — это действительно особенный кусок. Берется из наиболее недоиспользованной мускулатуры молодых бычков, «разделывается» нашими квалифицированными мясниками.`,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/veal-pulp-meat-to-buy-in-pokrov.html",
  },
  {
    id: 4,
    title: "Передняя баранья нога",
    category: "баранина",
    price: 950,
    img: "./images/lamb_leg.jpg",
    desc: `Передняя баранья нога – это отруб от целого барана. Отлично подходит для медленного приготовления. Высокое содержание белка и низкое содержание калорий. `,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/front-leg-of-lamb-halal-meat-in-pokrov.html",
  },
  {
    id: 5,
    title: "Стейк говяжий",
    category: "говядина",
    price: 1200,
    img: "./images/steakBeef.jpg",
    desc: `Стейк говяжий — один из самых популярных стейков. Благодаря натуральному жиру и густой мраморности он идеален, для приготовления "в собственном соку", что делает его очень нежным. `,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/beef-steak-meat-halal.html",
  },
  {
    id: 6,
    title: "Курдюк",
    category: "баранина",
    price: 900,
    img: "./images/lamb_fat.jpg",
    desc: `Курдюк - жировое отложение округлой формы в районе хвоста у барана «курдючной» породы. Курдюк бараний – отличная добавка для плова, лагмана, бешбармака и других мясных блюд.`,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/kurdyuk-lamb-meat-in-pokrov.html",
  },
  {
    id: 7,
    title: "Сердце говяжье",
    category: "говядина",
    price: 400,
    img: "./images/beef_heart.jpg",
    desc: `Говяжье сердце - это особый продукт с нежным вкусом. Вы даже можете измельчить мясо и сделать из него гамбургеры!`,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/beef-heart-meat-halal.html",
  },
  {
    id: 8,
    title: "Фарш говяжий",
    category: "говядина",
    price: 850,
    img: "./images/ground-beef_wqobpz.jpg",
    desc: `Фарш из отборных кусков говядины. Отличный нежный вкус, чудесный аромат и прост в приготовлении!`,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/ground-beef-meat-halal-in-pokrov.html",
  },
  {
    id: 9,
    title: "Стейк телячий",
    category: "телятина",
    price: 1200,
    img: "./images/veal-meat-steak-on-bone.jpg",
    desc: `Стейк говяжий — один из самых популярных стейков. Благодаря натуральному жиру и густой мраморности он идеален, для приготовления "в собственном соку", что делает его очень нежным.`,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/veal-steak-meat-halal.html",
  },
  {
    id: 10,
    title: "Ливер",
    category: "говядина",
    price: 500,
    img: "./images/liver_beef.jpg",
    desc: `Ливер - это печень молодых бычков. Поднимает гемоглобин, укрепляет иммунитет. Говяжья печень — это питательная пища с высоким содержанием белка и низким содержанием калорий.`,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/beef-liver-meat-in-pokrov.html",
  },
  {
    id: 11,
    title: "Кролик домашний",
    category: "кролик",
    price: 850,
    img: "./images/rabbit-meat_pxotrn.jpg",
    desc: `Кролик домашний - мясо кроликов из деревни на заказ. Диетическое мясо. Изысканное блюдо для всей семьи.`,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/rabbit-fresh-meat-halal.html",
  },
  {
    id: 12,
    title: "Куры фермерские",
    category: "птица",
    price: 290,
    img: "./images/farm-raw-chicken.jpg",
    desc: `Куры фермерские - тушка курицы из деревни на заказ. Диетическое мясо.  Нежнейший вкус.С высоким содержанием белка `,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/chicken-meat-halal-in-pokrov.html",
  },
  {
    id: 13,
    title: "Говяжий язык",
    category: "говядина",
    price: 1150,
    img: "./images/beef_tonge_meat.jpg",
    desc: `Язык говяжий - изысканное блюдо для всей семьи. Нежнейший вкус. Питательная еда с высоким содержанием белка и низким содержанием калорий.`,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/beef-tongue-meat.html",
  },
  {
    id: 14,
    title: "Задняя баранья нога",
    category: "баранина",
    price: 1000,
    img: "./images/raw-meat-leg-young-lambr.jpg",
    desc: `Задняя баранья нога – это отруб от целого барана. Богатый источник многих витаминов, включая витамин B1, витамин B2 и витамин E.`,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/rear-lamb-leg-meat.html",
  },
  {
    id: 15,
    title: "Гуляш говяжий",
    category: "говядина",
    price: 800,
    img: "./images/lean-beef_meat.jpg",
    desc: `Отборные постные куски мякоти с передней части быка. Содержит белки и множество антиоксидантов, которые укрепляют ваше здоровье.`,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/beef-goulash-halal-meat.html",
  },
  {
    id: 16,
    title: "Рулька говяжья",
    category: "говядина",
    price: 650,
    img: "./images/veal-leg-on-blue-stone--with-herbs.jpg",
    desc: `Рулька - задняя или передняя нога молодого бычка. Богата минералами, которые помогают строить и укреплять кости.`,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/beef-knuckle-meat-in-pokrov.html",
  },
  {
    id: 17,
    title: "Стейк на кости",
    category: "говядина",
    price: 850,
    img: "./images/raw-lamb-steak_on_bone.jpg",
    desc: `Стейк говяжий — один из самых популярных стейков. Благодаря натуральному жиру и густой мраморности он идеален, для приготовления "в собственном соку", что делает его очень нежным.`,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/beef-steak-meat-halal.html",
  },
  {
    id: 18,
    title: "Мякоть на кости",
    category: "баранина",
    price: 1000,
    img: "./images/raw-beef-meat-on-bone-flat-lay_maqr6n.jpg",
    desc: `Мякоть баранья на кости — это отборные куски мякоти с передней части барана. Улучшает здоровье костей и снижает риск развития остеопороза.`,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/pulp-on-the-bone-meat-in-pokrov.html",
  },
  {
    id: 19,
    title: "Рулька телячья",
    category: "телятина",
    price: 650,
    img: "./images/meat-steaks-with-bone-dinner.jpg",
    desc: `Рулька телячья - задняя или передняя нога молодого бычка. Богатый источник многих витаминов, включая витамин B1, витамин B2 и витамин E. `,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/veal_knuckle_halal_meat_in_pokrov.html",
  },
  {
    id: 20,
    title: "Мякоть говяжья",
    category: "говядина",
    price: 950,
    img: "./images/piece_of_meat.jpg",
    desc: `Отборные куски говяжьей мякоти, которые наши квалифицированные мясники вырезают вручную на заказ. Высококачественный белок. `,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/beef_pulp_meat_in_pokrov.html",
  },
  {
    id: 21,
    title: "Мякоть баранья",
    category: "баранина",
    price: 1500,
    img: "./images/lamb-tenderloin-halal-meat.jpg",
    desc: `Отборные куски бараньей мякоти, которые наши квалифицированные мясники вырезают вручную. Прекрасный источник белка.`,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/pulp_lamb_meat_halal_to_buy_in_pokrov.html",
  },
  {
    id: 22,
    title: "Грудинка говяжья",
    category: "говядина",
    price: 630,
    img: "./images/beef-meat-on-bone-halal.jpg",
    desc: `Говяжья грудинка – это отруб из передней четверти нашей говядины, откормленной травой. Отлично подойдет на суп.`,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/brisket_beef_halal_meat_in_pokrov.html",
  },
  {
    id: 23,
    title: "Фарш бар+гов",
    category: "баранина",
    price: 1100,
    img: "./images/ground_lamb_beef_meat.jpg",
    desc: `Фарш из отборных кусков баранины и говядины. Особо сочный вкус.  Наивкуснейшее блюдо для всей семьи. Хороший источник белка, цинка, витаминов B3 и B12. Нежнейший вкус.  `,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/minced_meat_lamb_with_beef_meat_halal_in_pokrov.html",
  },
  {
    id: 24,
    title: "Ребра говяжьи",
    category: "говядина",
    price: 630,
    img: "./images/raw-beef-spare-ribs.jpg",
    desc: `Говяжье ребро – это престижный отруб из передней четверти нашей говядины, откормленной травой. Благодаря хорошему покрытию натуральным жиром и мраморности на всем протяжении, жаркое получается очень нежным.`,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/beef_ribs_halal_meat_in_pokrov.html",
  },
  {
    id: 25,
    title: "Лопатка телячья",
    category: "телятина",
    price: 800,
    img: "./images/raw-lamb-on-wood_iczqoi.jpg",
    desc: `Лопатка телячья – это отруб из передней четверти молодого бычка, выращенного на траве. Один из самых богатых белком продуктов с низким содержанием жира.`,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/veal_shoulder_meat_halal_in_pokrov.html",
  },
  {
    id: 26,
    title: "Стейк без кости",
    category: "телятина",
    price: 1200,
    img: "./images/veal_fatless_steak_meat.jpg",
    desc: `Стейк телячий — один из самых популярных стейков. Отборные куски телячьей мякоти, которые наши квалифицированные мясники вырезают вручную. `,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/veal_steak_boneless_meat_in_pokrov.html",
  },
  {
    id: 27,
    title: "Ребра телячьи",
    category: "телятина",
    price: 630,
    img: "./images/fresh-raw-veal-ribs-meat.jpg",
    desc: `Ребра молодых бычков – это престижный отруб из передней четверти нашей телятины, откормленной травой. Благодаря хорошему покрытию натуральным жиром и мраморности на всем протяжении, жаркое получается очень нежным.`,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/veal_ribs_meat_hala_in_pokrov.html",
  },
  {
    id: 28,
    title: "Корейка баранья",
    category: "баранина",
    price: 1300,
    img: "./images/fresh-and-raw-meat-raw-lamb.jpg",
    desc: `Баранья корейка – это отруб из передней четверти барана, выращенного на траве. Отличается сочным и нежным вкусом. Богата минералами и богатый источник многих витаминов.`,
    scale: "img_mainPage",
    page: "https://hala-market.vercel.app/lamb_loin_meat_in_pokrov.html",
  },
  {
    id: 29,
    title: "Вырезка свиная",
    category: "свинина",
    price: 550,
    img: "./images/pork-tenderloin.webp",
    desc: `Свиная вырезка — это нежный и постный кусок мяса, который находится вдоль спинной части свиньи. Свиная вырезка часто используется в различных блюдах, таких как стейки, запеканки и жаркое.`,
    scale: "img_mainPage",
    page: "",
  },
   {
    id: 30,
    title: "Ребра свиные",
    category: "свинина",
    price: 380,
    img: "./images/pork-ribs-meat.jpg",
    desc: `Свиные ребра — это любимый кусок для барбекю и гриля. Они берутся из реберной клетки свиньи и известны своим нежным мясом и насыщенным вкусом. Свиной окорок является хорошим источником белка и содержит необходимые витамины и минералы.`,
    scale: "img_mainPage",
    page: "",
  },
   {
    id: 31,
    title: "Окорок на кости",
    category: "свинина",
    price: 380,
    img: "./images/pork-ham-on-bone.webp",
    desc: `Свиной окорок — это мясной продукт, получаемый из задней части свиньи. Он известен своим насыщенным вкусом и нежной текстурой.`,
    scale: "img_mainPage",
    page: "",
  },
   {
    id: 32,
    title: "Грудинка свиная",
    category: "свинина",
    price: 380,
    img: "./images/pork-belly.webp",
    desc: `Свиная грудинка — это насыщенный и ароматный кусок мяса из живота свиньи. Она известна своими слоями жира и мяса, что делает ее нежной и сочной при приготовлении.`,
    scale: "img_mainPage",
    page: "",
  },
   {
    id: 33,
    title: "Форель",
    category: "рыба",
    price: 1100,
    img: "./images/lake-trout-fresh-fish.webp",
    desc: `Форель — это популярная пресноводная рыба, известная своим нежным вкусом и мягкой текстурой. Она является богатым источником белка, омега-3 жирных кислот и необходимых витаминов.`,
    scale: "img_mainPage",
     page: "",
  },
   {
    id: 34,
    title: "Треска",
    category: "рыба",
    price: 650,
    img: "./images/sea-cod-fish.jfif",
    desc: `Треска — отличный источник белка, необходимого для поддержания мышечной массы.Идеальна для диетического питания, содержит минимальное количество жиров.`,
    scale: "img_mainPage",
     page: "",
  },
   {
    id: 35,
     title: "Минтай",
    category: "рыба",
    price: 280,
    img: "./images/sea-pollok-fish.jfif",
    desc: `Минтай — популярная рыба, известная своим мягким вкусом и рыхлой текстурой. Хороший источник белка, низкокалорийная и богата омега-3 жирными кислотами.`,
    scale: "img_mainPage",
    page: "",
  },
   {
    id: 36,
    title: "Тунец морской",
    category: "рыба",
    price: 800,
    img: "./images/sea-tune-fresh-fish.jfif",
    desc: `Морской тунец — это высококачественная рыба, известная своим насыщенным вкусом и питательными свойствами. Он является отличным источником белка, омега-3 жирных кислот и витаминов.`,
    scale: "img_mainPage",
    page: "",
  },
   {
    id: 37,
    title: "Горбуша",
    category: "рыба",
    price: 541,
    img: "./images/sea-pink-salmon-fish.jfif",
    desc: `Горбуша является одним из самых распространенных и доступных видов лосося. Она ценится за свой насыщенный вкус, питательность и универсальность в приготовлении разных блюд.`,
    scale: "img_mainPage",
    page: "",
  },
   {
    id: 38,
     title: "Навага",
    category: "рыба",
    price: 267,
    img: "./images/sea-navaga-fish.jfif",
    desc: `Навага — это вид рыбы, обитающий в водах Северной Атлантики и Арктики. У нее плотная текстура и слегка сладковатый вкус, что делает ее идеальной для жарки, запекания или гриля.`,
    scale: "img_mainPage",
    page: "",
  },
   {
    id: 39,
    title: "Скумбрия",
    category: "рыба",
    price: 575,
    img: "./images/sea-mackerel-fish.jpg",
    desc: `Скумбрия - это ценная и питательная морская рыба, которая пользуется большим спросом у гурманов и ценителей морепродуктов. Ее можно использовать во многих рецептах, подчеркивая ее яркий вкус и полезные свойства.`,
    scale: "img_mainPage",
    page: "",
  },
   {
    id: 40,
    title: "Хек тушка",
    category: "рыба",
    price: 487,
    img: "./images/hake-sea-food-fish.jpg",
    desc: `Хек — это популярная морская рыба, известная своим нежным и сочным мясом. Она имеет низкое содержание жира и высокое содержание белка, что делает её отличным выбором для здорового питания. `,
    scale: "img_mainPage",
    page: "",
  },
   {
    id: 41,
    title: "Окунь морской",
    category: "рыба",
    price: 582,
    img: "./images/red-sea-perch-fish.jpg",
    desc: `Морской окунь — это изысканная рыба, известная своим нежным вкусом и плотным мясом. Богат омега-3 жирными кислотами, витаминами и минералами, способствующими здоровью.`,
    scale: "img_mainPage",
    page: "",
  },
   {
    id: 42,
    title: "Стейк на кости",
    category: "свинина",
    price: 390,
    img: "./images/pork-steak-on-bone.jpg",
    desc: `Стейк на кости — это кусок мяса, который включает в себя часть ребер или поясницы свиньи, оставляя кость. Он известен своим насыщенным вкусом и сочностью благодаря присутствию жира и кости, которые добавляют аромат при приготовлении.`,
    scale: "img_mainPage",
    page: "",
  },
   {
    id: 43,
    title: "Рулька свиная",
    category: "свинина",
    price: 280,
    img: "./images/pork-leg.jpg",
    desc: `Свиная рулька — это мясо, получаемое из передней или задней части свиньи, включая суставы и кости. Она отличается плотной текстурой и насыщенным вкусом.`,
    scale: "img_mainPage",
    page: "",
  },
   {
    id: 44,
    title: "Шея свиная",
    category: "свинина",
    price: 550,
    img: "./images/pork-neck-meat.webp",
    desc: `Свиная шея — это мясной продукт, получаемый из шейной области свиньи. Она обладает нежной текстурой и хорошим соотношением мяса и жира, что делает ее очень вкусной и сочной.`,
    scale: "img_mainPage",
    page: "",
  },
   {
    id: 45,
    title: "Мякоть свиная",
    category: "свинина",
    price: 480,
    img: "./images/pork-loin-meat.webp",
    desc: `Свиная мякоть — это постный кусок мяса, который может быть взят из различных частей свиньи, таких как лопатка, окорок или вырезка. Она отличается низким содержанием жира и высокой питательной ценностью.`,
    scale: "img_mainPage",
    page: "",
  },
   {
    id: 46,
    title: "Фарш свиной",
    category: "свинина",
    price: 480,
    img: "./images/minced-pork-meat.webp",
    desc: `Свиной фарш — это мясной продукт, получаемый путем измельчения мяса свиньи. Он может содержать различные части свиньи, включая мякоть, шейку и жир, что делает его сочным и ароматным.`,
    scale: "img_mainPage",
    page: "",
  },
      {
    id: 47,
    title: "Кости говяжьи",
    category: "говядина",
    price: 100,
    img: "./images/beef-bones-raw-1.webp",
    desc: `Говяжьи кости часто используются для приготовления бульонов и супов благодаря своему богатому вкусу и питательным веществам. Они содержат минералы, такие как кальций и фосфор, а также коллаген, который полезен для здоровья суставов и кожи.`,
    scale: "img_mainPage",
    page: "",
  },
       {
    id: 48,
         page: "",
     title: "Грудка индейки",
    category: "птица",
    price: 750,
    img: "./images/turkey-breast-raw-meat.webp",
    desc: `Куры фермерские - тушка курицы из деревни на заказ. Диетическое мясо.  Нежнейший вкус.С высоким содержанием белка `,
    scale: "img_mainPage",
    page: "",
  },
         {
    id: 49,
     title: "Шея индейки",
    category: "птица",
    price: 310,
    img: "./images/turkey-neck.webp",
    desc: `Шея индейки — это мясная часть, расположенная в верхней части шеи птицы. Она содержит как мясо, так и небольшое количество жира, что придает ей насыщенный вкус.`,
           scale: "img_mainPage",
     page: "",
  },
           {
    id: 50,
    title: "Грудка куриная",
    category: "птица",
    price: 400,
    img: "./images/chicken-breat-meat.webp",
    desc: `Куриная грудка — это белое мясо, расположенное на передней части курицы. Она считается постным и нежным мясом, с низким содержанием жира и высоким содержанием белка.`,
    scale: "img_mainPage",
    page: "",
  },
             {
    id: 51,
    title: "Крыло куриное",
    category: "птица",
    price: 340,
    img: "./images/chicken-wings.webp",
    desc: `Куриное крыло — это часть курицы, состоящая из трех сегментов: плеча, предплечья и кисти. Оно содержит больше жира и темного мяса, что придает ему насыщенный вкус.`,
    scale: "img_mainPage",
    page: "",
  },
    {
    id: 52,
    title: "Корнишоны",
    category: "птица",
    price: 750,
    img: "./images/small_chicken-whole.webp",
    desc: `Корнишоны — это маленькие куры, обычно весом от 0,5 до 1,5 килограмма. Они известны своим нежным и сочным мясом, а также характерным вкусом.`,
    scale: "img_mainPage",
    page: "",
  },
     {
    id: 52,
    title: "Бедро куриное",
    category: "птица",
    price: 330,
    img: "./images/chicken-leg-meat.jfif",
    desc: `Куриные бедра — это часть курицы, которая находится между телом и голенью. Они популярны благодаря своему насыщенному вкусу и сочной текстуре.`,
    scale: "img_mainPage",
    page: "",
  },
];

const sectionCenterMenu = document.querySelector(".section-center_menu");
const btnContainerMenu = document.querySelector(".btn-container_menu");
const photoMenu = document.querySelectorAll(".photo_menu");
if (sectionCenterMenu) {
  // load items
  window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
    displayMenuBtns();
  });

  function displayMenuItems(menuItem) {
    let displayMenu = menuItem.map(function (item) {
      return ` <article class="menu-item">
<img src=${item.img} alt=${item.title}  class="photo_menu ${item.scale}" />
             <div class="item-info_menu">
              <div class="header_menu">
                <h4>${item.title}</h4>
                <h4 class="price_menu">${item.price}<small class="small_kl">руб/кг</small></h4>
              </div class="header">
              <p class="item-text_menu">${item.desc}</p>
                <a href=${item.page} class="a_btn">Подробнее</a>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");

    sectionCenterMenu.innerHTML = displayMenu;
  }

  function displayMenuBtns() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["все"]
    );

    const categoryBtns = categories
      .map((category) => {
        return `<button class="filter-btn_menu" type="button" data-menu=${category}>${category}</button>`;
      })
      .join("");
    btnContainerMenu.innerHTML = categoryBtns;

    const filterBtnMenu = document.querySelectorAll(".filter-btn_menu");

    filterBtnMenu.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.menu;
        const menuCategory = menu.filter((menuItem) => {
          if (menuItem.category === category) {
            return menuItem;
          }
        });

        if (category === "все") {
          displayMenuItems(menu);
        } else {
          displayMenuItems(menuCategory);
        }
        if (category === "все") {
          displayMenuItems(menu);
        } else {
          displayMenuItems(menuCategory);
        }
      });
    });
  }
}

/* -------------------------------------------------------- */
// local reviews data

const reviews = [
  {
    id: 1,
    name: "Анастасия Кирина",
    job: "дизайнер",
    img: "./images/review-1.jpg",
    text: `"Покупаю регулярно говяжью вырезку и ребрышки на суп, иногда заказываю баранину. Готовлю сама и с удовольствием лопаем всей семьёй. Мясо всегда свежее, вовремя привозят, очень удобно. Рекомендую!"`,
  },
  {
    id: 2,
    name: "Екатерина Сидоренко",
    job: "бухгалтер",
    img: "./images/review-2.jpg",
    text: `"Мясо высокого качества, с запахом мяса)) Много перепробовала и остановила свой выбор здесь. Коллега по работе порекомендовал, теперь всегда здесь заказываю. Свинину не ем, только телятину и баранину. Цены не кусачие. Спасибо вам."`,
  },
  {
    id: 3,
    name: "Дамир Жуков",
    job: " частный предприниматель",
    img: "./images/review-3.jpg",
    text: `"Говядина и баранина просто изумительная по вкусу, аромату и сочности волокон! С женой ходим только к ним на рынок, иногда звоним и привозят домой, без проблем. Очень уважительное отношение. Всегда привезут, что тебе нужно."`,
  },
  {
    id: 4,
    name: "Павел Прунов",
    job: "Инженер",
    img: "./images/review-4.jpg",
    text: `"Придерживаюсь здорового питания, покукаю только домашнее мясо и кур. Заказываю здесь регулярно раз в 2 недели. Мясо действительно деревенское, очень ароматное.  Рекомендую к покупке!"`,
  },
  {
    id: 5,
    name: "Нина Станиславна",
    job: "Педагог",
    img: "./images/review-5.jpg",
    text: `"У Надюшки заказываю говядину и баранину уже который год. Они с мужем очень приятные порядочные люди, никогда ничего не подсовывают, все адекватно. Я обычно звоню им и заранее заказываю,что мне нужно. Потом оплачиваю картой, очень удобно. Всем рекомендую!"`,
  },
];

//select items
const personImg = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevBtnReviews = document.querySelector(".prev-btn_reviews");
const nextBtnReviews = document.querySelector(".next-btn_reviews");
const randomBtnReviews = document.querySelector(".random-btn_reviews");

if (personImg) {
  //set starting item
  let currentItemReview = 0;
  // load initial item
  window.addEventListener("DOMContentLoaded", () => {
    showPersonReview();
  });
  //show person based on item

  function showPersonReview() {
    const itemReview = reviews[currentItemReview];
    personImg.src = itemReview.img;
    author.textContent = itemReview.name;
    job.textContent = itemReview.job;
    info.textContent = itemReview.text;
  }
  // show next person
  nextBtnReviews.addEventListener("click", () => {
    currentItemReview++;
    if (currentItemReview > reviews.length - 1) {
      currentItemReview = 0;
    }
    showPersonReview();
  });
  prevBtnReviews.addEventListener("click", () => {
    currentItemReview--;
    if (currentItemReview < 0) {
      currentItemReview = reviews.length - 1;
    }
    showPersonReview();
  });
  // show random person
  randomBtnReviews.addEventListener("click", () => {
    currentItemReview = Math.floor(Math.random() * reviews.length);
    showPersonReview();
  });
}
/* tabs-delivery */

const delivery = document.querySelector(".delivery");
const tabBtnDelivery = document.querySelectorAll(".tab-btnDelivery");
const articlesDelivery = document.querySelectorAll(".content_delivery");
if (delivery) {
  delivery.addEventListener("click", (e) => {
    const deliveryTab = e.target.dataset.delivery;
    if (delivery) {
      // remove active from other buttons

      tabBtnDelivery.forEach((btn) => {
        btn.classList.remove("deliveryActive");
        e.target.classList.add("deliveryActive");
      });
      // hide other articles
      articlesDelivery.forEach((article) => {
        article.classList.remove("deliveryActive");
      });
      const articleElemDelivery = document.getElementById(deliveryTab);
      articleElemDelivery.classList.add("deliveryActive");
    }
  });
}
/* ----------------------- */
/* thumbnail gallery */
{
  const thumbs = document.querySelector("#thumbs");
  const thumbs1 = document.querySelector("#thumbs1");
  if (thumbs) {
    thumbs.addEventListener("click", function (event) {
      let thumbnail = event.target.closest("a");
      event.preventDefault();
      if (!thumbnail) return;
      showThumbnail(thumbnail.href, thumbnail.title);
    });
  }

  function showThumbnail(href, title) {
    largeImg.src = href;
    largeImg.title = title;
  }
  if (thumbs) {
    thumbs1.addEventListener("click", function (evt) {
      let thumbnail1 = evt.target.closest("a");
      evt.preventDefault();
      if (!thumbnail1) return;
      showThumbnail1(thumbnail1.href, thumbnail1.title);
    });
  }
  function showThumbnail1(href, title) {
    largeImg1.src = href;
    largeImg1.title = title;
  }
}
/* *************************************** */
/* INTERSECTION OBSERVER */
const header = document.querySelector("header");

if (header) {
  const fadeUpObserver = new IntersectionObserver(
    (elsToWatch) => {
      elsToWatch.forEach((el) => {
        if (el.isIntersecting) {
          el.target.classList.add("faded");
          fadeUpObserver.unobserve(el.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  document.querySelectorAll(".fade-up").forEach((item) => {
    fadeUpObserver.observe(item);
  });
}
/* END OF INTERSECTION OBSERVER */
