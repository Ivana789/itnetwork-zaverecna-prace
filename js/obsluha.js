const vytvorNovehoKlienta = () => {
    const jmeno = document.getElementById('jmeno').value;
    const prijmeni = document.getElementById('prijmeni').value;
    const vek = document.getElementById('vek').value;
    const telefonniCislo = document.getElementById('telefon').value;

    return new Klient(jmeno, prijmeni, vek, telefonniCislo);
}

const vykresliSeznamKlientu = (seznamKlientu) => {
    const div = document.getElementById('seznam-klientu');
    div.innerHTML = '';

    const table = document.createElement('table');
    table.setAttribute('class', 'tabulka-klientu')

    // vytvořit header
    const headerPolozky = ['Jméno', 'Přijmení', 'Věk', 'Telefonní číslo'];

    const head = table.createTHead();
    const headerRadek = head.insertRow();

    headerPolozky.forEach(text => {
        const bunka = headerRadek.insertCell();
        bunka.setAttribute('class', 'bunka-header-tabulka-klientu')

        const headerText = document.createTextNode(text);
       

        bunka.appendChild(headerText);
    })

    // vytvořit body
    const body = table.createTBody();
    seznamKlientu.forEach(klient => {
        const radek = body.insertRow();

        const bunkaJmeno = radek.insertCell();
        bunkaJmeno.appendChild(document.createTextNode(klient.jmeno))
        bunkaJmeno.setAttribute('class', 'bunka-tabulka-klientu')

        const bunkaPrijmeni = radek.insertCell();
        bunkaPrijmeni.appendChild(document.createTextNode(klient.prijmeni))
        bunkaPrijmeni.setAttribute('class', 'bunka-tabulka-klientu')

        const bunkaVek = radek.insertCell();
        bunkaVek.appendChild(document.createTextNode(klient.vek));
        bunkaVek.setAttribute('class', 'bunka-tabulka-klientu')

        const bunkaTelefonniCislo = radek.insertCell();
        bunkaTelefonniCislo.appendChild(document.createTextNode(klient.telefonniCislo));
        bunkaTelefonniCislo.setAttribute('class', 'bunka-tabulka-klientu')
    });

    div.appendChild(table);
}

const ulozKlienta = () => {
    const klient = vytvorNovehoKlienta();

    const klientRepositar = new KlientRepositar();
    klientRepositar.pridejKlienta(klient);

    const seznamKlientu = klientRepositar.ziskejSeznamKlientu();
    vykresliSeznamKlientu(seznamKlientu);
};

document.querySelector('#ulozit').addEventListener('click', ulozKlienta)

const klientRepositar = new KlientRepositar();
const seznamKlientu = klientRepositar.ziskejSeznamKlientu();

if (Array.isArray(seznamKlientu) && seznamKlientu.length) {
    vykresliSeznamKlientu(seznamKlientu);
}