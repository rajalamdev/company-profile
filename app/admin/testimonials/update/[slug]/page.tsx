"use client"  
import { useTesimonial } from "@/app/lib/useTestimonial";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const { data: testiApi } = useTesimonial(params.slug)
  const [name, setName] = useState("")
  const [job, setJob] = useState("")
  const [message, setmessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [featured, setFeatured] = useState(false)

  useEffect(() => {
    if (testiApi){
      setName(testiApi.name)
      setmessage(testiApi.message)
      setJob(testiApi.job)
      setFeatured(testiApi.featured)
    }
  }, [testiApi])

  async function updateTestimonial() {
    setLoading(true)
    fetch("/api/testimonial/"+params.slug, {
        method: "PUT",
        body: JSON.stringify({
            name,
            job,
            message,
            featured
        })
    }).then(res => res.json())
    .then(res => {
      alert("Data Successfully Edited!")
    })
    .finally(() => {
      setLoading(false)
      router.back()
    })
  }

  return (
    <div className="bg-gray-100 h-screen">
      <div onClick={() => router.back()} className="m-4 flex items-center gap-2 cursor-pointer hover:opacity-80">
        <svg
          width="30"
          height="30"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#000000"
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
          />
          <path
            fill="#000000"
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
          />
        </svg>
        <p className="text-lg font-semibold">Back</p>
      </div>
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
        Update Testimonial
      </div>
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Job"
          type="text"
          onChange={(e) => setJob(e.target.value)}
          value={job}
        />
        <textarea
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellCheck="false"
          placeholder="Describe everything about this post here"
          onChange={(e) => setmessage(e.target.value)}
          value={message}
        ></textarea>
        
        <label className="inline-flex items-center cursor-pointer mt-4 w-max">
        <input type="checkbox" onChange={(e) => setFeatured(e.target.checked)} checked={featured} className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium">Featured Testimonial</span>
        </label>


        <div className="icons flex text-gray-500 m-2">
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
          <div className="count ml-auto text-gray-400 text-xs font-semibold">
            0/300
          </div>
        </div>
        <div className="buttons flex">
          <div onClick={() => router.back()} className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">
            Cancel
          </div>
          <button disabled={loading} onClick={updateTestimonial} className={`btn border  p-1 px-4 font-semibold ${loading ? 'cursor-not-allowed opacity-70' : "cursor-pointer"} text-gray-200 ml-2 bg-slate-900`}>
            {loading ? "Loading..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
}
