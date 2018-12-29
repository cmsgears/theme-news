<?php if( isset( $modelsHtml ) && strlen( $modelsHtml ) > 0 ) { ?>
	<div class="widget-content-wrap">
		<div class="widget-header">
			<div class="widget-header-title"><?= $widget->title ?></div>
		</div><hr/>
		<div class="widget-content">
			<div class="widget-content-data">
				<?= $modelsHtml; ?>
			</div>
		</div>
	</div>
<?php } ?>
