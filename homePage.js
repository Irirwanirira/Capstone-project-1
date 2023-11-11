const Hamburger = document.querySelector('.hamburger-menu');
const Navigation = document.querySelector('.nav-item');
const remove = document.querySelectorAll('.nav-link');
const AboutSection = document.querySelector(".about");

Hamburger.addEventListener ('click', () => {
    Hamburger.classList.toggle('active');
    Navigation.classList.toggle('active');
})

console.log(Hamburger);
const removeList = [...remove];
removeList.forEach((list) => {
    list.addEventListener('click', () => {
        Hamburger.classList.toggle('active');
    Navigation.classList.toggle('active');
    });
});


const speaker = [
    { 
      img: 'image/s1.jpeg',
      names: 'Joseph',
      experience: 'CEO at Ineza store',
      job: 'Benkles studies commons-based peer production ,and published.'

    },

    { 
      img: 'image/s2.jpeg',
      names: 'Ricky',
      experience: 'Student At Mt K U',
      job: 'Benkles studies commons-based peer production ,and published.'

    },

    {
      img: './image/s3.jpeg',
      names: 'Donny',
      experience: 'Expert in Ecology',
      job: 'Benkles studies commons-based peer production ,and published.',
      className: 'hide',
    },

    { 
      img: './image/s4.jpeg',
      names: 'Wess',
      experience: 'Founder Art love',
      job: 'Benkles studies commons-based peer production ,and published.',
      className: 'hide',
    },

    { 
        img: './image/s5.jpeg',
        names: 'Wess',
        experience: 'K-group Admin',
        job: 'Benkles studies commons-based peer production ,and published.',
        className: 'hide',
    },

    { 
        img: './image/s6.jpg',
        names: 'Mushikiwabo Luise',
        experience:  'Organization internationale de la Francophonie.',
        job: 'Benkles studies commons-based peer production ,and published.',
        className: 'hide',
    },
];

const speakers= document.querySelector('.speaker-1');

if(speakers){
    speaker.forEach((speak) => {
        const divElem = document.createElement('div');
        divElem.innerHTML = `
        <img src=${speak.img} alt="">
        <div class="names-cv" >
            <h4>${speak.names}</h4>
            <p id='red-p'>
            ${speak.experience}
                <span id="hr-s"></span>
            </p>
            
            <p>
                ${speak.job}
            </p>
        </div>
        `;
        divElem.classList.add('number-one');
        speakers.append(divElem)
    })
}else{
    console.error("speaker not found");
}



const withContent = document.querySelector(".with-content");
withContent.innerHTML = `
    <ul>
    <li>
    <a class="facebook" href="#"
        ><i class="fa-brands fa-facebook-f"></i
    ></a>
    </li>
    <li>
    <a class="twitter" href="#"><i class="fa-brands fa-twitter"></i></a>
    </li>
    <li><a href="#">English</a></li>
    <li><a href="#">My Page</a></li>
    <li><a href="#">Logout</a></li>
    </ul>
`

const homePageNav = document.querySelector(".nav-bar");
if(homePageNav){
    homePageNav.innerHTML = `
    <a class="logo" href="#shadow"
    ><img
        id="ineza-logo"
        src="./image/INEZA STORE LOGO.jpg"
        alt="ineza"
    /></a>
    <ul class="nav-item" id="nav-menu">
    
    <li >
        <a href="about.html" class="nav-link about">About</a>
    </li>
    <li>
    <a href="index.html" class="nav-link about">Home</a>
  </li>
    <li >
        <a href="" class="nav-link">Contact</a>
    </li>
    <li >
        <a href="" class="nav-link">join</a>
    </li>
    <li >
        <a href="" class="nav-link">sponsors</a>
    </li>
    <li >
        <a href="" class="nav-link">news</a>
    </li>
    <li >
        <a href="last-paragraph" class="nav-link cc">CC Campaign</a>
    </li>
    </ul>
`
}else {
console.error("Nav bar not found");}


const homeSection = document.getElementById("dynamicSection");
if(homeSection){
    homeSection.innerHTML = `
<section class="HOME-PAGE">
<div class="invitation">
<div class="topic">
    <p class="greeting">"Hello ladies and gentleman"</p>

    <h1 class="Topic-head">
    COUNTRY CULTURE <br />
    CELEBRATION <br />
    2022
    </h1>
</div>

<div class="slogan">
    <p id="slogan-paragraph">
    We may have different religions, different languages, different
    colored skin, but we all belong to one human race.
    </p>
</div>

<p id="date">2022.10.19(WED) ~ 16(THU)</p>
<p id="adress">
    @ Gkndo Exhbition Ground. <a href="">KG 352 St, Kigali</a>
</p>
</div>
</section>

<section class="shadow">
    <div class="main-program">
    <div>
        <p id="main-paragraph">Main Program</p>
        <hr id="hr-1" />
    </div>
    <div class="middle-content">
        <div class="box-1">
        <img src="./image/program_icon_01.png" alt="bucket" />
        <h4 class="m-heading">lecture</h4>
        <p>Introducing Aspects of Your Culture In Background</p>
        </div>
        <div class="box-1">
        <img src="./image/program_icon_02.png" alt="double-screen" />
        <h4 class="m-heading">Course</h4>
        <p>
            The importance of cultural diversity can be done by Respecting
            
        </p>
        </div>
        <div class="box-1">
        <img src="./image/program_icon_03.png" alt="message" />
        <h1 class="m-heading">Forum</h1>
        <p>
            Certainly, we in the New Culture Forum believe that cultural
            issues
        </p>
        </div>
        <div class="box-1">
        <img src="./image/program_icon_04.png" alt="board" />
        <h4 class="m-heading">Workshop</h4>
        <p>Address and Avoid Toxic Behavior  are the defining ones of our time.</p>
        </div>

        <div class="box-1">
        <img src="./image/program_icon_05.png" alt="Ignit" />
        <h4 class="m-heading">Ignit</h4>
        <p>Support of Creative and Cultural communities in the country  are the defining.</p>
        </div>
    </div>
    <button type="button" id="last-paragraph">
        <a href="#"> Join CCC 2022</a>
    </button>
    <a class="see-the-program" href="#">SEE THE WHOLE PROGRAM </a>
    </div>
</section>

`
}else{
    console.error("home section not found");}

const partners = document.querySelector(".Partners")

partners.innerHTML = `
<div class="Partners">
<h4 id="P-title">
  Partner
  <hr />
</h4>

<div class="brand">
  <img id="art" src="./image/art_love.png" alt="art" />
  <img id="ineza-1" src="./image/INEZA STORE LOGO.jpg" alt="ineza" />
  <img id="dreamy" src="./image/creative-logo.jpeg" alt="k-dreamy" />
</div>
</div>
`

const homeFooter = document.querySelector('.image-right');
    homeFooter.innerHTML = `
    <img id="ineza-footer" src="./image/INEZA STORE LOGO.jpg" alt="ineza" />
    
    <div class="right">
        <p class="right-1">
        2022 Country culture celebration. Some Right Reserved.
        </p>
        <p class="right-p2">
        new year’s parties and so many other reasons to get family and friends
        in one place to uplift one another and carry on traditions that have
        been around for many
        </p>
    </div>`

const aboutBody = document.querySelector(".nextSection");
if(aboutBody){
    aboutBody.innerHTML = `
    <section class="HOME-PAGE">
      <div class="invitation">
        <div>

          <h1 class="Topic-head">
            COUNTRY CULTURE <br />
            CELEBRATION 2022
          </h1>
        </div>

        <div class="slogan">
          <p id="slogan-paragraph">
            Culture is the sum of life experiences. Cultural diversity has made
            the canvas of the world vibrant and wonderful.
            We may have different religions, different languages, different
            colored skin, but we all belong to one human race.
          </p>
        </div>
        <div class="contact">
          <p>Please contact us per Email for further questions about CCC 2022!</p>
          <a href="#">culturecc2022@gmail.com > </a>
        </div>
      </div>
    </section>

    <div class="ccc-logo">
      <h3>
        Country Cultuture <br />
        Celebration 2022 Logo
        <hr id="hr-1" />
      </h3>
      <p>
        Mother Earth has been nourishing nature and mankind. <br />
        During the long history of human civilization, <br />
        human beings have developed different cultures and languages.
      </p>

      <div class="culture-logo">
        <img
          id="ineza-logo-design"
          src="./image/INEZA STORE LOGO.jpg"
          alt="ineza"
        />
      </div>
    </div>

    <div class="past-celebration">
      <h3>
        See the past CCC
        <hr id="hr-1" />
      </h3>
      <p>
        take a look at the last two CCC which <br />
        took place city center
      </p>

      <div class="both-images">
        <div id="image-1">
          <p>
            <span>2021 </span><br />
            Country culture 2021 Celebration
          </p>
        </div>

        <div id="image-2">
          <p>
            <span>2020 </span> <br />
            Country culture 2020 Celebration
          </p>
        </div>
      </div>
    </div>
    `
}else{
    console.log("ABout section not found");
}