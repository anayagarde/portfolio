import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaMedium} from 'react-icons/fa'


const SocialMedia = () => {
    const socialMediaLinks = [
        {
            id: 1,
            link: "https://www.linkedin.com/in/anayagarde",
            icon: (
            <FaLinkedin size={30}/>
            ),
        },
        {
            id: 2,
            link: "https://github.com/anayagarde",
            icon: (
                <FaGithub size={30}/>
                ),
        },
        {
            id: 3,
            link: "https://anayagarde.medium.com",
            icon: (
                <FaMedium size={30}/>
                ),
        },

    ]
  return (
    <div className='flex  '>
        <ul>
            {socialMediaLinks.map(r => (
            <li key={r.id} className='flex justify-between items-center w-40 h-1/4 px-3'>
                <a href={r.link} target='_blank' className='flex justify-betweenen text-white'>
                    {r.icon}
                </a>
            </li>
            ))}
           
        </ul>
    </div>
  )
}

export default SocialMedia