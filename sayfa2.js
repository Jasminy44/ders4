const alisverisListesi=[{ad:"Elma",resim:"🍎",adet:1+"kg"},{ad:"armut",resim:"😉",adet:3+"kg"},{},{}]

const kokEtiket=document.querySelector("#root")

alisverisListesi.forEach(listeyiGoster)

function listeyiGoster(urun){
    if(urun.ad){
        let html=`<span> ${urun.resim} </span> <span> ${urun.ad}  ${urun.adet}  </span>`
        let div=document.createElement("div")
        div.innerHTML=html
        kokEtiket.append(div)
        
    }
   
}

let butonEkle=document.createElement("button")
butonEkle.textContent="+Ekle"
kokEtiket.prepend(butonEkle)

let inputUrunAd=document.createElement("input")
inputUrunAd.type="text"
inputUrunAd.placeholder="urun adi"
butonEkle.after(inputUrunAd)


let inputUrunResim=document.createElement("input")
inputUrunResim.type="text"
inputUrunResim.placeholder="urun resmi"
inputUrunAd.after(inputUrunResim)

let inputUrunNo=document.createElement("input")
inputUrunNo.type="text"
inputUrunNo.placeholder="urun adet/kilo"
inputUrunResim.after(inputUrunNo)

butonEkle.addEventListener('click',function(){

   let yeniUrun={
    ad:inputUrunAd.value,
    resim:inputUrunResim.value,
    adet:parseInt(inputUrunNo.value)
   }
   alisverisListesi.push(yeniUrun)

   let eskiUrunEtiketleri=kokEtiket.querySelectorAll("div")
   eskiUrunEtiketleri.forEach(function(etiket){

    etiket.remove()

   })
   alisverisListesi.forEach(listeyiGoster)

   setTimeout(function(){
    inputUrunAd.value=""
    inputUrunResim.value=""
    inputUrunNo.value=""
   },3000)

})

