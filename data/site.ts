export type Testimonial = { name: string; quote: string };

export const testimonials: Testimonial[] = [
  {
    name: "Cullen & Kelly McElmurry",
    quote:
      "Let me first say without hesitation that our family would build a dozen homes with Brandt Wilke and the Willmark team! We have been in our home for over a year now, and we are just as happy today as the day we moved in. Brandt and Sabrina both did a fantastic job working through the entire design process with us.",
  },
  {
    name: "Gerrald & Marianna Giblin",
    quote:
      "We have been very fortunate to work with Willmark on two homes in Washington County. On the initial build, we started with a tract of very raw land, switched the site and the size of the home. Willmark hung in there with us until we figured out what we really needed. That project came in under budget, even with some change orders. The Willmark team has been great at communication. We trust them to make the right decisions on our new home.",
  },
  {
    name: "Brad Deloach, Camp Blessing Director",
    quote:
      "We were very pleased with Willmark Homes. Working with them truly felt like working with a team. They were able to meet our aggressive project deadline and keep costs within our budget! We are so grateful for the positive attitude, the attention to detail, and their can do spirit. Everyone who comes to our camp home loves our new cabins. Thank you Willmark for all you've done to serve our campers.",
  },
  {
    name: "Will & Angela Cannady",
    quote:
      "Typically, building a home is a lot of work and stress, but building with Willmark made our process exciting & organized. Our initial meetings with their internal staff, Sabrina, picking vendors and looking at material options, worked hand-in-hand with our project manager, Clay Elkins. At our building site, they were always responsive and engaged with us and other sub-contractors. This was truly a team effort.",
  },
  {
    name: "David Evans",
    quote:
      "I am happy to recommend Willmark Custom Homes to anyone considering a new home in central Texas. My experience with the Willmark Team has been exceptional. In my view, Willmark offers anything a customer could want from a large, urban-based builder, but with the major advantage of the personal touch, start to finish. In my case, over our ten-month build, I worked with exactly the same folks. I ran a commercial construction company for over 30 years and I've been delighted collaborating with these folks! They are truly a professional team.",
  },
  {
    name: "Tayvis & Nancy Dunnahoe",
    quote:
      "From the moment we discovered the Carter plan, we knew it was the farmhouse we were dreaming of creating in my hometown of Bellville. We trusted Willmark to make the dream a reality, and they delivered exceptional guidance — from the most beautiful finishes and quality paint expertise to kind, patient and thorough project management. We couldn't be more grateful to have chosen a builder that truly cares.",
  },
  {
    name: "Scott & Liz Williams",
    quote:
      "Enough positives cannot be said for our experience with Willmark. From start to finish everyone we worked with was helpful, easy to communicate with, and honest. We were partners in the building process, trusting Willmark to guide us during the build and decision-making process. It was the perfect blend of here is our vision of how we want to live in our new home and Willmark's expertise as a custom builder. Great people! Great Service!",
  },
  {
    name: "Randy & Susan Brookings",
    quote:
      "Most people will tell you building a home is a nightmare. Well it is NOT if you use Willmark. They were a pleasure to work with from start to finish. Our project manager was on site everyday. If there was ever anything that we were concerned about, when we talked to him he usually had already addressed the issue, if not it was addressed immediately! If anyone in the Bellville area is thinking about building, we say call Willmark.",
  },
  {
    name: "Lynn & Nancy Gros",
    quote:
      "Four years ago, we had a dream. That dream was to get back to our small town roots. Having visited Bellville, TX many times, we fell in love with the community. We decided this is where we wanted to be and purchased land on the outskirts of Bellville. In our search for a custom home builder, we walked into Willmark's office. We were welcomed with such friendliness by John Marek and Brandt Wilke; we knew immediately they would be the builder of our dream home. The project manager, Clay Elkins, was always available to ensure things went smoothly. A big THANK YOU to everyone at Willmark!",
  },
];

export type ProcessStep = { title: string; body: string; image?: string };

export const processSteps: ProcessStep[] = [
  {
    title: "1. Pick Your Plan",
    body: "We have several farmhouse and ranch style plans to choose from that can be fully customized to your liking. If you can’t find a plan you like, we can custom design one for you. Call us to find out more about our custom design process.",
    image: "/willmark/home/plan-card.jpg",
  },
  {
    title: "2. Site Prep & Design",
    body: "Building on raw land requires knowledge, experience and trust-worthy contacts. We will help you plan your site layout for your new home including any necessary infrastructure. Give us a call to find out how we can help prep your land for construction.",
    image: "/willmark/home/site-card.jpg",
  },
  {
    title: "3. Finalize Your Budget",
    body: "We know that budget is at the top of everyone’s mind when it comes to discussing your new home. We are a fixed price builder and we give you a detailed list of everything that is included up front so that there are no surprises when it comes to costs. If you do decide to make changes, we will review the pricing with you before implementing the change to make sure it fits your budget.",
    image: "/willmark/home/budget-card.jpg",
  },
  {
    title: "4. Construction",
    body: "Our typical construction time is 10-12 months pending weather and product lead times. You will have a project manager overseeing construction throughout the process and keeping you up-to-date on what’s going on during each stage of the build.",
    image: "/willmark/home/construction-card.jpg",
  },
];

export type TeamMember = { name: string; role: string; photo: string };

export const team: TeamMember[] = [
  { name: "Brandt Wilke", role: "President", photo: "/willmark/team/brandt-wilke.jpg" },
  { name: "Sabrina Wilson", role: "Vice President of Operations", photo: "/willmark/team/sabrina-wilson.jpg" },
  { name: "Zach Ussery", role: "Vice President of Construction", photo: "/willmark/team/zach-ussery.jpg" },
  { name: "Kristin Klussmann", role: "Director of Design", photo: "/willmark/team/kristin-klussmann.jpg" },
  { name: "Shelby Dollar", role: "Director of Finance", photo: "/willmark/team/shelby-dollar.jpg" },
  { name: "Dane Davenport", role: "Project Manager", photo: "/willmark/team/dane-davenport.jpg" },
  { name: "Cal Wood", role: "Project Manager", photo: "/willmark/team/cal-wood.jpg" },
  { name: "Taylor Spurlock", role: "Sales & Marketing Coordinator", photo: "/willmark/team/taylor-spurlock.jpg" },
];

export const teamIntro =
  "We are a turn-key, custom home builder with a reputation of excellence in quality, service, and design in Bellville, Brenham, Caldwell, Chappell Hill, Eagle Lake, Hempstead, Lexington, Navasota, Round Top, Shiner and the surrounding areas. Founded by seasoned contractor Brandt Wilke in 2011, Willmark Custom Homes is committed to building homes that will last generations. We will work with you in designing a home that reflects your personal style while keeping efficiency and your budget in mind at all times. We know that the home building process can be daunting so we take extra care to make it as seamless and uncomplicated as possible by providing you with accurate and thorough information from the beginning. We have built hundreds of homes with varying architectural styles and believe that our extensive experience is one of the main factors that set us apart from the competition. We love what we do. We enjoy the personal, collaborative and long-term relationships we build with each of our clients. We take pride in every project that leaves our office. Once you choose Willmark as your team, we are committed to making your home a complete success.";

export const serviceCards = [
  {
    title: "Texas Modern Farmhouse",
    body: "If you’re looking for a classic yet modern home with open-concept layouts, large porches, and customizable features, our Texas Modern Farmhouse Series is perfect for you.",
    cta: "Dream It",
    href: "/texas-modern-farmhouse-plans",
  },
  {
    title: "Modern Ranch House",
    body: "Our Modern Ranch homes feature open-concept layouts, spacious master suites, side-entry garages, stylish exteriors with optional stone or brick accents, and fully customizable designs with premium upgrades unique to Willmark Custom Homes.",
    cta: "Upgrade it",
    href: "/modern-ranch-home-plans",
  },
  {
    title: "Custom Design Build",
    body: "Can’t find the perfect plan? Let us create a fully custom-designed home tailored to your unique style, specific needs, and budget, ensuring every detail reflects your vision and lifestyle.",
    cta: "Customize it",
    href: "/designbuild",
  },
];

export type CountyPage = {
  slug: string;
  county: string;
  towns: string;
  intro: string;
  bullets: [string, string][];
  kicker: string;
  hero: string;
};

export const countyPages: CountyPage[] = [
  {
    slug: "austin-county-builder",
    county: "Austin County",
    towns: "Bellville - Sealy - San Felipe",
    intro:
      "Willmark Custom Homes creates custom homes, barndominiums, Texas Modern Farmhouse, and Modern Ranch Homes that reflect the highest standards of craftsmanship and service.",
    bullets: [
      ["Custom Homes", "designed with your personal style in mind"],
      ["Texas Modern Farmhouse and Modern Ranch Homes", "offering timeless elegance"],
      ["Known for", "quality and exceptional customer service in Austin County"],
    ],
    kicker: "Home Builder",
    hero: "/willmark/county/austin.jpg",
  },
  {
    slug: "washington-county-builder",
    county: "Washington County",
    towns: "Brenham - Burton - Latium",
    intro:
      "Willmark Custom Homes specializes in building custom homes, barndominiums, Texas Modern Farmhouses, and Modern Ranch Homes with a focus on superior craftsmanship and customer satisfaction.",
    bullets: [
      ["Custom Homes", "tailored to your unique vision"],
      ["Texas Modern Farmhouses and Modern Ranch Homes", "for lasting appeal"],
      ["Reputable for", "their exceptional service and quality in Washington County"],
    ],
    kicker: "Home Builder",
    hero: "/willmark/county/washington.jpg",
  },
  {
    slug: "colorado-county-builder",
    county: "Colorado County",
    towns: "Columbus - Eagle Lake - Weimar",
    intro:
      "Willmark Custom Homes provides custom homes, barndominiums, Texas Modern Farmhouses, and Modern Ranch Homes, emphasizing quality craftsmanship and exceptional service.",
    bullets: [
      ["Custom Homes", "tailored to your specific needs and style"],
      ["Texas Modern Farmhouses and Modern Ranch Homes", "design for enduring beauty elegance"],
      ["Renowned for", "their customer-centric approach and superior craftsmanship in Colorado County"],
    ],
    kicker: "Home Builder",
    hero: "/willmark/county/colorado.jpg",
  },
  {
    slug: "fayette-county-builder",
    county: "Fayette County",
    towns: "La Grange - Fayetteville - Schulenburg - Round Top",
    intro:
      "Willmark Custom Homes builds custom homes, barndominiums, Texas Modern Farmhouses, and Modern Ranch Homes with a focus on quality, service, and timeless design.",
    bullets: [
      ["Custom Homes", "customized to reflect your personal style"],
      ["Texas Modern Farmhouses and Modern Ranch Homes", "designed for lasting appeal"],
      ["Trusted for", "their craftsmanship and exceptional customer service in Fayette County"],
    ],
    kicker: "Home Builder",
    hero: "/willmark/county/fayette.jpg",
  },
  {
    slug: "waller-county-builder",
    county: "Waller County",
    towns: "Hempstead - Brookshire - Prairie View",
    intro:
      "Willmark Custom Homes offers custom homes, barndominiums, Texas Modern Farmhouses, and Modern Ranch Homes with an emphasis on master craftsmanship and exceptional service.",
    bullets: [
      ["Custom Homes", "tailored to your unique style and needs"],
      ["Texas Modern Farmhouses and Modern Ranch Homes", "featuring timeless designs"],
      ["Excellent reputation for", "quality, craftsmanship, and customer service in Waller County"],
    ],
    kicker: "Home Builder",
    hero: "/willmark/county/waller.jpg",
  },
];

export const blogPosts = [
  { title: "The Stonehaven Ranch: Chappell Hill, TX", href: "/blog/stonehaven-ranch-central-texas-custom-home" },
  {
    title: "Introducing The Archer & The Easton: Two New Ways to Experience Willmark Luxury",
    href: "/blog/new-custom-home-floor-plans-central-texas",
  },
  {
    title: "The Lifecycle of a Build: Understanding the Major Milestones of Home Construction",
    href: "/blog/major-milestones-of-the-home-construction-process",
  },
  { title: "How to Personalize a Pre-Designed Floor Plan", href: "/blog/how-to-personalize-a-pre-designed-floor-plan" },
  { title: "5 Floor Plan Features Buyers Love in Custom Homes", href: "/blog/custom-home-floor-plan-features" },
];

export const CONTACT = {
  phone: "(979) 865-8977",
  phoneHref: "tel:+19798658977",
  email: "willmarkhomes@gmail.com",
  address: "101 S Baylor St, Brenham, TX 77833",
  studio: "Sales & Design Studio",
  facebook: "http://www.facebook.com/WillmarkHomes/",
  pinterest: "https://www.pinterest.com/willmarkhom0695/",
  instagram: "https://www.instagram.com/willmarkcustomhomes/",
};
