$gameVariables.setValue(6, $gameParty.members()[0].fig);
if ($gameParty.members()[0].fig >= 100) {
    $gameVariables.setValue(6, 0);
    $gameParty.members()[0].setLifeparams(2, 0);
    this.setupChild($dataCommonEvents[6].list, 0);
    this.setupChild($dataCommonEvents[7].list, 0);
}