export const projects = {
    ims : {
        description: 'lorem ipsum for the Inventory Management System',
        demo: 'here is the demo',
        technologies: 'Javascripts',
        collaborations: ['Jack', 'Hilson', 'Amey']
    },
    'planar-puzzle': {},
    'purrfect': {},
    // to add more projects like Criminal Intent, Gompei, AR and Geofences
}


export function displayProjectInfo(project, elementTag){
    console.log("this is the project info", project);
    document.body.append(project);
}