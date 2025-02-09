const containerEl = document.querySelector('.gallery_images')
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.mix'
    },
    animation: {
        duration: 300
    }
});