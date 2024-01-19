// let results=document.getElementById('result')
// function getUsername(){
//     const search= document.querySelector('#username').value;
//     const username1=search.split(' ').join('');
//     searchUsers(username1);
// }
// getUsername()

// function searchUsers(user){
//     user="";
//     url="https://api.github.com/search/users?q="+user +"in:user"
//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         data.items.forEach(item => {
//             user=`<a taret="_blank" href="${item.html_url}"><img class="img-thumbnail ml-4" width="100" height="100" src="${item.avatar_url}"></a>`
//             results.innerHTML=user;
            
//         });
//     })
// }


$(document).ready(function(){
                var user=''
                
                $("#form" ).submit(function(event){ 
                    event.preventDefault()

                    let username=$("#username").val()

                    searchUsers(username)
                
                })

                 $("#username").change(function(){
                    var username=$("#username").val()
                     searchUsers(username)
                })

                function searchUsers(username){
                       
                       $("#result").empty()
                        
                        $.get("https://api.github.com/search/users?q="+username +"in:user",function(data){
                    
                        data.items.forEach(item =>{
                            user=`
                            <a  href="${item.html_url}" target="_blank">
                                <img class="img-thumbnail  ml-4" width="100" height="100" 
                                          src="${item.avatar_url}">
                                <p>${item.login}</p>
                            </a>
                            `
                            $("#result").append(user);
                        });
                        
                    });

                    }
});