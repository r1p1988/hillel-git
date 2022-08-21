const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

function pointsInfo(item){
    let points;
        if (item <= 20) {
            points = gradation["20"]
        } else if (item <= 55) {
            points = gradation["55"]
        } else if (item <= 85) {
            points = gradation["85"]
		} else {
            points = gradation["100"]
        }
        return points;
}

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];

const ROLE_TYPES = {
	student: user => new Student(user),
	admin: user => new Admin(user),
	lector: user => new Lector(user)
}

class User {
	constructor(obj) {
		Object.assign(this, obj);
	}

	render() {
	return	`
<div class="user">
            <div class="user__info">
                <div class="user__info--data">
                    <img src="images/users/${this.img}.png" alt="${this.name}" height="50">
                    <div class="user__naming">
                        <p>Name: <b>${this.name}</b></p>
                        <p>Age: <b>${this.age}</b></p>
                    </div>
                </div>
                <div class="user__info--role student">
                    <img src="images/roles/${this.role}.png" alt="${this.role}" height="25">
                    <p>${this.role}</p>
                </div>
            </div>
			${this.courses ? this.renderCourses() : ``}
        </div>
`
	}

	renderCourses() {
        let newCours =[]
		if (this.courses) this.courses
			.map(item => newCours.push(`<p class="user__courses--course ${this.role}"> ${item.title} <span class="${pointsInfo(item.mark)}"> ${pointsInfo(item.mark)}</span ></p>`))
			.join(",");
        return `<div class="user__courses"> ${newCours.join("")}</div>`;
    }

}

class Student extends User{
    constructor(obj){
		super(obj);
    }
}

class Lector extends User{
    constructor(obj){
		super(obj);
	}
	renderCourses() {
		let newCours =[]
		if (this.courses) this.courses
			.map(item => {
				newCours.push(`
				<div class="user__courses--course ${this.role}">
<p>Title: <b>${item.title}</b></p>
<p>Lector's score: <span class="${pointsInfo(item.score)}">${pointsInfo(item.score)}</span></p>
<p>Average student's score: <span class="${pointsInfo(item.score)}">${pointsInfo(item.score)}</span></p></div>`)
			})
        return `<div class="user__courses admin--info"> ${newCours.join("")}</div>`
	}
}

class Admin extends User{
    constructor(obj){
		super(obj);
	}
	renderCourses() {
		let newCours =[]
		if (this.courses) this.courses
			.map(item => {
				newCours.push(`
				<div class="user__courses--course ${this.role}">
<p>Title: <b>${item.title}</b></p>
<p>Admin's score: <span class="${pointsInfo(item.score)}">${pointsInfo(item.score)}</span></p>
<p>Lector: <b>${item.lector}</b></p></div>`)
			})
        return `<div class="user__courses ${this.role}--info"> ${newCours.join("")}</div>`
	}
}

let usersClass = users
	.map(user => {
		return ROLE_TYPES[user.role] ? ROLE_TYPES[user.role](user) : new User(user);
	})
	.map(user => user.render())
	.join(``)

	
document.write(`<div class="users">${usersClass}</div>`)