import { Navbar } from './Navbar/Navbar'
import {Intro} from './Intro/Intro'
import {Sponsors} from './sponsors/Sponsors'
import {Illustration} from './Illustration/Illustration'
import {Getstarted} from './getstarted/Getstarted'
import {Feature} from './feature/Feature'
import {Testimonials} from './Testimonials/Testimonials'

export const Home =({setUser,user})=>{
  return(
    <div>
      <Navbar setUser={setUser} user={user} />
      <Intro />
      <Sponsors />
      <Illustration />
      <Getstarted />
      <Feature />
      <Testimonials />
      
    </div>
  )
}