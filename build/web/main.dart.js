// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const basic = flutter_sdk.src__widgets__basic;
  const framework = flutter_sdk.src__widgets__framework;
  const flex = flutter_sdk.src__rendering__flex;
  const text_style = flutter_sdk.src__painting__text_style;
  const colors = flutter_sdk.src__material__colors;
  const elevated_button = flutter_sdk.src__material__elevated_button;
  const binding = flutter_sdk.src__widgets__binding;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var $toString = dartx.toString;
  var $_get = dartx._get;
  var $contains = dartx.contains;
  var $codeUnitAt = dartx.codeUnitAt;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    _IdentityHashSetOfString: () => (T._IdentityHashSetOfString = dart.constFn(collection._IdentityHashSet$(core.String)))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    ListOfWidget: () => (T.ListOfWidget = dart.constFn(core.List$(framework.Widget)))(),
    intToElevatedButton: () => (T.intToElevatedButton = dart.constFn(dart.fnType(elevated_button.ElevatedButton, [core.int])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    }
  }, false);
  var C = [void 0];
  var I = ["file:///zapp/project/lib/main.dart"];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  main.MyApp = class MyApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({home: new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({centerTitle: true, title: new text.Text.new("Jogo da Forca")}), body: new basic.Center.new({child: new main.HangmanGame.new()})})});
    }
    static ['_#new#tearOff']() {
      return new main.MyApp.new();
    }
  };
  (main.MyApp.new = function() {
    main.MyApp.__proto__.new.call(this);
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  main.HangmanGame = class HangmanGame extends framework.StatefulWidget {
    createState() {
      return new main._HangmanGameState.new();
    }
    static ['_#new#tearOff']() {
      return new main.HangmanGame.new();
    }
  };
  (main.HangmanGame.new = function() {
    main.HangmanGame.__proto__.new.call(this);
    ;
  }).prototype = main.HangmanGame.prototype;
  dart.addTypeTests(main.HangmanGame);
  dart.addTypeCaches(main.HangmanGame);
  dart.setMethodSignature(main.HangmanGame, () => ({
    __proto__: dart.getMethods(main.HangmanGame.__proto__),
    createState: dart.fnType(main._HangmanGameState, [])
  }));
  dart.setLibraryUri(main.HangmanGame, I[0]);
  main._HangmanGameState = class _HangmanGameState extends framework.State$(main.HangmanGame) {
    isGameWon() {
      for (let i = 0; i < this.wordToGuess.length; i = i + 1) {
        if (!this.guessedLetters.contains(this.wordToGuess[$_get](i))) {
          return false;
        }
      }
      return true;
    }
    isGameLost() {
      return this.attemptsLeft === 0;
    }
    guessLetter(letter) {
      this.setState(dart.fn(() => {
        if (!this.guessedLetters.contains(letter)) {
          this.guessedLetters.add(letter);
          if (!this.wordToGuess[$contains](letter)) {
            this.attemptsLeft = this.attemptsLeft - 1;
          }
        }
      }, T.VoidTovoid()));
    }
    build(context) {
      return new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: (() => {
          let t0 = T.JSArrayOfWidget().of([new text.Text.new("Anna Carolina Lima de Souza", {style: new text_style.TextStyle.new({fontSize: 18, fontWeight: ui.FontWeight.bold})}), new text.Text.new("RA: 1431432312015", {style: new text_style.TextStyle.new({fontSize: 18, fontWeight: ui.FontWeight.bold})}), new text.Text.new("Palavra: " + this.getMaskedWord(), {style: new text_style.TextStyle.new({fontSize: 24})}), new basic.SizedBox.new({height: 20}), new text.Text.new("Tentativas restantes: " + dart.str(this.attemptsLeft), {style: new text_style.TextStyle.new({fontSize: 20})}), new basic.SizedBox.new({height: 20}), this.buildAlphabetButtons(), new basic.SizedBox.new({height: 20})]);
          if (this.isGameWon()) t0.push(new text.Text.new("Parabéns! Você ganhou!", {style: new text_style.TextStyle.new({fontSize: 24, color: colors.Colors.green})}));
          if (this.isGameLost()) t0.push(new text.Text.new("Você perdeu! A palavra era " + this.wordToGuess + ".", {style: new text_style.TextStyle.new({fontSize: 24, color: colors.Colors.red})}));
          return t0;
        })()});
    }
    getMaskedWord() {
      let maskedWord = "";
      for (let i = 0; i < this.wordToGuess.length; i = i + 1) {
        if (this.guessedLetters.contains(this.wordToGuess[$_get](i))) {
          maskedWord = maskedWord + this.wordToGuess[$_get](i);
        } else {
          maskedWord = maskedWord + "_";
        }
      }
      return maskedWord;
    }
    buildAlphabetButtons() {
      return new basic.Wrap.new({spacing: 10, runSpacing: 10, children: T.ListOfWidget().generate(26, dart.fn(index => {
          let letter = core.String.fromCharCode("A"[$codeUnitAt](0) + index);
          return new elevated_button.ElevatedButton.new({onPressed: this.isGameWon() || this.isGameLost() ? null : dart.fn(() => this.guessLetter(letter), T.VoidTovoid()), child: new text.Text.new(letter)});
        }, T.intToElevatedButton()))});
    }
    static ['_#new#tearOff']() {
      return new main._HangmanGameState.new();
    }
  };
  (main._HangmanGameState.new = function() {
    this.wordToGuess = "FLUTTER";
    this.guessedLetters = new (T._IdentityHashSetOfString()).new();
    this.maxAttempts = 6;
    this.attemptsLeft = 6;
    main._HangmanGameState.__proto__.new.call(this);
    ;
  }).prototype = main._HangmanGameState.prototype;
  dart.addTypeTests(main._HangmanGameState);
  dart.addTypeCaches(main._HangmanGameState);
  dart.setMethodSignature(main._HangmanGameState, () => ({
    __proto__: dart.getMethods(main._HangmanGameState.__proto__),
    isGameWon: dart.fnType(core.bool, []),
    isGameLost: dart.fnType(core.bool, []),
    guessLetter: dart.fnType(dart.void, [core.String]),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    getMaskedWord: dart.fnType(core.String, []),
    buildAlphabetButtons: dart.fnType(framework.Widget, [])
  }));
  dart.setLibraryUri(main._HangmanGameState, I[0]);
  dart.setFieldSignature(main._HangmanGameState, () => ({
    __proto__: dart.getFields(main._HangmanGameState.__proto__),
    wordToGuess: dart.fieldType(core.String),
    guessedLetters: dart.fieldType(core.Set$(core.String)),
    maxAttempts: dart.fieldType(core.int),
    attemptsLeft: dart.fieldType(core.int)
  }));
  main.main = function main$0() {
    binding.runApp(new main.MyApp.new());
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;UC/C4B;AACxB,YAAO,gCACC,mCACI,qCACO,aACN,kBAAK,0BAER,6BACG;IAIf;;;;;;;;EACF;;;;;;;;;;AAIqC;IAAmB;;;;;;;;EACxD;;;;;;;;;;AASI,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAY,yBAAQ,IAAA,AAAC,CAAA;AACvC,aAAK,AAAe,6BAAS,AAAW,wBAAC,CAAC;AACxC,gBAAO;;;AAGX,YAAO;IACT;;AAGE,YAAO,AAAa,uBAAG;IACzB;gBAEwB;AAQpB,MAPF,cAAS;AACP,aAAK,AAAe,6BAAS,MAAM;AACP,UAA1B,AAAe,wBAAI,MAAM;AACzB,eAAK,AAAY,4BAAS,MAAM;AAChB,YAAd,oBAAA,AAAY,oBAAA;;;;IAIpB;UAG0B;AACxB,YAAO,0CACgC,yCAC3B;2CAAC,kBAAK,uCAEA,wCAAoB,gBAA6B,wBACzD,kBAAK,6BAEG,wCAAoB,gBAA6B,wBAE/D,kBACE,AAA6B,cAAjB,8BACL,wCAAoB,QAE7B,gCAAiB,MACjB,kBACE,AAAqC,oCAAb,4BACjB,wCAAoB,QAE7B,gCAAiB,MACjB,6BACA,gCAAiB;AACjB,cAAI,kBACF,0BACE,kCACO,wCAAoB,WAAkB;AAEjD,cAAI,mBACF,0BACE,AAA0C,gCAAb,mBAAW,aACjC,wCAAoB,WAAkB;;;IAIvD;;AAGS,uBAAa;AACpB,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAY,yBAAQ,IAAA,AAAC,CAAA;AACvC,YAAI,AAAe,6BAAS,AAAW,wBAAC,CAAC;AACX,UAA5B,aAAA,AAAW,UAAD,GAAI,AAAW,wBAAC,CAAC;;AAEV,UAAjB,aAAA,AAAW,UAAD,GAAI;;;AAGlB,YAAO,WAAU;IACnB;;AAGE,YAAO,8BACI,gBACG,cACG,0BAAS,IAAI,QAAC;AACpB,uBAAgB,yBAAa,AAAI,AAAc,iBAAH,KAAK,KAAK;AAC7D,gBAAO,oDACM,AAAY,oBAAG,oBAAe,OAAO,cAAM,iBAAY,MAAM,2BACjE,kBAAK,MAAM;;IAI1B;;;;;;IA1FO,mBAAc;IACT,sBAAiB;IACzB,mBAAc;IACd,oBAAe;;;EAwFrB;;;;;;;;;;;;;;;;;;;;;AArHiB,IAAf,eAAO;EACT;;ECGwB","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant
  };
}));

//# sourceMappingURL=main.js.map