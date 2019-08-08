<?php
// CMG Imports
use cmsgears\core\frontend\config\SiteProperties;

use cmsgears\core\common\utilities\CodeGenUtil;

use cmsgears\core\common\utilities\DateUtil;

$avatar		= SiteProperties::getInstance()->getDefaultAvatar();
$avatarUrl	= isset( $model->creator ) ? CodeGenUtil::getFileUrl( $model->creator->avatar, [ 'image' => $avatar ] ) : "$resourceUrl/images/$avatar";

$rating			= $model->rating;
$commentDate	= DateUtil::getDateFromDateTime( $model->createdAt );
?>
<div class="card-content-wrap">
	<div class="card-data row padding padding-small-v">
		<div class="col col12x2">
			<img class="fluid circled circled1 avatar" src="<?= $avatarUrl ?>" />
		</div>
		<div class="col col12x10">
			<p class="h4"><?= isset( $model->creator ) ? $model->creator->getName() : $model->name ?></p>
			<div class="filler-height"></div>
			<div class="row">
				<span class="inline-block left">
					<?= yii::$app->formDesigner->getRatingStars( [ 'class' => 'cmt-rating rating-leaf-tertiary', 'selected' => $model->rating, 'readonly' => true ] ) ?>
				</span>
				<span class="inline-block right">
					<i class="cmti cmti-calendar"></i>
					<span class="inline-block margin margin-small-h"><?= $commentDate ?></span>
				</span>
			</div>
			<div class="padding padding-small-v reader">
				<?= $model->content ?>
			</div>
		</div>
	</div> <hr/>
</div>
