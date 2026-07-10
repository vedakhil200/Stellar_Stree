<div align="center">

# 🌟 Stellar Stree

### Empowering the Invisible Workforce Through Blockchain

*Recognizing, verifying, and rewarding women's unpaid and informal work using the Stellar blockchain.*

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6-purple?logo=vite)
![Express](https://img.shields.io/badge/Express.js-Backend-black?logo=express)
![Stellar](https://img.shields.io/badge/Stellar-Blockchain-black)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

---

# 📖 Overview

Millions of women contribute to society through domestic work, caregiving, handicrafts, tailoring, agriculture, and community services. Unfortunately, much of this work remains invisible, undocumented, and financially unrewarded.

**Stellar Stree** is a blockchain-powered platform designed to recognize these contributions by connecting women with verified opportunities and rewarding completed work through the **Stellar Network**.

The platform creates a transparent ecosystem where NGOs, communities, and organizations can verify tasks while ensuring fair and secure digital payments.

---

# 🎯 Problem Statement

Women performing unpaid and informal work often face:

- Lack of financial recognition
- No digital work history
- Limited employment opportunities
- Trust issues in reward distribution
- No transparent verification mechanism

---

# 💡 Solution

Stellar Stree provides a decentralized platform that:

- Connects women with verified work opportunities
- Allows NGOs to verify completed tasks
- Creates a transparent digital work record
- Enables secure blockchain-based rewards
- Builds trust using decentralized verification

---

# ✨ Features

## 👩 Women Registration

- User Sign Up
- Secure Login
- Profile Management

---

## 💼 Opportunity Marketplace

Browse opportunities such as:

- Handicrafts
- Tailoring
- Community Services
- Cooking
- Digital Tasks
- NGO Projects

---

## ✅ Verification System

Task completion is verified before rewards are released.

Verification may include:

- NGO Approval
- Community Validation
- Digital Evidence

---

## 💰 Blockchain Rewards

Instead of traditional payments, verified work can be rewarded using the **Stellar blockchain**, enabling:

- Fast transactions
- Low fees
- Transparent payments
- Digital financial inclusion

---

## 📊 Dashboard

Users can monitor:

- Completed Tasks
- Pending Verification
- Earnings
- Activity History

---

## 🎨 Modern User Experience

- Responsive Design
- Smooth Animations
- Beautiful Landing Page
- Interactive Sections
- Authentication Modals

---

# 🏗 Project Architecture

```
                Users
                  │
                  ▼
          React Frontend
                  │
         REST API (Express)
                  │
      Verification Services
                  │
      Stellar Blockchain
                  │
        Digital Rewards
```

---

# 🛠 Tech Stack

## Frontend

- React 19
- TypeScript
- Vite
- Motion
- Tailwind CSS
- Lucide Icons

## Backend

- Express.js
- Node.js

## Blockchain

- Stellar Network (planned integration)

## AI

- Google Gemini API support

---

# 📂 Project Structure

```
Stellar_Stree/

├── src/
│   ├── components/
│   │   ├── Hero
│   │   ├── About
│   │   ├── DashboardPreview
│   │   ├── JobCategories
│   │   ├── Process
│   │   ├── Solutions
│   │   ├── AuthModal
│   │   ├── ProfileModal
│   │   └── Footer
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── server.ts
├── package.json
└── vite.config.ts
```

---

# 🔌 API Endpoints

## GET

### `/api/jobs`

Returns available work opportunities.

---

## POST

### `/api/register`

Registers a new user.

Example

```json
{
  "name":"Akhil",
  "email":"akhil@example.com"
}
```

---

### POST `/api/log-task`

Logs completed work.

```json
{
   "taskId":1,
   "userId":"abc123",
   "hours":4
}
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/yourusername/Stellar_Stree.git
```

---

## Install

```bash
npm install
```

---

## Environment Variables

Create

```
.env.local
```

Add

```
GEMINI_API_KEY=YOUR_API_KEY
```

---

## Run

```bash
npm run dev
```

---

# 🌍 Future Roadmap

- Real Stellar Wallet Integration
- NGO Verification Dashboard
- AI Skill Recommendation
- Proof of Work Validation
- Mobile Application
- Multi-language Support
- QR Payment System
- Analytics Dashboard
- Admin Panel
- Smart Reward Distribution

---

# 🌱 Impact

Stellar Stree aims to:

- Promote financial inclusion
- Increase women's economic participation
- Recognize invisible labor
- Encourage transparent reward systems
- Support NGOs and local communities

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push your branch
5. Open a Pull Request

---

# 📜 License

This project is released under the MIT License.

---

# 👨‍💻 Author

**Akhileshwar**

B.Tech CSE Student

Oriental Institute of Science & Technology, Bhopal

Passionate about

- Blockchain
- Artificial Intelligence
- Full Stack Development
- Web3
- Social Impact Technology

---

<div align="center">

### ⭐ If you like this project, don't forget to star the repository!

Building technology for social impact through blockchain.

</div>
