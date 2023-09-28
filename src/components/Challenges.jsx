import React, { useState } from "react";
import Header from "./Header";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import over from "../assets/overfishing.jpeg";
import habitat from "../assets/habitat.jpg";
import water from "../assets/waterpollution.jpeg";
import spicies from "../assets/spicies.jpg";
import climate from "../assets/climate.jpg";
import regulation from "../assets/complaince.png";
import economy from "../assets/economy.jpg";
import bycatch from "../assets/bycatch.jpg";
import tech from "../assets/tech.jpg";


const Challenges = () => {
  const challenges = [
    {
      title: "Overfishing",
      description:
        "Excessive fishing pressure can deplete fish populations, leading to declines in certain species and disrupting the balance of aquatic ecosystems.",
      image: `${over}`,
      solution: [
        "Implement and enforce fishing quotas and size limits to control fishing effort and prevent overharvesting of fish populations.",
        "Establish marine protected areas (MPAs) or no-take zones to allow fish populations to recover and sustainably manage fishing activities",
        "Promote the use of selective fishing gear and practices that minimize bycatch and avoid catching undersized or vulnerable species",
        "Encourage the adoption of sustainable fishing practices, such as rotational fishing and seasonal closures, to give fish stocks time to regenerate",
      ],
    },
    {
      title: "Habitat Destruction",
      description:
        "Land reclamation, pollution, and other human activities can harm the natural habitats of fish and other aquatic organisms, reducing their numbers and biodiversity.",
      image: `${habitat}`,
      solution: [
        "Develop and enforce regulations to protect critical fish habitats, including wetlands, mangroves, and spawning areas, from activities that cause habitat degradation",
        "Implement habitat restoration projects to rehabilitate damaged ecosystems and create suitable breeding and feeding grounds for fish.",
        "Promote sustainable land-use practices, such as reducing deforestation and runoff pollution, to minimize negative impacts on aquatic habitats.",
        "Involve local communities in conservation efforts and raise awareness about the importance of protecting fish habitats.",
      ],
    },
    {
      title: "Water Poluution",
      description:
        "Pollution from agricultural runoff, industrial discharges, and urban waste can contaminate water bodies, affecting fish health and survival. It can also lead to bioaccumulation of toxins in fish that may pose risks to human consumers.",
      image: `${water}`,
      solution: [
        "Strengthen environmental regulations and enforcement to limit pollution sources and minimize contaminants entering water bodies.",
        "Promote best agricultural practices to reduce the use of chemical fertilizers and pesticides that can leach into waterways.",
        "Encourage industries to adopt cleaner production methods and invest in treatment facilities to minimize wastewater discharge.",
        "Improve waste management and promote recycling to reduce plastic and other debris that can harm fish and their habitats.",
      ],
    },
    {
      title: "Invasive Species",
      description:
        "The introduction of non-native species can disrupt the local ecosystem, outcompeting native fish for resources and potentially causing long-term ecological imbalances.",
      image: `${spicies}`,
      solution: [
        "Implement early detection and rapid response programs to prevent the introduction and spread of invasive species.",
        "Conduct risk assessments and prioritize management actions to control established invasive species.",
        "Develop and implement biosecurity measures to prevent unintentional transport of invasive species through human activities.",
        "Promote public awareness and education to prevent the release of non-native species into natural water bodies.",
      ],
    },
    {
      title: "Climate Change",
      description:
        "Rising temperatures, changing water patterns, and ocean acidification can impact fish migration, reproduction, and survival. Some fish species may be forced to move to new areas or face extinction",
      image: `${climate}`,
      solution: [
        "Develop climate-resilient fisheries management plans that consider the impacts of climate change on fish populations and habitats.",
        "Support research on the effects of climate change on fish behavior, migration patterns, and reproduction to inform adaptive management strategies.",
        "Implement measures to reduce greenhouse gas emissions and contribute to global efforts to mitigate climate change impacts on fisheries.",
        "Assist fishing communities in diversifying livelihoods and adapting to changing conditions, including promoting sustainable aquaculture practices.",
      ],
    },
    {
      title: "Lack of Regulation and Enforcement",
      description:
        "Weak or ineffective fisheries management and lax enforcement of fishing regulations can lead to illegal, unreported, and unregulated (IUU) fishing, exacerbating overfishing and other issues.",
      image: `${regulation}`,
      solution: [
        "Strengthen and update fishing regulations to ensure sustainable practices.",
        "Strengthen legal frameworks for fisheries management and improve coordination between government agencies responsible for enforcement",
        "Promote regional and international cooperation to combat illegal, unreported, and unregulated (IUU) fishing activities across borders.",
        "Assist fishing communities in diversifying livelihoods and adapting to changing conditions, including promoting sustainable aquaculture practices.",
        // Add more solution points here if needed
      ],
    },
    {
      title: "Socio-economic Impacts",
      description:
        "In some cases, overfishing or environmental degradation can negatively affect the livelihoods and food security of local fishing communities, leading to poverty and social instability.",
      image: `${economy}`,
      solution: [
        "Implement social safety nets and livelihood diversification programs to support fishing communities during times of resource scarcity.",
        "Encourage community-based co-management of fisheries to ensure that the benefits of fishing activities are distributed equitably among stakeholders.",
        "Promote fair trade practices and sustainable fisheries certification to increase the value of responsibly caught fish in the market.",
        "Invest in education and skill development programs to enable fishers to participate in alternative income-generating activities.",
      ],
    },
    {
      title: "Bycatch",
      description:
        "In commercial fishing operations, non-target species and juvenile fish are unintentionally caught and discarded, leading to wastage and further strain on vulnerable species.",
      image: `${bycatch}`,
      solution: [
        "Promote the use of selective fishing gear and techniques, such as escape panels and bycatch reduction devices, to minimize unintended catches.",
        "Conduct research on the behavior and distribution of non-target species to develop strategies that reduce bycatch in specific areas.",
        "Implement real-time monitoring and onboard observer programs to record and minimize bycatch incidents during fishing operations.",
        "Encourage fishers to report bycatch incidents and collaborate with scientists to find innovative solutions for bycatch reduction.",
      ],
    },
    {
      title: "Limited Access to Technology and Knowledge",
      description:
        "Small-scale fishers in some regions may lack access to modern fishing techniques, sustainable practices, and educational resources to improve their fishing methods.",
      image: `${tech}`,
      solution: [
        "Provide training and workshops to small-scale fishers on sustainable fishing practices, fish stock assessment, and ecosystem management.",
        "Facilitate knowledge exchange and technology transfer between experienced fishers and newcomers to improve fishing techniques.",
        "Establish community-led fishery management initiatives that empower local fishers to take an active role in conservation efforts.",
        "Support research and innovation in fishing technologies and equipment that are cost-effective and environmentally friendly",
      ],
    },
    // Add more challenges with descriptions and images here
  ];
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const handleLearnMore = (challenge) => {
    setSelectedChallenge(challenge);
  };

  const handleCloseModal = () => {
    setSelectedChallenge(null);
  };
  return (
    <section>
      <Header />
      <div className="container mx-auto mt-4">
        <h1 className="text-4xl font-bold mb-4 text-center">CHALLENGES</h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {challenges.map((challenge, index) => (
            <div>
              <div className="flex flex-col justify-between hover:shadow-2xl bg-white p-4 rounded-lg shadow-md">
                <img
                  src={process.env.PUBLIC_URL + challenge.image}
                  alt={challenge.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <h3 className="text-xl font-bold mt-2">{challenge.title}</h3>
                <p className="text-sm mt-2">{challenge.description}</p>
                <button
                  className="mt-4 bg-teal-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-500 transition-colors duration-300 ease-in-out"
                  onClick={() => handleLearnMore(challenge)}
                >
                  SOLUTION
                </button>
              </div>
              </div>
          ))}
        </div>
      </div>
      {/* Modal to display more information */}
      {selectedChallenge && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">
              {selectedChallenge.title}
            </h3>
            <p className="text-sm mb-4">{selectedChallenge.description}</p>
            <h4 className="font-bold mb-2">Solution:</h4>
            <ul className="list-disc ml-6">
              {selectedChallenge.solution.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 ease-in-out"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    
    </section>
    
  );
};

export default Challenges;
