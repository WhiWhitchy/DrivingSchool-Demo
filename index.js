const packageButtons = document.querySelectorAll('.packages_buttons button')
const packagesTableBody = document.querySelector('.packages tbody')

const removeActiveClass = () => {
    packageButtons.forEach(button => {
        button.classList.remove('active')
    });
}

packageButtons.forEach(button => {
    button.addEventListener('click', () => {
        removeActiveClass()
        if(button.classList.contains('students')) {
            button.classList.add('active')
            packagesTableBody.innerHTML = `
                    <tbody>
                        <tr>
                            <td>Regular without standard license</td>
                            <td>6 Weeks</td>
                            <td>1.180</td>
                        </tr>
                        <tr>
                            <td>Regular with standard license</td>
                            <td>6 Weeks</td>
                            <td>1.184</td>
                        </tr>

                        <tr>
                            <td>Regular with premium license</td>
                            <td>2 Weeks</td>
                            <td>2.750</td>
                        </tr>

                        <tr>
                            <td>Express without license</td>
                            <td>3 Weeks</td>
                            <td>2.124</td>
                        </tr>

                        <tr>
                            <td>Express with standard license</td>
                            <td>3 Weeks</td>
                            <td>2.124</td>
                        </tr>

                        <tr>
                            <td>Express with premium license</td>
                            <td>3 Weeks</td>
                            <td>2.214</td>
                        </tr>

                        <tr>
                            <td>Polishing with standard license</td>
                            <td>4 Weeks</td>
                            <td>1.350</td>
                        </tr>
                        <tr>
                            <td>Polishing with premium license</td>
                            <td>6 Weeks</td>
                            <td>2.210</td>
                        </tr>`
            
        } else if(button.classList.contains('license')) {
            button.classList.add('active')
            packagesTableBody.innerHTML = `

                    <tbody>
                        <tr>
                            <td>Standard License</td>
                            <td>3 Weeks</td>
                            <td>1.650</td>
                        </tr>

                        <tr>
                            <td>Express License</td>
                            <td>3-4 Weeks</td>
                            <td>1.900</td>
                        </tr>
                      `
            
        }else if(button.classList.contains('non-students')) {
            button.classList.add('active')
            packagesTableBody.innerHTML = ` 

                    <tbody>
                     <tr>
                            <td>Regular without license</td>
                            <td>6 Weeks</td>
                            <td>2,650</td>
                        </tr>

                        <tr>
                            <td>Regular with standard license</td>
                            <td>6 Weeks</td>
                            <td>2,650</td>
                        </tr>

                        <tr>
                            <td>Regular with premium license</td>
                            <td>6 Weeks</td>
                            <td>2,900</td>
                        </tr>

                        <tr>
                            <td>Express without license</td>
                            <td>3 Weeks</td>
                            <td>3,060</td>
                        </tr>

                        <tr>
                            <td>Express with standard license</td>
                            <td>3 Weeks</td>
                            <td>2,650</td>
                        </tr>

                        <tr>
                            <td>Express with premium license</td>
                            <td>3 Weeks</td>
                            <td>3,310</td>
                        </tr>

                        <tr>
                            <td>Polishing with standard license</td>
                            <td>2 - 4 Weeks</td>
                            <td>1,500</td>
                        </tr>

                        <tr>
                            <td>Polishing with premium license</td>
                            <td>2 - 4 Weeks</td>
                            <td>2,160</td>
                        </tr>`
            
        }
    }) 
});