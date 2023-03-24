class Klient {
    constructor(jmeno, prijmeni, vek, telefonniCislo) {
        this._jmeno = jmeno;
        this._prijmeni = prijmeni;
        this._vek = vek;
        this._telefonniCislo = telefonniCislo;
    }

    get jmeno() {
        return this._jmeno;
    }

    get prijmeni() {
        return this._prijmeni;
    }

    get vek() {
        return this._vek;
    }

    get telefonniCislo() {
        return this._telefonniCislo;
    }
}