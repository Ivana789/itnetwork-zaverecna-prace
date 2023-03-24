class KlientRepositar {

    constructor() {
        this._sessionKlientiKlic = "ivankaSeznamKlientu";
    }

    get sessionKlientiKlic() {
        return this._sessionKlientiKlic;
    }

    ziskejSeznamKlientu() {
        const serializovanySeznam = sessionStorage.getItem(this.sessionKlientiKlic);
        const suroveObjekty = serializovanySeznam ? JSON.parse(serializovanySeznam) : [];
        return suroveObjekty.map(o => new Klient(o._jmeno, o._prijmeni, o._vek, o._telefonniCislo))
    }

    pridejKlienta(klient) {
        const seznamKlientu = this.ziskejSeznamKlientu()
        seznamKlientu.push(klient);

        const serializovanySeznam = JSON.stringify(seznamKlientu);
        sessionStorage.setItem(this.sessionKlientiKlic, serializovanySeznam);
    }


}