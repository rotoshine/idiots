import { Ticket, MapPin, Calendar } from "lucide-react";
import { format, parseISO } from "date-fns";
import qs from "qs";

interface Stage {
  name: string;
  address: string;
}

interface Live {
  id: number;
  title: string;
  startDate: string;
  stage?: Stage;
  purchaseTicketLink?: string;
}

async function getLives({
  size,
  offset,
}: {
  size: number;
  offset: number;
}): Promise<Live[]> {
  const queryParams = {
    musicians: { id: 1 },
    isRemoved: false,
    _sort: "startDate:DESC",
    _limit: size,
    _start: offset,
  };
  const res = await fetch(
    `https://indistreet-api.roto.codes/lives?${qs.stringify(queryParams, {
      delimiter: "&",
      encode: false,
      allowDots: true,
    })}`,
    { next: { revalidate: 3600 } },
  );

  if (!res.ok) {
    console.log(res);
    throw new Error("Failed to fetch live data");
  }
  return res.json();
}

type Props = {
  size?: number;
  offset?: number;
};
export default async function LiveSection({ size = 10, offset = 0 }: Props) {
  const lives = await getLives({
    size,
    offset,
  });

  return (
    <section className="py-20 bg-black" id="live">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">LIVE</h2>
        <div className="grid gap-8">
          {lives.map((live) => (
            <div
              key={live.id}
              className="bg-gray-900/50 rounded-lg p-6 hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar size={20} />
                  <time>{format(parseISO(live.startDate), "yyyy.MM.dd")}</time>
                </div>

                <h3 className="text-2xl font-bold">{live.title}</h3>

                {live.stage && (
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin size={20} />
                    <address className="not-italic">
                      {live.stage.name}, {live.stage.address}
                    </address>
                  </div>
                )}

                {live.purchaseTicketLink && (
                  <a
                    href={live.purchaseTicketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 
                             text-white px-6 py-2 rounded-full transition-colors ml-auto"
                  >
                    <Ticket size={20} />
                    <span>티켓 구입</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
