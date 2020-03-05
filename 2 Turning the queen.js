

//Checkpoint 2 | Turning the queen



function queensAttack(n, k, r_q, c_q, obstacles) {

    let c = n * 2 - 2 // n e s w
    c += Math.min(n - r_q, n - c_q) // ne
    c += Math.min(r_q - 1, n - c_q) // se
    c += Math.min(r_q - 1, c_q - 1) // sw
    c += Math.min(c_q - 1, n - r_q) // nw
  
    let m = {'n':0, 'ne':0, 'e':0, 'se':0, 's':0, 'sw':0, 'w':0, 'nw':0}
    
    for (let i = k; i-- > 0;) {
  
      let y = obstacles[i][0] - r_q,
          x = obstacles[i][1] - c_q,
          cy = 0,
          cx = 0,
          cxy
          k
  
      if (y > 0) { // n
        cy = n - r_q - y + 1
      } else if (y < 0) { // s
        cy = r_q + y
      }
  
      if (x > 0) { // e
        cx = n - c_q - x + 1
      } else if (x < 0) { // w
        cx = c_q + x
      }
  
      if (x == y) { // ne sw
        k = x > 0 ? 'ne' : 'sw'
        cxy = Math.min(cx, cy)
      } else if (x + y == 0) { // se nw
        k = x > 0 ? 'se' : 'nw'
        cxy = Math.min(cx, cy)
      } else if (x == 0) { // n s
        k = y > 0 ? 'n' : 's'
        cxy = cy
      } else if (y == 0) { // e w
        k = x > 0 ? 'e' : 'w'
        cxy = cx
      }
  
      if (m[k] < cxy) { // res
        c -= cxy - m[k]
        m[k] = cxy
      }
    }
  
    return c
  }