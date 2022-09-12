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
        <p>${item.title}</p>
        </div>
        <div class="card">
            <span>X</span>   
            <p>${item.date}</p>
            <li>${item.title}</li>
        </div>
    `
}
const addDailyTask = (item) => {
        hasil.innerHTML += render(item)
}



const kosong = () => {
    const pKosong = document.createElement('p');
    pKosong.innerHTML = 'Daily Task Kosong';
    hasil.appendChild(pKosong);
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
    });
    console.log(dailyTask)  
}else {
    kosong();
}




// const div = document.createElement('div');
// const tanggal = document.createElement('p');
// const list = document.createElement('p');
// tanggal.innerHTML = '20 feb 2002';
// list.innerHTML = '20 feb 2002';
// div.appendChild(tanggal);
// div.appendChild(list);
// hasil.appendChild(div)
