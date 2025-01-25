# Congestion-Control-Simulation
Project Overview: Network Congestion Control Simulation

website link:https://congestion-control-simulation.netlify.app/

This project is a web-based simulation tool that demonstrates key concepts of network congestion control in TCP. The goal is to provide an interactive platform for students and professionals to understand the impact of various parameters such as bandwidth and packet loss on network performance.


---

Features

1. Input Parameters:

Bandwidth (Mbps): Users can specify the available bandwidth to simulate network capacity.

Packet Loss (%): Users can simulate different packet loss rates to observe its effect on congestion control.



2. Dynamic Output:

Real-time calculation of congestion window, RTT (Round Trip Time), and total packets sent during the simulation.

Results displayed in a user-friendly format.



3. Graphical Visualization:

A dynamic graph plots the relationship between congestion window and RTT for better understanding.



4. Result Download:

Users can download the simulation results as a JSON file for offline analysis.



5. Responsive Design:

The user interface is designed to work seamlessly on both mobile and desktop browsers.





---

Technologies Used

HTML: Structure of the web page.

CSS: Styling and responsive design.

JavaScript: Logic for simulations, dynamic updates, and interactive features.

Canvas API: For graphical representation of simulation data.



---

How It Works

1. Input Simulation Parameters:

Users enter values for bandwidth and packet loss.



2. Run Simulation:

The application calculates congestion window, RTT, and total packets based on input.

These values are displayed on the screen and plotted on a graph.



3. Download Results:

Simulation results are saved as a JSON file, allowing users to analyze the data later.





---

Enhancement Opportunities

1. Add More Parameters:

Include parameters like latency, jitter, or packet size for deeper analysis.



2. Real-Time Animation:

Create animated graphs that update dynamically during the simulation.



3. Extend Protocol Support:

Simulate additional congestion control protocols like RED, REM, or ECN.



4. User Accounts:

Allow users to save multiple simulations under an account for historical analysis.



5. Mobile Optimization:

Further optimize UI for smaller screens to enhance accessibility.





---

Usage

This project is perfect for:

Students: To learn the principles of congestion control in TCP.

Educators: As a teaching tool for network-related courses.

Researchers: For quick testing of congestion control algorithms.


By simulating real-world conditions, users can better understand how congestion control mechanisms maintain stable and efficient network performance.
