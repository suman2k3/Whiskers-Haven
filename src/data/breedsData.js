import ragdoll1Img from '../assets/ragdoll1.jpg';
import ragdoll2Img from '../assets/ragdoll2.jpg';
import ragdoll3Img from '../assets/ragdoll3.jpg';
import ragdoll4Img from '../assets/ragdoll4.jpg';
import ragdoll5Img from '../assets/ragdoll5.jpg';
import bshNew1Img from '../assets/bsh_new1.jpg';
import bshNew2Img from '../assets/bsh_new2.jpg';
import bsh3Img from '../assets/bsh3.jpg';
import bsh4Img from '../assets/bsh4.jpg';
import bsh5Img from '../assets/bsh5.jpg';
import bsh1Img from '../assets/bsh1.png';
import bsh2Img from '../assets/bsh2.png';
import bengalNew1Img from '../assets/bengal_new1.jpg';
import bengalNew2Img from '../assets/bengal_new2.jpg';
import bengalImg from '../assets/bengal.png';
import bengal2Img from '../assets/bengal2.png';
import mainecoonNew1Img from '../assets/mainecoon_new1.jpg';
import mainecoonNew2Img from '../assets/mainecoon_new2.jpg';
import mainecoon3Img from '../assets/mainecoon3.jpg';
import mainecoon4Img from '../assets/mainecoon4.jpg';
import mainecoon5Img from '../assets/mainecoon5.jpg';
import mainecoon1Img from '../assets/mainecoon1.png';
import mainecoon2Img from '../assets/mainecoon2.png';

export const breedsData = [
  {
    id: 'ragdoll',
    slug: 'ragdoll',
    name: 'Ragdoll',
    tagline: 'The Gentle Giant of Lap Cats',
    coverImage: ragdoll1Img,
    description: 'Ragdolls are renowned worldwide for their sweet-tempered personality, striking blue eyes, and plush silky coats. True to their name, they tend to relax deeply when held and love nothing more than following their human companions around the home.',
    characteristics: {
      personality: 'Affectionate, quiet, gentle, and sweet-tempered',
      grooming: 'Moderate — regular weekly brushing of plush coat',
      activityLevel: 'Low to Moderate — prefers gentle play and lap cuddling',
      environment: 'Ideal for indoor living, families, apartments, and quiet homes'
    },
    variants: [
      {
        id: 'ragdoll-01',
        name: 'Milo',
        breed: 'Ragdoll',
        gender: 'Male',
        color: 'Seal Point',
        description: 'Super affectionate Seal Point boy who loves tummy rubs and cuddling by your side.',
        healthStatus: 'Vaccinated & Microchipped',
        availability: 'Available',
        images: [ragdoll1Img, ragdoll2Img, ragdoll3Img, ragdoll4Img, ragdoll5Img]
      },
      {
        id: 'ragdoll-02',
        name: 'Luna',
        breed: 'Ragdoll',
        gender: 'Female',
        color: 'Blue Bicolor',
        description: 'Gentle female kitten with striking blue eyes, a soft plush coat, and a calm disposition.',
        healthStatus: 'Health Checked & Vaccinated',
        availability: 'Available',
        images: [ragdoll2Img, ragdoll1Img, ragdoll3Img, ragdoll4Img, ragdoll5Img]
      },
      {
        id: 'ragdoll-03',
        name: 'Oliver',
        breed: 'Ragdoll',
        gender: 'Male',
        color: 'Seal Mitted',
        description: 'Relaxed and playful Seal Mitted Ragdoll who loves lounging in comfortable spots.',
        healthStatus: 'Health Checked & Vaccinated',
        availability: 'Available',
        images: [ragdoll3Img, ragdoll1Img, ragdoll2Img, ragdoll4Img, ragdoll5Img]
      },
      {
        id: 'ragdoll-04',
        name: 'Bella',
        breed: 'Ragdoll',
        gender: 'Female',
        color: 'Chocolate Bicolor',
        description: 'Stunning fluffy coat with magnificent blue eyes, loves climbing and exploring perched spots.',
        healthStatus: 'Vaccinated & Microchipped',
        availability: 'Available',
        images: [ragdoll4Img, ragdoll3Img, ragdoll1Img, ragdoll2Img, ragdoll5Img]
      },
      {
        id: 'ragdoll-05',
        name: 'Teddy',
        breed: 'Ragdoll',
        gender: 'Male',
        color: 'Blue Point',
        description: 'Majestic posture with super soft fur, very gentle and affectionate family companion.',
        healthStatus: 'Vaccinated & Microchipped',
        availability: 'Available',
        images: [ragdoll5Img, ragdoll4Img, ragdoll3Img, ragdoll1Img, ragdoll2Img]
      }
    ]
  },
  {
    id: 'british-shorthair',
    slug: 'british-shorthair',
    name: 'British Shorthair',
    tagline: 'Plush, Peaceful & Easy-going Companion',
    coverImage: bshNew1Img,
    description: 'British Shorthairs are distinctively round-faced, plush-coated cats with a calm, dignified personality. They are wonderfully independent, patient, and easy-going companions for any lifestyle.',
    characteristics: {
      personality: 'Calm, patient, independent, and easy-going',
      grooming: 'Low maintenance — quick weekly coat brushing',
      activityLevel: 'Moderate — playful as kittens, relaxed as adults',
      environment: 'Great for busy households, apartments, and working owners'
    },
    variants: [
      {
        id: 'bsh-01',
        name: 'Oliver',
        breed: 'British Shorthair',
        gender: 'Male',
        color: 'Classic Blue',
        description: 'Chubby-cheeked blue kitten with a plush dense coat and curious, friendly eyes.',
        healthStatus: 'Vaccinated & Vet Screened',
        availability: 'Available',
        images: [bshNew1Img, bshNew2Img, bsh3Img, bsh4Img, bsh5Img]
      },
      {
        id: 'bsh-02',
        name: 'Bella',
        breed: 'British Shorthair',
        gender: 'Female',
        color: 'Silver Tabby',
        description: 'Sweet silver tabby female with striking circular markings and a quiet, loving charm.',
        healthStatus: 'Vaccinated & Microchipped',
        availability: 'Available',
        images: [bshNew2Img, bshNew1Img, bsh3Img, bsh4Img, bsh5Img]
      },
      {
        id: 'bsh-03',
        name: 'Leo',
        breed: 'British Shorthair',
        gender: 'Male',
        color: 'Golden Shaded',
        description: 'Striking Golden Shaded British Shorthair with vibrant emerald green eyes and a calm disposition.',
        healthStatus: 'Health Checked & Vaccinated',
        availability: 'Available',
        images: [bsh3Img, bshNew1Img, bshNew2Img, bsh4Img, bsh5Img]
      },
      {
        id: 'bsh-04',
        name: 'Cleo',
        breed: 'British Shorthair',
        gender: 'Female',
        color: 'Silver Shaded',
        description: 'Adorable chubby-cheeked Silver Shaded female with huge expressive eyes and plush teddy fur.',
        healthStatus: 'Vaccinated & Microchipped',
        availability: 'Available',
        images: [bsh4Img, bsh3Img, bshNew1Img, bshNew2Img, bsh5Img]
      },
      {
        id: 'bsh-05',
        name: 'Winston',
        breed: 'British Shorthair',
        gender: 'Male',
        color: 'Silver Chinchilla',
        description: 'Elegant Silver Chinchilla male with a quiet, gentle personality and luxurious plush coat.',
        healthStatus: 'Vaccinated & Microchipped',
        availability: 'Available',
        images: [bsh5Img, bsh4Img, bsh3Img, bshNew1Img, bshNew2Img]
      }
    ]
  },
  {
    id: 'bengal',
    slug: 'bengal',
    name: 'Bengal',
    tagline: 'Exotic Beauty with an Adventurous Spirit',
    coverImage: bengalNew1Img,
    description: 'Bengals possess a wild, leopardskin appearance with vivid rosette markings. They are highly intelligent, energetic, inquisitive, and love interactive games, fetch, and climbing high perches.',
    characteristics: {
      personality: 'Intelligent, playful, energetic, and curious',
      grooming: 'Low — sleek short coat needs minimal grooming',
      activityLevel: 'High — thrives on interactive play & climbing spaces',
      environment: 'Best for active homes with plenty of play & enrichment'
    },
    variants: [
      {
        id: 'bengal-01',
        name: 'Leo',
        breed: 'Bengal',
        age: '4 months',
        gender: 'Male',
        color: 'Brown Spotted Rosette',
        description: 'Vibrant rosette pattern with incredible energy, agility, and high intelligence.',
        healthStatus: 'Health Checked & Vaccinated',
        availability: 'Available',
        images: [bengalNew1Img, bengalNew2Img, bengalImg]
      },
      {
        id: 'bengal-02',
        name: 'Simba',
        breed: 'Bengal',
        age: '3 months',
        gender: 'Male',
        color: 'Snow Bengal',
        description: 'Rare snow bengal kitten with icy blue eyes and contrasting silver rosettes.',
        healthStatus: 'Vaccinated & Microchipped',
        availability: 'Available',
        images: [bengalNew2Img, bengal2Img]
      }
    ]
  },
  {
    id: 'maine-coon',
    slug: 'maine-coon',
    name: 'Maine Coon',
    tagline: 'Gentle Giant with a Heart of Gold',
    coverImage: mainecoonNew1Img,
    description: 'Maine Coons are the largest domestic cat breed, known for their tufted ears, bushy tails, and dog-like friendly personalities. They get along famously with kids, dogs, and active families.',
    characteristics: {
      personality: 'Sociable, friendly, playful, and intelligent',
      grooming: 'Moderate to High — regular combing for dense coat',
      activityLevel: 'Moderate to High — loves interactive play and fetching',
      environment: 'Spacious home with active family members'
    },
    variants: [
      {
        id: 'mainecoon-01',
        name: 'Thor',
        breed: 'Maine Coon',
        gender: 'Male',
        color: 'Brown Tabby',
        description: 'Big-boned kitten with impressive ear tufts and a confident, purring nature.',
        healthStatus: 'Vaccinated & Microchipped',
        availability: 'Available',
        images: [mainecoonNew1Img, mainecoonNew2Img, mainecoon3Img, mainecoon4Img, mainecoon5Img]
      },
      {
        id: 'mainecoon-02',
        name: 'Freya',
        breed: 'Maine Coon',
        gender: 'Female',
        color: 'Silver Smoke',
        description: 'Stunning silver smoke coat with a silky mane and gentle, loving temperament.',
        healthStatus: 'Health Screened & Vaccinated',
        availability: 'Available',
        images: [mainecoonNew2Img, mainecoonNew1Img, mainecoon3Img, mainecoon4Img, mainecoon5Img]
      },
      {
        id: 'mainecoon-03',
        name: 'Zeus',
        breed: 'Maine Coon',
        gender: 'Male',
        color: 'Silver Classic Tabby',
        description: 'Majestic Silver Classic Tabby with immense ruff mane, long fluffy paws, and a serene gaze.',
        healthStatus: 'Health Checked & Vaccinated',
        availability: 'Available',
        images: [mainecoon3Img, mainecoonNew1Img, mainecoonNew2Img, mainecoon4Img, mainecoon5Img]
      },
      {
        id: 'mainecoon-04',
        name: 'Athena',
        breed: 'Maine Coon',
        gender: 'Female',
        color: 'Silver Smoke',
        description: 'Magnificent Silver Smoke female with high lynx ear tufts, bushy tail, and inquisitive charm.',
        healthStatus: 'Vaccinated & Microchipped',
        availability: 'Available',
        images: [mainecoon4Img, mainecoon3Img, mainecoonNew1Img, mainecoonNew2Img, mainecoon5Img]
      },
      {
        id: 'mainecoon-05',
        name: 'Loki',
        breed: 'Maine Coon',
        gender: 'Male',
        color: 'Dark Brown Mackerel Tabby',
        description: 'Commanding posture on dark mahogany table, powerful lion-like mane, and gentle giant temperament.',
        healthStatus: 'Vaccinated & Microchipped',
        availability: 'Available',
        images: [mainecoon5Img, mainecoon4Img, mainecoon3Img, mainecoonNew1Img, mainecoonNew2Img]
      }
    ]
  }
];
