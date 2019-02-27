<?php
// Yii Imports
use yii\helpers\Url;

$model			= $widget->model;
$captcha		= $widget->captcha;
$title			= $widget->title;
$success		= $widget->success;
$rating			= $widget->rating;
$ratingClass	= $widget->ratingClass;

$user = Yii::$app->user->getIdentity();

$ajaxUrl		= $widget->ajaxUrl;
$cmtApp			= $widget->cmtApp;
$cmtController	= $widget->cmtController;
$cmtAction		= $widget->cmtAction;
?>
<div class="box-content">
	<?php if( !isset( $user ) ) { ?>
		<div class="box-content-data">
			<div class="margin margin-small-v">
				Please <a href="<?= Url::toRoute( [ 'login' ], true ) ?>">Login</a> to submit the form.
			</div>
		</div>
	<?php } else { ?>
		<div cmt-app="<?= $cmtApp ?>" cmt-controller="<?= $cmtController ?>" cmt-action="<?= $cmtAction ?>" action="<?= $ajaxUrl ?>">
			<div class="max-area-cover spinner">
				<div class="valign-center cmti cmti-2x cmti-spinner-1 spin"></div>
			</div>
			<div class="box-content-data color color-tertiary">
				<div class="h6 text text-default-r">
					Write Us
				</div>
				<div class="margin margin-small-v">
					<textarea name="ModelComment[content]" rows="5"></textarea>
					<span class="error" cmt-error="content"></span>
				</div>
			</div>
			<div class="box-content-data">
				<div class="h6 text text-default-r">
					Your Rating
				</div>
				<div class="margin margin-small-v">
					<?= Yii::$app->formDesigner->getRatingField(
						[ 'modelName' => 'ModelComment', 'fieldName' => 'rating', 'class' => $ratingClass ]
					)?>
					<span class="error" cmt-error="rating"></span>
				</div>
				<div class="align align-right">
					 <input type="submit" class="element-medium cmt-click" value="Submit">
				</div>
				<div class="filler-height"></div>
				<div class="message success"></div>
				<div class="message warning"></div>
				<div class="message error"></div>
				<div class="filler-height"> </div>
			</div>

			<input type="hidden" name="ModelComment[name]" value="<?= $user->getName() ?>" />
			<input type="hidden" name="ModelComment[email]" value="<?= $user->email ?>" />
		</div>
	<?php } ?>
</div>
