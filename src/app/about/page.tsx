import React from 'react'

const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/f.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “My name is Farhan ali.I am a student of 12th class in Khawaja fareed college.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Farhan Ali
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Freelancer, KFC
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page