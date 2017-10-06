<?php
namespace themes\adminchild\assets;

use \Yii;
use yii\web\View;

class ChildAssetBundle extends \yii\web\AssetBundle {

	// Variables ---------------------------------------------------

	// Public ----

	// Path Configuration
	public $sourcePath	= '@themes/adminchild/resources';

	// Load CSS
    public $css	= [
        "styles/main.css"
    ];

	// Load Javascript
    public $js	= [
        "scripts/main.js"
    ];

	// Define the Position to load Assets
    public $jsOptions = [
        "position" => View::POS_END
    ];

	// Constructor and Initialisation ------------------------------

	public function __construct()  {

		parent::__construct();
	}
}

?>