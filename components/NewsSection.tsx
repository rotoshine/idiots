interface NewsItem {
  date: string;
  title: string;
  category: string;
}

async function getNews(): Promise<NewsItem[]> {
  // Simulate API delay for demonstration
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      date: "2024.03.15",
      title: 'New Album "REVOLUTION" Release',
      category: "RELEASE",
    },
    {
      date: "2024.03.10",
      title: "Spring Tour 2024 Announcement",
      category: "LIVE",
    },
    {
      date: "2024.03.01",
      title: 'Music Video "Breaking Free" Premier',
      category: "NEWS",
    },
  ];
}

export default async function NewsSection() {
  const news = await getNews();

  return (
    <section className="py-20 bg-black" id="news">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">NEWS</h2>
        <div className="space-y-6">
          {news.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-800 pb-6 hover:bg-gray-900/50 transition-colors p-4"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <span className="text-gray-400">{item.date}</span>
                <span className="text-red-500 text-sm px-3 py-1 border border-red-500 rounded-full w-fit">
                  {item.category}
                </span>
                <h3 className="text-xl">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
