function message() {
    
    /*
    let name = document.getElementById("name").value;
    let phone = document.getElementById("tel").value;
    alert("Дякуємо, " + name + "! Ваше замовлення прийнято. Ми звяжемося з Вами за телефоном " + phone + ". Гарного дня!");
    document.getElementById("name").value="";
    document.getElementById("tel").value=""; */
}

function sushi() {
    window.open("https://www.youtube.com/watch?v=EGeNKGosXA8")
}

function onigiri() {
    window.open("https://www.youtube.com/watch?v=2Cy_LzacOxM")
}

function takoyaki() {
    window.open("https://www.youtube.com/watch?v=yjyddfwijPM")
}

document.querySelector("#btn").addEventListener("click", message)

document.querySelector("#sushi").addEventListener("click", sushi)

document.querySelector("#onigiri").addEventListener("click", onigiri)

document.querySelector("#takoyaki").addEventListener("click", takoyaki)
