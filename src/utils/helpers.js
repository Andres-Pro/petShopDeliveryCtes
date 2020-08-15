export function isPrivateMode() {
    return new Promise(function detect(resolve) {
      var yes = function() { resolve(true); };
      var not = function() { resolve(false); };

      function detectChromeOpera() {
        var isChromeOpera = /(?=.*(opera|chrome)).*/i.test(navigator.userAgent) && navigator.storage && navigator.storage.estimate;
        if (isChromeOpera) {
          navigator.storage.estimate().then(function(data) {
            return data.quota < 120000000 ? yes() : not();
          });
        }
        return !!isChromeOpera;
      }

      function detectFirefox() {
        var isMozillaFirefox = 'MozAppearance' in document.documentElement.style;
        if (isMozillaFirefox) {
          if (indexedDB == null) yes();
          else {
            var db = indexedDB.open('inPrivate');
            db.onsuccess = not;
            db.onerror = yes;
          }
        }
        return isMozillaFirefox;
      }

      function detectSafari() {
        // eslint-disable-next-line no-useless-escape
        var isSafari = navigator.userAgent.match(/Version\/([0-9\._]+).*Safari/);
        if (isSafari) {
          var testLocalStorage = function() {
            try {
              if (localStorage.length) not();
              else {
                localStorage.setItem('inPrivate', '0');
                localStorage.removeItem('inPrivate');
                not();
              }
            } catch (_) {
              navigator.cookieEnabled ? yes() : not();
            }
            return true;
          };

          var version = parseInt(isSafari[1], 10);
          if (version < 11) return testLocalStorage();
          try {
            window.openDatabase(null, null, null, null);
            not();
          } catch (_) {
            yes();
          }
        }
        return !!isSafari;
      }

      function detectEdgeIE10() {
        var isEdgeIE10 = !window.indexedDB && (window.PointerEvent || window.MSPointerEvent);
        if (isEdgeIE10) yes();
        return !!isEdgeIE10;
      }
      if (detectChromeOpera()) return;
      if (detectFirefox()) return;
      if (detectSafari()) return;
      if (detectEdgeIE10()) return;
      return not();
    });
  }
