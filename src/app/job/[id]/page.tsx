import { notFound } from "next/navigation"
import jobsData from "../../data/jobs.json"

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    Marketing: "bg-orange-100 text-orange-800",
    Design: "bg-green-100 text-green-800",
    IT: "bg-blue-100 text-blue-800",
    Development: "bg-purple-100 text-purple-800",
    "Data Science": "bg-red-100 text-red-800",
    Analytics: "bg-yellow-100 text-yellow-800",
    "Customer Service": "bg-pink-100 text-pink-800",
    Support: "bg-indigo-100 text-indigo-800",
    Art: "bg-teal-100 text-teal-800",
  }
  return colors[category] || "bg-gray-100 text-gray-800"
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = jobsData.job_postings.find((j) => j.id === Number.parseInt(params.id))

  if (!job) {
    notFound()
  }

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="w-full px-6 py-8">
        <a href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 no-underline">
          <span className="text-lg">←</span>
          Back to opportunities
        </a>

        <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="xl:col-span-2 space-y-8">
            {/* Description Section */}
            <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  Description
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">{job.description}</p>
              </div>
            </div>

            {/* Responsibilities Section */}
            <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  Responsibilities
                </h2>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Ideal Candidate Section */}
            <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-900">Candidate we want</h2>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <span className="font-semibold text-gray-900">
                    {job.ideal_candidate.age !== "Any" && `${job.ideal_candidate.age} year old `}
                    {job.ideal_candidate.gender !== "Any" && `${job.ideal_candidate.gender} `}
                    {job.title}
                  </span>
                </div>
                <ul className="space-y-4">
                  {job.ideal_candidate.traits.map((trait, index) => (
                    <li key={index} className="text-gray-700">
                      <span className="font-semibold">{trait.split(":")[0]}:</span>
                      {trait.split(":")[1]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* When & Where Section */}
            <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-900">When & Where</h2>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-sm">📍</span>
                  </div>
                  <p className="text-gray-700">{job.when_where}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full space-y-6">
            {/* About Section */}
            <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">About</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">🕒</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Posted On</p>
                    <p className="font-medium text-gray-900">{job.about.posted_on}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">📅</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Deadline</p>
                    <p className="font-medium text-gray-900">{job.about.deadline}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-900">{job.about.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">📅</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Start Date</p>
                    <p className="font-medium text-gray-900">{job.about.start_date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">📅</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">End Date</p>
                    <p className="font-medium text-gray-900">{job.about.end_date}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Categories Section */}
            <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">Categories</h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {job.about.categories.map((category) => (
                    <span
                      key={category}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Required Skills */}
            <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">Required Skills</h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {job.about.required_skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
