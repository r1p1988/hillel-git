const ROOMS = [
    {
        title: `Green`,
        days: [`Monday`, `Tuesday`, `Wednesday`],
        hours: {
            start: 10,
            end: 18
        }
    },
    {
        title: `Red`,
        days: [`Wednesday`, `Thursday`, `Friday`],
        hours: {
            start: 12,
            end: 19
        }
    }
];

const PARTICIPANTS = [`Jack`, `Taras`, `Volodymyr`, `Olena`];


let meetRoom = document.querySelector("#meetRoom");
let meetDay = document.querySelector("#meetDay");
let meetParticipiants = document.querySelector("#meetParticipiants");
let meetHour = document.querySelector("#meetHour");
let calendars = document.querySelector("#calendars");
let meetTitle = document.querySelector("#meetTitle");


const renderParticipiants = () => {
    meetParticipiants.innerHTML = PARTICIPANTS.map(item => `<option value="${item}">${item}</option>`).join(``);
}


const renderRoom = () => {
    meetRoom.innerHTML = ROOMS.map(item => `<option value="${item.title}">${item.title}</option>`).join(``);
}

const renderDaysRoom = (room) => {
    let roomInfo = ROOMS.find(item => item.title === room);
    meetDay.innerHTML = roomInfo.days.map(item => `<option value="${item}">${item}</option>`).join(``);
    
}

const getRoomHours = obj => {
    let startHour = obj.start;
    let endHour = obj.end;
    let hours = [];

    for (; startHour <= endHour; startHour++){
        hours.push(startHour);
    }
    return hours;
}

const renderHoursRoom = (room) => {
    let roomInfo = ROOMS.find(item => item.title === room);
   let hours = getRoomHours(roomInfo.hours);
    meetHour.innerHTML = hours.map(item => `<option value="${item}">${item}:00</option>`).join(``);
    
}

renderRoom();
renderDaysRoom(meetRoom.value);
renderHoursRoom(meetRoom.value);
renderParticipiants();


meetRoom.addEventListener("change", e => {
    renderDaysRoom(e.target.value);
    renderHoursRoom(e.target.value);
});


const renderTR = (room) => {
    let TR = getRoomHours(room.hours)
    .map(item => {
        return `<tr>
        <td>${item}:00</td>
        ${room.days
            .map(day => `<td data-hour="${item}" data-day="${day}"></td>`)
            .join(``)
        }
        </tr>`;
    }).join(``);
    return `<tbody>${TR}</tbody>`;
}

const renderThead = data => {
    return `<thead>
        <tr>
            <th></th>
            ${data.map(item => `<th>${item}</th>`).join(``)}
        </tr>
    </thead>`;
}


const renderTable = (room) => {
    return `<table id="room${room.title}" class="room__calendar">
    <caption>Calendar for ${room.title} room</caption>
    ${renderThead(room.days)}
    ${renderTR(room)}
    </table>`
};


const renderCalendars = () => {
    return ROOMS
        .map(room => renderTable(room))
        .join(``);
}


meetForm.addEventListener("submit", event => {
    event.preventDefault();

    // let participiants = [];
    // let selectedOptions = [...meetParticipiants.selectedOptions];
    // selectedOptions.map(option => participiants.push(option.value));

    let meet = {
        title: meetTitle.value,
        room: meetRoom.value,
        day: meetDay.value,
        hour: meetHour.value,
        // meet.participiants = participiants;
        participiants: [...meetParticipiants.selectedOptions].map(item => item.value)
    };

    renderMeet(meet);
})

const renderMeet = meet => {
    let div = document.createElement("div");
    div.className = "meet";
    div.innerHTML = `<h3>${meet.title}</h3>
    <p>Participiants: ${meet.participiants.join(`, `)}</p>`;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `Delete meet`;
    div.append(deleteBtn);


    deleteBtn.addEventListener("click", () => {
        div.remove();
    });
    

    let td = document.querySelector(`#room${meet.room} td[data-hour="${meet.hour}"][data-day="${meet.day}"]`);
    td.append(div);


}

calendars.innerHTML = renderCalendars();