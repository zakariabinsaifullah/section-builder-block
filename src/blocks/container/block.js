import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import save from './save';
import attributes from './attributes';
import './editor.scss';
import icon from './icon';
/** 
 * Block Registration
 * @param {string} title
 * @param {string} description
 * @param {string <object> } icon
 * @param {string} category
 * @param {string <object> } keywords
 * @param {object} attributes
*/

registerBlockType('scbb/container', {
    title: __( 'Container' ),
    description: __( 'Build a reponsive Section' ),
    icon: {
        src: icon,
        foreground: '#0073aa',
    },
    category: 'design',
    // example: {
    //     attributes: {
    //         title: __( 'Test Heading' ),
    //         color: '#0073aa',
    //     }
    // },
    keywords: [ 
        __( 'Section' ),
        __( 'Container' )
    ],
    edit,
    attributes,
    save
})
