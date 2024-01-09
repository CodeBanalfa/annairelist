export default class Annaire{
 id: number;
nom: string;
prenom: string;
dateDeNaissance: string;
address: string;
genre: string;
picture: string;   
  static picture: any;


constructor(id: number,nom: string,prenom: string, dateDeNaissance: string,address: string,genre: string,
    picture: string){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.dateDeNaissance = dateDeNaissance;
        this.address = address;
        this.genre = genre;
        this.picture = picture;
    }
}


