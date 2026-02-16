Monetra — Professional Financial Dashboard:::
Monetra is a high-performance MERN stack application designed for personal wealth management. It features a cinematic, high-visibility dashboard that provides real-time tracking of income and expenses with a focus on professional aesthetics and localized data.


Key Features:
Optimized "Card" Aesthetic: 
A perfectly balanced 1000px wide-card layout that ensures a premium feel on all desktop screens.


Indian Market Localization: 
Fully localized for the Indian context, featuring automatic ₹ symbol integration and Indian numbering system formatting (e.g., ₹1,50,000.00).


High-Visibility Analytics: 
Large-scale typography (up to 5rem) for balance and totals, ensuring your financial status is readable at a glance.


Dual-Column History:
A structured grid that separates income and expenses into color-coded columns for rapid visual scanning.


Professional Input Logic:
A horizontal transaction form at the base of the dashboard that uses the full width for a clean, non-congested user experience.


Technical Stack:
Frontend:
React.js with Context API for robust global state management.


Backend:
Node.js and Express.js providing a scalable RESTful API.


Database:
MongoDB with Mongoose for structured data modeling.


Typography:
"Plus Jakarta Sans" for a modern, tech-focused appearance.


Utilities: 
Custom formatCurrency utility leveraging toLocaleString('en-IN') for regional compliance.


Branding & UI Design
The branding is anchored by the Monetra Slice Logo—a minimalist dark navy circle with a vibrant orange slice accent, representing financial growth and precision.


Bold Feedback:
Total income is rendered in Extra-Bold Green, while total spending is in Extra-Bold Red to provide instant emotional cues regarding financial health.

📥 Installation
Clone the Repo:
git clone https://github.com/rb-shivamyadav/monetra.git


Install Frontend & Backend Dependencies:
npm install
cd client && npm install


Environment Variables:
Create a .env file in the root directory and add your MONGO_URI.


Launch the Dashboard:
npm run dev


Developed By:
Shivam Yadav
B.Tech in Computer Science Engineering, Mizoram University
B.S. in Data Science and Applications, IIT Madras
LinkedIn: https://www.linkedin.com/in/rb-shivamyadav/

Interactive UI: Transaction cards feature subtle hover-lift animations and shadow transitions to provide a premium SaaS feel.

Header Balance: Branding is pushed to the far left with professional subtitles on the far right to maximize the visual field.
