'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface TravelDestination {
  title: string;
  description: string;
  images: string[];
  videos?: string[];
  date: string;
  customOrder?: {
    videos: string[];
    images: string[];
    finalVideos?: string[];
  };
}

const Travel = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDestinationImages, setCurrentDestinationImages] = useState<string[]>([]);

  const openLightbox = (destinationIndex: number, imageIndex: number) => {
    setCurrentDestinationImages(destinations[destinationIndex].images);
    setCurrentIndex(imageIndex);
    setOpen(true);
  };

  const destinations: TravelDestination[] = [
    {
      title: "Dubai, UAE",
      description: "Experiencing Dubai's futuristic skyline, world-class luxury, and the rich desert landscapes that surround the city and found Berlin hiding in Dubai !",
      images: [
        "/travels/2025/dubai/IMG_2259.jpeg",
        "/travels/2025/dubai/IMG_5423.jpg",
        "/travels/2025/dubai/IMG_5488.jpg",
        "/travels/2025/dubai/IMG_5570.jpg",
        "/travels/2025/dubai/dubaiskyline.jpg",
        "/travels/2025/dubai/fooddubai.JPG"
      ],
      videos: [
        "/travels/2025/dubai/dubaiperfume_compressed.mp4",
        "/travels/2025/dubai/pool_compressed.mp4"
      ],
      date: "2025"
    },
    {
      title: "Budva & Kotor - Montenegro",
      description: "Wandering through Montenegro's coastal treasures from Budva's beaches and old town charm to Kotor's breathtaking bay and mountain views.",
      images: [
        "/travels/2025/montenegro/IMG_4560.PNG",
        "/travels/2025/montenegro/IMG_4556.jpg",
        "/travels/2025/montenegro/IMG_4555.jpg"
      ],
      videos: [
        "/travels/2025/montenegro/IMG_4232_compressed.mp4",
        "/travels/2025/montenegro/IMG_4379_compressed.mp4",
        "/travels/2025/montenegro/IMG_4441_compressed_v2.mp4"
      ],
      customOrder: {
        videos: [
          "/travels/2025/montenegro/IMG_4232_compressed.mp4",
          "/travels/2025/montenegro/IMG_4379_compressed.mp4",
          "/travels/2025/montenegro/IMG_4441_compressed_v2.mp4"
        ],
        images: [
          "/travels/2025/montenegro/IMG_4560.PNG",
          "/travels/2025/montenegro/IMG_4556.jpg",
          "/travels/2025/montenegro/IMG_4555.jpg"
        ]
      },
      date: "2025"
    },
    {
      title: "Dubrovnik, Croatia",
      description: "Walking through Dubrovnik feels like a dream — ancient walls, marble streets, and epic sea views. No wonder Game of Thrones was filmed here.",
      images: [
        "/travels/2025/dubrovnik/IMG_4544.PNG",
        "/travels/2025/dubrovnik/IMG_4552.PNG",
        "/travels/2025/dubrovnik/IMG_4553.PNG",
        "/travels/2025/dubrovnik/IMG_4554.PNG"
      ],
      videos: [
        "/travels/2025/dubrovnik/IMG_4052_compressed.mp4",
        "/travels/2025/dubrovnik/IMG_4054_compressed_v2.mp4",
        "/travels/2025/dubrovnik/IMG_4115_compressed_v2.mp4"
      ],
      customOrder: {
        videos: [
          "/travels/2025/dubrovnik/IMG_4052_compressed.mp4",
          "/travels/2025/dubrovnik/IMG_4054_compressed_v2.mp4",
          "/travels/2025/dubrovnik/IMG_4115_compressed_v2.mp4"
        ],
        images: [
          "/travels/2025/dubrovnik/IMG_4544.PNG",
          "/travels/2025/dubrovnik/IMG_4552.PNG",
          "/travels/2025/dubrovnik/IMG_4554.PNG"
        ]
      },
      date: "2025"
    },
    {
      title: "Stockholm, Sweden",
      description: "Exploring Stockholm means islands, bridges, a little royal charm, and sleek city design all flowing into vibrant waterfront life.",
      images: [
        "/travels/2025/stockholm/IMG_3786.PNG",
        "/travels/2025/stockholm/IMG_4541.PNG",
        "/travels/2025/stockholm/citysweden.JPG"
      ],
      videos: [
        "/travels/2025/stockholm/IMG_3784_compressed.mp4",
        "/travels/2025/stockholm/IMG_3820_compressed.mp4"
      ],
      date: "2025"
    },
    {
      title: "Nice / Cannes / Monaco",
      description: "Exploring the stunning French Riviera: from the charming streets of Nice to the glamorous Cannes and the luxurious Monaco",
      images: [
        "/travels/2025/french-riviera/picturea.jpeg",
        "/travels/2025/french-riviera/pictureb.jpeg",
        "/travels/2025/french-riviera/picturec.jpeg",
        "/travels/2025/french-riviera/pictured.jpeg",
        "/travels/2025/french-riviera/picturee.jpeg",
        "/travels/2025/french-riviera/picturef.jpeg"
      ],
      date: "2025"
    },
    {
      title: "Helsinki, Finland",
      description: "Discovering the modern Nordic capital with its stunning design, vibrant food scene, and beautiful archipelago",
      images: [
        "/travels/2024/helsinki/IMG_1134.jpg",
        "/travels/2024/helsinki/IMG_1141.jpg",
        "/travels/2024/helsinki/IMG_1117.jpg",
        "/travels/2024/helsinki/IMG_1107.jpg",
        "/travels/2024/helsinki/IMG_1102.jpg",
        "/travels/2024/helsinki/IMG_1101.jpg",
        "/travels/2024/helsinki/IMG_1098.jpg",
        "/travels/2024/helsinki/IMG_1091.jpg",
        "/travels/2024/helsinki/IMG_1088.jpg",
        "/travels/2024/helsinki/IMG_1087.jpg",
        "/travels/2024/helsinki/IMG_1085.jpg"
      ],
      date: "2024"
    },
    {
      title: "Tallinn, Estonia",
      description: "Wandering through the medieval streets of one of Europe's best-preserved old towns while experiencing Estonia's digital innovation",
      images: [
        "/travels/2024/tallinn/IMG_1204.jpg",
        "/travels/2024/tallinn/IMG_1197.jpg",
        "/travels/2024/tallinn/IMG_1192.jpg",
        "/travels/2024/tallinn/IMG_1176.jpg",
        "/travels/2024/tallinn/IMG_1157.jpg"
      ],
      date: "2024"
    },
    {
      title: "Riga, Latvia",
      description: "Exploring the Art Nouveau architecture and rich history of Latvia's capital city",
      images: [
        "/travels/2024/riga/IMG_1241.jpg",
        "/travels/2024/riga/IMG_1245.jpg",
        "/travels/2024/riga/IMG_1249.jpg",
        "/travels/2024/riga/IMG_1250.jpg",
        "/travels/2024/riga/IMG_1252.jpg",
        "/travels/2024/riga/IMG_1255.jpg",
        "/travels/2024/riga/IMG_1257.jpg"
      ],
      date: "2024"
    },
    {
      title: "Athens & Corfu, Greece",
      description: "From ancient ruins of the Acropolis to the emerald waters of Corfu, experiencing the diverse beauty of Greece",
      images: [
        "/travels/2024/athens-corfu/athens/IMG_0829.jpg",
        "/travels/2024/athens-corfu/athens/IMG_0814.jpg",
        "/travels/2024/athens-corfu/athens/IMG_0801.jpg",
        "/travels/2024/athens-corfu/athens/IMG_0790.jpg",
        "/travels/2024/athens-corfu/athens/IMG_0776.jpg",
        "/travels/2024/athens-corfu/corfu/IMG_0729.jpg",
        "/travels/2024/athens-corfu/corfu/IMG_0718.jpg",
        "/travels/2024/athens-corfu/corfu/IMG_0711.jpg",
        "/travels/2024/athens-corfu/corfu/IMG_0710.jpg",
        "/travels/2024/athens-corfu/corfu/IMG_0707.jpg"
      ],
      videos: [
        "/travels/2024/athens-corfu/corfu/IMG_0727.MOV",
        "/travels/2024/athens-corfu/corfu/IMG_0730.MOV"
      ],
      date: "2024"
    },
    {
      title: "Crete, Greece",
      description: "Discovering the largest Greek island's rich mythology, ancient ruins, and stunning Mediterranean landscapes",
      images: [
        "/travels/2024/crete/IMG_1293.jpg",
        "/travels/2024/crete/IMG_1289.jpg",
        "/travels/2024/crete/IMG_1364.jpg",
        "/travels/2024/crete/IMG_1354.jpg",
        "/travels/2024/crete/IMG_1345.jpg",
        "/travels/2024/crete/IMG_1295.jpg"
      ],
      videos: ["/travels/2024/crete/IMG_1294.MOV"],
      date: "2024"
    },
    {
      title: "Ljubljana, Slovenia",
      description: "Experiencing the charming capital of Slovenia with its beautiful bridges, castle, and sustainable urban lifestyle",
      images: [
        "/travels/2024/ljubljana/IMG_1068.jpg",
        "/travels/2024/ljubljana/IMG_1079.jpg",
        "/travels/2024/ljubljana/IMG_1043.jpg",
        "/travels/2024/ljubljana/IMG_1033.jpg",
        "/travels/2024/ljubljana/IMG_1030.jpg",
        "/travels/2024/ljubljana/IMG_0984.jpg",
        "/travels/2024/ljubljana/IMG_0969.jpg",
        "/travels/2024/ljubljana/IMG_0943.jpg",
        "/travels/2024/ljubljana/IMG_0934.jpg",
        "/travels/2024/ljubljana/IMG_0915.jpg",
        "/travels/2024/ljubljana/IMG_0900.jpg",
        "/travels/2024/ljubljana/IMG_0898.jpg",
        "/travels/2024/ljubljana/IMG_0884.jpg",
        "/travels/2024/ljubljana/IMG_0878.jpg",
        "/travels/2024/ljubljana/IMG_0846.jpg",
        "/travels/2024/ljubljana/IMG_0841.jpg",
        "/travels/2024/ljubljana/IMG_0837.jpg"
      ],
      date: "2024"
    }
  ];

  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const headingColor = useColorModeValue('gray.800', 'white');
  const yearColor = useColorModeValue('blue.600', 'blue.300');

  return (
    <Box as="section" py={20} bg={bgColor} minH="100vh">
      <Container maxW="7xl">
        <VStack spacing={20} align="stretch">
          <Box textAlign="center" mb={10}>
            <Heading as="h1" size="2xl" mb={4}>
              Travel Adventures
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Exploring the world, one destination at a time
            </Text>
          </Box>

          <VStack spacing={12} align="stretch">
            {destinations.map((destination, index) => (
              <VStack key={index} spacing={4} align="stretch">
                <Box>
                  <Heading as="h2" size="xl" color={headingColor} mb={1}>
                    {destination.title}
                  </Heading>
                  <Text fontSize="lg" color={yearColor} mb={2}>
                    {destination.date}
                  </Text>
                  <Text fontSize="lg" color="gray.600" maxW="3xl" mb={3}>
                    {destination.description}
                  </Text>
                </Box>

                {destination.customOrder ? (
                  // Custom order rendering for Stockholm
                  <>
                    {/* First videos */}
                    {destination.customOrder?.videos && destination.customOrder.videos.length > 0 && (
                                             <SimpleGrid 
                         columns={{ base: 1, sm: 2, md: 3 }} 
                         spacing={8}
                         w="full"
                         mb={8}
                         justifyItems="center"
                         mx="auto"
                       >
                                                 {destination.customOrder.videos.map((videoUrl, videoIndex) => (
                           <Box
                             key={`first-${videoIndex}`}
                             as="video"
                             controls
                             preload="metadata"
                             w="full"
                             maxW={destination.customOrder.videos.length === 1 ? "600px" : "full"}
                             h="300px"
                             borderRadius="lg"
                             overflow="hidden"
                             boxShadow="lg"
                             playsInline
                             objectFit="cover"
                             muted
                             sx={{
                               '&::-webkit-media-controls-volume-slider': {
                                 display: 'none',
                               },
                               '&::-webkit-media-controls-mute-button': {
                                 display: 'none',
                               },
                               '&::-webkit-media-controls-volume-control-container': {
                                 display: 'none',
                               }
                             }}
                           >
                            <source src={videoUrl} type="video/mp4" />
                            <source src={videoUrl} type="video/quicktime" />
                            <source src={videoUrl} type="video/x-m4v" />
                            Your browser does not support the video tag.
                          </Box>
                        ))}
                      </SimpleGrid>
                    )}

                    {/* Images */}
                    {destination.customOrder?.images && destination.customOrder.images.length > 0 && (
                      <SimpleGrid 
                        columns={{ base: 1, sm: 2, md: 3 }} 
                        spacing={8}
                        w="full"
                        mb={8}
                      >
                        {destination.customOrder.images.map((imageUrl, imgIndex) => (
                          <Box
                            key={`custom-${imgIndex}`}
                            h="300px"
                            bgImage={`url(${imageUrl})`}
                            bgSize="cover"
                            bgPosition="center"
                            borderRadius="lg"
                            overflow="hidden"
                            boxShadow="lg"
                            transition="all 0.3s"
                            cursor="pointer"
                            onClick={() => openLightbox(index, imgIndex)}
                            _hover={{
                              transform: 'scale(1.02)',
                              boxShadow: 'xl',
                            }}
                          />
                        ))}
                      </SimpleGrid>
                    )}

                    
                  </>
                ) : (
                  // Standard rendering for other destinations
                  <>
                    {destination.videos && (
                      <SimpleGrid 
                        columns={{ base: 1, sm: (destination.videos?.length || 0) > 1 ? 2 : 1, md: (destination.videos?.length || 0) > 1 ? 2 : 1 }} 
                        spacing={8}
                        w="full"
                        mb={8}
                        justifyItems="center"
                        maxW={(destination.videos?.length || 0) === 1 ? "600px" : "full"}
                        mx="auto"
                      >
                        {destination.videos.map((videoUrl, videoIndex) => (
                          <Box
                            key={videoIndex}
                            as="video"
                            controls
                            preload="metadata"
                            w="full"
                            maxW={(destination.videos?.length || 0) === 1 ? "600px" : "full"}
                            h="300px"
                            borderRadius="lg"
                            overflow="hidden"
                            boxShadow="lg"
                            playsInline
                            objectFit="cover"
                            muted
                            sx={{
                              '&::-webkit-media-controls-volume-slider': {
                                display: 'none',
                              },
                              '&::-webkit-media-controls-mute-button': {
                                display: 'none',
                              },
                              '&::-webkit-media-controls-volume-control-container': {
                                display: 'none',
                              }
                            }}
                          >
                            <source src={videoUrl} type="video/mp4" />
                            <source src={videoUrl} type="video/quicktime" />
                            <source src={videoUrl} type="video/x-m4v" />
                            Your browser does not support the video tag.
                          </Box>
                        ))}
                      </SimpleGrid>
                    )}

                    <SimpleGrid 
                      columns={{ base: 1, sm: 2, md: 3 }} 
                      spacing={8}
                      w="full"
                    >
                      {destination.images.map((imageUrl, imgIndex) => (
                        <Box
                          key={imgIndex}
                          h="300px"
                          bgImage={`url(${imageUrl})`}
                          bgSize="cover"
                          bgPosition="center"
                          borderRadius="lg"
                          overflow="hidden"
                          boxShadow="lg"
                          transition="all 0.3s"
                          cursor="pointer"
                          onClick={() => openLightbox(index, imgIndex)}
                          _hover={{
                            transform: 'scale(1.02)',
                            boxShadow: 'xl',
                          }}
                        />
                      ))}
                    </SimpleGrid>
                  </>
                )}

                {index < destinations.length - 1 && (
                  <Box h="1px" bg="gray.200" w="full" mt={6} mb={2} />
                )}
              </VStack>
            ))}
          </VStack>
        </VStack>
      </Container>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={currentDestinationImages.map(url => ({ src: url }))}
        index={currentIndex}
      />
    </Box>
  );
};

export default Travel; 