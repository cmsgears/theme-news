<?php
// Yii Imports
use yii\helpers\Url;

// CMG Imports
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
$banner		= isset( $pageBanner ) ? $pageBanner : 'banner-page.jpg';
$bannerUrl	= CodeGenUtil::getFileUrl( $content->banner, [ 'image' => $banner ] );
?>
<div class="box-content-wrap clearfix">
	<div class="box-header-wrap">
		<div class="box-header">
			<div class="bkg-element-wrap">
				<div class="bkg-element bkg-element-medium">
					<img src="<?= $bannerUrl ?>" title="<?= "{$model->displayName}" ?>" />
				</div>
			</div>
		</div>
	</div>
	<div class="box-content">
		<div class="box-content-info">
			<?= $publishedAt ?>
		</div>
		<div class="box-content-title reader">
			<?= $model->displayName ?>
		</div>
		<div class="box-content-data reader">
			<?= $content->getDisplaySummary( $widget->textLimit ) ?> &nbsp;&nbsp;
			... <a href="<?= "{$siteUrl}/blog/{$model->slug}" ?>">Read More</a>
		</div>
	</div>
</div>
