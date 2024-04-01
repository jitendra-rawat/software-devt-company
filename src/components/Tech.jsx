import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="bg-black hover:text-white p-6 rounded-md shadow-md w-[300px] lg:w-[400px] h-[450px] mb-12 cursor-pointer hover:bg-red-700 ">
      <h3 className="text-2xl font-semibold mb-4 text-red-500 font-poppins hover:text-white">{title}</h3>
      <ul className="text-white font-poppins mb-2 text-base">
        {content.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
      <div className=' my-auto'>

    
      <button className=" bg-red-700 hover:bg-black  text-white font-bold py-2 px-4 rounded mt-4">Discover More</button>
      </div>
   
    </div>
  );
};

const CardComponent = () => {
  const cardsData = [
    {
      title: "Frontend",
      content: ["UI/UX", "React JS", "Angular JS", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Backend Modernization",
      content: ["Java", "Spring Boot", "Micro Servies", "SOAP AND REST","SQL and NoSQL","API Development","Platform migrations","Performance Improvements"]
    },
    {
        title: "Data Engineering",
        content: ["Spark", "Tableau", "RedShift", "SnowFlake","Data Quality","Data Modeling","Data Governance","Dash Boards Building","Machine Learning Models"]
      },
      {
        title: "Cloud Operations",
        content: ["AWS", "Azure", "CICD", "DevOps","Docker","Openshift","Kubernates"]
      },
      {
        title: "Automation",
        content: ["Cucumber", "Chat Bots", "Selenium", "RestAssured","Web Automation","API Automation"]
      }
  ];

  return (
    <div className="lg:max-w-7xl container mx-auto py-28 px-4 lg:px-0">
        <h2 className='font-poppins text-center text-4xl font-bold my-8'>Technologies</h2>

        <div className='flex flex-wrap justify-around items-center'>

      
  
      {cardsData.map((card, index) => (
        <div key={index} >
          <Card title={card.title} content={card.content} />
        </div>
      ))}

</div>
    </div>
  );
};

export default CardComponent;
