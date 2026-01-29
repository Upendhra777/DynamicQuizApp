# 🧠 Dynamic Quiz Application with Timer & Result Analysis

A responsive **Dynamic Quiz Application** built using **HTML, CSS, and JavaScript**.  
This project allows users to take quizzes based on **category** and **difficulty level**, tracks **time per question**, and shows a **detailed performance analysis** at the end — all without using any backend or database.

---

## 🚀 Features

- 📚 **Multiple Categories**
  - Math
  - General Knowledge
  - Science

- 🎯 **Difficulty Levels**
  - Easy
  - Medium
  - Hard

- ⏳ **Countdown Timer**
  - Each question has a 10-second timer
  - Automatically moves to the next question when time runs out

- 🧩 **Dynamic Question Loading**
  - Questions and options are loaded dynamically using JavaScript
  - One question displayed at a time

- 📊 **Result Analysis**
  - Total correct and incorrect answers
  - Percentage score
  - Time spent on each question
  - Pie chart visualization of correct vs wrong answers

- 📱 **Responsive Design**
  - Works smoothly on desktop, tablet, and mobile devices

---

## 🛠️ Technologies Used

- **HTML5** – Structure of the application  
- **CSS3** – Styling and responsive layout  
- **JavaScript (Vanilla JS)** – Quiz logic, timer, score calculation, and charts  
- **Bootstrap** – Basic layout support and responsiveness  
- **Canvas API** – For drawing score visualization charts  

---

## ⚙️ How the Application Works

1. User selects a **quiz category** and **difficulty level**
2. Quiz starts and displays:
   - One question at a time
   - Multiple options
   - A countdown timer (10 seconds)
3. User selects an answer or waits for the timer to expire
4. The app records:
   - Selected answers
   - Time spent on each question
5. After the quiz ends:
   - Final score is calculated
   - Time spent per question is displayed
   - A pie chart shows correct vs incorrect answers

---

## 📈 Result Visualization

- **Score Summary** (Correct answers & percentage)
- **Response Time List** for each question
- **Pie Chart**
  - 🟢 Green: Correct answers  
  - 🔴 Red: Incorrect answers  

All calculations and data handling are done **entirely in JavaScript**.

---

## 🧪 Testing Approach (Frugal Testing)

- No backend or database used
- All questions, answers, and results are stored in JavaScript arrays
- Timer auto-submission tested using edge cases (0 seconds)
- Responsive layout tested on different screen sizes

---

## ▶️ How to Run the Project

1. Clone or download the repository
2. Open `index.html` in any modern web browser
3. Select category & difficulty
4. Start the quiz 🎉

_No installation or setup required_

---

## 📌 Future Enhancements (Optional)

- Add more questions and categories
- Add sound effects or animations
- Store high scores using localStorage
- Add question navigation or review mode

---

## 👨‍💻 Author

**Upendhra**  
Computer Science Student | FullStack Developer  
Passionate about building interactive web applications 🚀
