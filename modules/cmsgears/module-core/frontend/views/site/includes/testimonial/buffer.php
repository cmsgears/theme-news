<?php
// CMG Imports
use cmsgears\widgets\comment\submit\SubmitTestimonial;

$coreProperties = $this->context->getCoreProperties();

$site = Yii::$app->core->site;
?>
<div class="page-content-buffer">
	<div class="h6 margin margin-small-v">
		<p>Write us your experience with <?= $coreProperties->getSiteName() ?>.</p>
	</div>
	<?= SubmitTestimonial::widget([
	   'model' => $site, 'ratingClass' => 'cmt-rating rating-emoticons',
	   'ajaxUrl' => "core/site/submit-testimonial?slug=$site->slug",
	   'templateDir' => '@themeTemplates/comment/feedback', 'template' => 'submit'
	])?>
</div>
