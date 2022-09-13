const container = document.querySelector("#container");
const input = document.querySelector("#input");
const title = document.querySelector("#title");
const date = document.querySelector("#date");
const agenda = document.querySelector("#agenda");
const hasil = document.querySelector("#hasil");
const btnSimpan = document.querySelector("#btnSimpan");

let dailyTask = [];
const render = (item, i) => {
    return `
        <div class="title">
        <p>${item.title}</p>
        </div>
        <div class="card">
            <span id="${i}" class="hapus">X</span>   
            <p>${item.date}</p>
            <p>${item.agenda}</p>
        </div>
    `
}
const addDailyTask = (item, i) => {
        hasil.innerHTML += render(item, i)
}

const hapusData = (id) =>{
    var tmp = JSON.parse(localStorage.getItem("dailyTask"));
    localStorage.clear();
    tmp.splice(id, 1);
    
    localStorage.setItem("dailyTask", JSON.stringify(tmp));

    if(localStorage.getItem("dailyTask")){
        dailyTask = JSON.parse(localStorage.getItem("dailyTask"));
        i = 0;
        dailyTask.forEach(item => {
            addDailyTask(item, i);
            i++;
        });
    }else {
        hasil.innerHTML += kosong()
    }

    title.value= "",
    date.value= "",
    agenda.value= "";
    location.reload();
}


const kosong = () => {
    return`
        <p class="kosong">Daily Task Kosong</p>
    `

}

btnSimpan.addEventListener('click', () => {
        dailyTask.push({
            idDailyTask: dailyTask.length,
            title: title.value,
            date: date.value,
            agenda: agenda.value
        })

    localStorage.setItem("dailyTask", JSON.stringify(dailyTask))

    addDailyTask(
        title.value,
        date.value,
        agenda.value,
        idDailyTask = i
    )

    title.value= "",
    date.value= "",
    agenda.value= "";
    location.reload();
})

if(localStorage.getItem("dailyTask")){
    dailyTask = JSON.parse(localStorage.getItem("dailyTask"));
    i = 0;
    dailyTask.forEach(item => {
        addDailyTask(item, i);
        i++;
    });
}else {
    hasil.innerHTML += kosong()
}
const hapusBtn = document.getElementsByClassName('hapus');
for(var i = 0; i < hapusBtn.length; i++) {
  (function(index) {
    hapusBtn[index].addEventListener("click", function() {
       hapusData(index);
     })
  })(i);
}
