function changeImg(num) {
    const mainImg = document.getElementById("main-img")
    const accLink = document.getElementById("acc-link")

    if (num == 1) {
        mainImg.src = "./../assets/lonavala/tvs,png.webp"
        accLink.innerHTML = '<a href="https://www.flipkart.com/fox-1-bike-riding-kit-knee-aviatorridingglasses-armor-jacket-l-40-combo/p/itmeanaya7sstzha" class="img-name font-style" target="_blank" id="acc-link">Full Set</a>'
    }
    else if (num == 2) {
        mainImg.src = "./../assets/lonavala/helmate.png"
        accLink.innerHTML = '<a href="https://www.flipkart.com/steelbird-off-road-gt-isi-certified-motocross-helmet-men-inner-sun-shield-motorbike/p/itm4ab21e0a19400?pid=HLMGHPZYVGPJA5JW&lid=LSTHLMGHPZYVGPJA5JWKTONVJ&marketplace=FLIPKART&q=helmate&store=1mt%2Fztf%2Fiv8&srno=s_1_11&otracker=search&otracker1=search&fm=organic&iid=en_F9bKrqpQNLHWFZHGkNbRa79cPsdXc31Ev9iNCZVnR0du0HA19dmfneIpKJNssDhB52u1v7-PVPFogEEYbbU-0g%3D%3D&ppt=pp&ppn=pp&ssid=b10z2zp1400000001721638661353&qH=22873e4c9f8f0db9" class="img-name font-style" target="_blank" id="acc-link">Helmet</a>'
    }
    else if ( num== 3){
         mainImg.src = "./../assets/lonavala/jacket.png"
        accLink.innerHTML = '<a href="https://www.moglix.com/allextreme-turbo-polyester-red-bike-riding-jacket-size-2xl/mp/msng9vnqlwm6kp-g" class="img-name font-style" target="_blank" id="acc-link">jacket</a>'

    }
    else if ( num== 4){
        mainImg.src = "./../assets/lonavala/gloves.png"
       accLink.innerHTML = '<a href="https://www.flipkart.com/zaysoo-bike-riding-cycling-sports-gloves-men-women-riding/p/itma40d213359dff?pid=SGEHFBG3CYDHKD9G&lid=LSTSGEHFBG3CYDHKD9GXVHATM&marketplace=FLIPKART&q=gloves+for+bike+riding&store=1mt%2Fztf%2Ftbi%2F9tm&srno=s_1_22&otracker=AS_QueryStore_OrganicAutoSuggest_1_16_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_16_na_na_na&fm=organic&iid=20203774-859e-4a13-ae05-3e2f7bfa273e.SGEHFBG3CYDHKD9G.SEARCH&ppt=pp&ppn=pp&ssid=wh862vdqy80000001721639274319&qH=72efdc366632609d" class="img-name font-style" target="_blank" id="acc-link">gloves</a>'

   }
   else if ( num== 5){
    mainImg.src = "./../assets/lonavala/shoes.png"
   accLink.innerHTML = '<a href="https://www.customelements.in/product/forma-freccia-black-yellow-riding-boots/" class="img-name font-style" target="_blank" id="acc-link">shoes</a>'

}
}


function search(){
const inputOption = document.getElementById("input")
const outputOption =inputOption.value 

const imageOption = document.getElementById("spot-img")
const titleOption = document.getElementById("place-title")
const paragraphOption = document.getElementById("info")

switch(outputOption) {

    case "Choose the Place" :
        imageOption.src = "./../assets/lonavala/top-place.png"
        titleOption.innerText= "Top Places To Visit"
        paragraphOption.innerText="Lonavala and the adjacent Khandala are twin hill stations 622 metres (2,041 ft) above sea level, in the Sahyadri ranges that demarcate the Deccan Plateau and the Konkan coast.  The hill stations sprawl over an approximate area of 38 square kilometres (15 sq mi). Tourism peaks during the monsoon season."
break

   case "Lonavala Lake" :
    imageOption.src = "./../assets/lonavala/lonavala-lake.png"
    titleOption.innerText= "Lonavala Lake"
    paragraphOption.innerText="Lonavala Lake is located on the outskirts of Lonavala and is sourced by the Indrayani River. The lake fills up during the monsoons and dries up during the winter leading it to be popularly known as the monsoon lake.  It is a popular picnic spot offering activities like bird watching, swimming, and angling."
  break

case "Lohagad Fort" :
    imageOption.src = "./../assets/lonavala/lohagad-fort.png"
    titleOption.innerText= "Lohagad Fort"
    paragraphOption.innerText="Lonavala Lake is located on the outskirts of Lonavala and is sourced by the Indrayani River. The lake fills up during the monsoons and dries up during the winter leading it to be popularly known as the monsoon lake.  It is a popular picnic spot offering activities like bird watching, swimming, and angling."
  break
  case "Rajmachi Point" :
    imageOption.src = "./../assets/lonavala/Rajmachi-point.png"
    titleOption.innerText= "Rajmachi Point"
    paragraphOption.innerText="Lonavala Lake is located on the outskirts of Lonavala and is sourced by the Indrayani River. The lake fills up during the monsoons and dries up during the winter leading it to be popularly known as the monsoon lake.  It is a popular picnic spot offering activities like bird watching, swimming, and angling."
  break
  case "Karla Caves" :
    imageOption.src = "./../assets/lonavala/karala-caves.png"
    titleOption.innerText= "Karla Caves"
    paragraphOption.innerText="Lonavala Lake is located on the outskirts of Lonavala and is sourced by the Indrayani River. The lake fills up during the monsoons and dries up during the winter leading it to be popularly known as the monsoon lake.  It is a popular picnic spot offering activities like bird watching, swimming, and angling."
  break

  case "Zenith Waterfalls" :
    imageOption.src = "./../assets/lonavala/Zenith-Waterfall.png"
    titleOption.innerText= "Zenith Waterfalls"
    paragraphOption.innerText="Looking to visit an awesome waterfall near Mumbai during the monsoon or just a weekend road trip which is not too far away from the city then Zenith WaterFall at Khopoli is the desired destination.Khopoli to Zenith falls distance is 4 Km or 10 minutes, please note there is parking space near the Zenith Falls, but you must exercise precaution while leaving your vehicle.It was a dry morning with the sun shining down the window of my bedroom. During the rainy season in Mumbai, it is a rare visual and a much-cheered one as well. However."
   break

  
}

}
