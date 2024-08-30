// Etiket tipi
export type Tag = {
  label: string;
  value: string;
};

// Form'dan alınıcak olan note verisinin tipi
export type NoteData = {
  title: string;
  tags: Tag[];
  markdown: string;
};

// state'e kaydedilecek olan note verisinin tipi
export type Note = {
  id: string;
} & NoteData;
