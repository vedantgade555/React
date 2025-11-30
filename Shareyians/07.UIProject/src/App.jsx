import './App.css'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


function App() {
  const users = [
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop",
    intro: "Marketing manager exploring new banking solutions.",
    tag: "Satisfied",
    color: "bg-green-500"
  },
  {
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop",
    intro: "Freelancer who struggles with financial guidance.",
    tag: "Underserved",
    color: "bg-yellow-500"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661766386981-1140b7b37193?q=80&w=687&auto=format&fit=crop",
    intro: "Young professional searching for better credit solutions.",
    tag: "Underbanked",
    color: "bg-red-500"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661641441533-05ee592f7b4d?w=500&auto=format&fit=crop",
    intro: "Recent graduate entering financial planning.",
    tag: "Underbanked",
    color: "bg-red-500"
  },
  {
    img: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=700&auto=format&fit=crop",
    intro: "Business owner looking for investment opportunities.",
    tag: "Satisfied",
    color: "bg-green-500"
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=700&auto=format&fit=crop",
    intro: "Student seeking beginner-friendly financial services.",
    tag: "Underserved",
    color: "bg-yellow-500"
  },
  {
    img: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?q=80&w=700&auto=format&fit=crop",
    intro: "Corporate employee exploring digital banking options.",
    tag: "Satisfied",
    color: "bg-green-500"
  },
  {
    img: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?q=80&w=700&auto=format&fit=crop",
    intro: "Remote worker switching to low-fee financial products.",
    tag: "Underbanked",
    color: "bg-red-500"
  },
  {
    img: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=700&auto=format&fit=crop",
    intro: "Retired professional needing simplified financial management.",
    tag: "Satisfied",
    color: "bg-green-500"
  },
  {
    img: "https://images.unsplash.com/photo-1540800458878-5d01be43363a?q=80&w=700&auto=format&fit=crop",
    intro: "Early-stage entrepreneur seeking loans and support.",
    tag: "Underserved",
    color: "bg-yellow-500"
  }
];


  return (
    <>
      <Section1 users={users}></Section1>
      <Section2></Section2>
    </>
  )
}

export default App
