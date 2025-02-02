import React from 'react'

const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/h.JPG" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “My home is about 3marla and consist of 4 story.There are 6 rooms and 2 kichan in it.There is a Gov.t school in the front of my house.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Punjab
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Rahim yar khan, muslim colony
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page