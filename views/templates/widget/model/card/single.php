<?php
// Yii Imports
use yii\helpers\Url;

// CMG Imports
use cmsgears\core\frontend\config\SiteProperties;

use cmsgears\core\common\utilities\CodeGenUtil;

// Content
$content	= $model->modelContent;
$modelUrl	= isset( $widget->singlePath ) ? "$widget->singlePath/$model->slug" : Url::toRoute( [ "/$model->slug" ], true );

$title		= $model->displayName;
$site		= $model->site;
$siteUrl	= $site->getSiteUrl();

// Settings
$data = json_decode( $model->data );

$settings = isset( $data->settings ) ? $data->settings : [];

// Banner
$defaultBanner = !empty( $settings->defaultBanner ) ? $settings->defaultBanner : false;

$mbannerObj	= $content->banner;
$mbanner	= $defaultBanner ? SiteProperties::getInstance()->getPageBanner() : null;
$mbannerUrl	= CodeGenUtil::getSmallUrl( $content->banner, [ 'image' => $mbanner ] );

$mlazyBanner	= isset( $mbannerObj ) ? true : false;
$mbkgUrl		= isset( $mbannerUrl ) ? $mbannerUrl : null;

$mbkgLazyClass	= $mlazyBanner ? 'cmt-lazy-img' : null;
$mbkgUrl		= $mlazyBanner ? $mbannerObj->getSmallPlaceholderUrl() : $mbkgUrl;

$mbkgSrcset		= isset( $mbannerObj ) ? $mbannerObj->getSmallUrl() . " 1x, " . $mbannerObj->getMediumUrl() . " 1.5x, " . $mbannerObj->getFileUrl() . " 2x" : null;
$mbkgSizes		= isset( $mbannerObj ) ? "(min-width: 1025px) 2x, (min-width: 481px) 1.5x, 1x" : null;
$mbkgLazyAttrs	= isset( $mbannerObj ) ? "data-src=\"$mbannerUrl\" data-srcset=\"$mbkgSrcset\" data-sizes=\"$mbkgSizes\"" : null;
?>
<div class="card-content-wrap clearfix <?= !empty( $mbannerUrl ) ? 'card-content-split' : null ?>">
	<?php if( !empty( $mbannerUrl ) ) { ?>
		<div class="card-header">
			<div class="card-bkg">
				<img class="fluid <?= $mbkgLazyClass ?>" src="<?= $mbkgUrl ?>" title="<?= "{$model->displayName}" ?>" alt="<?= "{$model->displayName}" ?>" <?= $mbkgLazyAttrs ?> />
			</div>
		</div>
	<?php } ?>
	<div class="card-content">
		<div class="card-content-title">
			<a href="<?= "{$siteUrl}/blog/{$model->slug}" ?>"><?= $title ?></a>
		</div>
	</div>
</div>
