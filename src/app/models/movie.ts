export class Movie {

  public author: String;
  public cover: String;
  public duration: number;
  public genre: String;
  public id: number;
  public rating: number;
  public slug: String;
  public synopsis: String;
  public title: String;
  public year: number;

  constructor(author: String, cover: String, duration: number, genre: String, id: number,
              rating: number, slug: String, synopsis: String ,title: String, year: number) {

    this.author = author;
    this.cover = cover;
    this.duration = duration;
    this.genre = genre;
    this.id = id;
    this.rating = rating;
    this.slug = slug;
    this.synopsis = synopsis;
    this.title = title;
    this.year = year;

  }
}
