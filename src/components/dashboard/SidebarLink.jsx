import React from 'react'
import * as Icons from 'react-icons/vsc'
import { useDispatch } from 'react-redux';
import { Link, matchRoutes, useLocation } from 'react-router-dom';

const SidebarLink = ({link}) => {
    const Icon = Icons[link.icon];
    const location = useLocation();
    const dispatch = useDispatch();
    const isActive = matchRoutes([{path: link.path}], location);
  return (
    <div>
            
              <Link to={link.path} key={link.id} className={`mb-4 hover:bg-gray-800 p-2 rounded ${isActive ? 'bg-yellow-800' : 'bg-gray-700'}`}>
                <span className={`${isActive ? 'opacity-100' : 'opacity-0'} absolute left-0  rounded-tr rounded-br `}>
                </span>

                <div className='flex items-center gap-x-2 text-white ml-2'>

              
                    <Icon className='text-lg'/>
                 
                  <span>{link.name}</span>
                </div>
              </Link>
            
    </div>
  )
}

export default SidebarLink
