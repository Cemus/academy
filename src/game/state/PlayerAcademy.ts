import CharacterFactory from "../characters/factories/CharacterFactory";
import type { Character } from "../characters/models/Character";

export default class PlayerAcademy {
  private emit: () => void;
  private _students: Character[] = [
    CharacterFactory.createStudent(),
    CharacterFactory.createStudent(),
    CharacterFactory.createStudent(),
    CharacterFactory.createStudent(),
    CharacterFactory.createStudent(),
    CharacterFactory.createStudent(),
    CharacterFactory.createStudent(),
    CharacterFactory.createStudent(),
  ];

  constructor(emit: () => void) {
    this.emit = emit;
  }

  get students() {
    return this._students;
  }

  addStudent(student: Character) {
    this._students.push(student);
    this.emit();
  }

  sendStudentsOnMission(students: Character[], mission: Mission) {
    const ids = new Set(students.map((s) => s.id));

    for (const student of this.students) {
      if (ids.has(student.id)) {
        student.currentMission = mission;
      }
    }

    this.emit();
  }
}
