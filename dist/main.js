"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    name;
    email;
    _password;
    phone;
    age;
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    constructor(id, name, email, _password, phone, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this._password = _password;
        this.phone = phone;
        this.age = age;
    }
    Fondage() {
        return this.age;
    }
    Checkage(value) {
        if (value < 18 || value > 60) {
            throw new Error("Age must be between 18 and 60");
        }
        this.age = value;
        return this.age;
    }
    displayInfo() {
        console.log(this.id, this.name, this.email, this._password, this.phone, this.age);
    }
}
const user1 = new User(123, "ahmed", "asdf@ag", "123456", "5798231", 20);
const user2 = new User(456, "khaled", "asdf@ag", "564856", "5798231", 21);
class Admin extends User {
    notes = [];
    constructor(id, name, email, _password, phone, age) {
        super(id, name, email, _password, phone, age);
    }
    manageNotes() { }
}
class Note {
    id;
    title;
    content;
    userId;
    noteBook;
    constructor(id, title, content, userId, noteBook) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
        this.noteBook = noteBook;
    }
    preview(maxLength = 30) {
        if (this.content.length <= maxLength) {
            return this.content;
        }
        return this.content.slice(0, maxLength) + "...";
    }
}
class NoteBook {
    noteBook;
    Notes = [];
    constructor(noteBook) {
        this.noteBook = noteBook;
    }
    addNote(id, title, content, userId) {
        const note = new Note(id, title, content, userId, this.noteBook);
        this.Notes.push(note);
    }
    removeNote(id) {
        const indexNote = this.Notes.findIndex((note) => { note.id == id; });
        if (indexNote !== -1) {
            this.Notes.splice(indexNote, 1);
            return true;
        }
        return false;
    }
}
const note1 = new Note(1, "News", "the war is start in lllllllllllllllllllllllllllllllll", user1.id, "EnglishBook");
const note2 = new Note(2, "welcom", "the welcome is start in lllllllllllllllllllllllllllllllll", user2.id, "EnglishBook");
const note3 = new Note(3, "elwan", "the welcome is start in lllllllllllllllllllllllllllllllll", user2.id, "EnglishBook");
const noteBook1 = new NoteBook("EnglishBook");
noteBook1.addNote(1, "News", "the war is start in lllllllllllllllllllllllllllllllll", user1.id);
noteBook1.addNote(2, "welcom", "the welcome is start in lllllllllllllllllllllllllllllllll", user2.id);
noteBook1.addNote(3, "elwan", "the welcome is start in lllllllllllllllllllllllllllllllll", user2.id);
class usersNoteBook {
    user;
    hisNotes;
    constructor(user, hisNotes) {
        this.user = user;
        this.hisNotes = hisNotes;
    }
}
const ahmed = new usersNoteBook(user2, [note2, note3]);
class authorNoteBook {
    user;
    hisNotes;
    constructor(user, hisNotes) {
        this.user = user;
        this.hisNotes = hisNotes;
    }
}
const author = new authorNoteBook(user1, note1);
console.log(author);
class storage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    getItem(value) {
        this.items.find((item) => { item == value; });
    }
    deleteItem(value) {
        const itemDelete = this.items.findIndex((el) => { el == value; });
        if (itemDelete !== -1) {
            this.items.splice(itemDelete, 1);
            return true;
        }
        return false;
    }
}
