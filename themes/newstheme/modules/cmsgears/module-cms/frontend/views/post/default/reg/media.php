<?php
// Yii Imports
use yii\widgets\ActiveForm;
use yii\helpers\Html;
use yii\helpers\Url;
// CMG Imports
use cmsgears\core\common\config\CoreGlobal;
use cmsgears\core\common\utilities\CodeGenUtil;

use cmsgears\files\widgets\ImageUploader;
use cmsgears\files\widgets\VideoUploader;


$viewPath =  realpath(dirname(__FILE__).'/../'); 
$coreProperties = $this->context->getCoreProperties();
$this->title 	= 'Media | ' . $coreProperties->getSiteTitle();


// Data

?>


<?php include $viewPath.'/header/header.php' ?>

<div class="color color-primary-l">
	
	<?php $form = ActiveForm::begin() ?>
	<div class="filler-height filler-large"> 
	</div>
	<div class="row ">
		<div class="col col12x6">
			<label> Banner </albel>
			
			<?= ImageUploader::widget([
				'options' => [ 'id' => 'model-banner', 'class' => 'file-uploader color color-gray' ],
				'model' => $banner, 'modelClass' => 'Banner', 'directory' => 'banner'
			]); ?>
		</div>	
		<div class="col col12x6">
			<label> Video </albel>
			<?= VideoUploader::widget( [ 'options' => [ 'id' => 'model-video', 'class' => 'file-uploader color color-gray' ], 'model' => $video ]); ?>
		</div>	
		
	</div>	
	<div class="row ">
			
	</div>	
	<div class="clearfix ">
		<input type="submit" class="btn btn-medium right" value="Update">
	</div>
	<?php ActiveForm::end()?>
</div>