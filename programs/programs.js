const programsMenu = document.querySelectorAll('.program')
const programDetail = document.querySelector('.programDetail')

const removeActiveClass = () => {
    programsMenu.forEach(button => {
        button.classList.remove('active')
    });
}


programsMenu.forEach(program => {
    program.addEventListener('click', () => {
        if(program.classList.contains('express')) {
            removeActiveClass()
            program.classList.add('active')
            programDetail.innerHTML = ` <section class="programDetail">
            <div class="container programDetails_container">
                <div class="programDetail_left">
                    <h2>Express Lessons</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam, exercitationem ratione explicabo nemo enim libero totam odit? 
                    </p>

                    <div class="programDetail_images">
                        <div><img src="../img/32323.jpg"></div>
                        <div><img src="../img/graduate2.webp"></div>
                    </div>
                    <h4>Weekdays only</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae earum alias culpa autem quos tenetur, ad eius quae eligendi sed.</p>
                   
                    <article>
                        <h5>Theory Lessons</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione placeat hic obcaecati distinctio commodi doloribus ut dolorum nemo aspernatur ipsam exercitationem, alias nihil magnam neque velit. Ea minima commodi eaque.</p>
                    </article>

                    <article>
                        <h5>Practical lessons</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione placeat hic obcaecati distinctio commodi doloribus ut dolorum nemo aspernatur ipsam exercitationem, alias nihil magnam neque velit. Ea minima commodi eaque.</p>
                    </article>
                    <a href="../contact/contact.html" class="btn btn_secondary">Get Started Now!</a>
                </div>
                <div class="programDetail_right">
                    <article>
                        <h4>Express Without License</h4>
                        <div>
                            <h2>$2.424</h2>
                            <p>For Non Students</p>
                        </div>

                        <div>
                            <h2>$2.124</h2>
                            <p>For Students and NSS with proof</p>
                        </div>
                    </article>

                    <article>
                        <h4>Express With Standard License</h4>
                        <div>
                            <h2>$2.424</h2>
                            <p>For Non Students</p>
                        </div>

                        <div>
                            <h2>$2.124</h2>
                            <p>For Students and NSS with proof</p>
                            <p>License will be ready 6 weeks after completion</p>
                        </div>
                    </article>

                    <article>
                        <h4>Express With Premium License</h4>
                        <div>
                            <h2>$2.424</h2>
                            <p>For Non Students</p>
                        </div>

                        <div>
                            <h2>$2.124</h2>
                            <p>For Students and NSS with proof</p>
                            <p>License will be ready 6 weeks after completion</p>
                        </div>
                        
                    </article>
                </div>
            </div>`
            
        } else if(program.classList.contains('polishing')) {
            removeActiveClass()
            program.classList.add('active')
            programDetail.innerHTML = ` <section class="programDetail">
            <div class="container programDetails_container">
                <div class="programDetail_left">
                    <h2>Polishing Package</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam, exercitationem ratione explicabo nemo enim libero totam odit? 
                    </p>

                    <div class="programDetail_images">
                        <div><img src="../img/graduate6.jpg"></div>
                        <div><img src="../img/practical10.jpg"></div>
                    </div>
                    <h4>Weekdays only</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae earum alias culpa autem quos tenetur, ad eius quae eligendi sed.</p>
                   
                    <article>
                        <h5>Theory Lessons</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione placeat hic obcaecati distinctio commodi doloribus ut dolorum nemo aspernatur ipsam exercitationem, alias nihil magnam neque velit. Ea minima commodi eaque.</p>
                    </article>

                    <article>
                        <h5>Practical lessons</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione placeat hic obcaecati distinctio commodi doloribus ut dolorum nemo aspernatur ipsam exercitationem, alias nihil magnam neque velit. Ea minima commodi eaque.</p>
                    </article>
                    <a href="../contact/contact.html" class="btn btn_secondary">Get Started Now!</a>
                </div>
                <div class="programDetail_right">
                    <article>
                        <h4>Polishing Without License</h4>
                        <div>
                            <h2>$1.500</h2>
                            <p>For Non Students</p>
                        </div>

                        <div>
                            <h2>$1.350</h2>
                            <p>For Students and NSS with proof</p>
                        </div>
                    </article>

                    <article>
                        <h4>Polishing With Standard License</h4>
                        <div>
                            <h2>$1.500</h2>
                            <p>For Non Students</p>
                        </div>

                        <div>
                            <h2>$1.350</h2>
                            <p>For Students and NSS with proof</p>
                            <p>License will be ready 6 weeks after completion</p>
                        </div>
                    </article>

                    <article>
                        <h4>Polishing With Premium License</h4>
                        <div>
                            <h2>$2.160</h2>
                            <p>For Non Students</p>
                        </div>

                        <div>
                            <h2>$2.210</h2>
                            <p>For Students and NSS with proof</p>
                            <p>License will be ready 6 weeks after completion</p>
                        </div>
                        
                    </article>
                </div>
            </div>`
            
        }else if(program.classList.contains('license')) {
            removeActiveClass()
            program.classList.add('active')
            programDetail.innerHTML = ` <section class="programDetail">
            <div class="container programDetails_container">
                <div class="programDetail_left">
                    <h2>License Only</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam, exercitationem ratione explicabo nemo enim libero totam odit? 
                    </p>

                    <div class="programDetail_images">
                        <div><img src="../img/graduate4.jpg"></div>
                        <div><img src="../img/practical1.jpg"></div>
                    </div>
                    <h4>Weekdays only</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae earum alias culpa autem quos tenetur, ad eius quae eligendi sed.</p>
                   
                    <article>
                        <h5>Theory Lessons</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione placeat hic obcaecati distinctio commodi doloribus ut dolorum nemo aspernatur ipsam exercitationem, alias nihil magnam neque velit. Ea minima commodi eaque.</p>
                    </article>

                    <article>
                        <h5>Practical lessons</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione placeat hic obcaecati distinctio commodi doloribus ut dolorum nemo aspernatur ipsam exercitationem, alias nihil magnam neque velit. Ea minima commodi eaque.</p>
                    </article>
                    <a href="../contact/contact.html" class="btn btn_secondary">Get Started Now!</a>
                </div>
                <div class="programDetail_right">
                    <article>
                        <h4>Standard License</h4>
                        <div>
                            <h2>$1.650</h2>
                            <p>For Non Students</p>
                        </div>

            
                    </article>

                    <article>
                        <h4>Express License</h4>
                        <div>
                            <h2>$1.900</h2>
                            <p>For Non Students</p>
                             <p>License will be ready 6 weeks after completion</p>
                        </div>
                    </article>

                    <article>
                        <h4>Theory Only</h4>
                        <div>
                            <h2>$600</h2>
                            <p>For Non Students</p>
                            <p>License will be ready 2 weeks after completion</p>
                        </div>

                    </article>
                </div>
            </div>`
            
        }else if(program.classList.contains('regular')) {
            removeActiveClass()
            program.classList.add('active')
            programDetail.innerHTML = ` <section class="programDetail">
            <div class="container programDetails_container">
                <div class="programDetail_left">
                    <h2>Regular Learning</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam, exercitationem ratione explicabo nemo enim libero totam odit? Deleniti fugiat esse earum neque explicabo laboriosam quae non! Ipsum, harum assumenda!
                    </p>

                    <div class="programDetail_images">
                        <div><img src="../img/graduate3.jpg"></div>
                        <div><img src="../img/practical8.jpeg"></div>
                    </div>
                    <h4>Included in weekend streams</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae earum alias culpa autem quos tenetur, ad eius quae eligendi sed.</p>
                    <article>
                        <h5>Theory</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione placeat hic obcaecati distinctio commodi doloribus ut dolorum nemo aspernatur ipsam exercitationem, alias nihil magnam neque velit. Ea minima commodi eaque.</p>
                    </article>

                    <article>
                        <h5>Theory Lessons</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione placeat hic obcaecati distinctio commodi doloribus ut dolorum nemo aspernatur ipsam exercitationem, alias nihil magnam neque velit. Ea minima commodi eaque.</p>
                    </article>

                    <article>
                        <h5>Practical lessons</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione placeat hic obcaecati distinctio commodi doloribus ut dolorum nemo aspernatur ipsam exercitationem, alias nihil magnam neque velit. Ea minima commodi eaque.</p>
                    </article>
                    <a href="../contact/contact.html" class="btn btn_secondary">Get Started Now!</a>
                </div>
                <div class="programDetail_right">
                    <article>
                        <h4>Regular Without License</h4>
                        <div>
                            <h2>$1.990</h2>
                            <p>For Non Students</p>
                        </div>

                        <div>
                            <h2>$1.184</h2>
                            <p>For Students</p>
                        </div>
                    </article>

                    <article>
                        <h4>Regular With Standard License</h4>
                        <div>
                            <h2>$2.650</h2>
                            <p>For Non Students</p>
                        </div>

                        <div>
                            <h2>$2.500</h2>
                            <p>For Students</p>
                        </div>
                    </article>

                    <article>
                        <h4>Regular With Premium License</h4>
                        <div>
                            <h2>$2.900</h2>
                            <p>For Non Students</p>
                        </div>

                        <div>
                            <h2>$2.750</h2>
                            <p>For Students</p>
                            <p>License will be ready 2weeks after completion</p>
                        </div>
                       
                    </article>
                </div>
            </div>` 
        }
    })
    
});