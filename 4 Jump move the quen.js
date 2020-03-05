


//Checkpoint 4 | Jump move the queen



move: function jumpMoveForward(target) {

    let selectedpiece = $('#' + main.variables.selectedpiece).attr('chess');

    // new cell
    $('#' + target.id).html(main.variables.pieces[selectedpiece].img);
    $('#' + target.id).attr('chess',selectedpiece);
    // old cell
    $('#' + main.variables.selectedpiece).html('');
    $('#' + main.variables.selectedpiece).attr('chess','null');
    main.variables.pieces[selectedpiece].position = target.id;
    main.variables.pieces[selectedpiece].moved = true;

    /*
    // toggle highlighted coordinates
    main.methods.togglehighlight(main.variables.highlighted);
    main.variables.highlighted.length = 0;
    // set the selected piece to '' again
    main.variables.selectedpiece = '';
    */
  }









function options(startpoint, coordinates, piecetype) { // first check if any of the possible coordinates is out of bounds;
      
    coordinates = coordinates.filter(val => {
      let pos = { x: 0, y: 0 };
      pos.x = parseInt(val.split('_')[0]);
      pos.y = parseInt(val.split('_')[1]);

      if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) { // if it is not out of bounds, return the coordinate;
        return val;
      }
    });

    switch (piecetype) {

      case 'w_king':

        coordinates = coordinates.filter(val => {
          return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0,1) == 'b');
        });

        break;
      case 'b_king':
      
        coordinates = coordinates.filter(val => {
          return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0,1) == 'w');
        });

        break;
      case 'w_knight':

        coordinates = coordinates.filter(val => {
          return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0,1) == 'b');
        });

        break;

      case 'b_knight':

        coordinates = coordinates.filter(val => {
          return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0,1) == 'w');
        });

        break;

      case 'w_pawn':

          coordinates = coordinates.filter(val => {
            let sp = { x: 0, y: 0 };
            let coordinate = val.split('_');

            sp.x = startpoint.split('_')[0];
            sp.y = startpoint.split('_')[1];
            
            if (coordinate[0] < sp.x || coordinate[0] > sp.x){ // if the coordinate is on either side of the center, check if it has an opponent piece on it;
              return ($('#' + val).attr('chess') != 'null' && ($('#' + val).attr('chess')).slice(0,1) == 'b'); // return coordinates with opponent pieces on them
            } else { // else if the coordinate is in the center;
              if (coordinate[1] == (parseInt(sp.y) + 2) && $('#' + sp.x + '_' + (parseInt(sp.y) + 1)).attr('chess') != 'null'){
                // do nothing if this is the pawns first move, and there is a piece in front of the 2nd coordinate;
              } else {
                return ($('#' + val).attr('chess') == 'null'); // otherwise return the coordinate if there is no chess piece on it;
              }
            }
                        
          });
       
        break;

      case 'b_pawn':

        coordinates = coordinates.filter(val => {
          let sp = { x: 0, y: 0 };
          let coordinate = val.split('_');

          sp.x = startpoint.split('_')[0];
          sp.y = startpoint.split('_')[1];
          
          if (coordinate[0] < sp.x || coordinate[0] > sp.x){ // if the coordinate is on either side of the center, check if it has an opponent piece on it;
            return ($('#' + val).attr('chess') != 'null' && ($('#' + val).attr('chess')).slice(0,1) == 'w'); // return coordinates with opponent pieces on them
          } else { // else if the coordinate is in the center;
            if (coordinate[1] == (parseInt(sp.y) - 2) && $('#' + sp.x + '_' + (parseInt(sp.y) - 1)).attr('chess') != 'null'){
              // do nothing if this is the pawns first move, and there is a piece in front of the 2nd coordinate;
            } else {
              return ($('#' + val).attr('chess') == 'null'); // otherwise return the coordinate if there is no chess piece on it;
            }
          }
        });

        break;
    }      

    return coordinates;
  }
