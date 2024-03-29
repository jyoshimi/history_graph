data = {

	// Add people here. Be sure to use unique ids
    "nodes": [{"id": "cantor", "label": "Cantor"}, {"id": "kant", "label": "Kant"}, {
        "id": "rumelhart",
        "label": "Rumelhart"
    }, {"id": "bekhterev", "label": "Bekhterev"}, {"id": "kayeestes", "label": "Kaye Estes"}, {
        "id": "hilbert",
        "label": "Hilbert"
    }, {"id": "darwin", "label": "Darwin"}, {"id": "dewey", "label": "Dewey"}, {
        "id": "gibbs",
        "label": "Gibbs"
    }, {"id": "herbart", "label": "Herbart"}, {"id": "lotze", "label": "Lotze"}, {
        "id": "fechner",
        "label": "Fechner"
    }, {"id": "weber", "label": "Weber"}, {"id": "frege", "label": "Frege"}, {
        "id": "helmholtz",
        "label": "Helmholtz"
    }, {"id": "boltzmann", "label": "Boltzmann"}, {"id": "james", "label": "James"}, {
        "id": "mach",
        "label": "Mach"
    }, {"id": "brentano", "label": "Brentano"}, {"id": "husserl", "label": "Husserl"}, {
        "id": "wundt",
        "label": "Wundt"
    }, {"id": "boas", "label": "Boas"}, {"id": "peirce", "label": "Peirce"}, {
        "id": "stumpf",
        "label": "Stumpf"
    }, {"id": "gestalt", "label": "Gestalt"}, {"id": "kulpe", "label": "K\u00fclpe"}, {
        "id": "desaussure",
        "label": "de Saussure"
    }, {"id": "titchener", "label": "Titchener"}, {"id": "freud", "label": "Freud"}, {
        "id": "russell",
        "label": "Russell"
    }, {"id": "wittgenstein", "label": "Wittgenstein"}, {"id": "hull", "label": "Hull"}, {
        "id": "spence",
        "label": "Spence"
    }, {"id": "boring", "label": "Boring"}, {"id": "watson", "label": "Watson"}, {
        "id": "skinner",
        "label": "Skinner"
    }, {"id": "pavlov", "label": "Pavlov"}, {"id": "turing", "label": "Turing"}, {
        "id": "chomsky",
        "label": "Chomsky"
    }, {"id": "ross", "label": "Ross"}, {"id": "miller", "label": "Miller"}, {
        "id": "stevens",
        "label": "Stevens"
    }, {"id": "vonneumann", "label": "Von Neumann"}, {"id": "munsterberg", "label": "Munsterberg"}, {
        "id": "sapir",
        "label": "Sapir"
    }, {"id": "newell", "label": "Newell"}, {"id": "simon", "label": "Simon"}, {
        "id": "wiener",
        "label": "Wiener"
    }, {"id": "spivey", "label": "Spivey"}, {"id": "prigogine", "label": "Prigogine"}, {
        "id": "berlyne",
        "label": "Berlyne"
    }, {"id": "bain", "label": "Bain"}, {"id": "hebb", "label": "Hebb"}, {
        "id": "mcp",
        "label": "McClulloch and Pitts"
    }, {"id": "church", "label": "Church"}, {"id": "kleene", "label": "Kleene"}, {
        "id": "Mary Caulkins",
        "label": "Mary Caulkins"
    }],

	// Add connections between people here, using the unique ids
    "edges": [{"from": "kant", "to": "herbart"}, {"from": "cantor", "to": "russell"}, {
        "from": "pavlov",
        "to": "bekhterev"
    }, {"from": "cantor", "to": "hilbert"}, {"from": "helmholtz", "to": "wundt"}, {
        "from": "boltzmann",
        "to": "prigogine"
    }, {"from": "boltzmann", "to": "helmholtz"}, {"from": "hilbert", "to": "husserl"}, {
        "from": "weber",
        "to": "fechner"
    }, {"from": "mach", "to": "fechner"}, {"from": "wundt", "to": "kulpe"}, {
        "from": "wundt",
        "to": "boas"
    }, {"from": "brentano", "to": "freud"}, {"from": "brentano", "to": "husserl"}, {
        "from": "herbart",
        "to": "husserl"
    }, {"from": "wundt", "to": "Boas"}, {"from": "brentano", "to": "freud"}, {
        "from": "herbart",
        "to": "lotze"
    }, {"from": "fechner", "to": "lotze"}, {"from": "lotze", "to": "stumpf"}, {
        "from": "brentano",
        "to": "stumpf"
    }, {"from": "weber", "to": "stumpf"}, {"from": "fechner", "to": "stumpf"}, {
        "from": "wundt",
        "to": "titchener"
    }, {"from": "wundt", "to": "husserl"}, {"from": "kulpe", "to": "gestalt"}, {
        "from": "stumpf",
        "to": "gestalt"
    }, {"from": "mach", "to": "james"}, {"from": "peirce", "to": "james"}, {
        "from": "darwin",
        "to": "peirce"
    }, {"from": "stumpf", "to": "james"}, {"from": "stumpf", "to": "husserl"}, {
        "from": "hull",
        "to": "spence"
    }, {"from": "pavlov", "to": "hull"}, {"from": "pavlov", "to": "watson"}, {
        "from": "watson",
        "to": "hull"
    }, {"from": "james", "to": "dewey"}, {"from": "hull", "to": "berlyne"}, {
        "from": "watson",
        "to": "skinner"
    }, {"from": "darwin", "to": "skinner"}, {"from": "darwin", "to": "freud"}, {
        "from": "skinner",
        "to": "chomsky"
    }, {"from": "russell", "to": "wittgenstein"}, {"from": "desaussure", "to": "chomsky"}, {
        "from": "wittgenstein",
        "to": "turing"
    }, {"from": "turing", "to": "vonneumann"}, {"from": "frege", "to": "russell"}, {
        "from": "gibbs",
        "to": "spivey"
    }, {"from": "frege", "to": "wittgenstein"}, {"from": "fechner", "to": "stevens"}, {
        "from": "boring",
        "to": "stevens"
    }, {"from": "stevens", "to": "miller"}, {"from": "newell", "to": "miller"}, {
        "from": "simons",
        "to": "miller"
    }, {"from": "wiener", "to": "miller"}, {"from": "chomsky", "to": "miller"}, {
        "from": "kayeestes",
        "to": "rumelhart"
    }, {"from": "skinner", "to": "kayeestes"}, {"from": "james", "to": "Mary Caulkins"}, {
        "from": "rumelhart",
        "to": "gibbs"
    }, {"from": "frege", "to": "husserl"}, {"from": "bain", "to": "hebb"}, {
        "from": "hebb",
        "to": "mcp"
    }, {"from": "mcp", "to": "rumelhart"}, {"from": "church", "to": "turing"}, {"from": "church", "to": "kleene"}]
}
