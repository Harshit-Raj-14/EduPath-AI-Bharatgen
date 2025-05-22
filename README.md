# EduPath AI 🎓

EduPath AI is an intelligent learning platform designed to provide personalized programming education through AI-powered tutoring and interactive learning experiences.

## Problem Statement

Traditional programming education often follows a one-size-fits-all approach, which can be ineffective for learners with different backgrounds, learning styles, and goals. Students often struggle with:
- Finding the right learning path based on their current knowledge level
- Getting immediate feedback and guidance when stuck
- Maintaining motivation through consistent engagement
- Preparing for technical interviews and assessments

## Solution

EduPath AI addresses these challenges by providing:
- Personalized learning paths adapted to each student's background and goals
- Real-time AI tutoring with contextual feedback
- Interactive coding environments for hands-on practice
- Mock technical interviews with AI-powered feedback

## Key Features

### 🎯 Personalized Learning
- Custom study plans based on student's:
  - Programming experience
  - Current knowledge level
  - Available study time
  - Learning goals
  - Preferred learning style

### 🤖 AI-Powered Tutoring
- Real-time assistance with programming concepts
- Contextual explanations and examples
- Progressive difficulty adjustment
- Immediate doubt resolution


### 🤖 Custom Course generator
- Do hands on practice while going through the course
- video recommendation, article recommendation, short notes, summary and quiz practice
- Do hands on practice while going through the course
- Gain certification, skill points and rise in leaderboard on completing course
  
### 💻 Interactive Learning Environment
- Built-in code editor for hands-on practice
- Real-time code execution and feedback
- Support for multiple programming languages
- Syntax highlighting and error detection

### 🎤 Mock Technical Interviews
- AI-driven interview simulations
- Real-world programming scenarios
- Instant feedback on responses
- Performance analytics and improvement suggestions

## Technology Stack

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **AI Integration**: Google's Gemini Pro API
- **Authentication**: Local storage (with plans for secure auth integration)

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/edupath-ai.git
cd edupath-ai
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Gemini API key:
```env
VITE_GEMINI_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Roadmap

- [ ] Integration with secure authentication service
- [ ] Additional programming language support
- [ ] Code challenge repository
- [ ] Progress tracking and analytics
- [ ] Collaborative learning features
- [ ] Mobile application

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Project Link: [https://github.com/yourusername/edupath-ai](https://github.com/yourusername/edupath-ai)

---

Made with ❤️ by EduPath AI Team
