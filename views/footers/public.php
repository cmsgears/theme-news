<?php
// CMG Imports
use cmsgears\widgets\elements\Nav;
use cmsgears\widgets\club\cms\PostWidget;
use cmsgears\widgets\newsletter\FollowMeWidget;

// News Imports
use themes\news\Theme;
?>
<footer class="footer footer-basic footer-main">
	<div class="footer-content row row-xlarge max-cols-100 col-filler-wrap">
		<div class="colf colf12x8">
			<div class="row max-cols-50">
				<div class="footer-col col col12x6">
					<div class="h5 col-header">Links</div>
					<?= Nav::widget([
						'view' => $this, 'slug' => Theme::MENU_LINKS,
						'options' => [ 'id' => 'menu-links', 'class' => 'nav' ]
					])?>
				</div>
				<div class="footer-col col col12x6">
					<div class="h5 col-header">Featured Posts</div>
					<?= PostWidget::widget([
						'pagination' => false, 'defaultBanner' => true, 'limit' => 6,
						'template' => 'avatar', 'widget' => 'featured',
						'wrapperOptions' => [ 'class' => 'blog-posts row' ],
						'singleOptions' => [ 'class' => 'blog-post' ]
					])?>
				</div>
			</div>
		</div>
		<div class="footer-col col col12x4">
			<div class="h5 col-header">Newsletter</div>
			<div>Sign Up to receive updates from us.</div>
			<?= FollowMeWidget::widget([
				'wrap' => true, 'options' => [ 'class' => 'footer-newsletter-wrap' ],
				'templateDir' => '@themeTemplates/widget/newsletter'
			]) ?>
		</div>
	</div>
</footer>
<footer class="footer footer-copyright">
	<div class="row row-xlarge padding padding-small-v align align-center">
		Copyright © 2017 - <?= date( 'Y' ) ?> <?= $coreProperties->getSiteName() ?>. All Rights Reserved.
	</div>
	<div class="fixed-social align align-center">
		<ul class="vnav nav-social ">
			<li class="uppercase text text-tiny h6">Share on</li>
			<?php $link = Yii::$app->request->absoluteUrl; ?>
			<li><a class="fab fa-reddit" target="_blank" href="https://reddit.com/submit?url=<?= $link ?>" title="Reddit"></a></li>
			<li><a class="fab fa-facebook" target="_blank" href="http://www.facebook.com/sharer.php?u=<?= $link ?>" title="Facebook"></a></li>
			<li><a class="fab fa-twitter" target="_blank" href="https://twitter.com/share?url=<?= $link ?>" title="Twitter"></a></li>
			<li><a class="fab fa-linkedin" target="_blank" href="http://www.linkedin.com/shareArticle?url=<?= $link ?>" title="LinkedIn"></a></li>
			<li><a class="fab fa-pinterest" target="_blank" href="http://pinterest.com/pin/create/link/?url=<?= $link ?>" title="Pinterest"></a></li>
			<!--<li><a class="fab fa-medium" target="_blank" href="" title="Medium"></a></li>-->
			<li><a class="fab fa-mix" target="_blank" href="http://mix.com/submit?url=<?= $link ?>" title="Mix"></a></li>
			<li><a class="fab fa-tumblr" target="_blank" href="https://www.tumblr.com/widgets/share/tool?canonicalUrl=<?= $link ?>" title="Tumblr"></a></li>
		</ul>
	</div>
</footer>
