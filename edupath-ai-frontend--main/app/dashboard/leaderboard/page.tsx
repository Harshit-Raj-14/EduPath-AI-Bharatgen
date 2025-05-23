// app/dashboard/profile/page.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Button,
  Card,
  DarkThemeToggle,
  Flowbite,
  Badge,
  Avatar,
  Table,
  Progress,
} from "flowbite-react";
import {
  HiChip,
  HiUser,
  HiClock,
  HiAcademicCap,
  HiLogout,
  HiStar,
  HiLightningBolt,
  HiBookOpen,
  HiCalendar,
  HiGift,
  HiPlay,
  HiCog,
  HiMail,
  HiLocationMarker,
  HiChartBar,
  HiDocument,
  HiCollection,
} from "react-icons/hi";

// Dummy data interfaces
interface Course {
  id: string;
  title: string;
  description: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  category: string;
  difficulty: string;
  instructor: string;
  thumbnail: string;
  enrolledDate: string;
  estimatedCompletion: string;
}

interface Certificate {
  id: string;
  courseName: string;
  issueDate: string;
  certificateId: string;
  grade: string;
  skills: string[];
}

interface Trophy {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedDate: string;
  category: string;
}

interface UserStats {
  totalCourses: number;
  completedCourses: number;
  totalPoints: number;
  streak: number;
  hoursLearned: number;
  certificates: number;
  rank: number;
  weeklyProgress: number[];
  monthlyProgress: number[];
}

interface UserProfile {
  name: string;
  email: string;
  image: string;
  bio: string;
  location: string;
  website: string;
  phone: string;
  joinDate: string;
  linkedin: string;
  github: string;
  skills: string[];
  interests: string[];
}

// Dummy data
const createDummyProfile = (): UserProfile => ({
  name: "Harshit Raj",
  email: "harshit@example.com",
  image: "",
  bio: "Passionate learner and full-stack developer. Love exploring new technologies and building innovative solutions.",
  location: "Patna, Bihar, India",
  website: "https://harshitraj.dev",
  phone: "+91 9876543210",
  joinDate: "2024-01-15T00:00:00Z",
  linkedin: "https://linkedin.com/in/harshitraj",
  github: "https://github.com/harshitraj",
  skills: ["JavaScript", "React", "Node.js", "Python", "MongoDB", "AWS"],
  interests: ["Web Development", "AI/ML", "Cloud Computing", "Mobile Development"]
});

const dummyCourses: Course[] = [
  {
    id: "1",
    title: "Advanced React Development",
    description: "Master React with hooks, context, and performance optimization",
    progress: 75,
    totalLessons: 24,
    completedLessons: 18,
    category: "Frontend",
    difficulty: "Advanced",
    instructor: "Sarah Johnson",
    thumbnail: "/api/placeholder/300/200",
    enrolledDate: "2024-11-01T00:00:00Z",
    estimatedCompletion: "2025-02-15T00:00:00Z"
  },
  {
    id: "2",
    title: "Full Stack Web Development",
    description: "Complete MERN stack development from scratch",
    progress: 45,
    totalLessons: 36,
    completedLessons: 16,
    category: "Full Stack",
    difficulty: "Intermediate",
    instructor: "Michael Chen",
    thumbnail: "/api/placeholder/300/200",
    enrolledDate: "2024-12-01T00:00:00Z",
    estimatedCompletion: "2025-04-20T00:00:00Z"
  },
  {
    id: "3",
    title: "Machine Learning Fundamentals",
    description: "Learn ML algorithms and implement them with Python",
    progress: 30,
    totalLessons: 28,
    completedLessons: 8,
    category: "AI/ML",
    difficulty: "Intermediate",
    instructor: "Dr. Emily Watson",
    thumbnail: "/api/placeholder/300/200",
    enrolledDate: "2025-01-05T00:00:00Z",
    estimatedCompletion: "2025-05-10T00:00:00Z"
  }
];

const dummyCertificates: Certificate[] = [
  {
    id: "1",
    courseName: "JavaScript Fundamentals",
    issueDate: "2024-10-15T00:00:00Z",
    certificateId: "CERT-JS-2024-001",
    grade: "A+",
    skills: ["JavaScript", "ES6+", "DOM Manipulation", "Async Programming"]
  },
  {
    id: "2",
    courseName: "React Basics",
    issueDate: "2024-11-20T00:00:00Z",
    certificateId: "CERT-REACT-2024-002",
    grade: "A",
    skills: ["React", "JSX", "Components", "State Management"]
  }
];

const dummyTrophies: Trophy[] = [
  {
    id: "1",
    name: "First Course Completed",
    description: "Completed your first course successfully",
    icon: "🎓",
    earnedDate: "2024-10-15T00:00:00Z",
    category: "Achievement"
  },
  {
    id: "2",
    name: "Week Streak",
    description: "Maintained 7-day learning streak",
    icon: "🔥",
    earnedDate: "2024-11-01T00:00:00Z",
    category: "Consistency"
  },
  {
    id: "3",
    name: "Top Performer",
    description: "Ranked in top 10 of the month",
    icon: "⭐",
    earnedDate: "2024-12-01T00:00:00Z",
    category: "Performance"
  },
  {
    id: "4",
    name: "Fast Learner",
    description: "Completed course 2 weeks ahead of schedule",
    icon: "🚀",
    earnedDate: "2024-10-01T00:00:00Z",
    category: "Speed"
  }
];

const dummyStats: UserStats = {
  totalCourses: 8,
  completedCourses: 3,
  totalPoints: 2850,
  streak: 12,
  hoursLearned: 156,
  certificates: 2,
  rank: 2,
  weeklyProgress: [2, 4, 3, 6, 5, 8, 7],
  monthlyProgress: [45, 62, 78, 89, 95, 103, 118, 134, 142, 156, 168, 185]
};

export default function ProfilePage() {
  const currentDate = new Date("2025-01-11T00:24:10Z");
  const [activeTab, setActiveTab] = useState("overview");
  
  // Initialize with dummy data directly
  const profile = createDummyProfile();
  const courses = dummyCourses;
  const certificates = dummyCertificates;
  const trophies = dummyTrophies;
  const stats = dummyStats;

  return (
    <Flowbite>
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 px-4 py-3">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center">
            <HiChip className="text-2xl text-purple-600 dark:text-purple-400 mr-2" />
            <span className="self-center text-xl font-semibold text-purple-600 dark:text-purple-400">
              Profile
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
              Dashboard
            </a>
            <a href="/dashboard/generate-project" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
              Generate Course
            </a>
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              Profile
            </span>
            <a href="/dashboard/leaderboard" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
              Leaderboard
            </a>
          </div>
        
          <div className="flex items-center gap-4">
            <Badge
              color="purple"
              size="sm"
              className="hidden md:flex items-center gap-2"
            >
              <HiUser className="text-purple-600 dark:text-purple-400" />
              {profile.name}
            </Badge>
            <Badge
              color="indigo"
              size="sm"
              className="hidden md:flex items-center gap-2"
            >
              <HiAcademicCap className="text-purple-600 dark:text-purple-400" />
              Rank #{stats.rank} 🥈
            </Badge>
            <Badge
              color="purple"
              size="sm"
              className="hidden md:flex items-center gap-2"
            >
              <HiClock className="text-purple-600 dark:text-purple-400" />
              {currentDate.toLocaleTimeString()}
            </Badge>
            <DarkThemeToggle />
            <Button
              gradientDuoTone="purpleToPink"
              size="sm"
              onClick={() => alert("Sign out functionality")}
            >
              <HiLogout className="mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </nav>

      <div className="min-h-screen bg-gradient-to-br from-white to-indigo-200 dark:from-gray-900 dark:to-indigo-900">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Card className="shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Avatar
                    img={profile.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&size=150`}
                    size="xl"
                    className="w-32 h-32"
                  />
                </motion.div>
                
                <div className="flex-1 text-center md:text-left">
                  <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 text-transparent bg-clip-text mb-2"
                  >
                    {profile.name}
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 dark:text-gray-300 mb-4"
                  >
                    {profile.bio}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-2 justify-center md:justify-start mb-4"
                  >
                    <Badge color="purple" className="flex items-center gap-1">
                      <HiMail className="w-3 h-3" /> {profile.email}
                    </Badge>
                    <Badge color="indigo" className="flex items-center gap-1">
                      <HiLocationMarker className="w-3 h-3" /> {profile.location}
                    </Badge>
                    <Badge color="pink" className="flex items-center gap-1">
                      <HiCalendar className="w-3 h-3" /> Joined {new Date(profile.joinDate).toLocaleDateString()}
                    </Badge>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-2 justify-center md:justify-start"
                  >
                    {profile.skills.map((skill, index) => (
                      <Badge key={index} color="gray" size="sm">
                        {skill}
                      </Badge>
                    ))}
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8"
          >
            {[
              { label: "Total Points", value: stats.totalPoints.toLocaleString(), icon: HiStar, color: "purple" },
              { label: "Courses", value: `${stats.completedCourses}/${stats.totalCourses}`, icon: HiBookOpen, color: "indigo" },
              { label: "Learning Streak", value: `${stats.streak} days`, icon: HiLightningBolt, color: "orange" },
              { label: "Hours Learned", value: stats.hoursLearned, icon: HiClock, color: "green" },
              { label: "Certificates", value: stats.certificates, icon: HiDocument, color: "blue" },
              { label: "Global Rank", value: `#${stats.rank}`, icon: HiCollection, color: "yellow" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center shadow-lg">
                  <stat.icon className={`w-8 h-8 mx-auto mb-2 text-${stat.color}-500`} />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Card className="shadow-xl border border-gray-200 dark:border-gray-700">
              {/* Custom Tab Implementation */}
              <div className="border-b border-gray-200 dark:border-gray-700">
                <div className="flex space-x-8">
                  {[
                    { key: 'overview', label: 'Overview', icon: HiChartBar },
                    { key: 'courses', label: 'Courses', icon: HiBookOpen },
                    { key: 'certificates', label: 'Certificates', icon: HiDocument },
                    { key: 'achievements', label: 'Achievements', icon: HiCollection }
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm ${
                        activeTab === tab.key
                          ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6">
                {/* Overview Tab Content */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    
                    {/* Progress Chart */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                          <HiChartBar className="text-purple-500" />
                          Weekly Learning Progress
                        </h3>
                        <div className="space-y-3">
                          {stats.weeklyProgress.map((hours, index) => (
                            <div key={index}>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Day {index + 1}</span>
                                <span>{hours}h</span>
                              </div>
                              <Progress progress={(hours / 8) * 100} color="purple" />
                            </div>
                          ))}
                        </div>
                      </Card>
                      
                      <Card>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                          <HiCollection className="text-yellow-500" />
                          Recent Achievements
                        </h3>
                        <div className="flex gap-6">
                          {/* Achievement List */}
                          <div className="flex-1 space-y-3">
                            {trophies.slice(0, 4).map((trophy) => (
                              <div key={trophy.id} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-800">
                                <span className="text-2xl">{trophy.icon}</span>
                                <div>
                                  <p className="font-medium text-sm text-gray-900 dark:text-white">{trophy.name}</p>
                                  <p className="text-xs text-gray-500">{new Date(trophy.earnedDate).toLocaleDateString()}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          {/* Pie Chart */}
                          <div className="flex-shrink-0 w-42 h-42 relative">
                            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                              {/* Achievement pie chart segments */}
                              <circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke="#8B5CF6"
                                strokeWidth="20"
                                strokeDasharray="62.8 188.4"
                                strokeDashoffset="0"
                                className="transition-all duration-1000"
                              />
                              <circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke="#F59E0B"
                                strokeWidth="20"
                                strokeDasharray="47.1 188.4"
                                strokeDashoffset="-62.8"
                                className="transition-all duration-1000"
                              />
                              <circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke="#10B981"
                                strokeWidth="20"
                                strokeDasharray="31.4 188.4"
                                strokeDashoffset="-109.9"
                                className="transition-all duration-1000"
                              />
                              <circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke="#EF4444"
                                strokeWidth="20"
                                strokeDasharray="47.1 188.4"
                                strokeDashoffset="-141.3"
                                className="transition-all duration-1000"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-lg font-bold text-gray-900 dark:text-white">{trophies.length}</div>
                                <div className="text-xs text-gray-500">Total</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Legend */}
                        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                            <span className="text-gray-600 dark:text-gray-400">Performance</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <span className="text-gray-600 dark:text-gray-400">Speed</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-gray-600 dark:text-gray-400">Achievement</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <span className="text-gray-600 dark:text-gray-400">Consistency</span>
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Learning Activity */}
                    <Card>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                        <HiBookOpen className="text-indigo-500" />
                        Current Learning Activity
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {courses.map((course) => (
                          <motion.div
                            key={course.id}
                            whileHover={{ scale: 1.02 }}
                            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                          >
                            <img 
                              src={course.thumbnail} 
                              alt={course.title}
                              className="w-full h-32 object-cover rounded-lg mb-3"
                            />
                            <h4 className="font-semibold text-sm mb-2 text-gray-900 dark:text-white">{course.title}</h4>
                            <div className="flex justify-between text-xs text-gray-500 mb-2">
                              <span>Progress</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress progress={course.progress} color="purple" size="sm" />
                            <div className="flex justify-between text-xs text-gray-500 mt-2">
                              <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                              <Badge color="purple" size="xs">{course.difficulty}</Badge>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </Card>
                  </div>
                )}

                {/* Courses Tab Content */}
                {activeTab === 'courses' && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">My Courses</h3>
                      <Badge color="purple" size="lg">
                        {stats.completedCourses} of {stats.totalCourses} completed
                      </Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {courses.map((course, index) => (
                        <motion.div
                          key={course.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.03 }}
                        >
                          <Card className="h-full">
                            <img 
                              src={course.thumbnail} 
                              alt={course.title}
                              className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <h4 className="font-bold text-lg mb-2">{course.title}</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{course.description}</p>
                            
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">Progress</span>
                                <span className="text-sm text-purple-600 font-semibold">{course.progress}%</span>
                              </div>
                              <Progress progress={course.progress} color="purple" />
                              
                              <div className="flex justify-between text-xs text-gray-500">
                                <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                                <span>by {course.instructor}</span>
                              </div>
                              
                              <div className="flex gap-2 flex-wrap">
                                <Badge color="indigo" size="xs">{course.category}</Badge>
                                <Badge color="gray" size="xs">{course.difficulty}</Badge>
                              </div>
                              
                              <Button gradientDuoTone="purpleToPink" size="sm" className="w-full">
                                <HiPlay className="mr-2" />
                                Continue Learning
                              </Button>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certificates Tab Content */}
                {activeTab === 'certificates' && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">My Certificates</h3>
                      <Badge color="green" size="lg">
                        {certificates.length} certificates earned
                      </Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {certificates.map((cert, index) => (
                        <motion.div
                          key={cert.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <Card className="border-2 border-yellow-200 dark:border-yellow-800">
                            <div className="text-center mb-4">
                              <HiDocument className="w-16 h-16 mx-auto text-yellow-500 mb-2" />
                              <h4 className="text-xl font-bold text-gray-900 dark:text-white">{cert.courseName}</h4>
                              <p className="text-gray-600 dark:text-gray-400">Certificate of Completion</p>
                            </div>
                            
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="font-medium">Issue Date:</span>
                                <span>{new Date(cert.issueDate).toLocaleDateString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">Certificate ID:</span>
                                <span className="font-mono text-xs">{cert.certificateId}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">Grade:</span>
                                <Badge color="green" size="sm">{cert.grade}</Badge>
                              </div>
                            </div>
                            
                            <div className="mt-4">
                              <p className="text-sm font-medium mb-2">Skills Acquired:</p>
                              <div className="flex flex-wrap gap-1">
                                {cert.skills.map((skill, i) => (
                                  <Badge key={i} color="purple" size="xs">{skill}</Badge>
                                ))}
                              </div>
                            </div>
                            
                            <Button gradientDuoTone="purpleToPink" size="sm" className="w-full mt-4">
                              View Certificate
                            </Button>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements Tab Content */}
                {activeTab === 'achievements' && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Trophies & Achievements</h3>
                      <Badge color="yellow" size="lg">
                        {trophies.length} trophies earned
                      </Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {trophies.map((trophy, index) => (
                        <motion.div
                          key={trophy.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05, rotate: 1 }}
                        >
                          <Card className="text-center h-full border-2 border-yellow-100 dark:border-yellow-900">
                            <div className="text-6xl mb-3">{trophy.icon}</div>
                            <h4 className="font-bold text-lg mb-2">{trophy.name}</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{trophy.description}</p>
                            <Badge color="yellow" size="sm" className="mb-2">{trophy.category}</Badge>
                            <p className="text-xs text-gray-500">
                              Earned on {new Date(trophy.earnedDate).toLocaleDateString()}
                            </p>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Leaderboard Section */}
                    <Card>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                        <HiStar className="text-yellow-500" />
                        Global Leaderboard
                      </h3>
                      <Table hoverable>
                        <Table.Head>
                          <Table.HeadCell>Rank</Table.HeadCell>
                          <Table.HeadCell>User</Table.HeadCell>
                          <Table.HeadCell>Points</Table.HeadCell>
                          <Table.HeadCell>Courses</Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
                          {[
                            { rank: 1, name: "Emma Davis", points: 3200, courses: 12, isCurrentUser: false },
                            { rank: 2, name: profile.name, points: stats.totalPoints, courses: stats.totalCourses, isCurrentUser: true },
                            { rank: 3, name: "Michael Johnson", points: 2750, courses: 9, isCurrentUser: false },
                            { rank: 4, name: "Sarah Wilson", points: 2500, courses: 8, isCurrentUser: false },
                            { rank: 5, name: "James Anderson", points: 2250, courses: 7, isCurrentUser: false },
                          ].map((user, index) => (
                            <Table.Row key={index} className={user.isCurrentUser ? "bg-purple-50 dark:bg-purple-900/20" : ""}>
                              <Table.Cell className="font-medium">
                                {user.rank <= 3 ? (
                                  <span className="text-xl">
                                    {user.rank === 1 ? "🏆" : user.rank === 2 ? "🥈" : "🥉"}
                                  </span>
                                ) : (
                                  `#${user.rank}`
                                )}
                              </Table.Cell>
                              <Table.Cell className="font-medium">
                                {user.name}
                                {user.isCurrentUser && <Badge color="purple" size="xs" className="ml-2">You</Badge>}
                              </Table.Cell>
                              <Table.Cell>
                                <Badge color="purple" size="sm">
                                  <HiStar className="mr-1" />
                                  {user.points.toLocaleString()}
                                </Badge>
                              </Table.Cell>
                              <Table.Cell>{user.courses} completed</Table.Cell>
                            </Table.Row>
                          ))}
                        </Table.Body>
                      </Table>
                    </Card>
                  </div>
                )}
              </div>
            </Card>
          </motion.div>

          {/* Additional Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            
            {/* Learning Streak Card */}
            <Card className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
              >
                <HiLightningBolt className="w-16 h-16 mx-auto text-orange-500 mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {stats.streak} Days
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Learning Streak</p>
              <Progress progress={Math.min((stats.streak / 30) * 100, 100)} color="orange" />
              <p className="text-xs text-gray-500 mt-2">
                {30 - stats.streak > 0 ? `${30 - stats.streak} days to next milestone` : "Amazing streak!"}
              </p>
            </Card>

            {/* Monthly Goals Card */}
            <Card>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                <HiGift className="text-green-500" />
                Monthly Goals
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Complete 2 Courses</span>
                    <span>1/2</span>
                  </div>
                  <Progress progress={50} color="green" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>40 Hours Learning</span>
                    <span>32/40</span>
                  </div>
                  <Progress progress={80} color="blue" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>3000 Points</span>
                    <span>2850/3000</span>
                  </div>
                  <Progress progress={95} color="purple" />
                </div>
              </div>
            </Card>

            {/* Quick Actions Card */}
            <Card>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                <HiCog className="text-gray-500" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Button gradientDuoTone="purpleToPink" size="sm" className="w-full">
                  <HiBookOpen className="mr-2" />
                  Browse New Courses
                </Button>
                <Button color="gray" size="sm" className="w-full">
                  <HiUser className="mr-2" />
                  Edit Profile
                </Button>
                <Button color="gray" size="sm" className="w-full">
                  <HiDocument className="mr-2" />
                  Download Certificates
                </Button>
                <Button color="gray" size="sm" className="w-full">
                  <HiChartBar className="mr-2" />
                  View Analytics
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Footer Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400"
          >
            <p>Profile last updated: {currentDate.toLocaleString()}</p>
            <p className="mt-2">
              Member since {new Date(profile.joinDate).toLocaleDateString()} • 
              Total learning time: {stats.hoursLearned} hours • 
              Average daily learning: {Math.round(stats.hoursLearned / 100)} minutes
            </p>
          </motion.div>
        </div>
      </div>
    </Flowbite>
  );
}