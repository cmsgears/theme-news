<?php
// Yii Imports
use yii\helpers\Url;

// CMG Imports
use cmsgears\core\common\models\resources\FormField;

$model		= $widget->model;
$ajax		= $widget->ajax;
$ajaxUrl	= $widget->ajaxUrl;
$controller	= $widget->cmtController;
$app		= $widget->cmtApp;
$action		= $widget->cmtAction;
$title		= $widget->title;
$success	= $widget->success;
$rating		= $widget->rating;

$user = Yii::$app->user->getIdentity();

$ratingField = new FormField( [ 'name' => 'rating', 'label' => 'rating', 'type' => FormField::TYPE_RATING, 'htmlOptions' => [ 'class' => 'cmt-rating rating-leaf-tertiary' ] ] );
?>
<div class="box-content-wrap">
	<div class="box-header-wrap">
		<div class="box-header">
			<div class="box-header-title inline-block"><?= $title ?></div>
			<span class="filler-tab"></span>
			<div class="box-header-actions inline-block text text-tiny">
				<span cmt-app="site" cmt-controller="site" cmt-action="checkUser" action="core/site/check-user?redirect=<?= Url::to() ?>" method="get" data-event="review">
					<i class="btn btn-icon cmti cmti-pen cmt-click"></i>
				</span>
			</div>
		</div>
	</div>
	<div class="box-content">
		<hr/>
		<div class="filler-height"></div>
		<form class="row max-cols-100 frm-rounded-all" cmt-app="<?= $app ?>" cmt-controller="<?= $controller ?>" cmt-action="<?= $action ?>" action="<?= $ajaxUrl ?>">
			<div class="spinner max-area-cover">
				<div class="valign-center cmti cmti-2x cmti-spinner-1 spin"></div>
			</div>
			<div class="col col12x6 padding padding-small-h">
				<div class="row">
					<label>Name *</label>
					<input type="text" name="ModelComment[name]" placeholder="Name" value="<?= isset( $user ) ? $user->getName() : null ?>" readonly cmt-keep="1" />
					<span class="error" cmt-error="ModelComment[name]"></span>
				</div>
				<div class="row">
					<label>Email *</label>
					<input type="text" name="ModelComment[email]" placeholder="Email" value="<?= isset( $user ) ? $user->email : null ?>" readonly cmt-keep="1" />
					<span class="error" cmt-error="ModelComment[email]"></span>
				</div>
				<div class="row">
					<label>Website Link</label>
					<input type="text" name="ModelComment[websiteUrl]" placeholder="Website Link">
					<span class="error" cmt-error="ModelComment[websiteUrl]"></span>
				</div>
				<div class="row">
					<label>Avatar Link</label>
					<input type="text" name="ModelComment[avatarUrl]" placeholder="Avatar Link">
					<span class="error" cmt-error="ModelComment[avatarUrl]"></span>
				</div>
			</div>
			<div class="col col12x6 padding padding-small-h">
				<div class="row">
					<label>Review</label>
					<textarea name="ModelComment[content]" rows="4" placeholder="Write here..."></textarea>
					<span class="error" cmt-error="ModelComment[content]"></span>
				</div>
				<div class="filler-height"></div>
				<div class="row">
					<?= Yii::$app->formDesigner->getApixFieldHtml( [ 'modelName' => 'ModelComment' ], $ratingField ) ?>
					<span class="error" cmt-error="ModelComment[rating]"></span>
				</div>
			</div>
			<div class="clear col col1 padding padding-small-h align align-right">
				<input type="submit" class="element-medium" value="Submit">
				<div class="filler-height filler-height-medium"> </div>
				<div class="message success"></div>
				<div class="message warning"></div>
				<div class="message error"></div>
			</div>
		</form>
	</div>
</div>
