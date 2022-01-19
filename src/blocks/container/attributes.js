// All attributes 
const attributes = {
    // container padding
    contentWidth: {
        type: 'number',
        default: 1200,
    },
    deskPadding: {
        type: 'object', 
        default: {
            top: '70px',
            left: '15px',
            right: '15px',
            bottom: '70px',
        }
    },
    tabPadding: {
        type: 'object', 
        default: {
            top: '50px',
            left: '15px',
            right: '15px',
            bottom: '50px',
        }
    },
    mobPadding: {
        type: 'object', 
        default: {
            top: '30px',
            left: '10px',
            right: '10px',
            bottom: '30px',
        }
    },
    pressed: {
        type: 'boolean',
        default: true
    },
    notPressed: {
        type: 'boolean',
        default: false
    },
    bgColor: {
        type: 'string',
        default: '#FE7E6D',
    },
    bgImage: {
        type: 'string',
    },
    horizontalPos: {
        type: 'number',
        default: 50
    },
    verticalPos: {
        type: 'number',
        default: 50
    },
    bgSize: {
        type: 'string',
        default: 'cover'
    },
    bgRepeat: {
        type: 'boolean',
        default: false
    },
    enableOverlay: {
        type: 'boolean',
        default: false
    },
    overlayColor: {
        type: 'string',
        default: '#000000'
    },
    opacity: {
        type: 'number',
        default: 0.6,
    }
}
export default attributes; 