const CLICK_BUTTON = 'CLICK_BUTTON';

const updateBoard = function(i, j){
  return {
    type: CLICK_BUTTON,
    payload: {i, j}
  }
}

module.exports.CLICK_BUTTON = CLICK_BUTTON;
module.exports.updateBoard = updateBoard;
