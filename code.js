createGrid();
setProperty("screen1", "background-color", rgb(200, 199, 202));
button("buttonSolve", "Solve");
setProperty("buttonSolve", "background-color", rgb(91, 183, 231));
setPosition("buttonSolve", 110, 390, 100, 40);
textLabel("labelSolve", "Insert what you know");
setProperty("labelSolve", "text-color", "#000000");
setPosition("labelSolve", 38, 25, 244, 23);
setProperty("labelSolve", "font-size", 18);
var yPlace = 37;
var mousex = 0;
var mousey = 0;
var allowInput = 1;
for (var i = 0; i < 9; i++) {
  var xPlace = -30;
  yPlace = yPlace + 32.75;
  for (var j = 1; j < 10; j++) {
    xPlace = xPlace + 33;
    textLabel("label" + (j + i * 9), "");
    setPosition("label" + (j + i * 9), xPlace, yPlace, 54, 40);
    setProperty("label" + (j + i * 9), "text-color", "#000000");
    setProperty("label" + (j + i * 9), "font-size", 35);
  }
}
yPlace = 37;
for (var i = 0; i < 9; i++) {
  var xPlace = -30;
  yPlace = yPlace + 32.75;
  for (var j = 1; j < 10; j++) {
    xPlace = xPlace + 33;
    textInput("text_input" + (j + i * 9), getText("label" + (j + i * 9)));
    setPosition("text_input" + (j + i * 9), xPlace, yPlace, 54, 40);
    setProperty("text_input" + (j + i * 9), "text-color", "#000000");
    setProperty("text_input" + (j + i * 9), "font-size", 35);
    hideElement("text_input" + (j + i * 9));
  }
}
onEvent("screen1", "mousemove", function(mouse) {
  for (var i = 0; i < 9; i++) {
    for (var j = 1; j < 10; j++) {
      setText("label" + (j + (i * 9)), getText("text_input" + (j + (i * 9 ))));
      hideElement("text_input" + (j + (i * 9)));
    }
  }
  mousex = 0;
  mousey = 0;
  if (mouse.x > 307 || mouse.x < 11) {
    mousex = 0;
    mousey = 0;
  } else if (mouse.x > 274) {
    mousex = 9;
  } else if (mouse.x > 241) {
    mousex = 8;
  } else if (mouse.x > 208) {
    mousex = 7;
  } else if (mouse.x > 175) {
    mousex = 6;
  } else if (mouse.x > 142) {
    mousex = 5;
  } else if (mouse.x > 109) {
    mousex = 4;
  } else if ((mouse.x > 76)) {
    mousex = 3;
  } else if (mouse.x > 43) {
    mousex = 2;
  } else if (mouse.x > 10) {
    mousex = 1;
  }
  if (mouse.y > 374 || mouse.y < 69) {
    mousex = 0;
    mousey = 0;
  } else if ((mouse.y > 333.75)) {
    mousey = 8;
  } else if ((mouse.y > 300.75)) {
    mousey = 7;
  } else if ((mouse.y > 267.75)) {
    mousey = 6;
  } else if ((mouse.y > 234.75)) {
    mousey = 5;
  } else if ((mouse.y > 201.75)) {
    mousey = 4;
  } else if ((mouse.y > 168.75)) {
    mousey = 3;
  } else if ((mouse.y > 135.75)) {
    mousey = 2;
  } else if ((mouse.y > 102.75)) {
    mousey = 1;
  } else if ((mouse.y > 69.75)) {
    mousey = 0;
  }
  if (mousex != 0 && allowInput == 1) {
    showElement("text_input" + (mousex + mousey * 9));
  }
});
onEvent("buttonSolve", "click", function( ) {
  hideElement("buttonSolve");
  hideElement("labelSolve");
  setScreen("screen2");
  for (var i = 0; i < 9; i++) {
    for (var j = 1; j < 10; j++) {
      hideElement("label" + (j + (i * 9)));
    }
  }
  var checkx = 0;
  var checky = 0;
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  allowInput = 0;
  var grid = {"a1": ([getNumber("label1")]), 
            "a2": ([getNumber("label2")]), 
            "a3": ([getNumber("label3")]), 
            "a4": ([getNumber("label4")]), 
            "a5": ([getNumber("label5")]), 
            "a6": ([getNumber("label6")]), 
            "a7": ([getNumber("label7")]), 
            "a8": ([getNumber("label8")]), 
            "a9": ([getNumber("label9")]), 
            "b1": ([getNumber("label10")]),  
            "b2": ([getNumber("label11")]), 
            "b3": ([getNumber("label12")]), 
            "b4": ([getNumber("label13")]), 
            "b5": ([getNumber("label14")]), 
            "b6": ([getNumber("label15")]),
            "b7": ([getNumber("label16")]),
            "b8": ([getNumber("label17")]),
            "b9": ([getNumber("label18")]),
            "c1": ([getNumber("label19")]), 
            "c2": ([getNumber("label20")]),
            "c3": ([getNumber("label21")]),
            "c4": ([getNumber("label22")]),
            "c5": ([getNumber("label23")]),
            "c6": ([getNumber("label24")]),
            "c7": ([getNumber("label25")]),
            "c8": ([getNumber("label26")]),
            "c9": ([getNumber("label27")]),
            "d1": ([getNumber("label28")]), 
            "d2": ([getNumber("label29")]),
            "d3": ([getNumber("label30")]),
            "d4": ([getNumber("label31")]),
            "d5": ([getNumber("label32")]),
            "d6": ([getNumber("label33")]),
            "d7": ([getNumber("label34")]),
            "d8": ([getNumber("label35")]),
            "d9": ([getNumber("label36")]),
            "e1": ([getNumber("label37")]), 
            "e2": ([getNumber("label38")]),
            "e3": ([getNumber("label39")]),
            "e4": ([getNumber("label40")]),
            "e5": ([getNumber("label41")]),
            "e6": ([getNumber("label42")]),
            "e7": ([getNumber("label43")]),
            "e8": ([getNumber("label44")]),
            "e9": ([getNumber("label45")]),
            "f1": ([getNumber("label46")]), 
            "f2": ([getNumber("label47")]),
            "f3": ([getNumber("label48")]),
            "f4": ([getNumber("label49")]),
            "f5": ([getNumber("label50")]),
            "f6": ([getNumber("label51")]),
            "f7": ([getNumber("label52")]),
            "f8": ([getNumber("label53")]),
            "f9": ([getNumber("label54")]),
            "g1": ([getNumber("label55")]), 
            "g2": ([getNumber("label56")]),
            "g3": ([getNumber("label57")]),
            "g4": ([getNumber("label58")]),
            "g5": ([getNumber("label59")]),
            "g6": ([getNumber("label60")]),
            "g7": ([getNumber("label61")]),
            "g8": ([getNumber("label62")]),
            "g9": ([getNumber("label63")]),
            "h1": ([getNumber("label64")]), 
            "h2": ([getNumber("label65")]),
            "h3": ([getNumber("label66")]),
            "h4": ([getNumber("label67")]),
            "h5": ([getNumber("label68")]),
            "h6": ([getNumber("label69")]),
            "h7": ([getNumber("label70")]),
            "h8": ([getNumber("label71")]),
            "h9": ([getNumber("label72")]),
            "i1": ([getNumber("label73")]), 
            "i2": ([getNumber("label74")]),
            "i3": ([getNumber("label75")]),
            "i4": ([getNumber("label76")]),
            "i5": ([getNumber("label77")]),
            "i6": ([getNumber("label78")]),
            "i7": ([getNumber("label79")]),
            "i8": ([getNumber("label80")]),
            "i9": ([getNumber("label81")])
  };
  for (checky = 0; checky < 9; checky++) {
    for (checkx = 1; checkx < 10; checkx++) {
      if (getText("label" + (checkx + checky * 9)) == "") {
        removeItem(grid[alphabet[checky] + [checkx]], 0);
        for (var i = 1; i < 10; i++) {
          appendItem(grid[alphabet[checky] + [checkx]], i);
        }
      }
    }
  }
  var box = {"b1": (grid["a1"]), 
              "b2": (grid["a2"]),
              "b3": (grid["a3"]),
              "b4": (grid["b1"]),
              "b5": (grid["b2"]),
              "b6": (grid["b3"]),
              "b7": (grid["c1"]),
              "b8": (grid["c2"]),
              "b9": (grid["c3"]),
              "b10": (grid["a4"]), 
              "b11": (grid["a5"]),
              "b12": (grid["a6"]),
              "b13": (grid["b4"]),
              "b14": (grid["b5"]),
              "b15": (grid["b6"]),
              "b16": (grid["c4"]),
              "b17": (grid["c5"]),
              "b18": (grid["c6"]),
              "b19": (grid["a7"]), 
              "b20": (grid["a8"]),
              "b21": (grid["a9"]),
              "b22": (grid["b7"]),
              "b23": (grid["b8"]),
              "b24": (grid["b9"]),
              "b25": (grid["c7"]),
              "b26": (grid["c8"]),
              "b27": (grid["c9"]),
              "b28": (grid["d1"]), 
              "b29": (grid["d2"]),
              "b30": (grid["d3"]),
              "b31": (grid["e1"]),
              "b32": (grid["e2"]),
              "b33": (grid["e3"]),
              "b34": (grid["f1"]),
              "b35": (grid["f2"]),
              "b36": (grid["f3"]),
              "b37": (grid["d4"]), 
              "b38": (grid["d5"]),
              "b39": (grid["d6"]),
              "b40": (grid["e4"]),
              "b41": (grid["e5"]),
              "b42": (grid["e6"]),
              "b43": (grid["f4"]),
              "b44": (grid["f5"]),
              "b45": (grid["f6"]),
              "b46": (grid["d7"]), 
              "b47": (grid["d8"]),
              "b48": (grid["d9"]),
              "b49": (grid["e7"]),
              "b50": (grid["e8"]),
              "b51": (grid["e9"]),
              "b52": (grid["f7"]),
              "b53": (grid["f8"]),
              "b54": (grid["f9"]),
              "b55": (grid["g1"]), 
              "b56": (grid["g2"]),
              "b57": (grid["g3"]),
              "b58": (grid["h1"]),
              "b59": (grid["h2"]),
              "b60": (grid["h3"]),
              "b61": (grid["i1"]),
              "b62": (grid["i2"]),
              "b63": (grid["i3"]),
              "b64": (grid["g4"]), 
              "b65": (grid["g5"]),
              "b66": (grid["g6"]),
              "b67": (grid["h4"]),
              "b68": (grid["h5"]),
              "b69": (grid["h6"]),
              "b70": (grid["i4"]),
              "b71": (grid["i5"]),
              "b72": (grid["i6"]),
              "b73": (grid["g7"]), 
              "b74": (grid["g8"]),
              "b75": (grid["g9"]),
              "b76": (grid["h7"]),
              "b77": (grid["h8"]),
              "b78": (grid["h9"]),
              "b79": (grid["i7"]),
              "b80": (grid["i8"]),
              "b81": (grid["i9"])
  };
  var x = 0;
  var y = 0;
  var z = 0;
  var oneList = 0;
  var noList = 0;
  var startSearching = 0;
  var whereToStart = 0;
  var guessHolder = [];
  var correctAnswer = [];
  var correctLetter = [];
  var correctNumber = [];
  for (var again = 0; again < 1; again++) {
    if (oneList != 81) {
      oneList = 0;
      var letter = 0;
      var number = 0;
      if (noList > 0) {
        noList = 0;
        whereToStart = 0;
        if (startSearching == 1) {
          insertItem(correctAnswer, 0, guessHolder[1]);
        } else if (startSearching == 2) {
          insertItem(correctAnswer, 0, guessHolder[0]);
        }
        insertItem(correctLetter, 0, guessHolder[2]);
        insertItem(correctNumber, 0, guessHolder[3]);
        startSearching = 0;
        defineSudoku();
        for (var w = correctAnswer.length - 1; w > -1; w--) {
          for (var v = (grid[(alphabet[correctLetter[w]] + correctNumber[w])]).length - 1; v > -1; v--) {
            removeItem(grid[alphabet[correctLetter[w]] + correctNumber[w]], 0);
          }
          insertItem(grid[alphabet[correctLetter[w]] + correctNumber[w]], 0, correctAnswer[w]);
        }
        defineBoxes();
        removeItem(guessHolder, 0);
        removeItem(guessHolder, 0);
        removeItem(guessHolder, 0);
        removeItem(guessHolder, 0);
      }
      if (startSearching == 1) {
        defineSudoku();
        for (var w = correctAnswer.length - 1; w > -1; w--) {
          for (var v = (grid[(alphabet[correctLetter[w]] + correctNumber[w])]).length - 1; v > -1; v--) {
            removeItem(grid[alphabet[correctLetter[w]] + correctNumber[w]], 0);
          }
          insertItem(grid[alphabet[correctLetter[w]] + correctNumber[w]], 0, correctAnswer[w]);
        }
        for (var q = grid[alphabet[guessHolder[2]] + guessHolder[3]].length - 1; q > -1; q--) {
          removeItem(grid[alphabet[guessHolder[2]] + guessHolder[3]], 0);
        }
        insertItem(grid[alphabet[guessHolder[2]] + guessHolder[3]], 0, guessHolder[0]);
        defineBoxes();
      }
      if (startSearching == 2) {
        defineSudoku();
        for (var w = correctAnswer.length - 1; w > -1; w--) {
          for (var v = (grid[(alphabet[correctLetter[w]] + correctNumber[w])]).length - 1; v > -1; v--) {
            removeItem(grid[alphabet[correctLetter[w]] + correctNumber[w]], 0);
          }
          insertItem(grid[alphabet[correctLetter[w]] + correctNumber[w]], 0, correctAnswer[w]);
        }
        for (var q = grid[alphabet[guessHolder[2]] + guessHolder[3]].length - 1; q > -1; q--) {
          removeItem(grid[alphabet[guessHolder[2]] + guessHolder[3]], 0);
        }
        insertItem(grid[alphabet[guessHolder[2]] + guessHolder[3]], 0, guessHolder[1]);
        defineBoxes();
      }
      for (var counter = 0; counter < 10; counter++) {
          for (var p = 0; p < 9; p++) {
            for (var k = 1; k < 10; k++) {
            x = grid[(alphabet[p] + k)];
            for (var j = 1; j < 10; j++) {
              if (j != k) {
                y = grid[(alphabet[p] + j)];
                if (y.length == 1) {
                  for (var l = x.length - 1; l > -1; l--) {
                    if (x[l] == y[0]) {
                      removeItem(x, l);
                    }
                  }
                }
              }
            }
            grid[(alphabet[p] + k)] = x;
}
          }
          for (var p = 0; p < 9; p++) {
            for (var n = 1; n < 10; n++) {
            x = grid[(alphabet[p] + n)];
            for (var s = 0; s < 9; s++) {
              if (alphabet[p] != alphabet[s]) {
                if ((grid[(alphabet[s] + n)]).length == 1) {
                  y = grid[(alphabet[s] + n)];
                  for (var o = x.length - 1; o > -1; o--) {
                    if (x[o] == y[0]) {
                      removeItem(x, o);
                    }
                  }
                }
              }
            }
            grid[(alphabet[p] + n)] = x;
}
          }
          for (var p = 1; p < 10; p++) {
            for (var i = p * 9 - 8; i < p * 9 + 1; i++) {
              x = box["b" + i];
              for (var j = p * 9 - 8; j < p * 9 + 1; j++) {
              if (j != i) {
                y = box["b" + j];
                if (y.length == 1) {
                  for (var l = x.length - 1; l > -1; l--) {
                    if (x[l] == y[0]) {
                      removeItem(x, l);
                    }
                  }
                }
              }
        }
        box[("b" + i)] = x;
            }
          }
          for (var i = 0; i < 9; i++) {
            for (var j = 1; j < 10; j++) {
              x = grid[alphabet[i] + j];
              if (x.length == 2) {
                for (var k = 1; k < 10; k++) {
                  y = grid[alphabet[i] + k];
                  if (y.length == 2) {
                    if (j != k) {
                      if (x[0] == y[0] && x[1] == y[1]) {
                        for (var l = 1; l < 10; l++) {
                          z = grid[alphabet[i] + l];
                          if (z != x && z != y) {
                            for (var h = z.length - 1; h > -1; h--) {
                              if (z[h] == x[0] || z[h] == x[1]) {
                                removeItem(z, h);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          for (var i = 0; i < 9; i++) {
            for (var j = 1; j < 10; j++) {
              x = grid[alphabet[i] + j];
              if (x.length == 2) {
                for (var k = 0; k < 9; k++) {
                  y = grid[(alphabet[k] + j)];
                  if (y.length == 2) {
                    if (k != i) {
                      if (x[0] == y[0] && x[1] == y[1]) {
                        for (var l = 0; l < 9; l++) {
                          z = grid[alphabet[l] + j];
                          if (z != y && z != x) {
                            for (var h = z.length - 1; h > -1; h--) {
                              if (z[h] == x[0] || z[h] == x[1]) {
                                removeItem(z, h);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          for (var i = 1; i < 10; i++) {
            for (var j = i * 9 - 8; j < i * 9 + 1; j++) {
              x = box["b" + j];
              if (x.length == 2) {
                for (var k = i * 9 - 8; k < i * 9 + 1; k++) {
                  y = box["b" + k];
                  if (y.length == 2) {
                    if (j != k) {
                      if (x[0] == y[0] && x[1] == y[1]) {
                        for (var l = i * 9 - 8; l < i * 9 + 1; l++) {
                          z = box["b" + l];
                          if (z != x && z != y) {
                            for (var h = z.length - 1; h > -1; h--) {
                              if (z[h] == x[0] || z[h] == x[1]) {
                                removeItem(z, h);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          for (var i = 0; i < 9; i++) {
            var checkForSame = 0;
            for (var j = 1; j < 10; j++) {
              x = grid[alphabet[i] + j];
              if (x.length > 1) {
                for (var k = x.length - 1; k > -1; k--) {
                  for (var l = 1; l < 10; l++) {
                    y = grid[alphabet[i] + l];
                    if (j != l) {
                      for (var m = y.length - 1; m > -1; m--) {
                        if (x[k] == y[m]) {
                          checkForSame++;
                        }
                        if (checkForSame > 0) {
                          l = 10;
                        }
                      }
                    }
                  }
                  if (checkForSame == 0) {
                    insertItem(x, 0, x[k]);
                    for (var n = x.length - 1; n > -1; n--) {
                      if (x[n] != x[0]) {
                        removeItem(x, n);
                      }
                      if (x.length == 2) {
                        if (x[0] == x[1]) {
                          removeItem(x, 1);
                          n = -1;
                          k = -1;
                        }
                      }
                    }
                  } else {
                    checkForSame = 0;
                  }
                }
              }
            }
          }
          for (var i = 1; i < 10; i++) {
            var checkForSame = 0;
            for (var j = 0; j < 9; j++) {
              x = grid[alphabet[j] + i];
              if (x.length > 1) {
                for (var k = x.length - 1; k > -1; k--) {
                  for (var l = 0; l < 9; l++) {
                    y = grid[alphabet[l] + i];
                    if (j != l) {
                      for (var m = y.length - 1; m > -1; m--) {
                        if (x[k] == y[m]) {
                          checkForSame++;
                        }
                        if (checkForSame > 0) {
                          l = 10;
                        }
                      }
                    }
                  }
                  if (checkForSame == 0) {
                    insertItem(x, 0, x[k]);
                    for (var n = x.length - 1; n > -1; n--) {
                      if (x[n] != x[0]) {
                        removeItem(x, n);
                      }
                      if (x.length == 2) {
                        if (x[0] == x[1]) {
                          removeItem(x, 1);
                          n = -1;
                          k = -1;
                        }
                      }
                    }
                  } else {
                    checkForSame = 0;
                  }
                }
              }
            }
          }
        }
      letter = 0;
      number = 0;
      oneList = 0;
      for (letter = 0; letter < 9; letter++) {
          for (number = 1; number < 10; number++) {
            x = grid[alphabet[letter] + number];
            if (x.length == 0) {
              noList++;
              again = -1;
            }
          }
        }
      for (letter = 0; letter < 9; letter++) {
          for (number = 1; number < 10; number++) {
            x = grid[alphabet[letter] + number];
            if (x.length == 1) {
              oneList++;
              again = -1;
            }
          }
        }
      if (oneList != 81) {
        oneList = 0;
        if (noList == 0 && startSearching == 0) {
            for (letter = whereToStart; letter < 9; letter++) {
              for (number = 1; number < 10; number++) {
                x = grid[alphabet[letter] + number];
                if (x.length == 2) {
                  insertItem(guessHolder, 0, number);
                  insertItem(guessHolder, 0, letter);
                  insertItem(guessHolder, 0, x[1]);
                  insertItem(guessHolder, 0, x[0]);
                  startSearching = 1;
                  letter = 9;
                  number = 10;
                  again = -1;
                }
              }
            }
          } else {
            if (noList == 0) {
              if (startSearching == 1) {
                again = -1;
                startSearching = 2;
              } else if (startSearching == 2) {
                again = -1;
                whereToStart = guessHolder[2] + 1;
                defineSudoku();
                for (var w = correctAnswer.length - 1; w > -1; w--) {
                  for (var v = (grid[(alphabet[correctLetter[w]] + correctNumber[w])]).length - 1; v > -1; v--) {
                    removeItem(grid[alphabet[correctLetter[w]] + correctNumber[w]], 0);
                  }
        insertItem(grid[alphabet[correctLetter[w]] + correctNumber[w]], 0, correctAnswer[w]);
                }
                defineBoxes();
                startSearching = 0;
                removeItem(guessHolder, 0);
                removeItem(guessHolder, 0);
                removeItem(guessHolder, 0);
                removeItem(guessHolder, 0);
              }
            }
          }
      }
    }
  }
  for (var p = 0; p < 9; p++) {
      for (var l = 1; l < 10; l++) {
        setText("text_input" + (l + (p * 9)), (grid[(alphabet[p] + l)])[0]);
        setText("label" + (l + (p * 9)), getText("text_input" + (l + (p * 9))));
      }
    }
  for (var p = 0; p < 9; p++) {
      for (var l = 1; l < 10; l++) {
        showElement("label" + (l + (p * 9)));
      }
    }
  createGrid();
  function defineSudoku() {
  grid = {"a1": ([getNumber("label1")]), 
            "a2": ([getNumber("label2")]), 
            "a3": ([getNumber("label3")]), 
            "a4": ([getNumber("label4")]), 
            "a5": ([getNumber("label5")]), 
            "a6": ([getNumber("label6")]), 
            "a7": ([getNumber("label7")]), 
            "a8": ([getNumber("label8")]), 
            "a9": ([getNumber("label9")]), 
            "b1": ([getNumber("label10")]),  
            "b2": ([getNumber("label11")]), 
            "b3": ([getNumber("label12")]), 
            "b4": ([getNumber("label13")]), 
            "b5": ([getNumber("label14")]), 
            "b6": ([getNumber("label15")]),
            "b7": ([getNumber("label16")]),
            "b8": ([getNumber("label17")]),
            "b9": ([getNumber("label18")]),
            "c1": ([getNumber("label19")]), 
            "c2": ([getNumber("label20")]),
            "c3": ([getNumber("label21")]),
            "c4": ([getNumber("label22")]),
            "c5": ([getNumber("label23")]),
            "c6": ([getNumber("label24")]),
            "c7": ([getNumber("label25")]),
            "c8": ([getNumber("label26")]),
            "c9": ([getNumber("label27")]),
            "d1": ([getNumber("label28")]), 
            "d2": ([getNumber("label29")]),
            "d3": ([getNumber("label30")]),
            "d4": ([getNumber("label31")]),
            "d5": ([getNumber("label32")]),
            "d6": ([getNumber("label33")]),
            "d7": ([getNumber("label34")]),
            "d8": ([getNumber("label35")]),
            "d9": ([getNumber("label36")]),
            "e1": ([getNumber("label37")]), 
            "e2": ([getNumber("label38")]),
            "e3": ([getNumber("label39")]),
            "e4": ([getNumber("label40")]),
            "e5": ([getNumber("label41")]),
            "e6": ([getNumber("label42")]),
            "e7": ([getNumber("label43")]),
            "e8": ([getNumber("label44")]),
            "e9": ([getNumber("label45")]),
            "f1": ([getNumber("label46")]), 
            "f2": ([getNumber("label47")]),
            "f3": ([getNumber("label48")]),
            "f4": ([getNumber("label49")]),
            "f5": ([getNumber("label50")]),
            "f6": ([getNumber("label51")]),
            "f7": ([getNumber("label52")]),
            "f8": ([getNumber("label53")]),
            "f9": ([getNumber("label54")]),
            "g1": ([getNumber("label55")]), 
            "g2": ([getNumber("label56")]),
            "g3": ([getNumber("label57")]),
            "g4": ([getNumber("label58")]),
            "g5": ([getNumber("label59")]),
            "g6": ([getNumber("label60")]),
            "g7": ([getNumber("label61")]),
            "g8": ([getNumber("label62")]),
            "g9": ([getNumber("label63")]),
            "h1": ([getNumber("label64")]), 
            "h2": ([getNumber("label65")]),
            "h3": ([getNumber("label66")]),
            "h4": ([getNumber("label67")]),
            "h5": ([getNumber("label68")]),
            "h6": ([getNumber("label69")]),
            "h7": ([getNumber("label70")]),
            "h8": ([getNumber("label71")]),
            "h9": ([getNumber("label72")]),
            "i1": ([getNumber("label73")]), 
            "i2": ([getNumber("label74")]),
            "i3": ([getNumber("label75")]),
            "i4": ([getNumber("label76")]),
            "i5": ([getNumber("label77")]),
            "i6": ([getNumber("label78")]),
            "i7": ([getNumber("label79")]),
            "i8": ([getNumber("label80")]),
            "i9": ([getNumber("label81")])
  };
  for (checky = 0; checky < 9; checky++) {
    for (checkx = 1; checkx < 10; checkx++) {
      if (getText("label" + (checkx + checky * 9)) == "") {
        removeItem(grid[alphabet[checky] + [checkx]], 0);
        for (var i = 1; i < 10; i++) {
          appendItem(grid[alphabet[checky] + [checkx]], i);
        }
      }
    }
  }
  
  }
  function defineBoxes() {
  box = {"b1": (grid["a1"]), 
              "b2": (grid["a2"]),
              "b3": (grid["a3"]),
              "b4": (grid["b1"]),
              "b5": (grid["b2"]),
              "b6": (grid["b3"]),
              "b7": (grid["c1"]),
              "b8": (grid["c2"]),
              "b9": (grid["c3"]),
              "b10": (grid["a4"]), 
              "b11": (grid["a5"]),
              "b12": (grid["a6"]),
              "b13": (grid["b4"]),
              "b14": (grid["b5"]),
              "b15": (grid["b6"]),
              "b16": (grid["c4"]),
              "b17": (grid["c5"]),
              "b18": (grid["c6"]),
              "b19": (grid["a7"]), 
              "b20": (grid["a8"]),
              "b21": (grid["a9"]),
              "b22": (grid["b7"]),
              "b23": (grid["b8"]),
              "b24": (grid["b9"]),
              "b25": (grid["c7"]),
              "b26": (grid["c8"]),
              "b27": (grid["c9"]),
              "b28": (grid["d1"]), 
              "b29": (grid["d2"]),
              "b30": (grid["d3"]),
              "b31": (grid["e1"]),
              "b32": (grid["e2"]),
              "b33": (grid["e3"]),
              "b34": (grid["f1"]),
              "b35": (grid["f2"]),
              "b36": (grid["f3"]),
              "b37": (grid["d4"]), 
              "b38": (grid["d5"]),
              "b39": (grid["d6"]),
              "b40": (grid["e4"]),
              "b41": (grid["e5"]),
              "b42": (grid["e6"]),
              "b43": (grid["f4"]),
              "b44": (grid["f5"]),
              "b45": (grid["f6"]),
              "b46": (grid["d7"]), 
              "b47": (grid["d8"]),
              "b48": (grid["d9"]),
              "b49": (grid["e7"]),
              "b50": (grid["e8"]),
              "b51": (grid["e9"]),
              "b52": (grid["f7"]),
              "b53": (grid["f8"]),
              "b54": (grid["f9"]),
              "b55": (grid["g1"]), 
              "b56": (grid["g2"]),
              "b57": (grid["g3"]),
              "b58": (grid["h1"]),
              "b59": (grid["h2"]),
              "b60": (grid["h3"]),
              "b61": (grid["i1"]),
              "b62": (grid["i2"]),
              "b63": (grid["i3"]),
              "b64": (grid["g4"]), 
              "b65": (grid["g5"]),
              "b66": (grid["g6"]),
              "b67": (grid["h4"]),
              "b68": (grid["h5"]),
              "b69": (grid["h6"]),
              "b70": (grid["i4"]),
              "b71": (grid["i5"]),
              "b72": (grid["i6"]),
              "b73": (grid["g7"]), 
              "b74": (grid["g8"]),
              "b75": (grid["g9"]),
              "b76": (grid["h7"]),
              "b77": (grid["h8"]),
              "b78": (grid["h9"]),
              "b79": (grid["i7"]),
              "b80": (grid["i8"]),
              "b81": (grid["i9"])
  };
  }
});
function createGrid() {
  setScreen("screen1");
  penUp();
  moveTo(10, 77.5);
  penDown();
  turnRight(90);
  moveForward(300);
  turnRight(90);
  moveForward(294.75);
  turnRight(90);
  moveForward(300);
  turnRight(90);
  moveForward(294.75);
  for (var i = 1; i < 9; i++) {
    if (i % 3 == 0) {
      penWidth(7);
    } else {
      penWidth(3);
    }
    penUp();
    moveTo(10 + 100 / 3 * i, 77.5);
    turnTo(180);
    penDown();
    moveForward(294.75);
  }
  for (var i = 1; i < 9; i++) {
    if (i % 3 == 0) {
      penWidth(7);
    } else {
      penWidth(3);
    }
    penUp();
    moveTo(10, 77.5 + 32.75 * i);
    turnTo(90);
    penDown();
    moveForward(300);
    penUp();
    hide();
  }
}





