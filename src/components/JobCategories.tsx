import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Utensils, Scissors, Baby, BookOpen, Heart, Package, X, User, Calendar, MapPin, Briefcase } from "lucide-react";

// ✅ LOCAL IMAGES
import caregivingImg from "../Assets/Images/caregiving.png";
import childcareImg from "../Assets/Images/childcare.png";
import culinaryImg from "../Assets/Images/culinary-services.png";
import digitalImg from "../Assets/Images/digital-tasks.png";
import handicraftsImg from "../Assets/Images/handicrafts.png";
import tailoringImg from "../Assets/Images/tailoring-fashion.png";

const categories = [
  { id: "culinary", title: "Culinary Services", icon: Utensils, desc: "Cooking & meal prep", color: "bg-orange-500", image: culinaryImg },
  { id: "tailoring", title: "Tailoring & Fashion", icon: Scissors, desc: "Clothing & stitching", color: "bg-pink-500", image: tailoringImg },
  { id: "caregiving", title: "Caregiving", icon: Heart, desc: "Elderly care", color: "bg-red-500", image: caregivingImg },
  { id: "childcare", title: "Childcare", icon: Baby, desc: "Care for children", color: "bg-blue-500", image: childcareImg },
  { id: "digital", title: "Digital Tasks", icon: BookOpen, desc: "Online work", color: "bg-purple-500", image: digitalImg },
  { id: "handicrafts", title: "Handicrafts", icon: Package, desc: "Creative handmade work", color: "bg-green-500", image: handicraftsImg },
];

interface JobCategoriesProps {
  user: { name: string; email: string } | null;
}

export default function JobCategories({ user }: JobCategoriesProps) {
  const [selectedJob, setSelectedJob] = useState<typeof categories[0] | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    location: "",
    experience: "Beginner (Need Training)"
  });

  React.useEffect(() => {
    if (selectedJob && user) {
      setFormData(prev => ({
        ...prev,
        name: user.name
      }));
    }
  }, [selectedJob, user]);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);
    setTimeout(() => {
      setSelectedJob(null);
      setIsRegistered(false);
    }, 2000);
  };

  return (
    <section className="py-24 px-4 bg-yellow-50">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4 uppercase">
            Available Domains
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedJob(cat)}
              className="cursor-pointer"
            >
              <Card className="group relative bg-white overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all border">

                {/* IMAGE */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img 
                    src={cat.image} 
                    alt={cat.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* ICON BADGE */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-pink-400 flex items-center justify-center 
                shadow-md shadow-pink-300/40 
                animate-pulse
                transition-all duration-300
                group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-pink-400/70">
                    <cat.icon className="text-white w-6 h-6" />
                  </div>
                </div>  

                {/* CONTENT */}
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-black">
                    {cat.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm">
                    {cat.desc}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex justify-between items-center">
                  <Badge className="bg-yellow-100 text-yellow-700 text-xs">
                    Open
                  </Badge>
                  <span className="text-yellow-600 text-xs font-semibold group-hover:translate-x-1 transition-transform">
                    Apply →
                  </span>
                </CardContent>

              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-lg bg-white p-8 rounded-3xl shadow-2xl"
            >
              <button 
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4"
              >
                <X />
              </button>

              {isRegistered ? (
                <div className="text-center py-10">
                  <h3 className="text-2xl font-bold">Registration Successful!</h3>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6">
                    Apply for {selectedJob.title}
                  </h3>

                  <form onSubmit={handleRegister} className="space-y-4">

                    <input
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full border p-3 rounded"
                    />

                    <input
                      required
                      type="number"
                      placeholder="Age"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                      className="w-full border p-3 rounded"
                    />

                    <input
                      required
                      placeholder="Location"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full border p-3 rounded"
                    />

                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      className="w-full border p-3 rounded"
                    >
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Expert</option>
                    </select>

                    <button className={`w-full py-3 ${selectedJob.color} text-white font-bold rounded`}>
                      Submit
                    </button>

                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}