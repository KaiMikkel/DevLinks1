function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")   


    // Pegar a tag img
    const img = document.querySelector("#profile img")


    //Substituir a imagem
    if(html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
     img.setAttribute("src", "./assets/avatar-light.png")
     img.setAttribute("alt", "Foto do professor Mayk Brito versão light")

    } else {
    //se estiver sem light mode, manter a imagem normal 
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto do professor Mayk Brito - Rockeseat!")

   }

   
}