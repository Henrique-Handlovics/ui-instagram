let storiesEl = document.querySelector('.stories')
let storyLeftEl = document.querySelector ('.story-left')
let storyRightEl = document.querySelector ('.story-right')

function updateButtons() {
    // Começo
    if (storiesEl.scrollLeft <= 0) {
        storyLeftEl.style.opacity = '0'
        storyLeftEl.style.pointerEvents = 'none'
    } else {
        storyLeftEl.style.opacity = '1'
        storyLeftEl.style.pointerEvents = 'auto'
    }

    // Final
    if (storiesEl.scrollLeft + storiesEl.clientWidth >= storiesEl.scrollWidth - 1) {
        storyRightEl.style.opacity = '0'
        storyRightEl.style.pointerEvents = 'none'
    } else {
        storyRightEl.style.opacity = '1'
        storyRightEl.style.pointerEvents = 'auto'
    }
}

storyLeftEl.addEventListener('click', () => {
    storiesEl.scrollTo({
        left: storiesEl.scrollLeft - 150,
        behavior: 'smooth'
    });
});
storyRightEl.addEventListener('click', () => {
    storiesEl.scrollTo({
        left: storiesEl.scrollLeft + 150,
        behavior: 'smooth'
    });
});

// Atualiza quando rolar
storiesEl.addEventListener('scroll', updateButtons)

// Atualiza quando a página carregar
updateButtons()