const container = document.querySelector("#container");
const input = document.querySelector("#input");
const title = document.querySelector("#title");
const date = document.querySelector("#date");
const agenda = document.querySelector("#agenda");
const hasil = document.querySelector("#hasil");
const btnSimpan = document.querySelector("#btnSimpan");

let dailyTask = [];
const render = (item) => {
    return `
        <div class="title">
        <p class="getTitle">${item.title}</p>
        </div>
        <div class="card">
            <span class="hapus">X</span>   
            <p>${item.date}</p>
            <p>${item.agenda}</p>
        </div>
    `
}
const addDailyTask = (item) => {
        hasil.innerHTML += render(item)
}

// const hapusData = (title_delete) =>{
//     const data = JSON.parse(localStorage.getItem("dailyTask"));
//     data.forEach(datas => {
//         if (title_delete == datas.title)
//         {

//         }
//     });
//     localStorage.removeItem();
// }

const hapusData = (item) =>{
    // localStorage.removeItem(item.valueOf.length)
    // console.log(item.valueOf.length)
    for (let i = 0; i < dailyTask.length; i++) {
        const element = dailyTask[i];
        const index = element.valueOf.length
    }
}


const kosong = () => {
    return`
        <p class="kosong">Daily Task Kosong</p>
    `

}

    btnSimpan.addEventListener('click', () => {
        dailyTask.push({
            title: title.value,
            date: date.value,
            agenda: agenda.value
        })

    localStorage.setItem("dailyTask", JSON.stringify(dailyTask))

    addDailyTask(
        title.value,
        date.value,
        agenda.value
    )

    title.value= "",
    date.value= "",
    agenda.value= "";
    location.reload();
})

if(localStorage.getItem("dailyTask")){
    dailyTask = JSON.parse(localStorage.getItem("dailyTask"));
    dailyTask.forEach(item => {
        addDailyTask(item);
        hapusData(item)
    });
    console.log('data==>',dailyTask)  
}else {
    hasil.innerHTML += kosong()
}
const hapus = document.querySelector('.hapus');
// const getTitle = document.querySelector('.getTitle');
hapus.addEventListener('click', () =>{
    // hapusData(index)
    console.log(hapusData.prototype)
    // console.log(getTitle.innerHTML)
    // location.reload();
})