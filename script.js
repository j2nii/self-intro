const profilePhoto = document.querySelector(".profile-photo");

profilePhoto.addEventListener("click", () => {
    //if (document.body.className == 'dark-mode') {
    //     document.body.className = '';
    //} else {
    //document.body.className = 'dark-mode';
    //}

    // DOM 요소에 지정한 클래스 값이 없으면 추가하고, 있다면 제거
    document.body.classList.toggle('dark-mode');
});

/*
const sections = document.querySelectorAll(".right_container section")

sections.forEach((section, index) => {
    section.style.display = index === 0 ? "flex" : "none";
})

for(let index = 0; index < sections.length; index++){
    const section = sections[index];
    section.addEventListener("click", function(event){
        const sectionWidth = section.offsetWidth;

        const clickX = event.clientX - section.getBoundingClientRect().left;

        if (clickX < sectionWidth / 2){
            if (index != 0){
                section.style.display = "none";
                sections[index - 1].style.display = "flex";
            }
        }else {
            if (index != (section.length - 1)){
                section.style.display = "none";
                sections[index + 1].style.display = "flex";
            }
        }
    })
}*/

const sections = document.querySelectorAll('.right_container section');
let currentIndex = 0;

sections.forEach((section, index) => {
    section.computedStyleMap.display = index === 0 ? "flex" : "none";
});

const showAfterSection = () => {
    sections.forEach((section) => { section.style.display = "none";})
    if(currentIndex == (sections.length - 1)){
        currentIndex = 0;
    }else{
        currentIndex ++;
    }

    sections[currentIndex].style.display = "flex";
}

const showBeforeSEction = () =>{
    sections.forEach((section) => { section.style.display = "none";})
    if(currentIndex == 0){
        currentIndex = sections.length - 1;
    }else{
        currentIndex --;
    }

    sections[currentIndex].style.display = "flex";
}

let intervalId = setInterval(showAfterSection, 3000);

const resetInterval = () => {
    clearInterval(intervalId);
    intervalId = setInterval(showAfterSection, 3000);
}

sections.forEach((section, index) => {
    section.addEventListener("click", (event) =>{
        const sectionWidth = section.offsetWidth;
        const clickX = event.clientX - section.getBoundingClientRect().left;

        if (clickX < sectionWidth / 3){
            showBeforeSEction();
            resetInterval();
        }else if (clickX < sectionWidth * 2 / 3){
            showAfterSection();
            resetInterval();
        } else{
            if(intervalId){
                clearInterval(intervalId);
                intervalId = null;
            }else{
                intervalId = setInterval(showAfterSection, 3000);
            }
        }
    });
});