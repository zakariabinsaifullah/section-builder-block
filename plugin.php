<?php
/**
 * Plugin Name: Section Builder Block
 * Description: <strong>Section Builder Block</strong> is a custom Gutenberg Block to design <strong>Responsive Row in Gutenberg Editor</strong>. It comes with a lot of features so that you can easily make an attractive section.
 * Author: Zakaria Binsaifullah
 * Author URI: https://makegutenblock.com/
 * Version: 1.0.0
 * License: GPL2+
 * Text Domain: section-builder-block
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Load Plugin Text Domain
 */

function scbb_plugin_textdomain_load() {
    load_plugin_textdomain( 'section-builder-block', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
  }
add_action( 'init', 'scbb_plugin_textdomain_load' );

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
require_once plugin_dir_path( __FILE__ ) . 'admin/admin.php';


// Redirecting
function scbb_user_redirecting( $plugin ) {
	if( plugin_basename(__FILE__) == $plugin ){
		wp_redirect( admin_url( 'tools.php?page=scbb-section-builder' ) );
		die();
	}
}
add_action( 'activated_plugin', 'scbb_user_redirecting' );