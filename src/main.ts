
// Q 1
class User {
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    constructor(
        public id: number,
        public name: string,
        public email: string,
        private _password: string,
        public phone: string,
        public age: number,
    ) { }
    public Fondage(): number {
        return this.age;
    }
    public Checkage(value: number) {
        if (value < 18 || value > 60) {
            throw new Error("Age must be between 18 and 60");
        }
        this.age = value;
        return this.age
    }
    public displayInfo() {
        console.log(this.id, this.name, this.email, this._password, this.phone, this.age);
    }
}
const user1 = new User(123, "ahmed", "asdf@ag", "123456", "5798231", 20)
const user2 = new User(456, "khaled", "asdf@ag", "564856", "5798231", 21)
// user1.displayInfo();




// Q 2
class Admin extends User {
    notes: string[] = []

    constructor(
        id: number,
        name: string,
        email: string,
        _password: string,
        phone: string,
        age: number,) {
        super(id, name, email, _password, phone, age)
    }

    public manageNotes() { }
}




// Q 3
class Note {
    constructor(public id: number, public title: string, public content: string, public userId: number, public noteBook: string) { }
    public preview(maxLength: number = 30): string {
        if (this.content.length <= maxLength) {
            return this.content;
        }
        return this.content.slice(0, maxLength) + "...";
    }
}




// Q 4
class NoteBook {
    Notes: Note[] = []
    constructor(public noteBook: string) { }
    public addNote(id: number, title: string, content: string, userId: number) {
        const note = new Note(id, title, content, userId, this.noteBook)
        this.Notes.push(note)
    }
    public removeNote(id: number) {
        const indexNote = this.Notes.findIndex((note) => { note.id == id })
        if (indexNote !== -1) {
            this.Notes.splice(indexNote, 1)
            return true
        }
        return false
    }

}
const note1 = new Note(1, "News", "the war is start in lllllllllllllllllllllllllllllllll", user1.id, "EnglishBook")
const note2 = new Note(2, "welcom", "the welcome is start in lllllllllllllllllllllllllllllllll", user2.id, "EnglishBook")
const note3 = new Note(3, "elwan", "the welcome is start in lllllllllllllllllllllllllllllllll", user2.id, "EnglishBook")
// console.log(note1);
const noteBook1 = new NoteBook("EnglishBook")
noteBook1.addNote(1, "News", "the war is start in lllllllllllllllllllllllllllllllll", user1.id)
noteBook1.addNote(2, "welcom", "the welcome is start in lllllllllllllllllllllllllllllllll", user2.id)
noteBook1.addNote(3, "elwan", "the welcome is start in lllllllllllllllllllllllllllllllll", user2.id)
// console.log(noteBook1.Notes);
// noteBook1.removeNote(1)
// console.log(noteBook1.Notes);




// Q 5
class usersNoteBook {
    constructor(public user: User, public hisNotes: Note[]) { }
}
const ahmed = new usersNoteBook(user2, [note2 , note3])
// console.log(ahmed);




// Q 6
class authorNoteBook {
    constructor(public user: User, public hisNotes: Note) { }
}
const author = new authorNoteBook(user1, note1)
console.log(author);




// Q 7
class storage <T>{
    public items:T[]=[]
    addItem(item:T):void{
        this.items.push(item)
    }
    getItem(value:T){
        this.items.find((item)=>{item == value})
    }
    deleteItem(value:T):boolean{
        const itemDelete = this.items.findIndex((el)=>{el == value})
        if (itemDelete !== -1) {
            this.items.splice(itemDelete , 1)
            return true
        }
        return false
    }
}