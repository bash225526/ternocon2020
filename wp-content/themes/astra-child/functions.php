<?php
/**
 * astra-child Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package astra-child
 * @since 1.0.0
 */

/**
 * Define Constants
 */
define( 'CHILD_THEME_ASTRA_CHILD_VERSION', '1.0.0' );

/**
 * Enqueue styles
 */
function child_enqueue_styles() {

	wp_enqueue_style( 
        'astra-child-theme-css',
        get_stylesheet_directory_uri() . '/style.css',
        array('astra-theme-css'),
        CHILD_THEME_ASTRA_CHILD_VERSION,
        'all' );

}

add_action( 'wp_enqueue_scripts', 'child_enqueue_styles', 15 );

wp_register_script('load_jquery', ('http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'), false);
wp_enqueue_script('load_jquery');

function child_enqueue_script() {
    wp_enqueue_script( 
        'astra-child-theme-css',
        get_stylesheet_directory_uri() . '/custom_script.js',
        array('jquery'),
        CHILD_THEME_ASTRA_CHILD_VERSION,
        'all' );
}

add_action( 'wp_enqueue_scripts', 'child_enqueue_script' );