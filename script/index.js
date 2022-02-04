const speakers = [
  {
    speakerimage: './images/pic.png',
    name: 'Ntare G',
    location: 'Rwanda, Kigali',
    bio: 'A associate Software developer at microverse with  expertise in Full-stack development and DevOps.',
  },
  {
    speakerimage: './images/pic.png',
    name: 'Ntare Guy',
    location: 'Rwanda, Kigali',
    bio: 'A associate Software developer at microverse with  expertise in Full-stack development and DevOps.',
  },
  {
    speakerimage: './images/pic.png',
    name: 'Ntare Guy',
    location: 'Rwanda, Kigali',
    bio: 'A associate Software developer at microverse with  expertise in Full-stack development and DevOps.',
  },
  {
    speakerimage: './images/pic.png',
    name: 'Ntare Guy',
    location: 'Rwanda, Kigali',
    bio: 'A associate Software developer at microverse with  expertise in Full-stack development and DevOps.',
  },
];
const speakerClass = document.querySelector('#speaker-id');

speakers.forEach((speaker) => {
  speakerClass.innerHTML += `
    <section class="speaker-card">
                <div class="speaker-content">
                    <img src='${speaker.speakerimage}' width='150' alt="Guest Speaker">
                    <div class="speaker-desc">
                        <h4>${speaker.name}</h4>
                        <h5>${speaker.location}</h5>
                        <hr>
                        <p>${speaker.bio}</p>
                    </div>
                </div>
      </section>
    `;
});