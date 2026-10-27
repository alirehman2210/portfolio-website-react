import fs from 'fs';
import path from 'path';
import Travel, { type TravelDestination } from '../../components/Travel';
import PageWrapper from '../../components/PageWrapper';

// Image files are discovered from the folders below rather than hard-coded, so
// adding or deleting a photo on disk updates the page without a code change.
// (In production the scan runs at build time, so a rebuild picks up the change.)
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif'];

interface DestinationMeta {
  title: string;
  description: string;
  date: string;
  /** Folders under /public to scan, in order. */
  dirs: string[];
  /**
   * Preferred display order, as public URLs. Entries whose file no longer
   * exists are skipped; files found on disk but not listed here are appended
   * alphabetically.
   */
  preferredOrder: string[];
}

const destinationMeta: DestinationMeta[] = [
  {
    title: 'Dubai, UAE',
    description:
      "Experiencing Dubai's futuristic skyline, world-class luxury, and the rich desert landscapes that surround the city and found Berlin hiding in Dubai !",
    date: '2025',
    dirs: ['travels/2025/dubai'],
    preferredOrder: [
      '/travels/2025/dubai/IMG_2259.jpeg',
      '/travels/2025/dubai/IMG_5423.jpg',
      '/travels/2025/dubai/IMG_5488.jpg',
      '/travels/2025/dubai/IMG_5570.jpg',
      '/travels/2025/dubai/dubaiskyline.jpg',
      '/travels/2025/dubai/fooddubai.JPG',
    ],
  },
  {
    title: 'Budva & Kotor - Montenegro',
    description:
      "Wandering through Montenegro's coastal treasures from Budva's beaches and old town charm to Kotor's breathtaking bay and mountain views.",
    date: '2025',
    dirs: ['travels/2025/montenegro'],
    preferredOrder: [
      '/travels/2025/montenegro/IMG_4560.PNG',
      '/travels/2025/montenegro/IMG_4556.jpg',
      '/travels/2025/montenegro/IMG_4555.jpg',
    ],
  },
  {
    title: 'Dubrovnik, Croatia',
    description:
      'Walking through Dubrovnik feels like a dream — ancient walls, marble streets, and epic sea views. No wonder Game of Thrones was filmed here.',
    date: '2025',
    dirs: ['travels/2025/dubrovnik'],
    preferredOrder: [
      '/travels/2025/dubrovnik/IMG_4544.PNG',
      '/travels/2025/dubrovnik/IMG_4552.PNG',
      '/travels/2025/dubrovnik/IMG_4553.PNG',
      '/travels/2025/dubrovnik/IMG_4554.PNG',
    ],
  },
  {
    title: 'Stockholm, Sweden',
    description:
      'Exploring Stockholm means islands, bridges, a little royal charm, and sleek city design all flowing into vibrant waterfront life.',
    date: '2025',
    dirs: ['travels/2025/stockholm'],
    preferredOrder: [
      '/travels/2025/stockholm/IMG_3786.PNG',
      '/travels/2025/stockholm/IMG_4541.PNG',
      '/travels/2025/stockholm/citysweden.JPG',
    ],
  },
  {
    title: 'Nice / Cannes / Monaco',
    description:
      'Exploring the stunning French Riviera: from the charming streets of Nice to the glamorous Cannes and the luxurious Monaco',
    date: '2025',
    dirs: ['travels/2025/french-riviera'],
    preferredOrder: [
      '/travels/2025/french-riviera/picturea.jpeg',
      '/travels/2025/french-riviera/pictureb.jpeg',
      '/travels/2025/french-riviera/picturec.jpeg',
      '/travels/2025/french-riviera/pictured.jpeg',
      '/travels/2025/french-riviera/picturee.jpeg',
      '/travels/2025/french-riviera/picturef.jpeg',
    ],
  },
  {
    title: 'Helsinki, Finland',
    description:
      'Discovering the modern Nordic capital with its stunning design, vibrant food scene, and beautiful archipelago',
    date: '2024',
    dirs: ['travels/2024/helsinki'],
    preferredOrder: [
      '/travels/2024/helsinki/IMG_1134.jpg',
      '/travels/2024/helsinki/IMG_1141.jpg',
      '/travels/2024/helsinki/IMG_1117.jpg',
      '/travels/2024/helsinki/IMG_1107.jpg',
      '/travels/2024/helsinki/IMG_1102.jpg',
      '/travels/2024/helsinki/IMG_1101.jpg',
      '/travels/2024/helsinki/IMG_1098.jpg',
      '/travels/2024/helsinki/IMG_1091.jpg',
      '/travels/2024/helsinki/IMG_1088.jpg',
      '/travels/2024/helsinki/IMG_1087.jpg',
      '/travels/2024/helsinki/IMG_1085.jpg',
    ],
  },
  {
    title: 'Tallinn, Estonia',
    description:
      "Wandering through the medieval streets of one of Europe's best-preserved old towns while experiencing Estonia's digital innovation",
    date: '2024',
    dirs: ['travels/2024/tallinn'],
    preferredOrder: [
      '/travels/2024/tallinn/IMG_1204.jpg',
      '/travels/2024/tallinn/IMG_1197.jpg',
      '/travels/2024/tallinn/IMG_1192.jpg',
      '/travels/2024/tallinn/IMG_1176.jpg',
      '/travels/2024/tallinn/IMG_1157.jpg',
    ],
  },
  {
    title: 'Riga, Latvia',
    description:
      "Exploring the Art Nouveau architecture and rich history of Latvia's capital city",
    date: '2024',
    dirs: ['travels/2024/riga'],
    preferredOrder: [
      '/travels/2024/riga/IMG_1241.jpg',
      '/travels/2024/riga/IMG_1245.jpg',
      '/travels/2024/riga/IMG_1249.jpg',
      '/travels/2024/riga/IMG_1250.jpg',
      '/travels/2024/riga/IMG_1252.jpg',
      '/travels/2024/riga/IMG_1255.jpg',
      '/travels/2024/riga/IMG_1257.jpg',
    ],
  },
  {
    title: 'Athens & Corfu, Greece',
    description:
      'From ancient ruins of the Acropolis to the emerald waters of Corfu, experiencing the diverse beauty of Greece',
    date: '2024',
    dirs: ['travels/2024/athens-corfu/athens', 'travels/2024/athens-corfu/corfu'],
    preferredOrder: [
      '/travels/2024/athens-corfu/athens/IMG_0829.jpg',
      '/travels/2024/athens-corfu/athens/IMG_0814.jpg',
      '/travels/2024/athens-corfu/athens/IMG_0801.jpg',
      '/travels/2024/athens-corfu/athens/IMG_0790.jpg',
      '/travels/2024/athens-corfu/athens/IMG_0776.jpg',
      '/travels/2024/athens-corfu/corfu/IMG_0729.jpg',
      '/travels/2024/athens-corfu/corfu/IMG_0718.jpg',
      '/travels/2024/athens-corfu/corfu/IMG_0711.jpg',
      '/travels/2024/athens-corfu/corfu/IMG_0710.jpg',
      '/travels/2024/athens-corfu/corfu/IMG_0707.jpg',
    ],
  },
  {
    title: 'Crete, Greece',
    description:
      "Discovering the largest Greek island's rich mythology, ancient ruins, and stunning Mediterranean landscapes",
    date: '2024',
    dirs: ['travels/2024/crete'],
    preferredOrder: [
      '/travels/2024/crete/IMG_1293.jpg',
      '/travels/2024/crete/IMG_1289.jpg',
      '/travels/2024/crete/IMG_1364.jpg',
      '/travels/2024/crete/IMG_1354.jpg',
      '/travels/2024/crete/IMG_1345.jpg',
      '/travels/2024/crete/IMG_1295.jpg',
    ],
  },
  {
    title: 'Ljubljana, Slovenia',
    description:
      'Experiencing the charming capital of Slovenia with its beautiful bridges, castle, and sustainable urban lifestyle',
    date: '2024',
    dirs: ['travels/2024/ljubljana'],
    preferredOrder: [
      '/travels/2024/ljubljana/IMG_1068.jpg',
      '/travels/2024/ljubljana/IMG_1079.jpg',
      '/travels/2024/ljubljana/IMG_1043.jpg',
      '/travels/2024/ljubljana/IMG_1033.jpg',
      '/travels/2024/ljubljana/IMG_1030.jpg',
      '/travels/2024/ljubljana/IMG_0984.jpg',
      '/travels/2024/ljubljana/IMG_0969.jpg',
      '/travels/2024/ljubljana/IMG_0943.jpg',
      '/travels/2024/ljubljana/IMG_0934.jpg',
      '/travels/2024/ljubljana/IMG_0915.jpg',
      '/travels/2024/ljubljana/IMG_0900.jpg',
      '/travels/2024/ljubljana/IMG_0898.jpg',
      '/travels/2024/ljubljana/IMG_0884.jpg',
      '/travels/2024/ljubljana/IMG_0878.jpg',
      '/travels/2024/ljubljana/IMG_0846.jpg',
      '/travels/2024/ljubljana/IMG_0841.jpg',
      '/travels/2024/ljubljana/IMG_0837.jpg',
    ],
  },
];

/** Public URLs of the image files that actually exist in the given folders. */
function readImages(dirs: string[]): string[] {
  const publicDir = path.join(process.cwd(), 'public');

  return dirs.flatMap((dir) => {
    const absoluteDir = path.join(publicDir, dir);
    if (!fs.existsSync(absoluteDir)) return [];

    return fs
      .readdirSync(absoluteDir, { withFileTypes: true })
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => IMAGE_EXTENSIONS.includes(path.extname(name).toLowerCase()))
      .sort()
      .map((name) => `/${dir}/${name}`);
  });
}

function buildDestinations(): TravelDestination[] {
  return destinationMeta
    .map(({ title, description, date, dirs, preferredOrder }) => {
      const available = readImages(dirs);
      const availableSet = new Set(available);

      // Keep the curated order for photos that are still on disk, then append
      // anything new that has been added since.
      const ordered = preferredOrder.filter((url) => availableSet.has(url));
      const orderedSet = new Set(ordered);
      const added = available.filter((url) => !orderedSet.has(url));

      return { title, description, date, images: [...ordered, ...added] };
    })
    // A destination with no photos left renders nothing at all.
    .filter((destination) => destination.images.length > 0);
}

export default function TravelPage() {
  return (
    <PageWrapper>
      <Travel destinations={buildDestinations()} />
    </PageWrapper>
  );
}
