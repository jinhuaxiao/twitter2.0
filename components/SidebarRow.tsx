import React,{SVGProps} from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element 
    title: string 
}

function SidebarRow({Icon,title}: Props ) {
  return (
    <div className='group flex items-center space-x-2 px-4 py-3 cursor-pointer  rounded-full hover:bg-gray-100 transition duration-200'>
        <Icon className='h-6 w-6' />
        <p className='hidden md:inline-flex text-base font-light lg:text-xl group-hover:text-twitter'>{title}</p>
    </div>
  )
}

export default SidebarRow