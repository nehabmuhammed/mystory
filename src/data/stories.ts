export interface Story {
  id: string;
  slug: string;
  title: string;
  englishTitle?: string;
  genre: string;
  readingTime: string;
  description: string;
  coverImage: string;
}

export const stories: Story[] = [
  {
    id: "1",
    slug: "elna",
    title: "എൽന",
    englishTitle: "ELNA",
    genre: "SHORT FICTION · DRAMA",
    readingTime: "8–10 MIN READ",
    description: "\"ചില കഥകൾ അവസാനിച്ച ശേഷമാണ് ശരിക്കും തുടങ്ങുന്നത്...\"",
    coverImage: "/stories/elna-poster.jpg",
  }
];
