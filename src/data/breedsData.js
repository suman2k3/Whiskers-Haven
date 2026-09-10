import ragdoll1Img from '../assets/ragdoll1.jpg';
import ragdoll2Img from '../assets/ragdoll2.jpg';
import bshNew1Img from '../assets/bsh_new1.jpg';
import bshNew2Img from '../assets/bsh_new2.jpg';
import bsh1Img from '../assets/bsh1.png';
import bsh2Img from '../assets/bsh2.png';
import bengalNew1Img from '../assets/bengal_new1.jpg';
import bengalNew2Img from '../assets/bengal_new2.jpg';
import bengalImg from '../assets/bengal.png';
import bengal2Img from '../assets/bengal2.png';
import mainecoonNew1Img from '../assets/mainecoon_new1.jpg';
import mainecoonNew2Img from '../assets/mainecoon_new2.jpg';
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
        age: '4 months',
        gender: 'Male',
        color: 'Seal Point',
        description: 'Super affectionate Seal Point boy who loves tummy rubs and cuddling by your side.',
        healthStatus: 'Vaccinated & Microchipped',
        availability: 'Available',
        images: [ragdoll1Img, ragdoll2Img]
      },
      {
        id: 'ragdoll-02',
        name: 'Luna',
        breed: 'Ragdoll',
        age: '3.5 months',
        gender: 'Female',
        color: 'Blue Bicolor',
        description: 'Gentle female kitten with striking blue eyes, a soft plush coat, and a calm disposition.',
        healthStatus: 'Health Checked & Vaccinated',
        availability: 'Available',
        images: [ragdoll2Img, ragdoll1Img]
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
        age: '3 months',
        gender: 'Male',
        color: 'Classic Blue',
        description: 'Chubby-cheeked blue kitten with a plush dense coat and curious, friendly eyes.',
        healthStatus: 'Vaccinated & Vet Screened',
        availability: 'Available',
        images: [bshNew1Img, bshNew2Img, bsh1Img]
      },
      {
        id: 'bsh-02',
        name: 'Bella',
        breed: 'British Shorthair',
        age: '4 months',
        gender: 'Female',
        color: 'Silver Tabby',
        description: 'Sweet silver tabby female with striking circular markings and a quiet, loving charm.',
        healthStatus: 'Vaccinated & Microchipped',
        availability: 'Available',
        images: [bshNew2Img, bsh2Img]
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
        age: '3 months',
        gender: 'Male',
        color: 'Brown Tabby',
        description: 'Big-boned kitten with impressive ear tufts and a confident, purring nature.',
        healthStatus: 'Vaccinated & Microchipped',
        availability: 'Available',
        images: [mainecoonNew1Img, mainecoonNew2Img, mainecoon1Img]
      },
      {
        id: 'mainecoon-02',
        name: 'Freya',
        breed: 'Maine Coon',
        age: '4 months',
        gender: 'Female',
        color: 'Silver Smoke',
        description: 'Stunning silver smoke coat with a silky mane and gentle, loving temperament.',
        healthStatus: 'Health Screened & Vaccinated',
        availability: 'Available',
        images: [mainecoonNew2Img, mainecoon2Img]
      }
    ]
  }
];
