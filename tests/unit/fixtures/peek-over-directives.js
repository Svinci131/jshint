// jshint esversion: 5, maxlen: 80, maxerr: 100

/**
 * When the lexer emits a token, it may not be aware of the complete set of
 * in-line linting directives because these are activated by the parser. This
 * is notably the case during parsing lookahead operations (e.g. when selecting
 * between multiple parsing strategies that may follow the `{`, `[`, and `(`
 * tokens).
 *
 * In these contexts, the lexer should not immediately report token-related
 * warnings. This must be deferred until the parser has visited all preceding
 * comments and fully applied all linting directives present in the source
 * code.
 */

// jshint  +W048, +W049, +W100, +W101, +W113, +W119
void {
  a_warning: /\ /, // this RegExp contains a null byte
  b_warning: /\</,
  c_warning: "-----------------------------------------------------------------",
  d_warning: " ", // this string contains a null byte
  e_warning: 0o11,
  f_warning: 0b11,
  g_warning: ``,
  h_warning: /./y,

  // jshint -W048, -W100
  a_allowed: /\ /, // this RegExp contains a null byte
  // jshint -W049
  b_allowed: /\</,
  // jshint -W101
  c_allowed: "-----------------------------------------------------------------",
  // jshint -W113, -W100
  d_allowed: " ", // this string contains a null byte
  // jshint -W119
  e_allowed: 0o11,
  f_allowed: 0b11,
  g_allowed: ``,
  h_allowed: /./y
};

// jshint  +W048, +W049, +W100, +W101, +W113, +W119
void [
  /\ /, // this RegExp contains a null byte
  /\</,
  "----------------------------------------------------------------------------",
  " ", // this string contains a null byte
  0o11,
  0b11,
  ``,
  /./y,

  // jshint -W048, -W100
  /\ /, // this RegExp contains a null byte
  // jshint -W049
  /\</,
  // jshint -W101
  "----------------------------------------------------------------------------",
  // jshint -W113, -W100
  " ", // this string contains a null byte
  // jshint -W119
  0o11,
  0b11,
  ``,
  /./y
];

// jshint  +W048, +W049, +W100, +W101, +W113, +W119
void (
  /\ /, // this RegExp contains a null byte
  /\</,
  "----------------------------------------------------------------------------",
  " ", // this string contains a null byte
  0o11,
  0b11,
  ``,
  /./y,

  // jshint -W048, -W100
  /\ /, // this RegExp contains a null byte
  // jshint -W049
  /\</,
  // jshint -W101
  "----------------------------------------------------------------------------",
  // jshint -W113, -W100
  " ", // this string contains a null byte
  // jshint -W119
  0o11,
  0b11,
  ``,
  /./y
);
