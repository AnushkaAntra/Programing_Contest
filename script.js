
let array = [
    "https://images.techopedia.com/images/uploads/istock-1173805290.jpeg?w=800&h=0&mode=max&quality=70&scale=both",
    "https://www.thewomenachiever.com/wp-content/uploads/2021/12/Coding-Resources-for-Women.jpg", 
    "https://t3.ftcdn.net/jpg/03/92/74/38/360_F_392743806_ZcUdSiI7ZMinGrndZ4c3X8upA7wXx9gN.jpg", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe6-SG2vy4jvsRN7oZOm0o1e47paN_MTCuzMVnCXBFiqqqt0eSYV-hNmVWG_IGGeXXZ4A&usqp=CAU", 
    "https://www.shutterstock.com/image-photo/close-woman-hands-coding-html-260nw-1094703257.jpg", 
    "https://www.shutterstock.com/image-photo/programmer-girl-works-computer-260nw-1610721214.jpg", 
    "https://www.shutterstock.com/image-photo/young-woman-working-computer-table-260nw-753780223.jpg", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27nSHaWT3JlZ7YX3rV2UhZ3IjnlsNsNAbiC2xYaK1Lqch5v2XvVHEav7lk3Uy51Omk_o&usqp=CAU", 
    "https://media.gettyimages.com/id/1212006391/photo/computer-programmer-working-on-new-software-program.jpg?s=612x612&w=gi&k=20&c=wxLXPgamuSXPQl00qCh7jsWz9kmG5sxbC9hmQGVovAo=", 
    "https://media.gettyimages.com/id/1265176772/photo/computer-programmer-working-on-laptop.jpg?s=612x612&w=gi&k=20&c=lADzOsY4JxQrL2XWjMHKfyh6YUCi53dL72TzpviKRE0=", 
    "https://images.theconversation.com/files/479421/original/file-20220816-10908-uvh62x.jpg?ixlib=rb-1.1.0&rect=4%2C5%2C994%2C497&q=45&auto=format&w=668&h=324&fit=crop", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOqnPo9lG2k6nZoPA4djBkvDbJkDiwJTSr4TIlypo2vM4bW_FHj3L4hn28TqZnkHlAb0&usqp=CAU", 
    "https://media.istockphoto.com/id/1221204650/photo/business-can-not-wait.jpg?s=612x612&w=0&k=20&c=1ZJn_BWN-OqIlnjohELZnsUlaXsw9LsKHkUDS8mHfhY=", 
    "https://cdn.mos.cms.futurecdn.net/EdvFtgReiC7EBzjrsdAXve-320-80.jpg", 
    "https://media.istockphoto.com/id/1147195672/photo/focused-developer-coding-on-computer-monitors-working-late-in-office.jpg?s=612x612&w=0&k=20&c=R6oPQ_vkXAxCzpi4UFsN28pdU0C0LJL8JLAX-HwO90Q=", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPaWYkRfDn1p_sZLUleuPwWeU03-CpivYeQeyEpBGCX8sJane4ZWYwfcSlqnqupR5LbU&usqp=CAU"
]
function random(max, min){
    return Math.floor(Math.random()*(max-min+1)+min)
}
let a
let url = "https://kontests.net/api/v1/all"
let p = fetch(url)
p.then((response)=>{
    return response.json()
}).then((response)=>{
    console.log(response)
    let ihtml = ""
    for(i in response){
        console.log(response[i])
        ihtml += `
            <div class="card" style="width: 22rem; margin:10px;">
                   <img src="${array[a = random(0,15)]}" class="card-img-top" alt="...">
                   <div class="card-body">
                      <h5 class="card-title">Contest: ${response[i].name}</h5>
                      <p class="card-text">About contest: </p>
                      <p class="card-text">Start-time: ${response[i].start_time}</p>
                      <p class="card-text">End-time: ${response[i].end_time}</p>
                      <a href="${response[i].url}" class="btn btn-primary">Visit Here</a>
                  </div>
            </div>  `
    }
    cardContainer.innerHTML = ihtml
})


