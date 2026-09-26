# FitLog

FitLog is a modern and responsive workout library and planning application built for people who want a simple way to discover workouts, organize their daily training plan, and save exercises for later.

The application provides a dark, focused gym-style interface where users can browse workouts, view detailed exercise information, create a daily plan, track workout statistics, and manage saved workouts.

## 🚀 Live Project

**Live Demo:** https://fitlog-tawny-two.vercel.app/

## 📦 GitHub Repository

**GitHub Repository:** https://github.com/mainulislamrabby/fitlog

---

## 🛠️ Technologies Used

- **Next.js** – React framework for building the application
- **React** – UI development
- **TypeScript** – Type-safe development
- **Tailwind CSS** – Responsive styling
- **DaisyUI** – UI components
- **React Icons** – Interface icons
- **React Toastify** – Toast notifications
- **REST API** – Workout data
- **Vercel** – Deployment

---

## ✨ Key Features

### 1. Workout Library

Browse the complete workout library fetched from the API. Each workout card displays:

- Workout image
- Muscle group/category tags
- Workout name
- Equipment
- Duration
- Calories burned
- Rating

Users can click any workout to view its complete details.

### 2. Workout Details

Every workout has a dedicated details page containing:

- Workout image
- Description
- Muscle group tags
- Equipment
- Difficulty
- Sets and reps
- Duration
- Calories
- Rating
- Step-by-step instructions

Users can add the workout to today's plan or save it for later.

### 3. Today's Workout Plan

Users can create a daily workout plan by adding workouts from the library.

- Maximum of **5 workouts** can be added
- Duplicate workouts cannot be added
- Plan counter updates automatically
- Users can remove workouts
- Users can mark workouts as completed
- Workout statistics update automatically

### 4. Saved Workouts

Users can save workouts for later and access them from the **Saved** tab.

Saved workouts can also be removed when they are no longer needed.

### 5. Sort Workouts

The My Plan list can be sorted using:

- Duration
- Calories
- Rating

The default sorting option is Duration.

### 6. Workout Statistics

The My Plan page provides a live summary of:

- Total Exercises
- Total Minutes
- Total Calories

The statistics update when workouts are added or removed.

### 7. Responsive Design

FitLog is designed to work across:

- Mobile devices
- Tablets
- Desktop screens

The layout, navigation, workout grid, hero section, and plan cards adapt to different screen sizes.

### 8. Toast Notifications

Users receive toast notifications when performing important actions such as:

- Adding a workout to today's plan
- Saving a workout
- Removing a workout
- Marking a workout as done
- Attempting to add a duplicate workout
- Reaching the 5-workout plan limit

---

## 📊 My Plan

The My Plan page contains two tabs:

### Today's Plan

Displays workouts selected for the current day's training session.

Each workout includes:

- Workout thumbnail
- Workout name
- Equipment
- Duration
- Calories
- Rating
- View Details
- Mark as Done
- Remove

### Saved

Displays workouts that the user has saved for later.

---

## 🧭 Navigation

The application includes:

- **Workout** – Workout library
- **My Plan** – Daily plan and saved workouts
- **Plan Counter** – Shows the number of workouts in today's plan
- **Saved Counter** – Shows the number of saved workouts

The active navigation item is highlighted.

---

## 📱 Responsive Layout

FitLog follows a responsive design approach:

- **Mobile:** Single-column workout layout with mobile navigation
- **Tablet:** Two-column workout layout
- **Desktop:** Three-column workout library layout

---

## ⚠️ Workout Plan Limit

Today's Plan supports a maximum of **5 workouts**.

Once the plan contains five workouts. If the user tries to add another workout, a toast notification informs them:

> "You can only add 5 workouts to today's plan!"

The user can add another workout after removing or marking a workout as done.

---

## 🔔 Error & Loading Handling

The application includes:

- Loading state while workout data is being fetched
- Custom 404 page for invalid routes
- Toast notifications for user actions
- API error handling
- Empty states when no workouts are available

---