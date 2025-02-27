# 🐼 PandaUnity - Community App

![PandaUnity Banner](https://your-image-link-here.com/banner.gif)

## 📌 Problem Statement

Students and professionals from different fields often struggle to find the right platform to ask questions, discuss topics, and collaborate. Existing platforms either cater to specific domains like programming or lack real-time interaction, making learning and knowledge-sharing inefficient.

Beyond programming, users need support in various subjects, project discussions, career guidance, skill development, and more. However, there is no dedicated space where individuals from diverse backgrounds can come together to share knowledge and help each other effectively.

This app bridges that gap by providing a **community-driven platform** where users can **connect, collaborate, and learn together** in an interactive and structured way.

---

## 🎯 Purpose of the App

The app aims to create a **collaborative space** where users can:

✅ **Join & create communities** for different topics (education, tech, health, career, etc.)
✅ **Engage in discussions** through real-time chat
✅ **Share knowledge** via Q&A forums & study resources
✅ **Receive career guidance** on internships, job opportunities, and industry trends
✅ **Foster peer learning** across multiple domains

This app **reduces isolation in learning, promotes knowledge-sharing, and encourages collaboration.**

---

## 👥 Clients & Sponsors

🔹 **Clients (Target Users):**
   - Engineering students (ECE, IT, CSE, Mechanical, etc.)
   - College communities & tech clubs
   - Aspiring developers & project teams
   - Anyone looking for a **structured learning and collaboration platform**

🔹 **Sponsors:**
   - (Currently self-funded, with future plans for sponsorships or institutional support)

---

## 📌 Current Features

🔹 **User Authentication**
   - Google login via **Clerk authentication** for a quick and simple login experience.
   - Upon successful login, users are redirected to the **Home tab**.

🔹 **Home Tab**
   - **User Profile:** Displays the username and profile picture at the top left.
   - **#CoreFeature Section:**
     - Displays an **app banner** to highlight key features.
     - Shows **Communities & Popular Communities**:
       - A list of various communities users can join.
       - A section for **popular community channels**.
   - **Community Channel Navigation:**
     - Users can click on any **community (e.g., Education, Health, Tech, etc.)**.
     - Inside a selected channel, a list of **related communities** is displayed.
     - Each community page contains:
       ✅ **Web Button** – (Feature purpose TBD)
       ✅ **Share Button** – Allows users to share the community.
       ✅ **About Section** – Provides details about the community.
       ✅ **Chat Section** – Users can:
         - **Type messages** in a text input field.
         - **Send messages**, which appear below in the chat thread.
         - **See messages from other users in real-time.**

🔹 **Profile Screen**
   - **Share App** – Allows users to share the app with others.
   - **Logout** – Provides an option to log out from the app.

---

## 🚀 Upcoming Features

🔹 **Add New Community** – Users will be able to create **custom communities** for specific topics (e.g., Health, Education, Tech).

🔹 **My Community** – Users can **view and manage** the communities they have created in one place.

🔹 **Reply Option in Chat** – Users will be able to **reply directly to specific messages**, making conversations more structured and easy to follow.

🔹 **Multimedia Sharing in Chat** – Users will be able to **share images and videos** in conversations.
   ⚠️ *Note: Due to Firebase Storage costs, this feature will be implemented later.*

🔹 **Delete Community Feature** – Users will have the ability to **delete the communities they created**, ensuring full control over their content.

---

## 📌 Why This App?

✅ **Personalized Communities** – Users can create and join topic-specific communities (Education, Coding, Electronics, Health, etc.).
✅ **Real-Time Discussions** – Live chat makes conversations **faster and more interactive**.
✅ **Beginner-Friendly** – A **supportive space** where students and professionals feel comfortable asking questions.
✅ **Covers All Topics** – Not just coding—users from all fields can **collaborate and learn**.
✅ **Built for Everyone** – Designed as a **structured, engaging, and interactive learning network**.

This app **connects people, fosters knowledge sharing, and makes learning interactive**. 🚀

---

## 🛠 Tech Stack & Functionality

✅ **Frontend** – React Native, Expo
✅ **Backend** – Firebase Firestore (for real-time data storage & retrieval)
✅ **Authentication** – Clerk (for secure and seamless login)
✅ **UI Design** – Figma

### 🔥 How Firebase Works in This App:
- Stores user profiles, messages, and community details in **Firestore**.
- Uses **real-time listeners** to update chat messages and community activity instantly.
- Provides **scalable and secure** data management.

---

## 📸 Screenshots & Prototype Link

📷 **App Screenshots** – *(Upload relevant screenshots of the app here)*
🔗 **Figma Prototype** – [Insert Figma Link Here]

---

## 📥 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-repo/pandaUnity.git
cd pandaUnity

# Install dependencies
yarn install  # or npm install

# Run the app on Expo
yarn start  # or npm start
```

---

## 📢 Contributing
We welcome contributions! If you have ideas for new features or improvements, feel free to **open an issue** or **submit a pull request**. 🚀

---

## 📜 License
This project is **open-source** under the [MIT License](LICENSE).

---

🎉 **Thank you for being a part of PandaUnity!**

![Thank You Animation](https://your-image-link-here.com/thank-you.gif)
