    fn=sessionStorage.getItem('fName');
    ln=sessionStorage.getItem('lName');
    pn=sessionStorage.getItem('phNum');
    ad=sessionStorage.getItem('addr');
    gm=sessionStorage.getItem('gmail');
    p=sessionStorage.getItem('pass');
    cp=sessionStorage.getItem('confrmPass');


function sign(){
    const fName=document.getElementById("firstName").value;
    const lName=document.getElementById("lastName").value;
    const phNum=document.getElementById("phone").value;
    const addr=document.getElementById("address").value;
    const mail=document.getElementById("emailId").value;
    const pass=document.getElementById("newPass").value;
    const confrmPass=document.getElementById("confirmPass").value;

    if(pass===confrmPass)
    {
            sessionStorage.setItem('fName',fName)
            sessionStorage.setItem('lName',lName)
            sessionStorage.setItem('phNum',phNum)
            sessionStorage.setItem('addr',addr)
            sessionStorage.setItem('gmail',mail)
            sessionStorage.setItem('pass',pass)
            sessionStorage.setItem('confrmPass',confrmPass)
    }

    if (gm===mail) {
        window.alert("User Exists")
    }
    else{
        location.href="./index.html"
    }
}

function login(){
    lMail=document.getElementById("loginMail").value;
    lPass=document.getElementById("loginPassword").value;
    console.log(lMail);
    console.log(lPass);
    console.log(gm);

    if( lMail==gm && lPass==p){
        location.href="./index.html"
    }
    else{
        window.alert("User Not found")
    }
}

// --------------timer-------------------

const targetDate = new Date("2024-01-30T23:59:59").getTime();

        const interval = setInterval(updateCountdown, 1000);

        function updateCountdown() {
            const currentDate = new Date().getTime();   

            const remainingTime = targetDate - currentDate;

            if (remainingTime <= 0) {
                clearInterval(interval);
                document.getElementById("countdown").innerHTML = "Started!";
                return;
            }

            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        updateCountdown();
  
  
  