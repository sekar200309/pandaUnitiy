<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PandaUnity - Community App</title>
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
            color: #333;
        }
        .container {
            max-width: 1000px;
            margin: auto;
            padding: 20px;
            text-align: center;
        }
        h1 {
            color: #ff5733;
            font-size: 3rem;
            animation: fadeIn 1.5s ease-in-out;
        }
        .feature {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 30px;
            margin: 20px 0;
            border-radius: 10px;
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
        }
        .feature:hover {
            transform: scale(1.02);
        }
        .feature img {
            width: 100px;
            height: auto;
            animation: popIn 1.5s ease-in-out;
        }
        .btn {
            display: inline-block;
            padding: 15px 30px;
            font-size: 1.2rem;
            color: white;
            background: linear-gradient(135deg, #ff5733, #ff914d);
            text-decoration: none;
            border-radius: 8px;
            transition: background 0.3s;
        }
        .btn:hover {
            background: linear-gradient(135deg, #ff914d, #ff5733);
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🐼 PandaUnity - Community App</h1>
        <img src="https://your-image-link-here.com/banner.svg" width="80%">
        <p><strong>Connecting students & professionals through knowledge sharing.</strong></p>
        
        <div class="feature">
            <div>
                <h2>📌 Problem Statement</h2>
                <p>Finding the right knowledge-sharing platform can be difficult. PandaUnity bridges this gap with a real-time collaborative environment.</p>
            </div>
            <img src="https://your-image-link-here.com/problem.svg">
        </div>
        
        <div class="feature">
            <div>
                <h2>🎯 Purpose</h2>
                <p>Join & create communities, engage in discussions, share knowledge, and get career guidance.</p>
            </div>
            <img src="https://your-image-link-here.com/purpose.svg">
        </div>
        
        <div class="feature">
            <div>
                <h2>🚀 Features</h2>
                <p>✅ User Authentication (Google via Clerk) <br>
                   ✅ Real-time Chat & Discussions <br>
                   ✅ Community Creation & Management <br>
                   ✅ Profile Customization & Sharing</p>
            </div>
            <img src="https://your-image-link-here.com/features.svg">
        </div>
        
        <div class="feature">
            <div>
                <h2>🚀 Upcoming Features</h2>
                <p>✅ Reply in Chat <br>
                   ✅ Multimedia Sharing (Images & Videos) <br>
                   ✅ Custom Community Creation <br>
                   ✅ Community Deletion Feature</p>
            </div>
            <img src="https://your-image-link-here.com/upcoming.svg">
        </div>
        
        <div class="feature">
            <div>
                <h2>📌 Why This App?</h2>
                <p>✅ Personalized Communities <br>
                   ✅ Real-time Discussions <br>
                   ✅ Beginner-friendly Platform <br>
                   ✅ Covers All Domains, Not Just Coding</p>
            </div>
            <img src="https://your-image-link-here.com/why.svg">
        </div>
        
        <div class="feature">
            <div>
                <h2>🛠 Tech Stack</h2>
                <p>✅ Frontend: React Native, Expo <br>
                   ✅ Backend: Firebase Firestore <br>
                   ✅ Authentication: Clerk <br>
                   ✅ UI Design: Figma</p>
            </div>
            <img src="https://your-image-link-here.com/techstack.svg">
        </div>
        
        <a href="https://your-figma-link-here.com" class="btn">View Prototype</a>
        <p>📷 <strong>App Screenshots</strong> – *(Upload relevant screenshots here)*</p>
        <p>🔗 <strong>Figma Prototype</strong> – [Insert Figma Link Here]</p>
        <p>📥 <strong>Installation & Setup</strong></p>
        <pre>
        git clone https://github.com/your-repo/pandaUnity.git
        cd pandaUnity
        yarn install  # or npm install
        yarn start  # or npm start
        </pre>
    </div>
</body>
</html>
