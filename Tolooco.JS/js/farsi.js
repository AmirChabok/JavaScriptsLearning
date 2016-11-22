var InputLanguage = 1 ; // 0: Lating, 1: Farsi.
var UserCanChangeInputLanguage = 0 ; // 0: No, 1: Yes.

var arFarsi = [
  0x0020, 0x0021, 0x061B, 0x066B, 0x00A4, 0x066A, 0x060C, 0x06AF,
  0x0029, 0x0028, 0x002A, 0x002B, 0x0648, 0x002D, 0x002E, 0x002F,
  0x06F0, 0x06F1, 0x06F2, 0x06F3, 0x06F4, 0x06F5, 0x06F6, 0x06F7,
  0x06F8, 0x06F9, 0x003A, 0x06A9, 0x003E, 0x003D, 0x003C, 0x061F,
  0x066C, 0x0624, 0x200C, 0x0698, 0x064A, 0x064D, 0x0625, 0x0623,
  0x0622, 0x0651, 0x0629, 0x00BB, 0x00AB, 0x0621, 0x004E, 0x005D,
  0x005B, 0x0652, 0x064B, 0x0626, 0x064F, 0x064E, 0x0056, 0x064C,
  0x0058, 0x0650, 0x0643, 0x062C, 0x0698, 0x0686, 0x00D7, 0x0640,
  0x067E, 0x0634, 0x0630, 0x0632, 0x06CC, 0x062B, 0x0628, 0x0644,
  0x0627, 0x0647, 0x062A, 0x0646, 0x0645, 0x0626, 0x062F, 0x062E,
  0x062D, 0x0636, 0x0642, 0x0633, 0x0641, 0x0639, 0x0631, 0x0635,
  0x0637, 0x063A, 0x0638, 0x007D, 0x007C, 0x007B, 0x007E ] ;

function FKeyDown () {
  if ( UserCanChangeInputLanguage == 1 ) {
    if ( window.event.shiftKey && window.event.ctrlKey ) {
      InputLanguage = ( InputLanguage == 0 ) ? 1 : 0 ;
      return ( false ) ;
    }
    else {
      if ( window.event.shiftKey && window.event.altKey ) {
        InputLanguage = ( InputLanguage == 0 ) ? 1 : 0 ;
        return ( false ) ;
      }
      else {
        return ( true ) ;
      }
    }
  }
}

function FKeyPress () {
  var key ;

  if ( event.srcElement.name ) {
    if ( InputLanguage == 1 ) {
      key = window.event.keyCode ;

//      alert ( key ) ;

      if ( key < 0x0020 || key >= 0x00FF )
        return ( true ) ;

      var dtElement    = event.srcElement ;
      var objRegExp    = new RegExp ( "[A-Za-z\x27\x2C\x3B\x5B\x5C\x5D\x7C]" ) ;
      var validate_key = objRegExp.test ( String.fromCharCode ( key ) ) ;

      if ( ( validate_key || ( key == 92 ) ) && ( key != 0x200C ) && ( dtElement.value.lastIndexOf ( String.fromCharCode ( 1740 ) ) == dtElement.value.length - 1 ) && dtElement.value.length > 0 ) {
        dtElement.value  = dtElement.value.slice ( 0 , -1 ) ;
        dtElement.value += String.fromCharCode ( 1610 ) ;
      }

      if ( key == 0x0020 && window.event.shiftKey )
        window.event.keyCode = 0x200C ;
      else
        window.event.keyCode = arFarsi [ key - 0x0020 ] ;

      return ( true ) ;
    }
    else {
      key = window.event.keyCode ;

//      alert ( key ) ;

      switch ( key ) {
        case 1570 : { key = 72  ; break ; }
        case 1574 : { key = 109 ; break ; }
        case 1575 : { key = 104 ; break ; }
        case 1576 : { key = 102 ; break ; }
        case 1662 : { key = 126 ; break ; }
        case 1578 : { key = 106 ; break ; }
        case 1579 : { key = 101 ; break ; }
        case 1580 : { key = 123 ; break ; }
        case 1670 : { key = 125 ; break ; }
        case 1581 : { key = 112 ; break ; }
        case 1582 : { key = 111 ; break ; }
        case 1583 : { key = 110 ; break ; }
        case 1584 : { key = 98  ; break ; }
        case 1585 : { key = 118 ; break ; }
        case 1586 : { key = 99  ; break ; }
        case 1688 : { key = 124 ; break ; }
        case 1587 : { key = 115 ; break ; }
        case 1588 : { key = 97  ; break ; }
        case 1589 : { key = 119 ; break ; }
        case 1590 : { key = 113 ; break ; }
        case 1591 : { key = 120 ; break ; }
        case 1592 : { key = 122 ; break ; }
        case 1593 : { key = 117 ; break ; }
        case 1594 : { key = 121 ; break ; }
        case 1601 : { key = 116 ; break ; }
        case 1602 : { key = 114 ; break ; }
        case 1705 : { key = 58  ; break ; }
        case 1711 : { key = 34  ; break ; }
        case 1604 : { key = 103 ; break ; }
        case 1605 : { key = 108 ; break ; }
        case 1606 : { key = 107 ; break ; }
        case 1608 : { key = 60  ; break ; }
        case 1607 : { key = 105 ; break ; }
        case 1740 : { key = 100 ; break ; }
      }

      window.event.keyCode = key ;

      return ( true ) ;
    }
  }
}
