import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Form from "@/components/Form";
const contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
            <p className="subtitle max-w-[400px]">
            I believe in the transformative power of art to inspire and evoke emotions. Each stroke on canvas is a journey through thoughts and feelings, creating connections beyond words. Let's collaborate and bring meaningful visions to life.
            </p>
          </div>
          {/* illistartion */}
          <div className="hidden xl:flex w-full bg-contact_light dark:bg-contact_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* info text & form */}
        <div>
          <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
            <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24">
              <div className="flex items-center gap-x-8">
                <MailIcon className="text-primary" size={18}></MailIcon>
                <div>artgustbysonali@gmail.com</div>
              </div>
              <div className="flex items-center gap-x-8">
                <HomeIcon className="text-primary" size={18}></HomeIcon>
                <div>Lucknow, Uttar Pradesh, India</div>
              </div>
            </div>
            <Form></Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
