import {GanttChartSquare, Blocks, Gem} from 'lucide-react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'


const serviceData= [
    {
        icon:<GanttChartSquare size={50} strokeWidth={0.8}></GanttChartSquare>,
        title : 'Art Teaching and Workshops',
        description : 'I offers art teaching services encompassing a range of techniques including oil painting, acrylic painting (abstract and landscapes), live sketching, and more. She conducts workshops tailored to different skill levels, fostering creativity and technical proficiency in her students.'
    
    },
    {
        icon:<Blocks size={50} strokeWidth={0.8}></Blocks>,
        title : 'Personalized Art Commissions',
        description : 'I accepts commissions for personalized artworks, including portraits and custom paintings. She collaborates closely with clients to understand their vision and preferences, delivering high-quality, bespoke artworks that capture emotions and memories.'
    
    },
    {
        icon:<Gem size={50} strokeWidth={0.8}></Gem>,
        title : 'Online Art Courses or Masterclasses',
        description : 'I offer online art courses or masterclasses focusing on specific techniques such as oil painting, acrylic painting, portrait drawing, or landscape composition. These courses could cater to beginners looking to learn foundational skills or to more advanced artists seeking to refine their techniques.'
    
    }
    
    
    
]





const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
        <div className="container mx-auto">
            <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>My Services</h2>
            {/* grid items */}

            <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                {serviceData.map((item,index)=>{
                    return <Card className='w-full max-w-[424px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                        <CardHeader className='text-primary absolute -top-[60px] hidden sm:block'>
                            <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center sm:p-4'>{item.icon}</div>
                        </CardHeader>
                        <CardContent className='text-center'>
                                <CardTitle className='mb-4'>{item.title}</CardTitle>
                                <CardDescription className='text-lg'>{item.description}</CardDescription>
                        </CardContent>
                    </Card>                    
                })}
            </div>
        </div>
    </section>
  )
}

export default Services
