let cards = [
    {
        decadev: "Nnaji Victor",
        github_username: "Nnaji-Victor",
        title: "Software Engineer",
        facebook: "#",
        twitter: "nnajivictor0"
    },
  {
       decadev: "Akinbiyi Usman",
        github_username: "ThaLeprechaun",
        title: "Software Engineer",
        facebook: "AKinbiyi Lanre",
        twitter: "usmanLanray"
    },
   {
        decadev: "Adonis Mendoza",
        github_username: "adonismendozaperez",
        title: "Web Developer",
        facebook: "#",
        twitter: "adonismdza"
    },
    {
        decadev: "Adabe Echaim",
        github_username: "cranium44",
        title: "Software Engineer",
        facebook: "cranium44",
        twitter: "cranium_44"
    },
  {
        decadev: "Doctor Vee",
        github_username: "Victor-Chinewubeze",
        title: "Software Developer",
        facebook: "doctor.vee.1",
        twitter: "MyDoctorVee"
    },
  {
        decadev: "Jones Ogolo",
        github_username: "Jay-Topher",
        title: "Software Engineer",
        facebook: "Jones Ogolo",
        twitter: "mr_jonce"
    },
    {
        decadev: "Chukwuebuka Anazodo",
        github_username: "phayo",
        title: "Software Products Engineer",
        facebook: "phayokingz",
        twitter: "mrphayo"
    },
     {
        decadev: "Adams Temidire A",
        github_username: "gr8temi",
        title: "Software Developer",
        facebook: "Adams Temidire",
        twitter: "adamstemidire1"
    },
    {
        decadev: "Babalola Taiwo",
        github_username: "thywoe",
        title: "Software Engineer",
        facebook: "babson.thywo",
        twitter: "thywoe"
    },
  {
        decadev: "Chidiogo Ezeakunne",
        github_username: "chidiogo-akunne",
        title: "Software Developer",
        facebook: "scholar.akunne",
        twitter: "dinthecoder"
    },
  {
       decadev: "Amani Kanu",
       github_username: "sirsuccess",
       title: "Software Developer",
       facebook: "Amani Kanu",
       twitter: "A1_success"
   },
    {
       decadev: "Joel Ugwumadu",
       github_username: "ugwumadu116",
       title: "Full Stack Developer",
       facebook: "Joel Ugwumadu",
       twitter: "UgwumaduJoel"
    },
  {
       decadev: "Ama Benedict",
       github_username: "bendiumpope",
       title: "Software Developer",
       facebook: "benpope",
       twitter: "dikachiben"
   },
   {

    decadev: "Ayodele Tolulope",
    github_username: "toluwalope19",
    title: "Software Developer",
    facebook: "tolu.ayodele3",
    twitter: "Tolubarca"
   },
  {
    decadev: "Ugwu Lewis",
    github_username: "princelewis",
    title: "Software Engineer",
    facebook: "ugwu obiora",
    twitter: "Loudsdata"
},
 {
    decadev: "Osehiase Ehilen",
    github_username: "Osehi",
    title: "Software Product Engineer",
    facebook: "Osehiase Ehilen",
    twitter: "osehiase"
},{
    decadev: "Waheed Afolabi",
    github_username: "wptechprodigy",
    title: "Software Engineer",
    facebook: "afolabiwaheedo",
    twitter: "checkwithwaheed"
},
{
decadev: "Prakher Prashank",
github_username: "terabo090",
title: "Web Developer",
facebook: "Prashank Prakher",
twitter: "PrakherPrashank"
}
];


// +--------------------------------------------------------------------------------+
// +                                                                                +
// +                  YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS                 +
// +                                                                                +
// +--------------------------------------------------------------------------------+

// Creates cards from the array above
// You don't need to modify this

function Shuffle(o) {
    for (
      var j, x, i = o.length;
      i;
      j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
}

const client_id = "75d6633b7456df73aef3";
const client_secret = "9269a41b2dc3ba0a13e94609bd7b05f1769ba5b8";

const fetchUser = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&
    client_secret=${client_secret}`);

    const data = await api_call.json();
    return { data }
};

resultDiv = document.querySelector(".card-container");

let content = "";
Shuffle(cards).forEach(decadev => {
    fetchUser(decadev.github_username)
        .then(userData => {
            console.log(userData.data);
            resultDiv.innerHTML +=
                `<div class="our-team">
                <ul class="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                </ul>
            <div class="picture">
                <img class="img-fluid" src="${userData.data.avatar_url}">
            </div>
            <div class="team-content">
                <h3 class="name">${decadev.decadev}</h3>
                <h4 class="title">${decadev.title}</h4>
            </div>
            <div class="github-container">
            <div class="username">Username: <span>${userData.data.login}</span></div>
            <div class="repo">Repos: <span>${userData.data.public_repos}</span></div>
            </div>
            <div class="social">
                <a href="https://www.facebook.com/${decadev.facebook}" target="_blank">
                <svg class="icon icon-facebook">
                    <use xlink:href="img/sprite.svg#icon-facebook2"></use>
                </svg>
                </a>
                <a href="https://www.twitter.com/${decadev.twitter}" target="_blank">
                <svg class="icon icon-facebook icon-twitter">
                    <use xlink:href="img/sprite.svg#icon-twitter"></use>
                </svg>
                </a>
                <a href="${userData.data.html_url}" target="_blank">
                <svg class="icon icon-facebook">
                    <use xlink:href="img/sprite.svg#icon-github"></use>
                </svg>
                </a>
            </div>
        </div>`;
        });
});


