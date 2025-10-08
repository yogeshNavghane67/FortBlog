import { assets, footer_data } from "../assets/assets"

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3">
        <div className="flex md:flow-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
           
           <div>
            <img src={assets.logo} alt="logo" className="w-32 sm:w-44"/>
            <p className="max-w-[410px] mt-6">Explore the majestic Sahyadri Forts—a journey through the rich history, architecture, and legends of Maharashtra’s
                 mountain fortresses. Discover stories of valor, Maratha glory, and hidden trails that echo the legacy of Chhatrapati Shivaji Maharaj.</p>
           </div>

           <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
            {footer_data.map((section,index)=>(
                <div key={index}>
                    <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                    <ul className="text-sm space-y-1">
                        {section.links.map((link,i)=>(
                            <li key={i}>
                                <a href="#" className="hover:underline transition">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
           </div>

        </div>
        <p className="py-4 text-center text-sm md:text-base text-gray-500/80">Copyright 2025 @ FortBlog YN Edits - All Right Reserved.</p>
    </div>
  )
}

export default Footer