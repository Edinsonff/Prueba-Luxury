import Card from "./Card";

export default function CardGrid() {


    const imageUrl = "https://picsum.photos/400"
  const cards = [
    {
      image: imageUrl,
      title: "Proactive Relapse Prevention Techniques",
      description:
        "Understanding Addiction Defining Substance Use Disorders Substance use disorders (SUDs)...",
      date: "July 26, 2023",
    },
    {
        image: imageUrl,
        title: "How Trauma Therapy Helps You Reclaim Your Life",
      description:
        "Understanding Trauma and Its Impact. What is Trauma? Trauma is a complex and deeply...",
      date: "July 19, 2023",
    },
    {
        image: imageUrl,
        title: "Strategies and Tools to Help You Stay on the Right Path",
      description:
        "Are you looking to enhance your personal growth, achieve success, and develop positive habits?",
      date: "July 12, 2023",
    },
    {
        image: imageUrl,
        title: "Unlocking Recovery’s Power: The Vital Role of Rehab and Support",
      description:
        "Are you or someone you know struggling with addiction or in need of support for recovery?",
      date: "July 5, 2023",
    },
    {
        image: imageUrl,
        title: "Key Factors to Consider When Choosing a Drug Rehab Center",
      description:
        "Introduction Overview of drug rehab centers. Drug rehab centers are specialized facilities... Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quam itaque cumque expedita suscipit quasi ipsum ab laborum? Tempora fugit laborum voluptates? Similique harum modi quos doloremque omnis pariatur autem. ",
      date: "June 28, 2023",
    },
    {
        image: imageUrl,
        title: "Exploring the Power of One-on-One Therapy",
      description:
        "Introduction Exploring the Power of One-on-One Therapy. This transformative approach...",
      date: "June 21, 2023",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 lg:max-w-5xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            date={card.date}
          />
        ))}
      </div>
    </div>
  );
}
