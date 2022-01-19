<?php
/**
 * Admin Support Page
*/

class SCBB_Admin_Page {
    /**
     * Contructor 
    */
    public function __construct(){
        add_action( 'admin_menu', [ $this, 'scbb_plugin_admin_page' ] );
        add_action( 'admin_enqueue_scripts', [ $this, 'scbb_admin_page_assets' ] );
    }

    // Admin Assets
    public function scbb_admin_page_assets($screen) {
        if( 'tools_page_scbb-section-builder' == $screen ) {
            wp_enqueue_style( 'admin-asset', plugins_url('assets/css/admin.css', __FILE__ ) );
        }
    }

    // Admin Page
    public function scbb_plugin_admin_page(){
        add_submenu_page( 'tools.php', 'Section Builder', 'Section Builder', 'manage_options', 'scbb-section-builder', [ $this, 'scbb_admin_page_content_callback' ] );
    }
    public function scbb_admin_page_content_callback(){
        ?>
            <div class="admin_page_container">
                <div class="plugin_head">
                    <div class="head_container">
                        <h1 class="plugin_title"> Section Builder Block </h1>
                        <h4 class="plugin_subtitle">A Custom Gutenberg Block to Build Responsive Rows or Sections</h4>
                        <div class="support_btn">
                            <a href="https://demos.makegutenblock.com/" target="_blank" style="background: #D37F00">See Demos</a>
                            <a href="https://wordpress.org/plugins/section-builder-block/#reviews" target="_blank" style="background: #0174A2">Rate Plugin</a>
                        </div>
                    </div>
                </div>
                <div class="plugin_body">
                    <div class="doc_video_area">
                        <div class="doc_video">
                        <iframe width="100%" height="350" src="https://www.youtube.com/embed/upaGAJCLgqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="support_area">
                        <div class="single_support">
                            <h4 class="support_title">Freelance Work</h4>
                            <div class="support_btn">
                                <a href="https://www.fiverr.com/users/devs_zak/" target="_blank" style="background: #1DBF73">@Fiverr</a>
                                <a href="https://www.upwork.com/freelancers/~010af183b3205dc627" target="_blank" style="background: #14A800">@UpWork</a>
                            </div>
                        </div>
                        <div class="single_support">
                            <h4 class="support_title">Get Support</h4>
                            <div class="support_btn">
                                <a href="https://makegutenblock.com/contact" target="_blank" style="background: #002B42">Contact</a>
                                <a href="mailto:zbinsaifullah@gmail.com" style="background: #EA4335">Send Mail</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <?php 
    }
}
 new SCBB_Admin_Page();