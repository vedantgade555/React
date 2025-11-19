import { Car } from "lucide-react";
import "./App.css";
// import {Bookmark} from 'lucide-react'
import Card from "./components/Card";
import User from "./components/User";

function App() {
  const jobs = [
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "2 weeks ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$85/hr",
      location: "Pune, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$140/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "Product Designer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$110/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$150/hr",
      location: "Pune, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$100/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$130/hr",
      location: "Delhi, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "1 month ago",
      post: "AI/ML Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$160/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/spotify.com",
      companyName: "Spotify",
      datePosted: "2 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$115/hr",
      location: "Chennai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/airbnb.com",
      companyName: "Airbnb",
      datePosted: "8 days ago",
      post: "DevOps Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$125/hr",
      location: "Pune, India",
    },
  ];

  // console.log(jobs)

  return (
    <>
      <div className="parent">
       {jobs.map(function(elem){
         return <Card company={elem.companyName}></Card>
       })}
      </div>
    </>
  );
}

export default App;
