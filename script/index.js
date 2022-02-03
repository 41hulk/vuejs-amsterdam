const speaker = [
  {
    simage: './images/pic.png',
    sName: 'Ntare G',
    sLocation: 'Rwanda, Kigali',
    sBio: 'A associate Software developer at microverse with  expertise in Full-stack development and DevOps.',
  },
  {
    simage: './images/pic.png',
    sName: 'Ntare Guy',
    sLocation: 'Rwanda, Kigali',
    sBio: 'A associate Software developer at microverse with  expertise in Full-stack development and DevOps.',
  },
  {
    simage: './images/pic.png',
    sName: 'Ntare Guy',
    sLocation: 'Rwanda, Kigali',
    sBio: 'A associate Software developer at microverse with  expertise in Full-stack development and DevOps.',
  },
  {
    simage: './images/pic.png',
    sName: 'Ntare Guy',
    sLocation: 'Rwanda, Kigali',
    sBio: 'A associate Software developer at microverse with  expertise in Full-stack development and DevOps.',
  },
];
const speakerClass = document.querySelector('#speaker-id');

for (let i = 0; i <= speaker.length; i += 1) {
  speakerClass.innerHTML += `
    <section class="speaker-card">
                <div class="speaker-content">
                    <img src='${speaker[i].simage}' width='150' alt="">
                    <div class="speaker-desc">
                        <h4>${speaker[i].sName}</h4>
                        <h5>${speaker[i].sLocation}</h5>
                        <hr>
                        <p>${speaker[i].sBio}</p>
                    </div>
                </div>
      </section>
    `;
}
