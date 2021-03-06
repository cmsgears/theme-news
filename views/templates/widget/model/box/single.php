<?php
// Yii Imports
use yii\helpers\Url;

// CMG Imports
use cmsgears\core\frontend\config\SiteProperties;

use cmsgears\core\common\utilities\CodeGenUtil;

// Content
$content	= $model->modelContent;
$modelUrl	= isset( $widget->singlePath ) ? "$widget->singlePath/$model->slug" : Url::toRoute( [ "/$model->slug" ], true );

// Model
$title		= $model->displayName;
$site		= $model->site;
$siteUrl	= $site->getSiteUrl();

$publishedAt = date( 'F d, Y', strtotime( $content->publishedAt ) );

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
<div class="box-content-wrap clearfix <?= !empty( $mbannerUrl ) ? 'box-content-split' : null ?>">
	<?php if( !empty( $mbannerUrl ) ) { ?>
		<div class="box-header-wrap">
			<div class="box-header">
				<div class="bkg-element-wrap">
					<div class="bkg-element bkg-element-medium">
						<img class="<?= $mbkgLazyClass ?>" src="<?= $mbkgUrl ?>" title="<?= "{$model->displayName}" ?>" alt="<?= "{$model->displayName}" ?>" <?= $mbkgLazyAttrs ?> />
					</div>
				</div>
			</div>
		</div>
	<?php } ?>
	<div class="box-content">
		<div class="box-content-info">
			<?= $publishedAt ?>
		</div>
		<div class="box-content-title reader">
			<?= $model->displayName ?>
		</div>
		<div class="box-content-data reader">
			<?= strip_tags( $content->getDisplaySummary( $widget->textLimit ) ) ?> &nbsp;...
			<a href="<?= Url::to(["/blog/$model->slug"])?>">Read More</a>
		</div>
	</div>
</div><hr/>
