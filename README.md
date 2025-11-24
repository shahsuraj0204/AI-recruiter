# 🤖 AI Recruiter – Voice-Based AI Interview System

AI Recruiter is a full end-to-end intelligent recruiting platform that **generates job-specific interview questions**, **conducts real-time voice interviews**, and **automatically evaluates candidates** using a smart scoring engine. It provides full dashboards for **recruiters**, **candidates**, and **admins**, making hiring fully automated.

---

## 🖼️ Screenshots

### 🏠 Home Page
![Home](./Screenshot%20(613).png)

### 👨‍💼 Recruiter Dashboard
![Recruiter Dashboard](./Screenshot%20(614).png)

### 🙋‍♂️ Candidate Dashboard
![Candidate Dashboard](./Screenshot%20(615).png)

### 📝 Create Interview
![Create Interview](./Screenshot%20(616).png)

### 🎤 AI Voice Interview Screen
![AI Voice Interview](./Screenshot%20(617).png)

### 📊 Interview Results
![Interview Results](./Screenshot%20(618).png)

### 🛠 Admin Dashboard
![Admin Dashboard](./Screenshot%20(619).png)

---

## 📂 Project Structure (Next.js App Router)

```
ai-recruiter-voice-agent/
├── app/
│   ├── (main)/
│   │   ├── recruiter/           # Recruiter dashboard
│   │   ├── create-interview/    # Create new interviews
│   │   ├── all-interview/       # Manage interviews
│   │   ├── billing/             # Credits & billing
│   │   └── profile/             # Recruiter profile
│   ├── candidate/
│   │   ├── dashboard/           # Candidate home
│   │   ├── interviews/          # Past interview history
│   │   └── profile/             # Candidate profile
│   ├── interview/
│   │   └── [interview_id]/      # Real-time interview session
│   ├── admin/                   # Admin panel
│   ├── api/                     # Backend API routes
│   ├── auth/                    # Authentication
│   └── globals.css              # Global styles
├── components/                  # Reusable UI components
├── context/                     # Global state
├── services/                    # AI, STT, TTS, LLM integrations
├── hooks/                       # Custom hooks
├── lib/                         # Utilities
└── public/                      # Static assets
```

---

## ⚙️ How the AI System Works

### **1. AI Question Generator**
Automatically generates role-specific interview questions using LLMs based on:
- Job role  
- Description  
- Experience level  
- Difficulty  
- Duration  
- Interview type  

### **2. Real-Time Voice Interview (VAPI Agent)**
The AI interviewer conducts a natural conversation:
- Real-time STT  
- Emotion-aware responses  
- Dynamic follow-up questions  
- Memory / context  
- Interrupt support  
- Configurable interviewer personality  

### **3. Smart Evaluation Engine**
After the interview, the system analyzes:
- Communication clarity  
- Confidence  
- Technical depth  
- Reasoning / problem-solving  
- Behavior & attitude  
- Overall score + full summary  

---

## 🖥️ Platform Features

### 👤 Recruiter Dashboard
- Create job interviews  
- View candidate reports  
- Manage credits  
- Track activity  

### 🧑‍💼 Candidate Dashboard
- Join interviews  
- View interview results  
- Manage profile  

### 🔐 Admin Panel
- Manage users  
- Monitor interview activity  
- System logs  

---

## 🛠️ Tech Stack

- **Next.js 14 (App Router)**  
- **React 18**  
- **Tailwind CSS**  
- **Prisma ORM**  
- **PostgreSQL / Supabase**  
- **Zustand / React Context**  
- **OpenAI GPT-4o, Realtime Voice API**  
- **VAPI Voice Agent**  

---

## 🚀 Run the Project Locally

```bash
npm install
```

Create `.env.local`:

```env
OPENAI_API_KEY=your_key_here
DATABASE_URL=your_postgres_url
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Run:

```bash
npm run dev
```

Open: **http://localhost:3000**

---

If you want, I can also add:
✅ Shields.io badges  
✅ Deployment section  
✅ System architecture diagram  
✅ API flowchart  
Just tell me!
