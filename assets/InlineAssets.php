<?php
/**
 * This file is part of CMSGears Framework. Please view License file distributed
 * with the source code for license details.
 *
 * @link https://www.cmsgears.org/
 * @copyright Copyright (c) 2015 VulpineCode Technologies Pvt. Ltd.
 */

namespace themes\news\assets;

// Yii Imports
use yii\web\View;

// CMG Imports
use cmsgears\core\common\config\CoreProperties;
use cmsgears\files\config\FileProperties;

/**
 * InlineAssets registers the global variables.
 *
 * @since 1.0.0
 */
class InlineAssets extends \yii\web\AssetBundle {

	// Variables ---------------------------------------------------

	// Globals -------------------------------

	// Constants --------------

	// Public -----------------

	// Protected --------------

	// Variables -----------------------------

	// Public -----------------

	// Protected --------------

	// Private ----------------

	// Traits ------------------------------------------------------

	// Constructor and Initialisation ------------------------------

	// Instance methods --------------------------------------------

	// Yii interfaces ------------------------

	// Yii parent classes --------------------

	public function registerAssetFiles( $view ) {

		parent::registerAssetFiles( $view );

		$coreProperties = CoreProperties::getInstance();
		$fileProperties	= FileProperties::getInstance();

		$siteUrl	= $coreProperties->getSiteUrl();
		$uploadUrl	= $fileProperties->getUploadUrl();

		$siteUrl = "var siteUrl	= '{$siteUrl}/';
					var ajaxUrl	= '{$siteUrl}/apix/';
					var uploadUrl = '{$uploadUrl}/';
					var fileUploadUrl = '{$siteUrl}/apix/file/file-handler';";

		$view->registerJs( $siteUrl, View::POS_END );
	}

	// CMG interfaces ------------------------

	// CMG parent classes --------------------

	// InlineAssets --------------------------

}
