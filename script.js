const roles = {
	admin: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShN0nuLT7HIpIANuDi6wbMKpeuCgZsl2PtAA&usqp=CAU",
	student: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/130-man-student-2.svg/640px-130-man-student-2.svg.png",
	lector: "https://www.svgrepo.com/show/3848/hannibal-lecter.svg"
};

const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsLBmjRw7arQq7If2sHf_5f71bG5_0aHz4OQ&usqp=CAU",
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
		img: "https://i.kym-cdn.com/photos/images/newsfeed/002/228/835/796.jpg",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBnn2VB5Jc7ZH4GjO09HQG5ktTPfEH9UPlgg&usqp=CAU",
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
		img: "https://cdn-icons-png.flaticon.com/256/7603/7603200.png",
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
		img: "https://cdn-icons-png.flaticon.com/256/6028/6028614.png",
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
		img: "https://img.freepik.com/premium-vector/basset-hound-dog-face-isolated-white-background-svg-vector-illustration_793674-28.jpg?size=626&ext=jpg",
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
]

class User {
	constructor(name, age, img, role, courses) {
		this.name = name;
		this.age = age;
		this.img = img;
		this.role = role;
		this.courses = courses;
	}

	getMarkGradation(mark) {
		let result = '';
		for (let key in gradation) {
			if (mark <= key) {
				result = gradation[key];
				break;
			}
		}
		return result;
	}

	render() {
		const user = document.createElement('div');
		user.classList.add('user');

		const userInfo = document.createElement('div');
		userInfo.classList.add('user__info');

		user.append(userInfo)

		const userInfoData = document.createElement('div');
		userInfoData.classList.add('user__info--data');

		userInfo.append(userInfoData);

		const userImg = document.createElement('img');
		userImg.setAttribute('src', this.img);
		userImg.setAttribute('alt', this.name);
		userImg.setAttribute('height', '50');

		userInfoData.append(userImg);

		const userNaming = document.createElement('div');
		userNaming.classList.add('user__naming');

		userInfoData.append(userNaming);

		const userNameWrap = document.createElement('p');
		userNameWrap.innerText = 'Name: ';
		const userName = document.createElement('b');
		userName.innerText = this.name;

		userNameWrap.append(userName);

		const userAgeWrap = document.createElement('p');
		userAgeWrap.innerText = 'Age: ';
		const userAge = document.createElement('b');
		userAge.innerText = this.age;

		userAgeWrap.append(userAge);

		userNaming.append(userNameWrap, userAgeWrap);

		const userInfoRole = document.createElement('div');
		userInfoRole.classList.add('user__info--role');

		if (this.role) {
			userInfoRole.classList.add(this.role)
			const userRoleImg = document.createElement('img');
			userRoleImg.setAttribute('src', roles[this.role]);
			userRoleImg.setAttribute('alt', this.role);
			userRoleImg.setAttribute('height', '25');

			userInfoRole.append(userRoleImg);

			const userRoleString = document.createElement('p');
			userRoleString.textContent = this.role;

			userInfoRole.append(userRoleString);
		}

		userInfo.append(userInfoRole);

		if (this.courses) {
			this.renderCourses(user);
		}

		return user;
	}

	renderCourses(user) {
		const userCourses = document.createElement('div');
		userCourses.classList.add('user__courses');

		this.courses.forEach(course => {
			const userCourse = document.createElement('p');
			userCourse.classList.add('user__courses--course');
			userCourse.classList.add(this.role);
			userCourse.textContent = course.title;

			if (course.mark) {
				const userCourseTitle = document.createElement('span');
				this.getMarkGradation(course.mark)
				userCourseTitle.classList.add(this.getMarkGradation(course.mark));
				userCourseTitle.textContent = this.getMarkGradation(course.mark)
				userCourse.append(userCourseTitle);
				userCourses.append(userCourse);
			}
			user.append(userCourses);
		});


	}
}

class Student extends User {
	constructor(name, age, img, role, courses) {
		super(name, age, img, role, courses);
	}
}

class Lector extends User {
	constructor(name, age, img, role, courses) {
		super(name, age, img, role, courses);
	}
	getScoreGradation(score) {
		let result = '';
		for (let key in gradation) {
			if (score <= key) {
				result = gradation[key];
				break;
			}
		}
		return result;
	}

	renderCourses(user) {
		const userCourses = document.createElement('div');
		userCourses.classList.add('user__courses');
		userCourses.classList.add('admin--info');

		this.courses.forEach(course => {
			const userCourse = document.createElement('div');
			userCourse.classList.add('user__courses--course');
			userCourse.classList.add(this.role);

			const userCourseTitleWrap = document.createElement('p');
			userCourseTitleWrap.innerText = 'Title: ';
			const userCourseTitle = document.createElement('b');
			userCourseTitle.textContent = course.title;
			userCourseTitleWrap.append(userCourseTitle);
			userCourse.append(userCourseTitleWrap);

			const userCourseScoreWrap = document.createElement('p');
			userCourseScoreWrap.innerText = 'Lector\'s score: ';
			const userCourseScore = document.createElement('span');
			userCourseScore.classList.add(this.getScoreGradation(course.score));
			userCourseScore.textContent = this.getScoreGradation(course.score);
			userCourseScoreWrap.append(userCourseScore);
			userCourse.append(userCourseScoreWrap);

			const userCourseLectorWrap = document.createElement('p');
			userCourseLectorWrap.innerText = 'Average student\'s score: ';
			const userCourseLector = document.createElement('span');
			userCourseLector.classList.add(this.getScoreGradation(course.studentsScore));
			userCourseLector.textContent = this.getScoreGradation(course.studentsScore);
			userCourseLectorWrap.append(userCourseLector);
			userCourse.append(userCourseLectorWrap);

			userCourses.append(userCourse);
			user.append(userCourses);
		});

		return userCourses;
	}
}

class Admin extends User {
	constructor(name, age, img, role, courses) {
		super(name, age, img, role, courses);
	}
	getScoreGradation(score) {
		let result = '';
		for (let key in gradation) {
			if (score <= key) {
				result = gradation[key];
				break;
			}
		}
		return result;
	}

	renderCourses(user) {
		const userCourses = document.createElement('div');
		userCourses.classList.add('user__courses');
		userCourses.classList.add('admin--info');

		this.courses.forEach(course => {
			const userCourse = document.createElement('div');
			userCourse.classList.add('user__courses--course');
			userCourse.classList.add(this.role);

			const userCourseTitleWrap = document.createElement('p');
			userCourseTitleWrap.innerText = 'Title: ';
			const userCourseTitle = document.createElement('b');
			userCourseTitle.textContent = course.title;
			userCourseTitleWrap.append(userCourseTitle);
			userCourse.append(userCourseTitleWrap);

			const userCourseScoreWrap = document.createElement('p');
			userCourseScoreWrap.innerText = 'Admin\'s score: ';
			const userCourseScore = document.createElement('span');
			userCourseScore.classList.add(this.getScoreGradation(course.score));
			userCourseScore.textContent = this.getScoreGradation(course.score);
			userCourseScoreWrap.append(userCourseScore);
			userCourse.append(userCourseScoreWrap);

			const userCourseLectorWrap = document.createElement('p');
			userCourseLectorWrap.innerText = 'Lector: ';
			const userCourseLector = document.createElement('b');
			userCourseLector.textContent = course.lector;
			userCourseLectorWrap.append(userCourseLector);
			userCourse.append(userCourseLectorWrap);

			userCourses.append(userCourse);
			user.append(userCourses);
		});

		return userCourses;
	}
}

let container = document.querySelector('.users');

users.forEach(user => {
	let newUser;

	switch (user.role) {
		case 'student':
			newUser = new Student(user.name, user.age, user.img, user.role, user.courses);
			break;
		case 'lector':
			newUser = new Lector(user.name, user.age, user.img, user.role, user.courses);
			break;
		case 'admin':
			newUser = new Admin(user.name, user.age, user.img, user.role, user.courses);
			break;
	}
	container.append(newUser.render());
});