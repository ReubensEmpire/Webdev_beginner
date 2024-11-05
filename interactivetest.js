document.addEventListener('DOMContentLoaded', () => {
    const celestialBodies = [
        { name: 'Carina Nebula', description: 'A large, complex area of bright and dark nebulosity in the constellation Carina.' },
        { name: 'Exoplanet WASP-96b', description: 'A hot gas giant exoplanet that orbits a G-type star.' },
        // Add more celestial bodies as needed
    ];

    const crewMembers = [
        { name: 'Dr. Jane Doe', role: 'Astrophysicist' },
        { name: 'John Smith', role: 'Engineer' },
        // Add more crew members as needed
    ];

    const technologyDetails = [
        { name: 'Primary Mirror', description: 'The JWST primary mirror is composed of 18 hexagonal mirror segments.' },
        { name: 'Sunshield', description: 'A five-layer sunshield to protect the telescope from the Sun\'s heat.' },
        // Add more technology details as needed
    ];

    const celestialBodiesContainer = document.getElementById('celestial-bodies');
    celestialBodies.forEach(body => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${body.name}</h3><p>${body.description}</p>`;
        celestialBodiesContainer.appendChild(div);
    });

    const crewMembersContainer = document.getElementById('crew-members');
    crewMembers.forEach(member => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${member.name}</h3><p>${member.role}</p>`;
        crewMembersContainer.appendChild(div);
    });

    const technologyDetailsContainer = document.getElementById('technology-details');
    technologyDetails.forEach(tech => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${tech.name}</h3><p>${tech.description}</p>`;
        technologyDetailsContainer.appendChild(div);
    });
});

function startAdventure() {
    alert('Adventure started!');
}
