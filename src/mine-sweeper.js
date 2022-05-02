const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  for(var i=0;i<this.row;i++){
    for(var j=0;j<this.col;j++){
         // Выпрыгиваем, когда это бомба
        if(dataList[i][j]=="true"){
            continue;
        }
         // Если это не бомба, проверяем количество бомб вокруг
        var num=0;
        var tempx=0;
        var tempy=0;
        for(var m=-1;m<2;m++){
            for(var n=-1;n<2;n++){
                tempx=i+m;
                tempy=j+n;
                 // Добавляем один, когда это бомба
                if(tempx>=0&&tempx<this.row&&tempy>=0&&tempy<this.col&&dataList[tempx][tempy]==-1){
                    num++;
                }
            }
        }
        dataList[i][j]=num;
    }

}
}
module.exports = {
  minesweeper
};
