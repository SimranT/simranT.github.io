import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { CountryExplorer, type Country } from "@/components/site/country-story";

export const metadata: Metadata = {
  title: "Travel — Simran's Space",
  description:
    "Simran Tiwari's travel notes — countries visited, road trips, and shortlisted stays across seven countries.",
};

const countries: Country[] = [
  {
    slug: "bali",
    name: "Indonesia · Bali",
    flag: "🇮🇩",
    image: "/bali.jpeg",
    imageAlt: "Bali, Indonesia — rice terraces and coastline",
    teaser: "Slow, dreamy, and deeply refreshing.",
    title: "Bali: the pause-button trip.",
    quote:
      "The kind of place that resets you without you noticing it's happening.",
    lede: "Jungle mornings in Ubud, an island with no cars, cliffside temples, and a boat ride to Bali's wildest coastline — ten days, five bases, real notes from an October trip.",
    route: [
      { emoji: "🌿", label: "Ubud", duration: "3 days" },
      { emoji: "🏝️", label: "Gili T", duration: "2 days" },
      { emoji: "🛕", label: "Uluwatu", duration: "2 days" },
      { emoji: "🌊", label: "Nusa Penida", duration: "1 day" },
      { emoji: "☕", label: "Canggu", duration: "2 days" },
    ],
    stats: [
      {
        label: "Best time",
        value:
          "April–October (dry season) — I went in October, mostly clear skies.",
      },
      {
        label: "Budget",
        value: "Mid-range — stays ran $32–48/night, plus day tours and cafes.",
      },
      { label: "Duration", value: "10 days across 5 bases." },
    ],
    bridgeLabel: "📍 The postcard stuff",
    bridgeText:
      "Jatiluwih's rice terraces at sunrise, Uluwatu Temple's cliffside sunset, Nusa Penida's cliffs in one wild day, Gili Trawangan's car-free pace — all worth it, all exactly as photographed. What I'd actually plan a return trip around is below.",
    extrasHeading: "Off the beaten path",
    extras: [
      {
        title: "Bukit Trunyan",
        text: "A hiking area up north almost nobody visiting Bali bothers with.",
      },
      {
        title: "Goa Garba",
        text: "A quiet cave and creek that barely shows up in reviews — exactly the appeal.",
      },
      {
        title: "Lovina Beach",
        text: "Dolphin-watching on the north coast — a totally different Bali from Canggu/Uluwatu.",
      },
      {
        title: "El Kabron",
        text: "A cliffside sunset spot in Uluwatu that isn't the one every itinerary sends you to.",
      },
    ],
    moments: [
      {
        emoji: "🍜",
        label: "Best meal",
        text: "Sunset dinner at The Sayan House in Ubud — I still think about it.",
      },
      {
        emoji: "☕",
        label: "Favourite café",
        text: "Crate Cafe near Uluwatu — smaller and quieter than anything on a \"best cafes\" list.",
      },
      {
        emoji: "🌅",
        label: "Favourite sunset",
        text: "Gili T's west side — the whole island turns for it, but this side isn't the crowded one.",
      },
      {
        emoji: "❤️",
        label: "Would I return?",
        text: "Yes — Nusa Penida and Ubud again, without hesitation.",
      },
    ],
    tips: [
      "Book the Gili T fast boat ahead in high season — it sells out.",
      "The Kecak Dance is touristy — do it once anyway.",
      "Give Nusa Penida a full day. It's a ferry ride, not a quick stop.",
    ],
    mapHref: "https://maps.app.goo.gl/VoKZXnSaCEsf39QJ8",
    mapLabel:
      "44 pins from planning this trip — cafes, waterfalls, viewpoints, all of it.",
    shopHref: "/shop#bali-pack",
    shopLabel: "See the Bali Travel Pack",
  },
  {
    slug: "turkey",
    name: "Turkey",
    flag: "🇹🇷",
    image: "/turkey.jpeg",
    imageAlt: "Turkey — Cappadocia and the Turquoise Coast",
    teaser: "Where history feels beautifully alive.",
    title: "Turkey: twelve days, eight stops, one road trip.",
    quote:
      "History doesn't stay in museums here — it's in the marina cafés, the canyon trails, and the balloons overhead at sunrise.",
    lede: "Byzantine and Ottoman history in Istanbul, sunrise balloons over Cappadocia, ancient ruins down the Turquoise Coast, and Aegean towns to finish. A proper self-driven road trip — the real route I planned and drove in August.",
    route: [
      { emoji: "🕌", label: "Istanbul", duration: "5 days" },
      { emoji: "🎈", label: "Cappadocia", duration: "2 days" },
      { emoji: "⚓", label: "Antalya", duration: "1 day" },
      { emoji: "🌊", label: "Kaş", duration: "1 day" },
      { emoji: "🪂", label: "Fethiye", duration: "1 day" },
      { emoji: "🏛️", label: "Pamukkale & Ephesus", duration: "Day trip" },
      { emoji: "🏰", label: "Bodrum", duration: "1 day" },
      { emoji: "🌅", label: "Izmir", duration: "1 day" },
    ],
    stats: [
      {
        label: "Why I went",
        value:
          "Wanted one trip that covered history, nature, and coastline without switching countries — Turkey's rare in doing all three.",
      },
      {
        label: "Best time",
        value:
          "I went in August — hot on the coast, but Cappadocia mornings stayed cool for the balloon ride. April–June or Sept–Oct skips the peak heat.",
      },
      {
        label: "Budget",
        value:
          "Mid-range — multi-currency trip, budget tracked by category (stay, food, misc) per stop.",
      },
      { label: "Duration", value: "12 days across 8 stops." },
    ],
    bridgeLabel: "📍 The must-dos",
    bridgeText:
      "The sunrise balloon ride over Cappadocia's fairy chimneys, Ephesus and Pamukkale back to back, paragliding over Ölüdeniz's blue lagoon, crossing Europe to Asia over the Bosphorus in fifteen minutes — all of it lives up to the photos. The quieter half of the trip is below.",
    extrasHeading: "Off the beaten path",
    extras: [
      {
        title: "Balat",
        text: "Istanbul's colorful backstreets, a quieter contrast to the Grand Bazaar crowds.",
      },
      {
        title: "Ihlara Valley",
        text: "A canyon hike in Cappadocia dotted with rock-cut churches, well past where the balloon-tour crowds go.",
      },
      {
        title: "Saklıkent Canyon",
        text: "Icy water and canyon trails near Fethiye that most coastal-town visitors skip.",
      },
      {
        title: "Asansör",
        text: "A historic elevator in Izmir with a panoramic view — a quiet way to end the trip.",
      },
    ],
    moments: [
      {
        emoji: "🎈",
        label: "Best experience",
        text: "The sunrise balloon launch over Cappadocia — hundreds of them lifting off at once.",
      },
      {
        emoji: "☕",
        label: "Favourite spot",
        text: "Seaside cafes at Bodrum Marina and the promenade along Kordonboyu in Izmir — good coffee, better views.",
      },
      {
        emoji: "🌉",
        label: "Most memorable crossing",
        text: "Istanbul, ferry deck, Europe behind me and Asia ahead — about fifteen minutes across the Bosphorus.",
      },
      {
        emoji: "❤️",
        label: "Would I return?",
        text: "Yes — I'd slow down the coastal half and give Istanbul a couple more days.",
      },
    ],
    tips: [
      "Rent a car for the coastal stretch — Antalya to Izmir doesn't work well without one.",
      "Book the Cappadocia balloon slot the night before; weather cancels flights often.",
      "Do Pamukkale and Ephesus as one combined day, not two separate stops.",
    ],
    shopHref: "/shop#turkey-pack",
    shopLabel: "See the Turkey Travel Pack",
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    flag: "🇻🇳",
    image: "/vietnam.jpeg",
    imageAlt: "Vietnam — from Ho Chi Minh City to Sapa",
    teaser: "Scenic, dynamic, and full of motion.",
    title: "Vietnam: a trip you taste and feel more than you see.",
    quote:
      "Motorbike chaos in the south, mountain silence in the north — and somehow the food was the constant.",
    lede: "A February run down the country's whole spine, Ho Chi Minh City to Hanoi, five stops, never sitting still for long.",
    route: [
      { emoji: "🛵", label: "Ho Chi Minh City" },
      { emoji: "🌉", label: "Da Nang" },
      { emoji: "🏮", label: "Hoi An" },
      { emoji: "⛰️", label: "Sapa" },
      { emoji: "🍜", label: "Hanoi" },
    ],
    stats: [
      {
        label: "Best time",
        value: "February — dry heat in the south, cold and foggy up in Sapa.",
      },
      {
        label: "Budget",
        value:
          "Budget-to-mid-range — stretches further than almost anywhere else on this list.",
      },
      { label: "Duration", value: "One trip, five stops, south to north." },
    ],
    bridgeLabel: "📍 The names everyone knows",
    bridgeText:
      "Ba Na Hills' Golden Bridge, Hoi An's lantern-lit old town, Fansipan's cable car, the Cu Chi Tunnels, Da Nang's Dragon Bridge — all worth the crowds. The parts I'd build a return trip around are quieter.",
    extrasHeading: "Off the beaten path",
    extras: [
      {
        title: "Cat Cat Village",
        text: "A H'mong village near Sapa, a short walk from the cable car crowds.",
      },
      {
        title: "Ta Van & Lao Chai",
        text: "Rice-terrace villages that most Fansipan day-trippers skip entirely.",
      },
      {
        title: "Silver & Love Waterfall",
        text: "Both far quieter than anything near the main Sapa strip.",
      },
      {
        title: "The Lonely Tree of O Quy Ho",
        text: "A single tree on a mountain pass that's become its own small pilgrimage.",
      },
    ],
    moments: [
      {
        emoji: "🍜",
        label: "Best meal",
        text: "King Koi Coffee near Ho Chi Minh City — a fish-themed cafe that had no business being that good.",
      },
      {
        emoji: "☕",
        label: "Favourite café",
        text: "The Cafe Apartment — an entire building of stacked cafes, pick a floor and a view.",
      },
      {
        emoji: "🌧",
        label: "Unexpected moment",
        text: "Bui Vien Walking Street at night — chaotic once, memorable exactly because of it.",
      },
      {
        emoji: "❤️",
        label: "Would I return?",
        text: "Yes — more time in Sapa's villages, less in Ho Chi Minh City.",
      },
    ],
    tips: [
      "Do Ba Na Hills' Golden Bridge before 9am — tour buses arrive fast.",
      "Book the Fansipan cable car early or expect a long queue.",
      "Sapa in February is genuinely cold and often foggy — pack layers, don't count on views.",
    ],
    mapHref: "https://maps.app.goo.gl/vcC76hSoY7Y2hK647",
    mapLabel:
      "23 pins from planning this trip — waterfalls, villages, cafes, all of it.",
    shopHref: "/shop#vietnam-pack",
    shopLabel: "See the Vietnam Travel Pack",
  },
  {
    slug: "usa",
    name: "USA",
    flag: "🇺🇸",
    image: "/usa.JPG",
    imageAlt: "USA — a coast-to-desert-to-mountains road trip loop",
    teaser: "Wide-open, road-trip ready, and unforgettable.",
    title: "USA: a loop, not a line.",
    quote:
      "Coastline to desert to alpine lake — the same trip, three completely different worlds.",
    lede: "Down the coast on Highway 1, out through the desert lights of Vegas, up into canyon and mountain country, and back through the Sierra — a road trip that starts and ends in San Francisco without ever repeating a road.",
    route: [
      { emoji: "🌉", label: "San Francisco" },
      { emoji: "🎬", label: "Los Angeles" },
      { emoji: "🎰", label: "Las Vegas" },
      { emoji: "🏜️", label: "Arizona" },
      { emoji: "🏔️", label: "Colorado" },
      { emoji: "🪨", label: "Utah" },
      { emoji: "🚤", label: "Lake Tahoe" },
    ],
    stats: [
      {
        label: "Why I went",
        value:
          "Wanted one drive that hit coastline, desert, and mountains without flying anywhere in between.",
      },
      {
        label: "Best time",
        value:
          "Warmer months work best — some high-elevation roads through Colorado and Utah close for snow otherwise.",
      },
      {
        label: "Budget",
        value:
          "Mid-range — park fees, gas, and a mix of budget motels with a couple of splurge nights.",
      },
      {
        label: "Duration",
        value: "One big loop, coast to desert to mountains and back.",
      },
    ],
    bridgeLabel: "📍 The bucket-list stops",
    bridgeText:
      "San Francisco's Painted Ladies and Palace of Fine Arts, Griffith Observatory and the Walt Disney Concert Hall in LA, Fremont Street lit up in Vegas, Rocky Mountain National Park and Red Rocks in Colorado — all exactly as advertised. The finds I'd send someone back for are quieter.",
    extrasHeading: "Off the beaten path",
    extras: [
      {
        title: "Seven Magic Mountains",
        text: "A quick, strange, brightly-painted detour right off the road into Vegas.",
      },
      {
        title: "St. Mary's Glacier",
        text: "A short hike in Colorado to a genuine glacier, far quieter than the national park.",
      },
      {
        title: "Photo Booth Museum by Photomatica",
        text: "A small, odd museum in San Francisco most itineraries never mention.",
      },
    ],
    moments: [
      {
        emoji: "🍔",
        label: "Favourite food",
        text: "Arsicault Bakery in San Francisco, worth the line — and yes, In-N-Out is a real road-trip checkpoint, not a joke.",
      },
      {
        emoji: "🏔️",
        label: "Favourite stop",
        text: "Rocky Mountain National Park into Hanging Lake — the day the \"nature\" part of the trip actually hit.",
      },
      {
        emoji: "🎰",
        label: "Most surreal moment",
        text: "Seven Magic Mountains at dusk, neon rock stacks in the middle of the desert, twenty minutes off the highway.",
      },
      {
        emoji: "❤️",
        label: "Would I return?",
        text: "Yes — I'd trade Colorado's extra time for more of Utah and Arizona.",
      },
    ],
    tips: [
      "Book Rocky Mountain National Park's timed entry ahead in peak season — it sells out.",
      "Hanging Lake requires a permit/reservation in season — check before you drive up.",
      "This is a loop with real elevation changes — check mountain pass conditions before locking in a date.",
    ],
    mapHref: "https://maps.app.goo.gl/oTMoZ7Zk1GUhNSFx5",
    mapLabel: "44 pins across the whole loop — cafes, parks, and detours, all of it.",
    shopHref: "/shop#usa-pack",
    shopLabel: "See the USA Travel Pack",
  },
  {
    slug: "singapore",
    name: "Singapore",
    flag: "🇸🇬",
    image: "/singapore.jpeg",
    imageAlt: "Singapore skyline in the evening",
    teaser: "Futuristic, polished, and full of evening glow.",
    title: "Singapore: five to seven days, one city, no rush.",
    quote:
      "A city so well-run it makes you wonder why anywhere else bothers being complicated.",
    lede: "A short trip, not a route — futuristic architecture, hawker food, and green space stitched into every block. Compact enough to cover well without ever feeling rushed.",
    stats: [
      {
        label: "Best time",
        value: "Tropical year-round — February to April tends to be the driest stretch.",
      },
      {
        label: "Budget",
        value:
          "Mid-to-high — one of the pricier stops on this list, though transit keeps daily costs down.",
      },
      { label: "Duration", value: "5–7 days, whole city." },
    ],
    extrasHeading: "Where I spent my time",
    extras: [
      {
        title: "Gardens by the Bay",
        text: "The Supertree Grove at night and the Cloud Forest by day.",
      },
      {
        title: "Marina Bay Sands SkyPark",
        text: "The skyline view the postcards use.",
      },
      {
        title: "Chinatown & Little India",
        text: "Two completely different moods a short walk apart.",
      },
      {
        title: "Sentosa Island",
        text: "A beach-and-theme-park day off from the city.",
      },
    ],
    moments: [
      {
        emoji: "🍜",
        label: "Favourite food",
        text: "Maxwell Food Centre and Lau Pa Sat — chili crab and Hainanese chicken rice at a fraction of restaurant prices.",
      },
      {
        emoji: "🌆",
        label: "Favourite view",
        text: "The Supertree Grove lighting up at Gardens by the Bay, right as it gets dark.",
      },
      {
        emoji: "❤️",
        label: "Would I return?",
        text: "Yes — easily one of the most efficient short trips on this list.",
      },
    ],
    tips: [
      "Get an EZ-Link card on arrival — the MRT covers almost everything you'll want to see.",
      "Time Gardens by the Bay for the evening light show, not just daytime photos.",
      "Hawker centers are cash-and-queue — have small bills ready.",
    ],
    shopHref: "/shop#singapore-pack",
    shopLabel: "See the Singapore Travel Pack",
  },
  {
    slug: "thailand",
    name: "Thailand",
    flag: "🇹🇭",
    image: "/Thailand.jpeg",
    imageAlt: "Bangkok temples and river life",
    teaser: "Warm, vibrant, and easy to fall into.",
    title: "Thailand: five to seven days in Bangkok.",
    quote: "Bangkok never really slows down — except right before the food does.",
    lede: "Temples, river life, and some of the best street food anywhere — a city that moves at double speed but rewards slowing down for the right meal.",
    stats: [
      {
        label: "Best time",
        value: "November to February — cooler and drier than the rest of the year.",
      },
      {
        label: "Budget",
        value: "Budget-friendly — one of the best value cities on this whole list.",
      },
      { label: "Duration", value: "5–7 days, Bangkok." },
    ],
    extrasHeading: "The essentials",
    extras: [
      {
        title: "Grand Palace & Wat Phra Kaew",
        text: "The obvious must-see, and worth the crowds.",
      },
      {
        title: "Wat Arun",
        text: "At sunset, best seen from across the river.",
      },
      {
        title: "Chatuchak Weekend Market",
        text: "Thousands of stalls — easy to lose an afternoon.",
      },
      {
        title: "Chao Phraya river boat",
        text: "Transport that doubles as sightseeing.",
      },
    ],
    moments: [
      {
        emoji: "🍜",
        label: "Favourite food",
        text: "Street food stalls over sit-down restaurants — pad thai, mango sticky rice, whatever the longest local queue is pointing at.",
      },
      {
        emoji: "🌇",
        label: "Favourite view",
        text: "Wat Arun at sunset, seen from across the river as the light hits the spires.",
      },
      {
        emoji: "❤️",
        label: "Would I return?",
        text: "Yes — and next time I'd add an island leg onto the same trip.",
      },
    ],
    tips: [
      "Dress modestly for temples — shoulders and knees covered, or you'll be turned away.",
      "Bargain at markets; the first price is never the real one.",
      "Grab is more predictable than street-hailed tuk-tuks for longer distances.",
    ],
    shopHref: "/shop#thailand-pack",
    shopLabel: "See the Thailand Travel Pack",
  },
  {
    slug: "uae",
    name: "UAE",
    flag: "🇦🇪",
    image: "/UAE.jpeg",
    imageAlt: "Dubai skyline",
    teaser: "Bold skylines and bright-city energy.",
    title: "UAE: five to seven days in Dubai.",
    quote:
      "Fifteen minutes can take you from the tallest building on Earth to a spice souk that hasn't changed in decades.",
    lede: "Record-breaking buildings, desert on the edge of the city, and a skyline that seems to change every year — a short trip that swings between hyper-modern and old-town in the same afternoon.",
    stats: [
      {
        label: "Best time",
        value: "November to March — before the summer heat makes daytime plans difficult.",
      },
      {
        label: "Budget",
        value: "Mid-to-high — costs add up fast around the Marina and Downtown areas.",
      },
      { label: "Duration", value: "5–7 days, Dubai." },
    ],
    extrasHeading: "The big-ticket stuff",
    extras: [
      {
        title: "Burj Khalifa",
        text: "Observation deck, timed for sunset if you can get the slot.",
      },
      {
        title: "Dubai Mall & Fountain",
        text: "The show right outside it.",
      },
      {
        title: "Desert safari",
        text: "Dune bashing by day, a Bedouin-style camp dinner after dark.",
      },
      {
        title: "Old Dubai's souks",
        text: "Spice and gold markets across the creek from the modern skyline.",
      },
    ],
    moments: [
      {
        emoji: "🍢",
        label: "Favourite food",
        text: "Arabic mezze and shawarma in Old Dubai — smaller restaurants near the souks beat almost anything closer to the Marina.",
      },
      {
        emoji: "🏜️",
        label: "Best experience",
        text: "The desert safari — dune bashing by day, a Bedouin-style camp dinner once the sun went down.",
      },
      {
        emoji: "❤️",
        label: "Would I return?",
        text: "Yes — I'd trade a day in the Marina for more time in Old Dubai.",
      },
    ],
    tips: [
      "Book desert safaris a day ahead — the good operators fill up.",
      "Dress code matters more in Old Dubai and at religious sites than in the Marina.",
      "Avoid outdoor plans in peak summer heat — this is a cooler-season city trip.",
    ],
    shopHref: "/shop#uae-pack",
    shopLabel: "See the UAE Travel Pack",
  },
];

export default function TravelPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-20">
      <PageHero
        eyebrow="Journey"
        title="Notes from the road."
        description="Seven countries, one running theme: I slow down, notice details, and let the trip surprise me."
        stats={[
          { value: "7", label: "Countries explored" },
          { value: "Road trips", label: "My favorite way to move" },
          { value: "Slow travel", label: "I let the trip surprise me" },
          { value: "5–12", label: "Days per country, on average" },
        ]}
      />

      <Reveal>
        <section className="mt-16">
          <div className="text-eyebrow">Countries visited</div>
          <h2 className="text-display-md mt-3">
            Southeast Asia to the Middle East to the open road back home.
          </h2>
          <p className="text-body mt-3 max-w-2xl">
            Tap a country to read the full story — the route, the costs, the
            things that stuck, and the places nobody else&apos;s itinerary
            mentions.
          </p>

          <div className="mt-8">
            <CountryExplorer countries={countries} />
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-24">
          <div className="text-eyebrow">Guides</div>
          <h2 className="text-display-md mt-3">
            Practical advice, sorted by how you travel
          </h2>
          <p className="text-body mt-3 max-w-2xl">
            Not every trip needs a full itinerary. Shorter, focused guides for
            specific travel situations.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="card rounded-2xl p-6 opacity-60">
              <h3 className="text-display-sm">Budget Travel</h3>
              <p className="text-body mt-2">
                How to travel well without overspending — real numbers from
                real trips, not vague tips.
              </p>
              <span className="mt-4 inline-block rounded-full border border-dashed border-line-strong px-3 py-1 text-[11px] uppercase tracking-wider text-muted">
                Coming soon
              </span>
            </div>
            <div className="card rounded-2xl p-6 opacity-60">
              <h3 className="text-display-sm">Solo Travel</h3>
              <p className="text-body mt-2">
                Safety, planning, and making the most of traveling alone —
                lessons from doing it myself.
              </p>
              <span className="mt-4 inline-block rounded-full border border-dashed border-line-strong px-3 py-1 text-[11px] uppercase tracking-wider text-muted">
                Coming soon
              </span>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
