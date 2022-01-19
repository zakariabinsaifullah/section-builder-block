<?php
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Blocks Class
*/
final class SCBB_Block_Class {

	public function __construct(){
		$this->scbb_define_constants(); 
		add_action( 'init', [ $this, 'scbb_blocks_assets' ] );
	}

	/**
	 * Singleton Instanace 
	*/

	public static function scbb_init(){
		static $instance = false; 
		if( ! $instance ) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Constants Define 
	*/
	public function scbb_define_constants(){
		define( 'SCBB_FILE', __FILE__ );
		define( 'SCBB_BLOCK', plugins_url( '', dirname( SCBB_FILE ) ) );
		define( 'SCBB_BLOCK_ASSETS', SCBB_BLOCK . '/dist' );
	}

	/**
	 * Blocks Registration 
	*/
	private function scbb_single_block_register( $block, $options=array() ){
		return register_block_type(
			'scbb/'. $block, 
			array_merge(
				array(
					'editor_script' => 'scbb-editor-script',
					'editor_style'  => 'scbb-editor-style',
					'script'        => 'scbb-script',
					'style'         => 'scbb-style',
				),
				$options
			)
		);
	}

	/**
	 * Blocks Assets + Registration 
	*/
	public function scbb_blocks_assets(){

		/**
         * Frontend Style + Script
         */
		wp_register_style(
			'scbb-style',
			SCBB_BLOCK_ASSETS . '/front.css',
			is_admin() ? array( 'wp-editor' ) : null,
			null
		);

        wp_register_script(
            'scbb-script',
            SCBB_BLOCK_ASSETS . '/front.js',
            array(), // add wp-lement for loading react on frontend
            null,
            true
        );

        /**
         * Editor Style + Script
         */
		wp_register_style(
			'scbb-editor-style',
			SCBB_BLOCK_ASSETS . '/editor.css',
			array( 'wp-edit-blocks' ),
			null
		);

		wp_register_script(
			'scbb-editor-script',
			SCBB_BLOCK_ASSETS . '/editor.js',
			array( 'wp-blocks','wp-i18n', 'wp-element', 'wp-components', 'wp-blob', 'wp-data', 'wp-html-entities', 'lodash', 'wp-block-editor','wp-date' ),
			null,
			true
		);

		// Register Single Block 
		$this->scbb_single_block_register('container');
	
	}
}
/**
 * Initialization 
*/
function scbb_block_init(){
	return SCBB_Block_Class::scbb_init();
}

// kick-off the plugin 
scbb_block_init();