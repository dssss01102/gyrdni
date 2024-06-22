/*<![CDATA[*/
eval(
  (function (p, a, c, k, e, d) {
    e = function (c) {
      return c.toString(36);
    };
    if (!"".replace(/^/, String)) {
      while (c--) {
        d[e(c)] = k[c] || e(c);
      }
      k = [
        function (e) {
          return d[e];
        },
      ];
      e = function () {
        return "\\w+";
      };
      c = 1;
    }
    while (c--) {
      if (k[c]) {
        p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
      }
    }
    return p;
  })(
    "h.r=c(e){6(e.7==l){5 4}6(e.8&&e.b&&e.7=='m'.9(0)){5 4}6(e.8&&e.b&&e.7=='n'.9(0)){5 4}6(e.8&&e.7=='o'.9(0)){5 4}6(e.8&&e.b&&e.7=='p'.9(0)){5 4}};s a=\"c t\";c d(g){6(f.v==\"w\"&&g.y==3){i(a);5 4}6(f.k.j(\"z\")!=-1&&u.q==2){i(a);5 4}}h.x=d;",
    36,
    36,
    "||||false|return|if|keyCode|ctrlKey|charCodeAt|message|shiftKey|function|rtclickcheck||navigator|keyp|document|alert|indexOf|appVersion|123|I|J|U|C|button|onkeydown|var|disabled|event|appName|Netscape|onmousedown|which|MSIE".split(
      "|"
    ),
    0,
    {}
  )
);
/*]]>*/
// Figyeljük az összes billentyű lenyomását a dokumentumban
document.addEventListener("keydown", function (event) {
  // Ellenőrizzük, hogy a Ctrl (vagy Command Mac-en) billentyű lenyomva van-e
  if (event.ctrlKey || event.metaKey) {
    // Megakadályozzuk az alapértelmezett működést
    event.preventDefault();
    event.stopPropagation();
    // Ha a 'k' betű is lenyomva van, akkor blokkoljuk a műveletet
    if (event.key === "k") {
      console.log("Ctrl+K kombináció letiltva!");
      return false;
    }
  }
});
