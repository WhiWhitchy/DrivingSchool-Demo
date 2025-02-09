const faqs = document.querySelectorAll('.faq')
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('show');
        if(faq.classList.contains('show')){
            faq.querySelector('i').className = "bx bx-chevron-up"
        }else{
            faq.querySelector('i').className = "bx bx-chevron-down"
        }
    })
});