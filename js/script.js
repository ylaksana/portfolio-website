
// Project Containers

function showOverlay(projectId){
    const overlay = document.getElementById('overlay');
    const title = document.getElementById('project-title');
    const description = document.getElementById('project-description');
    const image_1 = document.getElementById('img1');
    const image_2 = document.getElementById('img2');
    const image_3 = document.getElementById('img3');

    if(projectId === 'pokeCaller'){
        image_2.src = 'img/Code_QYkrI37Qoh.gif';
        image_2.style.width = "500px";
        title.innerText = 'PokeCaller';
        description.textContent = 'Inspired to create a discord bot for fun, I thought of an idea to create a Pokemon dictionary through an existing API and a database. \
        This discord bot was able to make API calls to receive data entries on Pokemon and display them in a Discord server. \
        Members of a server could also use a database that is linked to the bot to create a Pokemon favorites list.';
    }
    else if(projectId === 'stateBased'){
        title.innerText = 'Deep Learning Hockey Agent';
        image_2.src = 'img/ezgif-1-df342b474a.gif';
        image_2.style.width = "500px";
        description.innerText = 'This is an agent that was made through solely focusing on change in states or "state-based learning".\
        With a group of developers, we designed and programmed the state-based training process so that the agent can win hockey games against other trained agents.\
        We generated trial runs of dummy agents to capture their behavior and processed the trial data into states that could be used as training data for the agents.\
        Several state-based training methods were used such as imitation learning, DAgger, REINFORCE, and PPO which resulted in successfully creating an agent that could\
        outperform other agents in a game of hockey.';
    }
    else if(projectId === 'swipeMeet'){
        image_1.src = 'img/studio64_csoOEYivTl.gif';
        image_2.src = 'img/studio64_c8CB7djgtO.gif';
        image_3.src = 'img/studio64_ZX3Vnu89za.gif';
        title.innerText = 'SwipeMeet (Social Event Planner App)';
        description.innerText = 'This is an android app that I developed in Android Studio using Kotlin. \
        The purpose of the app was to connect people who had similar interests through event planning. \
        There were several APIs that made the app experience more convenient such as OpenStreetMaps and FireBase. \
        Users are able to start accounts and customize their profiles to better align with their personal interests. \
        Users can share events they are interested in and explore postings made by others to connect.';
    }

    overlay.style.display = 'flex';
}

function closeOverlay(){
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    const image_1 = document.getElementById('img1');
    const image_2 = document.getElementById('img2');
    const image_3 = document.getElementById('img3');
    image_2.style.width = "250px";
    image_1.src  = "", image_2.src  ="", image_3.src ="";
}

//Element Detection and Animations

function elementInView(element){
    const rect = element.getBoundingClientRect();
    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Scroll Event

function handleScroll(){
    const sections = ['experience-fade-in', 'projects-fade-in', 'technologies-fade-in', 'contact-fade-in', 'hand'];

    sections.forEach(sectionClass => {
        const section = document.querySelectorAll(`.${sectionClass}`);

        section.forEach(element =>{
            if(elementInView(element)){
                    element.classList.add('visible');
            }
        });
    });
}

window.addEventListener('scroll', handleScroll);

handleScroll();