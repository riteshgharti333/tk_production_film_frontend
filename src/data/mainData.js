// mainData.js
import { 
  FaCamera, 
  FaHeart, 
  FaClock, 
  FaCalendarCheck, 
  FaUsers, 
  FaGem, 
  FaPalette, 
  FaMagic,
  FaStar,
  FaFilm,
  FaRing,
  FaBirthdayCake,
  FaGraduationCap,
  FaBaby,
  FaHandHoldingHeart,
  FaCameraRetro
} from "react-icons/fa";
import { MdOutlineEmojiEmotions, MdAutoAwesome } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";

export const allServices = {
  weddingPhotography: {
    slug: "wedding-photography",
    banner: {
      title: "Wedding Photography",
      subtitle: "Capturing Love Stories Since 2008",
      icon: FaCamera,
    },
    about: {
      title: "Wedding Photography by TK Production Film",
      description: [
        "Capture your love story with TK Production Film. Led by Taufeq Khan with 16+ years and 800+ weddings, we create timeless memories through stunning photography and cinematic films.",
        "We specialize in turning your wedding day into a visual masterpiece. From the soft glances during the vows to the joyous laughter at the reception, our team captures every moment with artistry and precision."
      ]
    },
    process: {
      tag: "Process",
      title: "How It Works",
      subtitle: "Simple steps to capture your perfect moments",
      steps: [
        {
          id: 1,
          icon: FaCalendarCheck,
          title: "Book Your Session",
          description: "Contact us to discuss your wedding date, venue, and specific photography needs. We'll help you choose the perfect package."
        },
        {
          id: 2,
          icon: FaUsers,
          title: "Personal Consultation",
          description: "Meet our team for a detailed discussion about your vision, preferred photography style, and must-capture moments."
        },
        {
          id: 3,
          icon: FaCamera,
          title: "Your Special Day",
          description: "Our professional team arrives early to capture every moment - from getting ready to the final dance, we don't miss a thing."
        },
        {
          id: 4,
          icon: FaHeart,
          title: "Editing & Curation",
          description: "We carefully select and edit your photos with artistic precision, enhancing colors and creating a beautiful narrative."
        },
        {
          id: 5,
          icon: FaStar,
          title: "Delivery & Celebration",
          description: "Receive your stunning wedding photos in a digital gallery, ready to share with family and relive your magical day."
        }
      ]
    }
  },

  weddingCinematography: {
    slug: "wedding-cinematography",
    banner: {
      title: "Wedding Cinematography",
      subtitle: "Your Love Story in Motion",
      icon: FaFilm,
    },
    about: {
      title: "Wedding Cinematography by TK Production Film",
      description: [
        "Experience your wedding day like never before with our cinematic films. We tell your love story through beautiful visuals and emotional storytelling.",
        "Our team captures every moment with artistic precision, creating a timeless film that you'll cherish forever."
      ]
    },
    process: {
      tag: "Process",
      title: "How It Works",
      subtitle: "Simple steps to create your cinematic masterpiece",
      steps: [
        {
          id: 1,
          icon: FaCalendarCheck,
          title: "Book Your Session",
          description: "Contact us to discuss your wedding date and cinematography requirements."
        },
        {
          id: 2,
          icon: FaUsers,
          title: "Creative Consultation",
          description: "Meet our team to discuss your vision, style preferences, and special moments."
        },
        {
          id: 3,
          icon: FaCamera,
          title: "Your Special Day",
          description: "Our cinematography team captures every emotion and detail beautifully."
        },
        {
          id: 4,
          icon: FaHeart,
          title: "Editing & Color Grading",
          description: "We carefully edit and color grade your film to create a cinematic masterpiece."
        },
        {
          id: 5,
          icon: FaStar,
          title: "Final Delivery",
          description: "Receive your beautiful cinematic film in stunning quality."
        }
      ]
    }
  },

  preWeddingFilm: {
    slug: "pre-wedding-film",
    banner: {
      title: "Pre-Wedding Film",
      subtitle: "Celebrating Your Love Before the Big Day",
      icon: FaHeart,
    },
    about: {
      title: "Pre-Wedding Film by TK Production Film",
      description: [
        "Capture the magic of your love story before your wedding day with our stunning pre-wedding films.",
        "We create beautiful cinematic videos that celebrate your unique bond and chemistry."
      ]
    },
    process: {
      tag: "Process",
      title: "How It Works",
      subtitle: "Simple steps to create your pre-wedding film",
      steps: [
        {
          id: 1,
          icon: FaCalendarCheck,
          title: "Book Your Session",
          description: "Contact us to schedule your pre-wedding shoot."
        },
        {
          id: 2,
          icon: FaUsers,
          title: "Concept Discussion",
          description: "Discuss your vision, location preferences, and creative ideas."
        },
        {
          id: 3,
          icon: FaCamera,
          title: "The Shoot",
          description: "Enjoy a fun and romantic pre-wedding photoshoot and film session."
        },
        {
          id: 4,
          icon: FaHeart,
          title: "Editing & Final Film",
          description: "We create a beautiful pre-wedding film that captures your love story."
        },
        {
          id: 5,
          icon: FaStar,
          title: "Final Delivery",
          description: "Receive your stunning pre-wedding film and cherish it forever."
        }
      ]
    }
  },

  preWeddingPhotography: {
    slug: "pre-wedding-photography",
    banner: {
      title: "Pre-Wedding Photography",
      subtitle: "Love in Every Frame",
      icon: FaCameraRetro,
    },
    about: {
      title: "Pre-Wedding Photography by TK Production Film",
      description: [
        "Capture the romance and excitement of your love story before your wedding day.",
        "Our expert photographers create stunning images that reflect your unique connection."
      ]
    },
    process: {
      tag: "Process",
      title: "How It Works",
      subtitle: "Simple steps to create your pre-wedding memories",
      steps: [
        {
          id: 1,
          icon: FaCalendarCheck,
          title: "Book Your Session",
          description: "Contact us to schedule your pre-wedding photoshoot."
        },
        {
          id: 2,
          icon: FaUsers,
          title: "Style & Location Planning",
          description: "Plan your outfits, location, and creative concepts together."
        },
        {
          id: 3,
          icon: FaCamera,
          title: "The Photoshoot",
          description: "Enjoy a fun and romantic pre-wedding photoshoot experience."
        },
        {
          id: 4,
          icon: FaHeart,
          title: "Editing & Curation",
          description: "We carefully edit and curate your beautiful pre-wedding photos."
        },
        {
          id: 5,
          icon: FaStar,
          title: "Final Delivery",
          description: "Receive your stunning pre-wedding photo gallery."
        }
      ]
    }
  },

  civilMarriage: {
    slug: "civil-marriage-photography",
    banner: {
      title: "Civil Marriage Photography",
      subtitle: "Simple Moments, Beautiful Memories",
      icon: FaRing,
    },
    about: {
      title: "Civil Marriage Photography by TK Production Film",
      description: [
        "Capture the beauty and simplicity of your civil marriage ceremony with our professional photography services.",
        "We document every special moment with elegance and authenticity."
      ]
    },
    process: {
      tag: "Process",
      title: "How It Works",
      subtitle: "Simple steps to capture your civil marriage",
      steps: [
        {
          id: 1,
          icon: FaCalendarCheck,
          title: "Book Your Session",
          description: "Contact us to book your civil marriage photography."
        },
        {
          id: 2,
          icon: FaUsers,
          title: "Consultation",
          description: "Discuss your ceremony details and photography preferences."
        },
        {
          id: 3,
          icon: FaCamera,
          title: "The Ceremony",
          description: "We capture your civil marriage ceremony with professionalism."
        },
        {
          id: 4,
          icon: FaHeart,
          title: "Photo Selection & Editing",
          description: "Carefully select and edit your beautiful ceremony photos."
        },
        {
          id: 5,
          icon: FaStar,
          title: "Final Delivery",
          description: "Receive your stunning civil marriage photos."
        }
      ]
    }
  },

  engagementPhotography: {
    slug: "engagement-photography-couple-portraits",
    banner: {
      title: "Engagement Photography & Couple Portraits",
      subtitle: "Celebrating Your Commitment",
      icon: FaHandHoldingHeart,
    },
    about: {
      title: "Engagement Photography by TK Production Film",
      description: [
        "Capture the joy and excitement of your engagement with stunning photographs.",
        "Our creative photographers create beautiful portraits that celebrate your love."
      ]
    },
    process: {
      tag: "Process",
      title: "How It Works",
      subtitle: "Simple steps to capture your engagement",
      steps: [
        {
          id: 1,
          icon: FaCalendarCheck,
          title: "Book Your Session",
          description: "Contact us to schedule your engagement photoshoot."
        },
        {
          id: 2,
          icon: FaUsers,
          title: "Creative Planning",
          description: "Plan your engagement shoot concept, location, and outfits."
        },
        {
          id: 3,
          icon: FaCamera,
          title: "The Photoshoot",
          description: "Enjoy a beautiful engagement photoshoot experience."
        },
        {
          id: 4,
          icon: FaHeart,
          title: "Editing & Retouching",
          description: "Professionally edit and retouch your engagement photos."
        },
        {
          id: 5,
          icon: FaStar,
          title: "Final Delivery",
          description: "Receive your stunning engagement photo gallery."
        }
      ]
    }
  },

  birthdayPhotography: {
    slug: "birthday-photography",
    banner: {
      title: "Birthday Photography",
      subtitle: "Celebrating Life's Special Moments",
      icon: FaBirthdayCake,
    },
    about: {
      title: "Birthday Photography by TK Production Film",
      description: [
        "Capture the joy and celebration of your birthday with our professional photography services.",
        "We document every happy moment so you can cherish them forever."
      ]
    },
    process: {
      tag: "Process",
      title: "How It Works",
      subtitle: "Simple steps to capture your birthday celebration",
      steps: [
        {
          id: 1,
          icon: FaCalendarCheck,
          title: "Book Your Session",
          description: "Contact us to book your birthday photography."
        },
        {
          id: 2,
          icon: FaUsers,
          title: "Event Planning",
          description: "Discuss your birthday celebration details and preferences."
        },
        {
          id: 3,
          icon: FaCamera,
          title: "The Celebration",
          description: "We capture all the special moments of your birthday."
        },
        {
          id: 4,
          icon: FaHeart,
          title: "Photo Selection & Editing",
          description: "Carefully select and edit your beautiful birthday photos."
        },
        {
          id: 5,
          icon: FaStar,
          title: "Final Delivery",
          description: "Receive your stunning birthday photo gallery."
        }
      ]
    }
  },

  babyShower: {
    slug: "baby-shower-photography",
    banner: {
      title: "Baby Shower Photography",
      subtitle: "Celebrating New Beginnings",
      icon: FaBaby,
    },
    about: {
      title: "Baby Shower Photography by TK Production Film",
      description: [
        "Capture the joy and excitement of welcoming a new baby with our professional photography.",
        "We document all the beautiful moments of your baby shower celebration."
      ]
    },
    process: {
      tag: "Process",
      title: "How It Works",
      subtitle: "Simple steps to capture your baby shower",
      steps: [
        {
          id: 1,
          icon: FaCalendarCheck,
          title: "Book Your Session",
          description: "Contact us to book your baby shower photography."
        },
        {
          id: 2,
          icon: FaUsers,
          title: "Event Details",
          description: "Discuss your baby shower theme and special moments."
        },
        {
          id: 3,
          icon: FaCamera,
          title: "The Celebration",
          description: "We capture every joyful moment of your baby shower."
        },
        {
          id: 4,
          icon: FaHeart,
          title: "Photo Selection & Editing",
          description: "Carefully select and edit your beautiful baby shower photos."
        },
        {
          id: 5,
          icon: FaStar,
          title: "Final Delivery",
          description: "Receive your stunning baby shower photo gallery."
        }
      ]
    }
  },

  graduationPhotography: {
    slug: "graduation-photography",
    banner: {
      title: "Graduation Photography",
      subtitle: "Celebrating Your Achievement",
      icon: FaGraduationCap,
    },
    about: {
      title: "Graduation Photography by TK Production Film",
      description: [
        "Capture your academic achievement and proud moments with our professional photography.",
        "We document your graduation celebration with style and elegance."
      ]
    },
    process: {
      tag: "Process",
      title: "How It Works",
      subtitle: "Simple steps to capture your graduation",
      steps: [
        {
          id: 1,
          icon: FaCalendarCheck,
          title: "Book Your Session",
          description: "Contact us to book your graduation photography."
        },
        {
          id: 2,
          icon: FaUsers,
          title: "Photography Planning",
          description: "Discuss your graduation details and photo preferences."
        },
        {
          id: 3,
          icon: FaCamera,
          title: "The Ceremony",
          description: "We capture your graduation ceremony and celebrations."
        },
        {
          id: 4,
          icon: FaHeart,
          title: "Photo Selection & Editing",
          description: "Carefully select and edit your beautiful graduation photos."
        },
        {
          id: 5,
          icon: FaStar,
          title: "Final Delivery",
          description: "Receive your stunning graduation photo gallery."
        }
      ]
    }
  }
};

export const whyChoose = {
  tag: "Why Choose Us",
  title: "Why Choose TK Production Film",
  items: [
    {
      icon: FaGem,
      title: "16+ Years Experience",
      description: "Over a decade of capturing beautiful moments"
    },
    {
      icon: FaPalette,
      title: "Creative Vision",
      description: "Artistic approach to every event we cover"
    },
    {
      icon: MdOutlineEmojiEmotions,
      title: "Happy Clients",
      description: "800+ weddings and 1000+ satisfied couples"
    },
    {
      icon: FaClock,
      title: "On-Time Delivery",
      description: "Always deliver memories on schedule"
    }
  ]
};

export const features = {
  tag: "Our Services",
  title: "What We Offer",
  subtitle: "Comprehensive photography services tailored for you",
  items: [
    {
      icon: FaCamera,
      title: "Professional Photography",
      description: "High-quality images captured with top-tier equipment"
    },
    {
      icon: BiCameraMovie,
      title: "Cinematic Films",
      description: "Beautifully crafted films that tell your story"
    },
    {
      icon: FaHeart,
      title: "Candid Moments",
      description: "Natural and authentic moments captured forever"
    },
    {
      icon: MdAutoAwesome,
      title: "Creative Editing",
      description: "Professional post-production with artistic touch"
    },
    {
      icon: FaUsers,
      title: "Expert Team",
      description: "Dedicated professionals with 16+ years experience"
    },
    {
      icon: FaCalendarCheck,
      title: "Flexible Scheduling",
      description: "Customizable timings to suit your needs"
    }
  ]
};