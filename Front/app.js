var contact = document.querySelector('.form');
let to = document.getElementById("to");
let subject = document.getElementById("sub");
let content = document.getElementById("content");
// let file = document.getElementById("attach");
// console.log(file);
contact.addEventListener('submit',(e)=>{
    e.preventDefault();

    let data = {
        to : to.value,
        subject : subject.value,
        content : content.value,
        // attach : file.files[0]
    }

    const xhr = new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type','application/json');
    // xhr.onload = function(){
    //     console.log(xhr.responseText);
    //     if(xhr.responseText == 'success'){
    //         alert("Email sent");
    //         to.value = '';
    //         subject.value = '';
    //         content.value = '';
    //     }else{
    //         alert("Something went wrong ");
    //     }
    // }
    // xhr.onerror = function() {
    //     console.log("Error:", this.status);
    //   };
    xhr.send(JSON.stringify(data));
    console.log(xhr)
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            alert("Email sent");
            to.reset();
            subject.reset();
            content.reset();
            // attach.reset()
        }else{
            alert("something went wrong");
        }
      };

    // xhr.send(JSON.stringify(data));
    
});