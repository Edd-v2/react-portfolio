import React from 'react';

export default function Projects() {
  return (
    <div className=" relative overflow-hidden bg-slate-50" id="projects">
      <div className=" mx-auto max-w-6xl p-5 py-8 md:py-20" id="experience">
        <div className="mb-8 md:mb-16 pb-4 text-6xl font-medium text-gray-300 md:text-left md:text-7xl">
          Projects
        </div>

        <div className="overflow-x-auto space-x-4 no-scrollbar snap-x-mandatory">
        <div className='flex gap-4 py-4 snap-start'>
        {projects.map((proj, index) => {
            return (
              <div className="space-y-4 bg-white p-4 shadow-md min-w-[300px]" key={`project${index}`}>
                <div className="relative h-32 overflow-hidden border-b">
                  <img alt="" src={proj.img} className="absolute left-0 my-auto w-full "></img>
                </div>
                <div className="text-2xl text-cyan-500">{proj.title}</div>
                <div className="h-20 overflow-y-auto text-xs font-light text-gray-400">
                  {proj.details}
                </div>
                <div className="flex items-center justify-end space-x-4 opacity-40">
                  {proj.links.map((link, index) => {
                    return (
                      <a
                        href={link.link}
                        target={'_blank'}
                        rel="noreferrer"
                        className="flex h-5 cursor-pointer items-center text-2xl text-gray-500"
                        key={`project-link${index + proj.title}`}
                      >
                        {link.icon}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: 'Large Videocamera security system managment system',
    details:
      'Build a microservice architecure to handle large amount of request among a nation (secret client but famous among italy) of video registerd by videocameras, only permitted person (governament one) could request video, request and download of video are handled via  secured http request, mqtt queue, websocket  and more ',
    img: 'https://www.trenitalia.com/content/dam/tcom/immagini/trenitalia/aziende/416x359-Treni-Charter.jpg',
    links: [
      {
        icon: (
          <img
            alt=""
            src="https://www.trenitalia.com/content/dam/tcom/immagini/trenitalia/aziende/416x359-Treni-Charter.jpg"
            className="h-full"
          ></img>
        ),
        link: 'secured',
      },
      {
        icon:<i className="fa fa-lock"></i>,
        link: '',
      },
    ],
  },
  {
    title: 'Italdesign - Support High class Car Manufactoring',
    details: "Support High class Car Manufactoring by developing, manage, support, deploy test, refactor, internal application of a big italian car hand maked prototype car ",
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/11/2017-03-07_Geneva_Motor_Show_0818.JPG',
    links: [
      {
        icon: (
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/1/11/2017-03-07_Geneva_Motor_Show_0818.JPG"
            className="h-full"
          ></img>
        ),
      
        link: 'https://www.italdesign.it/en/',
      },
      {
        icon:<i className="fa fa-lock"></i>,
        link: '',
      },
    ],
  },
  {
    title: 'Go and EdgeX - Command Robot and Metrics',
    details:
      'Control Robot, program mission, see metrics via Edgex Foundry product, go, ROS protocol, ROS os, NATS, Jetstream, postgis',
    img: 'https://www.edgexfoundry.org/cmsfiles/image/CaseStudies/case-study-image-manufacturing.jpg',
    links: [
      {
        icon: (
          <img
            alt=""
            src="https://www.edgexfoundry.org/cmsfiles/image/CaseStudies/case-study-image-manufacturing.jpg"
            className="h-full"
          ></img>
        ),
        link: 'https://www.edgexfoundry.org/cmsfiles/image/CaseStudies/case-study-image-manufacturing.jpg',
      },
      {
        icon: <i className="devicon-github-original"></i>,
        link: 'https://www.edgexfoundry.org/',
      },
    ],
  },
  {
    title: 'Portfolio',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5zQQfgYdauP902KBIcvqGVfUGvUT4gyCJw&s',
    details: "React website.",
    links: [
      {
        icon: (
          <img
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5zQQfgYdauP902KBIcvqGVfUGvUT4gyCJw&s"
            className="h-full"
          ></img>
        ),
        link: '',
      },
      {
        icon: <i className="devicon-github-original"></i>,
        link: 'https://github.com/Edd-v2',
      },
    ],
  },
 
];
