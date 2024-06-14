'use client'
import {RiYoutubeFill,
  RiLinkedinFill,
  RiInstagramFill,
  RiFacebookFill
} from 'react-icons/ri'
import Link from 'next/link'


const icons = [
  {path: 'https://www.youtube.com/@Artist_Sonali_Tiwari', name:<RiYoutubeFill />},
  {path: 'https://www.linkedin.com/in/artist-sonali-tiwari-90996b250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', name:<RiLinkedinFill />},
  {path: 'https://www.instagram.com/art__gust?igsh=MWRjMGFqNHZxMmM5cw==', name:<RiInstagramFill />},
  {path: 'https://www.facebook.com/profile.php?id=100030301280006&mibextid=ZbWKwL', name:<RiFacebookFill />},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>{icons.map((icon,index)=>{
      return <Link href={icon.path} key={index}><div className={`${iconStyles}`}>{icon.name}</div></Link>
    })}</div>
  )
}

export default Social
