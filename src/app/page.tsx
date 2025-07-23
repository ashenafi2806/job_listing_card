"use client"

import Link from "next/link"
import jobsData from "./data/jobs.json"

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    Marketing: "bg-green-100 text-green-800 border-green-200",
    Design: "bg-orange-100 text-orange-800 border-orange-200",
    IT: "bg-blue-100 text-blue-800 border-blue-200",
    Development: "bg-purple-100 text-purple-800 border-purple-200",
    "Data Science": "bg-red-100 text-red-800 border-red-200",
    Analytics: "bg-yellow-100 text-yellow-800 border-yellow-200",
    "Customer Service": "bg-pink-100 text-pink-800 border-pink-200",
    Support: "bg-indigo-100 text-indigo-800 border-indigo-200",
    Art: "bg-teal-100 text-teal-800 border-teal-200",
  }
  return colors[category] || "bg-gray-100 text-gray-800 border-gray-200"
}

export default function JobListPage() {
  const jobs = jobsData.job_postings

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="w-full px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Opportunities</h1>
          <p className="text-gray-600">Showing {jobs.length} results</p>
        </div>

        <div className="w-full space-y-6">
          {jobs.map((job) => (
            <Link key={job.id} href={`/job/${job.id}`}>
              {/* Custom Card */}
              <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
                {/* Card Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start gap-4">
                    {/* Custom Avatar */}
                    <div className="w-16 h-16 rounded-full border-2 border-gray-200 overflow-hidden bg-yellow-100 flex items-center justify-center flex-shrink-0">
                      <img
                        src={job.image || "/placeholder.svg"}
                        alt={job.company}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement
                          target.style.display = "none"
                          const parent = target.parentElement
                          if (parent) {
                            parent.innerHTML = `<span class="text-yellow-800 text-lg font-semibold">${job.company
                              .split(" ")
                              .map((word) => word[0])
                              .join("")
                              .slice(0, 2)}</span>`
                          }
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      {/* Card Title */}
                      <h2 className="text-xl font-semibold mb-1 capitalize text-gray-900">{job.title}</h2>
                      {/* Card Description */}
                      <p className="text-gray-600 mb-2">
                        {job.company} • {job.about.location}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">{job.description}</p>
                    </div>
                  </div>
                </div>
                {/* Card Content */}
                <div className="px-6 pb-6">
                  <div className="flex flex-wrap gap-2">
                    {/* Custom Badge */}
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
                      In Person
                    </span>
                    {job.about.categories.map((category) => (
                      <span
                        key={category}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(category)}`}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
