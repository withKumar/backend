$(document).ready(()=> {
    console.log('Document Loaded');

    //Way 1 -> to binding an Event using Selecctor
    $('#mid_div').bind("click", function(e) {
        console.log(e);
        var value = $('#input1').val();
        console.log(value);
    })

    var user;
    var pass;

    $('#auth').bind('click', () => {
        user = $('#user').val();
        pass = $('#pass').val();

        console.log(`User : ${user} password : ${pass}`);
    })


    /**
     * USING XMLHttpRequest making GET request
     * The Flow Below like : 
     * 1. Creating an Interface of XMLHttpRequest
     * 2. Sending GET request to the server link XHR.Open
     * 3. Responding in OnLoad method after checking xhr readystate, status
     * 4. in myData we are storing the JSON edition of the received data
     */
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'http://localhost:3000/', true);
    xhr.onload =  function () {
        // if(xhr.readyState == 4 && xhr.status == 200) {
        //     var mydata = JSON.parse(this.responseText);
        //     var foods = mydata[1].favFood;
        //     foods.forEach(element => {
        //         console.log(element);
        //     });

        // }
    }
    
    xhr.send()

    setTimeout(() => {
        xhr.abort();
        console.log('Waited A Little and closed');
    }, 1500);

    // $.ajax({
    //     method : 'POST',
    //     url : 'http://localhost:3000',
    //     data : { name : user , password : pass }
    //     })
    //     .done(function(msg) {
    //         alert('data Transferred' + msg);
    //     })
    


})