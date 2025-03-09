const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Projects
        </h1>

        {/* Project 1 and 2 in one row */}
        <div className="flex flex-col md:flex-col gap-10">
          
          {/* PetPals Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Social Media App 
            </h1>
            <p className="text-lg text-gray-700 mb-4">
             I can leverage my skills in CRUD operations, social media app development, and JSON to build
             and enhance interactive digital experiences. Passionate about designing scalable, user-friendly applications
             that facilitate seamless content creation, retrieval, updating, and deletion, while ensuring optimal performance and security.
            </p>
            <a
              href="https://guileless-peony-f3331d.netlify.app"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          {/* Food Cart Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Food Cart
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            Developed a food cart application to facilitate seamless food ordering and vendor management.
            Implemented features such as real-time order tracking, secure payments, and user-friendly UI.
            Used by React.js,Tailwind Css,Firebase for development and deployment.
            </p>
            <a
              href="https://leafy-sopapillas-fb1d45.netlify.app"
              className="text-[#fe5617] text-center font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-col gap-10">
          {/* PetPals Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Resume-Building-Project
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            To develop a resume-building portfolio project using React.js, showcasing my skills in frontend development, component-based architecture, and state management. The project will feature dynamic resume templates and a responsive UI, providing users with an interactive and seamless experience for creating and managing their resumes efficiently.

            </p>
            <a
              href="https://peaceful-brigadeiros-5a3ed8.netlify.app"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

         
        </div>

       

        {/* Project 5 and 6 in one row */}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
          {/* React Weather Pro Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              React Weather Pro
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A weather app that shows current weather based on the city
              searched. Built with React.js, utilizing OpenWeatherMap API to
              fetch real-time weather data.
            </p>
            <a
              href="https://weatherfixpro.netlify.app/"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          {/* Landing Pages Bundle */}
          <div className="w-full md:w-1/2 flex flex-col  bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Landing Pages Bundle
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A collection of landing pages created using HTML, CSS, JavaScript,
              Bootstrap, and Tailwind CSS. Includes multiple responsive and
              engaging layouts.
            </p>
            <a
              href="https://github.com/AMOHAMMEDIMRAN/Amazing-Landing-Page"
              className="text-center text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
