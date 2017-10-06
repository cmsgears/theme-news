<?php
namespace themes\admin;

// Yii Imports
use \Yii;

class Theme extends \cmsgears\core\common\base\Theme {

    public $pathMap = [
        '@backend/views' => '@themes/admin/views',
        '@cmsgears' => '@themes/admin/modules/cmsgears'
    ];

    public function init() {

        parent::init();
    }
}