export interface Publisher{
  name: string;
}
export interface Domain{
  name: string;
}
export interface Book {
  isbn : number ,
  author : string,
  title : string,
  publicationYear: number,
  domain : Domain,
  publisher: Publisher,
  categories: string[],
  summary: string,
  ranking: number,
  contentLink: string,


}
