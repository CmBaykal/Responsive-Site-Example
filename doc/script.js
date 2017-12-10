 function menu(a)
    {
        var btn = document.getElementsByClassName("btn");
        var bl = document.getElementById("btn").getAttribute("class");

        if(bl == "btn")
        {
        document.getElementById("menu").classList.toggle("goster");
        a.classList.toggle("c");
        btn[0].classList.toggle("btnac");
        btn[1].classList.toggle("btnac");
        btn[2].classList.toggle("btnac");
        btn[3].classList.toggle("btnac");
        }
        else{
            var ml = document.getElementById("menu").getAttribute("class");
            if(ml=="menu goster")
            {
                setTimeout(function(){ document.getElementById("menu").classList.toggle("goster"); }, 480);              
            }
            else{
                document.getElementById("menu").classList.toggle("goster");
            }
            btn[0].classList.toggle("btnkapa");
            btn[1].classList.toggle("btnkapa");
            btn[2].classList.toggle("btnkapa");
            btn[3].classList.toggle("btnkapa");
            a.classList.toggle("c");   
        }
    }
    function arama(a){
        var cl = document.getElementById("cbk").getAttribute("class");
        if(cl == "cbk")
        {
        document.getElementById("cbkkutu").classList.toggle("cbkkutuac");
        document.getElementById("cbk").classList.toggle("cbac");           
        }
        else{
            document.getElementById("cbk").classList.toggle("cbkapa");
            document.getElementById("cbkkutu").classList.toggle("cbkkutukapa");
        }}