// ============================
// MOCK DATA FOR NUMŪ DASHBOARD
// ============================

export const summaryData = {
  totalRegistrations: 4812,
  registrationChange: 18,
  activeChannels: 23,
  completionRate: 61,
  regionsCovered: { covered: 7, total: 8 },
}

export const channelBreakdown = [
  {
    channel: "Universities",
    count: 1842,
    subEntities: [
      { name: "AUB", count: 520 },
      { name: "LAU", count: 410 },
      { name: "USJ", count: 340 },
      { name: "USEK", count: 285 },
      { name: "NDU", count: 287 },
    ],
  },
  {
    channel: "Public Sector",
    count: 1102,
    subEntities: [
      { name: "Ministry of Education", count: 380 },
      { name: "Ministry of Health", count: 290 },
      { name: "Municipality of Beirut", count: 220 },
      { name: "CDR", count: 212 },
    ],
  },
  {
    channel: "Employers",
    count: 742,
    subEntities: [
      { name: "Murex", count: 180 },
      { name: "Telecoms", count: 160 },
      { name: "Banking Sector", count: 210 },
      { name: "Startups", count: 192 },
    ],
  },
  {
    channel: "Syndicates",
    count: 620,
    subEntities: [
      { name: "Engineers Syndicate", count: 280 },
      { name: "Lawyers Syndicate", count: 180 },
      { name: "Pharmacists Syndicate", count: 160 },
    ],
  },
  {
    channel: "NGOs",
    count: 506,
    subEntities: [
      { name: "Digital Opportunity Trust", count: 190 },
      { name: "UNICEF Lebanon", count: 150 },
      { name: "Mercy Corps", count: 166 },
    ],
  },
]

export const trackDistribution = [
  { name: "AI Fundamentals", value: 33, color: "#3ecf8e" },
  { name: "GenAI", value: 25, color: "#38bdf8" },
  { name: "Data Ethics", value: 17, color: "#facc15" },
  { name: "Automation", value: 14, color: "#f97316" },
  { name: "Other", value: 11, color: "#a78bfa" },
]

export const registrationGrowth = [
  { month: "Sep 2025", Universities: 250, "Public Sector": 140, Employers: 90, Syndicates: 80, NGOs: 60 },
  { month: "Oct 2025", Universities: 310, "Public Sector": 180, Employers: 120, Syndicates: 100, NGOs: 75 },
  { month: "Nov 2025", Universities: 340, "Public Sector": 200, Employers: 140, Syndicates: 110, NGOs: 90 },
  { month: "Dec 2025", Universities: 280, "Public Sector": 170, Employers: 110, Syndicates: 95, NGOs: 80 },
  { month: "Jan 2026", Universities: 330, "Public Sector": 210, Employers: 150, Syndicates: 120, NGOs: 100 },
  { month: "Feb 2026", Universities: 332, "Public Sector": 202, Employers: 132, Syndicates: 115, NGOs: 101 },
]

export const motivationsData = [
  { motivation: "Career Growth", value: 38 },
  { motivation: "Job Transition", value: 27 },
  { motivation: "Productivity", value: 21 },
  { motivation: "Upskilling", value: 14 },
]

export const challengesData = [
  { challenge: "Connectivity", value: 44 },
  { challenge: "Time Constraints", value: 38 },
  { challenge: "Cost", value: 29 },
  { challenge: "Language", value: 18 },
  { challenge: "Device Access", value: 12 },
]

export const formatPreference = [
  { format: "18-24", online_self_paced: 42, live_online: 28, in_person: 18, hybrid: 12 },
  { format: "25-34", online_self_paced: 35, live_online: 30, in_person: 20, hybrid: 15 },
  { format: "35-44", online_self_paced: 25, live_online: 25, in_person: 30, hybrid: 20 },
  { format: "45+", online_self_paced: 20, live_online: 20, in_person: 35, hybrid: 25 },
]

export const geographyData = [
  { region: "Beirut", registrations: 1840, topChannel: "Universities", gap: false, lat: 33.8938, lng: 35.5018 },
  { region: "Mount Lebanon", registrations: 1200, topChannel: "Employers", gap: false, lat: 33.8500, lng: 35.6000 },
  { region: "North", registrations: 620, topChannel: "Public Sector", gap: false, lat: 34.4333, lng: 35.8333 },
  { region: "South", registrations: 480, topChannel: "NGOs", gap: false, lat: 33.3750, lng: 35.4833 },
  { region: "Bekaa", registrations: 390, topChannel: "Syndicates", gap: false, lat: 33.8333, lng: 36.0000 },
  { region: "Nabatieh", registrations: 180, topChannel: "NGOs", gap: false, lat: 33.3833, lng: 35.4833 },
  { region: "Akkar", registrations: 82, topChannel: "Public Sector", gap: true, lat: 34.5500, lng: 36.0667 },
  { region: "Baalbek-Hermel", registrations: 20, topChannel: "NGOs", gap: true, lat: 34.2000, lng: 36.3500 },
]

export type Learner = {
  id: string
  name: string
  email: string
  phone: string
  ageRange: string
  employment: string
  jobLevel: string
  industry: string
  yearsExperience: number
  channel: string
  entity: string
  track: string
  region: string
  city: string
  ipAddress: string
  provider: "Microsoft" | "Oracle"
  progress: number
  certificateEarned: boolean
  learningFormat: string
  skillLevel: string
  motivation: string
  status: "completed" | "draft" | "invalid"
}

export const learnersData: Learner[] = [
  { id: "L001", name: "Nour Haddad", email: "nour.h@gmail.com", phone: "+961 3 123 456", ageRange: "25-34", employment: "Employed", jobLevel: "Mid-Level", industry: "Technology", yearsExperience: 5, channel: "Universities", entity: "AUB", track: "AI Fundamentals", region: "Beirut", city: "Hamra", ipAddress: "185.107.xx.xx", provider: "Microsoft", progress: 87, certificateEarned: false, learningFormat: "Online Self-Paced", skillLevel: "Intermediate", motivation: "Career Growth", status: "completed" },
  { id: "L002", name: "Karim Saleh", email: "karim.s@outlook.com", phone: "+961 70 987 654", ageRange: "18-24", employment: "Student", jobLevel: "Entry", industry: "Education", yearsExperience: 0, channel: "Universities", entity: "LAU", track: "GenAI", region: "Mount Lebanon", city: "Byblos", ipAddress: "185.107.xx.xx", provider: "Oracle", progress: 45, certificateEarned: false, learningFormat: "Live Online", skillLevel: "Beginner", motivation: "Job Transition", status: "draft" },
  { id: "L003", name: "Lina Khoury", email: "lina.k@hotmail.com", phone: "+961 71 555 333", ageRange: "35-44", employment: "Employed", jobLevel: "Senior", industry: "Finance", yearsExperience: 12, channel: "Employers", entity: "Banking Sector", track: "Data Ethics", region: "Beirut", city: "Achrafieh", ipAddress: "185.107.xx.xx", provider: "Microsoft", progress: 100, certificateEarned: true, learningFormat: "Hybrid", skillLevel: "Advanced", motivation: "Upskilling", status: "completed" },
  { id: "L004", name: "Ali Moussa", email: "ali.m@gmail.com", phone: "+961 76 222 111", ageRange: "25-34", employment: "Self-Employed", jobLevel: "Mid-Level", industry: "Consulting", yearsExperience: 7, channel: "Syndicates", entity: "Engineers Syndicate", track: "Automation", region: "North", city: "Tripoli", ipAddress: "185.107.xx.xx", provider: "Microsoft", progress: 62, certificateEarned: false, learningFormat: "Online Self-Paced", skillLevel: "Intermediate", motivation: "Productivity", status: "completed" },
  { id: "L005", name: "Rania Fakhoury", email: "rania.f@yahoo.com", phone: "+961 3 444 888", ageRange: "45+", employment: "Employed", jobLevel: "Director", industry: "Public Admin", yearsExperience: 20, channel: "Public Sector", entity: "Ministry of Education", track: "AI Fundamentals", region: "Beirut", city: "Downtown", ipAddress: "185.107.xx.xx", provider: "Oracle", progress: 33, certificateEarned: false, learningFormat: "In Person", skillLevel: "Beginner", motivation: "Career Growth", status: "draft" },
  { id: "L006", name: "Omar Itani", email: "omar.i@proton.me", phone: "+961 71 666 999", ageRange: "18-24", employment: "Unemployed", jobLevel: "Entry", industry: "None", yearsExperience: 0, channel: "NGOs", entity: "UNICEF Lebanon", track: "GenAI", region: "South", city: "Saida", ipAddress: "185.107.xx.xx", provider: "Microsoft", progress: 78, certificateEarned: false, learningFormat: "Live Online", skillLevel: "Beginner", motivation: "Job Transition", status: "completed" },
  { id: "L007", name: "Maya Nassar", email: "maya.n@gmail.com", phone: "+961 70 111 222", ageRange: "25-34", employment: "Employed", jobLevel: "Mid-Level", industry: "Healthcare", yearsExperience: 4, channel: "Public Sector", entity: "Ministry of Health", track: "Data Ethics", region: "Bekaa", city: "Zahle", ipAddress: "185.107.xx.xx", provider: "Oracle", progress: 91, certificateEarned: true, learningFormat: "Hybrid", skillLevel: "Intermediate", motivation: "Upskilling", status: "completed" },
  { id: "L008", name: "Hassan Diab", email: "hassan.d@outlook.com", phone: "+961 76 333 444", ageRange: "35-44", employment: "Employed", jobLevel: "Senior", industry: "Telecommunications", yearsExperience: 10, channel: "Employers", entity: "Telecoms", track: "Automation", region: "Mount Lebanon", city: "Jounieh", ipAddress: "185.107.xx.xx", provider: "Microsoft", progress: 56, certificateEarned: false, learningFormat: "Online Self-Paced", skillLevel: "Advanced", motivation: "Productivity", status: "completed" },
  { id: "L009", name: "Sara Azar", email: "sara.a@gmail.com", phone: "+961 3 777 888", ageRange: "18-24", employment: "Student", jobLevel: "Entry", industry: "Education", yearsExperience: 0, channel: "Universities", entity: "USJ", track: "AI Fundamentals", region: "Beirut", city: "Gemmayze", ipAddress: "185.107.xx.xx", provider: "Microsoft", progress: 95, certificateEarned: true, learningFormat: "Live Online", skillLevel: "Intermediate", motivation: "Career Growth", status: "completed" },
  { id: "L010", name: "Fadi Bou Sleiman", email: "fadi.b@gmail.com", phone: "+961 71 999 000", ageRange: "25-34", employment: "Employed", jobLevel: "Mid-Level", industry: "Engineering", yearsExperience: 6, channel: "Syndicates", entity: "Engineers Syndicate", track: "GenAI", region: "North", city: "Tripoli", ipAddress: "185.107.xx.xx", provider: "Oracle", progress: 72, certificateEarned: false, learningFormat: "Online Self-Paced", skillLevel: "Intermediate", motivation: "Career Growth", status: "completed" },
  { id: "L011", name: "Dina Chehab", email: "dina.c@hotmail.com", phone: "+961 70 444 555", ageRange: "35-44", employment: "Self-Employed", jobLevel: "Senior", industry: "Media", yearsExperience: 14, channel: "Employers", entity: "Startups", track: "GenAI", region: "Beirut", city: "Mar Mikhael", ipAddress: "185.107.xx.xx", provider: "Microsoft", progress: 40, certificateEarned: false, learningFormat: "Hybrid", skillLevel: "Beginner", motivation: "Job Transition", status: "draft" },
  { id: "L012", name: "Wael Khalil", email: "wael.k@gmail.com", phone: "+961 76 888 777", ageRange: "45+", employment: "Employed", jobLevel: "Director", industry: "Government", yearsExperience: 22, channel: "Public Sector", entity: "CDR", track: "Data Ethics", region: "Nabatieh", city: "Nabatieh", ipAddress: "185.107.xx.xx", provider: "Oracle", progress: 18, certificateEarned: false, learningFormat: "In Person", skillLevel: "Beginner", motivation: "Upskilling", status: "invalid" },
  { id: "L013", name: "Joelle Karam", email: "joelle.k@gmail.com", phone: "+961 3 222 333", ageRange: "25-34", employment: "Employed", jobLevel: "Mid-Level", industry: "Banking", yearsExperience: 3, channel: "Employers", entity: "Banking Sector", track: "Automation", region: "Mount Lebanon", city: "Dbayeh", ipAddress: "185.107.xx.xx", provider: "Microsoft", progress: 88, certificateEarned: false, learningFormat: "Online Self-Paced", skillLevel: "Intermediate", motivation: "Productivity", status: "completed" },
  { id: "L014", name: "Tarek Abou Zeid", email: "tarek.a@proton.me", phone: "+961 71 123 789", ageRange: "18-24", employment: "Student", jobLevel: "Entry", industry: "Education", yearsExperience: 1, channel: "Universities", entity: "USEK", track: "AI Fundamentals", region: "Mount Lebanon", city: "Kaslik", ipAddress: "185.107.xx.xx", provider: "Microsoft", progress: 65, certificateEarned: false, learningFormat: "Live Online", skillLevel: "Beginner", motivation: "Career Growth", status: "completed" },
  { id: "L015", name: "Rana Hammoud", email: "rana.h@yahoo.com", phone: "+961 70 555 666", ageRange: "25-34", employment: "Unemployed", jobLevel: "Entry", industry: "None", yearsExperience: 2, channel: "NGOs", entity: "Mercy Corps", track: "GenAI", region: "Akkar", city: "Halba", ipAddress: "185.107.xx.xx", provider: "Oracle", progress: 30, certificateEarned: false, learningFormat: "Online Self-Paced", skillLevel: "Beginner", motivation: "Job Transition", status: "draft" },
  { id: "L016", name: "Bilal Traboulsi", email: "bilal.t@gmail.com", phone: "+961 76 000 111", ageRange: "35-44", employment: "Employed", jobLevel: "Senior", industry: "IT Services", yearsExperience: 11, channel: "Syndicates", entity: "Engineers Syndicate", track: "Automation", region: "Bekaa", city: "Baalbek", ipAddress: "185.107.xx.xx", provider: "Microsoft", progress: 100, certificateEarned: true, learningFormat: "Hybrid", skillLevel: "Advanced", motivation: "Upskilling", status: "completed" },
]

export const channels = ["Universities", "Public Sector", "Employers", "Syndicates", "NGOs"]
export const regions = ["Beirut", "Mount Lebanon", "North", "South", "Bekaa", "Nabatieh", "Akkar", "Baalbek-Hermel"]
export const tracks = ["AI Fundamentals", "GenAI", "Data Ethics", "Automation", "Other"]
export const statuses = ["completed", "draft", "invalid"] as const
