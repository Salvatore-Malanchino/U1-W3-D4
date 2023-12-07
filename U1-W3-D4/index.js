const CorpoPrincipale = () => {
  const mainBody = document.getElementById('tabella');
  for (let i = 0; i < 91; i++) {
    const divNumber = document.createElement('div');
    divNumber.classList.add('divNumber');
    const h3Number = document.createElement('h3');
    h3Number.classList.add('h3class');
    divNumber.appendChild('h3Number');
    h3Number.appendChild('divNumber');
  }
};
