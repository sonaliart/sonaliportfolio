import { Sheet,SheetContent,SheetTrigger } from '@/components/ui/sheet'
import { AlignJustify } from 'lucide-react'

import Nav from './Nav'
import Logo from '../Logo'
import Social from '../Social'


const MobileNav = ({theme}) => {
  return <Sheet>
    <SheetTrigger>
      <AlignJustify />
    </SheetTrigger>
    <SheetContent>
      <div className='flex flex-col items-center justify-between h-full py-8'>
        <div className='flex flex-col items-center gap-y-32'>
          <Logo theme={theme}/>
          <Nav containerStyles='flex flex-col items-center gap-y-6'
          linkStyles='text-2xl'/>
        </div>
        <Social containerStyles='flex gap-x-4' iconStyles={'text-2xl'}/>

      </div>
    </SheetContent>
  </Sheet>
}

export default MobileNav