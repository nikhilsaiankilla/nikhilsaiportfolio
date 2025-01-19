import PageTitle from './../components/PageTitle';
import Button from './../components/Button';
import { FaArrowRight } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <section className='w-[97%] h-[94%] bg-[#C1BAB0] m-1 lg:m-5 p-6 md:p-8 lg:p-12 xl:p-16 border-2 border-[#1C1C19] overflow-y-scroll scrollbar-custom scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent texture' >
      <PageTitle title="About Me" />
      <div className='w-full px-5 pb-6 flex flex-col items-start gap-3 mt-3 lg:mt-8 bg-[#cc9c80] StyledReceipt'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl my-1 lg:my-5 font-bold leading-normal capitalize text-[#1a1a1a] navLinksStyle'>
          I'm nikhil sai ankilla,<br /> Software Developer Engineer.
        </h1>
        <p className='text-sm md:text-xl font-medium leading-tight text-wrap text-[#1a1a1a] navLinksStyle'>
          i am the frontend and backend developer and
          this is the dummy text to just i can know that
          how it looks at the end of the you can see
          what ever is shown here this is just what i
          like in my portfolio thankyou for your love and
          support.i am the frontend and backend developer and
          this is the dummy text to just i can know that
          how it looks at the end of the you can see
          what ever is shown here this is just what i
          like in my portfolio thankyou for your love and
          support.
        </p>
        <p className='text-md md:text-xl font-medium leading-tight text-wrap text-[#1a1a1a] navLinksStyle'>
          i am the frontend and backend developer and
          this is the dummy text to just i can know that
          how it looks at the end of the you can see
          what ever is shown here this is just what i
          like in my portfolio thankyou for your love and
          support.
        </p>
        <p className='text-md md:text-xl font-medium leading-tight text-wrap text-[#1a1a1a] navLinksStyle'>
          i am the frontend and backend developer and
          this is the dummy text to just i can know that
          how it looks at the end of the you can see
          what ever is shown here this is just what i
          like in my portfolio thankyou for your love and
          support. i am the frontend and backend developer and
          this is the dummy text to just i can know that
          how it looks at the end of the you can see
          what ever is shown here this is just what i
          like in my portfolio thankyou for your love and
          support.
        </p>

        <Button title="know more about me" icon={<FaArrowRight />} />
      </div>
    </section>
  )
}

export default AboutPage