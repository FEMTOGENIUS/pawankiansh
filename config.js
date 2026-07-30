/* ============================================================
   ROYAL WEDDING INVITE — CLIENT CONFIG
   Everything a new client needs changed lives in this file.
   Edit, save, done. No other file needs touching.
   ============================================================ */
window.WEDDING_CONFIG = {

  couple: {
    groom: "Pawan",
    bride: "Anshita",
    groomFull: "Pawan Gupta",
    brideFull: "Anshita Kaushal",
    monogram: "P · A",           // shown in the wax seal + header
    tagline: "Two souls, one sacred fire",
  },

  // Main wedding moment — drives the live countdown
  wedding: {
    dateISO: "2026-11-02T19:15:00+05:30",   // Baraat arrival, the evening begins
    dateDisplay: "Monday, 2 November 2026",
    muhurat: "Pheras · 3:11 AM onwards",
  },

  // The celebrations — rendered in order
  events: [
    {
      id: "mehndi",
      name: "Mehndi",
      icon: "haldi",
      date: "Sat, 31 Oct 2026",
      time: "Groom's Side 4:00 PM · Bride's Side 4:15 PM",
      venue: "Imperial Heights, Dharamshala",
      line: "Henna, laughter and the first notes of celebration",
      accent: "#D99A2B",
    },
    {
      id: "engagement",
      name: "Engagement",
      icon: "reception",
      date: "Sun, 1 Nov 2026",
      time: "9:30 AM onwards",
      venue: "Imperial Heights, Dharamshala",
      line: "A promise exchanged, blessed by both families",
      accent: "#B08A3E",
    },
    {
      id: "haldi",
      name: "Haldi & Tel Shaanti Poojan",
      icon: "haldi",
      date: "Sun, 1 Nov 2026",
      time: "Bride's Side 10:00–11:45 AM · Groom's Side 2:30–5:00 PM",
      venue: "Imperial Heights, Dharamshala",
      line: "Turmeric, laughter and golden blessings",
      accent: "#D99A2B",
    },
    {
      id: "sangeet",
      name: "Sangeet",
      icon: "sangeet",
      date: "Sun, 1 Nov 2026",
      time: "Evening",
      venue: "Imperial Heights, Dharamshala",
      line: "A night of music, dance and dazzle",
      accent: "#5B3A8E",
    },
    {
      id: "wedding",
      name: "The Wedding",
      icon: "wedding",
      date: "Mon, 2 Nov 2026",
      time: "Sehra Bandhi 4:00–6:00 PM · Baraat 7:15–9:00 PM · Pheras 3:11 AM onwards",
      venue: "Imperial Heights, Dharamshala",
      line: "Seven vows around the sacred fire",
      accent: "#7A1F3D",
    },
    {
      id: "vidaai",
      name: "Vidaai",
      icon: "reception",
      date: "Tue, 3 Nov 2026",
      time: "Early morning, 5:00 AM",
      venue: "Imperial Heights, Dharamshala",
      line: "A tearful farewell, and a beautiful beginning",
      accent: "#8F6B2E",
    },
  ],

  venue: {
    name: "Imperial Heights",
    address: "Dharamshala, Himachal Pradesh",
    // What gets searched when a guest taps "Open in Maps"
    mapsQuery: "Imperial Heights Dharamshala",
  },

  rsvp: {
    // Replace with the couple's real Google Form (use the /viewform link)
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe_PLACEHOLDER/viewform?embedded=true",
    deadline: "Please respond by 20 October 2026",
  },

  // Scratch-card hidden message
  scratch: {
    heading: "A little secret, just for you",
    message: "However near or far you're coming from, thank you for being part of our story. We can't wait to celebrate with you at Imperial Heights. 💛",
  },

  // Theme — the royal palette (matches the origami film)
  theme: {
    maroon:  "#660013",
    maroonDeep: "#3F000C",
    gold:    "#C9A24B",
    goldSoft:"#E5C878",
    ivory:   "#F4EBDB",
    inkOnIvory: "#3A2230",
  },

  frames: {
    count: 181,                 // scrub frames per tier
    loPath: "assets/frames/lo/",
    hiPath: "assets/frames/hi/",
    prefix: "f_",               // f_001.webp … f_181.webp
    ext: ".webp",
  },

  // The Hidden Moment — scroll-driven film
  sanctum: {
    count: 121,
    path: "assets/frames2/",
    prefix: "s_",               // s_001.webp … s_121.webp
    ext: ".webp",
    heading: "The Hidden Moment",
    eyebrow: "A sacred moment awaits",
    hint: "Scroll gently to unfold this hidden moment",
    veilText: "A sacred moment awaits",
  },
};
