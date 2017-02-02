// Todo:  Move to external database
var result = {

    nodes: [{
            id: 'kant',
            label: 'Kant',
        }, {
            id: 'darwin',
            label: 'Darwin'
        }, {
            id: 'herbart',
            label: 'Herbart'
        }, {
            id: 'lotze',
            label: 'Lotze'
        }, {
            id: 'fechner',
            label: 'Fechner'
        }, {
            id: 'weber',
            label: 'Weber'
        }, {
            id: 'frege',
            label: 'Frege'
        }, {
            id: 'helmholtz',
            label: 'Helmholtz'
        }, {
            id: 'james',
            label: 'James'
        }, {
            id: 'mach',
            label: 'Mach'
        }, {
            id: 'brentano',
            label: 'Brentano'
        }, {
            id: 'husserl',
            label: 'Husserl'
        }, {
            id: 'wundt',
            label: 'Wundt'
        }, {
            id: 'stumpf',
            label: 'Stumpf'
        }, {
            id: 'gestalt',
            label: 'Gestalt'
        }, {
            id: 'külpe',
            label: 'Külpe'
        },
        {
            id: 'titchener',
            label: 'Titchener'
        }, {
            id: 'freud',
            label: 'Freud'
        }, {
            id: 'russell',
            label: 'Russell'
        }, {
            id: 'wittgenstein',
            label: 'Wittgenstein'
        }, {
            id: 'hull',
            label: 'Hull'
        }, {
            id: 'spence',
            label: 'Spence'
        }, {
            id: 'boring',
            label: 'Boring'
        }, {
            id: 'watson',
            label: 'Watson'
        }, {
            id: 'skinner',
            label: 'Skinner'
        }, {
            id: 'pavlov',
            label: 'Pavlov'
        }, {
            id: 'turing',
            label: 'Turing'
        }, {
            id: 'chomsky',
            label: 'Chomsky'
        }, {
            id: 'ross',
            label: 'Ross'
        }, {
            id: 'miller',
            label: 'Miller'
        }, {
            id: 'stevens',
            label: 'Stevens'
        }, {
            id: 'vonneumann',
            label: 'Von Neumann'
        }, {
            id: 'munsterberg',
            label: 'Munsterberg'
        }, {
            id: 'sapir',
            label: 'Sapir'
        }, {
            id: 'newell',
            label: 'Newell'
        }, {
            id: 'simon',
            label: 'Simon'
        }, {
            id: 'wiener',
            label: 'Wiener'
        }, {
            id: 'spivey',
            label: 'Spivey'
        }
    ],

    edges: [{
        from: 'kant',
        to: 'herbart'
    }, {
        from: 'helmholtz',
        to: 'wundt'
    }, {
        from: 'weber',
        to: 'fechner'
    }, {
        from: 'mach',
        to: 'fechner'
    }, {
        from: 'wundt',
        to: 'kulpe'
    }, {
        from: 'brentano',
        to: 'freud'
    }, {
        from: 'brentano',
        to: 'husserl'
    }, {
        from: 'herbart',
        to: 'husserl'
    }, {
        from: 'herbart',
        to: 'lotze'
    }, {
        from: 'fechner',
        to: 'lotze'
    }, {
        from: 'lotze',
        to: 'stumpf'
    }, {
        from: 'brentano',
        to: 'stumpf'
    }, {
        from: 'weber',
        to: 'stumpf'
    }, {
        from: 'fechner',
        to: 'stumpf'
    }, {
        from: 'wundt',
        to: 'titchener'
    }, {
        from: 'wundt',
        to: 'husserl'
    }, {
        from: 'kulpe',
        to: 'gestalt'
    }, {
        from: 'stumpf',
        to: 'gestalt'
    }, {
        from: 'mach',
        to: 'james'
    }, {
        from: 'stumpf',
        to: 'james'
    }, {
        from: 'stumpf',
        to: 'husserl'
    }, {
        from: 'hull',
        to: 'spence'
    }, {
        from: 'pavlov',
        to: 'hull'
    }, {
        from: 'pavlov',
        to: 'watson'
    }, {
        from: 'watson',
        to: 'hull'
    }, {
        from: 'watson',
        to: 'skinner'
    }, {
        from: 'darwin',
        to: 'skinner'
    }, {
        from: 'darwin',
        to: 'freud'
    }, {
        from: 'skinner',
        to: 'chomsky'
    }, {
        from: 'russell',
        to: 'wittgenstein'
    }, {
        from: 'wittgenstein',
        to: 'turing'
    }, {
        from: 'turing',
        to: 'vonneumann'
    }, {
        from: 'frege',
        to: 'russell'
    }, {
        from: 'frege',
        to: 'wittgenstein'
    }, {
        // I think...
        from: 'fechner',
        to: 'stevens'
    }, {
        from: 'boring',
        to: 'stevens'
    }, {
        from: 'stevens',
        to: 'miller'
    }, {
        from: 'newell',
        to: 'miller'
    }, {
        from: 'simons',
        to: 'miller'
    }, {
        from: 'wiener',
        to: 'miller'
    }, {
        from: 'chomsky',
        to: 'miller'
    }, {
        from: 'frege',
        to: 'husserl'
    }]
}
