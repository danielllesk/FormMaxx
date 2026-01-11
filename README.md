**FormMaxx**

FormMaxx is a workout form analysis web application that allows users to upload exercise videos and receive AI-generated feedback on their technique. The application is designed to help users improve exercise form and reduce injury risk through automated analysis.

The project uses a React.js frontend and a Python Flask backend, with exercise analysis powered by the Gemini API.

Overview

FormMaxx enables users to:

Select a workout from a predefined exercise library

Upload a video performing the selected exercise

Receive structured feedback generated through AI-based analysis

The system combines exercise metadata with user-submitted video input to provide exercise-specific feedback.

Tech Stack
Frontend

React.js

React Router

Fetch API

Backend

Python

Flask

AI Analysis

Gemini API for multimodal analysis of exercise form

How It Works

The user selects an exercise in the React frontend.

The user uploads a video demonstrating the exercise.

The frontend sends the video along with exercise details to the Flask backend.

The backend processes the request and sends the data to the Gemini API.

Gemini analyzes the exercise form and returns feedback.

The backend forwards the analysis results to the frontend for display.

Purpose

FormMaxx was developed to provide accessible, intelligent workout feedback without requiring a personal trainer. By leveraging AI-driven video analysis, the application helps users better understand their form and make targeted improvements.
