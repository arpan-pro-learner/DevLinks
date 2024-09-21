# Link Sharing App - Devlinks

This project is a simple link-sharing application built with Next.js. Users can create, edit, delete, and preview links with drag-and-drop functionality. The app has a fully responsive design and can be viewed across different screen sizes.

## Components Overview

### 1. **Footer.jsx**
   - Contains a `Save` button that allows users to save their changes. The placement and inclusion of this button was an assumption based on the functionality of the app.
   
### 2. **Header.jsx**
   - Displays the main header of the application. It may include navigation or a title based on the design of the app.
   
### 3. **LinkEditor.jsx**
   - This component allows users to input or edit links. It contains fields for link URL and title, with validation to ensure the URL pattern is correct.
   
### 4. **LinkItem.jsx**
   - Represents individual link items in the list. It contains logic for displaying the links, their titles, and potentially a preview.
   
### 5. **MobilePreview.jsx**
   - Provides a preview of how the links will appear on a mobile device. This helps ensure the user experience is optimized for smaller screens.
   
### 6. **ProfileDetails.jsx**
   - Displays the user’s profile details. It could include fields like profile picture, username, and bio.

## Assumptions and Design Decisions

- **Save Button**: The decision to add a `Save` button in the `Footer.jsx` was made based on the need for users to save their changes easily.
- **Preview Button**: Similarly, the addition of a preview functionality was based on the assumption that users would want to see how their links appear before finalizing them.


## How to Run the Project Locally

### 1. Clone the Repository
```bash
git clone https://github.com/arpan-pro-learner/DevLinks.git

cd Devlinks

## How to Run the Project Locally

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/link-sharing-app.git
cd link-sharing-app


## 2. Install Dependencies
Make sure you have Node.js installed, then run:

bash
Copy code
npm install


## 3. Start the Development Server
To run the project locally, use:

bash
Copy code
npm run dev
The application will be available at http://localhost:3000.

## 4. Build for Production
To create a production build, use:

bash
Copy code
npm run build

## 5. Preview Production Build
You can preview the production build locally using:

bash
Copy code
npm run start
```
## Technologies Used

- **Next.js**: Framework for server-rendered React applications.
- **Tailwind CSS**: Utility-first CSS framework used for styling the app.
- **React**: JavaScript library for building user interfaces.
- **HTML/CSS**: Semantic HTML and modern CSS techniques were used to structure and style the components.

## Update 2.0 - Devlinks

- **React Dnd(Drag & Drop)**: As it was main requirment i have taken care of it and implemented it this time 
- **Error Messages**: Added react toastify toast messages in place of boring alerts
- **Fix App Layout**: Fixed the layout and made it as close as figma design
- **Added Profile and Preview**: As it was not in the design but i moved one step ahead and implemented that by myself
- **Added Favicon**: As it was a small step but to take care of the design i added the favicon to the project so it look more on point
- **Link #number fixed**: As per the design i have implemented the link numbers to be appear in specific order 
- **Added Proper Responsiveness**: As per the layout and design tried my best to implent it as it was shown

#### Thanks for Checking out this project 👍

![thank you gif](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXVobHR0NHlkaWptZjRjZHduajRtMTg4OWY4ZjRzNXR5d2JjdWplYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uWlpPGquhGZNFzY90z/giphy.gif)

 **Linkedin**: [Lets Connect](https://www.linkedin.com/in/webdevarpan/) 