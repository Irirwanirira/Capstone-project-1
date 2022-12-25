const Hamburger = document.querySelector('.hamburger-menu');
const Navigation = document.querySelector('.navigation');
const remove = document.querySelectorAll('.nav-link')

Hamburger.addEventListener ('click', () => {
    Hamburger.classList.toggle('active');
    Navigation.classList.toggle('active');
})


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
      job: 'Benkles studies commons-basssed peer production ,and published.'

    },

    { 
      img: 'image/s2.jpeg',
      names: 'Ricky',
      experience: 'Student At Mt K U',
      job: 'Benkles studies commons-basssed peer production ,and published.'

    },

    {
      img: './image/s3.jpeg',
      names: 'Donny',
      experience: 'Expert in Ecology',
      job: 'Benkles studies commons-basssed peer production ,and published.',
      className: 'hide',
    },

    { 
      img: './image/s4.jpeg',
      names: 'Wess',
      experience: 'Founder Art love',
      job: 'Benkles studies commons-basssed peer production ,and published.',
      className: 'hide',
    },

    { 
        img: './image/s5.jpeg',
        names: 'Wess',
        experience: 'K-group Admin',
        job: 'Benkles studies commons-basssed peer production ,and published.',
        className: 'hide',
    },

    { 
        img: './image/s6.jpg',
        names: 'Mushikiwabo Luise',
        experience:  'Organisation internationale de la Francophonie.',
        job: 'Benkles studies commons-basssed peer production ,and published.',
        className: 'hide',
    },

];

const speakers= document.querySelector('.speaker-1');


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



