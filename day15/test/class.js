// 동물 병원

class dongmulHospital {
  #jong;
  #age;
  #name;
  #medicalRecords;

  constructor(a, b, c, d) {
    this.#name = a;
    this.#jong = b;
    this.#age = c;
    this.#medicalRecords = d;
  }
}

class MedicalRecord {
  #visitedDate;
  #examine;
  #doctorName;

  constructor(b, c) {
    this.#visitedDate = this.setVisistedDate();
    this.#examine = b;
    this.#doctorName = c;
  }

  setVisistedDate(a) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(a)) {
    }
  }
}
