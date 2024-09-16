import React, { useRef, useState, useEffect } from 'react';
import { Chrono } from 'react-chrono';

const TimelineComponent = () => {
  const containerRef = useRef(null);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const items = [
    {
      "title": "1951",
      "cardTitle": "First Amendment",
      "cardSubtitle": "Empowered the state to make special provisions for the advancement of socially and educationally backward classes.",
      "cardDetailedText": "Added Articles 15(4) and 31A, and amended Article 19 to restrict the right to freedom of speech and expression if it affects public order, morality, or the sovereignty and integrity of India.",
      "media": {
        "type": "IMAGE",
        "source": {
          "url": "/api/placeholder/400/300"
        }
      }
    },
    {
      "title": "1971",
      "cardTitle": "Twenty-fourth Amendment",
      "cardSubtitle": "Gave Parliament the power to amend any part of the Constitution.",
      "cardDetailedText": "Article 368 was amended to clearly state that Parliament has the power to amend any provision of the Constitution, and no amendment can be challenged in court.",
      "media": {
        "type": "IMAGE",
        "source": {
          "url": "/api/placeholder/400/300"
        }
      }
    },
    {
      "title": "1978",
      "cardTitle": "Forty-fourth Amendment",
      "cardSubtitle": "Reduced the power to impose emergency provisions.",
      "cardDetailedText": "Reversed several changes made by the 42nd Amendment. It restored judicial review of constitutional amendments and made the right to property a legal right instead of a fundamental right.",
      "media": {
        "type": "IMAGE",
        "source": {
          "url": "/api/placeholder/400/300"
        }
      }
    },
    {
      "title": "1989",
      "cardTitle": "Sixty-first Amendment",
      "cardSubtitle": "Lowered the voting age from 21 to 18.",
      "cardDetailedText": "Amended Article 326, lowering the age for voting in elections to the Lok Sabha and to the Legislative Assemblies of States from 21 to 18 years.",
      "media": {
        "type": "IMAGE",
        "source": {
          "url": "/api/placeholder/400/300"
        }
      }
    },
    {
      "title": "1992",
      "cardTitle": "Seventy-third Amendment",
      "cardSubtitle": "Panchayati Raj institutions formalized.",
      "cardDetailedText": "Introduced a new Part IX to the Constitution, providing for Panchayati Raj institutions in rural areas and giving constitutional status to these institutions.",
      "media": {
        "type": "IMAGE",
        "source": {
          "url": "/api/placeholder/400/300"
        }
      }
    },
    {
      "title": "2001",
      "cardTitle": "Eighty-sixth Amendment",
      "cardSubtitle": "Right to education made a fundamental right.",
      "cardDetailedText": "Inserted Article 21A, making the provision of free and compulsory education for children aged 6 to 14 a fundamental right.",
      "media": {
        "type": "IMAGE",
        "source": {
          "url": "/api/placeholder/400/300"
        }
      }
    },
    {
      "title": "2002",
      "cardTitle": "Ninety-second Amendment",
      "cardSubtitle": "Added languages to the Eighth Schedule.",
      "cardDetailedText": "Included Bodo, Dogri, Maithili, and Santali languages in the Eighth Schedule, bringing the total number of languages listed in the Schedule to 22.",
      "media": {
        "type": "IMAGE",
        "source": {
          "url": "/api/placeholder/400/300"
        }
      }
    },
    {
      "title": "2005",
      "cardTitle": "Ninety-third Amendment",
      "cardSubtitle": "Reservation in educational institutions.",
      "cardDetailedText": "Provided for reservations in admission to private unaided educational institutions for socially and educationally backward classes and SC/ST students.",
      "media": {
        "type": "IMAGE",
        "source": {
          "url": "/api/placeholder/400/300"
        }
      }
    },
    {
      "title": "2014",
      "cardTitle": "Ninety-ninth Amendment",
      "cardSubtitle": "Introduced the National Judicial Appointments Commission (NJAC).",
      "cardDetailedText": "Established the NJAC for the appointment of judges to the higher judiciary, though the amendment was later struck down by the Supreme Court as unconstitutional.",
      "media": {
        "type": "IMAGE",
        "source": {
          "url": "/api/placeholder/400/300"
        }
      }
    },
    {
      "title": "2019",
      "cardTitle": "One Hundred and Third Amendment",
      "cardSubtitle": "Economic reservation introduced.",
      "cardDetailedText": "Provided 10% reservation in government jobs and educational institutions for economically weaker sections of the general category.",
      "media": {
        "type": "IMAGE",
        "source": {
          "url": "/api/placeholder/400/300"
        }
      }
    }
    
    // ... (other items remain the same)
  ];

  const scrollToItem = (itemIndex) => {
    setActiveItemIndex(itemIndex);
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: window.innerHeight - 200 // Subtracting 200px for header and other elements
        });
      }
    };

    window.addEventListener('resize', updateDimensions);
    updateDimensions();

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cards = container.querySelectorAll('.timeline-card-content');
      if (cards[activeItemIndex]) {
        const card = cards[activeItemIndex];
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [activeItemIndex]);

  const getChronoMode = () => {
    return dimensions.width < 640 ? 'VERTICAL' : 'VERTICAL_ALTERNATING';
  };

  return (
    <div className="w-full h-screen flex flex-col bg-amber-50">
      <div className="p-2 sm:p-6 bg-amber-600 text-white">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-center">
          Amendments Timeline View
        </h2>
      </div>

      <div ref={containerRef} className="flex-grow overflow-y-auto">
        {dimensions.width > 0 && (
          <Chrono
            items={items}
            mode={getChronoMode()}
            cardHeight={dimensions.width < 640 ? 220 : 260}
            enableOutline
            useReadMore
            theme={{
              primary: '#f59e0b', // Tailwind's amber color
              secondary: '#fef3c7', // Amber-100 for the card background
              cardBgColor: '#fff8e1', // A soft amber background for the cards
              cardForeColor: '#78350f', // Darker amber text for readability
              titleColor: '#d97706', // Dark amber for titles
            }}
          >
            <div className="chrono-icons">
              {items.map((item, index) => (
                <div key={index} className="bg-amber-600 rounded-full w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              ))}
            </div>
          </Chrono>
        )}
      </div>
    </div>
  );
};

export default TimelineComponent;
