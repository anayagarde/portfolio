import React from 'react'
import { FaGithub, FaLinkedin, FaMedium} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

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
        {
            id: 4,
            link: "https://twitter.com/AnayaGarde",
            icon: (
                <FaXTwitter size={30} />
            )
        }

    ]
  return (
    <div className='flex px-8 py-16'>
            {socialMediaLinks.map(r => (
                <a href={r.link} target='_blank' className='flex justify-betweenen text-grey-800 dark:text-white px-4'>
                    {r.icon}
                </a>

            ))}
    </div>
  )
}

export default SocialMedia