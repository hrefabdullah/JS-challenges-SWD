const Btn = document.querySelector("#add")
const mode = document.querySelector("#mode")
function ytVideo(cname, duration, title, views, date) {
    let viewStr
    if (views < 1000) {
        viewStr = views
    } else if (views >= 1000 & views < 1000000) {
        viewStr = Math.ceil(views / 1000) + "K"
    } else {
        viewStr = Math.ceil(views / 1000000) + "M"
    }
    let html = `
    <div class='container'>
        <div id="thumbnail">
            <div id="dur">${duration}</div>
        </div>
        <div id="content">
            <div id="title">${title}</div>
            <div id="cName">
                ${cname} <ion-icon name="checkmark-circle"></ion-icon> 
            </div>
            <div id="view-date">
                <div id="views">${viewStr}</div>
                <ion-icon id="dot" name="ellipse"></ion-icon>
                <div id="date">${date} ago</div>
            </div>
            <div id="options">
                <ion-icon id="threedots" name="ellipsis-vertical"></ion-icon>
            </div>
        </div>
    </div>
    `

    document.querySelector(".container1").innerHTML = document.querySelector(".container1").innerHTML + html
}


var count = 0
var title, cname, duration, views, date, thumbnail


Btn.addEventListener("click", function(){
    random = Math.random()
    count += 1

    
    ytVideo('Tuaha Ibn Jalil', `20:30`, `Allah se Muhabbat #${count} - YouthSeries`, `100000`, `2 Years`)
})



