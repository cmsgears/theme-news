<?php
// Yii Imports
use yii\helpers\Html;
?>

<div <?= Html::renderTagAttributes( $widget->wrapperOptions ) ?> >
	<?php if( strlen( $modelsHtml ) > 0 ) { ?>

		<div class="row row-inline blog  max-cols-100">
			<?= $modelsHtml ?>
		</div>

		<?php if( $widget->pagination && $widget->paging ) { ?>
			<div class="clear filler-height filler-height-medium"></div>
			<div class='wrap-pagination clearfix'>
				<div class='info'><?= $widget->pageInfo ?></div> <?= $widget->pageLinks ?>
			</div>
		<?php } ?>

		<?php if( $widget->showAllPath ) { ?>
			<div class="filler-height filler-height-medium"></div>
			<div class="wrap-all">
				<a href="<?= $widget-allPath ?>" class="btn btn-medium">VIEW ALL</a>
			</div>
		<?php } ?>

	<?php } else { ?>
		<p>No posts found.</p>
	<?php } ?>
</div>