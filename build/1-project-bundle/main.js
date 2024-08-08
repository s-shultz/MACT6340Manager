/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  "use strict";
  const t = "167",
    e = 1,
    n = 2,
    i = 3,
    r = 0,
    a = 1,
    s = 2,
    o = 100,
    l = 101,
    c = 102,
    h = 200,
    u = 201,
    d = 202,
    p = 203,
    f = 204,
    m = 205,
    g = 206,
    _ = 207,
    v = 208,
    x = 209,
    M = 210,
    y = 211,
    S = 212,
    E = 213,
    T = 214,
    b = 0,
    w = 1,
    A = 2,
    R = 0,
    C = 1,
    P = 2,
    L = 3,
    U = 4,
    I = 5,
    D = 6,
    N = 7,
    O = 301,
    F = 302,
    z = 306,
    B = 1e3,
    H = 1001,
    V = 1002,
    k = 1003,
    G = 1004,
    W = 1005,
    X = 1006,
    j = 1007,
    Y = 1008,
    q = 1009,
    K = 1010,
    Z = 1011,
    J = 1012,
    $ = 1013,
    Q = 1014,
    tt = 1015,
    et = 1016,
    nt = 1017,
    it = 1018,
    rt = 1020,
    at = 35902,
    st = 1021,
    ot = 1022,
    lt = 1023,
    ct = 1024,
    ht = 1025,
    ut = 1026,
    dt = 1027,
    pt = 1028,
    ft = 1029,
    mt = 1030,
    gt = 1031,
    _t = 1033,
    vt = 33776,
    xt = 33777,
    Mt = 33778,
    yt = 33779,
    St = 35840,
    Et = 35841,
    Tt = 35842,
    bt = 35843,
    wt = 36196,
    At = 37492,
    Rt = 37496,
    Ct = 37808,
    Pt = 37809,
    Lt = 37810,
    Ut = 37811,
    It = 37812,
    Dt = 37813,
    Nt = 37814,
    Ot = 37815,
    Ft = 37816,
    zt = 37817,
    Bt = 37818,
    Ht = 37819,
    Vt = 37820,
    kt = 37821,
    Gt = 36492,
    Wt = 36494,
    Xt = 36495,
    jt = 36283,
    Yt = 36284,
    qt = 36285,
    Kt = 36286,
    Zt = 2300,
    Jt = 2301,
    $t = 2302,
    Qt = "",
    te = "srgb",
    ee = "srgb-linear",
    ne = "display-p3",
    ie = "display-p3-linear",
    re = "linear",
    ae = "srgb",
    se = "rec709",
    oe = "p3",
    le = 7680,
    ce = 512,
    he = 513,
    ue = 514,
    de = 515,
    pe = 516,
    fe = 517,
    me = 518,
    ge = 519,
    _e = "300 es",
    ve = 2e3,
    xe = 2001;
  class Me {
    addEventListener(t, e) {
      void 0 === this._listeners && (this._listeners = {});
      const n = this._listeners;
      void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e);
    }
    hasEventListener(t, e) {
      if (void 0 === this._listeners) return !1;
      const n = this._listeners;
      return void 0 !== n[t] && -1 !== n[t].indexOf(e);
    }
    removeEventListener(t, e) {
      if (void 0 === this._listeners) return;
      const n = this._listeners[t];
      if (void 0 !== n) {
        const t = n.indexOf(e);
        -1 !== t && n.splice(t, 1);
      }
    }
    dispatchEvent(t) {
      if (void 0 === this._listeners) return;
      const e = this._listeners[t.type];
      if (void 0 !== e) {
        t.target = this;
        const n = e.slice(0);
        for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
        t.target = null;
      }
    }
  }
  const ye = [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "0a",
      "0b",
      "0c",
      "0d",
      "0e",
      "0f",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "1a",
      "1b",
      "1c",
      "1d",
      "1e",
      "1f",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "2a",
      "2b",
      "2c",
      "2d",
      "2e",
      "2f",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "3a",
      "3b",
      "3c",
      "3d",
      "3e",
      "3f",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
      "4a",
      "4b",
      "4c",
      "4d",
      "4e",
      "4f",
      "50",
      "51",
      "52",
      "53",
      "54",
      "55",
      "56",
      "57",
      "58",
      "59",
      "5a",
      "5b",
      "5c",
      "5d",
      "5e",
      "5f",
      "60",
      "61",
      "62",
      "63",
      "64",
      "65",
      "66",
      "67",
      "68",
      "69",
      "6a",
      "6b",
      "6c",
      "6d",
      "6e",
      "6f",
      "70",
      "71",
      "72",
      "73",
      "74",
      "75",
      "76",
      "77",
      "78",
      "79",
      "7a",
      "7b",
      "7c",
      "7d",
      "7e",
      "7f",
      "80",
      "81",
      "82",
      "83",
      "84",
      "85",
      "86",
      "87",
      "88",
      "89",
      "8a",
      "8b",
      "8c",
      "8d",
      "8e",
      "8f",
      "90",
      "91",
      "92",
      "93",
      "94",
      "95",
      "96",
      "97",
      "98",
      "99",
      "9a",
      "9b",
      "9c",
      "9d",
      "9e",
      "9f",
      "a0",
      "a1",
      "a2",
      "a3",
      "a4",
      "a5",
      "a6",
      "a7",
      "a8",
      "a9",
      "aa",
      "ab",
      "ac",
      "ad",
      "ae",
      "af",
      "b0",
      "b1",
      "b2",
      "b3",
      "b4",
      "b5",
      "b6",
      "b7",
      "b8",
      "b9",
      "ba",
      "bb",
      "bc",
      "bd",
      "be",
      "bf",
      "c0",
      "c1",
      "c2",
      "c3",
      "c4",
      "c5",
      "c6",
      "c7",
      "c8",
      "c9",
      "ca",
      "cb",
      "cc",
      "cd",
      "ce",
      "cf",
      "d0",
      "d1",
      "d2",
      "d3",
      "d4",
      "d5",
      "d6",
      "d7",
      "d8",
      "d9",
      "da",
      "db",
      "dc",
      "dd",
      "de",
      "df",
      "e0",
      "e1",
      "e2",
      "e3",
      "e4",
      "e5",
      "e6",
      "e7",
      "e8",
      "e9",
      "ea",
      "eb",
      "ec",
      "ed",
      "ee",
      "ef",
      "f0",
      "f1",
      "f2",
      "f3",
      "f4",
      "f5",
      "f6",
      "f7",
      "f8",
      "f9",
      "fa",
      "fb",
      "fc",
      "fd",
      "fe",
      "ff",
    ],
    Se = Math.PI / 180,
    Ee = 180 / Math.PI;
  function Te() {
    const t = (4294967295 * Math.random()) | 0,
      e = (4294967295 * Math.random()) | 0,
      n = (4294967295 * Math.random()) | 0,
      i = (4294967295 * Math.random()) | 0;
    return (
      ye[255 & t] +
      ye[(t >> 8) & 255] +
      ye[(t >> 16) & 255] +
      ye[(t >> 24) & 255] +
      "-" +
      ye[255 & e] +
      ye[(e >> 8) & 255] +
      "-" +
      ye[((e >> 16) & 15) | 64] +
      ye[(e >> 24) & 255] +
      "-" +
      ye[(63 & n) | 128] +
      ye[(n >> 8) & 255] +
      "-" +
      ye[(n >> 16) & 255] +
      ye[(n >> 24) & 255] +
      ye[255 & i] +
      ye[(i >> 8) & 255] +
      ye[(i >> 16) & 255] +
      ye[(i >> 24) & 255]
    ).toLowerCase();
  }
  function be(t, e, n) {
    return Math.max(e, Math.min(n, t));
  }
  function we(t, e, n) {
    return (1 - n) * t + n * e;
  }
  function Ae(t, e) {
    switch (e.constructor) {
      case Float32Array:
        return t;
      case Uint32Array:
        return t / 4294967295;
      case Uint16Array:
        return t / 65535;
      case Uint8Array:
        return t / 255;
      case Int32Array:
        return Math.max(t / 2147483647, -1);
      case Int16Array:
        return Math.max(t / 32767, -1);
      case Int8Array:
        return Math.max(t / 127, -1);
      default:
        throw new Error("Invalid component type.");
    }
  }
  function Re(t, e) {
    switch (e.constructor) {
      case Float32Array:
        return t;
      case Uint32Array:
        return Math.round(4294967295 * t);
      case Uint16Array:
        return Math.round(65535 * t);
      case Uint8Array:
        return Math.round(255 * t);
      case Int32Array:
        return Math.round(2147483647 * t);
      case Int16Array:
        return Math.round(32767 * t);
      case Int8Array:
        return Math.round(127 * t);
      default:
        throw new Error("Invalid component type.");
    }
  }
  const Ce = Se;
  class Pe {
    constructor(t = 0, e = 0) {
      (Pe.prototype.isVector2 = !0), (this.x = t), (this.y = e);
    }
    get width() {
      return this.x;
    }
    set width(t) {
      this.x = t;
    }
    get height() {
      return this.y;
    }
    set height(t) {
      this.y = t;
    }
    set(t, e) {
      return (this.x = t), (this.y = e), this;
    }
    setScalar(t) {
      return (this.x = t), (this.y = t), this;
    }
    setX(t) {
      return (this.x = t), this;
    }
    setY(t) {
      return (this.y = t), this;
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        default:
          throw new Error("index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(t) {
      return (this.x = t.x), (this.y = t.y), this;
    }
    add(t) {
      return (this.x += t.x), (this.y += t.y), this;
    }
    addScalar(t) {
      return (this.x += t), (this.y += t), this;
    }
    addVectors(t, e) {
      return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
    }
    addScaledVector(t, e) {
      return (this.x += t.x * e), (this.y += t.y * e), this;
    }
    sub(t) {
      return (this.x -= t.x), (this.y -= t.y), this;
    }
    subScalar(t) {
      return (this.x -= t), (this.y -= t), this;
    }
    subVectors(t, e) {
      return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
    }
    multiply(t) {
      return (this.x *= t.x), (this.y *= t.y), this;
    }
    multiplyScalar(t) {
      return (this.x *= t), (this.y *= t), this;
    }
    divide(t) {
      return (this.x /= t.x), (this.y /= t.y), this;
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    applyMatrix3(t) {
      const e = this.x,
        n = this.y,
        i = t.elements;
      return (
        (this.x = i[0] * e + i[3] * n + i[6]),
        (this.y = i[1] * e + i[4] * n + i[7]),
        this
      );
    }
    min(t) {
      return (
        (this.x = Math.min(this.x, t.x)), (this.y = Math.min(this.y, t.y)), this
      );
    }
    max(t) {
      return (
        (this.x = Math.max(this.x, t.x)), (this.y = Math.max(this.y, t.y)), this
      );
    }
    clamp(t, e) {
      return (
        (this.x = Math.max(t.x, Math.min(e.x, this.x))),
        (this.y = Math.max(t.y, Math.min(e.y, this.y))),
        this
      );
    }
    clampScalar(t, e) {
      return (
        (this.x = Math.max(t, Math.min(e, this.x))),
        (this.y = Math.max(t, Math.min(e, this.y))),
        this
      );
    }
    clampLength(t, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(t, Math.min(e, n))
      );
    }
    floor() {
      return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
    }
    ceil() {
      return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
    }
    round() {
      return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
    }
    roundToZero() {
      return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
    }
    negate() {
      return (this.x = -this.x), (this.y = -this.y), this;
    }
    dot(t) {
      return this.x * t.x + this.y * t.y;
    }
    cross(t) {
      return this.x * t.y - this.y * t.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(t) {
      const e = Math.sqrt(this.lengthSq() * t.lengthSq());
      if (0 === e) return Math.PI / 2;
      const n = this.dot(t) / e;
      return Math.acos(be(n, -1, 1));
    }
    distanceTo(t) {
      return Math.sqrt(this.distanceToSquared(t));
    }
    distanceToSquared(t) {
      const e = this.x - t.x,
        n = this.y - t.y;
      return e * e + n * n;
    }
    manhattanDistanceTo(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return (
        (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this
      );
    }
    lerpVectors(t, e, n) {
      return (
        (this.x = t.x + (e.x - t.x) * n), (this.y = t.y + (e.y - t.y) * n), this
      );
    }
    equals(t) {
      return t.x === this.x && t.y === this.y;
    }
    fromArray(t, e = 0) {
      return (this.x = t[e]), (this.y = t[e + 1]), this;
    }
    toArray(t = [], e = 0) {
      return (t[e] = this.x), (t[e + 1] = this.y), t;
    }
    fromBufferAttribute(t, e) {
      return (this.x = t.getX(e)), (this.y = t.getY(e)), this;
    }
    rotateAround(t, e) {
      const n = Math.cos(e),
        i = Math.sin(e),
        r = this.x - t.x,
        a = this.y - t.y;
      return (
        (this.x = r * n - a * i + t.x), (this.y = r * i + a * n + t.y), this
      );
    }
    random() {
      return (this.x = Math.random()), (this.y = Math.random()), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  }
  class Le {
    constructor(t, e, n, i, r, a, s, o, l) {
      (Le.prototype.isMatrix3 = !0),
        (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
        void 0 !== t && this.set(t, e, n, i, r, a, s, o, l);
    }
    set(t, e, n, i, r, a, s, o, l) {
      const c = this.elements;
      return (
        (c[0] = t),
        (c[1] = i),
        (c[2] = s),
        (c[3] = e),
        (c[4] = r),
        (c[5] = o),
        (c[6] = n),
        (c[7] = a),
        (c[8] = l),
        this
      );
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(t) {
      const e = this.elements,
        n = t.elements;
      return (
        (e[0] = n[0]),
        (e[1] = n[1]),
        (e[2] = n[2]),
        (e[3] = n[3]),
        (e[4] = n[4]),
        (e[5] = n[5]),
        (e[6] = n[6]),
        (e[7] = n[7]),
        (e[8] = n[8]),
        this
      );
    }
    extractBasis(t, e, n) {
      return (
        t.setFromMatrix3Column(this, 0),
        e.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
      );
    }
    setFromMatrix4(t) {
      const e = t.elements;
      return (
        this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
      );
    }
    multiply(t) {
      return this.multiplyMatrices(this, t);
    }
    premultiply(t) {
      return this.multiplyMatrices(t, this);
    }
    multiplyMatrices(t, e) {
      const n = t.elements,
        i = e.elements,
        r = this.elements,
        a = n[0],
        s = n[3],
        o = n[6],
        l = n[1],
        c = n[4],
        h = n[7],
        u = n[2],
        d = n[5],
        p = n[8],
        f = i[0],
        m = i[3],
        g = i[6],
        _ = i[1],
        v = i[4],
        x = i[7],
        M = i[2],
        y = i[5],
        S = i[8];
      return (
        (r[0] = a * f + s * _ + o * M),
        (r[3] = a * m + s * v + o * y),
        (r[6] = a * g + s * x + o * S),
        (r[1] = l * f + c * _ + h * M),
        (r[4] = l * m + c * v + h * y),
        (r[7] = l * g + c * x + h * S),
        (r[2] = u * f + d * _ + p * M),
        (r[5] = u * m + d * v + p * y),
        (r[8] = u * g + d * x + p * S),
        this
      );
    }
    multiplyScalar(t) {
      const e = this.elements;
      return (
        (e[0] *= t),
        (e[3] *= t),
        (e[6] *= t),
        (e[1] *= t),
        (e[4] *= t),
        (e[7] *= t),
        (e[2] *= t),
        (e[5] *= t),
        (e[8] *= t),
        this
      );
    }
    determinant() {
      const t = this.elements,
        e = t[0],
        n = t[1],
        i = t[2],
        r = t[3],
        a = t[4],
        s = t[5],
        o = t[6],
        l = t[7],
        c = t[8];
      return (
        e * a * c - e * s * l - n * r * c + n * s * o + i * r * l - i * a * o
      );
    }
    invert() {
      const t = this.elements,
        e = t[0],
        n = t[1],
        i = t[2],
        r = t[3],
        a = t[4],
        s = t[5],
        o = t[6],
        l = t[7],
        c = t[8],
        h = c * a - s * l,
        u = s * o - c * r,
        d = l * r - a * o,
        p = e * h + n * u + i * d;
      if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const f = 1 / p;
      return (
        (t[0] = h * f),
        (t[1] = (i * l - c * n) * f),
        (t[2] = (s * n - i * a) * f),
        (t[3] = u * f),
        (t[4] = (c * e - i * o) * f),
        (t[5] = (i * r - s * e) * f),
        (t[6] = d * f),
        (t[7] = (n * o - l * e) * f),
        (t[8] = (a * e - n * r) * f),
        this
      );
    }
    transpose() {
      let t;
      const e = this.elements;
      return (
        (t = e[1]),
        (e[1] = e[3]),
        (e[3] = t),
        (t = e[2]),
        (e[2] = e[6]),
        (e[6] = t),
        (t = e[5]),
        (e[5] = e[7]),
        (e[7] = t),
        this
      );
    }
    getNormalMatrix(t) {
      return this.setFromMatrix4(t).invert().transpose();
    }
    transposeIntoArray(t) {
      const e = this.elements;
      return (
        (t[0] = e[0]),
        (t[1] = e[3]),
        (t[2] = e[6]),
        (t[3] = e[1]),
        (t[4] = e[4]),
        (t[5] = e[7]),
        (t[6] = e[2]),
        (t[7] = e[5]),
        (t[8] = e[8]),
        this
      );
    }
    setUvTransform(t, e, n, i, r, a, s) {
      const o = Math.cos(r),
        l = Math.sin(r);
      return (
        this.set(
          n * o,
          n * l,
          -n * (o * a + l * s) + a + t,
          -i * l,
          i * o,
          -i * (-l * a + o * s) + s + e,
          0,
          0,
          1
        ),
        this
      );
    }
    scale(t, e) {
      return this.premultiply(Ue.makeScale(t, e)), this;
    }
    rotate(t) {
      return this.premultiply(Ue.makeRotation(-t)), this;
    }
    translate(t, e) {
      return this.premultiply(Ue.makeTranslation(t, e)), this;
    }
    makeTranslation(t, e) {
      return (
        t.isVector2
          ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1)
          : this.set(1, 0, t, 0, 1, e, 0, 0, 1),
        this
      );
    }
    makeRotation(t) {
      const e = Math.cos(t),
        n = Math.sin(t);
      return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this;
    }
    makeScale(t, e) {
      return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
    }
    equals(t) {
      const e = this.elements,
        n = t.elements;
      for (let t = 0; t < 9; t++) if (e[t] !== n[t]) return !1;
      return !0;
    }
    fromArray(t, e = 0) {
      for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
      return this;
    }
    toArray(t = [], e = 0) {
      const n = this.elements;
      return (
        (t[e] = n[0]),
        (t[e + 1] = n[1]),
        (t[e + 2] = n[2]),
        (t[e + 3] = n[3]),
        (t[e + 4] = n[4]),
        (t[e + 5] = n[5]),
        (t[e + 6] = n[6]),
        (t[e + 7] = n[7]),
        (t[e + 8] = n[8]),
        t
      );
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  }
  const Ue = new Le();
  function Ie(t) {
    for (let e = t.length - 1; e >= 0; --e) if (t[e] >= 65535) return !0;
    return !1;
  }
  function De(t) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", t);
  }
  function Ne() {
    const t = De("canvas");
    return (t.style.display = "block"), t;
  }
  Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array;
  const Oe = {};
  function Fe(t) {
    t in Oe || ((Oe[t] = !0), console.warn(t));
  }
  const ze = new Le().set(
      0.8224621,
      0.177538,
      0,
      0.0331941,
      0.9668058,
      0,
      0.0170827,
      0.0723974,
      0.9105199
    ),
    Be = new Le().set(
      1.2249401,
      -0.2249404,
      0,
      -0.0420569,
      1.0420571,
      0,
      -0.0196376,
      -0.0786361,
      1.0982735
    ),
    He = {
      [ee]: {
        transfer: re,
        primaries: se,
        luminanceCoefficients: [0.2126, 0.7152, 0.0722],
        toReference: (t) => t,
        fromReference: (t) => t,
      },
      [te]: {
        transfer: ae,
        primaries: se,
        luminanceCoefficients: [0.2126, 0.7152, 0.0722],
        toReference: (t) => t.convertSRGBToLinear(),
        fromReference: (t) => t.convertLinearToSRGB(),
      },
      [ie]: {
        transfer: re,
        primaries: oe,
        luminanceCoefficients: [0.2289, 0.6917, 0.0793],
        toReference: (t) => t.applyMatrix3(Be),
        fromReference: (t) => t.applyMatrix3(ze),
      },
      [ne]: {
        transfer: ae,
        primaries: oe,
        luminanceCoefficients: [0.2289, 0.6917, 0.0793],
        toReference: (t) => t.convertSRGBToLinear().applyMatrix3(Be),
        fromReference: (t) => t.applyMatrix3(ze).convertLinearToSRGB(),
      },
    },
    Ve = new Set([ee, ie]),
    ke = {
      enabled: !0,
      _workingColorSpace: ee,
      get workingColorSpace() {
        return this._workingColorSpace;
      },
      set workingColorSpace(t) {
        if (!Ve.has(t))
          throw new Error(`Unsupported working color space, "${t}".`);
        this._workingColorSpace = t;
      },
      convert: function (t, e, n) {
        if (!1 === this.enabled || e === n || !e || !n) return t;
        const i = He[e].toReference;
        return (0, He[n].fromReference)(i(t));
      },
      fromWorkingColorSpace: function (t, e) {
        return this.convert(t, this._workingColorSpace, e);
      },
      toWorkingColorSpace: function (t, e) {
        return this.convert(t, e, this._workingColorSpace);
      },
      getPrimaries: function (t) {
        return He[t].primaries;
      },
      getTransfer: function (t) {
        return t === Qt ? re : He[t].transfer;
      },
      getLuminanceCoefficients: function (t, e = this._workingColorSpace) {
        return t.fromArray(He[e].luminanceCoefficients);
      },
    };
  function Ge(t) {
    return t < 0.04045
      ? 0.0773993808 * t
      : Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
  }
  function We(t) {
    return t < 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 0.41666) - 0.055;
  }
  let Xe;
  class je {
    static getDataURL(t) {
      if (/^data:/i.test(t.src)) return t.src;
      if ("undefined" == typeof HTMLCanvasElement) return t.src;
      let e;
      if (t instanceof HTMLCanvasElement) e = t;
      else {
        void 0 === Xe && (Xe = De("canvas")),
          (Xe.width = t.width),
          (Xe.height = t.height);
        const n = Xe.getContext("2d");
        t instanceof ImageData
          ? n.putImageData(t, 0, 0)
          : n.drawImage(t, 0, 0, t.width, t.height),
          (e = Xe);
      }
      return e.width > 2048 || e.height > 2048
        ? (console.warn(
            "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
            t
          ),
          e.toDataURL("image/jpeg", 0.6))
        : e.toDataURL("image/png");
    }
    static sRGBToLinear(t) {
      if (
        ("undefined" != typeof HTMLImageElement &&
          t instanceof HTMLImageElement) ||
        ("undefined" != typeof HTMLCanvasElement &&
          t instanceof HTMLCanvasElement) ||
        ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
      ) {
        const e = De("canvas");
        (e.width = t.width), (e.height = t.height);
        const n = e.getContext("2d");
        n.drawImage(t, 0, 0, t.width, t.height);
        const i = n.getImageData(0, 0, t.width, t.height),
          r = i.data;
        for (let t = 0; t < r.length; t++) r[t] = 255 * Ge(r[t] / 255);
        return n.putImageData(i, 0, 0), e;
      }
      if (t.data) {
        const e = t.data.slice(0);
        for (let t = 0; t < e.length; t++)
          e instanceof Uint8Array || e instanceof Uint8ClampedArray
            ? (e[t] = Math.floor(255 * Ge(e[t] / 255)))
            : (e[t] = Ge(e[t]));
        return { data: e, width: t.width, height: t.height };
      }
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        t
      );
    }
  }
  let Ye = 0;
  class qe {
    constructor(t = null) {
      (this.isSource = !0),
        Object.defineProperty(this, "id", { value: Ye++ }),
        (this.uuid = Te()),
        (this.data = t),
        (this.dataReady = !0),
        (this.version = 0);
    }
    set needsUpdate(t) {
      !0 === t && this.version++;
    }
    toJSON(t) {
      const e = void 0 === t || "string" == typeof t;
      if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
      const n = { uuid: this.uuid, url: "" },
        i = this.data;
      if (null !== i) {
        let t;
        if (Array.isArray(i)) {
          t = [];
          for (let e = 0, n = i.length; e < n; e++)
            i[e].isDataTexture ? t.push(Ke(i[e].image)) : t.push(Ke(i[e]));
        } else t = Ke(i);
        n.url = t;
      }
      return e || (t.images[this.uuid] = n), n;
    }
  }
  function Ke(t) {
    return ("undefined" != typeof HTMLImageElement &&
      t instanceof HTMLImageElement) ||
      ("undefined" != typeof HTMLCanvasElement &&
        t instanceof HTMLCanvasElement) ||
      ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
      ? je.getDataURL(t)
      : t.data
      ? {
          data: Array.from(t.data),
          width: t.width,
          height: t.height,
          type: t.data.constructor.name,
        }
      : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }
  let Ze = 0;
  class Je extends Me {
    constructor(
      t = Je.DEFAULT_IMAGE,
      e = Je.DEFAULT_MAPPING,
      n = 1001,
      i = 1001,
      r = 1006,
      a = 1008,
      s = lt,
      o = q,
      l = Je.DEFAULT_ANISOTROPY,
      c = ""
    ) {
      super(),
        (this.isTexture = !0),
        Object.defineProperty(this, "id", { value: Ze++ }),
        (this.uuid = Te()),
        (this.name = ""),
        (this.source = new qe(t)),
        (this.mipmaps = []),
        (this.mapping = e),
        (this.channel = 0),
        (this.wrapS = n),
        (this.wrapT = i),
        (this.magFilter = r),
        (this.minFilter = a),
        (this.anisotropy = l),
        (this.format = s),
        (this.internalFormat = null),
        (this.type = o),
        (this.offset = new Pe(0, 0)),
        (this.repeat = new Pe(1, 1)),
        (this.center = new Pe(0, 0)),
        (this.rotation = 0),
        (this.matrixAutoUpdate = !0),
        (this.matrix = new Le()),
        (this.generateMipmaps = !0),
        (this.premultiplyAlpha = !1),
        (this.flipY = !0),
        (this.unpackAlignment = 4),
        (this.colorSpace = c),
        (this.userData = {}),
        (this.version = 0),
        (this.onUpdate = null),
        (this.isRenderTargetTexture = !1),
        (this.pmremVersion = 0);
    }
    get image() {
      return this.source.data;
    }
    set image(t = null) {
      this.source.data = t;
    }
    updateMatrix() {
      this.matrix.setUvTransform(
        this.offset.x,
        this.offset.y,
        this.repeat.x,
        this.repeat.y,
        this.rotation,
        this.center.x,
        this.center.y
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return (
        (this.name = t.name),
        (this.source = t.source),
        (this.mipmaps = t.mipmaps.slice(0)),
        (this.mapping = t.mapping),
        (this.channel = t.channel),
        (this.wrapS = t.wrapS),
        (this.wrapT = t.wrapT),
        (this.magFilter = t.magFilter),
        (this.minFilter = t.minFilter),
        (this.anisotropy = t.anisotropy),
        (this.format = t.format),
        (this.internalFormat = t.internalFormat),
        (this.type = t.type),
        this.offset.copy(t.offset),
        this.repeat.copy(t.repeat),
        this.center.copy(t.center),
        (this.rotation = t.rotation),
        (this.matrixAutoUpdate = t.matrixAutoUpdate),
        this.matrix.copy(t.matrix),
        (this.generateMipmaps = t.generateMipmaps),
        (this.premultiplyAlpha = t.premultiplyAlpha),
        (this.flipY = t.flipY),
        (this.unpackAlignment = t.unpackAlignment),
        (this.colorSpace = t.colorSpace),
        (this.userData = JSON.parse(JSON.stringify(t.userData))),
        (this.needsUpdate = !0),
        this
      );
    }
    toJSON(t) {
      const e = void 0 === t || "string" == typeof t;
      if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
      const n = {
        metadata: {
          version: 4.6,
          type: "Texture",
          generator: "Texture.toJSON",
        },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(t).uuid,
        mapping: this.mapping,
        channel: this.channel,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        internalFormat: this.internalFormat,
        type: this.type,
        colorSpace: this.colorSpace,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        generateMipmaps: this.generateMipmaps,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment,
      };
      return (
        Object.keys(this.userData).length > 0 && (n.userData = this.userData),
        e || (t.textures[this.uuid] = n),
        n
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(t) {
      if (300 !== this.mapping) return t;
      if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
        switch (this.wrapS) {
          case B:
            t.x = t.x - Math.floor(t.x);
            break;
          case H:
            t.x = t.x < 0 ? 0 : 1;
            break;
          case V:
            1 === Math.abs(Math.floor(t.x) % 2)
              ? (t.x = Math.ceil(t.x) - t.x)
              : (t.x = t.x - Math.floor(t.x));
        }
      if (t.y < 0 || t.y > 1)
        switch (this.wrapT) {
          case B:
            t.y = t.y - Math.floor(t.y);
            break;
          case H:
            t.y = t.y < 0 ? 0 : 1;
            break;
          case V:
            1 === Math.abs(Math.floor(t.y) % 2)
              ? (t.y = Math.ceil(t.y) - t.y)
              : (t.y = t.y - Math.floor(t.y));
        }
      return this.flipY && (t.y = 1 - t.y), t;
    }
    set needsUpdate(t) {
      !0 === t && (this.version++, (this.source.needsUpdate = !0));
    }
    set needsPMREMUpdate(t) {
      !0 === t && this.pmremVersion++;
    }
  }
  (Je.DEFAULT_IMAGE = null),
    (Je.DEFAULT_MAPPING = 300),
    (Je.DEFAULT_ANISOTROPY = 1);
  class $e {
    constructor(t = 0, e = 0, n = 0, i = 1) {
      ($e.prototype.isVector4 = !0),
        (this.x = t),
        (this.y = e),
        (this.z = n),
        (this.w = i);
    }
    get width() {
      return this.z;
    }
    set width(t) {
      this.z = t;
    }
    get height() {
      return this.w;
    }
    set height(t) {
      this.w = t;
    }
    set(t, e, n, i) {
      return (this.x = t), (this.y = e), (this.z = n), (this.w = i), this;
    }
    setScalar(t) {
      return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
    }
    setX(t) {
      return (this.x = t), this;
    }
    setY(t) {
      return (this.y = t), this;
    }
    setZ(t) {
      return (this.z = t), this;
    }
    setW(t) {
      return (this.w = t), this;
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        case 3:
          this.w = e;
          break;
        default:
          throw new Error("index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(t) {
      return (
        (this.x = t.x),
        (this.y = t.y),
        (this.z = t.z),
        (this.w = void 0 !== t.w ? t.w : 1),
        this
      );
    }
    add(t) {
      return (
        (this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this
      );
    }
    addScalar(t) {
      return (this.x += t), (this.y += t), (this.z += t), (this.w += t), this;
    }
    addVectors(t, e) {
      return (
        (this.x = t.x + e.x),
        (this.y = t.y + e.y),
        (this.z = t.z + e.z),
        (this.w = t.w + e.w),
        this
      );
    }
    addScaledVector(t, e) {
      return (
        (this.x += t.x * e),
        (this.y += t.y * e),
        (this.z += t.z * e),
        (this.w += t.w * e),
        this
      );
    }
    sub(t) {
      return (
        (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), (this.w -= t.w), this
      );
    }
    subScalar(t) {
      return (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this;
    }
    subVectors(t, e) {
      return (
        (this.x = t.x - e.x),
        (this.y = t.y - e.y),
        (this.z = t.z - e.z),
        (this.w = t.w - e.w),
        this
      );
    }
    multiply(t) {
      return (
        (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), (this.w *= t.w), this
      );
    }
    multiplyScalar(t) {
      return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this;
    }
    applyMatrix4(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = this.w,
        a = t.elements;
      return (
        (this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r),
        (this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r),
        (this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r),
        (this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r),
        this
      );
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    setAxisAngleFromQuaternion(t) {
      this.w = 2 * Math.acos(t.w);
      const e = Math.sqrt(1 - t.w * t.w);
      return (
        e < 1e-4
          ? ((this.x = 1), (this.y = 0), (this.z = 0))
          : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
        this
      );
    }
    setAxisAngleFromRotationMatrix(t) {
      let e, n, i, r;
      const a = 0.01,
        s = 0.1,
        o = t.elements,
        l = o[0],
        c = o[4],
        h = o[8],
        u = o[1],
        d = o[5],
        p = o[9],
        f = o[2],
        m = o[6],
        g = o[10];
      if (Math.abs(c - u) < a && Math.abs(h - f) < a && Math.abs(p - m) < a) {
        if (
          Math.abs(c + u) < s &&
          Math.abs(h + f) < s &&
          Math.abs(p + m) < s &&
          Math.abs(l + d + g - 3) < s
        )
          return this.set(1, 0, 0, 0), this;
        e = Math.PI;
        const t = (l + 1) / 2,
          o = (d + 1) / 2,
          _ = (g + 1) / 2,
          v = (c + u) / 4,
          x = (h + f) / 4,
          M = (p + m) / 4;
        return (
          t > o && t > _
            ? t < a
              ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
              : ((n = Math.sqrt(t)), (i = v / n), (r = x / n))
            : o > _
            ? o < a
              ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
              : ((i = Math.sqrt(o)), (n = v / i), (r = M / i))
            : _ < a
            ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
            : ((r = Math.sqrt(_)), (n = x / r), (i = M / r)),
          this.set(n, i, r, e),
          this
        );
      }
      let _ = Math.sqrt(
        (m - p) * (m - p) + (h - f) * (h - f) + (u - c) * (u - c)
      );
      return (
        Math.abs(_) < 0.001 && (_ = 1),
        (this.x = (m - p) / _),
        (this.y = (h - f) / _),
        (this.z = (u - c) / _),
        (this.w = Math.acos((l + d + g - 1) / 2)),
        this
      );
    }
    setFromMatrixPosition(t) {
      const e = t.elements;
      return (
        (this.x = e[12]),
        (this.y = e[13]),
        (this.z = e[14]),
        (this.w = e[15]),
        this
      );
    }
    min(t) {
      return (
        (this.x = Math.min(this.x, t.x)),
        (this.y = Math.min(this.y, t.y)),
        (this.z = Math.min(this.z, t.z)),
        (this.w = Math.min(this.w, t.w)),
        this
      );
    }
    max(t) {
      return (
        (this.x = Math.max(this.x, t.x)),
        (this.y = Math.max(this.y, t.y)),
        (this.z = Math.max(this.z, t.z)),
        (this.w = Math.max(this.w, t.w)),
        this
      );
    }
    clamp(t, e) {
      return (
        (this.x = Math.max(t.x, Math.min(e.x, this.x))),
        (this.y = Math.max(t.y, Math.min(e.y, this.y))),
        (this.z = Math.max(t.z, Math.min(e.z, this.z))),
        (this.w = Math.max(t.w, Math.min(e.w, this.w))),
        this
      );
    }
    clampScalar(t, e) {
      return (
        (this.x = Math.max(t, Math.min(e, this.x))),
        (this.y = Math.max(t, Math.min(e, this.y))),
        (this.z = Math.max(t, Math.min(e, this.z))),
        (this.w = Math.max(t, Math.min(e, this.w))),
        this
      );
    }
    clampLength(t, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(t, Math.min(e, n))
      );
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        (this.w = Math.floor(this.w)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        (this.w = Math.ceil(this.w)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        (this.w = Math.round(this.w)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = Math.trunc(this.x)),
        (this.y = Math.trunc(this.y)),
        (this.z = Math.trunc(this.z)),
        (this.w = Math.trunc(this.w)),
        this
      );
    }
    negate() {
      return (
        (this.x = -this.x),
        (this.y = -this.y),
        (this.z = -this.z),
        (this.w = -this.w),
        this
      );
    }
    dot(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
    }
    lengthSq() {
      return (
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    }
    length() {
      return Math.sqrt(
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    }
    manhattanLength() {
      return (
        Math.abs(this.x) +
        Math.abs(this.y) +
        Math.abs(this.z) +
        Math.abs(this.w)
      );
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return (
        (this.x += (t.x - this.x) * e),
        (this.y += (t.y - this.y) * e),
        (this.z += (t.z - this.z) * e),
        (this.w += (t.w - this.w) * e),
        this
      );
    }
    lerpVectors(t, e, n) {
      return (
        (this.x = t.x + (e.x - t.x) * n),
        (this.y = t.y + (e.y - t.y) * n),
        (this.z = t.z + (e.z - t.z) * n),
        (this.w = t.w + (e.w - t.w) * n),
        this
      );
    }
    equals(t) {
      return (
        t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
      );
    }
    fromArray(t, e = 0) {
      return (
        (this.x = t[e]),
        (this.y = t[e + 1]),
        (this.z = t[e + 2]),
        (this.w = t[e + 3]),
        this
      );
    }
    toArray(t = [], e = 0) {
      return (
        (t[e] = this.x),
        (t[e + 1] = this.y),
        (t[e + 2] = this.z),
        (t[e + 3] = this.w),
        t
      );
    }
    fromBufferAttribute(t, e) {
      return (
        (this.x = t.getX(e)),
        (this.y = t.getY(e)),
        (this.z = t.getZ(e)),
        (this.w = t.getW(e)),
        this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        (this.w = Math.random()),
        this
      );
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w;
    }
  }
  class Qe extends Me {
    constructor(t = 1, e = 1, n = {}) {
      super(),
        (this.isRenderTarget = !0),
        (this.width = t),
        (this.height = e),
        (this.depth = 1),
        (this.scissor = new $e(0, 0, t, e)),
        (this.scissorTest = !1),
        (this.viewport = new $e(0, 0, t, e));
      const i = { width: t, height: e, depth: 1 };
      n = Object.assign(
        {
          generateMipmaps: !1,
          internalFormat: null,
          minFilter: X,
          depthBuffer: !0,
          stencilBuffer: !1,
          resolveDepthBuffer: !0,
          resolveStencilBuffer: !0,
          depthTexture: null,
          samples: 0,
          count: 1,
        },
        n
      );
      const r = new Je(
        i,
        n.mapping,
        n.wrapS,
        n.wrapT,
        n.magFilter,
        n.minFilter,
        n.format,
        n.type,
        n.anisotropy,
        n.colorSpace
      );
      (r.flipY = !1),
        (r.generateMipmaps = n.generateMipmaps),
        (r.internalFormat = n.internalFormat),
        (this.textures = []);
      const a = n.count;
      for (let t = 0; t < a; t++)
        (this.textures[t] = r.clone()),
          (this.textures[t].isRenderTargetTexture = !0);
      (this.depthBuffer = n.depthBuffer),
        (this.stencilBuffer = n.stencilBuffer),
        (this.resolveDepthBuffer = n.resolveDepthBuffer),
        (this.resolveStencilBuffer = n.resolveStencilBuffer),
        (this.depthTexture = n.depthTexture),
        (this.samples = n.samples);
    }
    get texture() {
      return this.textures[0];
    }
    set texture(t) {
      this.textures[0] = t;
    }
    setSize(t, e, n = 1) {
      if (this.width !== t || this.height !== e || this.depth !== n) {
        (this.width = t), (this.height = e), (this.depth = n);
        for (let i = 0, r = this.textures.length; i < r; i++)
          (this.textures[i].image.width = t),
            (this.textures[i].image.height = e),
            (this.textures[i].image.depth = n);
        this.dispose();
      }
      this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      (this.width = t.width),
        (this.height = t.height),
        (this.depth = t.depth),
        this.scissor.copy(t.scissor),
        (this.scissorTest = t.scissorTest),
        this.viewport.copy(t.viewport),
        (this.textures.length = 0);
      for (let e = 0, n = t.textures.length; e < n; e++)
        (this.textures[e] = t.textures[e].clone()),
          (this.textures[e].isRenderTargetTexture = !0);
      const e = Object.assign({}, t.texture.image);
      return (
        (this.texture.source = new qe(e)),
        (this.depthBuffer = t.depthBuffer),
        (this.stencilBuffer = t.stencilBuffer),
        (this.resolveDepthBuffer = t.resolveDepthBuffer),
        (this.resolveStencilBuffer = t.resolveStencilBuffer),
        null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()),
        (this.samples = t.samples),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  class tn extends Qe {
    constructor(t = 1, e = 1, n = {}) {
      super(t, e, n), (this.isWebGLRenderTarget = !0);
    }
  }
  class en extends Je {
    constructor(t = null, e = 1, n = 1, i = 1) {
      super(null),
        (this.isDataArrayTexture = !0),
        (this.image = { data: t, width: e, height: n, depth: i }),
        (this.magFilter = k),
        (this.minFilter = k),
        (this.wrapR = H),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1),
        (this.layerUpdates = new Set());
    }
    addLayerUpdate(t) {
      this.layerUpdates.add(t);
    }
    clearLayerUpdates() {
      this.layerUpdates.clear();
    }
  }
  class nn extends Je {
    constructor(t = null, e = 1, n = 1, i = 1) {
      super(null),
        (this.isData3DTexture = !0),
        (this.image = { data: t, width: e, height: n, depth: i }),
        (this.magFilter = k),
        (this.minFilter = k),
        (this.wrapR = H),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1);
    }
  }
  class rn {
    constructor(t = 0, e = 0, n = 0, i = 1) {
      (this.isQuaternion = !0),
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._w = i);
    }
    static slerpFlat(t, e, n, i, r, a, s) {
      let o = n[i + 0],
        l = n[i + 1],
        c = n[i + 2],
        h = n[i + 3];
      const u = r[a + 0],
        d = r[a + 1],
        p = r[a + 2],
        f = r[a + 3];
      if (0 === s)
        return (
          (t[e + 0] = o), (t[e + 1] = l), (t[e + 2] = c), void (t[e + 3] = h)
        );
      if (1 === s)
        return (
          (t[e + 0] = u), (t[e + 1] = d), (t[e + 2] = p), void (t[e + 3] = f)
        );
      if (h !== f || o !== u || l !== d || c !== p) {
        let t = 1 - s;
        const e = o * u + l * d + c * p + h * f,
          n = e >= 0 ? 1 : -1,
          i = 1 - e * e;
        if (i > Number.EPSILON) {
          const r = Math.sqrt(i),
            a = Math.atan2(r, e * n);
          (t = Math.sin(t * a) / r), (s = Math.sin(s * a) / r);
        }
        const r = s * n;
        if (
          ((o = o * t + u * r),
          (l = l * t + d * r),
          (c = c * t + p * r),
          (h = h * t + f * r),
          t === 1 - s)
        ) {
          const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
          (o *= t), (l *= t), (c *= t), (h *= t);
        }
      }
      (t[e] = o), (t[e + 1] = l), (t[e + 2] = c), (t[e + 3] = h);
    }
    static multiplyQuaternionsFlat(t, e, n, i, r, a) {
      const s = n[i],
        o = n[i + 1],
        l = n[i + 2],
        c = n[i + 3],
        h = r[a],
        u = r[a + 1],
        d = r[a + 2],
        p = r[a + 3];
      return (
        (t[e] = s * p + c * h + o * d - l * u),
        (t[e + 1] = o * p + c * u + l * h - s * d),
        (t[e + 2] = l * p + c * d + s * u - o * h),
        (t[e + 3] = c * p - s * h - o * u - l * d),
        t
      );
    }
    get x() {
      return this._x;
    }
    set x(t) {
      (this._x = t), this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t) {
      (this._y = t), this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t) {
      (this._z = t), this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(t) {
      (this._w = t), this._onChangeCallback();
    }
    set(t, e, n, i) {
      return (
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._w = i),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(t) {
      return (
        (this._x = t.x),
        (this._y = t.y),
        (this._z = t.z),
        (this._w = t.w),
        this._onChangeCallback(),
        this
      );
    }
    setFromEuler(t, e = !0) {
      const n = t._x,
        i = t._y,
        r = t._z,
        a = t._order,
        s = Math.cos,
        o = Math.sin,
        l = s(n / 2),
        c = s(i / 2),
        h = s(r / 2),
        u = o(n / 2),
        d = o(i / 2),
        p = o(r / 2);
      switch (a) {
        case "XYZ":
          (this._x = u * c * h + l * d * p),
            (this._y = l * d * h - u * c * p),
            (this._z = l * c * p + u * d * h),
            (this._w = l * c * h - u * d * p);
          break;
        case "YXZ":
          (this._x = u * c * h + l * d * p),
            (this._y = l * d * h - u * c * p),
            (this._z = l * c * p - u * d * h),
            (this._w = l * c * h + u * d * p);
          break;
        case "ZXY":
          (this._x = u * c * h - l * d * p),
            (this._y = l * d * h + u * c * p),
            (this._z = l * c * p + u * d * h),
            (this._w = l * c * h - u * d * p);
          break;
        case "ZYX":
          (this._x = u * c * h - l * d * p),
            (this._y = l * d * h + u * c * p),
            (this._z = l * c * p - u * d * h),
            (this._w = l * c * h + u * d * p);
          break;
        case "YZX":
          (this._x = u * c * h + l * d * p),
            (this._y = l * d * h + u * c * p),
            (this._z = l * c * p - u * d * h),
            (this._w = l * c * h - u * d * p);
          break;
        case "XZY":
          (this._x = u * c * h - l * d * p),
            (this._y = l * d * h - u * c * p),
            (this._z = l * c * p + u * d * h),
            (this._w = l * c * h + u * d * p);
          break;
        default:
          console.warn(
            "THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
              a
          );
      }
      return !0 === e && this._onChangeCallback(), this;
    }
    setFromAxisAngle(t, e) {
      const n = e / 2,
        i = Math.sin(n);
      return (
        (this._x = t.x * i),
        (this._y = t.y * i),
        (this._z = t.z * i),
        (this._w = Math.cos(n)),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(t) {
      const e = t.elements,
        n = e[0],
        i = e[4],
        r = e[8],
        a = e[1],
        s = e[5],
        o = e[9],
        l = e[2],
        c = e[6],
        h = e[10],
        u = n + s + h;
      if (u > 0) {
        const t = 0.5 / Math.sqrt(u + 1);
        (this._w = 0.25 / t),
          (this._x = (c - o) * t),
          (this._y = (r - l) * t),
          (this._z = (a - i) * t);
      } else if (n > s && n > h) {
        const t = 2 * Math.sqrt(1 + n - s - h);
        (this._w = (c - o) / t),
          (this._x = 0.25 * t),
          (this._y = (i + a) / t),
          (this._z = (r + l) / t);
      } else if (s > h) {
        const t = 2 * Math.sqrt(1 + s - n - h);
        (this._w = (r - l) / t),
          (this._x = (i + a) / t),
          (this._y = 0.25 * t),
          (this._z = (o + c) / t);
      } else {
        const t = 2 * Math.sqrt(1 + h - n - s);
        (this._w = (a - i) / t),
          (this._x = (r + l) / t),
          (this._y = (o + c) / t),
          (this._z = 0.25 * t);
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(t, e) {
      let n = t.dot(e) + 1;
      return (
        n < Number.EPSILON
          ? ((n = 0),
            Math.abs(t.x) > Math.abs(t.z)
              ? ((this._x = -t.y),
                (this._y = t.x),
                (this._z = 0),
                (this._w = n))
              : ((this._x = 0),
                (this._y = -t.z),
                (this._z = t.y),
                (this._w = n)))
          : ((this._x = t.y * e.z - t.z * e.y),
            (this._y = t.z * e.x - t.x * e.z),
            (this._z = t.x * e.y - t.y * e.x),
            (this._w = n)),
        this.normalize()
      );
    }
    angleTo(t) {
      return 2 * Math.acos(Math.abs(be(this.dot(t), -1, 1)));
    }
    rotateTowards(t, e) {
      const n = this.angleTo(t);
      if (0 === n) return this;
      const i = Math.min(1, e / n);
      return this.slerp(t, i), this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return (
        (this._x *= -1),
        (this._y *= -1),
        (this._z *= -1),
        this._onChangeCallback(),
        this
      );
    }
    dot(t) {
      return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
    }
    lengthSq() {
      return (
        this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
      );
    }
    length() {
      return Math.sqrt(
        this._x * this._x +
          this._y * this._y +
          this._z * this._z +
          this._w * this._w
      );
    }
    normalize() {
      let t = this.length();
      return (
        0 === t
          ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
          : ((t = 1 / t),
            (this._x = this._x * t),
            (this._y = this._y * t),
            (this._z = this._z * t),
            (this._w = this._w * t)),
        this._onChangeCallback(),
        this
      );
    }
    multiply(t) {
      return this.multiplyQuaternions(this, t);
    }
    premultiply(t) {
      return this.multiplyQuaternions(t, this);
    }
    multiplyQuaternions(t, e) {
      const n = t._x,
        i = t._y,
        r = t._z,
        a = t._w,
        s = e._x,
        o = e._y,
        l = e._z,
        c = e._w;
      return (
        (this._x = n * c + a * s + i * l - r * o),
        (this._y = i * c + a * o + r * s - n * l),
        (this._z = r * c + a * l + n * o - i * s),
        (this._w = a * c - n * s - i * o - r * l),
        this._onChangeCallback(),
        this
      );
    }
    slerp(t, e) {
      if (0 === e) return this;
      if (1 === e) return this.copy(t);
      const n = this._x,
        i = this._y,
        r = this._z,
        a = this._w;
      let s = a * t._w + n * t._x + i * t._y + r * t._z;
      if (
        (s < 0
          ? ((this._w = -t._w),
            (this._x = -t._x),
            (this._y = -t._y),
            (this._z = -t._z),
            (s = -s))
          : this.copy(t),
        s >= 1)
      )
        return (this._w = a), (this._x = n), (this._y = i), (this._z = r), this;
      const o = 1 - s * s;
      if (o <= Number.EPSILON) {
        const t = 1 - e;
        return (
          (this._w = t * a + e * this._w),
          (this._x = t * n + e * this._x),
          (this._y = t * i + e * this._y),
          (this._z = t * r + e * this._z),
          this.normalize(),
          this
        );
      }
      const l = Math.sqrt(o),
        c = Math.atan2(l, s),
        h = Math.sin((1 - e) * c) / l,
        u = Math.sin(e * c) / l;
      return (
        (this._w = a * h + this._w * u),
        (this._x = n * h + this._x * u),
        (this._y = i * h + this._y * u),
        (this._z = r * h + this._z * u),
        this._onChangeCallback(),
        this
      );
    }
    slerpQuaternions(t, e, n) {
      return this.copy(t).slerp(e, n);
    }
    random() {
      const t = 2 * Math.PI * Math.random(),
        e = 2 * Math.PI * Math.random(),
        n = Math.random(),
        i = Math.sqrt(1 - n),
        r = Math.sqrt(n);
      return this.set(
        i * Math.sin(t),
        i * Math.cos(t),
        r * Math.sin(e),
        r * Math.cos(e)
      );
    }
    equals(t) {
      return (
        t._x === this._x &&
        t._y === this._y &&
        t._z === this._z &&
        t._w === this._w
      );
    }
    fromArray(t, e = 0) {
      return (
        (this._x = t[e]),
        (this._y = t[e + 1]),
        (this._z = t[e + 2]),
        (this._w = t[e + 3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(t = [], e = 0) {
      return (
        (t[e] = this._x),
        (t[e + 1] = this._y),
        (t[e + 2] = this._z),
        (t[e + 3] = this._w),
        t
      );
    }
    fromBufferAttribute(t, e) {
      return (
        (this._x = t.getX(e)),
        (this._y = t.getY(e)),
        (this._z = t.getZ(e)),
        (this._w = t.getW(e)),
        this._onChangeCallback(),
        this
      );
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(t) {
      return (this._onChangeCallback = t), this;
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w;
    }
  }
  class an {
    constructor(t = 0, e = 0, n = 0) {
      (an.prototype.isVector3 = !0), (this.x = t), (this.y = e), (this.z = n);
    }
    set(t, e, n) {
      return (
        void 0 === n && (n = this.z),
        (this.x = t),
        (this.y = e),
        (this.z = n),
        this
      );
    }
    setScalar(t) {
      return (this.x = t), (this.y = t), (this.z = t), this;
    }
    setX(t) {
      return (this.x = t), this;
    }
    setY(t) {
      return (this.y = t), this;
    }
    setZ(t) {
      return (this.z = t), this;
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        default:
          throw new Error("index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(t) {
      return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
    }
    add(t) {
      return (this.x += t.x), (this.y += t.y), (this.z += t.z), this;
    }
    addScalar(t) {
      return (this.x += t), (this.y += t), (this.z += t), this;
    }
    addVectors(t, e) {
      return (
        (this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), this
      );
    }
    addScaledVector(t, e) {
      return (
        (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this
      );
    }
    sub(t) {
      return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this;
    }
    subScalar(t) {
      return (this.x -= t), (this.y -= t), (this.z -= t), this;
    }
    subVectors(t, e) {
      return (
        (this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), this
      );
    }
    multiply(t) {
      return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this;
    }
    multiplyScalar(t) {
      return (this.x *= t), (this.y *= t), (this.z *= t), this;
    }
    multiplyVectors(t, e) {
      return (
        (this.x = t.x * e.x), (this.y = t.y * e.y), (this.z = t.z * e.z), this
      );
    }
    applyEuler(t) {
      return this.applyQuaternion(on.setFromEuler(t));
    }
    applyAxisAngle(t, e) {
      return this.applyQuaternion(on.setFromAxisAngle(t, e));
    }
    applyMatrix3(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = t.elements;
      return (
        (this.x = r[0] * e + r[3] * n + r[6] * i),
        (this.y = r[1] * e + r[4] * n + r[7] * i),
        (this.z = r[2] * e + r[5] * n + r[8] * i),
        this
      );
    }
    applyNormalMatrix(t) {
      return this.applyMatrix3(t).normalize();
    }
    applyMatrix4(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = t.elements,
        a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
      return (
        (this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a),
        (this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a),
        (this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a),
        this
      );
    }
    applyQuaternion(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = t.x,
        a = t.y,
        s = t.z,
        o = t.w,
        l = 2 * (a * i - s * n),
        c = 2 * (s * e - r * i),
        h = 2 * (r * n - a * e);
      return (
        (this.x = e + o * l + a * h - s * c),
        (this.y = n + o * c + s * l - r * h),
        (this.z = i + o * h + r * c - a * l),
        this
      );
    }
    project(t) {
      return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
        t.projectionMatrix
      );
    }
    unproject(t) {
      return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
        t.matrixWorld
      );
    }
    transformDirection(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = t.elements;
      return (
        (this.x = r[0] * e + r[4] * n + r[8] * i),
        (this.y = r[1] * e + r[5] * n + r[9] * i),
        (this.z = r[2] * e + r[6] * n + r[10] * i),
        this.normalize()
      );
    }
    divide(t) {
      return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    min(t) {
      return (
        (this.x = Math.min(this.x, t.x)),
        (this.y = Math.min(this.y, t.y)),
        (this.z = Math.min(this.z, t.z)),
        this
      );
    }
    max(t) {
      return (
        (this.x = Math.max(this.x, t.x)),
        (this.y = Math.max(this.y, t.y)),
        (this.z = Math.max(this.z, t.z)),
        this
      );
    }
    clamp(t, e) {
      return (
        (this.x = Math.max(t.x, Math.min(e.x, this.x))),
        (this.y = Math.max(t.y, Math.min(e.y, this.y))),
        (this.z = Math.max(t.z, Math.min(e.z, this.z))),
        this
      );
    }
    clampScalar(t, e) {
      return (
        (this.x = Math.max(t, Math.min(e, this.x))),
        (this.y = Math.max(t, Math.min(e, this.y))),
        (this.z = Math.max(t, Math.min(e, this.z))),
        this
      );
    }
    clampLength(t, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(t, Math.min(e, n))
      );
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = Math.trunc(this.x)),
        (this.y = Math.trunc(this.y)),
        (this.z = Math.trunc(this.z)),
        this
      );
    }
    negate() {
      return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
    }
    dot(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return (
        (this.x += (t.x - this.x) * e),
        (this.y += (t.y - this.y) * e),
        (this.z += (t.z - this.z) * e),
        this
      );
    }
    lerpVectors(t, e, n) {
      return (
        (this.x = t.x + (e.x - t.x) * n),
        (this.y = t.y + (e.y - t.y) * n),
        (this.z = t.z + (e.z - t.z) * n),
        this
      );
    }
    cross(t) {
      return this.crossVectors(this, t);
    }
    crossVectors(t, e) {
      const n = t.x,
        i = t.y,
        r = t.z,
        a = e.x,
        s = e.y,
        o = e.z;
      return (
        (this.x = i * o - r * s),
        (this.y = r * a - n * o),
        (this.z = n * s - i * a),
        this
      );
    }
    projectOnVector(t) {
      const e = t.lengthSq();
      if (0 === e) return this.set(0, 0, 0);
      const n = t.dot(this) / e;
      return this.copy(t).multiplyScalar(n);
    }
    projectOnPlane(t) {
      return sn.copy(this).projectOnVector(t), this.sub(sn);
    }
    reflect(t) {
      return this.sub(sn.copy(t).multiplyScalar(2 * this.dot(t)));
    }
    angleTo(t) {
      const e = Math.sqrt(this.lengthSq() * t.lengthSq());
      if (0 === e) return Math.PI / 2;
      const n = this.dot(t) / e;
      return Math.acos(be(n, -1, 1));
    }
    distanceTo(t) {
      return Math.sqrt(this.distanceToSquared(t));
    }
    distanceToSquared(t) {
      const e = this.x - t.x,
        n = this.y - t.y,
        i = this.z - t.z;
      return e * e + n * n + i * i;
    }
    manhattanDistanceTo(t) {
      return (
        Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
      );
    }
    setFromSpherical(t) {
      return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
    }
    setFromSphericalCoords(t, e, n) {
      const i = Math.sin(e) * t;
      return (
        (this.x = i * Math.sin(n)),
        (this.y = Math.cos(e) * t),
        (this.z = i * Math.cos(n)),
        this
      );
    }
    setFromCylindrical(t) {
      return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
    }
    setFromCylindricalCoords(t, e, n) {
      return (
        (this.x = t * Math.sin(e)),
        (this.y = n),
        (this.z = t * Math.cos(e)),
        this
      );
    }
    setFromMatrixPosition(t) {
      const e = t.elements;
      return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
    }
    setFromMatrixScale(t) {
      const e = this.setFromMatrixColumn(t, 0).length(),
        n = this.setFromMatrixColumn(t, 1).length(),
        i = this.setFromMatrixColumn(t, 2).length();
      return (this.x = e), (this.y = n), (this.z = i), this;
    }
    setFromMatrixColumn(t, e) {
      return this.fromArray(t.elements, 4 * e);
    }
    setFromMatrix3Column(t, e) {
      return this.fromArray(t.elements, 3 * e);
    }
    setFromEuler(t) {
      return (this.x = t._x), (this.y = t._y), (this.z = t._z), this;
    }
    setFromColor(t) {
      return (this.x = t.r), (this.y = t.g), (this.z = t.b), this;
    }
    equals(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z;
    }
    fromArray(t, e = 0) {
      return (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this;
    }
    toArray(t = [], e = 0) {
      return (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t;
    }
    fromBufferAttribute(t, e) {
      return (
        (this.x = t.getX(e)), (this.y = t.getY(e)), (this.z = t.getZ(e)), this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        this
      );
    }
    randomDirection() {
      const t = Math.random() * Math.PI * 2,
        e = 2 * Math.random() - 1,
        n = Math.sqrt(1 - e * e);
      return (
        (this.x = n * Math.cos(t)),
        (this.y = e),
        (this.z = n * Math.sin(t)),
        this
      );
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  }
  const sn = new an(),
    on = new rn();
  class ln {
    constructor(
      t = new an(1 / 0, 1 / 0, 1 / 0),
      e = new an(-1 / 0, -1 / 0, -1 / 0)
    ) {
      (this.isBox3 = !0), (this.min = t), (this.max = e);
    }
    set(t, e) {
      return this.min.copy(t), this.max.copy(e), this;
    }
    setFromArray(t) {
      this.makeEmpty();
      for (let e = 0, n = t.length; e < n; e += 3)
        this.expandByPoint(hn.fromArray(t, e));
      return this;
    }
    setFromBufferAttribute(t) {
      this.makeEmpty();
      for (let e = 0, n = t.count; e < n; e++)
        this.expandByPoint(hn.fromBufferAttribute(t, e));
      return this;
    }
    setFromPoints(t) {
      this.makeEmpty();
      for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
      return this;
    }
    setFromCenterAndSize(t, e) {
      const n = hn.copy(e).multiplyScalar(0.5);
      return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
    }
    setFromObject(t, e = !1) {
      return this.makeEmpty(), this.expandByObject(t, e);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return this.min.copy(t.min), this.max.copy(t.max), this;
    }
    makeEmpty() {
      return (
        (this.min.x = this.min.y = this.min.z = 1 / 0),
        (this.max.x = this.max.y = this.max.z = -1 / 0),
        this
      );
    }
    isEmpty() {
      return (
        this.max.x < this.min.x ||
        this.max.y < this.min.y ||
        this.max.z < this.min.z
      );
    }
    getCenter(t) {
      return this.isEmpty()
        ? t.set(0, 0, 0)
        : t.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(t) {
      return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
    }
    expandByPoint(t) {
      return this.min.min(t), this.max.max(t), this;
    }
    expandByVector(t) {
      return this.min.sub(t), this.max.add(t), this;
    }
    expandByScalar(t) {
      return this.min.addScalar(-t), this.max.addScalar(t), this;
    }
    expandByObject(t, e = !1) {
      t.updateWorldMatrix(!1, !1);
      const n = t.geometry;
      if (void 0 !== n) {
        const i = n.getAttribute("position");
        if (!0 === e && void 0 !== i && !0 !== t.isInstancedMesh)
          for (let e = 0, n = i.count; e < n; e++)
            !0 === t.isMesh
              ? t.getVertexPosition(e, hn)
              : hn.fromBufferAttribute(i, e),
              hn.applyMatrix4(t.matrixWorld),
              this.expandByPoint(hn);
        else
          void 0 !== t.boundingBox
            ? (null === t.boundingBox && t.computeBoundingBox(),
              un.copy(t.boundingBox))
            : (null === n.boundingBox && n.computeBoundingBox(),
              un.copy(n.boundingBox)),
            un.applyMatrix4(t.matrixWorld),
            this.union(un);
      }
      const i = t.children;
      for (let t = 0, n = i.length; t < n; t++) this.expandByObject(i[t], e);
      return this;
    }
    containsPoint(t) {
      return (
        t.x >= this.min.x &&
        t.x <= this.max.x &&
        t.y >= this.min.y &&
        t.y <= this.max.y &&
        t.z >= this.min.z &&
        t.z <= this.max.z
      );
    }
    containsBox(t) {
      return (
        this.min.x <= t.min.x &&
        t.max.x <= this.max.x &&
        this.min.y <= t.min.y &&
        t.max.y <= this.max.y &&
        this.min.z <= t.min.z &&
        t.max.z <= this.max.z
      );
    }
    getParameter(t, e) {
      return e.set(
        (t.x - this.min.x) / (this.max.x - this.min.x),
        (t.y - this.min.y) / (this.max.y - this.min.y),
        (t.z - this.min.z) / (this.max.z - this.min.z)
      );
    }
    intersectsBox(t) {
      return (
        t.max.x >= this.min.x &&
        t.min.x <= this.max.x &&
        t.max.y >= this.min.y &&
        t.min.y <= this.max.y &&
        t.max.z >= this.min.z &&
        t.min.z <= this.max.z
      );
    }
    intersectsSphere(t) {
      return (
        this.clampPoint(t.center, hn),
        hn.distanceToSquared(t.center) <= t.radius * t.radius
      );
    }
    intersectsPlane(t) {
      let e, n;
      return (
        t.normal.x > 0
          ? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x))
          : ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
        t.normal.y > 0
          ? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y))
          : ((e += t.normal.y * this.max.y), (n += t.normal.y * this.min.y)),
        t.normal.z > 0
          ? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z))
          : ((e += t.normal.z * this.max.z), (n += t.normal.z * this.min.z)),
        e <= -t.constant && n >= -t.constant
      );
    }
    intersectsTriangle(t) {
      if (this.isEmpty()) return !1;
      this.getCenter(vn),
        xn.subVectors(this.max, vn),
        dn.subVectors(t.a, vn),
        pn.subVectors(t.b, vn),
        fn.subVectors(t.c, vn),
        mn.subVectors(pn, dn),
        gn.subVectors(fn, pn),
        _n.subVectors(dn, fn);
      let e = [
        0,
        -mn.z,
        mn.y,
        0,
        -gn.z,
        gn.y,
        0,
        -_n.z,
        _n.y,
        mn.z,
        0,
        -mn.x,
        gn.z,
        0,
        -gn.x,
        _n.z,
        0,
        -_n.x,
        -mn.y,
        mn.x,
        0,
        -gn.y,
        gn.x,
        0,
        -_n.y,
        _n.x,
        0,
      ];
      return (
        !!Sn(e, dn, pn, fn, xn) &&
        ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
        !!Sn(e, dn, pn, fn, xn) &&
          (Mn.crossVectors(mn, gn),
          (e = [Mn.x, Mn.y, Mn.z]),
          Sn(e, dn, pn, fn, xn)))
      );
    }
    clampPoint(t, e) {
      return e.copy(t).clamp(this.min, this.max);
    }
    distanceToPoint(t) {
      return this.clampPoint(t, hn).distanceTo(t);
    }
    getBoundingSphere(t) {
      return (
        this.isEmpty()
          ? t.makeEmpty()
          : (this.getCenter(t.center),
            (t.radius = 0.5 * this.getSize(hn).length())),
        t
      );
    }
    intersect(t) {
      return (
        this.min.max(t.min),
        this.max.min(t.max),
        this.isEmpty() && this.makeEmpty(),
        this
      );
    }
    union(t) {
      return this.min.min(t.min), this.max.max(t.max), this;
    }
    applyMatrix4(t) {
      return (
        this.isEmpty() ||
          (cn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
          cn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
          cn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
          cn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
          cn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
          cn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
          cn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
          cn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
          this.setFromPoints(cn)),
        this
      );
    }
    translate(t) {
      return this.min.add(t), this.max.add(t), this;
    }
    equals(t) {
      return t.min.equals(this.min) && t.max.equals(this.max);
    }
  }
  const cn = [
      new an(),
      new an(),
      new an(),
      new an(),
      new an(),
      new an(),
      new an(),
      new an(),
    ],
    hn = new an(),
    un = new ln(),
    dn = new an(),
    pn = new an(),
    fn = new an(),
    mn = new an(),
    gn = new an(),
    _n = new an(),
    vn = new an(),
    xn = new an(),
    Mn = new an(),
    yn = new an();
  function Sn(t, e, n, i, r) {
    for (let a = 0, s = t.length - 3; a <= s; a += 3) {
      yn.fromArray(t, a);
      const s =
          r.x * Math.abs(yn.x) + r.y * Math.abs(yn.y) + r.z * Math.abs(yn.z),
        o = e.dot(yn),
        l = n.dot(yn),
        c = i.dot(yn);
      if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > s) return !1;
    }
    return !0;
  }
  const En = new ln(),
    Tn = new an(),
    bn = new an();
  class wn {
    constructor(t = new an(), e = -1) {
      (this.isSphere = !0), (this.center = t), (this.radius = e);
    }
    set(t, e) {
      return this.center.copy(t), (this.radius = e), this;
    }
    setFromPoints(t, e) {
      const n = this.center;
      void 0 !== e ? n.copy(e) : En.setFromPoints(t).getCenter(n);
      let i = 0;
      for (let e = 0, r = t.length; e < r; e++)
        i = Math.max(i, n.distanceToSquared(t[e]));
      return (this.radius = Math.sqrt(i)), this;
    }
    copy(t) {
      return this.center.copy(t.center), (this.radius = t.radius), this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), (this.radius = -1), this;
    }
    containsPoint(t) {
      return t.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(t) {
      return t.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(t) {
      const e = this.radius + t.radius;
      return t.center.distanceToSquared(this.center) <= e * e;
    }
    intersectsBox(t) {
      return t.intersectsSphere(this);
    }
    intersectsPlane(t) {
      return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(t, e) {
      const n = this.center.distanceToSquared(t);
      return (
        e.copy(t),
        n > this.radius * this.radius &&
          (e.sub(this.center).normalize(),
          e.multiplyScalar(this.radius).add(this.center)),
        e
      );
    }
    getBoundingBox(t) {
      return this.isEmpty()
        ? (t.makeEmpty(), t)
        : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
    }
    applyMatrix4(t) {
      return (
        this.center.applyMatrix4(t),
        (this.radius = this.radius * t.getMaxScaleOnAxis()),
        this
      );
    }
    translate(t) {
      return this.center.add(t), this;
    }
    expandByPoint(t) {
      if (this.isEmpty()) return this.center.copy(t), (this.radius = 0), this;
      Tn.subVectors(t, this.center);
      const e = Tn.lengthSq();
      if (e > this.radius * this.radius) {
        const t = Math.sqrt(e),
          n = 0.5 * (t - this.radius);
        this.center.addScaledVector(Tn, n / t), (this.radius += n);
      }
      return this;
    }
    union(t) {
      return t.isEmpty()
        ? this
        : this.isEmpty()
        ? (this.copy(t), this)
        : (!0 === this.center.equals(t.center)
            ? (this.radius = Math.max(this.radius, t.radius))
            : (bn.subVectors(t.center, this.center).setLength(t.radius),
              this.expandByPoint(Tn.copy(t.center).add(bn)),
              this.expandByPoint(Tn.copy(t.center).sub(bn))),
          this);
    }
    equals(t) {
      return t.center.equals(this.center) && t.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const An = new an(),
    Rn = new an(),
    Cn = new an(),
    Pn = new an(),
    Ln = new an(),
    Un = new an(),
    In = new an();
  class Dn {
    constructor(t = new an(), e = new an(0, 0, -1)) {
      (this.origin = t), (this.direction = e);
    }
    set(t, e) {
      return this.origin.copy(t), this.direction.copy(e), this;
    }
    copy(t) {
      return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
    }
    at(t, e) {
      return e.copy(this.origin).addScaledVector(this.direction, t);
    }
    lookAt(t) {
      return this.direction.copy(t).sub(this.origin).normalize(), this;
    }
    recast(t) {
      return this.origin.copy(this.at(t, An)), this;
    }
    closestPointToPoint(t, e) {
      e.subVectors(t, this.origin);
      const n = e.dot(this.direction);
      return n < 0
        ? e.copy(this.origin)
        : e.copy(this.origin).addScaledVector(this.direction, n);
    }
    distanceToPoint(t) {
      return Math.sqrt(this.distanceSqToPoint(t));
    }
    distanceSqToPoint(t) {
      const e = An.subVectors(t, this.origin).dot(this.direction);
      return e < 0
        ? this.origin.distanceToSquared(t)
        : (An.copy(this.origin).addScaledVector(this.direction, e),
          An.distanceToSquared(t));
    }
    distanceSqToSegment(t, e, n, i) {
      Rn.copy(t).add(e).multiplyScalar(0.5),
        Cn.copy(e).sub(t).normalize(),
        Pn.copy(this.origin).sub(Rn);
      const r = 0.5 * t.distanceTo(e),
        a = -this.direction.dot(Cn),
        s = Pn.dot(this.direction),
        o = -Pn.dot(Cn),
        l = Pn.lengthSq(),
        c = Math.abs(1 - a * a);
      let h, u, d, p;
      if (c > 0)
        if (((h = a * o - s), (u = a * s - o), (p = r * c), h >= 0))
          if (u >= -p)
            if (u <= p) {
              const t = 1 / c;
              (h *= t),
                (u *= t),
                (d = h * (h + a * u + 2 * s) + u * (a * h + u + 2 * o) + l);
            } else
              (u = r),
                (h = Math.max(0, -(a * u + s))),
                (d = -h * h + u * (u + 2 * o) + l);
          else
            (u = -r),
              (h = Math.max(0, -(a * u + s))),
              (d = -h * h + u * (u + 2 * o) + l);
        else
          u <= -p
            ? ((h = Math.max(0, -(-a * r + s))),
              (u = h > 0 ? -r : Math.min(Math.max(-r, -o), r)),
              (d = -h * h + u * (u + 2 * o) + l))
            : u <= p
            ? ((h = 0),
              (u = Math.min(Math.max(-r, -o), r)),
              (d = u * (u + 2 * o) + l))
            : ((h = Math.max(0, -(a * r + s))),
              (u = h > 0 ? r : Math.min(Math.max(-r, -o), r)),
              (d = -h * h + u * (u + 2 * o) + l));
      else
        (u = a > 0 ? -r : r),
          (h = Math.max(0, -(a * u + s))),
          (d = -h * h + u * (u + 2 * o) + l);
      return (
        n && n.copy(this.origin).addScaledVector(this.direction, h),
        i && i.copy(Rn).addScaledVector(Cn, u),
        d
      );
    }
    intersectSphere(t, e) {
      An.subVectors(t.center, this.origin);
      const n = An.dot(this.direction),
        i = An.dot(An) - n * n,
        r = t.radius * t.radius;
      if (i > r) return null;
      const a = Math.sqrt(r - i),
        s = n - a,
        o = n + a;
      return o < 0 ? null : s < 0 ? this.at(o, e) : this.at(s, e);
    }
    intersectsSphere(t) {
      return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
    }
    distanceToPlane(t) {
      const e = t.normal.dot(this.direction);
      if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
      const n = -(this.origin.dot(t.normal) + t.constant) / e;
      return n >= 0 ? n : null;
    }
    intersectPlane(t, e) {
      const n = this.distanceToPlane(t);
      return null === n ? null : this.at(n, e);
    }
    intersectsPlane(t) {
      const e = t.distanceToPoint(this.origin);
      return 0 === e || t.normal.dot(this.direction) * e < 0;
    }
    intersectBox(t, e) {
      let n, i, r, a, s, o;
      const l = 1 / this.direction.x,
        c = 1 / this.direction.y,
        h = 1 / this.direction.z,
        u = this.origin;
      return (
        l >= 0
          ? ((n = (t.min.x - u.x) * l), (i = (t.max.x - u.x) * l))
          : ((n = (t.max.x - u.x) * l), (i = (t.min.x - u.x) * l)),
        c >= 0
          ? ((r = (t.min.y - u.y) * c), (a = (t.max.y - u.y) * c))
          : ((r = (t.max.y - u.y) * c), (a = (t.min.y - u.y) * c)),
        n > a || r > i
          ? null
          : ((r > n || isNaN(n)) && (n = r),
            (a < i || isNaN(i)) && (i = a),
            h >= 0
              ? ((s = (t.min.z - u.z) * h), (o = (t.max.z - u.z) * h))
              : ((s = (t.max.z - u.z) * h), (o = (t.min.z - u.z) * h)),
            n > o || s > i
              ? null
              : ((s > n || n != n) && (n = s),
                (o < i || i != i) && (i = o),
                i < 0 ? null : this.at(n >= 0 ? n : i, e)))
      );
    }
    intersectsBox(t) {
      return null !== this.intersectBox(t, An);
    }
    intersectTriangle(t, e, n, i, r) {
      Ln.subVectors(e, t), Un.subVectors(n, t), In.crossVectors(Ln, Un);
      let a,
        s = this.direction.dot(In);
      if (s > 0) {
        if (i) return null;
        a = 1;
      } else {
        if (!(s < 0)) return null;
        (a = -1), (s = -s);
      }
      Pn.subVectors(this.origin, t);
      const o = a * this.direction.dot(Un.crossVectors(Pn, Un));
      if (o < 0) return null;
      const l = a * this.direction.dot(Ln.cross(Pn));
      if (l < 0) return null;
      if (o + l > s) return null;
      const c = -a * Pn.dot(In);
      return c < 0 ? null : this.at(c / s, r);
    }
    applyMatrix4(t) {
      return (
        this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
      );
    }
    equals(t) {
      return t.origin.equals(this.origin) && t.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class Nn {
    constructor(t, e, n, i, r, a, s, o, l, c, h, u, d, p, f, m) {
      (Nn.prototype.isMatrix4 = !0),
        (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
        void 0 !== t &&
          this.set(t, e, n, i, r, a, s, o, l, c, h, u, d, p, f, m);
    }
    set(t, e, n, i, r, a, s, o, l, c, h, u, d, p, f, m) {
      const g = this.elements;
      return (
        (g[0] = t),
        (g[4] = e),
        (g[8] = n),
        (g[12] = i),
        (g[1] = r),
        (g[5] = a),
        (g[9] = s),
        (g[13] = o),
        (g[2] = l),
        (g[6] = c),
        (g[10] = h),
        (g[14] = u),
        (g[3] = d),
        (g[7] = p),
        (g[11] = f),
        (g[15] = m),
        this
      );
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
      return new Nn().fromArray(this.elements);
    }
    copy(t) {
      const e = this.elements,
        n = t.elements;
      return (
        (e[0] = n[0]),
        (e[1] = n[1]),
        (e[2] = n[2]),
        (e[3] = n[3]),
        (e[4] = n[4]),
        (e[5] = n[5]),
        (e[6] = n[6]),
        (e[7] = n[7]),
        (e[8] = n[8]),
        (e[9] = n[9]),
        (e[10] = n[10]),
        (e[11] = n[11]),
        (e[12] = n[12]),
        (e[13] = n[13]),
        (e[14] = n[14]),
        (e[15] = n[15]),
        this
      );
    }
    copyPosition(t) {
      const e = this.elements,
        n = t.elements;
      return (e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this;
    }
    setFromMatrix3(t) {
      const e = t.elements;
      return (
        this.set(
          e[0],
          e[3],
          e[6],
          0,
          e[1],
          e[4],
          e[7],
          0,
          e[2],
          e[5],
          e[8],
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    extractBasis(t, e, n) {
      return (
        t.setFromMatrixColumn(this, 0),
        e.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this
      );
    }
    makeBasis(t, e, n) {
      return (
        this.set(
          t.x,
          e.x,
          n.x,
          0,
          t.y,
          e.y,
          n.y,
          0,
          t.z,
          e.z,
          n.z,
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    extractRotation(t) {
      const e = this.elements,
        n = t.elements,
        i = 1 / On.setFromMatrixColumn(t, 0).length(),
        r = 1 / On.setFromMatrixColumn(t, 1).length(),
        a = 1 / On.setFromMatrixColumn(t, 2).length();
      return (
        (e[0] = n[0] * i),
        (e[1] = n[1] * i),
        (e[2] = n[2] * i),
        (e[3] = 0),
        (e[4] = n[4] * r),
        (e[5] = n[5] * r),
        (e[6] = n[6] * r),
        (e[7] = 0),
        (e[8] = n[8] * a),
        (e[9] = n[9] * a),
        (e[10] = n[10] * a),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        this
      );
    }
    makeRotationFromEuler(t) {
      const e = this.elements,
        n = t.x,
        i = t.y,
        r = t.z,
        a = Math.cos(n),
        s = Math.sin(n),
        o = Math.cos(i),
        l = Math.sin(i),
        c = Math.cos(r),
        h = Math.sin(r);
      if ("XYZ" === t.order) {
        const t = a * c,
          n = a * h,
          i = s * c,
          r = s * h;
        (e[0] = o * c),
          (e[4] = -o * h),
          (e[8] = l),
          (e[1] = n + i * l),
          (e[5] = t - r * l),
          (e[9] = -s * o),
          (e[2] = r - t * l),
          (e[6] = i + n * l),
          (e[10] = a * o);
      } else if ("YXZ" === t.order) {
        const t = o * c,
          n = o * h,
          i = l * c,
          r = l * h;
        (e[0] = t + r * s),
          (e[4] = i * s - n),
          (e[8] = a * l),
          (e[1] = a * h),
          (e[5] = a * c),
          (e[9] = -s),
          (e[2] = n * s - i),
          (e[6] = r + t * s),
          (e[10] = a * o);
      } else if ("ZXY" === t.order) {
        const t = o * c,
          n = o * h,
          i = l * c,
          r = l * h;
        (e[0] = t - r * s),
          (e[4] = -a * h),
          (e[8] = i + n * s),
          (e[1] = n + i * s),
          (e[5] = a * c),
          (e[9] = r - t * s),
          (e[2] = -a * l),
          (e[6] = s),
          (e[10] = a * o);
      } else if ("ZYX" === t.order) {
        const t = a * c,
          n = a * h,
          i = s * c,
          r = s * h;
        (e[0] = o * c),
          (e[4] = i * l - n),
          (e[8] = t * l + r),
          (e[1] = o * h),
          (e[5] = r * l + t),
          (e[9] = n * l - i),
          (e[2] = -l),
          (e[6] = s * o),
          (e[10] = a * o);
      } else if ("YZX" === t.order) {
        const t = a * o,
          n = a * l,
          i = s * o,
          r = s * l;
        (e[0] = o * c),
          (e[4] = r - t * h),
          (e[8] = i * h + n),
          (e[1] = h),
          (e[5] = a * c),
          (e[9] = -s * c),
          (e[2] = -l * c),
          (e[6] = n * h + i),
          (e[10] = t - r * h);
      } else if ("XZY" === t.order) {
        const t = a * o,
          n = a * l,
          i = s * o,
          r = s * l;
        (e[0] = o * c),
          (e[4] = -h),
          (e[8] = l * c),
          (e[1] = t * h + r),
          (e[5] = a * c),
          (e[9] = n * h - i),
          (e[2] = i * h - n),
          (e[6] = s * c),
          (e[10] = r * h + t);
      }
      return (
        (e[3] = 0),
        (e[7] = 0),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        this
      );
    }
    makeRotationFromQuaternion(t) {
      return this.compose(zn, t, Bn);
    }
    lookAt(t, e, n) {
      const i = this.elements;
      return (
        kn.subVectors(t, e),
        0 === kn.lengthSq() && (kn.z = 1),
        kn.normalize(),
        Hn.crossVectors(n, kn),
        0 === Hn.lengthSq() &&
          (1 === Math.abs(n.z) ? (kn.x += 1e-4) : (kn.z += 1e-4),
          kn.normalize(),
          Hn.crossVectors(n, kn)),
        Hn.normalize(),
        Vn.crossVectors(kn, Hn),
        (i[0] = Hn.x),
        (i[4] = Vn.x),
        (i[8] = kn.x),
        (i[1] = Hn.y),
        (i[5] = Vn.y),
        (i[9] = kn.y),
        (i[2] = Hn.z),
        (i[6] = Vn.z),
        (i[10] = kn.z),
        this
      );
    }
    multiply(t) {
      return this.multiplyMatrices(this, t);
    }
    premultiply(t) {
      return this.multiplyMatrices(t, this);
    }
    multiplyMatrices(t, e) {
      const n = t.elements,
        i = e.elements,
        r = this.elements,
        a = n[0],
        s = n[4],
        o = n[8],
        l = n[12],
        c = n[1],
        h = n[5],
        u = n[9],
        d = n[13],
        p = n[2],
        f = n[6],
        m = n[10],
        g = n[14],
        _ = n[3],
        v = n[7],
        x = n[11],
        M = n[15],
        y = i[0],
        S = i[4],
        E = i[8],
        T = i[12],
        b = i[1],
        w = i[5],
        A = i[9],
        R = i[13],
        C = i[2],
        P = i[6],
        L = i[10],
        U = i[14],
        I = i[3],
        D = i[7],
        N = i[11],
        O = i[15];
      return (
        (r[0] = a * y + s * b + o * C + l * I),
        (r[4] = a * S + s * w + o * P + l * D),
        (r[8] = a * E + s * A + o * L + l * N),
        (r[12] = a * T + s * R + o * U + l * O),
        (r[1] = c * y + h * b + u * C + d * I),
        (r[5] = c * S + h * w + u * P + d * D),
        (r[9] = c * E + h * A + u * L + d * N),
        (r[13] = c * T + h * R + u * U + d * O),
        (r[2] = p * y + f * b + m * C + g * I),
        (r[6] = p * S + f * w + m * P + g * D),
        (r[10] = p * E + f * A + m * L + g * N),
        (r[14] = p * T + f * R + m * U + g * O),
        (r[3] = _ * y + v * b + x * C + M * I),
        (r[7] = _ * S + v * w + x * P + M * D),
        (r[11] = _ * E + v * A + x * L + M * N),
        (r[15] = _ * T + v * R + x * U + M * O),
        this
      );
    }
    multiplyScalar(t) {
      const e = this.elements;
      return (
        (e[0] *= t),
        (e[4] *= t),
        (e[8] *= t),
        (e[12] *= t),
        (e[1] *= t),
        (e[5] *= t),
        (e[9] *= t),
        (e[13] *= t),
        (e[2] *= t),
        (e[6] *= t),
        (e[10] *= t),
        (e[14] *= t),
        (e[3] *= t),
        (e[7] *= t),
        (e[11] *= t),
        (e[15] *= t),
        this
      );
    }
    determinant() {
      const t = this.elements,
        e = t[0],
        n = t[4],
        i = t[8],
        r = t[12],
        a = t[1],
        s = t[5],
        o = t[9],
        l = t[13],
        c = t[2],
        h = t[6],
        u = t[10],
        d = t[14];
      return (
        t[3] *
          (+r * o * h -
            i * l * h -
            r * s * u +
            n * l * u +
            i * s * d -
            n * o * d) +
        t[7] *
          (+e * o * d -
            e * l * u +
            r * a * u -
            i * a * d +
            i * l * c -
            r * o * c) +
        t[11] *
          (+e * l * h -
            e * s * d -
            r * a * h +
            n * a * d +
            r * s * c -
            n * l * c) +
        t[15] *
          (-i * s * c -
            e * o * h +
            e * s * u +
            i * a * h -
            n * a * u +
            n * o * c)
      );
    }
    transpose() {
      const t = this.elements;
      let e;
      return (
        (e = t[1]),
        (t[1] = t[4]),
        (t[4] = e),
        (e = t[2]),
        (t[2] = t[8]),
        (t[8] = e),
        (e = t[6]),
        (t[6] = t[9]),
        (t[9] = e),
        (e = t[3]),
        (t[3] = t[12]),
        (t[12] = e),
        (e = t[7]),
        (t[7] = t[13]),
        (t[13] = e),
        (e = t[11]),
        (t[11] = t[14]),
        (t[14] = e),
        this
      );
    }
    setPosition(t, e, n) {
      const i = this.elements;
      return (
        t.isVector3
          ? ((i[12] = t.x), (i[13] = t.y), (i[14] = t.z))
          : ((i[12] = t), (i[13] = e), (i[14] = n)),
        this
      );
    }
    invert() {
      const t = this.elements,
        e = t[0],
        n = t[1],
        i = t[2],
        r = t[3],
        a = t[4],
        s = t[5],
        o = t[6],
        l = t[7],
        c = t[8],
        h = t[9],
        u = t[10],
        d = t[11],
        p = t[12],
        f = t[13],
        m = t[14],
        g = t[15],
        _ =
          h * m * l - f * u * l + f * o * d - s * m * d - h * o * g + s * u * g,
        v =
          p * u * l - c * m * l - p * o * d + a * m * d + c * o * g - a * u * g,
        x =
          c * f * l - p * h * l + p * s * d - a * f * d - c * s * g + a * h * g,
        M =
          p * h * o - c * f * o - p * s * u + a * f * u + c * s * m - a * h * m,
        y = e * _ + n * v + i * x + r * M;
      if (0 === y)
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const S = 1 / y;
      return (
        (t[0] = _ * S),
        (t[1] =
          (f * u * r -
            h * m * r -
            f * i * d +
            n * m * d +
            h * i * g -
            n * u * g) *
          S),
        (t[2] =
          (s * m * r -
            f * o * r +
            f * i * l -
            n * m * l -
            s * i * g +
            n * o * g) *
          S),
        (t[3] =
          (h * o * r -
            s * u * r -
            h * i * l +
            n * u * l +
            s * i * d -
            n * o * d) *
          S),
        (t[4] = v * S),
        (t[5] =
          (c * m * r -
            p * u * r +
            p * i * d -
            e * m * d -
            c * i * g +
            e * u * g) *
          S),
        (t[6] =
          (p * o * r -
            a * m * r -
            p * i * l +
            e * m * l +
            a * i * g -
            e * o * g) *
          S),
        (t[7] =
          (a * u * r -
            c * o * r +
            c * i * l -
            e * u * l -
            a * i * d +
            e * o * d) *
          S),
        (t[8] = x * S),
        (t[9] =
          (p * h * r -
            c * f * r -
            p * n * d +
            e * f * d +
            c * n * g -
            e * h * g) *
          S),
        (t[10] =
          (a * f * r -
            p * s * r +
            p * n * l -
            e * f * l -
            a * n * g +
            e * s * g) *
          S),
        (t[11] =
          (c * s * r -
            a * h * r -
            c * n * l +
            e * h * l +
            a * n * d -
            e * s * d) *
          S),
        (t[12] = M * S),
        (t[13] =
          (c * f * i -
            p * h * i +
            p * n * u -
            e * f * u -
            c * n * m +
            e * h * m) *
          S),
        (t[14] =
          (p * s * i -
            a * f * i -
            p * n * o +
            e * f * o +
            a * n * m -
            e * s * m) *
          S),
        (t[15] =
          (a * h * i -
            c * s * i +
            c * n * o -
            e * h * o -
            a * n * u +
            e * s * u) *
          S),
        this
      );
    }
    scale(t) {
      const e = this.elements,
        n = t.x,
        i = t.y,
        r = t.z;
      return (
        (e[0] *= n),
        (e[4] *= i),
        (e[8] *= r),
        (e[1] *= n),
        (e[5] *= i),
        (e[9] *= r),
        (e[2] *= n),
        (e[6] *= i),
        (e[10] *= r),
        (e[3] *= n),
        (e[7] *= i),
        (e[11] *= r),
        this
      );
    }
    getMaxScaleOnAxis() {
      const t = this.elements,
        e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
        n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
        i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
      return Math.sqrt(Math.max(e, n, i));
    }
    makeTranslation(t, e, n) {
      return (
        t.isVector3
          ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1)
          : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1),
        this
      );
    }
    makeRotationX(t) {
      const e = Math.cos(t),
        n = Math.sin(t);
      return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(t) {
      const e = Math.cos(t),
        n = Math.sin(t);
      return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(t) {
      const e = Math.cos(t),
        n = Math.sin(t);
      return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(t, e) {
      const n = Math.cos(e),
        i = Math.sin(e),
        r = 1 - n,
        a = t.x,
        s = t.y,
        o = t.z,
        l = r * a,
        c = r * s;
      return (
        this.set(
          l * a + n,
          l * s - i * o,
          l * o + i * s,
          0,
          l * s + i * o,
          c * s + n,
          c * o - i * a,
          0,
          l * o - i * s,
          c * o + i * a,
          r * o * o + n,
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    makeScale(t, e, n) {
      return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
    }
    makeShear(t, e, n, i, r, a) {
      return this.set(1, n, r, 0, t, 1, a, 0, e, i, 1, 0, 0, 0, 0, 1), this;
    }
    compose(t, e, n) {
      const i = this.elements,
        r = e._x,
        a = e._y,
        s = e._z,
        o = e._w,
        l = r + r,
        c = a + a,
        h = s + s,
        u = r * l,
        d = r * c,
        p = r * h,
        f = a * c,
        m = a * h,
        g = s * h,
        _ = o * l,
        v = o * c,
        x = o * h,
        M = n.x,
        y = n.y,
        S = n.z;
      return (
        (i[0] = (1 - (f + g)) * M),
        (i[1] = (d + x) * M),
        (i[2] = (p - v) * M),
        (i[3] = 0),
        (i[4] = (d - x) * y),
        (i[5] = (1 - (u + g)) * y),
        (i[6] = (m + _) * y),
        (i[7] = 0),
        (i[8] = (p + v) * S),
        (i[9] = (m - _) * S),
        (i[10] = (1 - (u + f)) * S),
        (i[11] = 0),
        (i[12] = t.x),
        (i[13] = t.y),
        (i[14] = t.z),
        (i[15] = 1),
        this
      );
    }
    decompose(t, e, n) {
      const i = this.elements;
      let r = On.set(i[0], i[1], i[2]).length();
      const a = On.set(i[4], i[5], i[6]).length(),
        s = On.set(i[8], i[9], i[10]).length();
      this.determinant() < 0 && (r = -r),
        (t.x = i[12]),
        (t.y = i[13]),
        (t.z = i[14]),
        Fn.copy(this);
      const o = 1 / r,
        l = 1 / a,
        c = 1 / s;
      return (
        (Fn.elements[0] *= o),
        (Fn.elements[1] *= o),
        (Fn.elements[2] *= o),
        (Fn.elements[4] *= l),
        (Fn.elements[5] *= l),
        (Fn.elements[6] *= l),
        (Fn.elements[8] *= c),
        (Fn.elements[9] *= c),
        (Fn.elements[10] *= c),
        e.setFromRotationMatrix(Fn),
        (n.x = r),
        (n.y = a),
        (n.z = s),
        this
      );
    }
    makePerspective(t, e, n, i, r, a, s = 2e3) {
      const o = this.elements,
        l = (2 * r) / (e - t),
        c = (2 * r) / (n - i),
        h = (e + t) / (e - t),
        u = (n + i) / (n - i);
      let d, p;
      if (s === ve) (d = -(a + r) / (a - r)), (p = (-2 * a * r) / (a - r));
      else {
        if (s !== xe)
          throw new Error(
            "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + s
          );
        (d = -a / (a - r)), (p = (-a * r) / (a - r));
      }
      return (
        (o[0] = l),
        (o[4] = 0),
        (o[8] = h),
        (o[12] = 0),
        (o[1] = 0),
        (o[5] = c),
        (o[9] = u),
        (o[13] = 0),
        (o[2] = 0),
        (o[6] = 0),
        (o[10] = d),
        (o[14] = p),
        (o[3] = 0),
        (o[7] = 0),
        (o[11] = -1),
        (o[15] = 0),
        this
      );
    }
    makeOrthographic(t, e, n, i, r, a, s = 2e3) {
      const o = this.elements,
        l = 1 / (e - t),
        c = 1 / (n - i),
        h = 1 / (a - r),
        u = (e + t) * l,
        d = (n + i) * c;
      let p, f;
      if (s === ve) (p = (a + r) * h), (f = -2 * h);
      else {
        if (s !== xe)
          throw new Error(
            "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + s
          );
        (p = r * h), (f = -1 * h);
      }
      return (
        (o[0] = 2 * l),
        (o[4] = 0),
        (o[8] = 0),
        (o[12] = -u),
        (o[1] = 0),
        (o[5] = 2 * c),
        (o[9] = 0),
        (o[13] = -d),
        (o[2] = 0),
        (o[6] = 0),
        (o[10] = f),
        (o[14] = -p),
        (o[3] = 0),
        (o[7] = 0),
        (o[11] = 0),
        (o[15] = 1),
        this
      );
    }
    equals(t) {
      const e = this.elements,
        n = t.elements;
      for (let t = 0; t < 16; t++) if (e[t] !== n[t]) return !1;
      return !0;
    }
    fromArray(t, e = 0) {
      for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
      return this;
    }
    toArray(t = [], e = 0) {
      const n = this.elements;
      return (
        (t[e] = n[0]),
        (t[e + 1] = n[1]),
        (t[e + 2] = n[2]),
        (t[e + 3] = n[3]),
        (t[e + 4] = n[4]),
        (t[e + 5] = n[5]),
        (t[e + 6] = n[6]),
        (t[e + 7] = n[7]),
        (t[e + 8] = n[8]),
        (t[e + 9] = n[9]),
        (t[e + 10] = n[10]),
        (t[e + 11] = n[11]),
        (t[e + 12] = n[12]),
        (t[e + 13] = n[13]),
        (t[e + 14] = n[14]),
        (t[e + 15] = n[15]),
        t
      );
    }
  }
  const On = new an(),
    Fn = new Nn(),
    zn = new an(0, 0, 0),
    Bn = new an(1, 1, 1),
    Hn = new an(),
    Vn = new an(),
    kn = new an(),
    Gn = new Nn(),
    Wn = new rn();
  class Xn {
    constructor(t = 0, e = 0, n = 0, i = Xn.DEFAULT_ORDER) {
      (this.isEuler = !0),
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._order = i);
    }
    get x() {
      return this._x;
    }
    set x(t) {
      (this._x = t), this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t) {
      (this._y = t), this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t) {
      (this._z = t), this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(t) {
      (this._order = t), this._onChangeCallback();
    }
    set(t, e, n, i = this._order) {
      return (
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._order = i),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(t) {
      return (
        (this._x = t._x),
        (this._y = t._y),
        (this._z = t._z),
        (this._order = t._order),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(t, e = this._order, n = !0) {
      const i = t.elements,
        r = i[0],
        a = i[4],
        s = i[8],
        o = i[1],
        l = i[5],
        c = i[9],
        h = i[2],
        u = i[6],
        d = i[10];
      switch (e) {
        case "XYZ":
          (this._y = Math.asin(be(s, -1, 1))),
            Math.abs(s) < 0.9999999
              ? ((this._x = Math.atan2(-c, d)), (this._z = Math.atan2(-a, r)))
              : ((this._x = Math.atan2(u, l)), (this._z = 0));
          break;
        case "YXZ":
          (this._x = Math.asin(-be(c, -1, 1))),
            Math.abs(c) < 0.9999999
              ? ((this._y = Math.atan2(s, d)), (this._z = Math.atan2(o, l)))
              : ((this._y = Math.atan2(-h, r)), (this._z = 0));
          break;
        case "ZXY":
          (this._x = Math.asin(be(u, -1, 1))),
            Math.abs(u) < 0.9999999
              ? ((this._y = Math.atan2(-h, d)), (this._z = Math.atan2(-a, l)))
              : ((this._y = 0), (this._z = Math.atan2(o, r)));
          break;
        case "ZYX":
          (this._y = Math.asin(-be(h, -1, 1))),
            Math.abs(h) < 0.9999999
              ? ((this._x = Math.atan2(u, d)), (this._z = Math.atan2(o, r)))
              : ((this._x = 0), (this._z = Math.atan2(-a, l)));
          break;
        case "YZX":
          (this._z = Math.asin(be(o, -1, 1))),
            Math.abs(o) < 0.9999999
              ? ((this._x = Math.atan2(-c, l)), (this._y = Math.atan2(-h, r)))
              : ((this._x = 0), (this._y = Math.atan2(s, d)));
          break;
        case "XZY":
          (this._z = Math.asin(-be(a, -1, 1))),
            Math.abs(a) < 0.9999999
              ? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(s, r)))
              : ((this._x = Math.atan2(-c, d)), (this._y = 0));
          break;
        default:
          console.warn(
            "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
              e
          );
      }
      return (this._order = e), !0 === n && this._onChangeCallback(), this;
    }
    setFromQuaternion(t, e, n) {
      return (
        Gn.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Gn, e, n)
      );
    }
    setFromVector3(t, e = this._order) {
      return this.set(t.x, t.y, t.z, e);
    }
    reorder(t) {
      return Wn.setFromEuler(this), this.setFromQuaternion(Wn, t);
    }
    equals(t) {
      return (
        t._x === this._x &&
        t._y === this._y &&
        t._z === this._z &&
        t._order === this._order
      );
    }
    fromArray(t) {
      return (
        (this._x = t[0]),
        (this._y = t[1]),
        (this._z = t[2]),
        void 0 !== t[3] && (this._order = t[3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(t = [], e = 0) {
      return (
        (t[e] = this._x),
        (t[e + 1] = this._y),
        (t[e + 2] = this._z),
        (t[e + 3] = this._order),
        t
      );
    }
    _onChange(t) {
      return (this._onChangeCallback = t), this;
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order;
    }
  }
  Xn.DEFAULT_ORDER = "XYZ";
  class jn {
    constructor() {
      this.mask = 1;
    }
    set(t) {
      this.mask = (1 << t) >>> 0;
    }
    enable(t) {
      this.mask |= 1 << t;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(t) {
      this.mask ^= 1 << t;
    }
    disable(t) {
      this.mask &= ~(1 << t);
    }
    disableAll() {
      this.mask = 0;
    }
    test(t) {
      return !!(this.mask & t.mask);
    }
    isEnabled(t) {
      return !!(this.mask & (1 << t));
    }
  }
  let Yn = 0;
  const qn = new an(),
    Kn = new rn(),
    Zn = new Nn(),
    Jn = new an(),
    $n = new an(),
    Qn = new an(),
    ti = new rn(),
    ei = new an(1, 0, 0),
    ni = new an(0, 1, 0),
    ii = new an(0, 0, 1),
    ri = { type: "added" },
    ai = { type: "removed" },
    si = { type: "childadded", child: null },
    oi = { type: "childremoved", child: null };
  class li extends Me {
    constructor() {
      super(),
        (this.isObject3D = !0),
        Object.defineProperty(this, "id", { value: Yn++ }),
        (this.uuid = Te()),
        (this.name = ""),
        (this.type = "Object3D"),
        (this.parent = null),
        (this.children = []),
        (this.up = li.DEFAULT_UP.clone());
      const t = new an(),
        e = new Xn(),
        n = new rn(),
        i = new an(1, 1, 1);
      e._onChange(function () {
        n.setFromEuler(e, !1);
      }),
        n._onChange(function () {
          e.setFromQuaternion(n, void 0, !1);
        }),
        Object.defineProperties(this, {
          position: { configurable: !0, enumerable: !0, value: t },
          rotation: { configurable: !0, enumerable: !0, value: e },
          quaternion: { configurable: !0, enumerable: !0, value: n },
          scale: { configurable: !0, enumerable: !0, value: i },
          modelViewMatrix: { value: new Nn() },
          normalMatrix: { value: new Le() },
        }),
        (this.matrix = new Nn()),
        (this.matrixWorld = new Nn()),
        (this.matrixAutoUpdate = li.DEFAULT_MATRIX_AUTO_UPDATE),
        (this.matrixWorldAutoUpdate = li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
        (this.matrixWorldNeedsUpdate = !1),
        (this.layers = new jn()),
        (this.visible = !0),
        (this.castShadow = !1),
        (this.receiveShadow = !1),
        (this.frustumCulled = !0),
        (this.renderOrder = 0),
        (this.animations = []),
        (this.userData = {});
    }
    onBeforeShadow() {}
    onAfterShadow() {}
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(t) {
      this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(t),
        this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(t) {
      return this.quaternion.premultiply(t), this;
    }
    setRotationFromAxisAngle(t, e) {
      this.quaternion.setFromAxisAngle(t, e);
    }
    setRotationFromEuler(t) {
      this.quaternion.setFromEuler(t, !0);
    }
    setRotationFromMatrix(t) {
      this.quaternion.setFromRotationMatrix(t);
    }
    setRotationFromQuaternion(t) {
      this.quaternion.copy(t);
    }
    rotateOnAxis(t, e) {
      return Kn.setFromAxisAngle(t, e), this.quaternion.multiply(Kn), this;
    }
    rotateOnWorldAxis(t, e) {
      return Kn.setFromAxisAngle(t, e), this.quaternion.premultiply(Kn), this;
    }
    rotateX(t) {
      return this.rotateOnAxis(ei, t);
    }
    rotateY(t) {
      return this.rotateOnAxis(ni, t);
    }
    rotateZ(t) {
      return this.rotateOnAxis(ii, t);
    }
    translateOnAxis(t, e) {
      return (
        qn.copy(t).applyQuaternion(this.quaternion),
        this.position.add(qn.multiplyScalar(e)),
        this
      );
    }
    translateX(t) {
      return this.translateOnAxis(ei, t);
    }
    translateY(t) {
      return this.translateOnAxis(ni, t);
    }
    translateZ(t) {
      return this.translateOnAxis(ii, t);
    }
    localToWorld(t) {
      return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(t) {
      return (
        this.updateWorldMatrix(!0, !1),
        t.applyMatrix4(Zn.copy(this.matrixWorld).invert())
      );
    }
    lookAt(t, e, n) {
      t.isVector3 ? Jn.copy(t) : Jn.set(t, e, n);
      const i = this.parent;
      this.updateWorldMatrix(!0, !1),
        $n.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight
          ? Zn.lookAt($n, Jn, this.up)
          : Zn.lookAt(Jn, $n, this.up),
        this.quaternion.setFromRotationMatrix(Zn),
        i &&
          (Zn.extractRotation(i.matrixWorld),
          Kn.setFromRotationMatrix(Zn),
          this.quaternion.premultiply(Kn.invert()));
    }
    add(t) {
      if (arguments.length > 1) {
        for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
        return this;
      }
      return t === this
        ? (console.error(
            "THREE.Object3D.add: object can't be added as a child of itself.",
            t
          ),
          this)
        : (t && t.isObject3D
            ? (t.removeFromParent(),
              (t.parent = this),
              this.children.push(t),
              t.dispatchEvent(ri),
              (si.child = t),
              this.dispatchEvent(si),
              (si.child = null))
            : console.error(
                "THREE.Object3D.add: object not an instance of THREE.Object3D.",
                t
              ),
          this);
    }
    remove(t) {
      if (arguments.length > 1) {
        for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
        return this;
      }
      const e = this.children.indexOf(t);
      return (
        -1 !== e &&
          ((t.parent = null),
          this.children.splice(e, 1),
          t.dispatchEvent(ai),
          (oi.child = t),
          this.dispatchEvent(oi),
          (oi.child = null)),
        this
      );
    }
    removeFromParent() {
      const t = this.parent;
      return null !== t && t.remove(this), this;
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(t) {
      return (
        this.updateWorldMatrix(!0, !1),
        Zn.copy(this.matrixWorld).invert(),
        null !== t.parent &&
          (t.parent.updateWorldMatrix(!0, !1),
          Zn.multiply(t.parent.matrixWorld)),
        t.applyMatrix4(Zn),
        t.removeFromParent(),
        (t.parent = this),
        this.children.push(t),
        t.updateWorldMatrix(!1, !0),
        t.dispatchEvent(ri),
        (si.child = t),
        this.dispatchEvent(si),
        (si.child = null),
        this
      );
    }
    getObjectById(t) {
      return this.getObjectByProperty("id", t);
    }
    getObjectByName(t) {
      return this.getObjectByProperty("name", t);
    }
    getObjectByProperty(t, e) {
      if (this[t] === e) return this;
      for (let n = 0, i = this.children.length; n < i; n++) {
        const i = this.children[n].getObjectByProperty(t, e);
        if (void 0 !== i) return i;
      }
    }
    getObjectsByProperty(t, e, n = []) {
      this[t] === e && n.push(this);
      const i = this.children;
      for (let r = 0, a = i.length; r < a; r++)
        i[r].getObjectsByProperty(t, e, n);
      return n;
    }
    getWorldPosition(t) {
      return (
        this.updateWorldMatrix(!0, !1),
        t.setFromMatrixPosition(this.matrixWorld)
      );
    }
    getWorldQuaternion(t) {
      return (
        this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose($n, t, Qn), t
      );
    }
    getWorldScale(t) {
      return (
        this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose($n, ti, t), t
      );
    }
    getWorldDirection(t) {
      this.updateWorldMatrix(!0, !1);
      const e = this.matrixWorld.elements;
      return t.set(e[8], e[9], e[10]).normalize();
    }
    raycast() {}
    traverse(t) {
      t(this);
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t);
    }
    traverseVisible(t) {
      if (!1 === this.visible) return;
      t(this);
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t);
    }
    traverseAncestors(t) {
      const e = this.parent;
      null !== e && (t(e), e.traverseAncestors(t));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale),
        (this.matrixWorldNeedsUpdate = !0);
    }
    updateMatrixWorld(t) {
      this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || t) &&
          (!0 === this.matrixWorldAutoUpdate &&
            (null === this.parent
              ? this.matrixWorld.copy(this.matrix)
              : this.matrixWorld.multiplyMatrices(
                  this.parent.matrixWorld,
                  this.matrix
                )),
          (this.matrixWorldNeedsUpdate = !1),
          (t = !0));
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t);
    }
    updateWorldMatrix(t, e) {
      const n = this.parent;
      if (
        (!0 === t && null !== n && n.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        !0 === this.matrixWorldAutoUpdate &&
          (null === this.parent
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              )),
        !0 === e)
      ) {
        const t = this.children;
        for (let e = 0, n = t.length; e < n; e++)
          t[e].updateWorldMatrix(!1, !0);
      }
    }
    toJSON(t) {
      const e = void 0 === t || "string" == typeof t,
        n = {};
      e &&
        ((t = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          shapes: {},
          skeletons: {},
          animations: {},
          nodes: {},
        }),
        (n.metadata = {
          version: 4.6,
          type: "Object",
          generator: "Object3D.toJSON",
        }));
      const i = {};
      function r(e, n) {
        return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
      }
      if (
        ((i.uuid = this.uuid),
        (i.type = this.type),
        "" !== this.name && (i.name = this.name),
        !0 === this.castShadow && (i.castShadow = !0),
        !0 === this.receiveShadow && (i.receiveShadow = !0),
        !1 === this.visible && (i.visible = !1),
        !1 === this.frustumCulled && (i.frustumCulled = !1),
        0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
        Object.keys(this.userData).length > 0 && (i.userData = this.userData),
        (i.layers = this.layers.mask),
        (i.matrix = this.matrix.toArray()),
        (i.up = this.up.toArray()),
        !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
        this.isInstancedMesh &&
          ((i.type = "InstancedMesh"),
          (i.count = this.count),
          (i.instanceMatrix = this.instanceMatrix.toJSON()),
          null !== this.instanceColor &&
            (i.instanceColor = this.instanceColor.toJSON())),
        this.isBatchedMesh &&
          ((i.type = "BatchedMesh"),
          (i.perObjectFrustumCulled = this.perObjectFrustumCulled),
          (i.sortObjects = this.sortObjects),
          (i.drawRanges = this._drawRanges),
          (i.reservedRanges = this._reservedRanges),
          (i.visibility = this._visibility),
          (i.active = this._active),
          (i.bounds = this._bounds.map((t) => ({
            boxInitialized: t.boxInitialized,
            boxMin: t.box.min.toArray(),
            boxMax: t.box.max.toArray(),
            sphereInitialized: t.sphereInitialized,
            sphereRadius: t.sphere.radius,
            sphereCenter: t.sphere.center.toArray(),
          }))),
          (i.maxInstanceCount = this._maxInstanceCount),
          (i.maxVertexCount = this._maxVertexCount),
          (i.maxIndexCount = this._maxIndexCount),
          (i.geometryInitialized = this._geometryInitialized),
          (i.geometryCount = this._geometryCount),
          (i.matricesTexture = this._matricesTexture.toJSON(t)),
          null !== this._colorsTexture &&
            (i.colorsTexture = this._colorsTexture.toJSON(t)),
          null !== this.boundingSphere &&
            (i.boundingSphere = {
              center: i.boundingSphere.center.toArray(),
              radius: i.boundingSphere.radius,
            }),
          null !== this.boundingBox &&
            (i.boundingBox = {
              min: i.boundingBox.min.toArray(),
              max: i.boundingBox.max.toArray(),
            })),
        this.isScene)
      )
        this.background &&
          (this.background.isColor
            ? (i.background = this.background.toJSON())
            : this.background.isTexture &&
              (i.background = this.background.toJSON(t).uuid)),
          this.environment &&
            this.environment.isTexture &&
            !0 !== this.environment.isRenderTargetTexture &&
            (i.environment = this.environment.toJSON(t).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        i.geometry = r(t.geometries, this.geometry);
        const e = this.geometry.parameters;
        if (void 0 !== e && void 0 !== e.shapes) {
          const n = e.shapes;
          if (Array.isArray(n))
            for (let e = 0, i = n.length; e < i; e++) {
              const i = n[e];
              r(t.shapes, i);
            }
          else r(t.shapes, n);
        }
      }
      if (
        (this.isSkinnedMesh &&
          ((i.bindMode = this.bindMode),
          (i.bindMatrix = this.bindMatrix.toArray()),
          void 0 !== this.skeleton &&
            (r(t.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
        void 0 !== this.material)
      )
        if (Array.isArray(this.material)) {
          const e = [];
          for (let n = 0, i = this.material.length; n < i; n++)
            e.push(r(t.materials, this.material[n]));
          i.material = e;
        } else i.material = r(t.materials, this.material);
      if (this.children.length > 0) {
        i.children = [];
        for (let e = 0; e < this.children.length; e++)
          i.children.push(this.children[e].toJSON(t).object);
      }
      if (this.animations.length > 0) {
        i.animations = [];
        for (let e = 0; e < this.animations.length; e++) {
          const n = this.animations[e];
          i.animations.push(r(t.animations, n));
        }
      }
      if (e) {
        const e = a(t.geometries),
          i = a(t.materials),
          r = a(t.textures),
          s = a(t.images),
          o = a(t.shapes),
          l = a(t.skeletons),
          c = a(t.animations),
          h = a(t.nodes);
        e.length > 0 && (n.geometries = e),
          i.length > 0 && (n.materials = i),
          r.length > 0 && (n.textures = r),
          s.length > 0 && (n.images = s),
          o.length > 0 && (n.shapes = o),
          l.length > 0 && (n.skeletons = l),
          c.length > 0 && (n.animations = c),
          h.length > 0 && (n.nodes = h);
      }
      return (n.object = i), n;
      function a(t) {
        const e = [];
        for (const n in t) {
          const i = t[n];
          delete i.metadata, e.push(i);
        }
        return e;
      }
    }
    clone(t) {
      return new this.constructor().copy(this, t);
    }
    copy(t, e = !0) {
      if (
        ((this.name = t.name),
        this.up.copy(t.up),
        this.position.copy(t.position),
        (this.rotation.order = t.rotation.order),
        this.quaternion.copy(t.quaternion),
        this.scale.copy(t.scale),
        this.matrix.copy(t.matrix),
        this.matrixWorld.copy(t.matrixWorld),
        (this.matrixAutoUpdate = t.matrixAutoUpdate),
        (this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate),
        (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
        (this.layers.mask = t.layers.mask),
        (this.visible = t.visible),
        (this.castShadow = t.castShadow),
        (this.receiveShadow = t.receiveShadow),
        (this.frustumCulled = t.frustumCulled),
        (this.renderOrder = t.renderOrder),
        (this.animations = t.animations.slice()),
        (this.userData = JSON.parse(JSON.stringify(t.userData))),
        !0 === e)
      )
        for (let e = 0; e < t.children.length; e++) {
          const n = t.children[e];
          this.add(n.clone());
        }
      return this;
    }
  }
  (li.DEFAULT_UP = new an(0, 1, 0)),
    (li.DEFAULT_MATRIX_AUTO_UPDATE = !0),
    (li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0);
  const ci = new an(),
    hi = new an(),
    ui = new an(),
    di = new an(),
    pi = new an(),
    fi = new an(),
    mi = new an(),
    gi = new an(),
    _i = new an(),
    vi = new an();
  class xi {
    constructor(t = new an(), e = new an(), n = new an()) {
      (this.a = t), (this.b = e), (this.c = n);
    }
    static getNormal(t, e, n, i) {
      i.subVectors(n, e), ci.subVectors(t, e), i.cross(ci);
      const r = i.lengthSq();
      return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
    }
    static getBarycoord(t, e, n, i, r) {
      ci.subVectors(i, e), hi.subVectors(n, e), ui.subVectors(t, e);
      const a = ci.dot(ci),
        s = ci.dot(hi),
        o = ci.dot(ui),
        l = hi.dot(hi),
        c = hi.dot(ui),
        h = a * l - s * s;
      if (0 === h) return r.set(0, 0, 0), null;
      const u = 1 / h,
        d = (l * o - s * c) * u,
        p = (a * c - s * o) * u;
      return r.set(1 - d - p, p, d);
    }
    static containsPoint(t, e, n, i) {
      return (
        null !== this.getBarycoord(t, e, n, i, di) &&
        di.x >= 0 &&
        di.y >= 0 &&
        di.x + di.y <= 1
      );
    }
    static getInterpolation(t, e, n, i, r, a, s, o) {
      return null === this.getBarycoord(t, e, n, i, di)
        ? ((o.x = 0),
          (o.y = 0),
          "z" in o && (o.z = 0),
          "w" in o && (o.w = 0),
          null)
        : (o.setScalar(0),
          o.addScaledVector(r, di.x),
          o.addScaledVector(a, di.y),
          o.addScaledVector(s, di.z),
          o);
    }
    static isFrontFacing(t, e, n, i) {
      return ci.subVectors(n, e), hi.subVectors(t, e), ci.cross(hi).dot(i) < 0;
    }
    set(t, e, n) {
      return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
    }
    setFromPointsAndIndices(t, e, n, i) {
      return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
    }
    setFromAttributeAndIndices(t, e, n, i) {
      return (
        this.a.fromBufferAttribute(t, e),
        this.b.fromBufferAttribute(t, n),
        this.c.fromBufferAttribute(t, i),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
    }
    getArea() {
      return (
        ci.subVectors(this.c, this.b),
        hi.subVectors(this.a, this.b),
        0.5 * ci.cross(hi).length()
      );
    }
    getMidpoint(t) {
      return t
        .addVectors(this.a, this.b)
        .add(this.c)
        .multiplyScalar(1 / 3);
    }
    getNormal(t) {
      return xi.getNormal(this.a, this.b, this.c, t);
    }
    getPlane(t) {
      return t.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(t, e) {
      return xi.getBarycoord(t, this.a, this.b, this.c, e);
    }
    getInterpolation(t, e, n, i, r) {
      return xi.getInterpolation(t, this.a, this.b, this.c, e, n, i, r);
    }
    containsPoint(t) {
      return xi.containsPoint(t, this.a, this.b, this.c);
    }
    isFrontFacing(t) {
      return xi.isFrontFacing(this.a, this.b, this.c, t);
    }
    intersectsBox(t) {
      return t.intersectsTriangle(this);
    }
    closestPointToPoint(t, e) {
      const n = this.a,
        i = this.b,
        r = this.c;
      let a, s;
      pi.subVectors(i, n), fi.subVectors(r, n), gi.subVectors(t, n);
      const o = pi.dot(gi),
        l = fi.dot(gi);
      if (o <= 0 && l <= 0) return e.copy(n);
      _i.subVectors(t, i);
      const c = pi.dot(_i),
        h = fi.dot(_i);
      if (c >= 0 && h <= c) return e.copy(i);
      const u = o * h - c * l;
      if (u <= 0 && o >= 0 && c <= 0)
        return (a = o / (o - c)), e.copy(n).addScaledVector(pi, a);
      vi.subVectors(t, r);
      const d = pi.dot(vi),
        p = fi.dot(vi);
      if (p >= 0 && d <= p) return e.copy(r);
      const f = d * l - o * p;
      if (f <= 0 && l >= 0 && p <= 0)
        return (s = l / (l - p)), e.copy(n).addScaledVector(fi, s);
      const m = c * p - d * h;
      if (m <= 0 && h - c >= 0 && d - p >= 0)
        return (
          mi.subVectors(r, i),
          (s = (h - c) / (h - c + (d - p))),
          e.copy(i).addScaledVector(mi, s)
        );
      const g = 1 / (m + f + u);
      return (
        (a = f * g),
        (s = u * g),
        e.copy(n).addScaledVector(pi, a).addScaledVector(fi, s)
      );
    }
    equals(t) {
      return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
    }
  }
  const Mi = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    },
    yi = { h: 0, s: 0, l: 0 },
    Si = { h: 0, s: 0, l: 0 };
  function Ei(t, e, n) {
    return (
      n < 0 && (n += 1),
      n > 1 && (n -= 1),
      n < 1 / 6
        ? t + 6 * (e - t) * n
        : n < 0.5
        ? e
        : n < 2 / 3
        ? t + 6 * (e - t) * (2 / 3 - n)
        : t
    );
  }
  class Ti {
    constructor(t, e, n) {
      return (
        (this.isColor = !0),
        (this.r = 1),
        (this.g = 1),
        (this.b = 1),
        this.set(t, e, n)
      );
    }
    set(t, e, n) {
      if (void 0 === e && void 0 === n) {
        const e = t;
        e && e.isColor
          ? this.copy(e)
          : "number" == typeof e
          ? this.setHex(e)
          : "string" == typeof e && this.setStyle(e);
      } else this.setRGB(t, e, n);
      return this;
    }
    setScalar(t) {
      return (this.r = t), (this.g = t), (this.b = t), this;
    }
    setHex(t, e = te) {
      return (
        (t = Math.floor(t)),
        (this.r = ((t >> 16) & 255) / 255),
        (this.g = ((t >> 8) & 255) / 255),
        (this.b = (255 & t) / 255),
        ke.toWorkingColorSpace(this, e),
        this
      );
    }
    setRGB(t, e, n, i = ke.workingColorSpace) {
      return (
        (this.r = t),
        (this.g = e),
        (this.b = n),
        ke.toWorkingColorSpace(this, i),
        this
      );
    }
    setHSL(t, e, n, i = ke.workingColorSpace) {
      if (
        ((t = ((t % (r = 1)) + r) % r),
        (e = be(e, 0, 1)),
        (n = be(n, 0, 1)),
        0 === e)
      )
        this.r = this.g = this.b = n;
      else {
        const i = n <= 0.5 ? n * (1 + e) : n + e - n * e,
          r = 2 * n - i;
        (this.r = Ei(r, i, t + 1 / 3)),
          (this.g = Ei(r, i, t)),
          (this.b = Ei(r, i, t - 1 / 3));
      }
      var r;
      return ke.toWorkingColorSpace(this, i), this;
    }
    setStyle(t, e = te) {
      function n(e) {
        void 0 !== e &&
          parseFloat(e) < 1 &&
          console.warn(
            "THREE.Color: Alpha component of " + t + " will be ignored."
          );
      }
      let i;
      if ((i = /^(\w+)\(([^\)]*)\)/.exec(t))) {
        let r;
        const a = i[1],
          s = i[2];
        switch (a) {
          case "rgb":
          case "rgba":
            if (
              (r =
                /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  s
                ))
            )
              return (
                n(r[4]),
                this.setRGB(
                  Math.min(255, parseInt(r[1], 10)) / 255,
                  Math.min(255, parseInt(r[2], 10)) / 255,
                  Math.min(255, parseInt(r[3], 10)) / 255,
                  e
                )
              );
            if (
              (r =
                /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  s
                ))
            )
              return (
                n(r[4]),
                this.setRGB(
                  Math.min(100, parseInt(r[1], 10)) / 100,
                  Math.min(100, parseInt(r[2], 10)) / 100,
                  Math.min(100, parseInt(r[3], 10)) / 100,
                  e
                )
              );
            break;
          case "hsl":
          case "hsla":
            if (
              (r =
                /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  s
                ))
            )
              return (
                n(r[4]),
                this.setHSL(
                  parseFloat(r[1]) / 360,
                  parseFloat(r[2]) / 100,
                  parseFloat(r[3]) / 100,
                  e
                )
              );
            break;
          default:
            console.warn("THREE.Color: Unknown color model " + t);
        }
      } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(t))) {
        const n = i[1],
          r = n.length;
        if (3 === r)
          return this.setRGB(
            parseInt(n.charAt(0), 16) / 15,
            parseInt(n.charAt(1), 16) / 15,
            parseInt(n.charAt(2), 16) / 15,
            e
          );
        if (6 === r) return this.setHex(parseInt(n, 16), e);
        console.warn("THREE.Color: Invalid hex color " + t);
      } else if (t && t.length > 0) return this.setColorName(t, e);
      return this;
    }
    setColorName(t, e = te) {
      const n = Mi[t.toLowerCase()];
      return (
        void 0 !== n
          ? this.setHex(n, e)
          : console.warn("THREE.Color: Unknown color " + t),
        this
      );
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(t) {
      return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
    }
    copySRGBToLinear(t) {
      return (this.r = Ge(t.r)), (this.g = Ge(t.g)), (this.b = Ge(t.b)), this;
    }
    copyLinearToSRGB(t) {
      return (this.r = We(t.r)), (this.g = We(t.g)), (this.b = We(t.b)), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(t = te) {
      return (
        ke.fromWorkingColorSpace(bi.copy(this), t),
        65536 * Math.round(be(255 * bi.r, 0, 255)) +
          256 * Math.round(be(255 * bi.g, 0, 255)) +
          Math.round(be(255 * bi.b, 0, 255))
      );
    }
    getHexString(t = te) {
      return ("000000" + this.getHex(t).toString(16)).slice(-6);
    }
    getHSL(t, e = ke.workingColorSpace) {
      ke.fromWorkingColorSpace(bi.copy(this), e);
      const n = bi.r,
        i = bi.g,
        r = bi.b,
        a = Math.max(n, i, r),
        s = Math.min(n, i, r);
      let o, l;
      const c = (s + a) / 2;
      if (s === a) (o = 0), (l = 0);
      else {
        const t = a - s;
        switch (((l = c <= 0.5 ? t / (a + s) : t / (2 - a - s)), a)) {
          case n:
            o = (i - r) / t + (i < r ? 6 : 0);
            break;
          case i:
            o = (r - n) / t + 2;
            break;
          case r:
            o = (n - i) / t + 4;
        }
        o /= 6;
      }
      return (t.h = o), (t.s = l), (t.l = c), t;
    }
    getRGB(t, e = ke.workingColorSpace) {
      return (
        ke.fromWorkingColorSpace(bi.copy(this), e),
        (t.r = bi.r),
        (t.g = bi.g),
        (t.b = bi.b),
        t
      );
    }
    getStyle(t = te) {
      ke.fromWorkingColorSpace(bi.copy(this), t);
      const e = bi.r,
        n = bi.g,
        i = bi.b;
      return t !== te
        ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`
        : `rgb(${Math.round(255 * e)},${Math.round(255 * n)},${Math.round(
            255 * i
          )})`;
    }
    offsetHSL(t, e, n) {
      return this.getHSL(yi), this.setHSL(yi.h + t, yi.s + e, yi.l + n);
    }
    add(t) {
      return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
    }
    addColors(t, e) {
      return (
        (this.r = t.r + e.r), (this.g = t.g + e.g), (this.b = t.b + e.b), this
      );
    }
    addScalar(t) {
      return (this.r += t), (this.g += t), (this.b += t), this;
    }
    sub(t) {
      return (
        (this.r = Math.max(0, this.r - t.r)),
        (this.g = Math.max(0, this.g - t.g)),
        (this.b = Math.max(0, this.b - t.b)),
        this
      );
    }
    multiply(t) {
      return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
    }
    multiplyScalar(t) {
      return (this.r *= t), (this.g *= t), (this.b *= t), this;
    }
    lerp(t, e) {
      return (
        (this.r += (t.r - this.r) * e),
        (this.g += (t.g - this.g) * e),
        (this.b += (t.b - this.b) * e),
        this
      );
    }
    lerpColors(t, e, n) {
      return (
        (this.r = t.r + (e.r - t.r) * n),
        (this.g = t.g + (e.g - t.g) * n),
        (this.b = t.b + (e.b - t.b) * n),
        this
      );
    }
    lerpHSL(t, e) {
      this.getHSL(yi), t.getHSL(Si);
      const n = we(yi.h, Si.h, e),
        i = we(yi.s, Si.s, e),
        r = we(yi.l, Si.l, e);
      return this.setHSL(n, i, r), this;
    }
    setFromVector3(t) {
      return (this.r = t.x), (this.g = t.y), (this.b = t.z), this;
    }
    applyMatrix3(t) {
      const e = this.r,
        n = this.g,
        i = this.b,
        r = t.elements;
      return (
        (this.r = r[0] * e + r[3] * n + r[6] * i),
        (this.g = r[1] * e + r[4] * n + r[7] * i),
        (this.b = r[2] * e + r[5] * n + r[8] * i),
        this
      );
    }
    equals(t) {
      return t.r === this.r && t.g === this.g && t.b === this.b;
    }
    fromArray(t, e = 0) {
      return (this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this;
    }
    toArray(t = [], e = 0) {
      return (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t;
    }
    fromBufferAttribute(t, e) {
      return (
        (this.r = t.getX(e)), (this.g = t.getY(e)), (this.b = t.getZ(e)), this
      );
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  }
  const bi = new Ti();
  Ti.NAMES = Mi;
  let wi = 0;
  class Ai extends Me {
    constructor() {
      super(),
        (this.isMaterial = !0),
        Object.defineProperty(this, "id", { value: wi++ }),
        (this.uuid = Te()),
        (this.name = ""),
        (this.type = "Material"),
        (this.blending = 1),
        (this.side = 0),
        (this.vertexColors = !1),
        (this.opacity = 1),
        (this.transparent = !1),
        (this.alphaHash = !1),
        (this.blendSrc = 204),
        (this.blendDst = 205),
        (this.blendEquation = o),
        (this.blendSrcAlpha = null),
        (this.blendDstAlpha = null),
        (this.blendEquationAlpha = null),
        (this.blendColor = new Ti(0, 0, 0)),
        (this.blendAlpha = 0),
        (this.depthFunc = 3),
        (this.depthTest = !0),
        (this.depthWrite = !0),
        (this.stencilWriteMask = 255),
        (this.stencilFunc = 519),
        (this.stencilRef = 0),
        (this.stencilFuncMask = 255),
        (this.stencilFail = le),
        (this.stencilZFail = le),
        (this.stencilZPass = le),
        (this.stencilWrite = !1),
        (this.clippingPlanes = null),
        (this.clipIntersection = !1),
        (this.clipShadows = !1),
        (this.shadowSide = null),
        (this.colorWrite = !0),
        (this.precision = null),
        (this.polygonOffset = !1),
        (this.polygonOffsetFactor = 0),
        (this.polygonOffsetUnits = 0),
        (this.dithering = !1),
        (this.alphaToCoverage = !1),
        (this.premultipliedAlpha = !1),
        (this.forceSinglePass = !1),
        (this.visible = !0),
        (this.toneMapped = !0),
        (this.userData = {}),
        (this.version = 0),
        (this._alphaTest = 0);
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(t) {
      this._alphaTest > 0 != t > 0 && this.version++, (this._alphaTest = t);
    }
    onBeforeCompile() {}
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(t) {
      if (void 0 !== t)
        for (const e in t) {
          const n = t[e];
          if (void 0 === n) {
            console.warn(
              `THREE.Material: parameter '${e}' has value of undefined.`
            );
            continue;
          }
          const i = this[e];
          void 0 !== i
            ? i && i.isColor
              ? i.set(n)
              : i && i.isVector3 && n && n.isVector3
              ? i.copy(n)
              : (this[e] = n)
            : console.warn(
                `THREE.Material: '${e}' is not a property of THREE.${this.type}.`
              );
        }
    }
    toJSON(t) {
      const e = void 0 === t || "string" == typeof t;
      e && (t = { textures: {}, images: {} });
      const n = {
        metadata: {
          version: 4.6,
          type: "Material",
          generator: "Material.toJSON",
        },
      };
      function i(t) {
        const e = [];
        for (const n in t) {
          const i = t[n];
          delete i.metadata, e.push(i);
        }
        return e;
      }
      if (
        ((n.uuid = this.uuid),
        (n.type = this.type),
        "" !== this.name && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        void 0 !== this.roughness && (n.roughness = this.roughness),
        void 0 !== this.metalness && (n.metalness = this.metalness),
        void 0 !== this.sheen && (n.sheen = this.sheen),
        this.sheenColor &&
          this.sheenColor.isColor &&
          (n.sheenColor = this.sheenColor.getHex()),
        void 0 !== this.sheenRoughness &&
          (n.sheenRoughness = this.sheenRoughness),
        this.emissive &&
          this.emissive.isColor &&
          (n.emissive = this.emissive.getHex()),
        void 0 !== this.emissiveIntensity &&
          1 !== this.emissiveIntensity &&
          (n.emissiveIntensity = this.emissiveIntensity),
        this.specular &&
          this.specular.isColor &&
          (n.specular = this.specular.getHex()),
        void 0 !== this.specularIntensity &&
          (n.specularIntensity = this.specularIntensity),
        this.specularColor &&
          this.specularColor.isColor &&
          (n.specularColor = this.specularColor.getHex()),
        void 0 !== this.shininess && (n.shininess = this.shininess),
        void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
        void 0 !== this.clearcoatRoughness &&
          (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap &&
          this.clearcoatMap.isTexture &&
          (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
        this.clearcoatRoughnessMap &&
          this.clearcoatRoughnessMap.isTexture &&
          (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
        this.clearcoatNormalMap &&
          this.clearcoatNormalMap.isTexture &&
          ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
          (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
        void 0 !== this.dispersion && (n.dispersion = this.dispersion),
        void 0 !== this.iridescence && (n.iridescence = this.iridescence),
        void 0 !== this.iridescenceIOR &&
          (n.iridescenceIOR = this.iridescenceIOR),
        void 0 !== this.iridescenceThicknessRange &&
          (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
        this.iridescenceMap &&
          this.iridescenceMap.isTexture &&
          (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid),
        this.iridescenceThicknessMap &&
          this.iridescenceThicknessMap.isTexture &&
          (n.iridescenceThicknessMap =
            this.iridescenceThicknessMap.toJSON(t).uuid),
        void 0 !== this.anisotropy && (n.anisotropy = this.anisotropy),
        void 0 !== this.anisotropyRotation &&
          (n.anisotropyRotation = this.anisotropyRotation),
        this.anisotropyMap &&
          this.anisotropyMap.isTexture &&
          (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
        this.matcap &&
          this.matcap.isTexture &&
          (n.matcap = this.matcap.toJSON(t).uuid),
        this.alphaMap &&
          this.alphaMap.isTexture &&
          (n.alphaMap = this.alphaMap.toJSON(t).uuid),
        this.lightMap &&
          this.lightMap.isTexture &&
          ((n.lightMap = this.lightMap.toJSON(t).uuid),
          (n.lightMapIntensity = this.lightMapIntensity)),
        this.aoMap &&
          this.aoMap.isTexture &&
          ((n.aoMap = this.aoMap.toJSON(t).uuid),
          (n.aoMapIntensity = this.aoMapIntensity)),
        this.bumpMap &&
          this.bumpMap.isTexture &&
          ((n.bumpMap = this.bumpMap.toJSON(t).uuid),
          (n.bumpScale = this.bumpScale)),
        this.normalMap &&
          this.normalMap.isTexture &&
          ((n.normalMap = this.normalMap.toJSON(t).uuid),
          (n.normalMapType = this.normalMapType),
          (n.normalScale = this.normalScale.toArray())),
        this.displacementMap &&
          this.displacementMap.isTexture &&
          ((n.displacementMap = this.displacementMap.toJSON(t).uuid),
          (n.displacementScale = this.displacementScale),
          (n.displacementBias = this.displacementBias)),
        this.roughnessMap &&
          this.roughnessMap.isTexture &&
          (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
        this.metalnessMap &&
          this.metalnessMap.isTexture &&
          (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
        this.emissiveMap &&
          this.emissiveMap.isTexture &&
          (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
        this.specularMap &&
          this.specularMap.isTexture &&
          (n.specularMap = this.specularMap.toJSON(t).uuid),
        this.specularIntensityMap &&
          this.specularIntensityMap.isTexture &&
          (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid),
        this.specularColorMap &&
          this.specularColorMap.isTexture &&
          (n.specularColorMap = this.specularColorMap.toJSON(t).uuid),
        this.envMap &&
          this.envMap.isTexture &&
          ((n.envMap = this.envMap.toJSON(t).uuid),
          void 0 !== this.combine && (n.combine = this.combine)),
        void 0 !== this.envMapRotation &&
          (n.envMapRotation = this.envMapRotation.toArray()),
        void 0 !== this.envMapIntensity &&
          (n.envMapIntensity = this.envMapIntensity),
        void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
        void 0 !== this.refractionRatio &&
          (n.refractionRatio = this.refractionRatio),
        this.gradientMap &&
          this.gradientMap.isTexture &&
          (n.gradientMap = this.gradientMap.toJSON(t).uuid),
        void 0 !== this.transmission && (n.transmission = this.transmission),
        this.transmissionMap &&
          this.transmissionMap.isTexture &&
          (n.transmissionMap = this.transmissionMap.toJSON(t).uuid),
        void 0 !== this.thickness && (n.thickness = this.thickness),
        this.thicknessMap &&
          this.thicknessMap.isTexture &&
          (n.thicknessMap = this.thicknessMap.toJSON(t).uuid),
        void 0 !== this.attenuationDistance &&
          this.attenuationDistance !== 1 / 0 &&
          (n.attenuationDistance = this.attenuationDistance),
        void 0 !== this.attenuationColor &&
          (n.attenuationColor = this.attenuationColor.getHex()),
        void 0 !== this.size && (n.size = this.size),
        null !== this.shadowSide && (n.shadowSide = this.shadowSide),
        void 0 !== this.sizeAttenuation &&
          (n.sizeAttenuation = this.sizeAttenuation),
        1 !== this.blending && (n.blending = this.blending),
        0 !== this.side && (n.side = this.side),
        !0 === this.vertexColors && (n.vertexColors = !0),
        this.opacity < 1 && (n.opacity = this.opacity),
        !0 === this.transparent && (n.transparent = !0),
        204 !== this.blendSrc && (n.blendSrc = this.blendSrc),
        205 !== this.blendDst && (n.blendDst = this.blendDst),
        this.blendEquation !== o && (n.blendEquation = this.blendEquation),
        null !== this.blendSrcAlpha && (n.blendSrcAlpha = this.blendSrcAlpha),
        null !== this.blendDstAlpha && (n.blendDstAlpha = this.blendDstAlpha),
        null !== this.blendEquationAlpha &&
          (n.blendEquationAlpha = this.blendEquationAlpha),
        this.blendColor &&
          this.blendColor.isColor &&
          (n.blendColor = this.blendColor.getHex()),
        0 !== this.blendAlpha && (n.blendAlpha = this.blendAlpha),
        3 !== this.depthFunc && (n.depthFunc = this.depthFunc),
        !1 === this.depthTest && (n.depthTest = this.depthTest),
        !1 === this.depthWrite && (n.depthWrite = this.depthWrite),
        !1 === this.colorWrite && (n.colorWrite = this.colorWrite),
        255 !== this.stencilWriteMask &&
          (n.stencilWriteMask = this.stencilWriteMask),
        519 !== this.stencilFunc && (n.stencilFunc = this.stencilFunc),
        0 !== this.stencilRef && (n.stencilRef = this.stencilRef),
        255 !== this.stencilFuncMask &&
          (n.stencilFuncMask = this.stencilFuncMask),
        this.stencilFail !== le && (n.stencilFail = this.stencilFail),
        this.stencilZFail !== le && (n.stencilZFail = this.stencilZFail),
        this.stencilZPass !== le && (n.stencilZPass = this.stencilZPass),
        !0 === this.stencilWrite && (n.stencilWrite = this.stencilWrite),
        void 0 !== this.rotation &&
          0 !== this.rotation &&
          (n.rotation = this.rotation),
        !0 === this.polygonOffset && (n.polygonOffset = !0),
        0 !== this.polygonOffsetFactor &&
          (n.polygonOffsetFactor = this.polygonOffsetFactor),
        0 !== this.polygonOffsetUnits &&
          (n.polygonOffsetUnits = this.polygonOffsetUnits),
        void 0 !== this.linewidth &&
          1 !== this.linewidth &&
          (n.linewidth = this.linewidth),
        void 0 !== this.dashSize && (n.dashSize = this.dashSize),
        void 0 !== this.gapSize && (n.gapSize = this.gapSize),
        void 0 !== this.scale && (n.scale = this.scale),
        !0 === this.dithering && (n.dithering = !0),
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
        !0 === this.alphaHash && (n.alphaHash = !0),
        !0 === this.alphaToCoverage && (n.alphaToCoverage = !0),
        !0 === this.premultipliedAlpha && (n.premultipliedAlpha = !0),
        !0 === this.forceSinglePass && (n.forceSinglePass = !0),
        !0 === this.wireframe && (n.wireframe = !0),
        this.wireframeLinewidth > 1 &&
          (n.wireframeLinewidth = this.wireframeLinewidth),
        "round" !== this.wireframeLinecap &&
          (n.wireframeLinecap = this.wireframeLinecap),
        "round" !== this.wireframeLinejoin &&
          (n.wireframeLinejoin = this.wireframeLinejoin),
        !0 === this.flatShading && (n.flatShading = !0),
        !1 === this.visible && (n.visible = !1),
        !1 === this.toneMapped && (n.toneMapped = !1),
        !1 === this.fog && (n.fog = !1),
        Object.keys(this.userData).length > 0 && (n.userData = this.userData),
        e)
      ) {
        const e = i(t.textures),
          r = i(t.images);
        e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r);
      }
      return n;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      (this.name = t.name),
        (this.blending = t.blending),
        (this.side = t.side),
        (this.vertexColors = t.vertexColors),
        (this.opacity = t.opacity),
        (this.transparent = t.transparent),
        (this.blendSrc = t.blendSrc),
        (this.blendDst = t.blendDst),
        (this.blendEquation = t.blendEquation),
        (this.blendSrcAlpha = t.blendSrcAlpha),
        (this.blendDstAlpha = t.blendDstAlpha),
        (this.blendEquationAlpha = t.blendEquationAlpha),
        this.blendColor.copy(t.blendColor),
        (this.blendAlpha = t.blendAlpha),
        (this.depthFunc = t.depthFunc),
        (this.depthTest = t.depthTest),
        (this.depthWrite = t.depthWrite),
        (this.stencilWriteMask = t.stencilWriteMask),
        (this.stencilFunc = t.stencilFunc),
        (this.stencilRef = t.stencilRef),
        (this.stencilFuncMask = t.stencilFuncMask),
        (this.stencilFail = t.stencilFail),
        (this.stencilZFail = t.stencilZFail),
        (this.stencilZPass = t.stencilZPass),
        (this.stencilWrite = t.stencilWrite);
      const e = t.clippingPlanes;
      let n = null;
      if (null !== e) {
        const t = e.length;
        n = new Array(t);
        for (let i = 0; i !== t; ++i) n[i] = e[i].clone();
      }
      return (
        (this.clippingPlanes = n),
        (this.clipIntersection = t.clipIntersection),
        (this.clipShadows = t.clipShadows),
        (this.shadowSide = t.shadowSide),
        (this.colorWrite = t.colorWrite),
        (this.precision = t.precision),
        (this.polygonOffset = t.polygonOffset),
        (this.polygonOffsetFactor = t.polygonOffsetFactor),
        (this.polygonOffsetUnits = t.polygonOffsetUnits),
        (this.dithering = t.dithering),
        (this.alphaTest = t.alphaTest),
        (this.alphaHash = t.alphaHash),
        (this.alphaToCoverage = t.alphaToCoverage),
        (this.premultipliedAlpha = t.premultipliedAlpha),
        (this.forceSinglePass = t.forceSinglePass),
        (this.visible = t.visible),
        (this.toneMapped = t.toneMapped),
        (this.userData = JSON.parse(JSON.stringify(t.userData))),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(t) {
      !0 === t && this.version++;
    }
    onBuild() {
      console.warn("Material: onBuild() has been removed.");
    }
    onBeforeRender() {
      console.warn("Material: onBeforeRender() has been removed.");
    }
  }
  class Ri extends Ai {
    constructor(t) {
      super(),
        (this.isMeshBasicMaterial = !0),
        (this.type = "MeshBasicMaterial"),
        (this.color = new Ti(16777215)),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.envMapRotation = new Xn()),
        (this.combine = b),
        (this.reflectivity = 1),
        (this.refractionRatio = 0.98),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.fog = !0),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        this.color.copy(t.color),
        (this.map = t.map),
        (this.lightMap = t.lightMap),
        (this.lightMapIntensity = t.lightMapIntensity),
        (this.aoMap = t.aoMap),
        (this.aoMapIntensity = t.aoMapIntensity),
        (this.specularMap = t.specularMap),
        (this.alphaMap = t.alphaMap),
        (this.envMap = t.envMap),
        this.envMapRotation.copy(t.envMapRotation),
        (this.combine = t.combine),
        (this.reflectivity = t.reflectivity),
        (this.refractionRatio = t.refractionRatio),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.wireframeLinecap = t.wireframeLinecap),
        (this.wireframeLinejoin = t.wireframeLinejoin),
        (this.fog = t.fog),
        this
      );
    }
  }
  const Ci = new an(),
    Pi = new Pe();
  class Li {
    constructor(t, e, n = !1) {
      if (Array.isArray(t))
        throw new TypeError(
          "THREE.BufferAttribute: array should be a Typed Array."
        );
      (this.isBufferAttribute = !0),
        (this.name = ""),
        (this.array = t),
        (this.itemSize = e),
        (this.count = void 0 !== t ? t.length / e : 0),
        (this.normalized = n),
        (this.usage = 35044),
        (this._updateRange = { offset: 0, count: -1 }),
        (this.updateRanges = []),
        (this.gpuType = tt),
        (this.version = 0);
    }
    onUploadCallback() {}
    set needsUpdate(t) {
      !0 === t && this.version++;
    }
    get updateRange() {
      return (
        Fe(
          "THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."
        ),
        this._updateRange
      );
    }
    setUsage(t) {
      return (this.usage = t), this;
    }
    addUpdateRange(t, e) {
      this.updateRanges.push({ start: t, count: e });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(t) {
      return (
        (this.name = t.name),
        (this.array = new t.array.constructor(t.array)),
        (this.itemSize = t.itemSize),
        (this.count = t.count),
        (this.normalized = t.normalized),
        (this.usage = t.usage),
        (this.gpuType = t.gpuType),
        this
      );
    }
    copyAt(t, e, n) {
      (t *= this.itemSize), (n *= e.itemSize);
      for (let i = 0, r = this.itemSize; i < r; i++)
        this.array[t + i] = e.array[n + i];
      return this;
    }
    copyArray(t) {
      return this.array.set(t), this;
    }
    applyMatrix3(t) {
      if (2 === this.itemSize)
        for (let e = 0, n = this.count; e < n; e++)
          Pi.fromBufferAttribute(this, e),
            Pi.applyMatrix3(t),
            this.setXY(e, Pi.x, Pi.y);
      else if (3 === this.itemSize)
        for (let e = 0, n = this.count; e < n; e++)
          Ci.fromBufferAttribute(this, e),
            Ci.applyMatrix3(t),
            this.setXYZ(e, Ci.x, Ci.y, Ci.z);
      return this;
    }
    applyMatrix4(t) {
      for (let e = 0, n = this.count; e < n; e++)
        Ci.fromBufferAttribute(this, e),
          Ci.applyMatrix4(t),
          this.setXYZ(e, Ci.x, Ci.y, Ci.z);
      return this;
    }
    applyNormalMatrix(t) {
      for (let e = 0, n = this.count; e < n; e++)
        Ci.fromBufferAttribute(this, e),
          Ci.applyNormalMatrix(t),
          this.setXYZ(e, Ci.x, Ci.y, Ci.z);
      return this;
    }
    transformDirection(t) {
      for (let e = 0, n = this.count; e < n; e++)
        Ci.fromBufferAttribute(this, e),
          Ci.transformDirection(t),
          this.setXYZ(e, Ci.x, Ci.y, Ci.z);
      return this;
    }
    set(t, e = 0) {
      return this.array.set(t, e), this;
    }
    getComponent(t, e) {
      let n = this.array[t * this.itemSize + e];
      return this.normalized && (n = Ae(n, this.array)), n;
    }
    setComponent(t, e, n) {
      return (
        this.normalized && (n = Re(n, this.array)),
        (this.array[t * this.itemSize + e] = n),
        this
      );
    }
    getX(t) {
      let e = this.array[t * this.itemSize];
      return this.normalized && (e = Ae(e, this.array)), e;
    }
    setX(t, e) {
      return (
        this.normalized && (e = Re(e, this.array)),
        (this.array[t * this.itemSize] = e),
        this
      );
    }
    getY(t) {
      let e = this.array[t * this.itemSize + 1];
      return this.normalized && (e = Ae(e, this.array)), e;
    }
    setY(t, e) {
      return (
        this.normalized && (e = Re(e, this.array)),
        (this.array[t * this.itemSize + 1] = e),
        this
      );
    }
    getZ(t) {
      let e = this.array[t * this.itemSize + 2];
      return this.normalized && (e = Ae(e, this.array)), e;
    }
    setZ(t, e) {
      return (
        this.normalized && (e = Re(e, this.array)),
        (this.array[t * this.itemSize + 2] = e),
        this
      );
    }
    getW(t) {
      let e = this.array[t * this.itemSize + 3];
      return this.normalized && (e = Ae(e, this.array)), e;
    }
    setW(t, e) {
      return (
        this.normalized && (e = Re(e, this.array)),
        (this.array[t * this.itemSize + 3] = e),
        this
      );
    }
    setXY(t, e, n) {
      return (
        (t *= this.itemSize),
        this.normalized && ((e = Re(e, this.array)), (n = Re(n, this.array))),
        (this.array[t + 0] = e),
        (this.array[t + 1] = n),
        this
      );
    }
    setXYZ(t, e, n, i) {
      return (
        (t *= this.itemSize),
        this.normalized &&
          ((e = Re(e, this.array)),
          (n = Re(n, this.array)),
          (i = Re(i, this.array))),
        (this.array[t + 0] = e),
        (this.array[t + 1] = n),
        (this.array[t + 2] = i),
        this
      );
    }
    setXYZW(t, e, n, i, r) {
      return (
        (t *= this.itemSize),
        this.normalized &&
          ((e = Re(e, this.array)),
          (n = Re(n, this.array)),
          (i = Re(i, this.array)),
          (r = Re(r, this.array))),
        (this.array[t + 0] = e),
        (this.array[t + 1] = n),
        (this.array[t + 2] = i),
        (this.array[t + 3] = r),
        this
      );
    }
    onUpload(t) {
      return (this.onUploadCallback = t), this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const t = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.from(this.array),
        normalized: this.normalized,
      };
      return (
        "" !== this.name && (t.name = this.name),
        35044 !== this.usage && (t.usage = this.usage),
        t
      );
    }
  }
  class Ui extends Li {
    constructor(t, e, n) {
      super(new Uint16Array(t), e, n);
    }
  }
  class Ii extends Li {
    constructor(t, e, n) {
      super(new Uint32Array(t), e, n);
    }
  }
  class Di extends Li {
    constructor(t, e, n) {
      super(new Float32Array(t), e, n);
    }
  }
  let Ni = 0;
  const Oi = new Nn(),
    Fi = new li(),
    zi = new an(),
    Bi = new ln(),
    Hi = new ln(),
    Vi = new an();
  class ki extends Me {
    constructor() {
      super(),
        (this.isBufferGeometry = !0),
        Object.defineProperty(this, "id", { value: Ni++ }),
        (this.uuid = Te()),
        (this.name = ""),
        (this.type = "BufferGeometry"),
        (this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.morphTargetsRelative = !1),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.drawRange = { start: 0, count: 1 / 0 }),
        (this.userData = {});
    }
    getIndex() {
      return this.index;
    }
    setIndex(t) {
      return (
        Array.isArray(t)
          ? (this.index = new (Ie(t) ? Ii : Ui)(t, 1))
          : (this.index = t),
        this
      );
    }
    getAttribute(t) {
      return this.attributes[t];
    }
    setAttribute(t, e) {
      return (this.attributes[t] = e), this;
    }
    deleteAttribute(t) {
      return delete this.attributes[t], this;
    }
    hasAttribute(t) {
      return void 0 !== this.attributes[t];
    }
    addGroup(t, e, n = 0) {
      this.groups.push({ start: t, count: e, materialIndex: n });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(t, e) {
      (this.drawRange.start = t), (this.drawRange.count = e);
    }
    applyMatrix4(t) {
      const e = this.attributes.position;
      void 0 !== e && (e.applyMatrix4(t), (e.needsUpdate = !0));
      const n = this.attributes.normal;
      if (void 0 !== n) {
        const e = new Le().getNormalMatrix(t);
        n.applyNormalMatrix(e), (n.needsUpdate = !0);
      }
      const i = this.attributes.tangent;
      return (
        void 0 !== i && (i.transformDirection(t), (i.needsUpdate = !0)),
        null !== this.boundingBox && this.computeBoundingBox(),
        null !== this.boundingSphere && this.computeBoundingSphere(),
        this
      );
    }
    applyQuaternion(t) {
      return Oi.makeRotationFromQuaternion(t), this.applyMatrix4(Oi), this;
    }
    rotateX(t) {
      return Oi.makeRotationX(t), this.applyMatrix4(Oi), this;
    }
    rotateY(t) {
      return Oi.makeRotationY(t), this.applyMatrix4(Oi), this;
    }
    rotateZ(t) {
      return Oi.makeRotationZ(t), this.applyMatrix4(Oi), this;
    }
    translate(t, e, n) {
      return Oi.makeTranslation(t, e, n), this.applyMatrix4(Oi), this;
    }
    scale(t, e, n) {
      return Oi.makeScale(t, e, n), this.applyMatrix4(Oi), this;
    }
    lookAt(t) {
      return (
        Fi.lookAt(t), Fi.updateMatrix(), this.applyMatrix4(Fi.matrix), this
      );
    }
    center() {
      return (
        this.computeBoundingBox(),
        this.boundingBox.getCenter(zi).negate(),
        this.translate(zi.x, zi.y, zi.z),
        this
      );
    }
    setFromPoints(t) {
      const e = [];
      for (let n = 0, i = t.length; n < i; n++) {
        const i = t[n];
        e.push(i.x, i.y, i.z || 0);
      }
      return this.setAttribute("position", new Di(e, 3)), this;
    }
    computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new ln());
      const t = this.attributes.position,
        e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute)
        return (
          console.error(
            "THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
            this
          ),
          void this.boundingBox.set(
            new an(-1 / 0, -1 / 0, -1 / 0),
            new an(1 / 0, 1 / 0, 1 / 0)
          )
        );
      if (void 0 !== t) {
        if ((this.boundingBox.setFromBufferAttribute(t), e))
          for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            Bi.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (Vi.addVectors(this.boundingBox.min, Bi.min),
                  this.boundingBox.expandByPoint(Vi),
                  Vi.addVectors(this.boundingBox.max, Bi.max),
                  this.boundingBox.expandByPoint(Vi))
                : (this.boundingBox.expandByPoint(Bi.min),
                  this.boundingBox.expandByPoint(Bi.max));
          }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) ||
        isNaN(this.boundingBox.min.y) ||
        isNaN(this.boundingBox.min.z)) &&
        console.error(
          'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
          this
        );
    }
    computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new wn());
      const t = this.attributes.position,
        e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute)
        return (
          console.error(
            "THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
            this
          ),
          void this.boundingSphere.set(new an(), 1 / 0)
        );
      if (t) {
        const n = this.boundingSphere.center;
        if ((Bi.setFromBufferAttribute(t), e))
          for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            Hi.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (Vi.addVectors(Bi.min, Hi.min),
                  Bi.expandByPoint(Vi),
                  Vi.addVectors(Bi.max, Hi.max),
                  Bi.expandByPoint(Vi))
                : (Bi.expandByPoint(Hi.min), Bi.expandByPoint(Hi.max));
          }
        Bi.getCenter(n);
        let i = 0;
        for (let e = 0, r = t.count; e < r; e++)
          Vi.fromBufferAttribute(t, e),
            (i = Math.max(i, n.distanceToSquared(Vi)));
        if (e)
          for (let r = 0, a = e.length; r < a; r++) {
            const a = e[r],
              s = this.morphTargetsRelative;
            for (let e = 0, r = a.count; e < r; e++)
              Vi.fromBufferAttribute(a, e),
                s && (zi.fromBufferAttribute(t, e), Vi.add(zi)),
                (i = Math.max(i, n.distanceToSquared(Vi)));
          }
        (this.boundingSphere.radius = Math.sqrt(i)),
          isNaN(this.boundingSphere.radius) &&
            console.error(
              'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
              this
            );
      }
    }
    computeTangents() {
      const t = this.index,
        e = this.attributes;
      if (
        null === t ||
        void 0 === e.position ||
        void 0 === e.normal ||
        void 0 === e.uv
      )
        return void console.error(
          "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
        );
      const n = e.position,
        i = e.normal,
        r = e.uv;
      !1 === this.hasAttribute("tangent") &&
        this.setAttribute("tangent", new Li(new Float32Array(4 * n.count), 4));
      const a = this.getAttribute("tangent"),
        s = [],
        o = [];
      for (let t = 0; t < n.count; t++) (s[t] = new an()), (o[t] = new an());
      const l = new an(),
        c = new an(),
        h = new an(),
        u = new Pe(),
        d = new Pe(),
        p = new Pe(),
        f = new an(),
        m = new an();
      function g(t, e, i) {
        l.fromBufferAttribute(n, t),
          c.fromBufferAttribute(n, e),
          h.fromBufferAttribute(n, i),
          u.fromBufferAttribute(r, t),
          d.fromBufferAttribute(r, e),
          p.fromBufferAttribute(r, i),
          c.sub(l),
          h.sub(l),
          d.sub(u),
          p.sub(u);
        const a = 1 / (d.x * p.y - p.x * d.y);
        isFinite(a) &&
          (f
            .copy(c)
            .multiplyScalar(p.y)
            .addScaledVector(h, -d.y)
            .multiplyScalar(a),
          m
            .copy(h)
            .multiplyScalar(d.x)
            .addScaledVector(c, -p.x)
            .multiplyScalar(a),
          s[t].add(f),
          s[e].add(f),
          s[i].add(f),
          o[t].add(m),
          o[e].add(m),
          o[i].add(m));
      }
      let _ = this.groups;
      0 === _.length && (_ = [{ start: 0, count: t.count }]);
      for (let e = 0, n = _.length; e < n; ++e) {
        const n = _[e],
          i = n.start;
        for (let e = i, r = i + n.count; e < r; e += 3)
          g(t.getX(e + 0), t.getX(e + 1), t.getX(e + 2));
      }
      const v = new an(),
        x = new an(),
        M = new an(),
        y = new an();
      function S(t) {
        M.fromBufferAttribute(i, t), y.copy(M);
        const e = s[t];
        v.copy(e),
          v.sub(M.multiplyScalar(M.dot(e))).normalize(),
          x.crossVectors(y, e);
        const n = x.dot(o[t]) < 0 ? -1 : 1;
        a.setXYZW(t, v.x, v.y, v.z, n);
      }
      for (let e = 0, n = _.length; e < n; ++e) {
        const n = _[e],
          i = n.start;
        for (let e = i, r = i + n.count; e < r; e += 3)
          S(t.getX(e + 0)), S(t.getX(e + 1)), S(t.getX(e + 2));
      }
    }
    computeVertexNormals() {
      const t = this.index,
        e = this.getAttribute("position");
      if (void 0 !== e) {
        let n = this.getAttribute("normal");
        if (void 0 === n)
          (n = new Li(new Float32Array(3 * e.count), 3)),
            this.setAttribute("normal", n);
        else for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
        const i = new an(),
          r = new an(),
          a = new an(),
          s = new an(),
          o = new an(),
          l = new an(),
          c = new an(),
          h = new an();
        if (t)
          for (let u = 0, d = t.count; u < d; u += 3) {
            const d = t.getX(u + 0),
              p = t.getX(u + 1),
              f = t.getX(u + 2);
            i.fromBufferAttribute(e, d),
              r.fromBufferAttribute(e, p),
              a.fromBufferAttribute(e, f),
              c.subVectors(a, r),
              h.subVectors(i, r),
              c.cross(h),
              s.fromBufferAttribute(n, d),
              o.fromBufferAttribute(n, p),
              l.fromBufferAttribute(n, f),
              s.add(c),
              o.add(c),
              l.add(c),
              n.setXYZ(d, s.x, s.y, s.z),
              n.setXYZ(p, o.x, o.y, o.z),
              n.setXYZ(f, l.x, l.y, l.z);
          }
        else
          for (let t = 0, s = e.count; t < s; t += 3)
            i.fromBufferAttribute(e, t + 0),
              r.fromBufferAttribute(e, t + 1),
              a.fromBufferAttribute(e, t + 2),
              c.subVectors(a, r),
              h.subVectors(i, r),
              c.cross(h),
              n.setXYZ(t + 0, c.x, c.y, c.z),
              n.setXYZ(t + 1, c.x, c.y, c.z),
              n.setXYZ(t + 2, c.x, c.y, c.z);
        this.normalizeNormals(), (n.needsUpdate = !0);
      }
    }
    normalizeNormals() {
      const t = this.attributes.normal;
      for (let e = 0, n = t.count; e < n; e++)
        Vi.fromBufferAttribute(t, e),
          Vi.normalize(),
          t.setXYZ(e, Vi.x, Vi.y, Vi.z);
    }
    toNonIndexed() {
      function t(t, e) {
        const n = t.array,
          i = t.itemSize,
          r = t.normalized,
          a = new n.constructor(e.length * i);
        let s = 0,
          o = 0;
        for (let r = 0, l = e.length; r < l; r++) {
          s = t.isInterleavedBufferAttribute
            ? e[r] * t.data.stride + t.offset
            : e[r] * i;
          for (let t = 0; t < i; t++) a[o++] = n[s++];
        }
        return new Li(a, i, r);
      }
      if (null === this.index)
        return (
          console.warn(
            "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
          ),
          this
        );
      const e = new ki(),
        n = this.index.array,
        i = this.attributes;
      for (const r in i) {
        const a = t(i[r], n);
        e.setAttribute(r, a);
      }
      const r = this.morphAttributes;
      for (const i in r) {
        const a = [],
          s = r[i];
        for (let e = 0, i = s.length; e < i; e++) {
          const i = t(s[e], n);
          a.push(i);
        }
        e.morphAttributes[i] = a;
      }
      e.morphTargetsRelative = this.morphTargetsRelative;
      const a = this.groups;
      for (let t = 0, n = a.length; t < n; t++) {
        const n = a[t];
        e.addGroup(n.start, n.count, n.materialIndex);
      }
      return e;
    }
    toJSON() {
      const t = {
        metadata: {
          version: 4.6,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON",
        },
      };
      if (
        ((t.uuid = this.uuid),
        (t.type = this.type),
        "" !== this.name && (t.name = this.name),
        Object.keys(this.userData).length > 0 && (t.userData = this.userData),
        void 0 !== this.parameters)
      ) {
        const e = this.parameters;
        for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
        return t;
      }
      t.data = { attributes: {} };
      const e = this.index;
      null !== e &&
        (t.data.index = {
          type: e.array.constructor.name,
          array: Array.prototype.slice.call(e.array),
        });
      const n = this.attributes;
      for (const e in n) {
        const i = n[e];
        t.data.attributes[e] = i.toJSON(t.data);
      }
      const i = {};
      let r = !1;
      for (const e in this.morphAttributes) {
        const n = this.morphAttributes[e],
          a = [];
        for (let e = 0, i = n.length; e < i; e++) {
          const i = n[e];
          a.push(i.toJSON(t.data));
        }
        a.length > 0 && ((i[e] = a), (r = !0));
      }
      r &&
        ((t.data.morphAttributes = i),
        (t.data.morphTargetsRelative = this.morphTargetsRelative));
      const a = this.groups;
      a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
      const s = this.boundingSphere;
      return (
        null !== s &&
          (t.data.boundingSphere = {
            center: s.center.toArray(),
            radius: s.radius,
          }),
        t
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      (this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null);
      const e = {};
      this.name = t.name;
      const n = t.index;
      null !== n && this.setIndex(n.clone(e));
      const i = t.attributes;
      for (const t in i) {
        const n = i[t];
        this.setAttribute(t, n.clone(e));
      }
      const r = t.morphAttributes;
      for (const t in r) {
        const n = [],
          i = r[t];
        for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
        this.morphAttributes[t] = n;
      }
      this.morphTargetsRelative = t.morphTargetsRelative;
      const a = t.groups;
      for (let t = 0, e = a.length; t < e; t++) {
        const e = a[t];
        this.addGroup(e.start, e.count, e.materialIndex);
      }
      const s = t.boundingBox;
      null !== s && (this.boundingBox = s.clone());
      const o = t.boundingSphere;
      return (
        null !== o && (this.boundingSphere = o.clone()),
        (this.drawRange.start = t.drawRange.start),
        (this.drawRange.count = t.drawRange.count),
        (this.userData = t.userData),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  const Gi = new Nn(),
    Wi = new Dn(),
    Xi = new wn(),
    ji = new an(),
    Yi = new an(),
    qi = new an(),
    Ki = new an(),
    Zi = new an(),
    Ji = new an(),
    $i = new Pe(),
    Qi = new Pe(),
    tr = new Pe(),
    er = new an(),
    nr = new an(),
    ir = new an(),
    rr = new an(),
    ar = new an();
  class sr extends li {
    constructor(t = new ki(), e = new Ri()) {
      super(),
        (this.isMesh = !0),
        (this.type = "Mesh"),
        (this.geometry = t),
        (this.material = e),
        this.updateMorphTargets();
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        void 0 !== t.morphTargetInfluences &&
          (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
        void 0 !== t.morphTargetDictionary &&
          (this.morphTargetDictionary = Object.assign(
            {},
            t.morphTargetDictionary
          )),
        (this.material = Array.isArray(t.material)
          ? t.material.slice()
          : t.material),
        (this.geometry = t.geometry),
        this
      );
    }
    updateMorphTargets() {
      const t = this.geometry.morphAttributes,
        e = Object.keys(t);
      if (e.length > 0) {
        const n = t[e[0]];
        if (void 0 !== n) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let t = 0, e = n.length; t < e; t++) {
            const e = n[t].name || String(t);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[e] = t);
          }
        }
      }
    }
    getVertexPosition(t, e) {
      const n = this.geometry,
        i = n.attributes.position,
        r = n.morphAttributes.position,
        a = n.morphTargetsRelative;
      e.fromBufferAttribute(i, t);
      const s = this.morphTargetInfluences;
      if (r && s) {
        Ji.set(0, 0, 0);
        for (let n = 0, i = r.length; n < i; n++) {
          const i = s[n],
            o = r[n];
          0 !== i &&
            (Zi.fromBufferAttribute(o, t),
            a ? Ji.addScaledVector(Zi, i) : Ji.addScaledVector(Zi.sub(e), i));
        }
        e.add(Ji);
      }
      return e;
    }
    raycast(t, e) {
      const n = this.geometry,
        i = this.material,
        r = this.matrixWorld;
      if (void 0 !== i) {
        if (
          (null === n.boundingSphere && n.computeBoundingSphere(),
          Xi.copy(n.boundingSphere),
          Xi.applyMatrix4(r),
          Wi.copy(t.ray).recast(t.near),
          !1 === Xi.containsPoint(Wi.origin))
        ) {
          if (null === Wi.intersectSphere(Xi, ji)) return;
          if (Wi.origin.distanceToSquared(ji) > (t.far - t.near) ** 2) return;
        }
        Gi.copy(r).invert(),
          Wi.copy(t.ray).applyMatrix4(Gi),
          (null !== n.boundingBox && !1 === Wi.intersectsBox(n.boundingBox)) ||
            this._computeIntersections(t, e, Wi);
      }
    }
    _computeIntersections(t, e, n) {
      let i;
      const r = this.geometry,
        a = this.material,
        s = r.index,
        o = r.attributes.position,
        l = r.attributes.uv,
        c = r.attributes.uv1,
        h = r.attributes.normal,
        u = r.groups,
        d = r.drawRange;
      if (null !== s)
        if (Array.isArray(a))
          for (let r = 0, o = u.length; r < o; r++) {
            const o = u[r],
              p = a[o.materialIndex];
            for (
              let r = Math.max(o.start, d.start),
                a = Math.min(
                  s.count,
                  Math.min(o.start + o.count, d.start + d.count)
                );
              r < a;
              r += 3
            )
              (i = or(
                this,
                p,
                t,
                n,
                l,
                c,
                h,
                s.getX(r),
                s.getX(r + 1),
                s.getX(r + 2)
              )),
                i &&
                  ((i.faceIndex = Math.floor(r / 3)),
                  (i.face.materialIndex = o.materialIndex),
                  e.push(i));
          }
        else
          for (
            let r = Math.max(0, d.start),
              o = Math.min(s.count, d.start + d.count);
            r < o;
            r += 3
          )
            (i = or(
              this,
              a,
              t,
              n,
              l,
              c,
              h,
              s.getX(r),
              s.getX(r + 1),
              s.getX(r + 2)
            )),
              i && ((i.faceIndex = Math.floor(r / 3)), e.push(i));
      else if (void 0 !== o)
        if (Array.isArray(a))
          for (let r = 0, s = u.length; r < s; r++) {
            const s = u[r],
              p = a[s.materialIndex];
            for (
              let r = Math.max(s.start, d.start),
                a = Math.min(
                  o.count,
                  Math.min(s.start + s.count, d.start + d.count)
                );
              r < a;
              r += 3
            )
              (i = or(this, p, t, n, l, c, h, r, r + 1, r + 2)),
                i &&
                  ((i.faceIndex = Math.floor(r / 3)),
                  (i.face.materialIndex = s.materialIndex),
                  e.push(i));
          }
        else
          for (
            let r = Math.max(0, d.start),
              s = Math.min(o.count, d.start + d.count);
            r < s;
            r += 3
          )
            (i = or(this, a, t, n, l, c, h, r, r + 1, r + 2)),
              i && ((i.faceIndex = Math.floor(r / 3)), e.push(i));
    }
  }
  function or(t, e, n, i, r, a, s, o, l, c) {
    t.getVertexPosition(o, Yi),
      t.getVertexPosition(l, qi),
      t.getVertexPosition(c, Ki);
    const h = (function (t, e, n, i, r, a, s, o) {
      let l;
      if (
        ((l =
          1 === e.side
            ? i.intersectTriangle(s, a, r, !0, o)
            : i.intersectTriangle(r, a, s, 0 === e.side, o)),
        null === l)
      )
        return null;
      ar.copy(o), ar.applyMatrix4(t.matrixWorld);
      const c = n.ray.origin.distanceTo(ar);
      return c < n.near || c > n.far
        ? null
        : { distance: c, point: ar.clone(), object: t };
    })(t, e, n, i, Yi, qi, Ki, rr);
    if (h) {
      r &&
        ($i.fromBufferAttribute(r, o),
        Qi.fromBufferAttribute(r, l),
        tr.fromBufferAttribute(r, c),
        (h.uv = xi.getInterpolation(rr, Yi, qi, Ki, $i, Qi, tr, new Pe()))),
        a &&
          ($i.fromBufferAttribute(a, o),
          Qi.fromBufferAttribute(a, l),
          tr.fromBufferAttribute(a, c),
          (h.uv1 = xi.getInterpolation(rr, Yi, qi, Ki, $i, Qi, tr, new Pe()))),
        s &&
          (er.fromBufferAttribute(s, o),
          nr.fromBufferAttribute(s, l),
          ir.fromBufferAttribute(s, c),
          (h.normal = xi.getInterpolation(
            rr,
            Yi,
            qi,
            Ki,
            er,
            nr,
            ir,
            new an()
          )),
          h.normal.dot(i.direction) > 0 && h.normal.multiplyScalar(-1));
      const t = { a: o, b: l, c, normal: new an(), materialIndex: 0 };
      xi.getNormal(Yi, qi, Ki, t.normal), (h.face = t);
    }
    return h;
  }
  class lr extends ki {
    constructor(t = 1, e = 1, n = 1, i = 1, r = 1, a = 1) {
      super(),
        (this.type = "BoxGeometry"),
        (this.parameters = {
          width: t,
          height: e,
          depth: n,
          widthSegments: i,
          heightSegments: r,
          depthSegments: a,
        });
      const s = this;
      (i = Math.floor(i)), (r = Math.floor(r)), (a = Math.floor(a));
      const o = [],
        l = [],
        c = [],
        h = [];
      let u = 0,
        d = 0;
      function p(t, e, n, i, r, a, p, f, m, g, _) {
        const v = a / m,
          x = p / g,
          M = a / 2,
          y = p / 2,
          S = f / 2,
          E = m + 1,
          T = g + 1;
        let b = 0,
          w = 0;
        const A = new an();
        for (let a = 0; a < T; a++) {
          const s = a * x - y;
          for (let o = 0; o < E; o++) {
            const u = o * v - M;
            (A[t] = u * i),
              (A[e] = s * r),
              (A[n] = S),
              l.push(A.x, A.y, A.z),
              (A[t] = 0),
              (A[e] = 0),
              (A[n] = f > 0 ? 1 : -1),
              c.push(A.x, A.y, A.z),
              h.push(o / m),
              h.push(1 - a / g),
              (b += 1);
          }
        }
        for (let t = 0; t < g; t++)
          for (let e = 0; e < m; e++) {
            const n = u + e + E * t,
              i = u + e + E * (t + 1),
              r = u + (e + 1) + E * (t + 1),
              a = u + (e + 1) + E * t;
            o.push(n, i, a), o.push(i, r, a), (w += 6);
          }
        s.addGroup(d, w, _), (d += w), (u += b);
      }
      p("z", "y", "x", -1, -1, n, e, t, a, r, 0),
        p("z", "y", "x", 1, -1, n, e, -t, a, r, 1),
        p("x", "z", "y", 1, 1, t, n, e, i, a, 2),
        p("x", "z", "y", 1, -1, t, n, -e, i, a, 3),
        p("x", "y", "z", 1, -1, t, e, n, i, r, 4),
        p("x", "y", "z", -1, -1, t, e, -n, i, r, 5),
        this.setIndex(o),
        this.setAttribute("position", new Di(l, 3)),
        this.setAttribute("normal", new Di(c, 3)),
        this.setAttribute("uv", new Di(h, 2));
    }
    copy(t) {
      return (
        super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
      );
    }
    static fromJSON(t) {
      return new lr(
        t.width,
        t.height,
        t.depth,
        t.widthSegments,
        t.heightSegments,
        t.depthSegments
      );
    }
  }
  function cr(t) {
    const e = {};
    for (const n in t) {
      e[n] = {};
      for (const i in t[n]) {
        const r = t[n][i];
        r &&
        (r.isColor ||
          r.isMatrix3 ||
          r.isMatrix4 ||
          r.isVector2 ||
          r.isVector3 ||
          r.isVector4 ||
          r.isTexture ||
          r.isQuaternion)
          ? r.isRenderTargetTexture
            ? (console.warn(
                "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
              ),
              (e[n][i] = null))
            : (e[n][i] = r.clone())
          : Array.isArray(r)
          ? (e[n][i] = r.slice())
          : (e[n][i] = r);
      }
    }
    return e;
  }
  function hr(t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const i = cr(t[n]);
      for (const t in i) e[t] = i[t];
    }
    return e;
  }
  function ur(t) {
    const e = t.getRenderTarget();
    return null === e
      ? t.outputColorSpace
      : !0 === e.isXRRenderTarget
      ? e.texture.colorSpace
      : ke.workingColorSpace;
  }
  const dr = { clone: cr, merge: hr };
  class pr extends Ai {
    constructor(t) {
      super(),
        (this.isShaderMaterial = !0),
        (this.type = "ShaderMaterial"),
        (this.defines = {}),
        (this.uniforms = {}),
        (this.uniformsGroups = []),
        (this.vertexShader =
          "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"),
        (this.fragmentShader =
          "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}"),
        (this.linewidth = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.fog = !1),
        (this.lights = !1),
        (this.clipping = !1),
        (this.forceSinglePass = !0),
        (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
        (this.defaultAttributeValues = {
          color: [1, 1, 1],
          uv: [0, 0],
          uv1: [0, 0],
        }),
        (this.index0AttributeName = void 0),
        (this.uniformsNeedUpdate = !1),
        (this.glslVersion = null),
        void 0 !== t && this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        (this.fragmentShader = t.fragmentShader),
        (this.vertexShader = t.vertexShader),
        (this.uniforms = cr(t.uniforms)),
        (this.uniformsGroups = (function (t) {
          const e = [];
          for (let n = 0; n < t.length; n++) e.push(t[n].clone());
          return e;
        })(t.uniformsGroups)),
        (this.defines = Object.assign({}, t.defines)),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.fog = t.fog),
        (this.lights = t.lights),
        (this.clipping = t.clipping),
        (this.extensions = Object.assign({}, t.extensions)),
        (this.glslVersion = t.glslVersion),
        this
      );
    }
    toJSON(t) {
      const e = super.toJSON(t);
      (e.glslVersion = this.glslVersion), (e.uniforms = {});
      for (const n in this.uniforms) {
        const i = this.uniforms[n].value;
        i && i.isTexture
          ? (e.uniforms[n] = { type: "t", value: i.toJSON(t).uuid })
          : i && i.isColor
          ? (e.uniforms[n] = { type: "c", value: i.getHex() })
          : i && i.isVector2
          ? (e.uniforms[n] = { type: "v2", value: i.toArray() })
          : i && i.isVector3
          ? (e.uniforms[n] = { type: "v3", value: i.toArray() })
          : i && i.isVector4
          ? (e.uniforms[n] = { type: "v4", value: i.toArray() })
          : i && i.isMatrix3
          ? (e.uniforms[n] = { type: "m3", value: i.toArray() })
          : i && i.isMatrix4
          ? (e.uniforms[n] = { type: "m4", value: i.toArray() })
          : (e.uniforms[n] = { value: i });
      }
      Object.keys(this.defines).length > 0 && (e.defines = this.defines),
        (e.vertexShader = this.vertexShader),
        (e.fragmentShader = this.fragmentShader),
        (e.lights = this.lights),
        (e.clipping = this.clipping);
      const n = {};
      for (const t in this.extensions) !0 === this.extensions[t] && (n[t] = !0);
      return Object.keys(n).length > 0 && (e.extensions = n), e;
    }
  }
  class fr extends li {
    constructor() {
      super(),
        (this.isCamera = !0),
        (this.type = "Camera"),
        (this.matrixWorldInverse = new Nn()),
        (this.projectionMatrix = new Nn()),
        (this.projectionMatrixInverse = new Nn()),
        (this.coordinateSystem = ve);
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        this.matrixWorldInverse.copy(t.matrixWorldInverse),
        this.projectionMatrix.copy(t.projectionMatrix),
        this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
        (this.coordinateSystem = t.coordinateSystem),
        this
      );
    }
    getWorldDirection(t) {
      return super.getWorldDirection(t).negate();
    }
    updateMatrixWorld(t) {
      super.updateMatrixWorld(t),
        this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(t, e) {
      super.updateWorldMatrix(t, e),
        this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const mr = new an(),
    gr = new Pe(),
    _r = new Pe();
  class vr extends fr {
    constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
      super(),
        (this.isPerspectiveCamera = !0),
        (this.type = "PerspectiveCamera"),
        (this.fov = t),
        (this.zoom = 1),
        (this.near = n),
        (this.far = i),
        (this.focus = 10),
        (this.aspect = e),
        (this.view = null),
        (this.filmGauge = 35),
        (this.filmOffset = 0),
        this.updateProjectionMatrix();
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        (this.fov = t.fov),
        (this.zoom = t.zoom),
        (this.near = t.near),
        (this.far = t.far),
        (this.focus = t.focus),
        (this.aspect = t.aspect),
        (this.view = null === t.view ? null : Object.assign({}, t.view)),
        (this.filmGauge = t.filmGauge),
        (this.filmOffset = t.filmOffset),
        this
      );
    }
    setFocalLength(t) {
      const e = (0.5 * this.getFilmHeight()) / t;
      (this.fov = 2 * Ee * Math.atan(e)), this.updateProjectionMatrix();
    }
    getFocalLength() {
      const t = Math.tan(0.5 * Se * this.fov);
      return (0.5 * this.getFilmHeight()) / t;
    }
    getEffectiveFOV() {
      return 2 * Ee * Math.atan(Math.tan(0.5 * Se * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    getViewBounds(t, e, n) {
      mr.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
        e.set(mr.x, mr.y).multiplyScalar(-t / mr.z),
        mr.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
        n.set(mr.x, mr.y).multiplyScalar(-t / mr.z);
    }
    getViewSize(t, e) {
      return this.getViewBounds(t, gr, _r), e.subVectors(_r, gr);
    }
    setViewOffset(t, e, n, i, r, a) {
      (this.aspect = t / e),
        null === this.view &&
          (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1,
          }),
        (this.view.enabled = !0),
        (this.view.fullWidth = t),
        (this.view.fullHeight = e),
        (this.view.offsetX = n),
        (this.view.offsetY = i),
        (this.view.width = r),
        (this.view.height = a),
        this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = !1),
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t = this.near;
      let e = (t * Math.tan(0.5 * Se * this.fov)) / this.zoom,
        n = 2 * e,
        i = this.aspect * n,
        r = -0.5 * i;
      const a = this.view;
      if (null !== this.view && this.view.enabled) {
        const t = a.fullWidth,
          s = a.fullHeight;
        (r += (a.offsetX * i) / t),
          (e -= (a.offsetY * n) / s),
          (i *= a.width / t),
          (n *= a.height / s);
      }
      const s = this.filmOffset;
      0 !== s && (r += (t * s) / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(
          r,
          r + i,
          e,
          e - n,
          t,
          this.far,
          this.coordinateSystem
        ),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (
        (e.object.fov = this.fov),
        (e.object.zoom = this.zoom),
        (e.object.near = this.near),
        (e.object.far = this.far),
        (e.object.focus = this.focus),
        (e.object.aspect = this.aspect),
        null !== this.view && (e.object.view = Object.assign({}, this.view)),
        (e.object.filmGauge = this.filmGauge),
        (e.object.filmOffset = this.filmOffset),
        e
      );
    }
  }
  const xr = -90;
  class Mr extends li {
    constructor(t, e, n) {
      super(),
        (this.type = "CubeCamera"),
        (this.renderTarget = n),
        (this.coordinateSystem = null),
        (this.activeMipmapLevel = 0);
      const i = new vr(xr, 1, t, e);
      (i.layers = this.layers), this.add(i);
      const r = new vr(xr, 1, t, e);
      (r.layers = this.layers), this.add(r);
      const a = new vr(xr, 1, t, e);
      (a.layers = this.layers), this.add(a);
      const s = new vr(xr, 1, t, e);
      (s.layers = this.layers), this.add(s);
      const o = new vr(xr, 1, t, e);
      (o.layers = this.layers), this.add(o);
      const l = new vr(xr, 1, t, e);
      (l.layers = this.layers), this.add(l);
    }
    updateCoordinateSystem() {
      const t = this.coordinateSystem,
        e = this.children.concat(),
        [n, i, r, a, s, o] = e;
      for (const t of e) this.remove(t);
      if (t === ve)
        n.up.set(0, 1, 0),
          n.lookAt(1, 0, 0),
          i.up.set(0, 1, 0),
          i.lookAt(-1, 0, 0),
          r.up.set(0, 0, -1),
          r.lookAt(0, 1, 0),
          a.up.set(0, 0, 1),
          a.lookAt(0, -1, 0),
          s.up.set(0, 1, 0),
          s.lookAt(0, 0, 1),
          o.up.set(0, 1, 0),
          o.lookAt(0, 0, -1);
      else {
        if (t !== xe)
          throw new Error(
            "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
              t
          );
        n.up.set(0, -1, 0),
          n.lookAt(-1, 0, 0),
          i.up.set(0, -1, 0),
          i.lookAt(1, 0, 0),
          r.up.set(0, 0, 1),
          r.lookAt(0, 1, 0),
          a.up.set(0, 0, -1),
          a.lookAt(0, -1, 0),
          s.up.set(0, -1, 0),
          s.lookAt(0, 0, 1),
          o.up.set(0, -1, 0),
          o.lookAt(0, 0, -1);
      }
      for (const t of e) this.add(t), t.updateMatrixWorld();
    }
    update(t, e) {
      null === this.parent && this.updateMatrixWorld();
      const { renderTarget: n, activeMipmapLevel: i } = this;
      this.coordinateSystem !== t.coordinateSystem &&
        ((this.coordinateSystem = t.coordinateSystem),
        this.updateCoordinateSystem());
      const [r, a, s, o, l, c] = this.children,
        h = t.getRenderTarget(),
        u = t.getActiveCubeFace(),
        d = t.getActiveMipmapLevel(),
        p = t.xr.enabled;
      t.xr.enabled = !1;
      const f = n.texture.generateMipmaps;
      (n.texture.generateMipmaps = !1),
        t.setRenderTarget(n, 0, i),
        t.render(e, r),
        t.setRenderTarget(n, 1, i),
        t.render(e, a),
        t.setRenderTarget(n, 2, i),
        t.render(e, s),
        t.setRenderTarget(n, 3, i),
        t.render(e, o),
        t.setRenderTarget(n, 4, i),
        t.render(e, l),
        (n.texture.generateMipmaps = f),
        t.setRenderTarget(n, 5, i),
        t.render(e, c),
        t.setRenderTarget(h, u, d),
        (t.xr.enabled = p),
        (n.texture.needsPMREMUpdate = !0);
    }
  }
  class yr extends Je {
    constructor(t, e, n, i, r, a, s, o, l, c) {
      super(
        (t = void 0 !== t ? t : []),
        (e = void 0 !== e ? e : O),
        n,
        i,
        r,
        a,
        s,
        o,
        l,
        c
      ),
        (this.isCubeTexture = !0),
        (this.flipY = !1);
    }
    get images() {
      return this.image;
    }
    set images(t) {
      this.image = t;
    }
  }
  class Sr extends tn {
    constructor(t = 1, e = {}) {
      super(t, t, e), (this.isWebGLCubeRenderTarget = !0);
      const n = { width: t, height: t, depth: 1 },
        i = [n, n, n, n, n, n];
      (this.texture = new yr(
        i,
        e.mapping,
        e.wrapS,
        e.wrapT,
        e.magFilter,
        e.minFilter,
        e.format,
        e.type,
        e.anisotropy,
        e.colorSpace
      )),
        (this.texture.isRenderTargetTexture = !0),
        (this.texture.generateMipmaps =
          void 0 !== e.generateMipmaps && e.generateMipmaps),
        (this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : X);
    }
    fromEquirectangularTexture(t, e) {
      (this.texture.type = e.type),
        (this.texture.colorSpace = e.colorSpace),
        (this.texture.generateMipmaps = e.generateMipmaps),
        (this.texture.minFilter = e.minFilter),
        (this.texture.magFilter = e.magFilter);
      const n = { tEquirect: { value: null } },
        i =
          "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
        r =
          "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
        a = new lr(5, 5, 5),
        s = new pr({
          name: "CubemapFromEquirect",
          uniforms: cr(n),
          vertexShader: i,
          fragmentShader: r,
          side: 1,
          blending: 0,
        });
      s.uniforms.tEquirect.value = e;
      const o = new sr(a, s),
        l = e.minFilter;
      return (
        e.minFilter === Y && (e.minFilter = X),
        new Mr(1, 10, this).update(t, o),
        (e.minFilter = l),
        o.geometry.dispose(),
        o.material.dispose(),
        this
      );
    }
    clear(t, e, n, i) {
      const r = t.getRenderTarget();
      for (let r = 0; r < 6; r++) t.setRenderTarget(this, r), t.clear(e, n, i);
      t.setRenderTarget(r);
    }
  }
  const Er = new an(),
    Tr = new an(),
    br = new Le();
  class wr {
    constructor(t = new an(1, 0, 0), e = 0) {
      (this.isPlane = !0), (this.normal = t), (this.constant = e);
    }
    set(t, e) {
      return this.normal.copy(t), (this.constant = e), this;
    }
    setComponents(t, e, n, i) {
      return this.normal.set(t, e, n), (this.constant = i), this;
    }
    setFromNormalAndCoplanarPoint(t, e) {
      return this.normal.copy(t), (this.constant = -e.dot(this.normal)), this;
    }
    setFromCoplanarPoints(t, e, n) {
      const i = Er.subVectors(n, e).cross(Tr.subVectors(t, e)).normalize();
      return this.setFromNormalAndCoplanarPoint(i, t), this;
    }
    copy(t) {
      return this.normal.copy(t.normal), (this.constant = t.constant), this;
    }
    normalize() {
      const t = 1 / this.normal.length();
      return this.normal.multiplyScalar(t), (this.constant *= t), this;
    }
    negate() {
      return (this.constant *= -1), this.normal.negate(), this;
    }
    distanceToPoint(t) {
      return this.normal.dot(t) + this.constant;
    }
    distanceToSphere(t) {
      return this.distanceToPoint(t.center) - t.radius;
    }
    projectPoint(t, e) {
      return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
    }
    intersectLine(t, e) {
      const n = t.delta(Er),
        i = this.normal.dot(n);
      if (0 === i)
        return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
      const r = -(t.start.dot(this.normal) + this.constant) / i;
      return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(n, r);
    }
    intersectsLine(t) {
      const e = this.distanceToPoint(t.start),
        n = this.distanceToPoint(t.end);
      return (e < 0 && n > 0) || (n < 0 && e > 0);
    }
    intersectsBox(t) {
      return t.intersectsPlane(this);
    }
    intersectsSphere(t) {
      return t.intersectsPlane(this);
    }
    coplanarPoint(t) {
      return t.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(t, e) {
      const n = e || br.getNormalMatrix(t),
        i = this.coplanarPoint(Er).applyMatrix4(t),
        r = this.normal.applyMatrix3(n).normalize();
      return (this.constant = -i.dot(r)), this;
    }
    translate(t) {
      return (this.constant -= t.dot(this.normal)), this;
    }
    equals(t) {
      return t.normal.equals(this.normal) && t.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const Ar = new wn(),
    Rr = new an();
  class Cr {
    constructor(
      t = new wr(),
      e = new wr(),
      n = new wr(),
      i = new wr(),
      r = new wr(),
      a = new wr()
    ) {
      this.planes = [t, e, n, i, r, a];
    }
    set(t, e, n, i, r, a) {
      const s = this.planes;
      return (
        s[0].copy(t),
        s[1].copy(e),
        s[2].copy(n),
        s[3].copy(i),
        s[4].copy(r),
        s[5].copy(a),
        this
      );
    }
    copy(t) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
      return this;
    }
    setFromProjectionMatrix(t, e = 2e3) {
      const n = this.planes,
        i = t.elements,
        r = i[0],
        a = i[1],
        s = i[2],
        o = i[3],
        l = i[4],
        c = i[5],
        h = i[6],
        u = i[7],
        d = i[8],
        p = i[9],
        f = i[10],
        m = i[11],
        g = i[12],
        _ = i[13],
        v = i[14],
        x = i[15];
      if (
        (n[0].setComponents(o - r, u - l, m - d, x - g).normalize(),
        n[1].setComponents(o + r, u + l, m + d, x + g).normalize(),
        n[2].setComponents(o + a, u + c, m + p, x + _).normalize(),
        n[3].setComponents(o - a, u - c, m - p, x - _).normalize(),
        n[4].setComponents(o - s, u - h, m - f, x - v).normalize(),
        e === ve)
      )
        n[5].setComponents(o + s, u + h, m + f, x + v).normalize();
      else {
        if (e !== xe)
          throw new Error(
            "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
              e
          );
        n[5].setComponents(s, h, f, v).normalize();
      }
      return this;
    }
    intersectsObject(t) {
      if (void 0 !== t.boundingSphere)
        null === t.boundingSphere && t.computeBoundingSphere(),
          Ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
      else {
        const e = t.geometry;
        null === e.boundingSphere && e.computeBoundingSphere(),
          Ar.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
      }
      return this.intersectsSphere(Ar);
    }
    intersectsSprite(t) {
      return (
        Ar.center.set(0, 0, 0),
        (Ar.radius = 0.7071067811865476),
        Ar.applyMatrix4(t.matrixWorld),
        this.intersectsSphere(Ar)
      );
    }
    intersectsSphere(t) {
      const e = this.planes,
        n = t.center,
        i = -t.radius;
      for (let t = 0; t < 6; t++) if (e[t].distanceToPoint(n) < i) return !1;
      return !0;
    }
    intersectsBox(t) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) {
        const i = e[n];
        if (
          ((Rr.x = i.normal.x > 0 ? t.max.x : t.min.x),
          (Rr.y = i.normal.y > 0 ? t.max.y : t.min.y),
          (Rr.z = i.normal.z > 0 ? t.max.z : t.min.z),
          i.distanceToPoint(Rr) < 0)
        )
          return !1;
      }
      return !0;
    }
    containsPoint(t) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return !1;
      return !0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  function Pr() {
    let t = null,
      e = !1,
      n = null,
      i = null;
    function r(e, a) {
      n(e, a), (i = t.requestAnimationFrame(r));
    }
    return {
      start: function () {
        !0 !== e && null !== n && ((i = t.requestAnimationFrame(r)), (e = !0));
      },
      stop: function () {
        t.cancelAnimationFrame(i), (e = !1);
      },
      setAnimationLoop: function (t) {
        n = t;
      },
      setContext: function (e) {
        t = e;
      },
    };
  }
  function Lr(t) {
    const e = new WeakMap();
    return {
      get: function (t) {
        return t.isInterleavedBufferAttribute && (t = t.data), e.get(t);
      },
      remove: function (n) {
        n.isInterleavedBufferAttribute && (n = n.data);
        const i = e.get(n);
        i && (t.deleteBuffer(i.buffer), e.delete(n));
      },
      update: function (n, i) {
        if (
          (n.isInterleavedBufferAttribute && (n = n.data),
          n.isGLBufferAttribute)
        ) {
          const t = e.get(n);
          return void (
            (!t || t.version < n.version) &&
            e.set(n, {
              buffer: n.buffer,
              type: n.type,
              bytesPerElement: n.elementSize,
              version: n.version,
            })
          );
        }
        const r = e.get(n);
        if (void 0 === r)
          e.set(
            n,
            (function (e, n) {
              const i = e.array,
                r = e.usage,
                a = i.byteLength,
                s = t.createBuffer();
              let o;
              if (
                (t.bindBuffer(n, s),
                t.bufferData(n, i, r),
                e.onUploadCallback(),
                i instanceof Float32Array)
              )
                o = t.FLOAT;
              else if (i instanceof Uint16Array)
                o = e.isFloat16BufferAttribute
                  ? t.HALF_FLOAT
                  : t.UNSIGNED_SHORT;
              else if (i instanceof Int16Array) o = t.SHORT;
              else if (i instanceof Uint32Array) o = t.UNSIGNED_INT;
              else if (i instanceof Int32Array) o = t.INT;
              else if (i instanceof Int8Array) o = t.BYTE;
              else if (i instanceof Uint8Array) o = t.UNSIGNED_BYTE;
              else {
                if (!(i instanceof Uint8ClampedArray))
                  throw new Error(
                    "THREE.WebGLAttributes: Unsupported buffer data format: " +
                      i
                  );
                o = t.UNSIGNED_BYTE;
              }
              return {
                buffer: s,
                type: o,
                bytesPerElement: i.BYTES_PER_ELEMENT,
                version: e.version,
                size: a,
              };
            })(n, i)
          );
        else if (r.version < n.version) {
          if (r.size !== n.array.byteLength)
            throw new Error(
              "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."
            );
          !(function (e, n, i) {
            const r = n.array,
              a = n._updateRange,
              s = n.updateRanges;
            if (
              (t.bindBuffer(i, e),
              -1 === a.count && 0 === s.length && t.bufferSubData(i, 0, r),
              0 !== s.length)
            ) {
              for (let e = 0, n = s.length; e < n; e++) {
                const n = s[e];
                t.bufferSubData(
                  i,
                  n.start * r.BYTES_PER_ELEMENT,
                  r,
                  n.start,
                  n.count
                );
              }
              n.clearUpdateRanges();
            }
            -1 !== a.count &&
              (t.bufferSubData(
                i,
                a.offset * r.BYTES_PER_ELEMENT,
                r,
                a.offset,
                a.count
              ),
              (a.count = -1)),
              n.onUploadCallback();
          })(r.buffer, n, i),
            (r.version = n.version);
        }
      },
    };
  }
  class Ur extends ki {
    constructor(t = 1, e = 1, n = 1, i = 1) {
      super(),
        (this.type = "PlaneGeometry"),
        (this.parameters = {
          width: t,
          height: e,
          widthSegments: n,
          heightSegments: i,
        });
      const r = t / 2,
        a = e / 2,
        s = Math.floor(n),
        o = Math.floor(i),
        l = s + 1,
        c = o + 1,
        h = t / s,
        u = e / o,
        d = [],
        p = [],
        f = [],
        m = [];
      for (let t = 0; t < c; t++) {
        const e = t * u - a;
        for (let n = 0; n < l; n++) {
          const i = n * h - r;
          p.push(i, -e, 0), f.push(0, 0, 1), m.push(n / s), m.push(1 - t / o);
        }
      }
      for (let t = 0; t < o; t++)
        for (let e = 0; e < s; e++) {
          const n = e + l * t,
            i = e + l * (t + 1),
            r = e + 1 + l * (t + 1),
            a = e + 1 + l * t;
          d.push(n, i, a), d.push(i, r, a);
        }
      this.setIndex(d),
        this.setAttribute("position", new Di(p, 3)),
        this.setAttribute("normal", new Di(f, 3)),
        this.setAttribute("uv", new Di(m, 2));
    }
    copy(t) {
      return (
        super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
      );
    }
    static fromJSON(t) {
      return new Ur(t.width, t.height, t.widthSegments, t.heightSegments);
    }
  }
  const Ir = {
      alphahash_fragment:
        "#ifdef USE_ALPHAHASH\n\tif ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
      alphahash_pars_fragment:
        "#ifdef USE_ALPHAHASH\n\tconst float ALPHA_HASH_SCALE = 0.05;\n\tfloat hash2D( vec2 value ) {\n\t\treturn fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n\t}\n\tfloat hash3D( vec3 value ) {\n\t\treturn hash2D( vec2( hash2D( value.xy ), value.z ) );\n\t}\n\tfloat getAlphaHashThreshold( vec3 position ) {\n\t\tfloat maxDeriv = max(\n\t\t\tlength( dFdx( position.xyz ) ),\n\t\t\tlength( dFdy( position.xyz ) )\n\t\t);\n\t\tfloat pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n\t\tvec2 pixScales = vec2(\n\t\t\texp2( floor( log2( pixScale ) ) ),\n\t\t\texp2( ceil( log2( pixScale ) ) )\n\t\t);\n\t\tvec2 alpha = vec2(\n\t\t\thash3D( floor( pixScales.x * position.xyz ) ),\n\t\t\thash3D( floor( pixScales.y * position.xyz ) )\n\t\t);\n\t\tfloat lerpFactor = fract( log2( pixScale ) );\n\t\tfloat x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n\t\tfloat a = min( lerpFactor, 1.0 - lerpFactor );\n\t\tvec3 cases = vec3(\n\t\t\tx * x / ( 2.0 * a * ( 1.0 - a ) ),\n\t\t\t( x - 0.5 * a ) / ( 1.0 - a ),\n\t\t\t1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n\t\t);\n\t\tfloat threshold = ( x < ( 1.0 - a ) )\n\t\t\t? ( ( x < a ) ? cases.x : cases.y )\n\t\t\t: cases.z;\n\t\treturn clamp( threshold , 1.0e-6, 1.0 );\n\t}\n#endif",
      alphamap_fragment:
        "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
      alphamap_pars_fragment:
        "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
      alphatest_fragment:
        "#ifdef USE_ALPHATEST\n\t#ifdef ALPHA_TO_COVERAGE\n\tdiffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n\tif ( diffuseColor.a == 0.0 ) discard;\n\t#else\n\tif ( diffuseColor.a < alphaTest ) discard;\n\t#endif\n#endif",
      alphatest_pars_fragment:
        "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
      aomap_fragment:
        "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_CLEARCOAT ) \n\t\tclearcoatSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_SHEEN ) \n\t\tsheenSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
      aomap_pars_fragment:
        "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
      batching_pars_vertex:
        "#ifdef USE_BATCHING\n\t#if ! defined( GL_ANGLE_multi_draw )\n\t#define gl_DrawID _gl_DrawID\n\tuniform int _gl_DrawID;\n\t#endif\n\tuniform highp sampler2D batchingTexture;\n\tuniform highp usampler2D batchingIdTexture;\n\tmat4 getBatchingMatrix( const in float i ) {\n\t\tint size = textureSize( batchingTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n\tfloat getIndirectIndex( const in int i ) {\n\t\tint size = textureSize( batchingIdTexture, 0 ).x;\n\t\tint x = i % size;\n\t\tint y = i / size;\n\t\treturn float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n\t}\n#endif\n#ifdef USE_BATCHING_COLOR\n\tuniform sampler2D batchingColorTexture;\n\tvec3 getBatchingColor( const in float i ) {\n\t\tint size = textureSize( batchingColorTexture, 0 ).x;\n\t\tint j = int( i );\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\treturn texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;\n\t}\n#endif",
      batching_vertex:
        "#ifdef USE_BATCHING\n\tmat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
      begin_vertex:
        "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n\tvPosition = vec3( position );\n#endif",
      beginnormal_vertex:
        "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
      bsdfs:
        "float G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n} // validated",
      iridescence_fragment:
        "#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\treturn vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif",
      bumpmap_pars_fragment:
        "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vBumpMapUv );\n\t\tvec2 dSTdy = dFdy( vBumpMapUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n\t\tvec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
      clipping_planes_fragment:
        "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#ifdef ALPHA_TO_COVERAGE\n\t\tfloat distanceToPlane, distanceGradient;\n\t\tfloat clipOpacity = 1.0;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tdistanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n\t\t\tdistanceGradient = fwidth( distanceToPlane ) / 2.0;\n\t\t\tclipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n\t\t\tif ( clipOpacity == 0.0 ) discard;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\t\tfloat unionClipOpacity = 1.0;\n\t\t\t#pragma unroll_loop_start\n\t\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\t\tplane = clippingPlanes[ i ];\n\t\t\t\tdistanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n\t\t\t\tdistanceGradient = fwidth( distanceToPlane ) / 2.0;\n\t\t\t\tunionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n\t\t\t}\n\t\t\t#pragma unroll_loop_end\n\t\t\tclipOpacity *= 1.0 - unionClipOpacity;\n\t\t#endif\n\t\tdiffuseColor.a *= clipOpacity;\n\t\tif ( diffuseColor.a == 0.0 ) discard;\n\t#else\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\t\tbool clipped = true;\n\t\t\t#pragma unroll_loop_start\n\t\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\t\tplane = clippingPlanes[ i ];\n\t\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t\t}\n\t\t\t#pragma unroll_loop_end\n\t\t\tif ( clipped ) discard;\n\t\t#endif\n\t#endif\n#endif",
      clipping_planes_pars_fragment:
        "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
      clipping_planes_pars_vertex:
        "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
      clipping_planes_vertex:
        "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
      color_fragment:
        "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
      color_pars_fragment:
        "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
      color_pars_vertex:
        "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n\tvarying vec3 vColor;\n#endif",
      color_vertex:
        "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif\n#ifdef USE_BATCHING_COLOR\n\tvec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );\n\tvColor.xyz *= batchingColor.xyz;\n#endif",
      common:
        "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n\tvarying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
      cube_uv_reflection_fragment:
        "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
      defaultnormal_vertex:
        "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n\tmat3 bm = mat3( batchingMatrix );\n\ttransformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n\ttransformedNormal = bm * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = bm * transformedTangent;\n\t#endif\n#endif\n#ifdef USE_INSTANCING\n\tmat3 im = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n\ttransformedNormal = im * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = im * transformedTangent;\n\t#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\ttransformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
      displacementmap_pars_vertex:
        "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
      displacementmap_vertex:
        "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
      emissivemap_fragment:
        "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
      emissivemap_pars_fragment:
        "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
      colorspace_fragment:
        "gl_FragColor = linearToOutputTexel( gl_FragColor );",
      colorspace_pars_fragment:
        "\nconst mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(\n\tvec3( 0.8224621, 0.177538, 0.0 ),\n\tvec3( 0.0331941, 0.9668058, 0.0 ),\n\tvec3( 0.0170827, 0.0723974, 0.9105199 )\n);\nconst mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.2249401, - 0.2249404, 0.0 ),\n\tvec3( - 0.0420569, 1.0420571, 0.0 ),\n\tvec3( - 0.0196376, - 0.0786361, 1.0982735 )\n);\nvec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {\n\treturn vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );\n}\nvec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {\n\treturn vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );\n}\nvec4 LinearTransferOETF( in vec4 value ) {\n\treturn value;\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
      envmap_fragment:
        "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
      envmap_common_pars_fragment:
        "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform mat3 envMapRotation;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
      envmap_pars_fragment:
        "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
      envmap_pars_vertex:
        "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
      envmap_physical_pars_fragment:
        "#ifdef USE_ENVMAP\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\t#ifdef USE_ANISOTROPY\n\t\tvec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n\t\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\t\tvec3 bentNormal = cross( bitangent, viewDir );\n\t\t\t\tbentNormal = normalize( cross( bentNormal, bitangent ) );\n\t\t\t\tbentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n\t\t\t\treturn getIBLRadiance( viewDir, bentNormal, roughness );\n\t\t\t#else\n\t\t\t\treturn vec3( 0.0 );\n\t\t\t#endif\n\t\t}\n\t#endif\n#endif",
      envmap_vertex:
        "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
      fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
      fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
      fog_fragment:
        "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
      fog_pars_fragment:
        "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
      gradientmap_pars_fragment:
        "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}",
      lightmap_pars_fragment:
        "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
      lights_lambert_fragment:
        "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
      lights_lambert_pars_fragment:
        "varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert",
      lights_pars_begin:
        "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n\tuniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif ( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
      lights_toon_fragment:
        "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
      lights_toon_pars_fragment:
        "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon",
      lights_phong_fragment:
        "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
      lights_phong_pars_fragment:
        "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong",
      lights_physical_fragment:
        "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef USE_SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULAR_COLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n\t\t#endif\n\t\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n\tmaterial.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\t#ifdef USE_ANISOTROPYMAP\n\t\tmat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n\t\tvec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n\t\tvec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n\t#else\n\t\tvec2 anisotropyV = anisotropyVector;\n\t#endif\n\tmaterial.anisotropy = length( anisotropyV );\n\tif( material.anisotropy == 0.0 ) {\n\t\tanisotropyV = vec2( 1.0, 0.0 );\n\t} else {\n\t\tanisotropyV /= material.anisotropy;\n\t\tmaterial.anisotropy = saturate( material.anisotropy );\n\t}\n\tmaterial.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n\tmaterial.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n\tmaterial.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
      lights_physical_pars_fragment:
        "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\tfloat dispersion;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat anisotropy;\n\t\tfloat alphaT;\n\t\tvec3 anisotropyT;\n\t\tvec3 anisotropyB;\n\t#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n\tfloat V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n\t\tfloat gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n\t\tfloat gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n\t\tfloat v = 0.5 / ( gv + gl );\n\t\treturn saturate(v);\n\t}\n\tfloat D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n\t\tfloat a2 = alphaT * alphaB;\n\t\thighp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n\t\thighp float v2 = dot( v, v );\n\t\tfloat w2 = a2 / v2;\n\t\treturn RECIPROCAL_PI * a2 * pow2 ( w2 );\n\t}\n#endif\n#ifdef USE_CLEARCOAT\n\tvec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n\t\tvec3 f0 = material.clearcoatF0;\n\t\tfloat f90 = material.clearcoatF90;\n\t\tfloat roughness = material.clearcoatRoughness;\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n\tvec3 f0 = material.specularColor;\n\tfloat f90 = material.specularF90;\n\tfloat roughness = material.roughness;\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t#ifdef USE_IRIDESCENCE\n\t\tF = mix( F, material.iridescenceFresnel, material.iridescence );\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat dotTL = dot( material.anisotropyT, lightDir );\n\t\tfloat dotTV = dot( material.anisotropyT, viewDir );\n\t\tfloat dotTH = dot( material.anisotropyT, halfDir );\n\t\tfloat dotBL = dot( material.anisotropyB, lightDir );\n\t\tfloat dotBV = dot( material.anisotropyB, viewDir );\n\t\tfloat dotBH = dot( material.anisotropyB, halfDir );\n\t\tfloat V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n\t\tfloat D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n\t#else\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t#endif\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometryNormal;\n\t\tvec3 viewDir = geometryViewDir;\n\t\tvec3 position = geometryPosition;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
      lights_fragment_begin:
        "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n\tgeometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometryViewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometryPosition, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometryPosition, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if defined( USE_LIGHT_PROBES )\n\t\tirradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
      lights_fragment_maps:
        "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometryNormal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\t#ifdef USE_ANISOTROPY\n\t\tradiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n\t#else\n\t\tradiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
      lights_fragment_end:
        "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
      logdepthbuf_fragment:
        "#if defined( USE_LOGDEPTHBUF )\n\tgl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
      logdepthbuf_pars_fragment:
        "#if defined( USE_LOGDEPTHBUF )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
      logdepthbuf_pars_vertex:
        "#ifdef USE_LOGDEPTHBUF\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
      logdepthbuf_vertex:
        "#ifdef USE_LOGDEPTHBUF\n\tvFragDepth = 1.0 + gl_Position.w;\n\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
      map_fragment:
        "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vMapUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",
      map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
      map_particle_fragment:
        "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t#if defined( USE_POINTS_UV )\n\t\tvec2 uv = vUv;\n\t#else\n\t\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
      map_particle_pars_fragment:
        "#if defined( USE_POINTS_UV )\n\tvarying vec2 vUv;\n#else\n\t#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t\tuniform mat3 uvTransform;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
      metalnessmap_fragment:
        "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
      metalnessmap_pars_fragment:
        "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
      morphinstance_vertex:
        "#ifdef USE_INSTANCING_MORPH\n\tfloat morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\tfloat morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tmorphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n\t}\n#endif",
      morphcolor_vertex:
        "#if defined( USE_MORPHCOLORS )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",
      morphnormal_vertex:
        "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t}\n#endif",
      morphtarget_pars_vertex:
        "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_INSTANCING_MORPH\n\t\tuniform float morphTargetBaseInfluence;\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t#endif\n\tuniform sampler2DArray morphTargetsTexture;\n\tuniform ivec2 morphTargetsTextureSize;\n\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t}\n#endif",
      morphtarget_vertex:
        "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t}\n#endif",
      normal_fragment_begin:
        "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal *= faceDirection;\n\t#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn = getTangentFrame( - vViewPosition, normal,\n\t\t#if defined( USE_NORMALMAP )\n\t\t\tvNormalMapUv\n\t\t#elif defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tvClearcoatNormalMapUv\n\t\t#else\n\t\t\tvUv\n\t\t#endif\n\t\t);\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn[0] *= faceDirection;\n\t\ttbn[1] *= faceDirection;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn2[0] *= faceDirection;\n\t\ttbn2[1] *= faceDirection;\n\t#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
      normal_fragment_maps:
        "#ifdef USE_NORMALMAP_OBJECTSPACE\n\tnormal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n\tvec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\tnormal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
      normal_pars_fragment:
        "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
      normal_pars_vertex:
        "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
      normal_vertex:
        "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
      normalmap_pars_fragment:
        "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n\tmat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( uv.st );\n\t\tvec2 st1 = dFdy( uv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n\t\treturn mat3( T * scale, B * scale, N );\n\t}\n#endif",
      clearcoat_normal_fragment_begin:
        "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
      clearcoat_normal_fragment_maps:
        "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\tclearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
      clearcoat_pars_fragment:
        "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif",
      iridescence_pars_fragment:
        "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",
      opaque_fragment:
        "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
      packing:
        "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n\tif( v <= 0.0 )\n\t\treturn vec4( 0., 0., 0., 0. );\n\tif( v >= 1.0 )\n\t\treturn vec4( 1., 1., 1., 1. );\n\tfloat vuf;\n\tfloat af = modf( v * PackFactors.a, vuf );\n\tfloat bf = modf( vuf * ShiftRight8, vuf );\n\tfloat gf = modf( vuf * ShiftRight8, vuf );\n\treturn vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n\tif( v <= 0.0 )\n\t\treturn vec3( 0., 0., 0. );\n\tif( v >= 1.0 )\n\t\treturn vec3( 1., 1., 1. );\n\tfloat vuf;\n\tfloat bf = modf( v * PackFactors.b, vuf );\n\tfloat gf = modf( vuf * ShiftRight8, vuf );\n\treturn vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n\tif( v <= 0.0 )\n\t\treturn vec2( 0., 0. );\n\tif( v >= 1.0 )\n\t\treturn vec2( 1., 1. );\n\tfloat vuf;\n\tfloat gf = modf( v * 256., vuf );\n\treturn vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n\treturn dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n\treturn v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * depth - far );\n}",
      premultiplied_alpha_fragment:
        "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
      project_vertex:
        "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n\tmvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
      dithering_fragment:
        "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
      dithering_pars_fragment:
        "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
      roughnessmap_fragment:
        "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
      roughnessmap_pars_fragment:
        "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
      shadowmap_pars_fragment:
        "#if NUM_SPOT_LIGHT_COORDS > 0\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n\tuniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n\t\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn mix( 1.0, shadow, shadowIntensity );\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tfloat shadow = 1.0;\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\t\n\t\tfloat lightToPositionLength = length( lightToPosition );\n\t\tif ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {\n\t\t\tfloat dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\t\tdp += shadowBias;\n\t\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\t\tshadow = (\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t\t) * ( 1.0 / 9.0 );\n\t\t\t#else\n\t\t\t\tshadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t\t#endif\n\t\t}\n\t\treturn mix( 1.0, shadow, shadowIntensity );\n\t}\n#endif",
      shadowmap_pars_vertex:
        "#if NUM_SPOT_LIGHT_COORDS > 0\n\tuniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
      shadowmap_vertex:
        "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\tvec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n#endif",
      shadowmask_pars_fragment:
        "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
      skinbase_vertex:
        "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
      skinning_pars_vertex:
        "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tint size = textureSize( boneTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n#endif",
      skinning_vertex:
        "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
      skinnormal_vertex:
        "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
      specularmap_fragment:
        "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
      specularmap_pars_fragment:
        "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
      tonemapping_fragment:
        "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
      tonemapping_pars_fragment:
        "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.6605, - 0.1246, - 0.0182 ),\n\tvec3( - 0.5876, 1.1329, - 0.1006 ),\n\tvec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n\tvec3( 0.6274, 0.0691, 0.0164 ),\n\tvec3( 0.3293, 0.9195, 0.0880 ),\n\tvec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n\tvec3 x2 = x * x;\n\tvec3 x4 = x2 * x2;\n\treturn + 15.5 * x4 * x2\n\t\t- 40.14 * x4 * x\n\t\t+ 31.96 * x4\n\t\t- 6.868 * x2 * x\n\t\t+ 0.4298 * x2\n\t\t+ 0.1191 * x\n\t\t- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n\tconst mat3 AgXInsetMatrix = mat3(\n\t\tvec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n\t\tvec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n\t\tvec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n\t);\n\tconst mat3 AgXOutsetMatrix = mat3(\n\t\tvec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n\t\tvec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n\t\tvec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n\t);\n\tconst float AgxMinEv = - 12.47393;\tconst float AgxMaxEv = 4.026069;\n\tcolor *= toneMappingExposure;\n\tcolor = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n\tcolor = AgXInsetMatrix * color;\n\tcolor = max( color, 1e-10 );\tcolor = log2( color );\n\tcolor = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n\tcolor = clamp( color, 0.0, 1.0 );\n\tcolor = agxDefaultContrastApprox( color );\n\tcolor = AgXOutsetMatrix * color;\n\tcolor = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n\tcolor = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n\tcolor = clamp( color, 0.0, 1.0 );\n\treturn color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n\tconst float StartCompression = 0.8 - 0.04;\n\tconst float Desaturation = 0.15;\n\tcolor *= toneMappingExposure;\n\tfloat x = min( color.r, min( color.g, color.b ) );\n\tfloat offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n\tcolor -= offset;\n\tfloat peak = max( color.r, max( color.g, color.b ) );\n\tif ( peak < StartCompression ) return color;\n\tfloat d = 1. - StartCompression;\n\tfloat newPeak = 1. - d * d / ( peak + d - StartCompression );\n\tcolor *= newPeak / peak;\n\tfloat g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n\treturn mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
      transmission_fragment:
        "#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmitted = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
      transmission_pars_fragment:
        "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tfloat w0( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n\t}\n\tfloat w1( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n\t}\n\tfloat w2( float a ){\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n\t}\n\tfloat w3( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * a * a );\n\t}\n\tfloat g0( float a ) {\n\t\treturn w0( a ) + w1( a );\n\t}\n\tfloat g1( float a ) {\n\t\treturn w2( a ) + w3( a );\n\t}\n\tfloat h0( float a ) {\n\t\treturn - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n\t}\n\tfloat h1( float a ) {\n\t\treturn 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n\t}\n\tvec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n\t\tuv = uv * texelSize.zw + 0.5;\n\t\tvec2 iuv = floor( uv );\n\t\tvec2 fuv = fract( uv );\n\t\tfloat g0x = g0( fuv.x );\n\t\tfloat g1x = g1( fuv.x );\n\t\tfloat h0x = h0( fuv.x );\n\t\tfloat h1x = h1( fuv.x );\n\t\tfloat h0y = h0( fuv.y );\n\t\tfloat h1y = h1( fuv.y );\n\t\tvec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\treturn g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n\t\t\tg1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n\t}\n\tvec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n\t\tvec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n\t\tvec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n\t\tvec2 fLodSizeInv = 1.0 / fLodSize;\n\t\tvec2 cLodSizeInv = 1.0 / cLodSize;\n\t\tvec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n\t\tvec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n\t\treturn mix( fSample, cSample, fract( lod ) );\n\t}\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\treturn textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n\t}\n\tvec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( isinf( attenuationDistance ) ) {\n\t\t\treturn vec3( 1.0 );\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec4 transmittedLight;\n\t\tvec3 transmittance;\n\t\t#ifdef USE_DISPERSION\n\t\t\tfloat halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n\t\t\tvec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n\t\t\tfor ( int i = 0; i < 3; i ++ ) {\n\t\t\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n\t\t\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\t\n\t\t\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\t\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\t\t\trefractionCoords += 1.0;\n\t\t\t\trefractionCoords /= 2.0;\n\t\t\n\t\t\t\tvec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n\t\t\t\ttransmittedLight[ i ] = transmissionSample[ i ];\n\t\t\t\ttransmittedLight.a += transmissionSample.a;\n\t\t\t\ttransmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n\t\t\t}\n\t\t\ttransmittedLight.a /= 3.0;\n\t\t\n\t\t#else\n\t\t\n\t\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\t\trefractionCoords += 1.0;\n\t\t\trefractionCoords /= 2.0;\n\t\t\ttransmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\t\ttransmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\t\n\t\t#endif\n\t\tvec3 attenuatedColor = transmittance * transmittedLight.rgb;\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\tfloat transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n\t}\n#endif",
      uv_pars_fragment:
        "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",
      uv_pars_vertex:
        "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tuniform mat3 mapTransform;\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform mat3 alphaMapTransform;\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tuniform mat3 lightMapTransform;\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tuniform mat3 aoMapTransform;\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tuniform mat3 bumpMapTransform;\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tuniform mat3 normalMapTransform;\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tuniform mat3 displacementMapTransform;\n\tvarying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tuniform mat3 emissiveMapTransform;\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tuniform mat3 metalnessMapTransform;\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tuniform mat3 roughnessMapTransform;\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tuniform mat3 anisotropyMapTransform;\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tuniform mat3 clearcoatMapTransform;\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform mat3 clearcoatNormalMapTransform;\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform mat3 clearcoatRoughnessMapTransform;\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tuniform mat3 sheenColorMapTransform;\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tuniform mat3 sheenRoughnessMapTransform;\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tuniform mat3 iridescenceMapTransform;\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform mat3 iridescenceThicknessMapTransform;\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tuniform mat3 specularMapTransform;\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tuniform mat3 specularColorMapTransform;\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tuniform mat3 specularIntensityMapTransform;\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",
      uv_vertex:
        "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n\tvMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n\tvAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n\tvLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n\tvAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n\tvBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n\tvNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tvDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n\tvMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n\tvSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tvTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n\tvThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
      worldpos_vertex:
        "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_BATCHING\n\t\tworldPosition = batchingMatrix * worldPosition;\n\t#endif\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
      background_vert:
        "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
      background_frag:
        "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\ttexColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
      backgroundCube_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
      backgroundCube_frag:
        "#ifdef ENVMAP_TYPE_CUBE\n\tuniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\tuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n\t#else\n\t\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
      cube_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
      cube_frag:
        "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = texColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
      depth_vert:
        "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
      depth_frag:
        "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <clipping_planes_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#elif DEPTH_PACKING == 3202\n\t\tgl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n\t#elif DEPTH_PACKING == 3203\n\t\tgl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n\t#endif\n}",
      distanceRGBA_vert:
        "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
      distanceRGBA_frag:
        "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <clipping_planes_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
      equirect_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
      equirect_frag:
        "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
      linedashed_vert:
        "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
      linedashed_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
      meshbasic_vert:
        "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
      meshbasic_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshlambert_vert:
        "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshlambert_frag:
        "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshmatcap_vert:
        "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
      meshmatcap_frag:
        "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshnormal_vert:
        "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
      meshnormal_frag:
        "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",
      meshphong_vert:
        "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshphong_frag:
        "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshphysical_vert:
        "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
      meshphysical_frag:
        "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef USE_SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULAR_COLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n\tuniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\tuniform vec2 anisotropyVector;\n\t#ifdef USE_ANISOTROPYMAP\n\t\tuniform sampler2D anisotropyMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n\t#endif\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshtoon_vert:
        "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshtoon_frag:
        "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      points_vert:
        "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\nvoid main() {\n\t#ifdef USE_POINTS_UV\n\t\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\t#endif\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
      points_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
      shadow_vert:
        "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      shadow_frag:
        "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}",
      sprite_vert:
        "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
      sprite_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}",
    },
    Dr = {
      common: {
        diffuse: { value: new Ti(16777215) },
        opacity: { value: 1 },
        map: { value: null },
        mapTransform: { value: new Le() },
        alphaMap: { value: null },
        alphaMapTransform: { value: new Le() },
        alphaTest: { value: 0 },
      },
      specularmap: {
        specularMap: { value: null },
        specularMapTransform: { value: new Le() },
      },
      envmap: {
        envMap: { value: null },
        envMapRotation: { value: new Le() },
        flipEnvMap: { value: -1 },
        reflectivity: { value: 1 },
        ior: { value: 1.5 },
        refractionRatio: { value: 0.98 },
      },
      aomap: {
        aoMap: { value: null },
        aoMapIntensity: { value: 1 },
        aoMapTransform: { value: new Le() },
      },
      lightmap: {
        lightMap: { value: null },
        lightMapIntensity: { value: 1 },
        lightMapTransform: { value: new Le() },
      },
      bumpmap: {
        bumpMap: { value: null },
        bumpMapTransform: { value: new Le() },
        bumpScale: { value: 1 },
      },
      normalmap: {
        normalMap: { value: null },
        normalMapTransform: { value: new Le() },
        normalScale: { value: new Pe(1, 1) },
      },
      displacementmap: {
        displacementMap: { value: null },
        displacementMapTransform: { value: new Le() },
        displacementScale: { value: 1 },
        displacementBias: { value: 0 },
      },
      emissivemap: {
        emissiveMap: { value: null },
        emissiveMapTransform: { value: new Le() },
      },
      metalnessmap: {
        metalnessMap: { value: null },
        metalnessMapTransform: { value: new Le() },
      },
      roughnessmap: {
        roughnessMap: { value: null },
        roughnessMapTransform: { value: new Le() },
      },
      gradientmap: { gradientMap: { value: null } },
      fog: {
        fogDensity: { value: 25e-5 },
        fogNear: { value: 1 },
        fogFar: { value: 2e3 },
        fogColor: { value: new Ti(16777215) },
      },
      lights: {
        ambientLightColor: { value: [] },
        lightProbe: { value: [] },
        directionalLights: {
          value: [],
          properties: { direction: {}, color: {} },
        },
        directionalLightShadows: {
          value: [],
          properties: {
            shadowIntensity: 1,
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
          },
        },
        directionalShadowMap: { value: [] },
        directionalShadowMatrix: { value: [] },
        spotLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            direction: {},
            distance: {},
            coneCos: {},
            penumbraCos: {},
            decay: {},
          },
        },
        spotLightShadows: {
          value: [],
          properties: {
            shadowIntensity: 1,
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
          },
        },
        spotLightMap: { value: [] },
        spotShadowMap: { value: [] },
        spotLightMatrix: { value: [] },
        pointLights: {
          value: [],
          properties: { color: {}, position: {}, decay: {}, distance: {} },
        },
        pointLightShadows: {
          value: [],
          properties: {
            shadowIntensity: 1,
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
            shadowCameraNear: {},
            shadowCameraFar: {},
          },
        },
        pointShadowMap: { value: [] },
        pointShadowMatrix: { value: [] },
        hemisphereLights: {
          value: [],
          properties: { direction: {}, skyColor: {}, groundColor: {} },
        },
        rectAreaLights: {
          value: [],
          properties: { color: {}, position: {}, width: {}, height: {} },
        },
        ltc_1: { value: null },
        ltc_2: { value: null },
      },
      points: {
        diffuse: { value: new Ti(16777215) },
        opacity: { value: 1 },
        size: { value: 1 },
        scale: { value: 1 },
        map: { value: null },
        alphaMap: { value: null },
        alphaMapTransform: { value: new Le() },
        alphaTest: { value: 0 },
        uvTransform: { value: new Le() },
      },
      sprite: {
        diffuse: { value: new Ti(16777215) },
        opacity: { value: 1 },
        center: { value: new Pe(0.5, 0.5) },
        rotation: { value: 0 },
        map: { value: null },
        mapTransform: { value: new Le() },
        alphaMap: { value: null },
        alphaMapTransform: { value: new Le() },
        alphaTest: { value: 0 },
      },
    },
    Nr = {
      basic: {
        uniforms: hr([
          Dr.common,
          Dr.specularmap,
          Dr.envmap,
          Dr.aomap,
          Dr.lightmap,
          Dr.fog,
        ]),
        vertexShader: Ir.meshbasic_vert,
        fragmentShader: Ir.meshbasic_frag,
      },
      lambert: {
        uniforms: hr([
          Dr.common,
          Dr.specularmap,
          Dr.envmap,
          Dr.aomap,
          Dr.lightmap,
          Dr.emissivemap,
          Dr.bumpmap,
          Dr.normalmap,
          Dr.displacementmap,
          Dr.fog,
          Dr.lights,
          { emissive: { value: new Ti(0) } },
        ]),
        vertexShader: Ir.meshlambert_vert,
        fragmentShader: Ir.meshlambert_frag,
      },
      phong: {
        uniforms: hr([
          Dr.common,
          Dr.specularmap,
          Dr.envmap,
          Dr.aomap,
          Dr.lightmap,
          Dr.emissivemap,
          Dr.bumpmap,
          Dr.normalmap,
          Dr.displacementmap,
          Dr.fog,
          Dr.lights,
          {
            emissive: { value: new Ti(0) },
            specular: { value: new Ti(1118481) },
            shininess: { value: 30 },
          },
        ]),
        vertexShader: Ir.meshphong_vert,
        fragmentShader: Ir.meshphong_frag,
      },
      standard: {
        uniforms: hr([
          Dr.common,
          Dr.envmap,
          Dr.aomap,
          Dr.lightmap,
          Dr.emissivemap,
          Dr.bumpmap,
          Dr.normalmap,
          Dr.displacementmap,
          Dr.roughnessmap,
          Dr.metalnessmap,
          Dr.fog,
          Dr.lights,
          {
            emissive: { value: new Ti(0) },
            roughness: { value: 1 },
            metalness: { value: 0 },
            envMapIntensity: { value: 1 },
          },
        ]),
        vertexShader: Ir.meshphysical_vert,
        fragmentShader: Ir.meshphysical_frag,
      },
      toon: {
        uniforms: hr([
          Dr.common,
          Dr.aomap,
          Dr.lightmap,
          Dr.emissivemap,
          Dr.bumpmap,
          Dr.normalmap,
          Dr.displacementmap,
          Dr.gradientmap,
          Dr.fog,
          Dr.lights,
          { emissive: { value: new Ti(0) } },
        ]),
        vertexShader: Ir.meshtoon_vert,
        fragmentShader: Ir.meshtoon_frag,
      },
      matcap: {
        uniforms: hr([
          Dr.common,
          Dr.bumpmap,
          Dr.normalmap,
          Dr.displacementmap,
          Dr.fog,
          { matcap: { value: null } },
        ]),
        vertexShader: Ir.meshmatcap_vert,
        fragmentShader: Ir.meshmatcap_frag,
      },
      points: {
        uniforms: hr([Dr.points, Dr.fog]),
        vertexShader: Ir.points_vert,
        fragmentShader: Ir.points_frag,
      },
      dashed: {
        uniforms: hr([
          Dr.common,
          Dr.fog,
          {
            scale: { value: 1 },
            dashSize: { value: 1 },
            totalSize: { value: 2 },
          },
        ]),
        vertexShader: Ir.linedashed_vert,
        fragmentShader: Ir.linedashed_frag,
      },
      depth: {
        uniforms: hr([Dr.common, Dr.displacementmap]),
        vertexShader: Ir.depth_vert,
        fragmentShader: Ir.depth_frag,
      },
      normal: {
        uniforms: hr([
          Dr.common,
          Dr.bumpmap,
          Dr.normalmap,
          Dr.displacementmap,
          { opacity: { value: 1 } },
        ]),
        vertexShader: Ir.meshnormal_vert,
        fragmentShader: Ir.meshnormal_frag,
      },
      sprite: {
        uniforms: hr([Dr.sprite, Dr.fog]),
        vertexShader: Ir.sprite_vert,
        fragmentShader: Ir.sprite_frag,
      },
      background: {
        uniforms: {
          uvTransform: { value: new Le() },
          t2D: { value: null },
          backgroundIntensity: { value: 1 },
        },
        vertexShader: Ir.background_vert,
        fragmentShader: Ir.background_frag,
      },
      backgroundCube: {
        uniforms: {
          envMap: { value: null },
          flipEnvMap: { value: -1 },
          backgroundBlurriness: { value: 0 },
          backgroundIntensity: { value: 1 },
          backgroundRotation: { value: new Le() },
        },
        vertexShader: Ir.backgroundCube_vert,
        fragmentShader: Ir.backgroundCube_frag,
      },
      cube: {
        uniforms: {
          tCube: { value: null },
          tFlip: { value: -1 },
          opacity: { value: 1 },
        },
        vertexShader: Ir.cube_vert,
        fragmentShader: Ir.cube_frag,
      },
      equirect: {
        uniforms: { tEquirect: { value: null } },
        vertexShader: Ir.equirect_vert,
        fragmentShader: Ir.equirect_frag,
      },
      distanceRGBA: {
        uniforms: hr([
          Dr.common,
          Dr.displacementmap,
          {
            referencePosition: { value: new an() },
            nearDistance: { value: 1 },
            farDistance: { value: 1e3 },
          },
        ]),
        vertexShader: Ir.distanceRGBA_vert,
        fragmentShader: Ir.distanceRGBA_frag,
      },
      shadow: {
        uniforms: hr([
          Dr.lights,
          Dr.fog,
          { color: { value: new Ti(0) }, opacity: { value: 1 } },
        ]),
        vertexShader: Ir.shadow_vert,
        fragmentShader: Ir.shadow_frag,
      },
    };
  Nr.physical = {
    uniforms: hr([
      Nr.standard.uniforms,
      {
        clearcoat: { value: 0 },
        clearcoatMap: { value: null },
        clearcoatMapTransform: { value: new Le() },
        clearcoatNormalMap: { value: null },
        clearcoatNormalMapTransform: { value: new Le() },
        clearcoatNormalScale: { value: new Pe(1, 1) },
        clearcoatRoughness: { value: 0 },
        clearcoatRoughnessMap: { value: null },
        clearcoatRoughnessMapTransform: { value: new Le() },
        dispersion: { value: 0 },
        iridescence: { value: 0 },
        iridescenceMap: { value: null },
        iridescenceMapTransform: { value: new Le() },
        iridescenceIOR: { value: 1.3 },
        iridescenceThicknessMinimum: { value: 100 },
        iridescenceThicknessMaximum: { value: 400 },
        iridescenceThicknessMap: { value: null },
        iridescenceThicknessMapTransform: { value: new Le() },
        sheen: { value: 0 },
        sheenColor: { value: new Ti(0) },
        sheenColorMap: { value: null },
        sheenColorMapTransform: { value: new Le() },
        sheenRoughness: { value: 1 },
        sheenRoughnessMap: { value: null },
        sheenRoughnessMapTransform: { value: new Le() },
        transmission: { value: 0 },
        transmissionMap: { value: null },
        transmissionMapTransform: { value: new Le() },
        transmissionSamplerSize: { value: new Pe() },
        transmissionSamplerMap: { value: null },
        thickness: { value: 0 },
        thicknessMap: { value: null },
        thicknessMapTransform: { value: new Le() },
        attenuationDistance: { value: 0 },
        attenuationColor: { value: new Ti(0) },
        specularColor: { value: new Ti(1, 1, 1) },
        specularColorMap: { value: null },
        specularColorMapTransform: { value: new Le() },
        specularIntensity: { value: 1 },
        specularIntensityMap: { value: null },
        specularIntensityMapTransform: { value: new Le() },
        anisotropyVector: { value: new Pe() },
        anisotropyMap: { value: null },
        anisotropyMapTransform: { value: new Le() },
      },
    ]),
    vertexShader: Ir.meshphysical_vert,
    fragmentShader: Ir.meshphysical_frag,
  };
  const Or = { r: 0, b: 0, g: 0 },
    Fr = new Xn(),
    zr = new Nn();
  function Br(t, e, n, i, r, a, s) {
    const o = new Ti(0);
    let l,
      c,
      h = !0 === a ? 0 : 1,
      u = null,
      d = 0,
      p = null;
    function f(t) {
      let i = !0 === t.isScene ? t.background : null;
      return (
        i && i.isTexture && (i = (t.backgroundBlurriness > 0 ? n : e).get(i)), i
      );
    }
    function m(e, n) {
      e.getRGB(Or, ur(t)), i.buffers.color.setClear(Or.r, Or.g, Or.b, n, s);
    }
    return {
      getClearColor: function () {
        return o;
      },
      setClearColor: function (t, e = 1) {
        o.set(t), (h = e), m(o, h);
      },
      getClearAlpha: function () {
        return h;
      },
      setClearAlpha: function (t) {
        (h = t), m(o, h);
      },
      render: function (e) {
        let n = !1;
        const r = f(e);
        null === r ? m(o, h) : r && r.isColor && (m(r, 1), (n = !0));
        const a = t.xr.getEnvironmentBlendMode();
        "additive" === a
          ? i.buffers.color.setClear(0, 0, 0, 1, s)
          : "alpha-blend" === a && i.buffers.color.setClear(0, 0, 0, 0, s),
          (t.autoClear || n) &&
            (i.buffers.depth.setTest(!0),
            i.buffers.depth.setMask(!0),
            i.buffers.color.setMask(!0),
            t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil));
      },
      addToRenderList: function (e, n) {
        const i = f(n);
        i && (i.isCubeTexture || i.mapping === z)
          ? (void 0 === c &&
              ((c = new sr(
                new lr(1, 1, 1),
                new pr({
                  name: "BackgroundCubeMaterial",
                  uniforms: cr(Nr.backgroundCube.uniforms),
                  vertexShader: Nr.backgroundCube.vertexShader,
                  fragmentShader: Nr.backgroundCube.fragmentShader,
                  side: 1,
                  depthTest: !1,
                  depthWrite: !1,
                  fog: !1,
                })
              )),
              c.geometry.deleteAttribute("normal"),
              c.geometry.deleteAttribute("uv"),
              (c.onBeforeRender = function (t, e, n) {
                this.matrixWorld.copyPosition(n.matrixWorld);
              }),
              Object.defineProperty(c.material, "envMap", {
                get: function () {
                  return this.uniforms.envMap.value;
                },
              }),
              r.update(c)),
            Fr.copy(n.backgroundRotation),
            (Fr.x *= -1),
            (Fr.y *= -1),
            (Fr.z *= -1),
            i.isCubeTexture &&
              !1 === i.isRenderTargetTexture &&
              ((Fr.y *= -1), (Fr.z *= -1)),
            (c.material.uniforms.envMap.value = i),
            (c.material.uniforms.flipEnvMap.value =
              i.isCubeTexture && !1 === i.isRenderTargetTexture ? -1 : 1),
            (c.material.uniforms.backgroundBlurriness.value =
              n.backgroundBlurriness),
            (c.material.uniforms.backgroundIntensity.value =
              n.backgroundIntensity),
            c.material.uniforms.backgroundRotation.value.setFromMatrix4(
              zr.makeRotationFromEuler(Fr)
            ),
            (c.material.toneMapped = ke.getTransfer(i.colorSpace) !== ae),
            (u === i && d === i.version && p === t.toneMapping) ||
              ((c.material.needsUpdate = !0),
              (u = i),
              (d = i.version),
              (p = t.toneMapping)),
            c.layers.enableAll(),
            e.unshift(c, c.geometry, c.material, 0, 0, null))
          : i &&
            i.isTexture &&
            (void 0 === l &&
              ((l = new sr(
                new Ur(2, 2),
                new pr({
                  name: "BackgroundMaterial",
                  uniforms: cr(Nr.background.uniforms),
                  vertexShader: Nr.background.vertexShader,
                  fragmentShader: Nr.background.fragmentShader,
                  side: 0,
                  depthTest: !1,
                  depthWrite: !1,
                  fog: !1,
                })
              )),
              l.geometry.deleteAttribute("normal"),
              Object.defineProperty(l.material, "map", {
                get: function () {
                  return this.uniforms.t2D.value;
                },
              }),
              r.update(l)),
            (l.material.uniforms.t2D.value = i),
            (l.material.uniforms.backgroundIntensity.value =
              n.backgroundIntensity),
            (l.material.toneMapped = ke.getTransfer(i.colorSpace) !== ae),
            !0 === i.matrixAutoUpdate && i.updateMatrix(),
            l.material.uniforms.uvTransform.value.copy(i.matrix),
            (u === i && d === i.version && p === t.toneMapping) ||
              ((l.material.needsUpdate = !0),
              (u = i),
              (d = i.version),
              (p = t.toneMapping)),
            l.layers.enableAll(),
            e.unshift(l, l.geometry, l.material, 0, 0, null));
      },
    };
  }
  function Hr(t, e) {
    const n = t.getParameter(t.MAX_VERTEX_ATTRIBS),
      i = {},
      r = c(null);
    let a = r,
      s = !1;
    function o(e) {
      return t.bindVertexArray(e);
    }
    function l(e) {
      return t.deleteVertexArray(e);
    }
    function c(t) {
      const e = [],
        i = [],
        r = [];
      for (let t = 0; t < n; t++) (e[t] = 0), (i[t] = 0), (r[t] = 0);
      return {
        geometry: null,
        program: null,
        wireframe: !1,
        newAttributes: e,
        enabledAttributes: i,
        attributeDivisors: r,
        object: t,
        attributes: {},
        index: null,
      };
    }
    function h() {
      const t = a.newAttributes;
      for (let e = 0, n = t.length; e < n; e++) t[e] = 0;
    }
    function u(t) {
      d(t, 0);
    }
    function d(e, n) {
      const i = a.newAttributes,
        r = a.enabledAttributes,
        s = a.attributeDivisors;
      (i[e] = 1),
        0 === r[e] && (t.enableVertexAttribArray(e), (r[e] = 1)),
        s[e] !== n && (t.vertexAttribDivisor(e, n), (s[e] = n));
    }
    function p() {
      const e = a.newAttributes,
        n = a.enabledAttributes;
      for (let i = 0, r = n.length; i < r; i++)
        n[i] !== e[i] && (t.disableVertexAttribArray(i), (n[i] = 0));
    }
    function f(e, n, i, r, a, s, o) {
      !0 === o
        ? t.vertexAttribIPointer(e, n, i, a, s)
        : t.vertexAttribPointer(e, n, i, r, a, s);
    }
    function m() {
      g(), (s = !0), a !== r && ((a = r), o(a.object));
    }
    function g() {
      (r.geometry = null), (r.program = null), (r.wireframe = !1);
    }
    return {
      setup: function (n, r, l, m, g) {
        let _ = !1;
        const v = (function (e, n, r) {
          const a = !0 === r.wireframe;
          let s = i[e.id];
          void 0 === s && ((s = {}), (i[e.id] = s));
          let o = s[n.id];
          void 0 === o && ((o = {}), (s[n.id] = o));
          let l = o[a];
          return (
            void 0 === l && ((l = c(t.createVertexArray())), (o[a] = l)), l
          );
        })(m, l, r);
        a !== v && ((a = v), o(a.object)),
          (_ = (function (t, e, n, i) {
            const r = a.attributes,
              s = e.attributes;
            let o = 0;
            const l = n.getAttributes();
            for (const e in l)
              if (l[e].location >= 0) {
                const n = r[e];
                let i = s[e];
                if (
                  (void 0 === i &&
                    ("instanceMatrix" === e &&
                      t.instanceMatrix &&
                      (i = t.instanceMatrix),
                    "instanceColor" === e &&
                      t.instanceColor &&
                      (i = t.instanceColor)),
                  void 0 === n)
                )
                  return !0;
                if (n.attribute !== i) return !0;
                if (i && n.data !== i.data) return !0;
                o++;
              }
            return a.attributesNum !== o || a.index !== i;
          })(n, m, l, g)),
          _ &&
            (function (t, e, n, i) {
              const r = {},
                s = e.attributes;
              let o = 0;
              const l = n.getAttributes();
              for (const e in l)
                if (l[e].location >= 0) {
                  let n = s[e];
                  void 0 === n &&
                    ("instanceMatrix" === e &&
                      t.instanceMatrix &&
                      (n = t.instanceMatrix),
                    "instanceColor" === e &&
                      t.instanceColor &&
                      (n = t.instanceColor));
                  const i = {};
                  (i.attribute = n),
                    n && n.data && (i.data = n.data),
                    (r[e] = i),
                    o++;
                }
              (a.attributes = r), (a.attributesNum = o), (a.index = i);
            })(n, m, l, g),
          null !== g && e.update(g, t.ELEMENT_ARRAY_BUFFER),
          (_ || s) &&
            ((s = !1),
            (function (n, i, r, a) {
              h();
              const s = a.attributes,
                o = r.getAttributes(),
                l = i.defaultAttributeValues;
              for (const i in o) {
                const r = o[i];
                if (r.location >= 0) {
                  let o = s[i];
                  if (
                    (void 0 === o &&
                      ("instanceMatrix" === i &&
                        n.instanceMatrix &&
                        (o = n.instanceMatrix),
                      "instanceColor" === i &&
                        n.instanceColor &&
                        (o = n.instanceColor)),
                    void 0 !== o)
                  ) {
                    const i = o.normalized,
                      s = o.itemSize,
                      l = e.get(o);
                    if (void 0 === l) continue;
                    const c = l.buffer,
                      h = l.type,
                      p = l.bytesPerElement,
                      m =
                        h === t.INT || h === t.UNSIGNED_INT || o.gpuType === $;
                    if (o.isInterleavedBufferAttribute) {
                      const e = o.data,
                        l = e.stride,
                        g = o.offset;
                      if (e.isInstancedInterleavedBuffer) {
                        for (let t = 0; t < r.locationSize; t++)
                          d(r.location + t, e.meshPerAttribute);
                        !0 !== n.isInstancedMesh &&
                          void 0 === a._maxInstanceCount &&
                          (a._maxInstanceCount = e.meshPerAttribute * e.count);
                      } else
                        for (let t = 0; t < r.locationSize; t++)
                          u(r.location + t);
                      t.bindBuffer(t.ARRAY_BUFFER, c);
                      for (let t = 0; t < r.locationSize; t++)
                        f(
                          r.location + t,
                          s / r.locationSize,
                          h,
                          i,
                          l * p,
                          (g + (s / r.locationSize) * t) * p,
                          m
                        );
                    } else {
                      if (o.isInstancedBufferAttribute) {
                        for (let t = 0; t < r.locationSize; t++)
                          d(r.location + t, o.meshPerAttribute);
                        !0 !== n.isInstancedMesh &&
                          void 0 === a._maxInstanceCount &&
                          (a._maxInstanceCount = o.meshPerAttribute * o.count);
                      } else
                        for (let t = 0; t < r.locationSize; t++)
                          u(r.location + t);
                      t.bindBuffer(t.ARRAY_BUFFER, c);
                      for (let t = 0; t < r.locationSize; t++)
                        f(
                          r.location + t,
                          s / r.locationSize,
                          h,
                          i,
                          s * p,
                          (s / r.locationSize) * t * p,
                          m
                        );
                    }
                  } else if (void 0 !== l) {
                    const e = l[i];
                    if (void 0 !== e)
                      switch (e.length) {
                        case 2:
                          t.vertexAttrib2fv(r.location, e);
                          break;
                        case 3:
                          t.vertexAttrib3fv(r.location, e);
                          break;
                        case 4:
                          t.vertexAttrib4fv(r.location, e);
                          break;
                        default:
                          t.vertexAttrib1fv(r.location, e);
                      }
                  }
                }
              }
              p();
            })(n, r, l, m),
            null !== g &&
              t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, e.get(g).buffer));
      },
      reset: m,
      resetDefaultState: g,
      dispose: function () {
        m();
        for (const t in i) {
          const e = i[t];
          for (const t in e) {
            const n = e[t];
            for (const t in n) l(n[t].object), delete n[t];
            delete e[t];
          }
          delete i[t];
        }
      },
      releaseStatesOfGeometry: function (t) {
        if (void 0 === i[t.id]) return;
        const e = i[t.id];
        for (const t in e) {
          const n = e[t];
          for (const t in n) l(n[t].object), delete n[t];
          delete e[t];
        }
        delete i[t.id];
      },
      releaseStatesOfProgram: function (t) {
        for (const e in i) {
          const n = i[e];
          if (void 0 === n[t.id]) continue;
          const r = n[t.id];
          for (const t in r) l(r[t].object), delete r[t];
          delete n[t.id];
        }
      },
      initAttributes: h,
      enableAttribute: u,
      disableUnusedAttributes: p,
    };
  }
  function Vr(t, e, n) {
    let i;
    function r(e, r, a) {
      0 !== a && (t.drawArraysInstanced(i, e, r, a), n.update(r, i, a));
    }
    (this.setMode = function (t) {
      i = t;
    }),
      (this.render = function (e, r) {
        t.drawArrays(i, e, r), n.update(r, i, 1);
      }),
      (this.renderInstances = r),
      (this.renderMultiDraw = function (t, r, a) {
        if (0 === a) return;
        e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, t, 0, r, 0, a);
        let s = 0;
        for (let t = 0; t < a; t++) s += r[t];
        n.update(s, i, 1);
      }),
      (this.renderMultiDrawInstances = function (t, a, s, o) {
        if (0 === s) return;
        const l = e.get("WEBGL_multi_draw");
        if (null === l) for (let e = 0; e < t.length; e++) r(t[e], a[e], o[e]);
        else {
          l.multiDrawArraysInstancedWEBGL(i, t, 0, a, 0, o, 0, s);
          let e = 0;
          for (let t = 0; t < s; t++) e += a[t];
          for (let t = 0; t < o.length; t++) n.update(e, i, o[t]);
        }
      });
  }
  function kr(t, e, n, i) {
    let r;
    function a(e) {
      if ("highp" === e) {
        if (
          t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision >
            0 &&
          t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT)
            .precision > 0
        )
          return "highp";
        e = "mediump";
      }
      return "mediump" === e &&
        t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision >
          0 &&
        t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT)
          .precision > 0
        ? "mediump"
        : "lowp";
    }
    let s = void 0 !== n.precision ? n.precision : "highp";
    const o = a(s);
    o !== s &&
      (console.warn(
        "THREE.WebGLRenderer:",
        s,
        "not supported, using",
        o,
        "instead."
      ),
      (s = o));
    const l = !0 === n.logarithmicDepthBuffer,
      c = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
      h = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
    return {
      isWebGL2: !0,
      getMaxAnisotropy: function () {
        if (void 0 !== r) return r;
        if (!0 === e.has("EXT_texture_filter_anisotropic")) {
          const n = e.get("EXT_texture_filter_anisotropic");
          r = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        } else r = 0;
        return r;
      },
      getMaxPrecision: a,
      textureFormatReadable: function (e) {
        return (
          e === lt ||
          i.convert(e) === t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT)
        );
      },
      textureTypeReadable: function (n) {
        const r =
          n === et &&
          (e.has("EXT_color_buffer_half_float") ||
            e.has("EXT_color_buffer_float"));
        return !(
          n !== q &&
          i.convert(n) !== t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE) &&
          n !== tt &&
          !r
        );
      },
      precision: s,
      logarithmicDepthBuffer: l,
      maxTextures: c,
      maxVertexTextures: h,
      maxTextureSize: t.getParameter(t.MAX_TEXTURE_SIZE),
      maxCubemapSize: t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
      maxAttributes: t.getParameter(t.MAX_VERTEX_ATTRIBS),
      maxVertexUniforms: t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
      maxVaryings: t.getParameter(t.MAX_VARYING_VECTORS),
      maxFragmentUniforms: t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
      vertexTextures: h > 0,
      maxSamples: t.getParameter(t.MAX_SAMPLES),
    };
  }
  function Gr(t) {
    const e = this;
    let n = null,
      i = 0,
      r = !1,
      a = !1;
    const s = new wr(),
      o = new Le(),
      l = { value: null, needsUpdate: !1 };
    function c(t, n, i, r) {
      const a = null !== t ? t.length : 0;
      let c = null;
      if (0 !== a) {
        if (((c = l.value), !0 !== r || null === c)) {
          const e = i + 4 * a,
            r = n.matrixWorldInverse;
          o.getNormalMatrix(r),
            (null === c || c.length < e) && (c = new Float32Array(e));
          for (let e = 0, n = i; e !== a; ++e, n += 4)
            s.copy(t[e]).applyMatrix4(r, o),
              s.normal.toArray(c, n),
              (c[n + 3] = s.constant);
        }
        (l.value = c), (l.needsUpdate = !0);
      }
      return (e.numPlanes = a), (e.numIntersection = 0), c;
    }
    (this.uniform = l),
      (this.numPlanes = 0),
      (this.numIntersection = 0),
      (this.init = function (t, e) {
        const n = 0 !== t.length || e || 0 !== i || r;
        return (r = e), (i = t.length), n;
      }),
      (this.beginShadows = function () {
        (a = !0), c(null);
      }),
      (this.endShadows = function () {
        a = !1;
      }),
      (this.setGlobalState = function (t, e) {
        n = c(t, e, 0);
      }),
      (this.setState = function (s, o, h) {
        const u = s.clippingPlanes,
          d = s.clipIntersection,
          p = s.clipShadows,
          f = t.get(s);
        if (!r || null === u || 0 === u.length || (a && !p))
          a
            ? c(null)
            : (l.value !== n && ((l.value = n), (l.needsUpdate = i > 0)),
              (e.numPlanes = i),
              (e.numIntersection = 0));
        else {
          const t = a ? 0 : i,
            e = 4 * t;
          let r = f.clippingState || null;
          (l.value = r), (r = c(u, o, e, h));
          for (let t = 0; t !== e; ++t) r[t] = n[t];
          (f.clippingState = r),
            (this.numIntersection = d ? this.numPlanes : 0),
            (this.numPlanes += t);
        }
      });
  }
  function Wr(t) {
    let e = new WeakMap();
    function n(t, e) {
      return 303 === e ? (t.mapping = O) : 304 === e && (t.mapping = F), t;
    }
    function i(t) {
      const n = t.target;
      n.removeEventListener("dispose", i);
      const r = e.get(n);
      void 0 !== r && (e.delete(n), r.dispose());
    }
    return {
      get: function (r) {
        if (r && r.isTexture) {
          const a = r.mapping;
          if (303 === a || 304 === a) {
            if (e.has(r)) return n(e.get(r).texture, r.mapping);
            {
              const a = r.image;
              if (a && a.height > 0) {
                const s = new Sr(a.height);
                return (
                  s.fromEquirectangularTexture(t, r),
                  e.set(r, s),
                  r.addEventListener("dispose", i),
                  n(s.texture, r.mapping)
                );
              }
              return null;
            }
          }
        }
        return r;
      },
      dispose: function () {
        e = new WeakMap();
      },
    };
  }
  class Xr extends fr {
    constructor(t = -1, e = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
      super(),
        (this.isOrthographicCamera = !0),
        (this.type = "OrthographicCamera"),
        (this.zoom = 1),
        (this.view = null),
        (this.left = t),
        (this.right = e),
        (this.top = n),
        (this.bottom = i),
        (this.near = r),
        (this.far = a),
        this.updateProjectionMatrix();
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        (this.left = t.left),
        (this.right = t.right),
        (this.top = t.top),
        (this.bottom = t.bottom),
        (this.near = t.near),
        (this.far = t.far),
        (this.zoom = t.zoom),
        (this.view = null === t.view ? null : Object.assign({}, t.view)),
        this
      );
    }
    setViewOffset(t, e, n, i, r, a) {
      null === this.view &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
        (this.view.enabled = !0),
        (this.view.fullWidth = t),
        (this.view.fullHeight = e),
        (this.view.offsetX = n),
        (this.view.offsetY = i),
        (this.view.width = r),
        (this.view.height = a),
        this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = !1),
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t = (this.right - this.left) / (2 * this.zoom),
        e = (this.top - this.bottom) / (2 * this.zoom),
        n = (this.right + this.left) / 2,
        i = (this.top + this.bottom) / 2;
      let r = n - t,
        a = n + t,
        s = i + e,
        o = i - e;
      if (null !== this.view && this.view.enabled) {
        const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
          e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        (r += t * this.view.offsetX),
          (a = r + t * this.view.width),
          (s -= e * this.view.offsetY),
          (o = s - e * this.view.height);
      }
      this.projectionMatrix.makeOrthographic(
        r,
        a,
        s,
        o,
        this.near,
        this.far,
        this.coordinateSystem
      ),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (
        (e.object.zoom = this.zoom),
        (e.object.left = this.left),
        (e.object.right = this.right),
        (e.object.top = this.top),
        (e.object.bottom = this.bottom),
        (e.object.near = this.near),
        (e.object.far = this.far),
        null !== this.view && (e.object.view = Object.assign({}, this.view)),
        e
      );
    }
  }
  const jr = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
    Yr = new Xr(),
    qr = new Ti();
  let Kr = null,
    Zr = 0,
    Jr = 0,
    $r = !1;
  const Qr = (1 + Math.sqrt(5)) / 2,
    ta = 1 / Qr,
    ea = [
      new an(-Qr, ta, 0),
      new an(Qr, ta, 0),
      new an(-ta, 0, Qr),
      new an(ta, 0, Qr),
      new an(0, Qr, -ta),
      new an(0, Qr, ta),
      new an(-1, 1, -1),
      new an(1, 1, -1),
      new an(-1, 1, 1),
      new an(1, 1, 1),
    ];
  class na {
    constructor(t) {
      (this._renderer = t),
        (this._pingPongRenderTarget = null),
        (this._lodMax = 0),
        (this._cubeSize = 0),
        (this._lodPlanes = []),
        (this._sizeLods = []),
        (this._sigmas = []),
        (this._blurMaterial = null),
        (this._cubemapMaterial = null),
        (this._equirectMaterial = null),
        this._compileMaterial(this._blurMaterial);
    }
    fromScene(t, e = 0, n = 0.1, i = 100) {
      (Kr = this._renderer.getRenderTarget()),
        (Zr = this._renderer.getActiveCubeFace()),
        (Jr = this._renderer.getActiveMipmapLevel()),
        ($r = this._renderer.xr.enabled),
        (this._renderer.xr.enabled = !1),
        this._setSize(256);
      const r = this._allocateTargets();
      return (
        (r.depthBuffer = !0),
        this._sceneToCubeUV(t, n, i, r),
        e > 0 && this._blur(r, 0, 0, e),
        this._applyPMREM(r),
        this._cleanup(r),
        r
      );
    }
    fromEquirectangular(t, e = null) {
      return this._fromTexture(t, e);
    }
    fromCubemap(t, e = null) {
      return this._fromTexture(t, e);
    }
    compileCubemapShader() {
      null === this._cubemapMaterial &&
        ((this._cubemapMaterial = sa()),
        this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      null === this._equirectMaterial &&
        ((this._equirectMaterial = aa()),
        this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
      this._dispose(),
        null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
        null !== this._equirectMaterial && this._equirectMaterial.dispose();
    }
    _setSize(t) {
      (this._lodMax = Math.floor(Math.log2(t))),
        (this._cubeSize = Math.pow(2, this._lodMax));
    }
    _dispose() {
      null !== this._blurMaterial && this._blurMaterial.dispose(),
        null !== this._pingPongRenderTarget &&
          this._pingPongRenderTarget.dispose();
      for (let t = 0; t < this._lodPlanes.length; t++)
        this._lodPlanes[t].dispose();
    }
    _cleanup(t) {
      this._renderer.setRenderTarget(Kr, Zr, Jr),
        (this._renderer.xr.enabled = $r),
        (t.scissorTest = !1),
        ra(t, 0, 0, t.width, t.height);
    }
    _fromTexture(t, e) {
      t.mapping === O || t.mapping === F
        ? this._setSize(
            0 === t.image.length
              ? 16
              : t.image[0].width || t.image[0].image.width
          )
        : this._setSize(t.image.width / 4),
        (Kr = this._renderer.getRenderTarget()),
        (Zr = this._renderer.getActiveCubeFace()),
        (Jr = this._renderer.getActiveMipmapLevel()),
        ($r = this._renderer.xr.enabled),
        (this._renderer.xr.enabled = !1);
      const n = e || this._allocateTargets();
      return (
        this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n
      );
    }
    _allocateTargets() {
      const t = 3 * Math.max(this._cubeSize, 112),
        e = 4 * this._cubeSize,
        n = {
          magFilter: X,
          minFilter: X,
          generateMipmaps: !1,
          type: et,
          format: lt,
          colorSpace: ee,
          depthBuffer: !1,
        },
        i = ia(t, e, n);
      if (
        null === this._pingPongRenderTarget ||
        this._pingPongRenderTarget.width !== t ||
        this._pingPongRenderTarget.height !== e
      ) {
        null !== this._pingPongRenderTarget && this._dispose(),
          (this._pingPongRenderTarget = ia(t, e, n));
        const { _lodMax: i } = this;
        ({
          sizeLods: this._sizeLods,
          lodPlanes: this._lodPlanes,
          sigmas: this._sigmas,
        } = (function (t) {
          const e = [],
            n = [],
            i = [];
          let r = t;
          const a = t - 4 + 1 + jr.length;
          for (let s = 0; s < a; s++) {
            const a = Math.pow(2, r);
            n.push(a);
            let o = 1 / a;
            s > t - 4 ? (o = jr[s - t + 4 - 1]) : 0 === s && (o = 0), i.push(o);
            const l = 1 / (a - 2),
              c = -l,
              h = 1 + l,
              u = [c, c, h, c, h, h, c, c, h, h, c, h],
              d = 6,
              p = 6,
              f = 3,
              m = 2,
              g = 1,
              _ = new Float32Array(f * p * d),
              v = new Float32Array(m * p * d),
              x = new Float32Array(g * p * d);
            for (let t = 0; t < d; t++) {
              const e = ((t % 3) * 2) / 3 - 1,
                n = t > 2 ? 0 : -1,
                i = [
                  e,
                  n,
                  0,
                  e + 2 / 3,
                  n,
                  0,
                  e + 2 / 3,
                  n + 1,
                  0,
                  e,
                  n,
                  0,
                  e + 2 / 3,
                  n + 1,
                  0,
                  e,
                  n + 1,
                  0,
                ];
              _.set(i, f * p * t), v.set(u, m * p * t);
              const r = [t, t, t, t, t, t];
              x.set(r, g * p * t);
            }
            const M = new ki();
            M.setAttribute("position", new Li(_, f)),
              M.setAttribute("uv", new Li(v, m)),
              M.setAttribute("faceIndex", new Li(x, g)),
              e.push(M),
              r > 4 && r--;
          }
          return { lodPlanes: e, sizeLods: n, sigmas: i };
        })(i)),
          (this._blurMaterial = (function (t, e, n) {
            const i = new Float32Array(20),
              r = new an(0, 1, 0);
            return new pr({
              name: "SphericalGaussianBlur",
              defines: {
                n: 20,
                CUBEUV_TEXEL_WIDTH: 1 / e,
                CUBEUV_TEXEL_HEIGHT: 1 / n,
                CUBEUV_MAX_MIP: `${t}.0`,
              },
              uniforms: {
                envMap: { value: null },
                samples: { value: 1 },
                weights: { value: i },
                latitudinal: { value: !1 },
                dTheta: { value: 0 },
                mipInt: { value: 0 },
                poleAxis: { value: r },
              },
              vertexShader:
                "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
              fragmentShader:
                "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
              blending: 0,
              depthTest: !1,
              depthWrite: !1,
            });
          })(i, t, e));
      }
      return i;
    }
    _compileMaterial(t) {
      const e = new sr(this._lodPlanes[0], t);
      this._renderer.compile(e, Yr);
    }
    _sceneToCubeUV(t, e, n, i) {
      const r = new vr(90, 1, e, n),
        a = [1, -1, 1, 1, 1, 1],
        s = [1, 1, 1, -1, -1, -1],
        o = this._renderer,
        l = o.autoClear,
        c = o.toneMapping;
      o.getClearColor(qr), (o.toneMapping = R), (o.autoClear = !1);
      const h = new Ri({
          name: "PMREM.Background",
          side: 1,
          depthWrite: !1,
          depthTest: !1,
        }),
        u = new sr(new lr(), h);
      let d = !1;
      const p = t.background;
      p
        ? p.isColor && (h.color.copy(p), (t.background = null), (d = !0))
        : (h.color.copy(qr), (d = !0));
      for (let e = 0; e < 6; e++) {
        const n = e % 3;
        0 === n
          ? (r.up.set(0, a[e], 0), r.lookAt(s[e], 0, 0))
          : 1 === n
          ? (r.up.set(0, 0, a[e]), r.lookAt(0, s[e], 0))
          : (r.up.set(0, a[e], 0), r.lookAt(0, 0, s[e]));
        const l = this._cubeSize;
        ra(i, n * l, e > 2 ? l : 0, l, l),
          o.setRenderTarget(i),
          d && o.render(u, r),
          o.render(t, r);
      }
      u.geometry.dispose(),
        u.material.dispose(),
        (o.toneMapping = c),
        (o.autoClear = l),
        (t.background = p);
    }
    _textureToCubeUV(t, e) {
      const n = this._renderer,
        i = t.mapping === O || t.mapping === F;
      i
        ? (null === this._cubemapMaterial && (this._cubemapMaterial = sa()),
          (this._cubemapMaterial.uniforms.flipEnvMap.value =
            !1 === t.isRenderTargetTexture ? -1 : 1))
        : null === this._equirectMaterial && (this._equirectMaterial = aa());
      const r = i ? this._cubemapMaterial : this._equirectMaterial,
        a = new sr(this._lodPlanes[0], r);
      r.uniforms.envMap.value = t;
      const s = this._cubeSize;
      ra(e, 0, 0, 3 * s, 2 * s), n.setRenderTarget(e), n.render(a, Yr);
    }
    _applyPMREM(t) {
      const e = this._renderer,
        n = e.autoClear;
      e.autoClear = !1;
      const i = this._lodPlanes.length;
      for (let e = 1; e < i; e++) {
        const n = Math.sqrt(
            this._sigmas[e] * this._sigmas[e] -
              this._sigmas[e - 1] * this._sigmas[e - 1]
          ),
          r = ea[(i - e - 1) % ea.length];
        this._blur(t, e - 1, e, n, r);
      }
      e.autoClear = n;
    }
    _blur(t, e, n, i, r) {
      const a = this._pingPongRenderTarget;
      this._halfBlur(t, a, e, n, i, "latitudinal", r),
        this._halfBlur(a, t, n, n, i, "longitudinal", r);
    }
    _halfBlur(t, e, n, i, r, a, s) {
      const o = this._renderer,
        l = this._blurMaterial;
      "latitudinal" !== a &&
        "longitudinal" !== a &&
        console.error(
          "blur direction must be either latitudinal or longitudinal!"
        );
      const c = new sr(this._lodPlanes[i], l),
        h = l.uniforms,
        u = this._sizeLods[n] - 1,
        d = isFinite(r) ? Math.PI / (2 * u) : (2 * Math.PI) / 39,
        p = r / d,
        f = isFinite(r) ? 1 + Math.floor(3 * p) : 20;
      f > 20 &&
        console.warn(
          `sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`
        );
      const m = [];
      let g = 0;
      for (let t = 0; t < 20; ++t) {
        const e = t / p,
          n = Math.exp((-e * e) / 2);
        m.push(n), 0 === t ? (g += n) : t < f && (g += 2 * n);
      }
      for (let t = 0; t < m.length; t++) m[t] = m[t] / g;
      (h.envMap.value = t.texture),
        (h.samples.value = f),
        (h.weights.value = m),
        (h.latitudinal.value = "latitudinal" === a),
        s && (h.poleAxis.value = s);
      const { _lodMax: _ } = this;
      (h.dTheta.value = d), (h.mipInt.value = _ - n);
      const v = this._sizeLods[i];
      ra(
        e,
        3 * v * (i > _ - 4 ? i - _ + 4 : 0),
        4 * (this._cubeSize - v),
        3 * v,
        2 * v
      ),
        o.setRenderTarget(e),
        o.render(c, Yr);
    }
  }
  function ia(t, e, n) {
    const i = new tn(t, e, n);
    return (
      (i.texture.mapping = z),
      (i.texture.name = "PMREM.cubeUv"),
      (i.scissorTest = !0),
      i
    );
  }
  function ra(t, e, n, i, r) {
    t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r);
  }
  function aa() {
    return new pr({
      name: "EquirectangularToCubeUV",
      uniforms: { envMap: { value: null } },
      vertexShader:
        "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
      fragmentShader:
        "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
      blending: 0,
      depthTest: !1,
      depthWrite: !1,
    });
  }
  function sa() {
    return new pr({
      name: "CubemapToCubeUV",
      uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
      vertexShader:
        "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
      fragmentShader:
        "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
      blending: 0,
      depthTest: !1,
      depthWrite: !1,
    });
  }
  function oa(t) {
    let e = new WeakMap(),
      n = null;
    function i(t) {
      const n = t.target;
      n.removeEventListener("dispose", i);
      const r = e.get(n);
      void 0 !== r && (e.delete(n), r.dispose());
    }
    return {
      get: function (r) {
        if (r && r.isTexture) {
          const a = r.mapping,
            s = 303 === a || 304 === a,
            o = a === O || a === F;
          if (s || o) {
            let a = e.get(r);
            const l = void 0 !== a ? a.texture.pmremVersion : 0;
            if (r.isRenderTargetTexture && r.pmremVersion !== l)
              return (
                null === n && (n = new na(t)),
                (a = s ? n.fromEquirectangular(r, a) : n.fromCubemap(r, a)),
                (a.texture.pmremVersion = r.pmremVersion),
                e.set(r, a),
                a.texture
              );
            if (void 0 !== a) return a.texture;
            {
              const l = r.image;
              return (s && l && l.height > 0) ||
                (o &&
                  l &&
                  (function (t) {
                    let e = 0;
                    for (let n = 0; n < 6; n++) void 0 !== t[n] && e++;
                    return 6 === e;
                  })(l))
                ? (null === n && (n = new na(t)),
                  (a = s ? n.fromEquirectangular(r) : n.fromCubemap(r)),
                  (a.texture.pmremVersion = r.pmremVersion),
                  e.set(r, a),
                  r.addEventListener("dispose", i),
                  a.texture)
                : null;
            }
          }
        }
        return r;
      },
      dispose: function () {
        (e = new WeakMap()), null !== n && (n.dispose(), (n = null));
      },
    };
  }
  function la(t) {
    const e = {};
    function n(n) {
      if (void 0 !== e[n]) return e[n];
      let i;
      switch (n) {
        case "WEBGL_depth_texture":
          i =
            t.getExtension("WEBGL_depth_texture") ||
            t.getExtension("MOZ_WEBGL_depth_texture") ||
            t.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          i =
            t.getExtension("EXT_texture_filter_anisotropic") ||
            t.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
            t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          i =
            t.getExtension("WEBGL_compressed_texture_s3tc") ||
            t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
            t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          i =
            t.getExtension("WEBGL_compressed_texture_pvrtc") ||
            t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          i = t.getExtension(n);
      }
      return (e[n] = i), i;
    }
    return {
      has: function (t) {
        return null !== n(t);
      },
      init: function () {
        n("EXT_color_buffer_float"),
          n("WEBGL_clip_cull_distance"),
          n("OES_texture_float_linear"),
          n("EXT_color_buffer_half_float"),
          n("WEBGL_multisampled_render_to_texture"),
          n("WEBGL_render_shared_exponent");
      },
      get: function (t) {
        const e = n(t);
        return (
          null === e &&
            Fe("THREE.WebGLRenderer: " + t + " extension not supported."),
          e
        );
      },
    };
  }
  function ca(t, e, n, i) {
    const r = {},
      a = new WeakMap();
    function s(t) {
      const o = t.target;
      null !== o.index && e.remove(o.index);
      for (const t in o.attributes) e.remove(o.attributes[t]);
      for (const t in o.morphAttributes) {
        const n = o.morphAttributes[t];
        for (let t = 0, i = n.length; t < i; t++) e.remove(n[t]);
      }
      o.removeEventListener("dispose", s), delete r[o.id];
      const l = a.get(o);
      l && (e.remove(l), a.delete(o)),
        i.releaseStatesOfGeometry(o),
        !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
        n.memory.geometries--;
    }
    function o(t) {
      const n = [],
        i = t.index,
        r = t.attributes.position;
      let s = 0;
      if (null !== i) {
        const t = i.array;
        s = i.version;
        for (let e = 0, i = t.length; e < i; e += 3) {
          const i = t[e + 0],
            r = t[e + 1],
            a = t[e + 2];
          n.push(i, r, r, a, a, i);
        }
      } else {
        if (void 0 === r) return;
        {
          const t = r.array;
          s = r.version;
          for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
            const t = e + 0,
              i = e + 1,
              r = e + 2;
            n.push(t, i, i, r, r, t);
          }
        }
      }
      const o = new (Ie(n) ? Ii : Ui)(n, 1);
      o.version = s;
      const l = a.get(t);
      l && e.remove(l), a.set(t, o);
    }
    return {
      get: function (t, e) {
        return (
          !0 === r[e.id] ||
            (e.addEventListener("dispose", s),
            (r[e.id] = !0),
            n.memory.geometries++),
          e
        );
      },
      update: function (n) {
        const i = n.attributes;
        for (const n in i) e.update(i[n], t.ARRAY_BUFFER);
        const r = n.morphAttributes;
        for (const n in r) {
          const i = r[n];
          for (let n = 0, r = i.length; n < r; n++)
            e.update(i[n], t.ARRAY_BUFFER);
        }
      },
      getWireframeAttribute: function (t) {
        const e = a.get(t);
        if (e) {
          const n = t.index;
          null !== n && e.version < n.version && o(t);
        } else o(t);
        return a.get(t);
      },
    };
  }
  function ha(t, e, n) {
    let i, r, a;
    function s(e, s, o) {
      0 !== o &&
        (t.drawElementsInstanced(i, s, r, e * a, o), n.update(s, i, o));
    }
    (this.setMode = function (t) {
      i = t;
    }),
      (this.setIndex = function (t) {
        (r = t.type), (a = t.bytesPerElement);
      }),
      (this.render = function (e, s) {
        t.drawElements(i, s, r, e * a), n.update(s, i, 1);
      }),
      (this.renderInstances = s),
      (this.renderMultiDraw = function (t, a, s) {
        if (0 === s) return;
        e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, a, 0, r, t, 0, s);
        let o = 0;
        for (let t = 0; t < s; t++) o += a[t];
        n.update(o, i, 1);
      }),
      (this.renderMultiDrawInstances = function (t, o, l, c) {
        if (0 === l) return;
        const h = e.get("WEBGL_multi_draw");
        if (null === h)
          for (let e = 0; e < t.length; e++) s(t[e] / a, o[e], c[e]);
        else {
          h.multiDrawElementsInstancedWEBGL(i, o, 0, r, t, 0, c, 0, l);
          let e = 0;
          for (let t = 0; t < l; t++) e += o[t];
          for (let t = 0; t < c.length; t++) n.update(e, i, c[t]);
        }
      });
  }
  function ua(t) {
    const e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    return {
      memory: { geometries: 0, textures: 0 },
      render: e,
      programs: null,
      autoReset: !0,
      reset: function () {
        (e.calls = 0), (e.triangles = 0), (e.points = 0), (e.lines = 0);
      },
      update: function (n, i, r) {
        switch ((e.calls++, i)) {
          case t.TRIANGLES:
            e.triangles += r * (n / 3);
            break;
          case t.LINES:
            e.lines += r * (n / 2);
            break;
          case t.LINE_STRIP:
            e.lines += r * (n - 1);
            break;
          case t.LINE_LOOP:
            e.lines += r * n;
            break;
          case t.POINTS:
            e.points += r * n;
            break;
          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", i);
        }
      },
    };
  }
  function da(t, e, n) {
    const i = new WeakMap(),
      r = new $e();
    return {
      update: function (a, s, o) {
        const l = a.morphTargetInfluences,
          c =
            s.morphAttributes.position ||
            s.morphAttributes.normal ||
            s.morphAttributes.color,
          h = void 0 !== c ? c.length : 0;
        let u = i.get(s);
        if (void 0 === u || u.count !== h) {
          void 0 !== u && u.texture.dispose();
          const d = void 0 !== s.morphAttributes.position,
            p = void 0 !== s.morphAttributes.normal,
            f = void 0 !== s.morphAttributes.color,
            m = s.morphAttributes.position || [],
            g = s.morphAttributes.normal || [],
            _ = s.morphAttributes.color || [];
          let v = 0;
          !0 === d && (v = 1), !0 === p && (v = 2), !0 === f && (v = 3);
          let x = s.attributes.position.count * v,
            M = 1;
          x > e.maxTextureSize &&
            ((M = Math.ceil(x / e.maxTextureSize)), (x = e.maxTextureSize));
          const y = new Float32Array(x * M * 4 * h),
            S = new en(y, x, M, h);
          (S.type = tt), (S.needsUpdate = !0);
          const E = 4 * v;
          for (let b = 0; b < h; b++) {
            const w = m[b],
              A = g[b],
              R = _[b],
              C = x * M * 4 * b;
            for (let P = 0; P < w.count; P++) {
              const L = P * E;
              !0 === d &&
                (r.fromBufferAttribute(w, P),
                (y[C + L + 0] = r.x),
                (y[C + L + 1] = r.y),
                (y[C + L + 2] = r.z),
                (y[C + L + 3] = 0)),
                !0 === p &&
                  (r.fromBufferAttribute(A, P),
                  (y[C + L + 4] = r.x),
                  (y[C + L + 5] = r.y),
                  (y[C + L + 6] = r.z),
                  (y[C + L + 7] = 0)),
                !0 === f &&
                  (r.fromBufferAttribute(R, P),
                  (y[C + L + 8] = r.x),
                  (y[C + L + 9] = r.y),
                  (y[C + L + 10] = r.z),
                  (y[C + L + 11] = 4 === R.itemSize ? r.w : 1));
            }
          }
          function T() {
            S.dispose(), i.delete(s), s.removeEventListener("dispose", T);
          }
          (u = { count: h, texture: S, size: new Pe(x, M) }),
            i.set(s, u),
            s.addEventListener("dispose", T);
        }
        if (!0 === a.isInstancedMesh && null !== a.morphTexture)
          o.getUniforms().setValue(t, "morphTexture", a.morphTexture, n);
        else {
          let U = 0;
          for (let D = 0; D < l.length; D++) U += l[D];
          const I = s.morphTargetsRelative ? 1 : 1 - U;
          o.getUniforms().setValue(t, "morphTargetBaseInfluence", I),
            o.getUniforms().setValue(t, "morphTargetInfluences", l);
        }
        o.getUniforms().setValue(t, "morphTargetsTexture", u.texture, n),
          o.getUniforms().setValue(t, "morphTargetsTextureSize", u.size);
      },
    };
  }
  function pa(t, e, n, i) {
    let r = new WeakMap();
    function a(t) {
      const e = t.target;
      e.removeEventListener("dispose", a),
        n.remove(e.instanceMatrix),
        null !== e.instanceColor && n.remove(e.instanceColor);
    }
    return {
      update: function (s) {
        const o = i.render.frame,
          l = s.geometry,
          c = e.get(s, l);
        if (
          (r.get(c) !== o && (e.update(c), r.set(c, o)),
          s.isInstancedMesh &&
            (!1 === s.hasEventListener("dispose", a) &&
              s.addEventListener("dispose", a),
            r.get(s) !== o &&
              (n.update(s.instanceMatrix, t.ARRAY_BUFFER),
              null !== s.instanceColor &&
                n.update(s.instanceColor, t.ARRAY_BUFFER),
              r.set(s, o))),
          s.isSkinnedMesh)
        ) {
          const t = s.skeleton;
          r.get(t) !== o && (t.update(), r.set(t, o));
        }
        return c;
      },
      dispose: function () {
        r = new WeakMap();
      },
    };
  }
  class fa extends Je {
    constructor(t, e, n, i, r, a, s, o, l, c = 1026) {
      if (c !== ut && c !== dt)
        throw new Error(
          "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
        );
      void 0 === n && c === ut && (n = Q),
        void 0 === n && c === dt && (n = rt),
        super(null, i, r, a, s, o, c, n, l),
        (this.isDepthTexture = !0),
        (this.image = { width: t, height: e }),
        (this.magFilter = void 0 !== s ? s : k),
        (this.minFilter = void 0 !== o ? o : k),
        (this.flipY = !1),
        (this.generateMipmaps = !1),
        (this.compareFunction = null);
    }
    copy(t) {
      return super.copy(t), (this.compareFunction = t.compareFunction), this;
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (
        null !== this.compareFunction &&
          (e.compareFunction = this.compareFunction),
        e
      );
    }
  }
  const ma = new Je(),
    ga = new fa(1, 1),
    _a = new en(),
    va = new nn(),
    xa = new yr(),
    Ma = [],
    ya = [],
    Sa = new Float32Array(16),
    Ea = new Float32Array(9),
    Ta = new Float32Array(4);
  function ba(t, e, n) {
    const i = t[0];
    if (i <= 0 || i > 0) return t;
    const r = e * n;
    let a = Ma[r];
    if ((void 0 === a && ((a = new Float32Array(r)), (Ma[r] = a)), 0 !== e)) {
      i.toArray(a, 0);
      for (let i = 1, r = 0; i !== e; ++i) (r += n), t[i].toArray(a, r);
    }
    return a;
  }
  function wa(t, e) {
    if (t.length !== e.length) return !1;
    for (let n = 0, i = t.length; n < i; n++) if (t[n] !== e[n]) return !1;
    return !0;
  }
  function Aa(t, e) {
    for (let n = 0, i = e.length; n < i; n++) t[n] = e[n];
  }
  function Ra(t, e) {
    let n = ya[e];
    void 0 === n && ((n = new Int32Array(e)), (ya[e] = n));
    for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
    return n;
  }
  function Ca(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1f(this.addr, e), (n[0] = e));
  }
  function Pa(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y) ||
        (t.uniform2f(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
    else {
      if (wa(n, e)) return;
      t.uniform2fv(this.addr, e), Aa(n, e);
    }
  }
  function La(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
        (t.uniform3f(this.addr, e.x, e.y, e.z),
        (n[0] = e.x),
        (n[1] = e.y),
        (n[2] = e.z));
    else if (void 0 !== e.r)
      (n[0] === e.r && n[1] === e.g && n[2] === e.b) ||
        (t.uniform3f(this.addr, e.r, e.g, e.b),
        (n[0] = e.r),
        (n[1] = e.g),
        (n[2] = e.b));
    else {
      if (wa(n, e)) return;
      t.uniform3fv(this.addr, e), Aa(n, e);
    }
  }
  function Ua(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
        (t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
        (n[0] = e.x),
        (n[1] = e.y),
        (n[2] = e.z),
        (n[3] = e.w));
    else {
      if (wa(n, e)) return;
      t.uniform4fv(this.addr, e), Aa(n, e);
    }
  }
  function Ia(t, e) {
    const n = this.cache,
      i = e.elements;
    if (void 0 === i) {
      if (wa(n, e)) return;
      t.uniformMatrix2fv(this.addr, !1, e), Aa(n, e);
    } else {
      if (wa(n, i)) return;
      Ta.set(i), t.uniformMatrix2fv(this.addr, !1, Ta), Aa(n, i);
    }
  }
  function Da(t, e) {
    const n = this.cache,
      i = e.elements;
    if (void 0 === i) {
      if (wa(n, e)) return;
      t.uniformMatrix3fv(this.addr, !1, e), Aa(n, e);
    } else {
      if (wa(n, i)) return;
      Ea.set(i), t.uniformMatrix3fv(this.addr, !1, Ea), Aa(n, i);
    }
  }
  function Na(t, e) {
    const n = this.cache,
      i = e.elements;
    if (void 0 === i) {
      if (wa(n, e)) return;
      t.uniformMatrix4fv(this.addr, !1, e), Aa(n, e);
    } else {
      if (wa(n, i)) return;
      Sa.set(i), t.uniformMatrix4fv(this.addr, !1, Sa), Aa(n, i);
    }
  }
  function Oa(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1i(this.addr, e), (n[0] = e));
  }
  function Fa(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y) ||
        (t.uniform2i(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
    else {
      if (wa(n, e)) return;
      t.uniform2iv(this.addr, e), Aa(n, e);
    }
  }
  function za(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
        (t.uniform3i(this.addr, e.x, e.y, e.z),
        (n[0] = e.x),
        (n[1] = e.y),
        (n[2] = e.z));
    else {
      if (wa(n, e)) return;
      t.uniform3iv(this.addr, e), Aa(n, e);
    }
  }
  function Ba(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
        (t.uniform4i(this.addr, e.x, e.y, e.z, e.w),
        (n[0] = e.x),
        (n[1] = e.y),
        (n[2] = e.z),
        (n[3] = e.w));
    else {
      if (wa(n, e)) return;
      t.uniform4iv(this.addr, e), Aa(n, e);
    }
  }
  function Ha(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1ui(this.addr, e), (n[0] = e));
  }
  function Va(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y) ||
        (t.uniform2ui(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
    else {
      if (wa(n, e)) return;
      t.uniform2uiv(this.addr, e), Aa(n, e);
    }
  }
  function ka(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
        (t.uniform3ui(this.addr, e.x, e.y, e.z),
        (n[0] = e.x),
        (n[1] = e.y),
        (n[2] = e.z));
    else {
      if (wa(n, e)) return;
      t.uniform3uiv(this.addr, e), Aa(n, e);
    }
  }
  function Ga(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
        (t.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
        (n[0] = e.x),
        (n[1] = e.y),
        (n[2] = e.z),
        (n[3] = e.w));
    else {
      if (wa(n, e)) return;
      t.uniform4uiv(this.addr, e), Aa(n, e);
    }
  }
  function Wa(t, e, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    let a;
    i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
      this.type === t.SAMPLER_2D_SHADOW
        ? ((ga.compareFunction = 515), (a = ga))
        : (a = ma),
      n.setTexture2D(e || a, r);
  }
  function Xa(t, e, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
      n.setTexture3D(e || va, r);
  }
  function ja(t, e, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
      n.setTextureCube(e || xa, r);
  }
  function Ya(t, e, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
      n.setTexture2DArray(e || _a, r);
  }
  function qa(t, e) {
    t.uniform1fv(this.addr, e);
  }
  function Ka(t, e) {
    const n = ba(e, this.size, 2);
    t.uniform2fv(this.addr, n);
  }
  function Za(t, e) {
    const n = ba(e, this.size, 3);
    t.uniform3fv(this.addr, n);
  }
  function Ja(t, e) {
    const n = ba(e, this.size, 4);
    t.uniform4fv(this.addr, n);
  }
  function $a(t, e) {
    const n = ba(e, this.size, 4);
    t.uniformMatrix2fv(this.addr, !1, n);
  }
  function Qa(t, e) {
    const n = ba(e, this.size, 9);
    t.uniformMatrix3fv(this.addr, !1, n);
  }
  function ts(t, e) {
    const n = ba(e, this.size, 16);
    t.uniformMatrix4fv(this.addr, !1, n);
  }
  function es(t, e) {
    t.uniform1iv(this.addr, e);
  }
  function ns(t, e) {
    t.uniform2iv(this.addr, e);
  }
  function is(t, e) {
    t.uniform3iv(this.addr, e);
  }
  function rs(t, e) {
    t.uniform4iv(this.addr, e);
  }
  function as(t, e) {
    t.uniform1uiv(this.addr, e);
  }
  function ss(t, e) {
    t.uniform2uiv(this.addr, e);
  }
  function os(t, e) {
    t.uniform3uiv(this.addr, e);
  }
  function ls(t, e) {
    t.uniform4uiv(this.addr, e);
  }
  function cs(t, e, n) {
    const i = this.cache,
      r = e.length,
      a = Ra(n, r);
    wa(i, a) || (t.uniform1iv(this.addr, a), Aa(i, a));
    for (let t = 0; t !== r; ++t) n.setTexture2D(e[t] || ma, a[t]);
  }
  function hs(t, e, n) {
    const i = this.cache,
      r = e.length,
      a = Ra(n, r);
    wa(i, a) || (t.uniform1iv(this.addr, a), Aa(i, a));
    for (let t = 0; t !== r; ++t) n.setTexture3D(e[t] || va, a[t]);
  }
  function us(t, e, n) {
    const i = this.cache,
      r = e.length,
      a = Ra(n, r);
    wa(i, a) || (t.uniform1iv(this.addr, a), Aa(i, a));
    for (let t = 0; t !== r; ++t) n.setTextureCube(e[t] || xa, a[t]);
  }
  function ds(t, e, n) {
    const i = this.cache,
      r = e.length,
      a = Ra(n, r);
    wa(i, a) || (t.uniform1iv(this.addr, a), Aa(i, a));
    for (let t = 0; t !== r; ++t) n.setTexture2DArray(e[t] || _a, a[t]);
  }
  class ps {
    constructor(t, e, n) {
      (this.id = t),
        (this.addr = n),
        (this.cache = []),
        (this.type = e.type),
        (this.setValue = (function (t) {
          switch (t) {
            case 5126:
              return Ca;
            case 35664:
              return Pa;
            case 35665:
              return La;
            case 35666:
              return Ua;
            case 35674:
              return Ia;
            case 35675:
              return Da;
            case 35676:
              return Na;
            case 5124:
            case 35670:
              return Oa;
            case 35667:
            case 35671:
              return Fa;
            case 35668:
            case 35672:
              return za;
            case 35669:
            case 35673:
              return Ba;
            case 5125:
              return Ha;
            case 36294:
              return Va;
            case 36295:
              return ka;
            case 36296:
              return Ga;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
              return Wa;
            case 35679:
            case 36299:
            case 36307:
              return Xa;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
              return ja;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
              return Ya;
          }
        })(e.type));
    }
  }
  class fs {
    constructor(t, e, n) {
      (this.id = t),
        (this.addr = n),
        (this.cache = []),
        (this.type = e.type),
        (this.size = e.size),
        (this.setValue = (function (t) {
          switch (t) {
            case 5126:
              return qa;
            case 35664:
              return Ka;
            case 35665:
              return Za;
            case 35666:
              return Ja;
            case 35674:
              return $a;
            case 35675:
              return Qa;
            case 35676:
              return ts;
            case 5124:
            case 35670:
              return es;
            case 35667:
            case 35671:
              return ns;
            case 35668:
            case 35672:
              return is;
            case 35669:
            case 35673:
              return rs;
            case 5125:
              return as;
            case 36294:
              return ss;
            case 36295:
              return os;
            case 36296:
              return ls;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
              return cs;
            case 35679:
            case 36299:
            case 36307:
              return hs;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
              return us;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
              return ds;
          }
        })(e.type));
    }
  }
  class ms {
    constructor(t) {
      (this.id = t), (this.seq = []), (this.map = {});
    }
    setValue(t, e, n) {
      const i = this.seq;
      for (let r = 0, a = i.length; r !== a; ++r) {
        const a = i[r];
        a.setValue(t, e[a.id], n);
      }
    }
  }
  const gs = /(\w+)(\])?(\[|\.)?/g;
  function _s(t, e) {
    t.seq.push(e), (t.map[e.id] = e);
  }
  function vs(t, e, n) {
    const i = t.name,
      r = i.length;
    for (gs.lastIndex = 0; ; ) {
      const a = gs.exec(i),
        s = gs.lastIndex;
      let o = a[1];
      const l = "]" === a[2],
        c = a[3];
      if ((l && (o |= 0), void 0 === c || ("[" === c && s + 2 === r))) {
        _s(n, void 0 === c ? new ps(o, t, e) : new fs(o, t, e));
        break;
      }
      {
        let t = n.map[o];
        void 0 === t && ((t = new ms(o)), _s(n, t)), (n = t);
      }
    }
  }
  class xs {
    constructor(t, e) {
      (this.seq = []), (this.map = {});
      const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
      for (let i = 0; i < n; ++i) {
        const n = t.getActiveUniform(e, i);
        vs(n, t.getUniformLocation(e, n.name), this);
      }
    }
    setValue(t, e, n, i) {
      const r = this.map[e];
      void 0 !== r && r.setValue(t, n, i);
    }
    setOptional(t, e, n) {
      const i = e[n];
      void 0 !== i && this.setValue(t, n, i);
    }
    static upload(t, e, n, i) {
      for (let r = 0, a = e.length; r !== a; ++r) {
        const a = e[r],
          s = n[a.id];
        !1 !== s.needsUpdate && a.setValue(t, s.value, i);
      }
    }
    static seqWithValue(t, e) {
      const n = [];
      for (let i = 0, r = t.length; i !== r; ++i) {
        const r = t[i];
        r.id in e && n.push(r);
      }
      return n;
    }
  }
  function Ms(t, e, n) {
    const i = t.createShader(e);
    return t.shaderSource(i, n), t.compileShader(i), i;
  }
  const ys = 37297;
  let Ss = 0;
  function Es(t, e, n) {
    const i = t.getShaderParameter(e, t.COMPILE_STATUS),
      r = t.getShaderInfoLog(e).trim();
    if (i && "" === r) return "";
    const a = /ERROR: 0:(\d+)/.exec(r);
    if (a) {
      const i = parseInt(a[1]);
      return (
        n.toUpperCase() +
        "\n\n" +
        r +
        "\n\n" +
        (function (t, e) {
          const n = t.split("\n"),
            i = [],
            r = Math.max(e - 6, 0),
            a = Math.min(e + 6, n.length);
          for (let t = r; t < a; t++) {
            const r = t + 1;
            i.push(`${r === e ? ">" : " "} ${r}: ${n[t]}`);
          }
          return i.join("\n");
        })(t.getShaderSource(e), i)
      );
    }
    return r;
  }
  function Ts(t, e) {
    const n = (function (t) {
      const e = ke.getPrimaries(ke.workingColorSpace),
        n = ke.getPrimaries(t);
      let i;
      switch (
        (e === n
          ? (i = "")
          : e === oe && n === se
          ? (i = "LinearDisplayP3ToLinearSRGB")
          : e === se && n === oe && (i = "LinearSRGBToLinearDisplayP3"),
        t)
      ) {
        case ee:
        case ie:
          return [i, "LinearTransferOETF"];
        case te:
        case ne:
          return [i, "sRGBTransferOETF"];
        default:
          return (
            console.warn("THREE.WebGLProgram: Unsupported color space:", t),
            [i, "LinearTransferOETF"]
          );
      }
    })(e);
    return `vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`;
  }
  function bs(t, e) {
    let n;
    switch (e) {
      case C:
        n = "Linear";
        break;
      case P:
        n = "Reinhard";
        break;
      case L:
        n = "OptimizedCineon";
        break;
      case U:
        n = "ACESFilmic";
        break;
      case D:
        n = "AgX";
        break;
      case N:
        n = "Neutral";
        break;
      case I:
        n = "Custom";
        break;
      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
          (n = "Linear");
    }
    return (
      "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
    );
  }
  const ws = new an();
  function As(t) {
    return "" !== t;
  }
  function Rs(t, e) {
    const n =
      e.numSpotLightShadows +
      e.numSpotLightMaps -
      e.numSpotLightShadowsWithMaps;
    return t
      .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
      .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
      .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
      .replace(/NUM_SPOT_LIGHT_COORDS/g, n)
      .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
      .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
      .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
      .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
      .replace(
        /NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,
        e.numSpotLightShadowsWithMaps
      )
      .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
      .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
  }
  function Cs(t, e) {
    return t
      .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
      .replace(
        /UNION_CLIPPING_PLANES/g,
        e.numClippingPlanes - e.numClipIntersection
      );
  }
  const Ps = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function Ls(t) {
    return t.replace(Ps, Is);
  }
  const Us = new Map();
  function Is(t, e) {
    let n = Ir[e];
    if (void 0 === n) {
      const t = Us.get(e);
      if (void 0 === t) throw new Error("Can not resolve #include <" + e + ">");
      (n = Ir[t]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          t
        );
    }
    return Ls(n);
  }
  const Ds =
    /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function Ns(t) {
    return t.replace(Ds, Os);
  }
  function Os(t, e, n, i) {
    let r = "";
    for (let t = parseInt(e); t < parseInt(n); t++)
      r += i
        .replace(/\[\s*i\s*\]/g, "[ " + t + " ]")
        .replace(/UNROLLED_LOOP_INDEX/g, t);
    return r;
  }
  function Fs(t) {
    let e = `precision ${t.precision} float;\n\tprecision ${t.precision} int;\n\tprecision ${t.precision} sampler2D;\n\tprecision ${t.precision} samplerCube;\n\tprecision ${t.precision} sampler3D;\n\tprecision ${t.precision} sampler2DArray;\n\tprecision ${t.precision} sampler2DShadow;\n\tprecision ${t.precision} samplerCubeShadow;\n\tprecision ${t.precision} sampler2DArrayShadow;\n\tprecision ${t.precision} isampler2D;\n\tprecision ${t.precision} isampler3D;\n\tprecision ${t.precision} isamplerCube;\n\tprecision ${t.precision} isampler2DArray;\n\tprecision ${t.precision} usampler2D;\n\tprecision ${t.precision} usampler3D;\n\tprecision ${t.precision} usamplerCube;\n\tprecision ${t.precision} usampler2DArray;\n\t`;
    return (
      "highp" === t.precision
        ? (e += "\n#define HIGH_PRECISION")
        : "mediump" === t.precision
        ? (e += "\n#define MEDIUM_PRECISION")
        : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"),
      e
    );
  }
  function zs(t, r, a, s) {
    const o = t.getContext(),
      l = a.defines;
    let c = a.vertexShader,
      h = a.fragmentShader;
    const u = (function (t) {
        let r = "SHADOWMAP_TYPE_BASIC";
        return (
          t.shadowMapType === e
            ? (r = "SHADOWMAP_TYPE_PCF")
            : t.shadowMapType === n
            ? (r = "SHADOWMAP_TYPE_PCF_SOFT")
            : t.shadowMapType === i && (r = "SHADOWMAP_TYPE_VSM"),
          r
        );
      })(a),
      d = (function (t) {
        let e = "ENVMAP_TYPE_CUBE";
        if (t.envMap)
          switch (t.envMapMode) {
            case O:
            case F:
              e = "ENVMAP_TYPE_CUBE";
              break;
            case z:
              e = "ENVMAP_TYPE_CUBE_UV";
          }
        return e;
      })(a),
      p = (function (t) {
        let e = "ENVMAP_MODE_REFLECTION";
        return (
          t.envMap && t.envMapMode === F && (e = "ENVMAP_MODE_REFRACTION"), e
        );
      })(a),
      f = (function (t) {
        let e = "ENVMAP_BLENDING_NONE";
        if (t.envMap)
          switch (t.combine) {
            case b:
              e = "ENVMAP_BLENDING_MULTIPLY";
              break;
            case w:
              e = "ENVMAP_BLENDING_MIX";
              break;
            case A:
              e = "ENVMAP_BLENDING_ADD";
          }
        return e;
      })(a),
      m = (function (t) {
        const e = t.envMapCubeUVHeight;
        if (null === e) return null;
        const n = Math.log2(e) - 2,
          i = 1 / e;
        return {
          texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
          texelHeight: i,
          maxMip: n,
        };
      })(a),
      g = (function (t) {
        return [
          t.extensionClipCullDistance
            ? "#extension GL_ANGLE_clip_cull_distance : require"
            : "",
          t.extensionMultiDraw
            ? "#extension GL_ANGLE_multi_draw : require"
            : "",
        ]
          .filter(As)
          .join("\n");
      })(a),
      _ = (function (t) {
        const e = [];
        for (const n in t) {
          const i = t[n];
          !1 !== i && e.push("#define " + n + " " + i);
        }
        return e.join("\n");
      })(l),
      v = o.createProgram();
    let x,
      M,
      y = a.glslVersion ? "#version " + a.glslVersion + "\n" : "";
    a.isRawShaderMaterial
      ? ((x = [
          "#define SHADER_TYPE " + a.shaderType,
          "#define SHADER_NAME " + a.shaderName,
          _,
        ]
          .filter(As)
          .join("\n")),
        x.length > 0 && (x += "\n"),
        (M = [
          "#define SHADER_TYPE " + a.shaderType,
          "#define SHADER_NAME " + a.shaderName,
          _,
        ]
          .filter(As)
          .join("\n")),
        M.length > 0 && (M += "\n"))
      : ((x = [
          Fs(a),
          "#define SHADER_TYPE " + a.shaderType,
          "#define SHADER_NAME " + a.shaderName,
          _,
          a.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
          a.batching ? "#define USE_BATCHING" : "",
          a.batchingColor ? "#define USE_BATCHING_COLOR" : "",
          a.instancing ? "#define USE_INSTANCING" : "",
          a.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
          a.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
          a.useFog && a.fog ? "#define USE_FOG" : "",
          a.useFog && a.fogExp2 ? "#define FOG_EXP2" : "",
          a.map ? "#define USE_MAP" : "",
          a.envMap ? "#define USE_ENVMAP" : "",
          a.envMap ? "#define " + p : "",
          a.lightMap ? "#define USE_LIGHTMAP" : "",
          a.aoMap ? "#define USE_AOMAP" : "",
          a.bumpMap ? "#define USE_BUMPMAP" : "",
          a.normalMap ? "#define USE_NORMALMAP" : "",
          a.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
          a.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
          a.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
          a.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
          a.anisotropy ? "#define USE_ANISOTROPY" : "",
          a.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
          a.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
          a.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
          a.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
          a.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
          a.iridescenceThicknessMap
            ? "#define USE_IRIDESCENCE_THICKNESSMAP"
            : "",
          a.specularMap ? "#define USE_SPECULARMAP" : "",
          a.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
          a.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
          a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
          a.metalnessMap ? "#define USE_METALNESSMAP" : "",
          a.alphaMap ? "#define USE_ALPHAMAP" : "",
          a.alphaHash ? "#define USE_ALPHAHASH" : "",
          a.transmission ? "#define USE_TRANSMISSION" : "",
          a.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
          a.thicknessMap ? "#define USE_THICKNESSMAP" : "",
          a.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
          a.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
          a.mapUv ? "#define MAP_UV " + a.mapUv : "",
          a.alphaMapUv ? "#define ALPHAMAP_UV " + a.alphaMapUv : "",
          a.lightMapUv ? "#define LIGHTMAP_UV " + a.lightMapUv : "",
          a.aoMapUv ? "#define AOMAP_UV " + a.aoMapUv : "",
          a.emissiveMapUv ? "#define EMISSIVEMAP_UV " + a.emissiveMapUv : "",
          a.bumpMapUv ? "#define BUMPMAP_UV " + a.bumpMapUv : "",
          a.normalMapUv ? "#define NORMALMAP_UV " + a.normalMapUv : "",
          a.displacementMapUv
            ? "#define DISPLACEMENTMAP_UV " + a.displacementMapUv
            : "",
          a.metalnessMapUv ? "#define METALNESSMAP_UV " + a.metalnessMapUv : "",
          a.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + a.roughnessMapUv : "",
          a.anisotropyMapUv
            ? "#define ANISOTROPYMAP_UV " + a.anisotropyMapUv
            : "",
          a.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + a.clearcoatMapUv : "",
          a.clearcoatNormalMapUv
            ? "#define CLEARCOAT_NORMALMAP_UV " + a.clearcoatNormalMapUv
            : "",
          a.clearcoatRoughnessMapUv
            ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + a.clearcoatRoughnessMapUv
            : "",
          a.iridescenceMapUv
            ? "#define IRIDESCENCEMAP_UV " + a.iridescenceMapUv
            : "",
          a.iridescenceThicknessMapUv
            ? "#define IRIDESCENCE_THICKNESSMAP_UV " +
              a.iridescenceThicknessMapUv
            : "",
          a.sheenColorMapUv
            ? "#define SHEEN_COLORMAP_UV " + a.sheenColorMapUv
            : "",
          a.sheenRoughnessMapUv
            ? "#define SHEEN_ROUGHNESSMAP_UV " + a.sheenRoughnessMapUv
            : "",
          a.specularMapUv ? "#define SPECULARMAP_UV " + a.specularMapUv : "",
          a.specularColorMapUv
            ? "#define SPECULAR_COLORMAP_UV " + a.specularColorMapUv
            : "",
          a.specularIntensityMapUv
            ? "#define SPECULAR_INTENSITYMAP_UV " + a.specularIntensityMapUv
            : "",
          a.transmissionMapUv
            ? "#define TRANSMISSIONMAP_UV " + a.transmissionMapUv
            : "",
          a.thicknessMapUv ? "#define THICKNESSMAP_UV " + a.thicknessMapUv : "",
          a.vertexTangents && !1 === a.flatShading ? "#define USE_TANGENT" : "",
          a.vertexColors ? "#define USE_COLOR" : "",
          a.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
          a.vertexUv1s ? "#define USE_UV1" : "",
          a.vertexUv2s ? "#define USE_UV2" : "",
          a.vertexUv3s ? "#define USE_UV3" : "",
          a.pointsUvs ? "#define USE_POINTS_UV" : "",
          a.flatShading ? "#define FLAT_SHADED" : "",
          a.skinning ? "#define USE_SKINNING" : "",
          a.morphTargets ? "#define USE_MORPHTARGETS" : "",
          a.morphNormals && !1 === a.flatShading
            ? "#define USE_MORPHNORMALS"
            : "",
          a.morphColors ? "#define USE_MORPHCOLORS" : "",
          a.morphTargetsCount > 0
            ? "#define MORPHTARGETS_TEXTURE_STRIDE " + a.morphTextureStride
            : "",
          a.morphTargetsCount > 0
            ? "#define MORPHTARGETS_COUNT " + a.morphTargetsCount
            : "",
          a.doubleSided ? "#define DOUBLE_SIDED" : "",
          a.flipSided ? "#define FLIP_SIDED" : "",
          a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
          a.shadowMapEnabled ? "#define " + u : "",
          a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
          a.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
          a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
          "uniform mat4 modelMatrix;",
          "uniform mat4 modelViewMatrix;",
          "uniform mat4 projectionMatrix;",
          "uniform mat4 viewMatrix;",
          "uniform mat3 normalMatrix;",
          "uniform vec3 cameraPosition;",
          "uniform bool isOrthographic;",
          "#ifdef USE_INSTANCING",
          "\tattribute mat4 instanceMatrix;",
          "#endif",
          "#ifdef USE_INSTANCING_COLOR",
          "\tattribute vec3 instanceColor;",
          "#endif",
          "#ifdef USE_INSTANCING_MORPH",
          "\tuniform sampler2D morphTexture;",
          "#endif",
          "attribute vec3 position;",
          "attribute vec3 normal;",
          "attribute vec2 uv;",
          "#ifdef USE_UV1",
          "\tattribute vec2 uv1;",
          "#endif",
          "#ifdef USE_UV2",
          "\tattribute vec2 uv2;",
          "#endif",
          "#ifdef USE_UV3",
          "\tattribute vec2 uv3;",
          "#endif",
          "#ifdef USE_TANGENT",
          "\tattribute vec4 tangent;",
          "#endif",
          "#if defined( USE_COLOR_ALPHA )",
          "\tattribute vec4 color;",
          "#elif defined( USE_COLOR )",
          "\tattribute vec3 color;",
          "#endif",
          "#ifdef USE_SKINNING",
          "\tattribute vec4 skinIndex;",
          "\tattribute vec4 skinWeight;",
          "#endif",
          "\n",
        ]
          .filter(As)
          .join("\n")),
        (M = [
          Fs(a),
          "#define SHADER_TYPE " + a.shaderType,
          "#define SHADER_NAME " + a.shaderName,
          _,
          a.useFog && a.fog ? "#define USE_FOG" : "",
          a.useFog && a.fogExp2 ? "#define FOG_EXP2" : "",
          a.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
          a.map ? "#define USE_MAP" : "",
          a.matcap ? "#define USE_MATCAP" : "",
          a.envMap ? "#define USE_ENVMAP" : "",
          a.envMap ? "#define " + d : "",
          a.envMap ? "#define " + p : "",
          a.envMap ? "#define " + f : "",
          m ? "#define CUBEUV_TEXEL_WIDTH " + m.texelWidth : "",
          m ? "#define CUBEUV_TEXEL_HEIGHT " + m.texelHeight : "",
          m ? "#define CUBEUV_MAX_MIP " + m.maxMip + ".0" : "",
          a.lightMap ? "#define USE_LIGHTMAP" : "",
          a.aoMap ? "#define USE_AOMAP" : "",
          a.bumpMap ? "#define USE_BUMPMAP" : "",
          a.normalMap ? "#define USE_NORMALMAP" : "",
          a.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
          a.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
          a.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
          a.anisotropy ? "#define USE_ANISOTROPY" : "",
          a.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
          a.clearcoat ? "#define USE_CLEARCOAT" : "",
          a.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
          a.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
          a.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
          a.dispersion ? "#define USE_DISPERSION" : "",
          a.iridescence ? "#define USE_IRIDESCENCE" : "",
          a.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
          a.iridescenceThicknessMap
            ? "#define USE_IRIDESCENCE_THICKNESSMAP"
            : "",
          a.specularMap ? "#define USE_SPECULARMAP" : "",
          a.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
          a.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
          a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
          a.metalnessMap ? "#define USE_METALNESSMAP" : "",
          a.alphaMap ? "#define USE_ALPHAMAP" : "",
          a.alphaTest ? "#define USE_ALPHATEST" : "",
          a.alphaHash ? "#define USE_ALPHAHASH" : "",
          a.sheen ? "#define USE_SHEEN" : "",
          a.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
          a.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
          a.transmission ? "#define USE_TRANSMISSION" : "",
          a.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
          a.thicknessMap ? "#define USE_THICKNESSMAP" : "",
          a.vertexTangents && !1 === a.flatShading ? "#define USE_TANGENT" : "",
          a.vertexColors || a.instancingColor || a.batchingColor
            ? "#define USE_COLOR"
            : "",
          a.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
          a.vertexUv1s ? "#define USE_UV1" : "",
          a.vertexUv2s ? "#define USE_UV2" : "",
          a.vertexUv3s ? "#define USE_UV3" : "",
          a.pointsUvs ? "#define USE_POINTS_UV" : "",
          a.gradientMap ? "#define USE_GRADIENTMAP" : "",
          a.flatShading ? "#define FLAT_SHADED" : "",
          a.doubleSided ? "#define DOUBLE_SIDED" : "",
          a.flipSided ? "#define FLIP_SIDED" : "",
          a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
          a.shadowMapEnabled ? "#define " + u : "",
          a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
          a.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
          a.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
          a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
          "uniform mat4 viewMatrix;",
          "uniform vec3 cameraPosition;",
          "uniform bool isOrthographic;",
          a.toneMapping !== R ? "#define TONE_MAPPING" : "",
          a.toneMapping !== R ? Ir.tonemapping_pars_fragment : "",
          a.toneMapping !== R ? bs("toneMapping", a.toneMapping) : "",
          a.dithering ? "#define DITHERING" : "",
          a.opaque ? "#define OPAQUE" : "",
          Ir.colorspace_pars_fragment,
          Ts("linearToOutputTexel", a.outputColorSpace),
          (ke.getLuminanceCoefficients(ws),
          [
            "float luminance( const in vec3 rgb ) {",
            `\tconst vec3 weights = vec3( ${ws.x.toFixed(4)}, ${ws.y.toFixed(
              4
            )}, ${ws.z.toFixed(4)} );`,
            "\treturn dot( weights, rgb );",
            "}",
          ].join("\n")),
          a.useDepthPacking ? "#define DEPTH_PACKING " + a.depthPacking : "",
          "\n",
        ]
          .filter(As)
          .join("\n"))),
      (c = Ls(c)),
      (c = Rs(c, a)),
      (c = Cs(c, a)),
      (h = Ls(h)),
      (h = Rs(h, a)),
      (h = Cs(h, a)),
      (c = Ns(c)),
      (h = Ns(h)),
      !0 !== a.isRawShaderMaterial &&
        ((y = "#version 300 es\n"),
        (x =
          [
            g,
            "#define attribute in",
            "#define varying out",
            "#define texture2D texture",
          ].join("\n") +
          "\n" +
          x),
        (M =
          [
            "#define varying in",
            a.glslVersion === _e
              ? ""
              : "layout(location = 0) out highp vec4 pc_fragColor;",
            a.glslVersion === _e ? "" : "#define gl_FragColor pc_fragColor",
            "#define gl_FragDepthEXT gl_FragDepth",
            "#define texture2D texture",
            "#define textureCube texture",
            "#define texture2DProj textureProj",
            "#define texture2DLodEXT textureLod",
            "#define texture2DProjLodEXT textureProjLod",
            "#define textureCubeLodEXT textureLod",
            "#define texture2DGradEXT textureGrad",
            "#define texture2DProjGradEXT textureProjGrad",
            "#define textureCubeGradEXT textureGrad",
          ].join("\n") +
          "\n" +
          M));
    const S = y + x + c,
      E = y + M + h,
      T = Ms(o, o.VERTEX_SHADER, S),
      C = Ms(o, o.FRAGMENT_SHADER, E);
    function P(e) {
      if (t.debug.checkShaderErrors) {
        const n = o.getProgramInfoLog(v).trim(),
          i = o.getShaderInfoLog(T).trim(),
          r = o.getShaderInfoLog(C).trim();
        let a = !0,
          s = !0;
        if (!1 === o.getProgramParameter(v, o.LINK_STATUS))
          if (((a = !1), "function" == typeof t.debug.onShaderError))
            t.debug.onShaderError(o, v, T, C);
          else {
            const t = Es(o, T, "vertex"),
              i = Es(o, C, "fragment");
            console.error(
              "THREE.WebGLProgram: Shader Error " +
                o.getError() +
                " - VALIDATE_STATUS " +
                o.getProgramParameter(v, o.VALIDATE_STATUS) +
                "\n\nMaterial Name: " +
                e.name +
                "\nMaterial Type: " +
                e.type +
                "\n\nProgram Info Log: " +
                n +
                "\n" +
                t +
                "\n" +
                i
            );
          }
        else
          "" !== n
            ? console.warn("THREE.WebGLProgram: Program Info Log:", n)
            : ("" !== i && "" !== r) || (s = !1);
        s &&
          (e.diagnostics = {
            runnable: a,
            programLog: n,
            vertexShader: { log: i, prefix: x },
            fragmentShader: { log: r, prefix: M },
          });
      }
      o.deleteShader(T),
        o.deleteShader(C),
        (L = new xs(o, v)),
        (U = (function (t, e) {
          const n = {},
            i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES);
          for (let r = 0; r < i; r++) {
            const i = t.getActiveAttrib(e, r),
              a = i.name;
            let s = 1;
            i.type === t.FLOAT_MAT2 && (s = 2),
              i.type === t.FLOAT_MAT3 && (s = 3),
              i.type === t.FLOAT_MAT4 && (s = 4),
              (n[a] = {
                type: i.type,
                location: t.getAttribLocation(e, a),
                locationSize: s,
              });
          }
          return n;
        })(o, v));
    }
    let L, U;
    o.attachShader(v, T),
      o.attachShader(v, C),
      void 0 !== a.index0AttributeName
        ? o.bindAttribLocation(v, 0, a.index0AttributeName)
        : !0 === a.morphTargets && o.bindAttribLocation(v, 0, "position"),
      o.linkProgram(v),
      (this.getUniforms = function () {
        return void 0 === L && P(this), L;
      }),
      (this.getAttributes = function () {
        return void 0 === U && P(this), U;
      });
    let I = !1 === a.rendererExtensionParallelShaderCompile;
    return (
      (this.isReady = function () {
        return !1 === I && (I = o.getProgramParameter(v, ys)), I;
      }),
      (this.destroy = function () {
        s.releaseStatesOfProgram(this),
          o.deleteProgram(v),
          (this.program = void 0);
      }),
      (this.type = a.shaderType),
      (this.name = a.shaderName),
      (this.id = Ss++),
      (this.cacheKey = r),
      (this.usedTimes = 1),
      (this.program = v),
      (this.vertexShader = T),
      (this.fragmentShader = C),
      this
    );
  }
  let Bs = 0;
  class Hs {
    constructor() {
      (this.shaderCache = new Map()), (this.materialCache = new Map());
    }
    update(t) {
      const e = t.vertexShader,
        n = t.fragmentShader,
        i = this._getShaderStage(e),
        r = this._getShaderStage(n),
        a = this._getShaderCacheForMaterial(t);
      return (
        !1 === a.has(i) && (a.add(i), i.usedTimes++),
        !1 === a.has(r) && (a.add(r), r.usedTimes++),
        this
      );
    }
    remove(t) {
      const e = this.materialCache.get(t);
      for (const t of e)
        t.usedTimes--, 0 === t.usedTimes && this.shaderCache.delete(t.code);
      return this.materialCache.delete(t), this;
    }
    getVertexShaderID(t) {
      return this._getShaderStage(t.vertexShader).id;
    }
    getFragmentShaderID(t) {
      return this._getShaderStage(t.fragmentShader).id;
    }
    dispose() {
      this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(t) {
      const e = this.materialCache;
      let n = e.get(t);
      return void 0 === n && ((n = new Set()), e.set(t, n)), n;
    }
    _getShaderStage(t) {
      const e = this.shaderCache;
      let n = e.get(t);
      return void 0 === n && ((n = new Vs(t)), e.set(t, n)), n;
    }
  }
  class Vs {
    constructor(t) {
      (this.id = Bs++), (this.code = t), (this.usedTimes = 0);
    }
  }
  function ks(t, e, n, i, r, a, s) {
    const o = new jn(),
      l = new Hs(),
      c = new Set(),
      h = [],
      u = r.logarithmicDepthBuffer,
      d = r.vertexTextures;
    let p = r.precision;
    const f = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite",
    };
    function m(t) {
      return c.add(t), 0 === t ? "uv" : `uv${t}`;
    }
    return {
      getParameters: function (a, o, h, g, _) {
        const v = g.fog,
          x = _.geometry,
          M = a.isMeshStandardMaterial ? g.environment : null,
          y = (a.isMeshStandardMaterial ? n : e).get(a.envMap || M),
          S = y && y.mapping === z ? y.image.height : null,
          E = f[a.type];
        null !== a.precision &&
          ((p = r.getMaxPrecision(a.precision)),
          p !== a.precision &&
            console.warn(
              "THREE.WebGLProgram.getParameters:",
              a.precision,
              "not supported, using",
              p,
              "instead."
            ));
        const T =
            x.morphAttributes.position ||
            x.morphAttributes.normal ||
            x.morphAttributes.color,
          b = void 0 !== T ? T.length : 0;
        let w,
          A,
          C,
          P,
          L = 0;
        if (
          (void 0 !== x.morphAttributes.position && (L = 1),
          void 0 !== x.morphAttributes.normal && (L = 2),
          void 0 !== x.morphAttributes.color && (L = 3),
          E)
        ) {
          const t = Nr[E];
          (w = t.vertexShader), (A = t.fragmentShader);
        } else
          (w = a.vertexShader),
            (A = a.fragmentShader),
            l.update(a),
            (C = l.getVertexShaderID(a)),
            (P = l.getFragmentShaderID(a));
        const U = t.getRenderTarget(),
          I = !0 === _.isInstancedMesh,
          D = !0 === _.isBatchedMesh,
          N = !!a.map,
          O = !!a.matcap,
          F = !!y,
          B = !!a.aoMap,
          H = !!a.lightMap,
          V = !!a.bumpMap,
          k = !!a.normalMap,
          G = !!a.displacementMap,
          W = !!a.emissiveMap,
          X = !!a.metalnessMap,
          j = !!a.roughnessMap,
          Y = a.anisotropy > 0,
          q = a.clearcoat > 0,
          K = a.dispersion > 0,
          Z = a.iridescence > 0,
          J = a.sheen > 0,
          $ = a.transmission > 0,
          Q = Y && !!a.anisotropyMap,
          tt = q && !!a.clearcoatMap,
          et = q && !!a.clearcoatNormalMap,
          nt = q && !!a.clearcoatRoughnessMap,
          it = Z && !!a.iridescenceMap,
          rt = Z && !!a.iridescenceThicknessMap,
          at = J && !!a.sheenColorMap,
          st = J && !!a.sheenRoughnessMap,
          ot = !!a.specularMap,
          lt = !!a.specularColorMap,
          ct = !!a.specularIntensityMap,
          ht = $ && !!a.transmissionMap,
          ut = $ && !!a.thicknessMap,
          dt = !!a.gradientMap,
          pt = !!a.alphaMap,
          ft = a.alphaTest > 0,
          mt = !!a.alphaHash,
          gt = !!a.extensions;
        let _t = R;
        a.toneMapped &&
          ((null !== U && !0 !== U.isXRRenderTarget) || (_t = t.toneMapping));
        const vt = {
          shaderID: E,
          shaderType: a.type,
          shaderName: a.name,
          vertexShader: w,
          fragmentShader: A,
          defines: a.defines,
          customVertexShaderID: C,
          customFragmentShaderID: P,
          isRawShaderMaterial: !0 === a.isRawShaderMaterial,
          glslVersion: a.glslVersion,
          precision: p,
          batching: D,
          batchingColor: D && null !== _._colorsTexture,
          instancing: I,
          instancingColor: I && null !== _.instanceColor,
          instancingMorph: I && null !== _.morphTexture,
          supportsVertexTextures: d,
          outputColorSpace:
            null === U
              ? t.outputColorSpace
              : !0 === U.isXRRenderTarget
              ? U.texture.colorSpace
              : ee,
          alphaToCoverage: !!a.alphaToCoverage,
          map: N,
          matcap: O,
          envMap: F,
          envMapMode: F && y.mapping,
          envMapCubeUVHeight: S,
          aoMap: B,
          lightMap: H,
          bumpMap: V,
          normalMap: k,
          displacementMap: d && G,
          emissiveMap: W,
          normalMapObjectSpace: k && 1 === a.normalMapType,
          normalMapTangentSpace: k && 0 === a.normalMapType,
          metalnessMap: X,
          roughnessMap: j,
          anisotropy: Y,
          anisotropyMap: Q,
          clearcoat: q,
          clearcoatMap: tt,
          clearcoatNormalMap: et,
          clearcoatRoughnessMap: nt,
          dispersion: K,
          iridescence: Z,
          iridescenceMap: it,
          iridescenceThicknessMap: rt,
          sheen: J,
          sheenColorMap: at,
          sheenRoughnessMap: st,
          specularMap: ot,
          specularColorMap: lt,
          specularIntensityMap: ct,
          transmission: $,
          transmissionMap: ht,
          thicknessMap: ut,
          gradientMap: dt,
          opaque:
            !1 === a.transparent &&
            1 === a.blending &&
            !1 === a.alphaToCoverage,
          alphaMap: pt,
          alphaTest: ft,
          alphaHash: mt,
          combine: a.combine,
          mapUv: N && m(a.map.channel),
          aoMapUv: B && m(a.aoMap.channel),
          lightMapUv: H && m(a.lightMap.channel),
          bumpMapUv: V && m(a.bumpMap.channel),
          normalMapUv: k && m(a.normalMap.channel),
          displacementMapUv: G && m(a.displacementMap.channel),
          emissiveMapUv: W && m(a.emissiveMap.channel),
          metalnessMapUv: X && m(a.metalnessMap.channel),
          roughnessMapUv: j && m(a.roughnessMap.channel),
          anisotropyMapUv: Q && m(a.anisotropyMap.channel),
          clearcoatMapUv: tt && m(a.clearcoatMap.channel),
          clearcoatNormalMapUv: et && m(a.clearcoatNormalMap.channel),
          clearcoatRoughnessMapUv: nt && m(a.clearcoatRoughnessMap.channel),
          iridescenceMapUv: it && m(a.iridescenceMap.channel),
          iridescenceThicknessMapUv: rt && m(a.iridescenceThicknessMap.channel),
          sheenColorMapUv: at && m(a.sheenColorMap.channel),
          sheenRoughnessMapUv: st && m(a.sheenRoughnessMap.channel),
          specularMapUv: ot && m(a.specularMap.channel),
          specularColorMapUv: lt && m(a.specularColorMap.channel),
          specularIntensityMapUv: ct && m(a.specularIntensityMap.channel),
          transmissionMapUv: ht && m(a.transmissionMap.channel),
          thicknessMapUv: ut && m(a.thicknessMap.channel),
          alphaMapUv: pt && m(a.alphaMap.channel),
          vertexTangents: !!x.attributes.tangent && (k || Y),
          vertexColors: a.vertexColors,
          vertexAlphas:
            !0 === a.vertexColors &&
            !!x.attributes.color &&
            4 === x.attributes.color.itemSize,
          pointsUvs: !0 === _.isPoints && !!x.attributes.uv && (N || pt),
          fog: !!v,
          useFog: !0 === a.fog,
          fogExp2: !!v && v.isFogExp2,
          flatShading: !0 === a.flatShading,
          sizeAttenuation: !0 === a.sizeAttenuation,
          logarithmicDepthBuffer: u,
          skinning: !0 === _.isSkinnedMesh,
          morphTargets: void 0 !== x.morphAttributes.position,
          morphNormals: void 0 !== x.morphAttributes.normal,
          morphColors: void 0 !== x.morphAttributes.color,
          morphTargetsCount: b,
          morphTextureStride: L,
          numDirLights: o.directional.length,
          numPointLights: o.point.length,
          numSpotLights: o.spot.length,
          numSpotLightMaps: o.spotLightMap.length,
          numRectAreaLights: o.rectArea.length,
          numHemiLights: o.hemi.length,
          numDirLightShadows: o.directionalShadowMap.length,
          numPointLightShadows: o.pointShadowMap.length,
          numSpotLightShadows: o.spotShadowMap.length,
          numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
          numLightProbes: o.numLightProbes,
          numClippingPlanes: s.numPlanes,
          numClipIntersection: s.numIntersection,
          dithering: a.dithering,
          shadowMapEnabled: t.shadowMap.enabled && h.length > 0,
          shadowMapType: t.shadowMap.type,
          toneMapping: _t,
          decodeVideoTexture:
            N &&
            !0 === a.map.isVideoTexture &&
            ke.getTransfer(a.map.colorSpace) === ae,
          premultipliedAlpha: a.premultipliedAlpha,
          doubleSided: 2 === a.side,
          flipSided: 1 === a.side,
          useDepthPacking: a.depthPacking >= 0,
          depthPacking: a.depthPacking || 0,
          index0AttributeName: a.index0AttributeName,
          extensionClipCullDistance:
            gt &&
            !0 === a.extensions.clipCullDistance &&
            i.has("WEBGL_clip_cull_distance"),
          extensionMultiDraw:
            ((gt && !0 === a.extensions.multiDraw) || D) &&
            i.has("WEBGL_multi_draw"),
          rendererExtensionParallelShaderCompile: i.has(
            "KHR_parallel_shader_compile"
          ),
          customProgramCacheKey: a.customProgramCacheKey(),
        };
        return (
          (vt.vertexUv1s = c.has(1)),
          (vt.vertexUv2s = c.has(2)),
          (vt.vertexUv3s = c.has(3)),
          c.clear(),
          vt
        );
      },
      getProgramCacheKey: function (e) {
        const n = [];
        if (
          (e.shaderID
            ? n.push(e.shaderID)
            : (n.push(e.customVertexShaderID),
              n.push(e.customFragmentShaderID)),
          void 0 !== e.defines)
        )
          for (const t in e.defines) n.push(t), n.push(e.defines[t]);
        return (
          !1 === e.isRawShaderMaterial &&
            ((function (t, e) {
              t.push(e.precision),
                t.push(e.outputColorSpace),
                t.push(e.envMapMode),
                t.push(e.envMapCubeUVHeight),
                t.push(e.mapUv),
                t.push(e.alphaMapUv),
                t.push(e.lightMapUv),
                t.push(e.aoMapUv),
                t.push(e.bumpMapUv),
                t.push(e.normalMapUv),
                t.push(e.displacementMapUv),
                t.push(e.emissiveMapUv),
                t.push(e.metalnessMapUv),
                t.push(e.roughnessMapUv),
                t.push(e.anisotropyMapUv),
                t.push(e.clearcoatMapUv),
                t.push(e.clearcoatNormalMapUv),
                t.push(e.clearcoatRoughnessMapUv),
                t.push(e.iridescenceMapUv),
                t.push(e.iridescenceThicknessMapUv),
                t.push(e.sheenColorMapUv),
                t.push(e.sheenRoughnessMapUv),
                t.push(e.specularMapUv),
                t.push(e.specularColorMapUv),
                t.push(e.specularIntensityMapUv),
                t.push(e.transmissionMapUv),
                t.push(e.thicknessMapUv),
                t.push(e.combine),
                t.push(e.fogExp2),
                t.push(e.sizeAttenuation),
                t.push(e.morphTargetsCount),
                t.push(e.morphAttributeCount),
                t.push(e.numDirLights),
                t.push(e.numPointLights),
                t.push(e.numSpotLights),
                t.push(e.numSpotLightMaps),
                t.push(e.numHemiLights),
                t.push(e.numRectAreaLights),
                t.push(e.numDirLightShadows),
                t.push(e.numPointLightShadows),
                t.push(e.numSpotLightShadows),
                t.push(e.numSpotLightShadowsWithMaps),
                t.push(e.numLightProbes),
                t.push(e.shadowMapType),
                t.push(e.toneMapping),
                t.push(e.numClippingPlanes),
                t.push(e.numClipIntersection),
                t.push(e.depthPacking);
            })(n, e),
            (function (t, e) {
              o.disableAll(),
                e.supportsVertexTextures && o.enable(0),
                e.instancing && o.enable(1),
                e.instancingColor && o.enable(2),
                e.instancingMorph && o.enable(3),
                e.matcap && o.enable(4),
                e.envMap && o.enable(5),
                e.normalMapObjectSpace && o.enable(6),
                e.normalMapTangentSpace && o.enable(7),
                e.clearcoat && o.enable(8),
                e.iridescence && o.enable(9),
                e.alphaTest && o.enable(10),
                e.vertexColors && o.enable(11),
                e.vertexAlphas && o.enable(12),
                e.vertexUv1s && o.enable(13),
                e.vertexUv2s && o.enable(14),
                e.vertexUv3s && o.enable(15),
                e.vertexTangents && o.enable(16),
                e.anisotropy && o.enable(17),
                e.alphaHash && o.enable(18),
                e.batching && o.enable(19),
                e.dispersion && o.enable(20),
                e.batchingColor && o.enable(21),
                t.push(o.mask),
                o.disableAll(),
                e.fog && o.enable(0),
                e.useFog && o.enable(1),
                e.flatShading && o.enable(2),
                e.logarithmicDepthBuffer && o.enable(3),
                e.skinning && o.enable(4),
                e.morphTargets && o.enable(5),
                e.morphNormals && o.enable(6),
                e.morphColors && o.enable(7),
                e.premultipliedAlpha && o.enable(8),
                e.shadowMapEnabled && o.enable(9),
                e.doubleSided && o.enable(10),
                e.flipSided && o.enable(11),
                e.useDepthPacking && o.enable(12),
                e.dithering && o.enable(13),
                e.transmission && o.enable(14),
                e.sheen && o.enable(15),
                e.opaque && o.enable(16),
                e.pointsUvs && o.enable(17),
                e.decodeVideoTexture && o.enable(18),
                e.alphaToCoverage && o.enable(19),
                t.push(o.mask);
            })(n, e),
            n.push(t.outputColorSpace)),
          n.push(e.customProgramCacheKey),
          n.join()
        );
      },
      getUniforms: function (t) {
        const e = f[t.type];
        let n;
        if (e) {
          const t = Nr[e];
          n = dr.clone(t.uniforms);
        } else n = t.uniforms;
        return n;
      },
      acquireProgram: function (e, n) {
        let i;
        for (let t = 0, e = h.length; t < e; t++) {
          const e = h[t];
          if (e.cacheKey === n) {
            (i = e), ++i.usedTimes;
            break;
          }
        }
        return void 0 === i && ((i = new zs(t, n, e, a)), h.push(i)), i;
      },
      releaseProgram: function (t) {
        if (0 == --t.usedTimes) {
          const e = h.indexOf(t);
          (h[e] = h[h.length - 1]), h.pop(), t.destroy();
        }
      },
      releaseShaderCache: function (t) {
        l.remove(t);
      },
      programs: h,
      dispose: function () {
        l.dispose();
      },
    };
  }
  function Gs() {
    let t = new WeakMap();
    return {
      get: function (e) {
        let n = t.get(e);
        return void 0 === n && ((n = {}), t.set(e, n)), n;
      },
      remove: function (e) {
        t.delete(e);
      },
      update: function (e, n, i) {
        t.get(e)[n] = i;
      },
      dispose: function () {
        t = new WeakMap();
      },
    };
  }
  function Ws(t, e) {
    return t.groupOrder !== e.groupOrder
      ? t.groupOrder - e.groupOrder
      : t.renderOrder !== e.renderOrder
      ? t.renderOrder - e.renderOrder
      : t.material.id !== e.material.id
      ? t.material.id - e.material.id
      : t.z !== e.z
      ? t.z - e.z
      : t.id - e.id;
  }
  function Xs(t, e) {
    return t.groupOrder !== e.groupOrder
      ? t.groupOrder - e.groupOrder
      : t.renderOrder !== e.renderOrder
      ? t.renderOrder - e.renderOrder
      : t.z !== e.z
      ? e.z - t.z
      : t.id - e.id;
  }
  function js() {
    const t = [];
    let e = 0;
    const n = [],
      i = [],
      r = [];
    function a(n, i, r, a, s, o) {
      let l = t[e];
      return (
        void 0 === l
          ? ((l = {
              id: n.id,
              object: n,
              geometry: i,
              material: r,
              groupOrder: a,
              renderOrder: n.renderOrder,
              z: s,
              group: o,
            }),
            (t[e] = l))
          : ((l.id = n.id),
            (l.object = n),
            (l.geometry = i),
            (l.material = r),
            (l.groupOrder = a),
            (l.renderOrder = n.renderOrder),
            (l.z = s),
            (l.group = o)),
        e++,
        l
      );
    }
    return {
      opaque: n,
      transmissive: i,
      transparent: r,
      init: function () {
        (e = 0), (n.length = 0), (i.length = 0), (r.length = 0);
      },
      push: function (t, e, s, o, l, c) {
        const h = a(t, e, s, o, l, c);
        s.transmission > 0
          ? i.push(h)
          : !0 === s.transparent
          ? r.push(h)
          : n.push(h);
      },
      unshift: function (t, e, s, o, l, c) {
        const h = a(t, e, s, o, l, c);
        s.transmission > 0
          ? i.unshift(h)
          : !0 === s.transparent
          ? r.unshift(h)
          : n.unshift(h);
      },
      finish: function () {
        for (let n = e, i = t.length; n < i; n++) {
          const e = t[n];
          if (null === e.id) break;
          (e.id = null),
            (e.object = null),
            (e.geometry = null),
            (e.material = null),
            (e.group = null);
        }
      },
      sort: function (t, e) {
        n.length > 1 && n.sort(t || Ws),
          i.length > 1 && i.sort(e || Xs),
          r.length > 1 && r.sort(e || Xs);
      },
    };
  }
  function Ys() {
    let t = new WeakMap();
    return {
      get: function (e, n) {
        const i = t.get(e);
        let r;
        return (
          void 0 === i
            ? ((r = new js()), t.set(e, [r]))
            : n >= i.length
            ? ((r = new js()), i.push(r))
            : (r = i[n]),
          r
        );
      },
      dispose: function () {
        t = new WeakMap();
      },
    };
  }
  function qs() {
    const t = {};
    return {
      get: function (e) {
        if (void 0 !== t[e.id]) return t[e.id];
        let n;
        switch (e.type) {
          case "DirectionalLight":
            n = { direction: new an(), color: new Ti() };
            break;
          case "SpotLight":
            n = {
              position: new an(),
              direction: new an(),
              color: new Ti(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0,
            };
            break;
          case "PointLight":
            n = { position: new an(), color: new Ti(), distance: 0, decay: 0 };
            break;
          case "HemisphereLight":
            n = {
              direction: new an(),
              skyColor: new Ti(),
              groundColor: new Ti(),
            };
            break;
          case "RectAreaLight":
            n = {
              color: new Ti(),
              position: new an(),
              halfWidth: new an(),
              halfHeight: new an(),
            };
        }
        return (t[e.id] = n), n;
      },
    };
  }
  let Ks = 0;
  function Zs(t, e) {
    return (
      (e.castShadow ? 2 : 0) -
      (t.castShadow ? 2 : 0) +
      (e.map ? 1 : 0) -
      (t.map ? 1 : 0)
    );
  }
  function Js(t) {
    const e = new qs(),
      n = (function () {
        const t = {};
        return {
          get: function (e) {
            if (void 0 !== t[e.id]) return t[e.id];
            let n;
            switch (e.type) {
              case "DirectionalLight":
              case "SpotLight":
                n = {
                  shadowIntensity: 1,
                  shadowBias: 0,
                  shadowNormalBias: 0,
                  shadowRadius: 1,
                  shadowMapSize: new Pe(),
                };
                break;
              case "PointLight":
                n = {
                  shadowIntensity: 1,
                  shadowBias: 0,
                  shadowNormalBias: 0,
                  shadowRadius: 1,
                  shadowMapSize: new Pe(),
                  shadowCameraNear: 1,
                  shadowCameraFar: 1e3,
                };
            }
            return (t[e.id] = n), n;
          },
        };
      })(),
      i = {
        version: 0,
        hash: {
          directionalLength: -1,
          pointLength: -1,
          spotLength: -1,
          rectAreaLength: -1,
          hemiLength: -1,
          numDirectionalShadows: -1,
          numPointShadows: -1,
          numSpotShadows: -1,
          numSpotMaps: -1,
          numLightProbes: -1,
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotLightMap: [],
        spotShadow: [],
        spotShadowMap: [],
        spotLightMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numSpotLightShadowsWithMaps: 0,
        numLightProbes: 0,
      };
    for (let t = 0; t < 9; t++) i.probe.push(new an());
    const r = new an(),
      a = new Nn(),
      s = new Nn();
    return {
      setup: function (r) {
        let a = 0,
          s = 0,
          o = 0;
        for (let t = 0; t < 9; t++) i.probe[t].set(0, 0, 0);
        let l = 0,
          c = 0,
          h = 0,
          u = 0,
          d = 0,
          p = 0,
          f = 0,
          m = 0,
          g = 0,
          _ = 0,
          v = 0;
        r.sort(Zs);
        for (let t = 0, x = r.length; t < x; t++) {
          const x = r[t],
            M = x.color,
            y = x.intensity,
            S = x.distance,
            E = x.shadow && x.shadow.map ? x.shadow.map.texture : null;
          if (x.isAmbientLight) (a += M.r * y), (s += M.g * y), (o += M.b * y);
          else if (x.isLightProbe) {
            for (let t = 0; t < 9; t++)
              i.probe[t].addScaledVector(x.sh.coefficients[t], y);
            v++;
          } else if (x.isDirectionalLight) {
            const t = e.get(x);
            if (
              (t.color.copy(x.color).multiplyScalar(x.intensity), x.castShadow)
            ) {
              const t = x.shadow,
                e = n.get(x);
              (e.shadowIntensity = t.intensity),
                (e.shadowBias = t.bias),
                (e.shadowNormalBias = t.normalBias),
                (e.shadowRadius = t.radius),
                (e.shadowMapSize = t.mapSize),
                (i.directionalShadow[l] = e),
                (i.directionalShadowMap[l] = E),
                (i.directionalShadowMatrix[l] = x.shadow.matrix),
                p++;
            }
            (i.directional[l] = t), l++;
          } else if (x.isSpotLight) {
            const t = e.get(x);
            t.position.setFromMatrixPosition(x.matrixWorld),
              t.color.copy(M).multiplyScalar(y),
              (t.distance = S),
              (t.coneCos = Math.cos(x.angle)),
              (t.penumbraCos = Math.cos(x.angle * (1 - x.penumbra))),
              (t.decay = x.decay),
              (i.spot[h] = t);
            const r = x.shadow;
            if (
              (x.map &&
                ((i.spotLightMap[g] = x.map),
                g++,
                r.updateMatrices(x),
                x.castShadow && _++),
              (i.spotLightMatrix[h] = r.matrix),
              x.castShadow)
            ) {
              const t = n.get(x);
              (t.shadowIntensity = r.intensity),
                (t.shadowBias = r.bias),
                (t.shadowNormalBias = r.normalBias),
                (t.shadowRadius = r.radius),
                (t.shadowMapSize = r.mapSize),
                (i.spotShadow[h] = t),
                (i.spotShadowMap[h] = E),
                m++;
            }
            h++;
          } else if (x.isRectAreaLight) {
            const t = e.get(x);
            t.color.copy(M).multiplyScalar(y),
              t.halfWidth.set(0.5 * x.width, 0, 0),
              t.halfHeight.set(0, 0.5 * x.height, 0),
              (i.rectArea[u] = t),
              u++;
          } else if (x.isPointLight) {
            const t = e.get(x);
            if (
              (t.color.copy(x.color).multiplyScalar(x.intensity),
              (t.distance = x.distance),
              (t.decay = x.decay),
              x.castShadow)
            ) {
              const t = x.shadow,
                e = n.get(x);
              (e.shadowIntensity = t.intensity),
                (e.shadowBias = t.bias),
                (e.shadowNormalBias = t.normalBias),
                (e.shadowRadius = t.radius),
                (e.shadowMapSize = t.mapSize),
                (e.shadowCameraNear = t.camera.near),
                (e.shadowCameraFar = t.camera.far),
                (i.pointShadow[c] = e),
                (i.pointShadowMap[c] = E),
                (i.pointShadowMatrix[c] = x.shadow.matrix),
                f++;
            }
            (i.point[c] = t), c++;
          } else if (x.isHemisphereLight) {
            const t = e.get(x);
            t.skyColor.copy(x.color).multiplyScalar(y),
              t.groundColor.copy(x.groundColor).multiplyScalar(y),
              (i.hemi[d] = t),
              d++;
          }
        }
        u > 0 &&
          (!0 === t.has("OES_texture_float_linear")
            ? ((i.rectAreaLTC1 = Dr.LTC_FLOAT_1),
              (i.rectAreaLTC2 = Dr.LTC_FLOAT_2))
            : ((i.rectAreaLTC1 = Dr.LTC_HALF_1),
              (i.rectAreaLTC2 = Dr.LTC_HALF_2))),
          (i.ambient[0] = a),
          (i.ambient[1] = s),
          (i.ambient[2] = o);
        const x = i.hash;
        (x.directionalLength === l &&
          x.pointLength === c &&
          x.spotLength === h &&
          x.rectAreaLength === u &&
          x.hemiLength === d &&
          x.numDirectionalShadows === p &&
          x.numPointShadows === f &&
          x.numSpotShadows === m &&
          x.numSpotMaps === g &&
          x.numLightProbes === v) ||
          ((i.directional.length = l),
          (i.spot.length = h),
          (i.rectArea.length = u),
          (i.point.length = c),
          (i.hemi.length = d),
          (i.directionalShadow.length = p),
          (i.directionalShadowMap.length = p),
          (i.pointShadow.length = f),
          (i.pointShadowMap.length = f),
          (i.spotShadow.length = m),
          (i.spotShadowMap.length = m),
          (i.directionalShadowMatrix.length = p),
          (i.pointShadowMatrix.length = f),
          (i.spotLightMatrix.length = m + g - _),
          (i.spotLightMap.length = g),
          (i.numSpotLightShadowsWithMaps = _),
          (i.numLightProbes = v),
          (x.directionalLength = l),
          (x.pointLength = c),
          (x.spotLength = h),
          (x.rectAreaLength = u),
          (x.hemiLength = d),
          (x.numDirectionalShadows = p),
          (x.numPointShadows = f),
          (x.numSpotShadows = m),
          (x.numSpotMaps = g),
          (x.numLightProbes = v),
          (i.version = Ks++));
      },
      setupView: function (t, e) {
        let n = 0,
          o = 0,
          l = 0,
          c = 0,
          h = 0;
        const u = e.matrixWorldInverse;
        for (let e = 0, d = t.length; e < d; e++) {
          const d = t[e];
          if (d.isDirectionalLight) {
            const t = i.directional[n];
            t.direction.setFromMatrixPosition(d.matrixWorld),
              r.setFromMatrixPosition(d.target.matrixWorld),
              t.direction.sub(r),
              t.direction.transformDirection(u),
              n++;
          } else if (d.isSpotLight) {
            const t = i.spot[l];
            t.position.setFromMatrixPosition(d.matrixWorld),
              t.position.applyMatrix4(u),
              t.direction.setFromMatrixPosition(d.matrixWorld),
              r.setFromMatrixPosition(d.target.matrixWorld),
              t.direction.sub(r),
              t.direction.transformDirection(u),
              l++;
          } else if (d.isRectAreaLight) {
            const t = i.rectArea[c];
            t.position.setFromMatrixPosition(d.matrixWorld),
              t.position.applyMatrix4(u),
              s.identity(),
              a.copy(d.matrixWorld),
              a.premultiply(u),
              s.extractRotation(a),
              t.halfWidth.set(0.5 * d.width, 0, 0),
              t.halfHeight.set(0, 0.5 * d.height, 0),
              t.halfWidth.applyMatrix4(s),
              t.halfHeight.applyMatrix4(s),
              c++;
          } else if (d.isPointLight) {
            const t = i.point[o];
            t.position.setFromMatrixPosition(d.matrixWorld),
              t.position.applyMatrix4(u),
              o++;
          } else if (d.isHemisphereLight) {
            const t = i.hemi[h];
            t.direction.setFromMatrixPosition(d.matrixWorld),
              t.direction.transformDirection(u),
              h++;
          }
        }
      },
      state: i,
    };
  }
  function $s(t) {
    const e = new Js(t),
      n = [],
      i = [],
      r = {
        lightsArray: n,
        shadowsArray: i,
        camera: null,
        lights: e,
        transmissionRenderTarget: {},
      };
    return {
      init: function (t) {
        (r.camera = t), (n.length = 0), (i.length = 0);
      },
      state: r,
      setupLights: function () {
        e.setup(n);
      },
      setupLightsView: function (t) {
        e.setupView(n, t);
      },
      pushLight: function (t) {
        n.push(t);
      },
      pushShadow: function (t) {
        i.push(t);
      },
    };
  }
  function Qs(t) {
    let e = new WeakMap();
    return {
      get: function (n, i = 0) {
        const r = e.get(n);
        let a;
        return (
          void 0 === r
            ? ((a = new $s(t)), e.set(n, [a]))
            : i >= r.length
            ? ((a = new $s(t)), r.push(a))
            : (a = r[i]),
          a
        );
      },
      dispose: function () {
        e = new WeakMap();
      },
    };
  }
  class to extends Ai {
    constructor(t) {
      super(),
        (this.isMeshDepthMaterial = !0),
        (this.type = "MeshDepthMaterial"),
        (this.depthPacking = 3200),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        (this.depthPacking = t.depthPacking),
        (this.map = t.map),
        (this.alphaMap = t.alphaMap),
        (this.displacementMap = t.displacementMap),
        (this.displacementScale = t.displacementScale),
        (this.displacementBias = t.displacementBias),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        this
      );
    }
  }
  class eo extends Ai {
    constructor(t) {
      super(),
        (this.isMeshDistanceMaterial = !0),
        (this.type = "MeshDistanceMaterial"),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        (this.map = t.map),
        (this.alphaMap = t.alphaMap),
        (this.displacementMap = t.displacementMap),
        (this.displacementScale = t.displacementScale),
        (this.displacementBias = t.displacementBias),
        this
      );
    }
  }
  function no(t, n, o) {
    let l = new Cr();
    const c = new Pe(),
      h = new Pe(),
      u = new $e(),
      d = new to({ depthPacking: 3201 }),
      p = new eo(),
      f = {},
      m = o.maxTextureSize,
      g = { [r]: 1, [a]: 0, [s]: 2 },
      _ = new pr({
        defines: { VSM_SAMPLES: 8 },
        uniforms: {
          shadow_pass: { value: null },
          resolution: { value: new Pe() },
          radius: { value: 4 },
        },
        vertexShader:
          "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
        fragmentShader:
          "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}",
      }),
      v = _.clone();
    v.defines.HORIZONTAL_PASS = 1;
    const x = new ki();
    x.setAttribute(
      "position",
      new Li(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
    );
    const M = new sr(x, _),
      y = this;
    (this.enabled = !1),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this.type = e);
    let S = this.type;
    function E(e, i) {
      const r = n.update(M);
      _.defines.VSM_SAMPLES !== e.blurSamples &&
        ((_.defines.VSM_SAMPLES = e.blurSamples),
        (v.defines.VSM_SAMPLES = e.blurSamples),
        (_.needsUpdate = !0),
        (v.needsUpdate = !0)),
        null === e.mapPass && (e.mapPass = new tn(c.x, c.y)),
        (_.uniforms.shadow_pass.value = e.map.texture),
        (_.uniforms.resolution.value = e.mapSize),
        (_.uniforms.radius.value = e.radius),
        t.setRenderTarget(e.mapPass),
        t.clear(),
        t.renderBufferDirect(i, null, r, _, M, null),
        (v.uniforms.shadow_pass.value = e.mapPass.texture),
        (v.uniforms.resolution.value = e.mapSize),
        (v.uniforms.radius.value = e.radius),
        t.setRenderTarget(e.map),
        t.clear(),
        t.renderBufferDirect(i, null, r, v, M, null);
    }
    function T(e, n, r, a) {
      let s = null;
      const o =
        !0 === r.isPointLight
          ? e.customDistanceMaterial
          : e.customDepthMaterial;
      if (void 0 !== o) s = o;
      else if (
        ((s = !0 === r.isPointLight ? p : d),
        (t.localClippingEnabled &&
          !0 === n.clipShadows &&
          Array.isArray(n.clippingPlanes) &&
          0 !== n.clippingPlanes.length) ||
          (n.displacementMap && 0 !== n.displacementScale) ||
          (n.alphaMap && n.alphaTest > 0) ||
          (n.map && n.alphaTest > 0))
      ) {
        const t = s.uuid,
          e = n.uuid;
        let i = f[t];
        void 0 === i && ((i = {}), (f[t] = i));
        let r = i[e];
        void 0 === r &&
          ((r = s.clone()), (i[e] = r), n.addEventListener("dispose", w)),
          (s = r);
      }
      return (
        (s.visible = n.visible),
        (s.wireframe = n.wireframe),
        (s.side =
          a === i
            ? null !== n.shadowSide
              ? n.shadowSide
              : n.side
            : null !== n.shadowSide
            ? n.shadowSide
            : g[n.side]),
        (s.alphaMap = n.alphaMap),
        (s.alphaTest = n.alphaTest),
        (s.map = n.map),
        (s.clipShadows = n.clipShadows),
        (s.clippingPlanes = n.clippingPlanes),
        (s.clipIntersection = n.clipIntersection),
        (s.displacementMap = n.displacementMap),
        (s.displacementScale = n.displacementScale),
        (s.displacementBias = n.displacementBias),
        (s.wireframeLinewidth = n.wireframeLinewidth),
        (s.linewidth = n.linewidth),
        !0 === r.isPointLight &&
          !0 === s.isMeshDistanceMaterial &&
          (t.properties.get(s).light = r),
        s
      );
    }
    function b(e, r, a, s, o) {
      if (!1 === e.visible) return;
      if (
        e.layers.test(r.layers) &&
        (e.isMesh || e.isLine || e.isPoints) &&
        (e.castShadow || (e.receiveShadow && o === i)) &&
        (!e.frustumCulled || l.intersectsObject(e))
      ) {
        e.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, e.matrixWorld);
        const i = n.update(e),
          l = e.material;
        if (Array.isArray(l)) {
          const n = i.groups;
          for (let c = 0, h = n.length; c < h; c++) {
            const h = n[c],
              u = l[h.materialIndex];
            if (u && u.visible) {
              const n = T(e, u, s, o);
              e.onBeforeShadow(t, e, r, a, i, n, h),
                t.renderBufferDirect(a, null, i, n, e, h),
                e.onAfterShadow(t, e, r, a, i, n, h);
            }
          }
        } else if (l.visible) {
          const n = T(e, l, s, o);
          e.onBeforeShadow(t, e, r, a, i, n, null),
            t.renderBufferDirect(a, null, i, n, e, null),
            e.onAfterShadow(t, e, r, a, i, n, null);
        }
      }
      const c = e.children;
      for (let t = 0, e = c.length; t < e; t++) b(c[t], r, a, s, o);
    }
    function w(t) {
      t.target.removeEventListener("dispose", w);
      for (const e in f) {
        const n = f[e],
          i = t.target.uuid;
        i in n && (n[i].dispose(), delete n[i]);
      }
    }
    this.render = function (e, n, r) {
      if (!1 === y.enabled) return;
      if (!1 === y.autoUpdate && !1 === y.needsUpdate) return;
      if (0 === e.length) return;
      const a = t.getRenderTarget(),
        s = t.getActiveCubeFace(),
        o = t.getActiveMipmapLevel(),
        d = t.state;
      d.setBlending(0),
        d.buffers.color.setClear(1, 1, 1, 1),
        d.buffers.depth.setTest(!0),
        d.setScissorTest(!1);
      const p = S !== i && this.type === i,
        f = S === i && this.type !== i;
      for (let a = 0, s = e.length; a < s; a++) {
        const s = e[a],
          o = s.shadow;
        if (void 0 === o) {
          console.warn("THREE.WebGLShadowMap:", s, "has no shadow.");
          continue;
        }
        if (!1 === o.autoUpdate && !1 === o.needsUpdate) continue;
        c.copy(o.mapSize);
        const g = o.getFrameExtents();
        if (
          (c.multiply(g),
          h.copy(o.mapSize),
          (c.x > m || c.y > m) &&
            (c.x > m &&
              ((h.x = Math.floor(m / g.x)),
              (c.x = h.x * g.x),
              (o.mapSize.x = h.x)),
            c.y > m &&
              ((h.y = Math.floor(m / g.y)),
              (c.y = h.y * g.y),
              (o.mapSize.y = h.y))),
          null === o.map || !0 === p || !0 === f)
        ) {
          const t = this.type !== i ? { minFilter: k, magFilter: k } : {};
          null !== o.map && o.map.dispose(),
            (o.map = new tn(c.x, c.y, t)),
            (o.map.texture.name = s.name + ".shadowMap"),
            o.camera.updateProjectionMatrix();
        }
        t.setRenderTarget(o.map), t.clear();
        const _ = o.getViewportCount();
        for (let t = 0; t < _; t++) {
          const e = o.getViewport(t);
          u.set(h.x * e.x, h.y * e.y, h.x * e.z, h.y * e.w),
            d.viewport(u),
            o.updateMatrices(s, t),
            (l = o.getFrustum()),
            b(n, r, o.camera, s, this.type);
        }
        !0 !== o.isPointLightShadow && this.type === i && E(o, r),
          (o.needsUpdate = !1);
      }
      (S = this.type), (y.needsUpdate = !1), t.setRenderTarget(a, s, o);
    };
  }
  function io(t) {
    const e = new (function () {
        let e = !1;
        const n = new $e();
        let i = null;
        const r = new $e(0, 0, 0, 0);
        return {
          setMask: function (n) {
            i === n || e || (t.colorMask(n, n, n, n), (i = n));
          },
          setLocked: function (t) {
            e = t;
          },
          setClear: function (e, i, a, s, o) {
            !0 === o && ((e *= s), (i *= s), (a *= s)),
              n.set(e, i, a, s),
              !1 === r.equals(n) && (t.clearColor(e, i, a, s), r.copy(n));
          },
          reset: function () {
            (e = !1), (i = null), r.set(-1, 0, 0, 0);
          },
        };
      })(),
      n = new (function () {
        let e = !1,
          n = null,
          i = null,
          r = null;
        return {
          setTest: function (e) {
            e ? it(t.DEPTH_TEST) : rt(t.DEPTH_TEST);
          },
          setMask: function (i) {
            n === i || e || (t.depthMask(i), (n = i));
          },
          setFunc: function (e) {
            if (i !== e) {
              switch (e) {
                case 0:
                  t.depthFunc(t.NEVER);
                  break;
                case 1:
                  t.depthFunc(t.ALWAYS);
                  break;
                case 2:
                  t.depthFunc(t.LESS);
                  break;
                case 3:
                default:
                  t.depthFunc(t.LEQUAL);
                  break;
                case 4:
                  t.depthFunc(t.EQUAL);
                  break;
                case 5:
                  t.depthFunc(t.GEQUAL);
                  break;
                case 6:
                  t.depthFunc(t.GREATER);
                  break;
                case 7:
                  t.depthFunc(t.NOTEQUAL);
              }
              i = e;
            }
          },
          setLocked: function (t) {
            e = t;
          },
          setClear: function (e) {
            r !== e && (t.clearDepth(e), (r = e));
          },
          reset: function () {
            (e = !1), (n = null), (i = null), (r = null);
          },
        };
      })(),
      i = new (function () {
        let e = !1,
          n = null,
          i = null,
          r = null,
          a = null,
          s = null,
          o = null,
          l = null,
          c = null;
        return {
          setTest: function (n) {
            e || (n ? it(t.STENCIL_TEST) : rt(t.STENCIL_TEST));
          },
          setMask: function (i) {
            n === i || e || (t.stencilMask(i), (n = i));
          },
          setFunc: function (e, n, s) {
            (i === e && r === n && a === s) ||
              (t.stencilFunc(e, n, s), (i = e), (r = n), (a = s));
          },
          setOp: function (e, n, i) {
            (s === e && o === n && l === i) ||
              (t.stencilOp(e, n, i), (s = e), (o = n), (l = i));
          },
          setLocked: function (t) {
            e = t;
          },
          setClear: function (e) {
            c !== e && (t.clearStencil(e), (c = e));
          },
          reset: function () {
            (e = !1),
              (n = null),
              (i = null),
              (r = null),
              (a = null),
              (s = null),
              (o = null),
              (l = null),
              (c = null);
          },
        };
      })(),
      r = new WeakMap(),
      a = new WeakMap();
    let s = {},
      b = {},
      w = new WeakMap(),
      A = [],
      R = null,
      C = !1,
      P = null,
      L = null,
      U = null,
      I = null,
      D = null,
      N = null,
      O = null,
      F = new Ti(0, 0, 0),
      z = 0,
      B = !1,
      H = null,
      V = null,
      k = null,
      G = null,
      W = null;
    const X = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    let j = !1,
      Y = 0;
    const q = t.getParameter(t.VERSION);
    -1 !== q.indexOf("WebGL")
      ? ((Y = parseFloat(/^WebGL (\d)/.exec(q)[1])), (j = Y >= 1))
      : -1 !== q.indexOf("OpenGL ES") &&
        ((Y = parseFloat(/^OpenGL ES (\d)/.exec(q)[1])), (j = Y >= 2));
    let K = null,
      Z = {};
    const J = t.getParameter(t.SCISSOR_BOX),
      $ = t.getParameter(t.VIEWPORT),
      Q = new $e().fromArray(J),
      tt = new $e().fromArray($);
    function et(e, n, i, r) {
      const a = new Uint8Array(4),
        s = t.createTexture();
      t.bindTexture(e, s),
        t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST),
        t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
      for (let s = 0; s < i; s++)
        e === t.TEXTURE_3D || e === t.TEXTURE_2D_ARRAY
          ? t.texImage3D(n, 0, t.RGBA, 1, 1, r, 0, t.RGBA, t.UNSIGNED_BYTE, a)
          : t.texImage2D(n + s, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, a);
      return s;
    }
    const nt = {};
    function it(e) {
      !0 !== s[e] && (t.enable(e), (s[e] = !0));
    }
    function rt(e) {
      !1 !== s[e] && (t.disable(e), (s[e] = !1));
    }
    (nt[t.TEXTURE_2D] = et(t.TEXTURE_2D, t.TEXTURE_2D, 1)),
      (nt[t.TEXTURE_CUBE_MAP] = et(
        t.TEXTURE_CUBE_MAP,
        t.TEXTURE_CUBE_MAP_POSITIVE_X,
        6
      )),
      (nt[t.TEXTURE_2D_ARRAY] = et(
        t.TEXTURE_2D_ARRAY,
        t.TEXTURE_2D_ARRAY,
        1,
        1
      )),
      (nt[t.TEXTURE_3D] = et(t.TEXTURE_3D, t.TEXTURE_3D, 1, 1)),
      e.setClear(0, 0, 0, 1),
      n.setClear(1),
      i.setClear(0),
      it(t.DEPTH_TEST),
      n.setFunc(3),
      lt(!1),
      ct(1),
      it(t.CULL_FACE),
      ot(0);
    const at = {
      [o]: t.FUNC_ADD,
      [l]: t.FUNC_SUBTRACT,
      [c]: t.FUNC_REVERSE_SUBTRACT,
    };
    (at[103] = t.MIN), (at[104] = t.MAX);
    const st = {
      [h]: t.ZERO,
      [u]: t.ONE,
      [d]: t.SRC_COLOR,
      [f]: t.SRC_ALPHA,
      [M]: t.SRC_ALPHA_SATURATE,
      [v]: t.DST_COLOR,
      [g]: t.DST_ALPHA,
      [p]: t.ONE_MINUS_SRC_COLOR,
      [m]: t.ONE_MINUS_SRC_ALPHA,
      [x]: t.ONE_MINUS_DST_COLOR,
      [_]: t.ONE_MINUS_DST_ALPHA,
      [y]: t.CONSTANT_COLOR,
      [S]: t.ONE_MINUS_CONSTANT_COLOR,
      [E]: t.CONSTANT_ALPHA,
      [T]: t.ONE_MINUS_CONSTANT_ALPHA,
    };
    function ot(e, n, i, r, a, s, l, c, h, u) {
      if (0 !== e) {
        if ((!1 === C && (it(t.BLEND), (C = !0)), 5 === e))
          (a = a || n),
            (s = s || i),
            (l = l || r),
            (n === L && a === D) ||
              (t.blendEquationSeparate(at[n], at[a]), (L = n), (D = a)),
            (i === U && r === I && s === N && l === O) ||
              (t.blendFuncSeparate(st[i], st[r], st[s], st[l]),
              (U = i),
              (I = r),
              (N = s),
              (O = l)),
            (!1 !== c.equals(F) && h === z) ||
              (t.blendColor(c.r, c.g, c.b, h), F.copy(c), (z = h)),
            (P = e),
            (B = !1);
        else if (e !== P || u !== B) {
          if (
            ((L === o && D === o) ||
              (t.blendEquation(t.FUNC_ADD), (L = o), (D = o)),
            u)
          )
            switch (e) {
              case 1:
                t.blendFuncSeparate(
                  t.ONE,
                  t.ONE_MINUS_SRC_ALPHA,
                  t.ONE,
                  t.ONE_MINUS_SRC_ALPHA
                );
                break;
              case 2:
                t.blendFunc(t.ONE, t.ONE);
                break;
              case 3:
                t.blendFuncSeparate(
                  t.ZERO,
                  t.ONE_MINUS_SRC_COLOR,
                  t.ZERO,
                  t.ONE
                );
                break;
              case 4:
                t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA);
                break;
              default:
                console.error("THREE.WebGLState: Invalid blending: ", e);
            }
          else
            switch (e) {
              case 1:
                t.blendFuncSeparate(
                  t.SRC_ALPHA,
                  t.ONE_MINUS_SRC_ALPHA,
                  t.ONE,
                  t.ONE_MINUS_SRC_ALPHA
                );
                break;
              case 2:
                t.blendFunc(t.SRC_ALPHA, t.ONE);
                break;
              case 3:
                t.blendFuncSeparate(
                  t.ZERO,
                  t.ONE_MINUS_SRC_COLOR,
                  t.ZERO,
                  t.ONE
                );
                break;
              case 4:
                t.blendFunc(t.ZERO, t.SRC_COLOR);
                break;
              default:
                console.error("THREE.WebGLState: Invalid blending: ", e);
            }
          (U = null),
            (I = null),
            (N = null),
            (O = null),
            F.set(0, 0, 0),
            (z = 0),
            (P = e),
            (B = u);
        }
      } else !0 === C && (rt(t.BLEND), (C = !1));
    }
    function lt(e) {
      H !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), (H = e));
    }
    function ct(e) {
      0 !== e
        ? (it(t.CULL_FACE),
          e !== V &&
            (1 === e
              ? t.cullFace(t.BACK)
              : 2 === e
              ? t.cullFace(t.FRONT)
              : t.cullFace(t.FRONT_AND_BACK)))
        : rt(t.CULL_FACE),
        (V = e);
    }
    function ht(e, n, i) {
      e
        ? (it(t.POLYGON_OFFSET_FILL),
          (G === n && W === i) || (t.polygonOffset(n, i), (G = n), (W = i)))
        : rt(t.POLYGON_OFFSET_FILL);
    }
    return {
      buffers: { color: e, depth: n, stencil: i },
      enable: it,
      disable: rt,
      bindFramebuffer: function (e, n) {
        return (
          b[e] !== n &&
          (t.bindFramebuffer(e, n),
          (b[e] = n),
          e === t.DRAW_FRAMEBUFFER && (b[t.FRAMEBUFFER] = n),
          e === t.FRAMEBUFFER && (b[t.DRAW_FRAMEBUFFER] = n),
          !0)
        );
      },
      drawBuffers: function (e, n) {
        let i = A,
          r = !1;
        if (e) {
          (i = w.get(n)), void 0 === i && ((i = []), w.set(n, i));
          const a = e.textures;
          if (i.length !== a.length || i[0] !== t.COLOR_ATTACHMENT0) {
            for (let e = 0, n = a.length; e < n; e++)
              i[e] = t.COLOR_ATTACHMENT0 + e;
            (i.length = a.length), (r = !0);
          }
        } else i[0] !== t.BACK && ((i[0] = t.BACK), (r = !0));
        r && t.drawBuffers(i);
      },
      useProgram: function (e) {
        return R !== e && (t.useProgram(e), (R = e), !0);
      },
      setBlending: ot,
      setMaterial: function (r, a) {
        2 === r.side ? rt(t.CULL_FACE) : it(t.CULL_FACE);
        let s = 1 === r.side;
        a && (s = !s),
          lt(s),
          1 === r.blending && !1 === r.transparent
            ? ot(0)
            : ot(
                r.blending,
                r.blendEquation,
                r.blendSrc,
                r.blendDst,
                r.blendEquationAlpha,
                r.blendSrcAlpha,
                r.blendDstAlpha,
                r.blendColor,
                r.blendAlpha,
                r.premultipliedAlpha
              ),
          n.setFunc(r.depthFunc),
          n.setTest(r.depthTest),
          n.setMask(r.depthWrite),
          e.setMask(r.colorWrite);
        const o = r.stencilWrite;
        i.setTest(o),
          o &&
            (i.setMask(r.stencilWriteMask),
            i.setFunc(r.stencilFunc, r.stencilRef, r.stencilFuncMask),
            i.setOp(r.stencilFail, r.stencilZFail, r.stencilZPass)),
          ht(r.polygonOffset, r.polygonOffsetFactor, r.polygonOffsetUnits),
          !0 === r.alphaToCoverage
            ? it(t.SAMPLE_ALPHA_TO_COVERAGE)
            : rt(t.SAMPLE_ALPHA_TO_COVERAGE);
      },
      setFlipSided: lt,
      setCullFace: ct,
      setLineWidth: function (e) {
        e !== k && (j && t.lineWidth(e), (k = e));
      },
      setPolygonOffset: ht,
      setScissorTest: function (e) {
        e ? it(t.SCISSOR_TEST) : rt(t.SCISSOR_TEST);
      },
      activeTexture: function (e) {
        void 0 === e && (e = t.TEXTURE0 + X - 1),
          K !== e && (t.activeTexture(e), (K = e));
      },
      bindTexture: function (e, n, i) {
        void 0 === i && (i = null === K ? t.TEXTURE0 + X - 1 : K);
        let r = Z[i];
        void 0 === r && ((r = { type: void 0, texture: void 0 }), (Z[i] = r)),
          (r.type === e && r.texture === n) ||
            (K !== i && (t.activeTexture(i), (K = i)),
            t.bindTexture(e, n || nt[e]),
            (r.type = e),
            (r.texture = n));
      },
      unbindTexture: function () {
        const e = Z[K];
        void 0 !== e &&
          void 0 !== e.type &&
          (t.bindTexture(e.type, null),
          (e.type = void 0),
          (e.texture = void 0));
      },
      compressedTexImage2D: function () {
        try {
          t.compressedTexImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      compressedTexImage3D: function () {
        try {
          t.compressedTexImage3D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texImage2D: function () {
        try {
          t.texImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texImage3D: function () {
        try {
          t.texImage3D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      updateUBOMapping: function (e, n) {
        let i = a.get(n);
        void 0 === i && ((i = new WeakMap()), a.set(n, i));
        let r = i.get(e);
        void 0 === r && ((r = t.getUniformBlockIndex(n, e.name)), i.set(e, r));
      },
      uniformBlockBinding: function (e, n) {
        const i = a.get(n).get(e);
        r.get(n) !== i &&
          (t.uniformBlockBinding(n, i, e.__bindingPointIndex), r.set(n, i));
      },
      texStorage2D: function () {
        try {
          t.texStorage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texStorage3D: function () {
        try {
          t.texStorage3D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texSubImage2D: function () {
        try {
          t.texSubImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texSubImage3D: function () {
        try {
          t.texSubImage3D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      compressedTexSubImage2D: function () {
        try {
          t.compressedTexSubImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      compressedTexSubImage3D: function () {
        try {
          t.compressedTexSubImage3D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      scissor: function (e) {
        !1 === Q.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), Q.copy(e));
      },
      viewport: function (e) {
        !1 === tt.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), tt.copy(e));
      },
      reset: function () {
        t.disable(t.BLEND),
          t.disable(t.CULL_FACE),
          t.disable(t.DEPTH_TEST),
          t.disable(t.POLYGON_OFFSET_FILL),
          t.disable(t.SCISSOR_TEST),
          t.disable(t.STENCIL_TEST),
          t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),
          t.blendEquation(t.FUNC_ADD),
          t.blendFunc(t.ONE, t.ZERO),
          t.blendFuncSeparate(t.ONE, t.ZERO, t.ONE, t.ZERO),
          t.blendColor(0, 0, 0, 0),
          t.colorMask(!0, !0, !0, !0),
          t.clearColor(0, 0, 0, 0),
          t.depthMask(!0),
          t.depthFunc(t.LESS),
          t.clearDepth(1),
          t.stencilMask(4294967295),
          t.stencilFunc(t.ALWAYS, 0, 4294967295),
          t.stencilOp(t.KEEP, t.KEEP, t.KEEP),
          t.clearStencil(0),
          t.cullFace(t.BACK),
          t.frontFace(t.CCW),
          t.polygonOffset(0, 0),
          t.activeTexture(t.TEXTURE0),
          t.bindFramebuffer(t.FRAMEBUFFER, null),
          t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
          t.bindFramebuffer(t.READ_FRAMEBUFFER, null),
          t.useProgram(null),
          t.lineWidth(1),
          t.scissor(0, 0, t.canvas.width, t.canvas.height),
          t.viewport(0, 0, t.canvas.width, t.canvas.height),
          (s = {}),
          (K = null),
          (Z = {}),
          (b = {}),
          (w = new WeakMap()),
          (A = []),
          (R = null),
          (C = !1),
          (P = null),
          (L = null),
          (U = null),
          (I = null),
          (D = null),
          (N = null),
          (O = null),
          (F = new Ti(0, 0, 0)),
          (z = 0),
          (B = !1),
          (H = null),
          (V = null),
          (k = null),
          (G = null),
          (W = null),
          Q.set(0, 0, t.canvas.width, t.canvas.height),
          tt.set(0, 0, t.canvas.width, t.canvas.height),
          e.reset(),
          n.reset(),
          i.reset();
      },
    };
  }
  function ro(t, e, n, i) {
    const r = (function (t) {
      switch (t) {
        case q:
        case K:
          return { byteLength: 1, components: 1 };
        case J:
        case Z:
        case et:
          return { byteLength: 2, components: 1 };
        case nt:
        case it:
          return { byteLength: 2, components: 4 };
        case Q:
        case $:
        case tt:
          return { byteLength: 4, components: 1 };
        case at:
          return { byteLength: 4, components: 3 };
      }
      throw new Error(`Unknown texture type ${t}.`);
    })(i);
    switch (n) {
      case st:
      case ct:
        return t * e;
      case ht:
        return t * e * 2;
      case pt:
      case ft:
        return ((t * e) / r.components) * r.byteLength;
      case mt:
      case gt:
        return ((t * e * 2) / r.components) * r.byteLength;
      case ot:
        return ((t * e * 3) / r.components) * r.byteLength;
      case lt:
      case _t:
        return ((t * e * 4) / r.components) * r.byteLength;
      case vt:
      case xt:
        return Math.floor((t + 3) / 4) * Math.floor((e + 3) / 4) * 8;
      case Mt:
      case yt:
        return Math.floor((t + 3) / 4) * Math.floor((e + 3) / 4) * 16;
      case Et:
      case bt:
        return (Math.max(t, 16) * Math.max(e, 8)) / 4;
      case St:
      case Tt:
        return (Math.max(t, 8) * Math.max(e, 8)) / 2;
      case wt:
      case At:
        return Math.floor((t + 3) / 4) * Math.floor((e + 3) / 4) * 8;
      case Rt:
      case Ct:
        return Math.floor((t + 3) / 4) * Math.floor((e + 3) / 4) * 16;
      case Pt:
        return Math.floor((t + 4) / 5) * Math.floor((e + 3) / 4) * 16;
      case Lt:
        return Math.floor((t + 4) / 5) * Math.floor((e + 4) / 5) * 16;
      case Ut:
        return Math.floor((t + 5) / 6) * Math.floor((e + 4) / 5) * 16;
      case It:
        return Math.floor((t + 5) / 6) * Math.floor((e + 5) / 6) * 16;
      case Dt:
        return Math.floor((t + 7) / 8) * Math.floor((e + 4) / 5) * 16;
      case Nt:
        return Math.floor((t + 7) / 8) * Math.floor((e + 5) / 6) * 16;
      case Ot:
        return Math.floor((t + 7) / 8) * Math.floor((e + 7) / 8) * 16;
      case Ft:
        return Math.floor((t + 9) / 10) * Math.floor((e + 4) / 5) * 16;
      case zt:
        return Math.floor((t + 9) / 10) * Math.floor((e + 5) / 6) * 16;
      case Bt:
        return Math.floor((t + 9) / 10) * Math.floor((e + 7) / 8) * 16;
      case Ht:
        return Math.floor((t + 9) / 10) * Math.floor((e + 9) / 10) * 16;
      case Vt:
        return Math.floor((t + 11) / 12) * Math.floor((e + 9) / 10) * 16;
      case kt:
        return Math.floor((t + 11) / 12) * Math.floor((e + 11) / 12) * 16;
      case Gt:
      case Wt:
      case Xt:
        return Math.ceil(t / 4) * Math.ceil(e / 4) * 16;
      case jt:
      case Yt:
        return Math.ceil(t / 4) * Math.ceil(e / 4) * 8;
      case qt:
      case Kt:
        return Math.ceil(t / 4) * Math.ceil(e / 4) * 16;
    }
    throw new Error(`Unable to determine texture byte length for ${n} format.`);
  }
  function ao(t, e, n, i, r, a, s) {
    const o = e.has("WEBGL_multisampled_render_to_texture")
        ? e.get("WEBGL_multisampled_render_to_texture")
        : null,
      l =
        "undefined" != typeof navigator &&
        /OculusBrowser/g.test(navigator.userAgent),
      c = new Pe(),
      h = new WeakMap();
    let u;
    const d = new WeakMap();
    let p = !1;
    try {
      p =
        "undefined" != typeof OffscreenCanvas &&
        null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (t) {}
    function f(t, e) {
      return p ? new OffscreenCanvas(t, e) : De("canvas");
    }
    function m(t, e, n) {
      let i = 1;
      const r = Z(t);
      if (
        ((r.width > n || r.height > n) && (i = n / Math.max(r.width, r.height)),
        i < 1)
      ) {
        if (
          ("undefined" != typeof HTMLImageElement &&
            t instanceof HTMLImageElement) ||
          ("undefined" != typeof HTMLCanvasElement &&
            t instanceof HTMLCanvasElement) ||
          ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap) ||
          ("undefined" != typeof VideoFrame && t instanceof VideoFrame)
        ) {
          const n = Math.floor(i * r.width),
            a = Math.floor(i * r.height);
          void 0 === u && (u = f(n, a));
          const s = e ? f(n, a) : u;
          return (
            (s.width = n),
            (s.height = a),
            s.getContext("2d").drawImage(t, 0, 0, n, a),
            console.warn(
              "THREE.WebGLRenderer: Texture has been resized from (" +
                r.width +
                "x" +
                r.height +
                ") to (" +
                n +
                "x" +
                a +
                ")."
            ),
            s
          );
        }
        return (
          "data" in t &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                r.width +
                "x" +
                r.height +
                ")."
            ),
          t
        );
      }
      return t;
    }
    function g(t) {
      return t.generateMipmaps && t.minFilter !== k && t.minFilter !== X;
    }
    function _(e) {
      t.generateMipmap(e);
    }
    function v(n, i, r, a, s = !1) {
      if (null !== n) {
        if (void 0 !== t[n]) return t[n];
        console.warn(
          "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
            n +
            "'"
        );
      }
      let o = i;
      if (
        (i === t.RED &&
          (r === t.FLOAT && (o = t.R32F),
          r === t.HALF_FLOAT && (o = t.R16F),
          r === t.UNSIGNED_BYTE && (o = t.R8)),
        i === t.RED_INTEGER &&
          (r === t.UNSIGNED_BYTE && (o = t.R8UI),
          r === t.UNSIGNED_SHORT && (o = t.R16UI),
          r === t.UNSIGNED_INT && (o = t.R32UI),
          r === t.BYTE && (o = t.R8I),
          r === t.SHORT && (o = t.R16I),
          r === t.INT && (o = t.R32I)),
        i === t.RG &&
          (r === t.FLOAT && (o = t.RG32F),
          r === t.HALF_FLOAT && (o = t.RG16F),
          r === t.UNSIGNED_BYTE && (o = t.RG8)),
        i === t.RG_INTEGER &&
          (r === t.UNSIGNED_BYTE && (o = t.RG8UI),
          r === t.UNSIGNED_SHORT && (o = t.RG16UI),
          r === t.UNSIGNED_INT && (o = t.RG32UI),
          r === t.BYTE && (o = t.RG8I),
          r === t.SHORT && (o = t.RG16I),
          r === t.INT && (o = t.RG32I)),
        i === t.RGB && r === t.UNSIGNED_INT_5_9_9_9_REV && (o = t.RGB9_E5),
        i === t.RGBA)
      ) {
        const e = s ? re : ke.getTransfer(a);
        r === t.FLOAT && (o = t.RGBA32F),
          r === t.HALF_FLOAT && (o = t.RGBA16F),
          r === t.UNSIGNED_BYTE && (o = e === ae ? t.SRGB8_ALPHA8 : t.RGBA8),
          r === t.UNSIGNED_SHORT_4_4_4_4 && (o = t.RGBA4),
          r === t.UNSIGNED_SHORT_5_5_5_1 && (o = t.RGB5_A1);
      }
      return (
        (o !== t.R16F &&
          o !== t.R32F &&
          o !== t.RG16F &&
          o !== t.RG32F &&
          o !== t.RGBA16F &&
          o !== t.RGBA32F) ||
          e.get("EXT_color_buffer_float"),
        o
      );
    }
    function x(e, n) {
      let i;
      return (
        e
          ? null === n || n === Q || n === rt
            ? (i = t.DEPTH24_STENCIL8)
            : n === tt
            ? (i = t.DEPTH32F_STENCIL8)
            : n === J &&
              ((i = t.DEPTH24_STENCIL8),
              console.warn(
                "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment."
              ))
          : null === n || n === Q || n === rt
          ? (i = t.DEPTH_COMPONENT24)
          : n === tt
          ? (i = t.DEPTH_COMPONENT32F)
          : n === J && (i = t.DEPTH_COMPONENT16),
        i
      );
    }
    function M(t, e) {
      return !0 === g(t) ||
        (t.isFramebufferTexture && t.minFilter !== k && t.minFilter !== X)
        ? Math.log2(Math.max(e.width, e.height)) + 1
        : void 0 !== t.mipmaps && t.mipmaps.length > 0
        ? t.mipmaps.length
        : t.isCompressedTexture && Array.isArray(t.image)
        ? e.mipmaps.length
        : 1;
    }
    function y(t) {
      const e = t.target;
      e.removeEventListener("dispose", y),
        (function (t) {
          const e = i.get(t);
          if (void 0 === e.__webglInit) return;
          const n = t.source,
            r = d.get(n);
          if (r) {
            const i = r[e.__cacheKey];
            i.usedTimes--,
              0 === i.usedTimes && E(t),
              0 === Object.keys(r).length && d.delete(n);
          }
          i.remove(t);
        })(e),
        e.isVideoTexture && h.delete(e);
    }
    function S(e) {
      const n = e.target;
      n.removeEventListener("dispose", S),
        (function (e) {
          const n = i.get(e);
          if (
            (e.depthTexture && e.depthTexture.dispose(),
            e.isWebGLCubeRenderTarget)
          )
            for (let e = 0; e < 6; e++) {
              if (Array.isArray(n.__webglFramebuffer[e]))
                for (let i = 0; i < n.__webglFramebuffer[e].length; i++)
                  t.deleteFramebuffer(n.__webglFramebuffer[e][i]);
              else t.deleteFramebuffer(n.__webglFramebuffer[e]);
              n.__webglDepthbuffer &&
                t.deleteRenderbuffer(n.__webglDepthbuffer[e]);
            }
          else {
            if (Array.isArray(n.__webglFramebuffer))
              for (let e = 0; e < n.__webglFramebuffer.length; e++)
                t.deleteFramebuffer(n.__webglFramebuffer[e]);
            else t.deleteFramebuffer(n.__webglFramebuffer);
            if (
              (n.__webglDepthbuffer &&
                t.deleteRenderbuffer(n.__webglDepthbuffer),
              n.__webglMultisampledFramebuffer &&
                t.deleteFramebuffer(n.__webglMultisampledFramebuffer),
              n.__webglColorRenderbuffer)
            )
              for (let e = 0; e < n.__webglColorRenderbuffer.length; e++)
                n.__webglColorRenderbuffer[e] &&
                  t.deleteRenderbuffer(n.__webglColorRenderbuffer[e]);
            n.__webglDepthRenderbuffer &&
              t.deleteRenderbuffer(n.__webglDepthRenderbuffer);
          }
          const r = e.textures;
          for (let e = 0, n = r.length; e < n; e++) {
            const n = i.get(r[e]);
            n.__webglTexture &&
              (t.deleteTexture(n.__webglTexture), s.memory.textures--),
              i.remove(r[e]);
          }
          i.remove(e);
        })(n);
    }
    function E(e) {
      const n = i.get(e);
      t.deleteTexture(n.__webglTexture);
      const r = e.source;
      delete d.get(r)[n.__cacheKey], s.memory.textures--;
    }
    let T = 0;
    function b(e, r) {
      const a = i.get(e);
      if (
        (e.isVideoTexture &&
          (function (t) {
            const e = s.render.frame;
            h.get(t) !== e && (h.set(t, e), t.update());
          })(e),
        !1 === e.isRenderTargetTexture &&
          e.version > 0 &&
          a.__version !== e.version)
      ) {
        const t = e.image;
        if (null === t)
          console.warn(
            "THREE.WebGLRenderer: Texture marked for update but no image data found."
          );
        else {
          if (!1 !== t.complete) return void L(a, e, r);
          console.warn(
            "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
          );
        }
      }
      n.bindTexture(t.TEXTURE_2D, a.__webglTexture, t.TEXTURE0 + r);
    }
    const w = { [B]: t.REPEAT, [H]: t.CLAMP_TO_EDGE, [V]: t.MIRRORED_REPEAT },
      A = {
        [k]: t.NEAREST,
        [G]: t.NEAREST_MIPMAP_NEAREST,
        [W]: t.NEAREST_MIPMAP_LINEAR,
        [X]: t.LINEAR,
        [j]: t.LINEAR_MIPMAP_NEAREST,
        [Y]: t.LINEAR_MIPMAP_LINEAR,
      },
      R = {
        [ce]: t.NEVER,
        [ge]: t.ALWAYS,
        [he]: t.LESS,
        [de]: t.LEQUAL,
        [ue]: t.EQUAL,
        [me]: t.GEQUAL,
        [pe]: t.GREATER,
        [fe]: t.NOTEQUAL,
      };
    function C(n, a) {
      if (
        (a.type !== tt ||
          !1 !== e.has("OES_texture_float_linear") ||
          (a.magFilter !== X &&
            a.magFilter !== j &&
            a.magFilter !== W &&
            a.magFilter !== Y &&
            a.minFilter !== X &&
            a.minFilter !== j &&
            a.minFilter !== W &&
            a.minFilter !== Y) ||
          console.warn(
            "THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."
          ),
        t.texParameteri(n, t.TEXTURE_WRAP_S, w[a.wrapS]),
        t.texParameteri(n, t.TEXTURE_WRAP_T, w[a.wrapT]),
        (n !== t.TEXTURE_3D && n !== t.TEXTURE_2D_ARRAY) ||
          t.texParameteri(n, t.TEXTURE_WRAP_R, w[a.wrapR]),
        t.texParameteri(n, t.TEXTURE_MAG_FILTER, A[a.magFilter]),
        t.texParameteri(n, t.TEXTURE_MIN_FILTER, A[a.minFilter]),
        a.compareFunction &&
          (t.texParameteri(n, t.TEXTURE_COMPARE_MODE, t.COMPARE_REF_TO_TEXTURE),
          t.texParameteri(n, t.TEXTURE_COMPARE_FUNC, R[a.compareFunction])),
        !0 === e.has("EXT_texture_filter_anisotropic"))
      ) {
        if (a.magFilter === k) return;
        if (a.minFilter !== W && a.minFilter !== Y) return;
        if (a.type === tt && !1 === e.has("OES_texture_float_linear")) return;
        if (a.anisotropy > 1 || i.get(a).__currentAnisotropy) {
          const s = e.get("EXT_texture_filter_anisotropic");
          t.texParameterf(
            n,
            s.TEXTURE_MAX_ANISOTROPY_EXT,
            Math.min(a.anisotropy, r.getMaxAnisotropy())
          ),
            (i.get(a).__currentAnisotropy = a.anisotropy);
        }
      }
    }
    function P(e, n) {
      let i = !1;
      void 0 === e.__webglInit &&
        ((e.__webglInit = !0), n.addEventListener("dispose", y));
      const r = n.source;
      let a = d.get(r);
      void 0 === a && ((a = {}), d.set(r, a));
      const o = (function (t) {
        const e = [];
        return (
          e.push(t.wrapS),
          e.push(t.wrapT),
          e.push(t.wrapR || 0),
          e.push(t.magFilter),
          e.push(t.minFilter),
          e.push(t.anisotropy),
          e.push(t.internalFormat),
          e.push(t.format),
          e.push(t.type),
          e.push(t.generateMipmaps),
          e.push(t.premultiplyAlpha),
          e.push(t.flipY),
          e.push(t.unpackAlignment),
          e.push(t.colorSpace),
          e.join()
        );
      })(n);
      if (o !== e.__cacheKey) {
        void 0 === a[o] &&
          ((a[o] = { texture: t.createTexture(), usedTimes: 0 }),
          s.memory.textures++,
          (i = !0)),
          a[o].usedTimes++;
        const r = a[e.__cacheKey];
        void 0 !== r &&
          (a[e.__cacheKey].usedTimes--, 0 === r.usedTimes && E(n)),
          (e.__cacheKey = o),
          (e.__webglTexture = a[o].texture);
      }
      return i;
    }
    function L(e, s, o) {
      let l = t.TEXTURE_2D;
      (s.isDataArrayTexture || s.isCompressedArrayTexture) &&
        (l = t.TEXTURE_2D_ARRAY),
        s.isData3DTexture && (l = t.TEXTURE_3D);
      const c = P(e, s),
        h = s.source;
      n.bindTexture(l, e.__webglTexture, t.TEXTURE0 + o);
      const u = i.get(h);
      if (h.version !== u.__version || !0 === c) {
        n.activeTexture(t.TEXTURE0 + o);
        const e = ke.getPrimaries(ke.workingColorSpace),
          i = s.colorSpace === Qt ? null : ke.getPrimaries(s.colorSpace),
          d = s.colorSpace === Qt || e === i ? t.NONE : t.BROWSER_DEFAULT_WEBGL;
        t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, s.flipY),
          t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, s.premultiplyAlpha),
          t.pixelStorei(t.UNPACK_ALIGNMENT, s.unpackAlignment),
          t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, d);
        let p = m(s.image, !1, r.maxTextureSize);
        p = K(s, p);
        const f = a.convert(s.format, s.colorSpace),
          y = a.convert(s.type);
        let S,
          E = v(s.internalFormat, f, y, s.colorSpace, s.isVideoTexture);
        C(l, s);
        const T = s.mipmaps,
          b = !0 !== s.isVideoTexture,
          w = void 0 === u.__version || !0 === c,
          A = h.dataReady,
          R = M(s, p);
        if (s.isDepthTexture)
          (E = x(s.format === dt, s.type)),
            w &&
              (b
                ? n.texStorage2D(t.TEXTURE_2D, 1, E, p.width, p.height)
                : n.texImage2D(
                    t.TEXTURE_2D,
                    0,
                    E,
                    p.width,
                    p.height,
                    0,
                    f,
                    y,
                    null
                  ));
        else if (s.isDataTexture)
          if (T.length > 0) {
            b &&
              w &&
              n.texStorage2D(t.TEXTURE_2D, R, E, T[0].width, T[0].height);
            for (let e = 0, i = T.length; e < i; e++)
              (S = T[e]),
                b
                  ? A &&
                    n.texSubImage2D(
                      t.TEXTURE_2D,
                      e,
                      0,
                      0,
                      S.width,
                      S.height,
                      f,
                      y,
                      S.data
                    )
                  : n.texImage2D(
                      t.TEXTURE_2D,
                      e,
                      E,
                      S.width,
                      S.height,
                      0,
                      f,
                      y,
                      S.data
                    );
            s.generateMipmaps = !1;
          } else
            b
              ? (w && n.texStorage2D(t.TEXTURE_2D, R, E, p.width, p.height),
                A &&
                  n.texSubImage2D(
                    t.TEXTURE_2D,
                    0,
                    0,
                    0,
                    p.width,
                    p.height,
                    f,
                    y,
                    p.data
                  ))
              : n.texImage2D(
                  t.TEXTURE_2D,
                  0,
                  E,
                  p.width,
                  p.height,
                  0,
                  f,
                  y,
                  p.data
                );
        else if (s.isCompressedTexture)
          if (s.isCompressedArrayTexture) {
            b &&
              w &&
              n.texStorage3D(
                t.TEXTURE_2D_ARRAY,
                R,
                E,
                T[0].width,
                T[0].height,
                p.depth
              );
            for (let e = 0, i = T.length; e < i; e++)
              if (((S = T[e]), s.format !== lt))
                if (null !== f)
                  if (b) {
                    if (A)
                      if (s.layerUpdates.size > 0) {
                        const i = ro(S.width, S.height, s.format, s.type);
                        for (const r of s.layerUpdates) {
                          const a = S.data.subarray(
                            (r * i) / S.data.BYTES_PER_ELEMENT,
                            ((r + 1) * i) / S.data.BYTES_PER_ELEMENT
                          );
                          n.compressedTexSubImage3D(
                            t.TEXTURE_2D_ARRAY,
                            e,
                            0,
                            0,
                            r,
                            S.width,
                            S.height,
                            1,
                            f,
                            a,
                            0,
                            0
                          );
                        }
                        s.clearLayerUpdates();
                      } else
                        n.compressedTexSubImage3D(
                          t.TEXTURE_2D_ARRAY,
                          e,
                          0,
                          0,
                          0,
                          S.width,
                          S.height,
                          p.depth,
                          f,
                          S.data,
                          0,
                          0
                        );
                  } else
                    n.compressedTexImage3D(
                      t.TEXTURE_2D_ARRAY,
                      e,
                      E,
                      S.width,
                      S.height,
                      p.depth,
                      0,
                      S.data,
                      0,
                      0
                    );
                else
                  console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                  );
              else
                b
                  ? A &&
                    n.texSubImage3D(
                      t.TEXTURE_2D_ARRAY,
                      e,
                      0,
                      0,
                      0,
                      S.width,
                      S.height,
                      p.depth,
                      f,
                      y,
                      S.data
                    )
                  : n.texImage3D(
                      t.TEXTURE_2D_ARRAY,
                      e,
                      E,
                      S.width,
                      S.height,
                      p.depth,
                      0,
                      f,
                      y,
                      S.data
                    );
          } else {
            b &&
              w &&
              n.texStorage2D(t.TEXTURE_2D, R, E, T[0].width, T[0].height);
            for (let e = 0, i = T.length; e < i; e++)
              (S = T[e]),
                s.format !== lt
                  ? null !== f
                    ? b
                      ? A &&
                        n.compressedTexSubImage2D(
                          t.TEXTURE_2D,
                          e,
                          0,
                          0,
                          S.width,
                          S.height,
                          f,
                          S.data
                        )
                      : n.compressedTexImage2D(
                          t.TEXTURE_2D,
                          e,
                          E,
                          S.width,
                          S.height,
                          0,
                          S.data
                        )
                    : console.warn(
                        "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                      )
                  : b
                  ? A &&
                    n.texSubImage2D(
                      t.TEXTURE_2D,
                      e,
                      0,
                      0,
                      S.width,
                      S.height,
                      f,
                      y,
                      S.data
                    )
                  : n.texImage2D(
                      t.TEXTURE_2D,
                      e,
                      E,
                      S.width,
                      S.height,
                      0,
                      f,
                      y,
                      S.data
                    );
          }
        else if (s.isDataArrayTexture)
          if (b) {
            if (
              (w &&
                n.texStorage3D(
                  t.TEXTURE_2D_ARRAY,
                  R,
                  E,
                  p.width,
                  p.height,
                  p.depth
                ),
              A)
            )
              if (s.layerUpdates.size > 0) {
                const e = ro(p.width, p.height, s.format, s.type);
                for (const i of s.layerUpdates) {
                  const r = p.data.subarray(
                    (i * e) / p.data.BYTES_PER_ELEMENT,
                    ((i + 1) * e) / p.data.BYTES_PER_ELEMENT
                  );
                  n.texSubImage3D(
                    t.TEXTURE_2D_ARRAY,
                    0,
                    0,
                    0,
                    i,
                    p.width,
                    p.height,
                    1,
                    f,
                    y,
                    r
                  );
                }
                s.clearLayerUpdates();
              } else
                n.texSubImage3D(
                  t.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  0,
                  p.width,
                  p.height,
                  p.depth,
                  f,
                  y,
                  p.data
                );
          } else
            n.texImage3D(
              t.TEXTURE_2D_ARRAY,
              0,
              E,
              p.width,
              p.height,
              p.depth,
              0,
              f,
              y,
              p.data
            );
        else if (s.isData3DTexture)
          b
            ? (w &&
                n.texStorage3D(t.TEXTURE_3D, R, E, p.width, p.height, p.depth),
              A &&
                n.texSubImage3D(
                  t.TEXTURE_3D,
                  0,
                  0,
                  0,
                  0,
                  p.width,
                  p.height,
                  p.depth,
                  f,
                  y,
                  p.data
                ))
            : n.texImage3D(
                t.TEXTURE_3D,
                0,
                E,
                p.width,
                p.height,
                p.depth,
                0,
                f,
                y,
                p.data
              );
        else if (s.isFramebufferTexture) {
          if (w)
            if (b) n.texStorage2D(t.TEXTURE_2D, R, E, p.width, p.height);
            else {
              let e = p.width,
                i = p.height;
              for (let r = 0; r < R; r++)
                n.texImage2D(t.TEXTURE_2D, r, E, e, i, 0, f, y, null),
                  (e >>= 1),
                  (i >>= 1);
            }
        } else if (T.length > 0) {
          if (b && w) {
            const e = Z(T[0]);
            n.texStorage2D(t.TEXTURE_2D, R, E, e.width, e.height);
          }
          for (let e = 0, i = T.length; e < i; e++)
            (S = T[e]),
              b
                ? A && n.texSubImage2D(t.TEXTURE_2D, e, 0, 0, f, y, S)
                : n.texImage2D(t.TEXTURE_2D, e, E, f, y, S);
          s.generateMipmaps = !1;
        } else if (b) {
          if (w) {
            const e = Z(p);
            n.texStorage2D(t.TEXTURE_2D, R, E, e.width, e.height);
          }
          A && n.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, f, y, p);
        } else n.texImage2D(t.TEXTURE_2D, 0, E, f, y, p);
        g(s) && _(l), (u.__version = h.version), s.onUpdate && s.onUpdate(s);
      }
      e.__version = s.version;
    }
    function U(e, r, s, l, c, h) {
      const u = a.convert(s.format, s.colorSpace),
        d = a.convert(s.type),
        p = v(s.internalFormat, u, d, s.colorSpace);
      if (!i.get(r).__hasExternalTextures) {
        const e = Math.max(1, r.width >> h),
          i = Math.max(1, r.height >> h);
        c === t.TEXTURE_3D || c === t.TEXTURE_2D_ARRAY
          ? n.texImage3D(c, h, p, e, i, r.depth, 0, u, d, null)
          : n.texImage2D(c, h, p, e, i, 0, u, d, null);
      }
      n.bindFramebuffer(t.FRAMEBUFFER, e),
        z(r)
          ? o.framebufferTexture2DMultisampleEXT(
              t.FRAMEBUFFER,
              l,
              c,
              i.get(s).__webglTexture,
              0,
              F(r)
            )
          : (c === t.TEXTURE_2D ||
              (c >= t.TEXTURE_CUBE_MAP_POSITIVE_X &&
                c <= t.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
            t.framebufferTexture2D(
              t.FRAMEBUFFER,
              l,
              c,
              i.get(s).__webglTexture,
              h
            ),
        n.bindFramebuffer(t.FRAMEBUFFER, null);
    }
    function I(e, n, i) {
      if ((t.bindRenderbuffer(t.RENDERBUFFER, e), n.depthBuffer)) {
        const r = n.depthTexture,
          a = r && r.isDepthTexture ? r.type : null,
          s = x(n.stencilBuffer, a),
          l = n.stencilBuffer ? t.DEPTH_STENCIL_ATTACHMENT : t.DEPTH_ATTACHMENT,
          c = F(n);
        z(n)
          ? o.renderbufferStorageMultisampleEXT(
              t.RENDERBUFFER,
              c,
              s,
              n.width,
              n.height
            )
          : i
          ? t.renderbufferStorageMultisample(
              t.RENDERBUFFER,
              c,
              s,
              n.width,
              n.height
            )
          : t.renderbufferStorage(t.RENDERBUFFER, s, n.width, n.height),
          t.framebufferRenderbuffer(t.FRAMEBUFFER, l, t.RENDERBUFFER, e);
      } else {
        const e = n.textures;
        for (let r = 0; r < e.length; r++) {
          const s = e[r],
            l = a.convert(s.format, s.colorSpace),
            c = a.convert(s.type),
            h = v(s.internalFormat, l, c, s.colorSpace),
            u = F(n);
          i && !1 === z(n)
            ? t.renderbufferStorageMultisample(
                t.RENDERBUFFER,
                u,
                h,
                n.width,
                n.height
              )
            : z(n)
            ? o.renderbufferStorageMultisampleEXT(
                t.RENDERBUFFER,
                u,
                h,
                n.width,
                n.height
              )
            : t.renderbufferStorage(t.RENDERBUFFER, h, n.width, n.height);
        }
      }
      t.bindRenderbuffer(t.RENDERBUFFER, null);
    }
    function D(e) {
      const r = i.get(e),
        a = !0 === e.isWebGLCubeRenderTarget;
      if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
        if (a)
          throw new Error(
            "target.depthTexture not supported in Cube render targets"
          );
        !(function (e, r) {
          if (r && r.isWebGLCubeRenderTarget)
            throw new Error(
              "Depth Texture with cube render targets is not supported"
            );
          if (
            (n.bindFramebuffer(t.FRAMEBUFFER, e),
            !r.depthTexture || !r.depthTexture.isDepthTexture)
          )
            throw new Error(
              "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
            );
          (i.get(r.depthTexture).__webglTexture &&
            r.depthTexture.image.width === r.width &&
            r.depthTexture.image.height === r.height) ||
            ((r.depthTexture.image.width = r.width),
            (r.depthTexture.image.height = r.height),
            (r.depthTexture.needsUpdate = !0)),
            b(r.depthTexture, 0);
          const a = i.get(r.depthTexture).__webglTexture,
            s = F(r);
          if (r.depthTexture.format === ut)
            z(r)
              ? o.framebufferTexture2DMultisampleEXT(
                  t.FRAMEBUFFER,
                  t.DEPTH_ATTACHMENT,
                  t.TEXTURE_2D,
                  a,
                  0,
                  s
                )
              : t.framebufferTexture2D(
                  t.FRAMEBUFFER,
                  t.DEPTH_ATTACHMENT,
                  t.TEXTURE_2D,
                  a,
                  0
                );
          else {
            if (r.depthTexture.format !== dt)
              throw new Error("Unknown depthTexture format");
            z(r)
              ? o.framebufferTexture2DMultisampleEXT(
                  t.FRAMEBUFFER,
                  t.DEPTH_STENCIL_ATTACHMENT,
                  t.TEXTURE_2D,
                  a,
                  0,
                  s
                )
              : t.framebufferTexture2D(
                  t.FRAMEBUFFER,
                  t.DEPTH_STENCIL_ATTACHMENT,
                  t.TEXTURE_2D,
                  a,
                  0
                );
          }
        })(r.__webglFramebuffer, e);
      } else if (a) {
        r.__webglDepthbuffer = [];
        for (let i = 0; i < 6; i++)
          n.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer[i]),
            (r.__webglDepthbuffer[i] = t.createRenderbuffer()),
            I(r.__webglDepthbuffer[i], e, !1);
      } else
        n.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer),
          (r.__webglDepthbuffer = t.createRenderbuffer()),
          I(r.__webglDepthbuffer, e, !1);
      n.bindFramebuffer(t.FRAMEBUFFER, null);
    }
    const N = [],
      O = [];
    function F(t) {
      return Math.min(r.maxSamples, t.samples);
    }
    function z(t) {
      const n = i.get(t);
      return (
        t.samples > 0 &&
        !0 === e.has("WEBGL_multisampled_render_to_texture") &&
        !1 !== n.__useRenderToTexture
      );
    }
    function K(t, e) {
      const n = t.colorSpace,
        i = t.format,
        r = t.type;
      return (
        !0 === t.isCompressedTexture ||
          !0 === t.isVideoTexture ||
          (n !== ee &&
            n !== Qt &&
            (ke.getTransfer(n) === ae
              ? (i === lt && r === q) ||
                console.warn(
                  "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                )
              : console.error(
                  "THREE.WebGLTextures: Unsupported texture color space:",
                  n
                ))),
        e
      );
    }
    function Z(t) {
      return (
        "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement
          ? ((c.width = t.naturalWidth || t.width),
            (c.height = t.naturalHeight || t.height))
          : "undefined" != typeof VideoFrame && t instanceof VideoFrame
          ? ((c.width = t.displayWidth), (c.height = t.displayHeight))
          : ((c.width = t.width), (c.height = t.height)),
        c
      );
    }
    (this.allocateTextureUnit = function () {
      const t = T;
      return (
        t >= r.maxTextures &&
          console.warn(
            "THREE.WebGLTextures: Trying to use " +
              t +
              " texture units while this GPU supports only " +
              r.maxTextures
          ),
        (T += 1),
        t
      );
    }),
      (this.resetTextureUnits = function () {
        T = 0;
      }),
      (this.setTexture2D = b),
      (this.setTexture2DArray = function (e, r) {
        const a = i.get(e);
        e.version > 0 && a.__version !== e.version
          ? L(a, e, r)
          : n.bindTexture(t.TEXTURE_2D_ARRAY, a.__webglTexture, t.TEXTURE0 + r);
      }),
      (this.setTexture3D = function (e, r) {
        const a = i.get(e);
        e.version > 0 && a.__version !== e.version
          ? L(a, e, r)
          : n.bindTexture(t.TEXTURE_3D, a.__webglTexture, t.TEXTURE0 + r);
      }),
      (this.setTextureCube = function (e, s) {
        const o = i.get(e);
        e.version > 0 && o.__version !== e.version
          ? (function (e, s, o) {
              if (6 !== s.image.length) return;
              const l = P(e, s),
                c = s.source;
              n.bindTexture(
                t.TEXTURE_CUBE_MAP,
                e.__webglTexture,
                t.TEXTURE0 + o
              );
              const h = i.get(c);
              if (c.version !== h.__version || !0 === l) {
                n.activeTexture(t.TEXTURE0 + o);
                const e = ke.getPrimaries(ke.workingColorSpace),
                  i =
                    s.colorSpace === Qt ? null : ke.getPrimaries(s.colorSpace),
                  u =
                    s.colorSpace === Qt || e === i
                      ? t.NONE
                      : t.BROWSER_DEFAULT_WEBGL;
                t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, s.flipY),
                  t.pixelStorei(
                    t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                    s.premultiplyAlpha
                  ),
                  t.pixelStorei(t.UNPACK_ALIGNMENT, s.unpackAlignment),
                  t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, u);
                const d =
                    s.isCompressedTexture || s.image[0].isCompressedTexture,
                  p = s.image[0] && s.image[0].isDataTexture,
                  f = [];
                for (let t = 0; t < 6; t++)
                  (f[t] =
                    d || p
                      ? p
                        ? s.image[t].image
                        : s.image[t]
                      : m(s.image[t], !0, r.maxCubemapSize)),
                    (f[t] = K(s, f[t]));
                const x = f[0],
                  y = a.convert(s.format, s.colorSpace),
                  S = a.convert(s.type),
                  E = v(s.internalFormat, y, S, s.colorSpace),
                  T = !0 !== s.isVideoTexture,
                  b = void 0 === h.__version || !0 === l,
                  w = c.dataReady;
                let A,
                  R = M(s, x);
                if ((C(t.TEXTURE_CUBE_MAP, s), d)) {
                  T &&
                    b &&
                    n.texStorage2D(t.TEXTURE_CUBE_MAP, R, E, x.width, x.height);
                  for (let e = 0; e < 6; e++) {
                    A = f[e].mipmaps;
                    for (let i = 0; i < A.length; i++) {
                      const r = A[i];
                      s.format !== lt
                        ? null !== y
                          ? T
                            ? w &&
                              n.compressedTexSubImage2D(
                                t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                i,
                                0,
                                0,
                                r.width,
                                r.height,
                                y,
                                r.data
                              )
                            : n.compressedTexImage2D(
                                t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                i,
                                E,
                                r.width,
                                r.height,
                                0,
                                r.data
                              )
                          : console.warn(
                              "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                            )
                        : T
                        ? w &&
                          n.texSubImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            i,
                            0,
                            0,
                            r.width,
                            r.height,
                            y,
                            S,
                            r.data
                          )
                        : n.texImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            i,
                            E,
                            r.width,
                            r.height,
                            0,
                            y,
                            S,
                            r.data
                          );
                    }
                  }
                } else {
                  if (((A = s.mipmaps), T && b)) {
                    A.length > 0 && R++;
                    const e = Z(f[0]);
                    n.texStorage2D(t.TEXTURE_CUBE_MAP, R, E, e.width, e.height);
                  }
                  for (let e = 0; e < 6; e++)
                    if (p) {
                      T
                        ? w &&
                          n.texSubImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            0,
                            0,
                            0,
                            f[e].width,
                            f[e].height,
                            y,
                            S,
                            f[e].data
                          )
                        : n.texImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            0,
                            E,
                            f[e].width,
                            f[e].height,
                            0,
                            y,
                            S,
                            f[e].data
                          );
                      for (let i = 0; i < A.length; i++) {
                        const r = A[i].image[e].image;
                        T
                          ? w &&
                            n.texSubImage2D(
                              t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                              i + 1,
                              0,
                              0,
                              r.width,
                              r.height,
                              y,
                              S,
                              r.data
                            )
                          : n.texImage2D(
                              t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                              i + 1,
                              E,
                              r.width,
                              r.height,
                              0,
                              y,
                              S,
                              r.data
                            );
                      }
                    } else {
                      T
                        ? w &&
                          n.texSubImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            0,
                            0,
                            0,
                            y,
                            S,
                            f[e]
                          )
                        : n.texImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            0,
                            E,
                            y,
                            S,
                            f[e]
                          );
                      for (let i = 0; i < A.length; i++) {
                        const r = A[i];
                        T
                          ? w &&
                            n.texSubImage2D(
                              t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                              i + 1,
                              0,
                              0,
                              y,
                              S,
                              r.image[e]
                            )
                          : n.texImage2D(
                              t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                              i + 1,
                              E,
                              y,
                              S,
                              r.image[e]
                            );
                      }
                    }
                }
                g(s) && _(t.TEXTURE_CUBE_MAP),
                  (h.__version = c.version),
                  s.onUpdate && s.onUpdate(s);
              }
              e.__version = s.version;
            })(o, e, s)
          : n.bindTexture(t.TEXTURE_CUBE_MAP, o.__webglTexture, t.TEXTURE0 + s);
      }),
      (this.rebindTextures = function (e, n, r) {
        const a = i.get(e);
        void 0 !== n &&
          U(
            a.__webglFramebuffer,
            e,
            e.texture,
            t.COLOR_ATTACHMENT0,
            t.TEXTURE_2D,
            0
          ),
          void 0 !== r && D(e);
      }),
      (this.setupRenderTarget = function (e) {
        const r = e.texture,
          o = i.get(e),
          l = i.get(r);
        e.addEventListener("dispose", S);
        const c = e.textures,
          h = !0 === e.isWebGLCubeRenderTarget,
          u = c.length > 1;
        if (
          (u ||
            (void 0 === l.__webglTexture &&
              (l.__webglTexture = t.createTexture()),
            (l.__version = r.version),
            s.memory.textures++),
          h)
        ) {
          o.__webglFramebuffer = [];
          for (let e = 0; e < 6; e++)
            if (r.mipmaps && r.mipmaps.length > 0) {
              o.__webglFramebuffer[e] = [];
              for (let n = 0; n < r.mipmaps.length; n++)
                o.__webglFramebuffer[e][n] = t.createFramebuffer();
            } else o.__webglFramebuffer[e] = t.createFramebuffer();
        } else {
          if (r.mipmaps && r.mipmaps.length > 0) {
            o.__webglFramebuffer = [];
            for (let e = 0; e < r.mipmaps.length; e++)
              o.__webglFramebuffer[e] = t.createFramebuffer();
          } else o.__webglFramebuffer = t.createFramebuffer();
          if (u)
            for (let e = 0, n = c.length; e < n; e++) {
              const n = i.get(c[e]);
              void 0 === n.__webglTexture &&
                ((n.__webglTexture = t.createTexture()), s.memory.textures++);
            }
          if (e.samples > 0 && !1 === z(e)) {
            (o.__webglMultisampledFramebuffer = t.createFramebuffer()),
              (o.__webglColorRenderbuffer = []),
              n.bindFramebuffer(
                t.FRAMEBUFFER,
                o.__webglMultisampledFramebuffer
              );
            for (let n = 0; n < c.length; n++) {
              const i = c[n];
              (o.__webglColorRenderbuffer[n] = t.createRenderbuffer()),
                t.bindRenderbuffer(
                  t.RENDERBUFFER,
                  o.__webglColorRenderbuffer[n]
                );
              const r = a.convert(i.format, i.colorSpace),
                s = a.convert(i.type),
                l = v(
                  i.internalFormat,
                  r,
                  s,
                  i.colorSpace,
                  !0 === e.isXRRenderTarget
                ),
                h = F(e);
              t.renderbufferStorageMultisample(
                t.RENDERBUFFER,
                h,
                l,
                e.width,
                e.height
              ),
                t.framebufferRenderbuffer(
                  t.FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + n,
                  t.RENDERBUFFER,
                  o.__webglColorRenderbuffer[n]
                );
            }
            t.bindRenderbuffer(t.RENDERBUFFER, null),
              e.depthBuffer &&
                ((o.__webglDepthRenderbuffer = t.createRenderbuffer()),
                I(o.__webglDepthRenderbuffer, e, !0)),
              n.bindFramebuffer(t.FRAMEBUFFER, null);
          }
        }
        if (h) {
          n.bindTexture(t.TEXTURE_CUBE_MAP, l.__webglTexture),
            C(t.TEXTURE_CUBE_MAP, r);
          for (let n = 0; n < 6; n++)
            if (r.mipmaps && r.mipmaps.length > 0)
              for (let i = 0; i < r.mipmaps.length; i++)
                U(
                  o.__webglFramebuffer[n][i],
                  e,
                  r,
                  t.COLOR_ATTACHMENT0,
                  t.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                  i
                );
            else
              U(
                o.__webglFramebuffer[n],
                e,
                r,
                t.COLOR_ATTACHMENT0,
                t.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                0
              );
          g(r) && _(t.TEXTURE_CUBE_MAP), n.unbindTexture();
        } else if (u) {
          for (let r = 0, a = c.length; r < a; r++) {
            const a = c[r],
              s = i.get(a);
            n.bindTexture(t.TEXTURE_2D, s.__webglTexture),
              C(t.TEXTURE_2D, a),
              U(
                o.__webglFramebuffer,
                e,
                a,
                t.COLOR_ATTACHMENT0 + r,
                t.TEXTURE_2D,
                0
              ),
              g(a) && _(t.TEXTURE_2D);
          }
          n.unbindTexture();
        } else {
          let i = t.TEXTURE_2D;
          if (
            ((e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) &&
              (i = e.isWebGL3DRenderTarget ? t.TEXTURE_3D : t.TEXTURE_2D_ARRAY),
            n.bindTexture(i, l.__webglTexture),
            C(i, r),
            r.mipmaps && r.mipmaps.length > 0)
          )
            for (let n = 0; n < r.mipmaps.length; n++)
              U(o.__webglFramebuffer[n], e, r, t.COLOR_ATTACHMENT0, i, n);
          else U(o.__webglFramebuffer, e, r, t.COLOR_ATTACHMENT0, i, 0);
          g(r) && _(i), n.unbindTexture();
        }
        e.depthBuffer && D(e);
      }),
      (this.updateRenderTargetMipmap = function (e) {
        const r = e.textures;
        for (let a = 0, s = r.length; a < s; a++) {
          const s = r[a];
          if (g(s)) {
            const r = e.isWebGLCubeRenderTarget
                ? t.TEXTURE_CUBE_MAP
                : t.TEXTURE_2D,
              a = i.get(s).__webglTexture;
            n.bindTexture(r, a), _(r), n.unbindTexture();
          }
        }
      }),
      (this.updateMultisampleRenderTarget = function (e) {
        if (e.samples > 0)
          if (!1 === z(e)) {
            const r = e.textures,
              a = e.width,
              s = e.height;
            let o = t.COLOR_BUFFER_BIT;
            const c = e.stencilBuffer
                ? t.DEPTH_STENCIL_ATTACHMENT
                : t.DEPTH_ATTACHMENT,
              h = i.get(e),
              u = r.length > 1;
            if (u)
              for (let e = 0; e < r.length; e++)
                n.bindFramebuffer(
                  t.FRAMEBUFFER,
                  h.__webglMultisampledFramebuffer
                ),
                  t.framebufferRenderbuffer(
                    t.FRAMEBUFFER,
                    t.COLOR_ATTACHMENT0 + e,
                    t.RENDERBUFFER,
                    null
                  ),
                  n.bindFramebuffer(t.FRAMEBUFFER, h.__webglFramebuffer),
                  t.framebufferTexture2D(
                    t.DRAW_FRAMEBUFFER,
                    t.COLOR_ATTACHMENT0 + e,
                    t.TEXTURE_2D,
                    null,
                    0
                  );
            n.bindFramebuffer(
              t.READ_FRAMEBUFFER,
              h.__webglMultisampledFramebuffer
            ),
              n.bindFramebuffer(t.DRAW_FRAMEBUFFER, h.__webglFramebuffer);
            for (let n = 0; n < r.length; n++) {
              if (
                (e.resolveDepthBuffer &&
                  (e.depthBuffer && (o |= t.DEPTH_BUFFER_BIT),
                  e.stencilBuffer &&
                    e.resolveStencilBuffer &&
                    (o |= t.STENCIL_BUFFER_BIT)),
                u)
              ) {
                t.framebufferRenderbuffer(
                  t.READ_FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0,
                  t.RENDERBUFFER,
                  h.__webglColorRenderbuffer[n]
                );
                const e = i.get(r[n]).__webglTexture;
                t.framebufferTexture2D(
                  t.DRAW_FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0,
                  t.TEXTURE_2D,
                  e,
                  0
                );
              }
              t.blitFramebuffer(0, 0, a, s, 0, 0, a, s, o, t.NEAREST),
                !0 === l &&
                  ((N.length = 0),
                  (O.length = 0),
                  N.push(t.COLOR_ATTACHMENT0 + n),
                  e.depthBuffer &&
                    !1 === e.resolveDepthBuffer &&
                    (N.push(c),
                    O.push(c),
                    t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER, O)),
                  t.invalidateFramebuffer(t.READ_FRAMEBUFFER, N));
            }
            if (
              (n.bindFramebuffer(t.READ_FRAMEBUFFER, null),
              n.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
              u)
            )
              for (let e = 0; e < r.length; e++) {
                n.bindFramebuffer(
                  t.FRAMEBUFFER,
                  h.__webglMultisampledFramebuffer
                ),
                  t.framebufferRenderbuffer(
                    t.FRAMEBUFFER,
                    t.COLOR_ATTACHMENT0 + e,
                    t.RENDERBUFFER,
                    h.__webglColorRenderbuffer[e]
                  );
                const a = i.get(r[e]).__webglTexture;
                n.bindFramebuffer(t.FRAMEBUFFER, h.__webglFramebuffer),
                  t.framebufferTexture2D(
                    t.DRAW_FRAMEBUFFER,
                    t.COLOR_ATTACHMENT0 + e,
                    t.TEXTURE_2D,
                    a,
                    0
                  );
              }
            n.bindFramebuffer(
              t.DRAW_FRAMEBUFFER,
              h.__webglMultisampledFramebuffer
            );
          } else if (e.depthBuffer && !1 === e.resolveDepthBuffer && l) {
            const n = e.stencilBuffer
              ? t.DEPTH_STENCIL_ATTACHMENT
              : t.DEPTH_ATTACHMENT;
            t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER, [n]);
          }
      }),
      (this.setupDepthRenderbuffer = D),
      (this.setupFrameBufferTexture = U),
      (this.useMultisampledRTT = z);
  }
  function so(t, e) {
    return {
      convert: function (n, i = "") {
        let r;
        const a = ke.getTransfer(i);
        if (n === q) return t.UNSIGNED_BYTE;
        if (n === nt) return t.UNSIGNED_SHORT_4_4_4_4;
        if (n === it) return t.UNSIGNED_SHORT_5_5_5_1;
        if (n === at) return t.UNSIGNED_INT_5_9_9_9_REV;
        if (n === K) return t.BYTE;
        if (n === Z) return t.SHORT;
        if (n === J) return t.UNSIGNED_SHORT;
        if (n === $) return t.INT;
        if (n === Q) return t.UNSIGNED_INT;
        if (n === tt) return t.FLOAT;
        if (n === et) return t.HALF_FLOAT;
        if (n === st) return t.ALPHA;
        if (n === ot) return t.RGB;
        if (n === lt) return t.RGBA;
        if (n === ct) return t.LUMINANCE;
        if (n === ht) return t.LUMINANCE_ALPHA;
        if (n === ut) return t.DEPTH_COMPONENT;
        if (n === dt) return t.DEPTH_STENCIL;
        if (n === pt) return t.RED;
        if (n === ft) return t.RED_INTEGER;
        if (n === mt) return t.RG;
        if (n === gt) return t.RG_INTEGER;
        if (n === _t) return t.RGBA_INTEGER;
        if (n === vt || n === xt || n === Mt || n === yt)
          if (a === ae) {
            if (((r = e.get("WEBGL_compressed_texture_s3tc_srgb")), null === r))
              return null;
            if (n === vt) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
            if (n === xt) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
            if (n === Mt) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
            if (n === yt) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
          } else {
            if (((r = e.get("WEBGL_compressed_texture_s3tc")), null === r))
              return null;
            if (n === vt) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (n === xt) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (n === Mt) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (n === yt) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
          }
        if (n === St || n === Et || n === Tt || n === bt) {
          if (((r = e.get("WEBGL_compressed_texture_pvrtc")), null === r))
            return null;
          if (n === St) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (n === Et) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (n === Tt) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (n === bt) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }
        if (n === wt || n === At || n === Rt) {
          if (((r = e.get("WEBGL_compressed_texture_etc")), null === r))
            return null;
          if (n === wt || n === At)
            return a === ae ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
          if (n === Rt)
            return a === ae
              ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
              : r.COMPRESSED_RGBA8_ETC2_EAC;
        }
        if (
          n === Ct ||
          n === Pt ||
          n === Lt ||
          n === Ut ||
          n === It ||
          n === Dt ||
          n === Nt ||
          n === Ot ||
          n === Ft ||
          n === zt ||
          n === Bt ||
          n === Ht ||
          n === Vt ||
          n === kt
        ) {
          if (((r = e.get("WEBGL_compressed_texture_astc")), null === r))
            return null;
          if (n === Ct)
            return a === ae
              ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
              : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
          if (n === Pt)
            return a === ae
              ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
              : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
          if (n === Lt)
            return a === ae
              ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
              : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
          if (n === Ut)
            return a === ae
              ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
              : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
          if (n === It)
            return a === ae
              ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
              : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
          if (n === Dt)
            return a === ae
              ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
              : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
          if (n === Nt)
            return a === ae
              ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
              : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
          if (n === Ot)
            return a === ae
              ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
              : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
          if (n === Ft)
            return a === ae
              ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
              : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
          if (n === zt)
            return a === ae
              ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
              : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
          if (n === Bt)
            return a === ae
              ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
              : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
          if (n === Ht)
            return a === ae
              ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
              : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
          if (n === Vt)
            return a === ae
              ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
              : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
          if (n === kt)
            return a === ae
              ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
              : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
        }
        if (n === Gt || n === Wt || n === Xt) {
          if (((r = e.get("EXT_texture_compression_bptc")), null === r))
            return null;
          if (n === Gt)
            return a === ae
              ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
              : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
          if (n === Wt) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
          if (n === Xt) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
        }
        if (n === jt || n === Yt || n === qt || n === Kt) {
          if (((r = e.get("EXT_texture_compression_rgtc")), null === r))
            return null;
          if (n === Gt) return r.COMPRESSED_RED_RGTC1_EXT;
          if (n === Yt) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
          if (n === qt) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
          if (n === Kt) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
        }
        return n === rt ? t.UNSIGNED_INT_24_8 : void 0 !== t[n] ? t[n] : null;
      },
    };
  }
  class oo extends vr {
    constructor(t = []) {
      super(), (this.isArrayCamera = !0), (this.cameras = t);
    }
  }
  class lo extends li {
    constructor() {
      super(), (this.isGroup = !0), (this.type = "Group");
    }
  }
  const co = { type: "move" };
  class ho {
    constructor() {
      (this._targetRay = null), (this._grip = null), (this._hand = null);
    }
    getHandSpace() {
      return (
        null === this._hand &&
          ((this._hand = new lo()),
          (this._hand.matrixAutoUpdate = !1),
          (this._hand.visible = !1),
          (this._hand.joints = {}),
          (this._hand.inputState = { pinching: !1 })),
        this._hand
      );
    }
    getTargetRaySpace() {
      return (
        null === this._targetRay &&
          ((this._targetRay = new lo()),
          (this._targetRay.matrixAutoUpdate = !1),
          (this._targetRay.visible = !1),
          (this._targetRay.hasLinearVelocity = !1),
          (this._targetRay.linearVelocity = new an()),
          (this._targetRay.hasAngularVelocity = !1),
          (this._targetRay.angularVelocity = new an())),
        this._targetRay
      );
    }
    getGripSpace() {
      return (
        null === this._grip &&
          ((this._grip = new lo()),
          (this._grip.matrixAutoUpdate = !1),
          (this._grip.visible = !1),
          (this._grip.hasLinearVelocity = !1),
          (this._grip.linearVelocity = new an()),
          (this._grip.hasAngularVelocity = !1),
          (this._grip.angularVelocity = new an())),
        this._grip
      );
    }
    dispatchEvent(t) {
      return (
        null !== this._targetRay && this._targetRay.dispatchEvent(t),
        null !== this._grip && this._grip.dispatchEvent(t),
        null !== this._hand && this._hand.dispatchEvent(t),
        this
      );
    }
    connect(t) {
      if (t && t.hand) {
        const e = this._hand;
        if (e) for (const n of t.hand.values()) this._getHandJoint(e, n);
      }
      return this.dispatchEvent({ type: "connected", data: t }), this;
    }
    disconnect(t) {
      return (
        this.dispatchEvent({ type: "disconnected", data: t }),
        null !== this._targetRay && (this._targetRay.visible = !1),
        null !== this._grip && (this._grip.visible = !1),
        null !== this._hand && (this._hand.visible = !1),
        this
      );
    }
    update(t, e, n) {
      let i = null,
        r = null,
        a = null;
      const s = this._targetRay,
        o = this._grip,
        l = this._hand;
      if (t && "visible-blurred" !== e.session.visibilityState) {
        if (l && t.hand) {
          a = !0;
          for (const i of t.hand.values()) {
            const t = e.getJointPose(i, n),
              r = this._getHandJoint(l, i);
            null !== t &&
              (r.matrix.fromArray(t.transform.matrix),
              r.matrix.decompose(r.position, r.rotation, r.scale),
              (r.matrixWorldNeedsUpdate = !0),
              (r.jointRadius = t.radius)),
              (r.visible = null !== t);
          }
          const i = l.joints["index-finger-tip"],
            r = l.joints["thumb-tip"],
            s = i.position.distanceTo(r.position),
            o = 0.02,
            c = 0.005;
          l.inputState.pinching && s > o + c
            ? ((l.inputState.pinching = !1),
              this.dispatchEvent({
                type: "pinchend",
                handedness: t.handedness,
                target: this,
              }))
            : !l.inputState.pinching &&
              s <= o - c &&
              ((l.inputState.pinching = !0),
              this.dispatchEvent({
                type: "pinchstart",
                handedness: t.handedness,
                target: this,
              }));
        } else
          null !== o &&
            t.gripSpace &&
            ((r = e.getPose(t.gripSpace, n)),
            null !== r &&
              (o.matrix.fromArray(r.transform.matrix),
              o.matrix.decompose(o.position, o.rotation, o.scale),
              (o.matrixWorldNeedsUpdate = !0),
              r.linearVelocity
                ? ((o.hasLinearVelocity = !0),
                  o.linearVelocity.copy(r.linearVelocity))
                : (o.hasLinearVelocity = !1),
              r.angularVelocity
                ? ((o.hasAngularVelocity = !0),
                  o.angularVelocity.copy(r.angularVelocity))
                : (o.hasAngularVelocity = !1)));
        null !== s &&
          ((i = e.getPose(t.targetRaySpace, n)),
          null === i && null !== r && (i = r),
          null !== i &&
            (s.matrix.fromArray(i.transform.matrix),
            s.matrix.decompose(s.position, s.rotation, s.scale),
            (s.matrixWorldNeedsUpdate = !0),
            i.linearVelocity
              ? ((s.hasLinearVelocity = !0),
                s.linearVelocity.copy(i.linearVelocity))
              : (s.hasLinearVelocity = !1),
            i.angularVelocity
              ? ((s.hasAngularVelocity = !0),
                s.angularVelocity.copy(i.angularVelocity))
              : (s.hasAngularVelocity = !1),
            this.dispatchEvent(co)));
      }
      return (
        null !== s && (s.visible = null !== i),
        null !== o && (o.visible = null !== r),
        null !== l && (l.visible = null !== a),
        this
      );
    }
    _getHandJoint(t, e) {
      if (void 0 === t.joints[e.jointName]) {
        const n = new lo();
        (n.matrixAutoUpdate = !1),
          (n.visible = !1),
          (t.joints[e.jointName] = n),
          t.add(n);
      }
      return t.joints[e.jointName];
    }
  }
  class uo {
    constructor() {
      (this.texture = null),
        (this.mesh = null),
        (this.depthNear = 0),
        (this.depthFar = 0);
    }
    init(t, e, n) {
      if (null === this.texture) {
        const i = new Je();
        (t.properties.get(i).__webglTexture = e.texture),
          (e.depthNear == n.depthNear && e.depthFar == n.depthFar) ||
            ((this.depthNear = e.depthNear), (this.depthFar = e.depthFar)),
          (this.texture = i);
      }
    }
    getMesh(t) {
      if (null !== this.texture && null === this.mesh) {
        const e = t.cameras[0].viewport,
          n = new pr({
            vertexShader:
              "\nvoid main() {\n\n\tgl_Position = vec4( position, 1.0 );\n\n}",
            fragmentShader:
              "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n\tvec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n\tif ( coord.x >= 1.0 ) {\n\n\t\tgl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n\t} else {\n\n\t\tgl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n\t}\n\n}",
            uniforms: {
              depthColor: { value: this.texture },
              depthWidth: { value: e.z },
              depthHeight: { value: e.w },
            },
          });
        this.mesh = new sr(new Ur(20, 20), n);
      }
      return this.mesh;
    }
    reset() {
      (this.texture = null), (this.mesh = null);
    }
    getDepthTexture() {
      return this.texture;
    }
  }
  class po extends Me {
    constructor(t, e) {
      super();
      const n = this;
      let i = null,
        r = 1,
        a = null,
        s = "local-floor",
        o = 1,
        l = null,
        c = null,
        h = null,
        u = null,
        d = null,
        p = null;
      const f = new uo(),
        m = e.getContextAttributes();
      let g = null,
        _ = null;
      const v = [],
        x = [],
        M = new Pe();
      let y = null;
      const S = new vr();
      S.layers.enable(1), (S.viewport = new $e());
      const E = new vr();
      E.layers.enable(2), (E.viewport = new $e());
      const T = [S, E],
        b = new oo();
      b.layers.enable(1), b.layers.enable(2);
      let w = null,
        A = null;
      function R(t) {
        const e = x.indexOf(t.inputSource);
        if (-1 === e) return;
        const n = v[e];
        void 0 !== n &&
          (n.update(t.inputSource, t.frame, l || a),
          n.dispatchEvent({ type: t.type, data: t.inputSource }));
      }
      function C() {
        i.removeEventListener("select", R),
          i.removeEventListener("selectstart", R),
          i.removeEventListener("selectend", R),
          i.removeEventListener("squeeze", R),
          i.removeEventListener("squeezestart", R),
          i.removeEventListener("squeezeend", R),
          i.removeEventListener("end", C),
          i.removeEventListener("inputsourceschange", P);
        for (let t = 0; t < v.length; t++) {
          const e = x[t];
          null !== e && ((x[t] = null), v[t].disconnect(e));
        }
        (w = null),
          (A = null),
          f.reset(),
          t.setRenderTarget(g),
          (d = null),
          (u = null),
          (h = null),
          (i = null),
          (_ = null),
          N.stop(),
          (n.isPresenting = !1),
          t.setPixelRatio(y),
          t.setSize(M.width, M.height, !1),
          n.dispatchEvent({ type: "sessionend" });
      }
      function P(t) {
        for (let e = 0; e < t.removed.length; e++) {
          const n = t.removed[e],
            i = x.indexOf(n);
          i >= 0 && ((x[i] = null), v[i].disconnect(n));
        }
        for (let e = 0; e < t.added.length; e++) {
          const n = t.added[e];
          let i = x.indexOf(n);
          if (-1 === i) {
            for (let t = 0; t < v.length; t++) {
              if (t >= x.length) {
                x.push(n), (i = t);
                break;
              }
              if (null === x[t]) {
                (x[t] = n), (i = t);
                break;
              }
            }
            if (-1 === i) break;
          }
          const r = v[i];
          r && r.connect(n);
        }
      }
      (this.cameraAutoUpdate = !0),
        (this.enabled = !1),
        (this.isPresenting = !1),
        (this.getController = function (t) {
          let e = v[t];
          return (
            void 0 === e && ((e = new ho()), (v[t] = e)), e.getTargetRaySpace()
          );
        }),
        (this.getControllerGrip = function (t) {
          let e = v[t];
          return void 0 === e && ((e = new ho()), (v[t] = e)), e.getGripSpace();
        }),
        (this.getHand = function (t) {
          let e = v[t];
          return void 0 === e && ((e = new ho()), (v[t] = e)), e.getHandSpace();
        }),
        (this.setFramebufferScaleFactor = function (t) {
          (r = t),
            !0 === n.isPresenting &&
              console.warn(
                "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
              );
        }),
        (this.setReferenceSpaceType = function (t) {
          (s = t),
            !0 === n.isPresenting &&
              console.warn(
                "THREE.WebXRManager: Cannot change reference space type while presenting."
              );
        }),
        (this.getReferenceSpace = function () {
          return l || a;
        }),
        (this.setReferenceSpace = function (t) {
          l = t;
        }),
        (this.getBaseLayer = function () {
          return null !== u ? u : d;
        }),
        (this.getBinding = function () {
          return h;
        }),
        (this.getFrame = function () {
          return p;
        }),
        (this.getSession = function () {
          return i;
        }),
        (this.setSession = async function (c) {
          if (((i = c), null !== i)) {
            if (
              ((g = t.getRenderTarget()),
              i.addEventListener("select", R),
              i.addEventListener("selectstart", R),
              i.addEventListener("selectend", R),
              i.addEventListener("squeeze", R),
              i.addEventListener("squeezestart", R),
              i.addEventListener("squeezeend", R),
              i.addEventListener("end", C),
              i.addEventListener("inputsourceschange", P),
              !0 !== m.xrCompatible && (await e.makeXRCompatible()),
              (y = t.getPixelRatio()),
              t.getSize(M),
              void 0 === i.renderState.layers)
            ) {
              const n = {
                antialias: m.antialias,
                alpha: !0,
                depth: m.depth,
                stencil: m.stencil,
                framebufferScaleFactor: r,
              };
              (d = new XRWebGLLayer(i, e, n)),
                i.updateRenderState({ baseLayer: d }),
                t.setPixelRatio(1),
                t.setSize(d.framebufferWidth, d.framebufferHeight, !1),
                (_ = new tn(d.framebufferWidth, d.framebufferHeight, {
                  format: lt,
                  type: q,
                  colorSpace: t.outputColorSpace,
                  stencilBuffer: m.stencil,
                }));
            } else {
              let n = null,
                a = null,
                s = null;
              m.depth &&
                ((s = m.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24),
                (n = m.stencil ? dt : ut),
                (a = m.stencil ? rt : Q));
              const o = {
                colorFormat: e.RGBA8,
                depthFormat: s,
                scaleFactor: r,
              };
              (h = new XRWebGLBinding(i, e)),
                (u = h.createProjectionLayer(o)),
                i.updateRenderState({ layers: [u] }),
                t.setPixelRatio(1),
                t.setSize(u.textureWidth, u.textureHeight, !1),
                (_ = new tn(u.textureWidth, u.textureHeight, {
                  format: lt,
                  type: q,
                  depthTexture: new fa(
                    u.textureWidth,
                    u.textureHeight,
                    a,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    n
                  ),
                  stencilBuffer: m.stencil,
                  colorSpace: t.outputColorSpace,
                  samples: m.antialias ? 4 : 0,
                  resolveDepthBuffer: !1 === u.ignoreDepthValues,
                }));
            }
            (_.isXRRenderTarget = !0),
              this.setFoveation(o),
              (l = null),
              (a = await i.requestReferenceSpace(s)),
              N.setContext(i),
              N.start(),
              (n.isPresenting = !0),
              n.dispatchEvent({ type: "sessionstart" });
          }
        }),
        (this.getEnvironmentBlendMode = function () {
          if (null !== i) return i.environmentBlendMode;
        }),
        (this.getDepthTexture = function () {
          return f.getDepthTexture();
        });
      const L = new an(),
        U = new an();
      function I(t, e) {
        null === e
          ? t.matrixWorld.copy(t.matrix)
          : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
          t.matrixWorldInverse.copy(t.matrixWorld).invert();
      }
      (this.updateCamera = function (t) {
        if (null === i) return;
        null !== f.texture && ((t.near = f.depthNear), (t.far = f.depthFar)),
          (b.near = E.near = S.near = t.near),
          (b.far = E.far = S.far = t.far),
          (w === b.near && A === b.far) ||
            (i.updateRenderState({ depthNear: b.near, depthFar: b.far }),
            (w = b.near),
            (A = b.far),
            (S.near = w),
            (S.far = A),
            (E.near = w),
            (E.far = A),
            S.updateProjectionMatrix(),
            E.updateProjectionMatrix(),
            t.updateProjectionMatrix());
        const e = t.parent,
          n = b.cameras;
        I(b, e);
        for (let t = 0; t < n.length; t++) I(n[t], e);
        2 === n.length
          ? (function (t, e, n) {
              L.setFromMatrixPosition(e.matrixWorld),
                U.setFromMatrixPosition(n.matrixWorld);
              const i = L.distanceTo(U),
                r = e.projectionMatrix.elements,
                a = n.projectionMatrix.elements,
                s = r[14] / (r[10] - 1),
                o = r[14] / (r[10] + 1),
                l = (r[9] + 1) / r[5],
                c = (r[9] - 1) / r[5],
                h = (r[8] - 1) / r[0],
                u = (a[8] + 1) / a[0],
                d = s * h,
                p = s * u,
                f = i / (-h + u),
                m = f * -h;
              e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
                t.translateX(m),
                t.translateZ(f),
                t.matrixWorld.compose(t.position, t.quaternion, t.scale),
                t.matrixWorldInverse.copy(t.matrixWorld).invert();
              const g = s + f,
                _ = o + f,
                v = d - m,
                x = p + (i - m),
                M = ((l * o) / _) * g,
                y = ((c * o) / _) * g;
              t.projectionMatrix.makePerspective(v, x, M, y, g, _),
                t.projectionMatrixInverse.copy(t.projectionMatrix).invert();
            })(b, S, E)
          : b.projectionMatrix.copy(S.projectionMatrix),
          (function (t, e, n) {
            null === n
              ? t.matrix.copy(e.matrixWorld)
              : (t.matrix.copy(n.matrixWorld),
                t.matrix.invert(),
                t.matrix.multiply(e.matrixWorld)),
              t.matrix.decompose(t.position, t.quaternion, t.scale),
              t.updateMatrixWorld(!0),
              t.projectionMatrix.copy(e.projectionMatrix),
              t.projectionMatrixInverse.copy(e.projectionMatrixInverse),
              t.isPerspectiveCamera &&
                ((t.fov =
                  2 * Ee * Math.atan(1 / t.projectionMatrix.elements[5])),
                (t.zoom = 1));
          })(t, b, e);
      }),
        (this.getCamera = function () {
          return b;
        }),
        (this.getFoveation = function () {
          if (null !== u || null !== d) return o;
        }),
        (this.setFoveation = function (t) {
          (o = t),
            null !== u && (u.fixedFoveation = t),
            null !== d && void 0 !== d.fixedFoveation && (d.fixedFoveation = t);
        }),
        (this.hasDepthSensing = function () {
          return null !== f.texture;
        }),
        (this.getDepthSensingMesh = function () {
          return f.getMesh(b);
        });
      let D = null;
      const N = new Pr();
      N.setAnimationLoop(function (e, r) {
        if (((c = r.getViewerPose(l || a)), (p = r), null !== c)) {
          const e = c.views;
          null !== d &&
            (t.setRenderTargetFramebuffer(_, d.framebuffer),
            t.setRenderTarget(_));
          let n = !1;
          e.length !== b.cameras.length && ((b.cameras.length = 0), (n = !0));
          for (let i = 0; i < e.length; i++) {
            const r = e[i];
            let a = null;
            if (null !== d) a = d.getViewport(r);
            else {
              const e = h.getViewSubImage(u, r);
              (a = e.viewport),
                0 === i &&
                  (t.setRenderTargetTextures(
                    _,
                    e.colorTexture,
                    u.ignoreDepthValues ? void 0 : e.depthStencilTexture
                  ),
                  t.setRenderTarget(_));
            }
            let s = T[i];
            void 0 === s &&
              ((s = new vr()),
              s.layers.enable(i),
              (s.viewport = new $e()),
              (T[i] = s)),
              s.matrix.fromArray(r.transform.matrix),
              s.matrix.decompose(s.position, s.quaternion, s.scale),
              s.projectionMatrix.fromArray(r.projectionMatrix),
              s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),
              s.viewport.set(a.x, a.y, a.width, a.height),
              0 === i &&
                (b.matrix.copy(s.matrix),
                b.matrix.decompose(b.position, b.quaternion, b.scale)),
              !0 === n && b.cameras.push(s);
          }
          const r = i.enabledFeatures;
          if (r && r.includes("depth-sensing")) {
            const n = h.getDepthInformation(e[0]);
            n && n.isValid && n.texture && f.init(t, n, i.renderState);
          }
        }
        for (let t = 0; t < v.length; t++) {
          const e = x[t],
            n = v[t];
          null !== e && void 0 !== n && n.update(e, r, l || a);
        }
        D && D(e, r),
          r.detectedPlanes &&
            n.dispatchEvent({ type: "planesdetected", data: r }),
          (p = null);
      }),
        (this.setAnimationLoop = function (t) {
          D = t;
        }),
        (this.dispose = function () {});
    }
  }
  const fo = new Xn(),
    mo = new Nn();
  function go(t, e) {
    function n(t, e) {
      !0 === t.matrixAutoUpdate && t.updateMatrix(), e.value.copy(t.matrix);
    }
    function i(t, i) {
      (t.opacity.value = i.opacity),
        i.color && t.diffuse.value.copy(i.color),
        i.emissive &&
          t.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),
        i.map && ((t.map.value = i.map), n(i.map, t.mapTransform)),
        i.alphaMap &&
          ((t.alphaMap.value = i.alphaMap), n(i.alphaMap, t.alphaMapTransform)),
        i.bumpMap &&
          ((t.bumpMap.value = i.bumpMap),
          n(i.bumpMap, t.bumpMapTransform),
          (t.bumpScale.value = i.bumpScale),
          1 === i.side && (t.bumpScale.value *= -1)),
        i.normalMap &&
          ((t.normalMap.value = i.normalMap),
          n(i.normalMap, t.normalMapTransform),
          t.normalScale.value.copy(i.normalScale),
          1 === i.side && t.normalScale.value.negate()),
        i.displacementMap &&
          ((t.displacementMap.value = i.displacementMap),
          n(i.displacementMap, t.displacementMapTransform),
          (t.displacementScale.value = i.displacementScale),
          (t.displacementBias.value = i.displacementBias)),
        i.emissiveMap &&
          ((t.emissiveMap.value = i.emissiveMap),
          n(i.emissiveMap, t.emissiveMapTransform)),
        i.specularMap &&
          ((t.specularMap.value = i.specularMap),
          n(i.specularMap, t.specularMapTransform)),
        i.alphaTest > 0 && (t.alphaTest.value = i.alphaTest);
      const r = e.get(i),
        a = r.envMap,
        s = r.envMapRotation;
      a &&
        ((t.envMap.value = a),
        fo.copy(s),
        (fo.x *= -1),
        (fo.y *= -1),
        (fo.z *= -1),
        a.isCubeTexture &&
          !1 === a.isRenderTargetTexture &&
          ((fo.y *= -1), (fo.z *= -1)),
        t.envMapRotation.value.setFromMatrix4(mo.makeRotationFromEuler(fo)),
        (t.flipEnvMap.value =
          a.isCubeTexture && !1 === a.isRenderTargetTexture ? -1 : 1),
        (t.reflectivity.value = i.reflectivity),
        (t.ior.value = i.ior),
        (t.refractionRatio.value = i.refractionRatio)),
        i.lightMap &&
          ((t.lightMap.value = i.lightMap),
          (t.lightMapIntensity.value = i.lightMapIntensity),
          n(i.lightMap, t.lightMapTransform)),
        i.aoMap &&
          ((t.aoMap.value = i.aoMap),
          (t.aoMapIntensity.value = i.aoMapIntensity),
          n(i.aoMap, t.aoMapTransform));
    }
    return {
      refreshFogUniforms: function (e, n) {
        n.color.getRGB(e.fogColor.value, ur(t)),
          n.isFog
            ? ((e.fogNear.value = n.near), (e.fogFar.value = n.far))
            : n.isFogExp2 && (e.fogDensity.value = n.density);
      },
      refreshMaterialUniforms: function (t, r, a, s, o) {
        r.isMeshBasicMaterial || r.isMeshLambertMaterial
          ? i(t, r)
          : r.isMeshToonMaterial
          ? (i(t, r),
            (function (t, e) {
              e.gradientMap && (t.gradientMap.value = e.gradientMap);
            })(t, r))
          : r.isMeshPhongMaterial
          ? (i(t, r),
            (function (t, e) {
              t.specular.value.copy(e.specular),
                (t.shininess.value = Math.max(e.shininess, 1e-4));
            })(t, r))
          : r.isMeshStandardMaterial
          ? (i(t, r),
            (function (t, e) {
              (t.metalness.value = e.metalness),
                e.metalnessMap &&
                  ((t.metalnessMap.value = e.metalnessMap),
                  n(e.metalnessMap, t.metalnessMapTransform)),
                (t.roughness.value = e.roughness),
                e.roughnessMap &&
                  ((t.roughnessMap.value = e.roughnessMap),
                  n(e.roughnessMap, t.roughnessMapTransform)),
                e.envMap && (t.envMapIntensity.value = e.envMapIntensity);
            })(t, r),
            r.isMeshPhysicalMaterial &&
              (function (t, e, i) {
                (t.ior.value = e.ior),
                  e.sheen > 0 &&
                    (t.sheenColor.value
                      .copy(e.sheenColor)
                      .multiplyScalar(e.sheen),
                    (t.sheenRoughness.value = e.sheenRoughness),
                    e.sheenColorMap &&
                      ((t.sheenColorMap.value = e.sheenColorMap),
                      n(e.sheenColorMap, t.sheenColorMapTransform)),
                    e.sheenRoughnessMap &&
                      ((t.sheenRoughnessMap.value = e.sheenRoughnessMap),
                      n(e.sheenRoughnessMap, t.sheenRoughnessMapTransform))),
                  e.clearcoat > 0 &&
                    ((t.clearcoat.value = e.clearcoat),
                    (t.clearcoatRoughness.value = e.clearcoatRoughness),
                    e.clearcoatMap &&
                      ((t.clearcoatMap.value = e.clearcoatMap),
                      n(e.clearcoatMap, t.clearcoatMapTransform)),
                    e.clearcoatRoughnessMap &&
                      ((t.clearcoatRoughnessMap.value =
                        e.clearcoatRoughnessMap),
                      n(
                        e.clearcoatRoughnessMap,
                        t.clearcoatRoughnessMapTransform
                      )),
                    e.clearcoatNormalMap &&
                      ((t.clearcoatNormalMap.value = e.clearcoatNormalMap),
                      n(e.clearcoatNormalMap, t.clearcoatNormalMapTransform),
                      t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),
                      1 === e.side && t.clearcoatNormalScale.value.negate())),
                  e.dispersion > 0 && (t.dispersion.value = e.dispersion),
                  e.iridescence > 0 &&
                    ((t.iridescence.value = e.iridescence),
                    (t.iridescenceIOR.value = e.iridescenceIOR),
                    (t.iridescenceThicknessMinimum.value =
                      e.iridescenceThicknessRange[0]),
                    (t.iridescenceThicknessMaximum.value =
                      e.iridescenceThicknessRange[1]),
                    e.iridescenceMap &&
                      ((t.iridescenceMap.value = e.iridescenceMap),
                      n(e.iridescenceMap, t.iridescenceMapTransform)),
                    e.iridescenceThicknessMap &&
                      ((t.iridescenceThicknessMap.value =
                        e.iridescenceThicknessMap),
                      n(
                        e.iridescenceThicknessMap,
                        t.iridescenceThicknessMapTransform
                      ))),
                  e.transmission > 0 &&
                    ((t.transmission.value = e.transmission),
                    (t.transmissionSamplerMap.value = i.texture),
                    t.transmissionSamplerSize.value.set(i.width, i.height),
                    e.transmissionMap &&
                      ((t.transmissionMap.value = e.transmissionMap),
                      n(e.transmissionMap, t.transmissionMapTransform)),
                    (t.thickness.value = e.thickness),
                    e.thicknessMap &&
                      ((t.thicknessMap.value = e.thicknessMap),
                      n(e.thicknessMap, t.thicknessMapTransform)),
                    (t.attenuationDistance.value = e.attenuationDistance),
                    t.attenuationColor.value.copy(e.attenuationColor)),
                  e.anisotropy > 0 &&
                    (t.anisotropyVector.value.set(
                      e.anisotropy * Math.cos(e.anisotropyRotation),
                      e.anisotropy * Math.sin(e.anisotropyRotation)
                    ),
                    e.anisotropyMap &&
                      ((t.anisotropyMap.value = e.anisotropyMap),
                      n(e.anisotropyMap, t.anisotropyMapTransform))),
                  (t.specularIntensity.value = e.specularIntensity),
                  t.specularColor.value.copy(e.specularColor),
                  e.specularColorMap &&
                    ((t.specularColorMap.value = e.specularColorMap),
                    n(e.specularColorMap, t.specularColorMapTransform)),
                  e.specularIntensityMap &&
                    ((t.specularIntensityMap.value = e.specularIntensityMap),
                    n(e.specularIntensityMap, t.specularIntensityMapTransform));
              })(t, r, o))
          : r.isMeshMatcapMaterial
          ? (i(t, r),
            (function (t, e) {
              e.matcap && (t.matcap.value = e.matcap);
            })(t, r))
          : r.isMeshDepthMaterial
          ? i(t, r)
          : r.isMeshDistanceMaterial
          ? (i(t, r),
            (function (t, n) {
              const i = e.get(n).light;
              t.referencePosition.value.setFromMatrixPosition(i.matrixWorld),
                (t.nearDistance.value = i.shadow.camera.near),
                (t.farDistance.value = i.shadow.camera.far);
            })(t, r))
          : r.isMeshNormalMaterial
          ? i(t, r)
          : r.isLineBasicMaterial
          ? ((function (t, e) {
              t.diffuse.value.copy(e.color),
                (t.opacity.value = e.opacity),
                e.map && ((t.map.value = e.map), n(e.map, t.mapTransform));
            })(t, r),
            r.isLineDashedMaterial &&
              (function (t, e) {
                (t.dashSize.value = e.dashSize),
                  (t.totalSize.value = e.dashSize + e.gapSize),
                  (t.scale.value = e.scale);
              })(t, r))
          : r.isPointsMaterial
          ? (function (t, e, i, r) {
              t.diffuse.value.copy(e.color),
                (t.opacity.value = e.opacity),
                (t.size.value = e.size * i),
                (t.scale.value = 0.5 * r),
                e.map && ((t.map.value = e.map), n(e.map, t.uvTransform)),
                e.alphaMap &&
                  ((t.alphaMap.value = e.alphaMap),
                  n(e.alphaMap, t.alphaMapTransform)),
                e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
            })(t, r, a, s)
          : r.isSpriteMaterial
          ? (function (t, e) {
              t.diffuse.value.copy(e.color),
                (t.opacity.value = e.opacity),
                (t.rotation.value = e.rotation),
                e.map && ((t.map.value = e.map), n(e.map, t.mapTransform)),
                e.alphaMap &&
                  ((t.alphaMap.value = e.alphaMap),
                  n(e.alphaMap, t.alphaMapTransform)),
                e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
            })(t, r)
          : r.isShadowMaterial
          ? (t.color.value.copy(r.color), (t.opacity.value = r.opacity))
          : r.isShaderMaterial && (r.uniformsNeedUpdate = !1);
      },
    };
  }
  function _o(t, e, n, i) {
    let r = {},
      a = {},
      s = [];
    const o = t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);
    function l(t, e, n, i) {
      const r = t.value,
        a = e + "_" + n;
      if (void 0 === i[a])
        return (
          (i[a] =
            "number" == typeof r || "boolean" == typeof r ? r : r.clone()),
          !0
        );
      {
        const t = i[a];
        if ("number" == typeof r || "boolean" == typeof r) {
          if (t !== r) return (i[a] = r), !0;
        } else if (!1 === t.equals(r)) return t.copy(r), !0;
      }
      return !1;
    }
    function c(t) {
      const e = { boundary: 0, storage: 0 };
      return (
        "number" == typeof t || "boolean" == typeof t
          ? ((e.boundary = 4), (e.storage = 4))
          : t.isVector2
          ? ((e.boundary = 8), (e.storage = 8))
          : t.isVector3 || t.isColor
          ? ((e.boundary = 16), (e.storage = 12))
          : t.isVector4
          ? ((e.boundary = 16), (e.storage = 16))
          : t.isMatrix3
          ? ((e.boundary = 48), (e.storage = 48))
          : t.isMatrix4
          ? ((e.boundary = 64), (e.storage = 64))
          : t.isTexture
          ? console.warn(
              "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
            )
          : console.warn(
              "THREE.WebGLRenderer: Unsupported uniform value type.",
              t
            ),
        e
      );
    }
    function h(e) {
      const n = e.target;
      n.removeEventListener("dispose", h);
      const i = s.indexOf(n.__bindingPointIndex);
      s.splice(i, 1), t.deleteBuffer(r[n.id]), delete r[n.id], delete a[n.id];
    }
    return {
      bind: function (t, e) {
        const n = e.program;
        i.uniformBlockBinding(t, n);
      },
      update: function (n, u) {
        let d = r[n.id];
        void 0 === d &&
          ((function (t) {
            const e = t.uniforms;
            let n = 0;
            for (let t = 0, i = e.length; t < i; t++) {
              const i = Array.isArray(e[t]) ? e[t] : [e[t]];
              for (let t = 0, e = i.length; t < e; t++) {
                const e = i[t],
                  r = Array.isArray(e.value) ? e.value : [e.value];
                for (let t = 0, i = r.length; t < i; t++) {
                  const i = c(r[t]),
                    a = n % 16,
                    s = a % i.boundary,
                    o = a + s;
                  (n += s),
                    0 !== o && 16 - o < i.storage && (n += 16 - o),
                    (e.__data = new Float32Array(
                      i.storage / Float32Array.BYTES_PER_ELEMENT
                    )),
                    (e.__offset = n),
                    (n += i.storage);
                }
              }
            }
            const i = n % 16;
            i > 0 && (n += 16 - i), (t.__size = n), (t.__cache = {});
          })(n),
          (d = (function (e) {
            const n = (function () {
              for (let t = 0; t < o; t++)
                if (-1 === s.indexOf(t)) return s.push(t), t;
              return (
                console.error(
                  "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
                ),
                0
              );
            })();
            e.__bindingPointIndex = n;
            const i = t.createBuffer(),
              r = e.__size,
              a = e.usage;
            return (
              t.bindBuffer(t.UNIFORM_BUFFER, i),
              t.bufferData(t.UNIFORM_BUFFER, r, a),
              t.bindBuffer(t.UNIFORM_BUFFER, null),
              t.bindBufferBase(t.UNIFORM_BUFFER, n, i),
              i
            );
          })(n)),
          (r[n.id] = d),
          n.addEventListener("dispose", h));
        const p = u.program;
        i.updateUBOMapping(n, p);
        const f = e.render.frame;
        a[n.id] !== f &&
          ((function (e) {
            const n = r[e.id],
              i = e.uniforms,
              a = e.__cache;
            t.bindBuffer(t.UNIFORM_BUFFER, n);
            for (let e = 0, n = i.length; e < n; e++) {
              const n = Array.isArray(i[e]) ? i[e] : [i[e]];
              for (let i = 0, r = n.length; i < r; i++) {
                const r = n[i];
                if (!0 === l(r, e, i, a)) {
                  const e = r.__offset,
                    n = Array.isArray(r.value) ? r.value : [r.value];
                  let i = 0;
                  for (let a = 0; a < n.length; a++) {
                    const s = n[a],
                      o = c(s);
                    "number" == typeof s || "boolean" == typeof s
                      ? ((r.__data[0] = s),
                        t.bufferSubData(t.UNIFORM_BUFFER, e + i, r.__data))
                      : s.isMatrix3
                      ? ((r.__data[0] = s.elements[0]),
                        (r.__data[1] = s.elements[1]),
                        (r.__data[2] = s.elements[2]),
                        (r.__data[3] = 0),
                        (r.__data[4] = s.elements[3]),
                        (r.__data[5] = s.elements[4]),
                        (r.__data[6] = s.elements[5]),
                        (r.__data[7] = 0),
                        (r.__data[8] = s.elements[6]),
                        (r.__data[9] = s.elements[7]),
                        (r.__data[10] = s.elements[8]),
                        (r.__data[11] = 0))
                      : (s.toArray(r.__data, i),
                        (i += o.storage / Float32Array.BYTES_PER_ELEMENT));
                  }
                  t.bufferSubData(t.UNIFORM_BUFFER, e, r.__data);
                }
              }
            }
            t.bindBuffer(t.UNIFORM_BUFFER, null);
          })(n),
          (a[n.id] = f));
      },
      dispose: function () {
        for (const e in r) t.deleteBuffer(r[e]);
        (s = []), (r = {}), (a = {});
      },
    };
  }
  class vo extends Ai {
    constructor(t) {
      super(),
        (this.isPointsMaterial = !0),
        (this.type = "PointsMaterial"),
        (this.color = new Ti(16777215)),
        (this.map = null),
        (this.alphaMap = null),
        (this.size = 1),
        (this.sizeAttenuation = !0),
        (this.fog = !0),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        this.color.copy(t.color),
        (this.map = t.map),
        (this.alphaMap = t.alphaMap),
        (this.size = t.size),
        (this.sizeAttenuation = t.sizeAttenuation),
        (this.fog = t.fog),
        this
      );
    }
  }
  const xo = new Nn(),
    Mo = new Dn(),
    yo = new wn(),
    So = new an();
  class Eo extends li {
    constructor(t = new ki(), e = new vo()) {
      super(),
        (this.isPoints = !0),
        (this.type = "Points"),
        (this.geometry = t),
        (this.material = e),
        this.updateMorphTargets();
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        (this.material = Array.isArray(t.material)
          ? t.material.slice()
          : t.material),
        (this.geometry = t.geometry),
        this
      );
    }
    raycast(t, e) {
      const n = this.geometry,
        i = this.matrixWorld,
        r = t.params.Points.threshold,
        a = n.drawRange;
      if (
        (null === n.boundingSphere && n.computeBoundingSphere(),
        yo.copy(n.boundingSphere),
        yo.applyMatrix4(i),
        (yo.radius += r),
        !1 === t.ray.intersectsSphere(yo))
      )
        return;
      xo.copy(i).invert(), Mo.copy(t.ray).applyMatrix4(xo);
      const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        o = s * s,
        l = n.index,
        c = n.attributes.position;
      if (null !== l)
        for (
          let n = Math.max(0, a.start),
            r = Math.min(l.count, a.start + a.count);
          n < r;
          n++
        ) {
          const r = l.getX(n);
          So.fromBufferAttribute(c, r), To(So, r, o, i, t, e, this);
        }
      else
        for (
          let n = Math.max(0, a.start),
            r = Math.min(c.count, a.start + a.count);
          n < r;
          n++
        )
          So.fromBufferAttribute(c, n), To(So, n, o, i, t, e, this);
    }
    updateMorphTargets() {
      const t = this.geometry.morphAttributes,
        e = Object.keys(t);
      if (e.length > 0) {
        const n = t[e[0]];
        if (void 0 !== n) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let t = 0, e = n.length; t < e; t++) {
            const e = n[t].name || String(t);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[e] = t);
          }
        }
      }
    }
  }
  function To(t, e, n, i, r, a, s) {
    const o = Mo.distanceSqToPoint(t);
    if (o < n) {
      const n = new an();
      Mo.closestPointToPoint(t, n), n.applyMatrix4(i);
      const l = r.ray.origin.distanceTo(n);
      if (l < r.near || l > r.far) return;
      a.push({
        distance: l,
        distanceToRay: Math.sqrt(o),
        point: n,
        index: e,
        face: null,
        object: s,
      });
    }
  }
  function bo(t, e, n) {
    return !t || (!n && t.constructor === e)
      ? t
      : "number" == typeof e.BYTES_PER_ELEMENT
      ? new e(t)
      : Array.prototype.slice.call(t);
  }
  class wo {
    constructor(t, e, n, i) {
      (this.parameterPositions = t),
        (this._cachedIndex = 0),
        (this.resultBuffer = void 0 !== i ? i : new e.constructor(n)),
        (this.sampleValues = e),
        (this.valueSize = n),
        (this.settings = null),
        (this.DefaultSettings_ = {});
    }
    evaluate(t) {
      const e = this.parameterPositions;
      let n = this._cachedIndex,
        i = e[n],
        r = e[n - 1];
      t: {
        e: {
          let a;
          n: {
            i: if (!(t < i)) {
              for (let a = n + 2; ; ) {
                if (void 0 === i) {
                  if (t < r) break i;
                  return (
                    (n = e.length),
                    (this._cachedIndex = n),
                    this.copySampleValue_(n - 1)
                  );
                }
                if (n === a) break;
                if (((r = i), (i = e[++n]), t < i)) break e;
              }
              a = e.length;
              break n;
            }
            if (t >= r) break t;
            {
              const s = e[1];
              t < s && ((n = 2), (r = s));
              for (let a = n - 2; ; ) {
                if (void 0 === r)
                  return (this._cachedIndex = 0), this.copySampleValue_(0);
                if (n === a) break;
                if (((i = r), (r = e[--n - 1]), t >= r)) break e;
              }
              (a = n), (n = 0);
            }
          }
          for (; n < a; ) {
            const i = (n + a) >>> 1;
            t < e[i] ? (a = i) : (n = i + 1);
          }
          if (((i = e[n]), (r = e[n - 1]), void 0 === r))
            return (this._cachedIndex = 0), this.copySampleValue_(0);
          if (void 0 === i)
            return (
              (n = e.length),
              (this._cachedIndex = n),
              this.copySampleValue_(n - 1)
            );
        }
        (this._cachedIndex = n), this.intervalChanged_(n, r, i);
      }
      return this.interpolate_(n, r, t, i);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(t) {
      const e = this.resultBuffer,
        n = this.sampleValues,
        i = this.valueSize,
        r = t * i;
      for (let t = 0; t !== i; ++t) e[t] = n[r + t];
      return e;
    }
    interpolate_() {
      throw new Error("call to abstract method");
    }
    intervalChanged_() {}
  }
  class Ao extends wo {
    constructor(t, e, n, i) {
      super(t, e, n, i),
        (this._weightPrev = -0),
        (this._offsetPrev = -0),
        (this._weightNext = -0),
        (this._offsetNext = -0),
        (this.DefaultSettings_ = { endingStart: 2400, endingEnd: 2400 });
    }
    intervalChanged_(t, e, n) {
      const i = this.parameterPositions;
      let r = t - 2,
        a = t + 1,
        s = i[r],
        o = i[a];
      if (void 0 === s)
        switch (this.getSettings_().endingStart) {
          case 2401:
            (r = t), (s = 2 * e - n);
            break;
          case 2402:
            (r = i.length - 2), (s = e + i[r] - i[r + 1]);
            break;
          default:
            (r = t), (s = n);
        }
      if (void 0 === o)
        switch (this.getSettings_().endingEnd) {
          case 2401:
            (a = t), (o = 2 * n - e);
            break;
          case 2402:
            (a = 1), (o = n + i[1] - i[0]);
            break;
          default:
            (a = t - 1), (o = e);
        }
      const l = 0.5 * (n - e),
        c = this.valueSize;
      (this._weightPrev = l / (e - s)),
        (this._weightNext = l / (o - n)),
        (this._offsetPrev = r * c),
        (this._offsetNext = a * c);
    }
    interpolate_(t, e, n, i) {
      const r = this.resultBuffer,
        a = this.sampleValues,
        s = this.valueSize,
        o = t * s,
        l = o - s,
        c = this._offsetPrev,
        h = this._offsetNext,
        u = this._weightPrev,
        d = this._weightNext,
        p = (n - e) / (i - e),
        f = p * p,
        m = f * p,
        g = -u * m + 2 * u * f - u * p,
        _ = (1 + u) * m + (-1.5 - 2 * u) * f + (-0.5 + u) * p + 1,
        v = (-1 - d) * m + (1.5 + d) * f + 0.5 * p,
        x = d * m - d * f;
      for (let t = 0; t !== s; ++t)
        r[t] = g * a[c + t] + _ * a[l + t] + v * a[o + t] + x * a[h + t];
      return r;
    }
  }
  class Ro extends wo {
    constructor(t, e, n, i) {
      super(t, e, n, i);
    }
    interpolate_(t, e, n, i) {
      const r = this.resultBuffer,
        a = this.sampleValues,
        s = this.valueSize,
        o = t * s,
        l = o - s,
        c = (n - e) / (i - e),
        h = 1 - c;
      for (let t = 0; t !== s; ++t) r[t] = a[l + t] * h + a[o + t] * c;
      return r;
    }
  }
  class Co extends wo {
    constructor(t, e, n, i) {
      super(t, e, n, i);
    }
    interpolate_(t) {
      return this.copySampleValue_(t - 1);
    }
  }
  class Po {
    constructor(t, e, n, i) {
      if (void 0 === t)
        throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (void 0 === e || 0 === e.length)
        throw new Error(
          "THREE.KeyframeTrack: no keyframes in track named " + t
        );
      (this.name = t),
        (this.times = bo(e, this.TimeBufferType)),
        (this.values = bo(n, this.ValueBufferType)),
        this.setInterpolation(i || this.DefaultInterpolation);
    }
    static toJSON(t) {
      const e = t.constructor;
      let n;
      if (e.toJSON !== this.toJSON) n = e.toJSON(t);
      else {
        n = {
          name: t.name,
          times: bo(t.times, Array),
          values: bo(t.values, Array),
        };
        const e = t.getInterpolation();
        e !== t.DefaultInterpolation && (n.interpolation = e);
      }
      return (n.type = t.ValueTypeName), n;
    }
    InterpolantFactoryMethodDiscrete(t) {
      return new Co(this.times, this.values, this.getValueSize(), t);
    }
    InterpolantFactoryMethodLinear(t) {
      return new Ro(this.times, this.values, this.getValueSize(), t);
    }
    InterpolantFactoryMethodSmooth(t) {
      return new Ao(this.times, this.values, this.getValueSize(), t);
    }
    setInterpolation(t) {
      let e;
      switch (t) {
        case Zt:
          e = this.InterpolantFactoryMethodDiscrete;
          break;
        case Jt:
          e = this.InterpolantFactoryMethodLinear;
          break;
        case $t:
          e = this.InterpolantFactoryMethodSmooth;
      }
      if (void 0 === e) {
        const e =
          "unsupported interpolation for " +
          this.ValueTypeName +
          " keyframe track named " +
          this.name;
        if (void 0 === this.createInterpolant) {
          if (t === this.DefaultInterpolation) throw new Error(e);
          this.setInterpolation(this.DefaultInterpolation);
        }
        return console.warn("THREE.KeyframeTrack:", e), this;
      }
      return (this.createInterpolant = e), this;
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return Zt;
        case this.InterpolantFactoryMethodLinear:
          return Jt;
        case this.InterpolantFactoryMethodSmooth:
          return $t;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(t) {
      if (0 !== t) {
        const e = this.times;
        for (let n = 0, i = e.length; n !== i; ++n) e[n] += t;
      }
      return this;
    }
    scale(t) {
      if (1 !== t) {
        const e = this.times;
        for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t;
      }
      return this;
    }
    trim(t, e) {
      const n = this.times,
        i = n.length;
      let r = 0,
        a = i - 1;
      for (; r !== i && n[r] < t; ) ++r;
      for (; -1 !== a && n[a] > e; ) --a;
      if ((++a, 0 !== r || a !== i)) {
        r >= a && ((a = Math.max(a, 1)), (r = a - 1));
        const t = this.getValueSize();
        (this.times = n.slice(r, a)),
          (this.values = this.values.slice(r * t, a * t));
      }
      return this;
    }
    validate() {
      let t = !0;
      const e = this.getValueSize();
      e - Math.floor(e) != 0 &&
        (console.error(
          "THREE.KeyframeTrack: Invalid value size in track.",
          this
        ),
        (t = !1));
      const n = this.times,
        i = this.values,
        r = n.length;
      0 === r &&
        (console.error("THREE.KeyframeTrack: Track is empty.", this), (t = !1));
      let a = null;
      for (let e = 0; e !== r; e++) {
        const i = n[e];
        if ("number" == typeof i && isNaN(i)) {
          console.error(
            "THREE.KeyframeTrack: Time is not a valid number.",
            this,
            e,
            i
          ),
            (t = !1);
          break;
        }
        if (null !== a && a > i) {
          console.error(
            "THREE.KeyframeTrack: Out of order keys.",
            this,
            e,
            i,
            a
          ),
            (t = !1);
          break;
        }
        a = i;
      }
      if (
        void 0 !== i &&
        ((s = i), ArrayBuffer.isView(s) && !(s instanceof DataView))
      )
        for (let e = 0, n = i.length; e !== n; ++e) {
          const n = i[e];
          if (isNaN(n)) {
            console.error(
              "THREE.KeyframeTrack: Value is not a valid number.",
              this,
              e,
              n
            ),
              (t = !1);
            break;
          }
        }
      var s;
      return t;
    }
    optimize() {
      const t = this.times.slice(),
        e = this.values.slice(),
        n = this.getValueSize(),
        i = this.getInterpolation() === $t,
        r = t.length - 1;
      let a = 1;
      for (let s = 1; s < r; ++s) {
        let r = !1;
        const o = t[s];
        if (o !== t[s + 1] && (1 !== s || o !== t[0]))
          if (i) r = !0;
          else {
            const t = s * n,
              i = t - n,
              a = t + n;
            for (let s = 0; s !== n; ++s) {
              const n = e[t + s];
              if (n !== e[i + s] || n !== e[a + s]) {
                r = !0;
                break;
              }
            }
          }
        if (r) {
          if (s !== a) {
            t[a] = t[s];
            const i = s * n,
              r = a * n;
            for (let t = 0; t !== n; ++t) e[r + t] = e[i + t];
          }
          ++a;
        }
      }
      if (r > 0) {
        t[a] = t[r];
        for (let t = r * n, i = a * n, s = 0; s !== n; ++s) e[i + s] = e[t + s];
        ++a;
      }
      return (
        a !== t.length
          ? ((this.times = t.slice(0, a)), (this.values = e.slice(0, a * n)))
          : ((this.times = t), (this.values = e)),
        this
      );
    }
    clone() {
      const t = this.times.slice(),
        e = this.values.slice(),
        n = new (0, this.constructor)(this.name, t, e);
      return (n.createInterpolant = this.createInterpolant), n;
    }
  }
  (Po.prototype.TimeBufferType = Float32Array),
    (Po.prototype.ValueBufferType = Float32Array),
    (Po.prototype.DefaultInterpolation = Jt);
  class Lo extends Po {
    constructor(t, e, n) {
      super(t, e, n);
    }
  }
  (Lo.prototype.ValueTypeName = "bool"),
    (Lo.prototype.ValueBufferType = Array),
    (Lo.prototype.DefaultInterpolation = Zt),
    (Lo.prototype.InterpolantFactoryMethodLinear = void 0),
    (Lo.prototype.InterpolantFactoryMethodSmooth = void 0);
  (class extends Po {}).prototype.ValueTypeName = "color";
  (class extends Po {}).prototype.ValueTypeName = "number";
  class Uo extends wo {
    constructor(t, e, n, i) {
      super(t, e, n, i);
    }
    interpolate_(t, e, n, i) {
      const r = this.resultBuffer,
        a = this.sampleValues,
        s = this.valueSize,
        o = (n - e) / (i - e);
      let l = t * s;
      for (let t = l + s; l !== t; l += 4)
        rn.slerpFlat(r, 0, a, l - s, a, l, o);
      return r;
    }
  }
  class Io extends Po {
    InterpolantFactoryMethodLinear(t) {
      return new Uo(this.times, this.values, this.getValueSize(), t);
    }
  }
  (Io.prototype.ValueTypeName = "quaternion"),
    (Io.prototype.InterpolantFactoryMethodSmooth = void 0);
  class Do extends Po {
    constructor(t, e, n) {
      super(t, e, n);
    }
  }
  (Do.prototype.ValueTypeName = "string"),
    (Do.prototype.ValueBufferType = Array),
    (Do.prototype.DefaultInterpolation = Zt),
    (Do.prototype.InterpolantFactoryMethodLinear = void 0),
    (Do.prototype.InterpolantFactoryMethodSmooth = void 0);
  (class extends Po {}).prototype.ValueTypeName = "vector";
  Error;
  class No extends li {
    constructor(t, e = 1) {
      super(),
        (this.isLight = !0),
        (this.type = "Light"),
        (this.color = new Ti(t)),
        (this.intensity = e);
    }
    dispose() {}
    copy(t, e) {
      return (
        super.copy(t, e),
        this.color.copy(t.color),
        (this.intensity = t.intensity),
        this
      );
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (
        (e.object.color = this.color.getHex()),
        (e.object.intensity = this.intensity),
        void 0 !== this.groundColor &&
          (e.object.groundColor = this.groundColor.getHex()),
        void 0 !== this.distance && (e.object.distance = this.distance),
        void 0 !== this.angle && (e.object.angle = this.angle),
        void 0 !== this.decay && (e.object.decay = this.decay),
        void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
        void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
        void 0 !== this.target && (e.object.target = this.target.uuid),
        e
      );
    }
  }
  const Oo = new Nn(),
    Fo = new an(),
    zo = new an();
  class Bo {
    constructor(t) {
      (this.camera = t),
        (this.intensity = 1),
        (this.bias = 0),
        (this.normalBias = 0),
        (this.radius = 1),
        (this.blurSamples = 8),
        (this.mapSize = new Pe(512, 512)),
        (this.map = null),
        (this.mapPass = null),
        (this.matrix = new Nn()),
        (this.autoUpdate = !0),
        (this.needsUpdate = !1),
        (this._frustum = new Cr()),
        (this._frameExtents = new Pe(1, 1)),
        (this._viewportCount = 1),
        (this._viewports = [new $e(0, 0, 1, 1)]);
    }
    getViewportCount() {
      return this._viewportCount;
    }
    getFrustum() {
      return this._frustum;
    }
    updateMatrices(t) {
      const e = this.camera,
        n = this.matrix;
      Fo.setFromMatrixPosition(t.matrixWorld),
        e.position.copy(Fo),
        zo.setFromMatrixPosition(t.target.matrixWorld),
        e.lookAt(zo),
        e.updateMatrixWorld(),
        Oo.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(Oo),
        n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
        n.multiply(Oo);
    }
    getViewport(t) {
      return this._viewports[t];
    }
    getFrameExtents() {
      return this._frameExtents;
    }
    dispose() {
      this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
    }
    copy(t) {
      return (
        (this.camera = t.camera.clone()),
        (this.intensity = t.intensity),
        (this.bias = t.bias),
        (this.radius = t.radius),
        this.mapSize.copy(t.mapSize),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      const t = {};
      return (
        1 !== this.intensity && (t.intensity = this.intensity),
        0 !== this.bias && (t.bias = this.bias),
        0 !== this.normalBias && (t.normalBias = this.normalBias),
        1 !== this.radius && (t.radius = this.radius),
        (512 === this.mapSize.x && 512 === this.mapSize.y) ||
          (t.mapSize = this.mapSize.toArray()),
        (t.camera = this.camera.toJSON(!1).object),
        delete t.camera.matrix,
        t
      );
    }
  }
  class Ho extends Bo {
    constructor() {
      super(new vr(50, 1, 0.5, 500)),
        (this.isSpotLightShadow = !0),
        (this.focus = 1);
    }
    updateMatrices(t) {
      const e = this.camera,
        n = 2 * Ee * t.angle * this.focus,
        i = this.mapSize.width / this.mapSize.height,
        r = t.distance || e.far;
      (n === e.fov && i === e.aspect && r === e.far) ||
        ((e.fov = n), (e.aspect = i), (e.far = r), e.updateProjectionMatrix()),
        super.updateMatrices(t);
    }
    copy(t) {
      return super.copy(t), (this.focus = t.focus), this;
    }
  }
  class Vo extends Bo {
    constructor() {
      super(new Xr(-5, 5, 5, -5, 0.5, 500)),
        (this.isDirectionalLightShadow = !0);
    }
  }
  const ko = "\\[\\]\\.:\\/",
    Go = new RegExp("[" + ko + "]", "g"),
    Wo = "[^" + ko + "]",
    Xo = "[^" + ko.replace("\\.", "") + "]",
    jo = new RegExp(
      "^" +
        /((?:WC+[\/:])*)/.source.replace("WC", Wo) +
        /(WCOD+)?/.source.replace("WCOD", Xo) +
        /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Wo) +
        /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Wo) +
        "$"
    ),
    Yo = ["material", "materials", "bones", "map"];
  class qo {
    constructor(t, e, n) {
      (this.path = e),
        (this.parsedPath = n || qo.parseTrackName(e)),
        (this.node = qo.findNode(t, this.parsedPath.nodeName)),
        (this.rootNode = t),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound);
    }
    static create(t, e, n) {
      return t && t.isAnimationObjectGroup
        ? new qo.Composite(t, e, n)
        : new qo(t, e, n);
    }
    static sanitizeNodeName(t) {
      return t.replace(/\s/g, "_").replace(Go, "");
    }
    static parseTrackName(t) {
      const e = jo.exec(t);
      if (null === e)
        throw new Error("PropertyBinding: Cannot parse trackName: " + t);
      const n = {
          nodeName: e[2],
          objectName: e[3],
          objectIndex: e[4],
          propertyName: e[5],
          propertyIndex: e[6],
        },
        i = n.nodeName && n.nodeName.lastIndexOf(".");
      if (void 0 !== i && -1 !== i) {
        const t = n.nodeName.substring(i + 1);
        -1 !== Yo.indexOf(t) &&
          ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = t));
      }
      if (null === n.propertyName || 0 === n.propertyName.length)
        throw new Error(
          "PropertyBinding: can not parse propertyName from trackName: " + t
        );
      return n;
    }
    static findNode(t, e) {
      if (
        void 0 === e ||
        "" === e ||
        "." === e ||
        -1 === e ||
        e === t.name ||
        e === t.uuid
      )
        return t;
      if (t.skeleton) {
        const n = t.skeleton.getBoneByName(e);
        if (void 0 !== n) return n;
      }
      if (t.children) {
        const n = function (t) {
            for (let i = 0; i < t.length; i++) {
              const r = t[i];
              if (r.name === e || r.uuid === e) return r;
              const a = n(r.children);
              if (a) return a;
            }
            return null;
          },
          i = n(t.children);
        if (i) return i;
      }
      return null;
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(t, e) {
      t[e] = this.targetObject[this.propertyName];
    }
    _getValue_array(t, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i];
    }
    _getValue_arrayElement(t, e) {
      t[e] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(t, e) {
      this.resolvedProperty.toArray(t, e);
    }
    _setValue_direct(t, e) {
      this.targetObject[this.propertyName] = t[e];
    }
    _setValue_direct_setNeedsUpdate(t, e) {
      (this.targetObject[this.propertyName] = t[e]),
        (this.targetObject.needsUpdate = !0);
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
      (this.targetObject[this.propertyName] = t[e]),
        (this.targetObject.matrixWorldNeedsUpdate = !0);
    }
    _setValue_array(t, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
    }
    _setValue_array_setNeedsUpdate(t, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
      this.targetObject.needsUpdate = !0;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
      this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_arrayElement(t, e) {
      this.resolvedProperty[this.propertyIndex] = t[e];
    }
    _setValue_arrayElement_setNeedsUpdate(t, e) {
      (this.resolvedProperty[this.propertyIndex] = t[e]),
        (this.targetObject.needsUpdate = !0);
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
      (this.resolvedProperty[this.propertyIndex] = t[e]),
        (this.targetObject.matrixWorldNeedsUpdate = !0);
    }
    _setValue_fromArray(t, e) {
      this.resolvedProperty.fromArray(t, e);
    }
    _setValue_fromArray_setNeedsUpdate(t, e) {
      this.resolvedProperty.fromArray(t, e),
        (this.targetObject.needsUpdate = !0);
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
      this.resolvedProperty.fromArray(t, e),
        (this.targetObject.matrixWorldNeedsUpdate = !0);
    }
    _getValue_unbound(t, e) {
      this.bind(), this.getValue(t, e);
    }
    _setValue_unbound(t, e) {
      this.bind(), this.setValue(t, e);
    }
    bind() {
      let t = this.node;
      const e = this.parsedPath,
        n = e.objectName,
        i = e.propertyName;
      let r = e.propertyIndex;
      if (
        (t || ((t = qo.findNode(this.rootNode, e.nodeName)), (this.node = t)),
        (this.getValue = this._getValue_unavailable),
        (this.setValue = this._setValue_unavailable),
        !t)
      )
        return void console.warn(
          "THREE.PropertyBinding: No target node found for track: " +
            this.path +
            "."
        );
      if (n) {
        let i = e.objectIndex;
        switch (n) {
          case "materials":
            if (!t.material)
              return void console.error(
                "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
                this
              );
            if (!t.material.materials)
              return void console.error(
                "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
                this
              );
            t = t.material.materials;
            break;
          case "bones":
            if (!t.skeleton)
              return void console.error(
                "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
                this
              );
            t = t.skeleton.bones;
            for (let e = 0; e < t.length; e++)
              if (t[e].name === i) {
                i = e;
                break;
              }
            break;
          case "map":
            if ("map" in t) {
              t = t.map;
              break;
            }
            if (!t.material)
              return void console.error(
                "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
                this
              );
            if (!t.material.map)
              return void console.error(
                "THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",
                this
              );
            t = t.material.map;
            break;
          default:
            if (void 0 === t[n])
              return void console.error(
                "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
                this
              );
            t = t[n];
        }
        if (void 0 !== i) {
          if (void 0 === t[i])
            return void console.error(
              "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
              this,
              t
            );
          t = t[i];
        }
      }
      const a = t[i];
      if (void 0 === a) {
        const n = e.nodeName;
        return void console.error(
          "THREE.PropertyBinding: Trying to update property for track: " +
            n +
            "." +
            i +
            " but it wasn't found.",
          t
        );
      }
      let s = this.Versioning.None;
      (this.targetObject = t),
        void 0 !== t.needsUpdate
          ? (s = this.Versioning.NeedsUpdate)
          : void 0 !== t.matrixWorldNeedsUpdate &&
            (s = this.Versioning.MatrixWorldNeedsUpdate);
      let o = this.BindingType.Direct;
      if (void 0 !== r) {
        if ("morphTargetInfluences" === i) {
          if (!t.geometry)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
              this
            );
          if (!t.geometry.morphAttributes)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
              this
            );
          void 0 !== t.morphTargetDictionary[r] &&
            (r = t.morphTargetDictionary[r]);
        }
        (o = this.BindingType.ArrayElement),
          (this.resolvedProperty = a),
          (this.propertyIndex = r);
      } else
        void 0 !== a.fromArray && void 0 !== a.toArray
          ? ((o = this.BindingType.HasFromToArray), (this.resolvedProperty = a))
          : Array.isArray(a)
          ? ((o = this.BindingType.EntireArray), (this.resolvedProperty = a))
          : (this.propertyName = i);
      (this.getValue = this.GetterByBindingType[o]),
        (this.setValue = this.SetterByBindingTypeAndVersioning[o][s]);
    }
    unbind() {
      (this.node = null),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound);
    }
  }
  (qo.Composite = class {
    constructor(t, e, n) {
      const i = n || qo.parseTrackName(e);
      (this._targetGroup = t), (this._bindings = t.subscribe_(e, i));
    }
    getValue(t, e) {
      this.bind();
      const n = this._targetGroup.nCachedObjects_,
        i = this._bindings[n];
      void 0 !== i && i.getValue(t, e);
    }
    setValue(t, e) {
      const n = this._bindings;
      for (
        let i = this._targetGroup.nCachedObjects_, r = n.length;
        i !== r;
        ++i
      )
        n[i].setValue(t, e);
    }
    bind() {
      const t = this._bindings;
      for (
        let e = this._targetGroup.nCachedObjects_, n = t.length;
        e !== n;
        ++e
      )
        t[e].bind();
    }
    unbind() {
      const t = this._bindings;
      for (
        let e = this._targetGroup.nCachedObjects_, n = t.length;
        e !== n;
        ++e
      )
        t[e].unbind();
    }
  }),
    (qo.prototype.BindingType = {
      Direct: 0,
      EntireArray: 1,
      ArrayElement: 2,
      HasFromToArray: 3,
    }),
    (qo.prototype.Versioning = {
      None: 0,
      NeedsUpdate: 1,
      MatrixWorldNeedsUpdate: 2,
    }),
    (qo.prototype.GetterByBindingType = [
      qo.prototype._getValue_direct,
      qo.prototype._getValue_array,
      qo.prototype._getValue_arrayElement,
      qo.prototype._getValue_toArray,
    ]),
    (qo.prototype.SetterByBindingTypeAndVersioning = [
      [
        qo.prototype._setValue_direct,
        qo.prototype._setValue_direct_setNeedsUpdate,
        qo.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
      ],
      [
        qo.prototype._setValue_array,
        qo.prototype._setValue_array_setNeedsUpdate,
        qo.prototype._setValue_array_setMatrixWorldNeedsUpdate,
      ],
      [
        qo.prototype._setValue_arrayElement,
        qo.prototype._setValue_arrayElement_setNeedsUpdate,
        qo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
      ],
      [
        qo.prototype._setValue_fromArray,
        qo.prototype._setValue_fromArray_setNeedsUpdate,
        qo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
      ],
    ]),
    new Float32Array(1);
  class Ko {
    constructor(t = 1, e = 0, n = 0) {
      return (this.radius = t), (this.phi = e), (this.theta = n), this;
    }
    set(t, e, n) {
      return (this.radius = t), (this.phi = e), (this.theta = n), this;
    }
    copy(t) {
      return (
        (this.radius = t.radius),
        (this.phi = t.phi),
        (this.theta = t.theta),
        this
      );
    }
    makeSafe() {
      const t = 1e-6;
      return (this.phi = Math.max(t, Math.min(Math.PI - t, this.phi))), this;
    }
    setFromVector3(t) {
      return this.setFromCartesianCoords(t.x, t.y, t.z);
    }
    setFromCartesianCoords(t, e, n) {
      return (
        (this.radius = Math.sqrt(t * t + e * e + n * n)),
        0 === this.radius
          ? ((this.theta = 0), (this.phi = 0))
          : ((this.theta = Math.atan2(t, n)),
            (this.phi = Math.acos(be(e / this.radius, -1, 1)))),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  "undefined" != typeof __THREE_DEVTOOLS__ &&
    __THREE_DEVTOOLS__.dispatchEvent(
      new CustomEvent("register", { detail: { revision: t } })
    ),
    "undefined" != typeof window &&
      (window.__THREE__
        ? console.warn(
            "WARNING: Multiple instances of Three.js being imported."
          )
        : (window.__THREE__ = t));
  const Zo = { type: "change" },
    Jo = { type: "start" },
    $o = { type: "end" },
    Qo = new Dn(),
    tl = new wr(),
    el = Math.cos(70 * Ce);
  let nl,
    il,
    rl,
    al,
    sl,
    ol,
    ll,
    cl,
    hl,
    ul,
    dl,
    pl = !1;
  const fl = {};
  (fl.count = 1e5),
    (fl.size = 0.01),
    (fl.radius = 5),
    (fl.branches = 3),
    (fl.spin = 1),
    (fl.randomness = 0.2),
    (fl.randomnessPower = 3),
    (fl.insideColor = "#ff6030"),
    (fl.outsideColor = "#1b3984"),
    (il = new (class extends li {
      constructor() {
        super(),
          (this.isScene = !0),
          (this.type = "Scene"),
          (this.background = null),
          (this.environment = null),
          (this.fog = null),
          (this.backgroundBlurriness = 0),
          (this.backgroundIntensity = 1),
          (this.backgroundRotation = new Xn()),
          (this.environmentIntensity = 1),
          (this.environmentRotation = new Xn()),
          (this.overrideMaterial = null),
          "undefined" != typeof __THREE_DEVTOOLS__ &&
            __THREE_DEVTOOLS__.dispatchEvent(
              new CustomEvent("observe", { detail: this })
            );
      }
      copy(t, e) {
        return (
          super.copy(t, e),
          null !== t.background && (this.background = t.background.clone()),
          null !== t.environment && (this.environment = t.environment.clone()),
          null !== t.fog && (this.fog = t.fog.clone()),
          (this.backgroundBlurriness = t.backgroundBlurriness),
          (this.backgroundIntensity = t.backgroundIntensity),
          this.backgroundRotation.copy(t.backgroundRotation),
          (this.environmentIntensity = t.environmentIntensity),
          this.environmentRotation.copy(t.environmentRotation),
          null !== t.overrideMaterial &&
            (this.overrideMaterial = t.overrideMaterial.clone()),
          (this.matrixAutoUpdate = t.matrixAutoUpdate),
          this
        );
      }
      toJSON(t) {
        const e = super.toJSON(t);
        return (
          null !== this.fog && (e.object.fog = this.fog.toJSON()),
          this.backgroundBlurriness > 0 &&
            (e.object.backgroundBlurriness = this.backgroundBlurriness),
          1 !== this.backgroundIntensity &&
            (e.object.backgroundIntensity = this.backgroundIntensity),
          (e.object.backgroundRotation = this.backgroundRotation.toArray()),
          1 !== this.environmentIntensity &&
            (e.object.environmentIntensity = this.environmentIntensity),
          (e.object.environmentRotation = this.environmentRotation.toArray()),
          e
        );
      }
    })()),
    (il.background = new Ti(
      baconRand.rand(),
      baconRand.rand(),
      baconRand.rand()
    )),
    (rl = new vr(45, window.innerWidth / window.innerHeight, 1, 1e3)),
    (rl.position.x = 3),
    (rl.position.y = 3),
    (rl.position.z = 3),
    il.add(rl),
    (sl = new (class extends No {
      constructor(t, e) {
        super(t, e), (this.isAmbientLight = !0), (this.type = "AmbientLight");
      }
    })(16777215, 0.8)),
    il.add(sl),
    (ol = new (class extends No {
      constructor(t, e) {
        super(t, e),
          (this.isDirectionalLight = !0),
          (this.type = "DirectionalLight"),
          this.position.copy(li.DEFAULT_UP),
          this.updateMatrix(),
          (this.target = new li()),
          (this.shadow = new Vo());
      }
      dispose() {
        this.shadow.dispose();
      }
      copy(t) {
        return (
          super.copy(t),
          (this.target = t.target.clone()),
          (this.shadow = t.shadow.clone()),
          this
        );
      }
    })(16777215, 0.8)),
    ol.position.set(0, 15, 0),
    il.add(ol),
    (ll = new (class extends No {
      constructor(t, e, n = 0, i = Math.PI / 3, r = 0, a = 2) {
        super(t, e),
          (this.isSpotLight = !0),
          (this.type = "SpotLight"),
          this.position.copy(li.DEFAULT_UP),
          this.updateMatrix(),
          (this.target = new li()),
          (this.distance = n),
          (this.angle = i),
          (this.penumbra = r),
          (this.decay = a),
          (this.map = null),
          (this.shadow = new Ho());
      }
      get power() {
        return this.intensity * Math.PI;
      }
      set power(t) {
        this.intensity = t / Math.PI;
      }
      dispose() {
        this.shadow.dispose();
      }
      copy(t, e) {
        return (
          super.copy(t, e),
          (this.distance = t.distance),
          (this.angle = t.angle),
          (this.penumbra = t.penumbra),
          (this.decay = t.decay),
          (this.target = t.target.clone()),
          (this.shadow = t.shadow.clone()),
          this
        );
      }
    })(16777215, 0.8)),
    ll.position.set(5, 1, 2),
    (ll.decay = 2),
    il.add(ll),
    (al = new (class {
      constructor(e = {}) {
        const {
          canvas: n = Ne(),
          context: i = null,
          depth: r = !0,
          stencil: a = !1,
          alpha: s = !1,
          antialias: o = !1,
          premultipliedAlpha: l = !0,
          preserveDrawingBuffer: c = !1,
          powerPreference: h = "default",
          failIfMajorPerformanceCaveat: u = !1,
        } = e;
        let d;
        if (((this.isWebGLRenderer = !0), null !== i)) {
          if (
            "undefined" != typeof WebGLRenderingContext &&
            i instanceof WebGLRenderingContext
          )
            throw new Error(
              "THREE.WebGLRenderer: WebGL 1 is not supported since r163."
            );
          d = i.getContextAttributes().alpha;
        } else d = s;
        const p = new Uint32Array(4),
          f = new Int32Array(4);
        let m = null,
          g = null;
        const _ = [],
          v = [];
        (this.domElement = n),
          (this.debug = { checkShaderErrors: !0, onShaderError: null }),
          (this.autoClear = !0),
          (this.autoClearColor = !0),
          (this.autoClearDepth = !0),
          (this.autoClearStencil = !0),
          (this.sortObjects = !0),
          (this.clippingPlanes = []),
          (this.localClippingEnabled = !1),
          (this._outputColorSpace = te),
          (this.toneMapping = R),
          (this.toneMappingExposure = 1);
        const x = this;
        let M = !1,
          y = 0,
          S = 0,
          E = null,
          T = -1,
          b = null;
        const w = new $e(),
          A = new $e();
        let C = null;
        const P = new Ti(0);
        let L = 0,
          U = n.width,
          I = n.height,
          D = 1,
          N = null,
          O = null;
        const F = new $e(0, 0, U, I),
          z = new $e(0, 0, U, I);
        let B = !1;
        const H = new Cr();
        let V = !1,
          k = !1;
        const G = new Nn(),
          W = new an(),
          X = new $e(),
          j = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0,
          };
        let K = !1;
        function Z() {
          return null === E ? D : 1;
        }
        let $,
          tt,
          at,
          st,
          ot,
          lt,
          ct,
          ht,
          ut,
          dt,
          pt,
          mt,
          vt,
          xt,
          Mt,
          yt,
          St,
          Et,
          Tt,
          bt,
          wt,
          At,
          Rt,
          Ct,
          Pt = i;
        function Lt(t, e) {
          return n.getContext(t, e);
        }
        try {
          const e = {
            alpha: !0,
            depth: r,
            stencil: a,
            antialias: o,
            premultipliedAlpha: l,
            preserveDrawingBuffer: c,
            powerPreference: h,
            failIfMajorPerformanceCaveat: u,
          };
          if (
            ("setAttribute" in n &&
              n.setAttribute("data-engine", `three.js r${t}`),
            n.addEventListener("webglcontextlost", Dt, !1),
            n.addEventListener("webglcontextrestored", Nt, !1),
            n.addEventListener("webglcontextcreationerror", Ot, !1),
            null === Pt)
          ) {
            const t = "webgl2";
            if (((Pt = Lt(t, e)), null === Pt))
              throw Lt(t)
                ? new Error(
                    "Error creating WebGL context with your selected attributes."
                  )
                : new Error("Error creating WebGL context.");
          }
        } catch (t) {
          throw (console.error("THREE.WebGLRenderer: " + t.message), t);
        }
        function Ut() {
          ($ = new la(Pt)),
            $.init(),
            (At = new so(Pt, $)),
            (tt = new kr(Pt, $, e, At)),
            (at = new io(Pt)),
            (st = new ua(Pt)),
            (ot = new Gs()),
            (lt = new ao(Pt, $, at, ot, tt, At, st)),
            (ct = new Wr(x)),
            (ht = new oa(x)),
            (ut = new Lr(Pt)),
            (Rt = new Hr(Pt, ut)),
            (dt = new ca(Pt, ut, st, Rt)),
            (pt = new pa(Pt, dt, ut, st)),
            (Tt = new da(Pt, tt, lt)),
            (yt = new Gr(ot)),
            (mt = new ks(x, ct, ht, $, tt, Rt, yt)),
            (vt = new go(x, ot)),
            (xt = new Ys()),
            (Mt = new Qs($)),
            (Et = new Br(x, ct, ht, at, pt, d, l)),
            (St = new no(x, pt, tt)),
            (Ct = new _o(Pt, st, tt, at)),
            (bt = new Vr(Pt, $, st)),
            (wt = new ha(Pt, $, st)),
            (st.programs = mt.programs),
            (x.capabilities = tt),
            (x.extensions = $),
            (x.properties = ot),
            (x.renderLists = xt),
            (x.shadowMap = St),
            (x.state = at),
            (x.info = st);
        }
        Ut();
        const It = new po(x, Pt);
        function Dt(t) {
          t.preventDefault(),
            console.log("THREE.WebGLRenderer: Context Lost."),
            (M = !0);
        }
        function Nt() {
          console.log("THREE.WebGLRenderer: Context Restored."), (M = !1);
          const t = st.autoReset,
            e = St.enabled,
            n = St.autoUpdate,
            i = St.needsUpdate,
            r = St.type;
          Ut(),
            (st.autoReset = t),
            (St.enabled = e),
            (St.autoUpdate = n),
            (St.needsUpdate = i),
            (St.type = r);
        }
        function Ot(t) {
          console.error(
            "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
            t.statusMessage
          );
        }
        function Ft(t) {
          const e = t.target;
          e.removeEventListener("dispose", Ft),
            (function (t) {
              (function (t) {
                const e = ot.get(t).programs;
                void 0 !== e &&
                  (e.forEach(function (t) {
                    mt.releaseProgram(t);
                  }),
                  t.isShaderMaterial && mt.releaseShaderCache(t));
              })(t),
                ot.remove(t);
            })(e);
        }
        function zt(t, e, n) {
          !0 === t.transparent && 2 === t.side && !1 === t.forceSinglePass
            ? ((t.side = 1),
              (t.needsUpdate = !0),
              qt(t, e, n),
              (t.side = 0),
              (t.needsUpdate = !0),
              qt(t, e, n),
              (t.side = 2))
            : qt(t, e, n);
        }
        (this.xr = It),
          (this.getContext = function () {
            return Pt;
          }),
          (this.getContextAttributes = function () {
            return Pt.getContextAttributes();
          }),
          (this.forceContextLoss = function () {
            const t = $.get("WEBGL_lose_context");
            t && t.loseContext();
          }),
          (this.forceContextRestore = function () {
            const t = $.get("WEBGL_lose_context");
            t && t.restoreContext();
          }),
          (this.getPixelRatio = function () {
            return D;
          }),
          (this.setPixelRatio = function (t) {
            void 0 !== t && ((D = t), this.setSize(U, I, !1));
          }),
          (this.getSize = function (t) {
            return t.set(U, I);
          }),
          (this.setSize = function (t, e, i = !0) {
            It.isPresenting
              ? console.warn(
                  "THREE.WebGLRenderer: Can't change size while VR device is presenting."
                )
              : ((U = t),
                (I = e),
                (n.width = Math.floor(t * D)),
                (n.height = Math.floor(e * D)),
                !0 === i &&
                  ((n.style.width = t + "px"), (n.style.height = e + "px")),
                this.setViewport(0, 0, t, e));
          }),
          (this.getDrawingBufferSize = function (t) {
            return t.set(U * D, I * D).floor();
          }),
          (this.setDrawingBufferSize = function (t, e, i) {
            (U = t),
              (I = e),
              (D = i),
              (n.width = Math.floor(t * i)),
              (n.height = Math.floor(e * i)),
              this.setViewport(0, 0, t, e);
          }),
          (this.getCurrentViewport = function (t) {
            return t.copy(w);
          }),
          (this.getViewport = function (t) {
            return t.copy(F);
          }),
          (this.setViewport = function (t, e, n, i) {
            t.isVector4 ? F.set(t.x, t.y, t.z, t.w) : F.set(t, e, n, i),
              at.viewport(w.copy(F).multiplyScalar(D).round());
          }),
          (this.getScissor = function (t) {
            return t.copy(z);
          }),
          (this.setScissor = function (t, e, n, i) {
            t.isVector4 ? z.set(t.x, t.y, t.z, t.w) : z.set(t, e, n, i),
              at.scissor(A.copy(z).multiplyScalar(D).round());
          }),
          (this.getScissorTest = function () {
            return B;
          }),
          (this.setScissorTest = function (t) {
            at.setScissorTest((B = t));
          }),
          (this.setOpaqueSort = function (t) {
            N = t;
          }),
          (this.setTransparentSort = function (t) {
            O = t;
          }),
          (this.getClearColor = function (t) {
            return t.copy(Et.getClearColor());
          }),
          (this.setClearColor = function () {
            Et.setClearColor.apply(Et, arguments);
          }),
          (this.getClearAlpha = function () {
            return Et.getClearAlpha();
          }),
          (this.setClearAlpha = function () {
            Et.setClearAlpha.apply(Et, arguments);
          }),
          (this.clear = function (t = !0, e = !0, n = !0) {
            let i = 0;
            if (t) {
              let t = !1;
              if (null !== E) {
                const e = E.texture.format;
                t = e === _t || e === gt || e === ft;
              }
              if (t) {
                const t = E.texture.type,
                  e =
                    t === q ||
                    t === Q ||
                    t === J ||
                    t === rt ||
                    t === nt ||
                    t === it,
                  n = Et.getClearColor(),
                  i = Et.getClearAlpha(),
                  r = n.r,
                  a = n.g,
                  s = n.b;
                e
                  ? ((p[0] = r),
                    (p[1] = a),
                    (p[2] = s),
                    (p[3] = i),
                    Pt.clearBufferuiv(Pt.COLOR, 0, p))
                  : ((f[0] = r),
                    (f[1] = a),
                    (f[2] = s),
                    (f[3] = i),
                    Pt.clearBufferiv(Pt.COLOR, 0, f));
              } else i |= Pt.COLOR_BUFFER_BIT;
            }
            e && (i |= Pt.DEPTH_BUFFER_BIT),
              n &&
                ((i |= Pt.STENCIL_BUFFER_BIT),
                this.state.buffers.stencil.setMask(4294967295)),
              Pt.clear(i);
          }),
          (this.clearColor = function () {
            this.clear(!0, !1, !1);
          }),
          (this.clearDepth = function () {
            this.clear(!1, !0, !1);
          }),
          (this.clearStencil = function () {
            this.clear(!1, !1, !0);
          }),
          (this.dispose = function () {
            n.removeEventListener("webglcontextlost", Dt, !1),
              n.removeEventListener("webglcontextrestored", Nt, !1),
              n.removeEventListener("webglcontextcreationerror", Ot, !1),
              xt.dispose(),
              Mt.dispose(),
              ot.dispose(),
              ct.dispose(),
              ht.dispose(),
              pt.dispose(),
              Rt.dispose(),
              Ct.dispose(),
              mt.dispose(),
              It.dispose(),
              It.removeEventListener("sessionstart", Ht),
              It.removeEventListener("sessionend", Vt),
              kt.stop();
          }),
          (this.renderBufferDirect = function (t, e, n, i, r, a) {
            null === e && (e = j);
            const s = r.isMesh && r.matrixWorld.determinant() < 0,
              o = (function (t, e, n, i, r) {
                !0 !== e.isScene && (e = j), lt.resetTextureUnits();
                const a = e.fog,
                  s = i.isMeshStandardMaterial ? e.environment : null,
                  o =
                    null === E
                      ? x.outputColorSpace
                      : !0 === E.isXRRenderTarget
                      ? E.texture.colorSpace
                      : ee,
                  l = (i.isMeshStandardMaterial ? ht : ct).get(i.envMap || s),
                  c =
                    !0 === i.vertexColors &&
                    !!n.attributes.color &&
                    4 === n.attributes.color.itemSize,
                  h =
                    !!n.attributes.tangent &&
                    (!!i.normalMap || i.anisotropy > 0),
                  u = !!n.morphAttributes.position,
                  d = !!n.morphAttributes.normal,
                  p = !!n.morphAttributes.color;
                let f = R;
                i.toneMapped &&
                  ((null !== E && !0 !== E.isXRRenderTarget) ||
                    (f = x.toneMapping));
                const m =
                    n.morphAttributes.position ||
                    n.morphAttributes.normal ||
                    n.morphAttributes.color,
                  _ = void 0 !== m ? m.length : 0,
                  v = ot.get(i),
                  M = g.state.lights;
                if (!0 === V && (!0 === k || t !== b)) {
                  const e = t === b && i.id === T;
                  yt.setState(i, t, e);
                }
                let y = !1;
                i.version === v.__version
                  ? (v.needsLights &&
                      v.lightsStateVersion !== M.state.version) ||
                    v.outputColorSpace !== o ||
                    (r.isBatchedMesh && !1 === v.batching)
                    ? (y = !0)
                    : r.isBatchedMesh || !0 !== v.batching
                    ? (r.isBatchedMesh &&
                        !0 === v.batchingColor &&
                        null === r.colorTexture) ||
                      (r.isBatchedMesh &&
                        !1 === v.batchingColor &&
                        null !== r.colorTexture) ||
                      (r.isInstancedMesh && !1 === v.instancing)
                      ? (y = !0)
                      : r.isInstancedMesh || !0 !== v.instancing
                      ? r.isSkinnedMesh && !1 === v.skinning
                        ? (y = !0)
                        : r.isSkinnedMesh || !0 !== v.skinning
                        ? (r.isInstancedMesh &&
                            !0 === v.instancingColor &&
                            null === r.instanceColor) ||
                          (r.isInstancedMesh &&
                            !1 === v.instancingColor &&
                            null !== r.instanceColor) ||
                          (r.isInstancedMesh &&
                            !0 === v.instancingMorph &&
                            null === r.morphTexture) ||
                          (r.isInstancedMesh &&
                            !1 === v.instancingMorph &&
                            null !== r.morphTexture) ||
                          v.envMap !== l ||
                          (!0 === i.fog && v.fog !== a)
                          ? (y = !0)
                          : void 0 === v.numClippingPlanes ||
                            (v.numClippingPlanes === yt.numPlanes &&
                              v.numIntersection === yt.numIntersection)
                          ? (v.vertexAlphas !== c ||
                              v.vertexTangents !== h ||
                              v.morphTargets !== u ||
                              v.morphNormals !== d ||
                              v.morphColors !== p ||
                              v.toneMapping !== f ||
                              v.morphTargetsCount !== _) &&
                            (y = !0)
                          : (y = !0)
                        : (y = !0)
                      : (y = !0)
                    : (y = !0)
                  : ((y = !0), (v.__version = i.version));
                let S = v.currentProgram;
                !0 === y && (S = qt(i, e, r));
                let w = !1,
                  A = !1,
                  C = !1;
                const P = S.getUniforms(),
                  L = v.uniforms;
                if (
                  (at.useProgram(S.program) && ((w = !0), (A = !0), (C = !0)),
                  i.id !== T && ((T = i.id), (A = !0)),
                  w || b !== t)
                ) {
                  P.setValue(Pt, "projectionMatrix", t.projectionMatrix),
                    P.setValue(Pt, "viewMatrix", t.matrixWorldInverse);
                  const e = P.map.cameraPosition;
                  void 0 !== e &&
                    e.setValue(Pt, W.setFromMatrixPosition(t.matrixWorld)),
                    tt.logarithmicDepthBuffer &&
                      P.setValue(
                        Pt,
                        "logDepthBufFC",
                        2 / (Math.log(t.far + 1) / Math.LN2)
                      ),
                    (i.isMeshPhongMaterial ||
                      i.isMeshToonMaterial ||
                      i.isMeshLambertMaterial ||
                      i.isMeshBasicMaterial ||
                      i.isMeshStandardMaterial ||
                      i.isShaderMaterial) &&
                      P.setValue(
                        Pt,
                        "isOrthographic",
                        !0 === t.isOrthographicCamera
                      ),
                    b !== t && ((b = t), (A = !0), (C = !0));
                }
                if (r.isSkinnedMesh) {
                  P.setOptional(Pt, r, "bindMatrix"),
                    P.setOptional(Pt, r, "bindMatrixInverse");
                  const t = r.skeleton;
                  t &&
                    (null === t.boneTexture && t.computeBoneTexture(),
                    P.setValue(Pt, "boneTexture", t.boneTexture, lt));
                }
                r.isBatchedMesh &&
                  (P.setOptional(Pt, r, "batchingTexture"),
                  P.setValue(Pt, "batchingTexture", r._matricesTexture, lt),
                  P.setOptional(Pt, r, "batchingIdTexture"),
                  P.setValue(Pt, "batchingIdTexture", r._indirectTexture, lt),
                  P.setOptional(Pt, r, "batchingColorTexture"),
                  null !== r._colorsTexture &&
                    P.setValue(
                      Pt,
                      "batchingColorTexture",
                      r._colorsTexture,
                      lt
                    ));
                const U = n.morphAttributes;
                var N, O;
                if (
                  ((void 0 === U.position &&
                    void 0 === U.normal &&
                    void 0 === U.color) ||
                    Tt.update(r, n, S),
                  (A || v.receiveShadow !== r.receiveShadow) &&
                    ((v.receiveShadow = r.receiveShadow),
                    P.setValue(Pt, "receiveShadow", r.receiveShadow)),
                  i.isMeshGouraudMaterial &&
                    null !== i.envMap &&
                    ((L.envMap.value = l),
                    (L.flipEnvMap.value =
                      l.isCubeTexture && !1 === l.isRenderTargetTexture
                        ? -1
                        : 1)),
                  i.isMeshStandardMaterial &&
                    null === i.envMap &&
                    null !== e.environment &&
                    (L.envMapIntensity.value = e.environmentIntensity),
                  A &&
                    (P.setValue(
                      Pt,
                      "toneMappingExposure",
                      x.toneMappingExposure
                    ),
                    v.needsLights &&
                      ((O = C),
                      ((N = L).ambientLightColor.needsUpdate = O),
                      (N.lightProbe.needsUpdate = O),
                      (N.directionalLights.needsUpdate = O),
                      (N.directionalLightShadows.needsUpdate = O),
                      (N.pointLights.needsUpdate = O),
                      (N.pointLightShadows.needsUpdate = O),
                      (N.spotLights.needsUpdate = O),
                      (N.spotLightShadows.needsUpdate = O),
                      (N.rectAreaLights.needsUpdate = O),
                      (N.hemisphereLights.needsUpdate = O)),
                    a && !0 === i.fog && vt.refreshFogUniforms(L, a),
                    vt.refreshMaterialUniforms(
                      L,
                      i,
                      D,
                      I,
                      g.state.transmissionRenderTarget[t.id]
                    ),
                    xs.upload(Pt, Kt(v), L, lt)),
                  i.isShaderMaterial &&
                    !0 === i.uniformsNeedUpdate &&
                    (xs.upload(Pt, Kt(v), L, lt), (i.uniformsNeedUpdate = !1)),
                  i.isSpriteMaterial && P.setValue(Pt, "center", r.center),
                  P.setValue(Pt, "modelViewMatrix", r.modelViewMatrix),
                  P.setValue(Pt, "normalMatrix", r.normalMatrix),
                  P.setValue(Pt, "modelMatrix", r.matrixWorld),
                  i.isShaderMaterial || i.isRawShaderMaterial)
                ) {
                  const t = i.uniformsGroups;
                  for (let e = 0, n = t.length; e < n; e++) {
                    const n = t[e];
                    Ct.update(n, S), Ct.bind(n, S);
                  }
                }
                return S;
              })(t, e, n, i, r);
            at.setMaterial(i, s);
            let l = n.index,
              c = 1;
            if (!0 === i.wireframe) {
              if (((l = dt.getWireframeAttribute(n)), void 0 === l)) return;
              c = 2;
            }
            const h = n.drawRange,
              u = n.attributes.position;
            let d = h.start * c,
              p = (h.start + h.count) * c;
            null !== a &&
              ((d = Math.max(d, a.start * c)),
              (p = Math.min(p, (a.start + a.count) * c))),
              null !== l
                ? ((d = Math.max(d, 0)), (p = Math.min(p, l.count)))
                : null != u &&
                  ((d = Math.max(d, 0)), (p = Math.min(p, u.count)));
            const f = p - d;
            if (f < 0 || f === 1 / 0) return;
            let m;
            Rt.setup(r, i, o, n, l);
            let _ = bt;
            if (
              (null !== l && ((m = ut.get(l)), (_ = wt), _.setIndex(m)),
              r.isMesh)
            )
              !0 === i.wireframe
                ? (at.setLineWidth(i.wireframeLinewidth * Z()),
                  _.setMode(Pt.LINES))
                : _.setMode(Pt.TRIANGLES);
            else if (r.isLine) {
              let t = i.linewidth;
              void 0 === t && (t = 1),
                at.setLineWidth(t * Z()),
                r.isLineSegments
                  ? _.setMode(Pt.LINES)
                  : r.isLineLoop
                  ? _.setMode(Pt.LINE_LOOP)
                  : _.setMode(Pt.LINE_STRIP);
            } else
              r.isPoints
                ? _.setMode(Pt.POINTS)
                : r.isSprite && _.setMode(Pt.TRIANGLES);
            if (r.isBatchedMesh)
              if (null !== r._multiDrawInstances)
                _.renderMultiDrawInstances(
                  r._multiDrawStarts,
                  r._multiDrawCounts,
                  r._multiDrawCount,
                  r._multiDrawInstances
                );
              else if ($.get("WEBGL_multi_draw"))
                _.renderMultiDraw(
                  r._multiDrawStarts,
                  r._multiDrawCounts,
                  r._multiDrawCount
                );
              else {
                const t = r._multiDrawStarts,
                  e = r._multiDrawCounts,
                  n = r._multiDrawCount,
                  a = l ? ut.get(l).bytesPerElement : 1,
                  s = ot.get(i).currentProgram.getUniforms();
                for (let i = 0; i < n; i++)
                  s.setValue(Pt, "_gl_DrawID", i), _.render(t[i] / a, e[i]);
              }
            else if (r.isInstancedMesh) _.renderInstances(d, f, r.count);
            else if (n.isInstancedBufferGeometry) {
              const t =
                  void 0 !== n._maxInstanceCount ? n._maxInstanceCount : 1 / 0,
                e = Math.min(n.instanceCount, t);
              _.renderInstances(d, f, e);
            } else _.render(d, f);
          }),
          (this.compile = function (t, e, n = null) {
            null === n && (n = t),
              (g = Mt.get(n)),
              g.init(e),
              v.push(g),
              n.traverseVisible(function (t) {
                t.isLight &&
                  t.layers.test(e.layers) &&
                  (g.pushLight(t), t.castShadow && g.pushShadow(t));
              }),
              t !== n &&
                t.traverseVisible(function (t) {
                  t.isLight &&
                    t.layers.test(e.layers) &&
                    (g.pushLight(t), t.castShadow && g.pushShadow(t));
                }),
              g.setupLights();
            const i = new Set();
            return (
              t.traverse(function (t) {
                const e = t.material;
                if (e)
                  if (Array.isArray(e))
                    for (let r = 0; r < e.length; r++) {
                      const a = e[r];
                      zt(a, n, t), i.add(a);
                    }
                  else zt(e, n, t), i.add(e);
              }),
              v.pop(),
              (g = null),
              i
            );
          }),
          (this.compileAsync = function (t, e, n = null) {
            const i = this.compile(t, e, n);
            return new Promise((e) => {
              function n() {
                i.forEach(function (t) {
                  ot.get(t).currentProgram.isReady() && i.delete(t);
                }),
                  0 !== i.size ? setTimeout(n, 10) : e(t);
              }
              null !== $.get("KHR_parallel_shader_compile")
                ? n()
                : setTimeout(n, 10);
            });
          });
        let Bt = null;
        function Ht() {
          kt.stop();
        }
        function Vt() {
          kt.start();
        }
        const kt = new Pr();
        function Gt(t, e, n, i) {
          if (!1 === t.visible) return;
          if (t.layers.test(e.layers))
            if (t.isGroup) n = t.renderOrder;
            else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
            else if (t.isLight) g.pushLight(t), t.castShadow && g.pushShadow(t);
            else if (t.isSprite) {
              if (!t.frustumCulled || H.intersectsSprite(t)) {
                i && X.setFromMatrixPosition(t.matrixWorld).applyMatrix4(G);
                const e = pt.update(t),
                  r = t.material;
                r.visible && m.push(t, e, r, n, X.z, null);
              }
            } else if (
              (t.isMesh || t.isLine || t.isPoints) &&
              (!t.frustumCulled || H.intersectsObject(t))
            ) {
              const e = pt.update(t),
                r = t.material;
              if (
                (i &&
                  (void 0 !== t.boundingSphere
                    ? (null === t.boundingSphere && t.computeBoundingSphere(),
                      X.copy(t.boundingSphere.center))
                    : (null === e.boundingSphere && e.computeBoundingSphere(),
                      X.copy(e.boundingSphere.center)),
                  X.applyMatrix4(t.matrixWorld).applyMatrix4(G)),
                Array.isArray(r))
              ) {
                const i = e.groups;
                for (let a = 0, s = i.length; a < s; a++) {
                  const s = i[a],
                    o = r[s.materialIndex];
                  o && o.visible && m.push(t, e, o, n, X.z, s);
                }
              } else r.visible && m.push(t, e, r, n, X.z, null);
            }
          const r = t.children;
          for (let t = 0, a = r.length; t < a; t++) Gt(r[t], e, n, i);
        }
        function Wt(t, e, n, i) {
          const r = t.opaque,
            a = t.transmissive,
            s = t.transparent;
          g.setupLightsView(n),
            !0 === V && yt.setGlobalState(x.clippingPlanes, n),
            i && at.viewport(w.copy(i)),
            r.length > 0 && jt(r, e, n),
            a.length > 0 && jt(a, e, n),
            s.length > 0 && jt(s, e, n),
            at.buffers.depth.setTest(!0),
            at.buffers.depth.setMask(!0),
            at.buffers.color.setMask(!0),
            at.setPolygonOffset(!1);
        }
        function Xt(t, e, n, i) {
          if (null !== (!0 === n.isScene ? n.overrideMaterial : null)) return;
          void 0 === g.state.transmissionRenderTarget[i.id] &&
            (g.state.transmissionRenderTarget[i.id] = new tn(1, 1, {
              generateMipmaps: !0,
              type:
                $.has("EXT_color_buffer_half_float") ||
                $.has("EXT_color_buffer_float")
                  ? et
                  : q,
              minFilter: Y,
              samples: 4,
              stencilBuffer: a,
              resolveDepthBuffer: !1,
              resolveStencilBuffer: !1,
              colorSpace: ke.workingColorSpace,
            }));
          const r = g.state.transmissionRenderTarget[i.id],
            s = i.viewport || w;
          r.setSize(s.z, s.w);
          const o = x.getRenderTarget();
          x.setRenderTarget(r),
            x.getClearColor(P),
            (L = x.getClearAlpha()),
            L < 1 && x.setClearColor(16777215, 0.5),
            x.clear(),
            K && Et.render(n);
          const l = x.toneMapping;
          x.toneMapping = R;
          const c = i.viewport;
          if (
            (void 0 !== i.viewport && (i.viewport = void 0),
            g.setupLightsView(i),
            !0 === V && yt.setGlobalState(x.clippingPlanes, i),
            jt(t, n, i),
            lt.updateMultisampleRenderTarget(r),
            lt.updateRenderTargetMipmap(r),
            !1 === $.has("WEBGL_multisampled_render_to_texture"))
          ) {
            let t = !1;
            for (let r = 0, a = e.length; r < a; r++) {
              const a = e[r],
                s = a.object,
                o = a.geometry,
                l = a.material,
                c = a.group;
              if (2 === l.side && s.layers.test(i.layers)) {
                const e = l.side;
                (l.side = 1),
                  (l.needsUpdate = !0),
                  Yt(s, n, i, o, l, c),
                  (l.side = e),
                  (l.needsUpdate = !0),
                  (t = !0);
              }
            }
            !0 === t &&
              (lt.updateMultisampleRenderTarget(r),
              lt.updateRenderTargetMipmap(r));
          }
          x.setRenderTarget(o),
            x.setClearColor(P, L),
            void 0 !== c && (i.viewport = c),
            (x.toneMapping = l);
        }
        function jt(t, e, n) {
          const i = !0 === e.isScene ? e.overrideMaterial : null;
          for (let r = 0, a = t.length; r < a; r++) {
            const a = t[r],
              s = a.object,
              o = a.geometry,
              l = null === i ? a.material : i,
              c = a.group;
            s.layers.test(n.layers) && Yt(s, e, n, o, l, c);
          }
        }
        function Yt(t, e, n, i, r, a) {
          t.onBeforeRender(x, e, n, i, r, a),
            t.modelViewMatrix.multiplyMatrices(
              n.matrixWorldInverse,
              t.matrixWorld
            ),
            t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
            !0 === r.transparent && 2 === r.side && !1 === r.forceSinglePass
              ? ((r.side = 1),
                (r.needsUpdate = !0),
                x.renderBufferDirect(n, e, i, r, t, a),
                (r.side = 0),
                (r.needsUpdate = !0),
                x.renderBufferDirect(n, e, i, r, t, a),
                (r.side = 2))
              : x.renderBufferDirect(n, e, i, r, t, a),
            t.onAfterRender(x, e, n, i, r, a);
        }
        function qt(t, e, n) {
          !0 !== e.isScene && (e = j);
          const i = ot.get(t),
            r = g.state.lights,
            a = g.state.shadowsArray,
            s = r.state.version,
            o = mt.getParameters(t, r.state, a, e, n),
            l = mt.getProgramCacheKey(o);
          let c = i.programs;
          (i.environment = t.isMeshStandardMaterial ? e.environment : null),
            (i.fog = e.fog),
            (i.envMap = (t.isMeshStandardMaterial ? ht : ct).get(
              t.envMap || i.environment
            )),
            (i.envMapRotation =
              null !== i.environment && null === t.envMap
                ? e.environmentRotation
                : t.envMapRotation),
            void 0 === c &&
              (t.addEventListener("dispose", Ft),
              (c = new Map()),
              (i.programs = c));
          let h = c.get(l);
          if (void 0 !== h) {
            if (i.currentProgram === h && i.lightsStateVersion === s)
              return Zt(t, o), h;
          } else
            (o.uniforms = mt.getUniforms(t)),
              t.onBeforeCompile(o, x),
              (h = mt.acquireProgram(o, l)),
              c.set(l, h),
              (i.uniforms = o.uniforms);
          const u = i.uniforms;
          return (
            ((t.isShaderMaterial || t.isRawShaderMaterial) &&
              !0 !== t.clipping) ||
              (u.clippingPlanes = yt.uniform),
            Zt(t, o),
            (i.needsLights = (function (t) {
              return (
                t.isMeshLambertMaterial ||
                t.isMeshToonMaterial ||
                t.isMeshPhongMaterial ||
                t.isMeshStandardMaterial ||
                t.isShadowMaterial ||
                (t.isShaderMaterial && !0 === t.lights)
              );
            })(t)),
            (i.lightsStateVersion = s),
            i.needsLights &&
              ((u.ambientLightColor.value = r.state.ambient),
              (u.lightProbe.value = r.state.probe),
              (u.directionalLights.value = r.state.directional),
              (u.directionalLightShadows.value = r.state.directionalShadow),
              (u.spotLights.value = r.state.spot),
              (u.spotLightShadows.value = r.state.spotShadow),
              (u.rectAreaLights.value = r.state.rectArea),
              (u.ltc_1.value = r.state.rectAreaLTC1),
              (u.ltc_2.value = r.state.rectAreaLTC2),
              (u.pointLights.value = r.state.point),
              (u.pointLightShadows.value = r.state.pointShadow),
              (u.hemisphereLights.value = r.state.hemi),
              (u.directionalShadowMap.value = r.state.directionalShadowMap),
              (u.directionalShadowMatrix.value =
                r.state.directionalShadowMatrix),
              (u.spotShadowMap.value = r.state.spotShadowMap),
              (u.spotLightMatrix.value = r.state.spotLightMatrix),
              (u.spotLightMap.value = r.state.spotLightMap),
              (u.pointShadowMap.value = r.state.pointShadowMap),
              (u.pointShadowMatrix.value = r.state.pointShadowMatrix)),
            (i.currentProgram = h),
            (i.uniformsList = null),
            h
          );
        }
        function Kt(t) {
          if (null === t.uniformsList) {
            const e = t.currentProgram.getUniforms();
            t.uniformsList = xs.seqWithValue(e.seq, t.uniforms);
          }
          return t.uniformsList;
        }
        function Zt(t, e) {
          const n = ot.get(t);
          (n.outputColorSpace = e.outputColorSpace),
            (n.batching = e.batching),
            (n.batchingColor = e.batchingColor),
            (n.instancing = e.instancing),
            (n.instancingColor = e.instancingColor),
            (n.instancingMorph = e.instancingMorph),
            (n.skinning = e.skinning),
            (n.morphTargets = e.morphTargets),
            (n.morphNormals = e.morphNormals),
            (n.morphColors = e.morphColors),
            (n.morphTargetsCount = e.morphTargetsCount),
            (n.numClippingPlanes = e.numClippingPlanes),
            (n.numIntersection = e.numClipIntersection),
            (n.vertexAlphas = e.vertexAlphas),
            (n.vertexTangents = e.vertexTangents),
            (n.toneMapping = e.toneMapping);
        }
        kt.setAnimationLoop(function (t) {
          Bt && Bt(t);
        }),
          "undefined" != typeof self && kt.setContext(self),
          (this.setAnimationLoop = function (t) {
            (Bt = t),
              It.setAnimationLoop(t),
              null === t ? kt.stop() : kt.start();
          }),
          It.addEventListener("sessionstart", Ht),
          It.addEventListener("sessionend", Vt),
          (this.render = function (t, e) {
            if (void 0 !== e && !0 !== e.isCamera)
              return void console.error(
                "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
              );
            if (!0 === M) return;
            if (
              (!0 === t.matrixWorldAutoUpdate && t.updateMatrixWorld(),
              null === e.parent &&
                !0 === e.matrixWorldAutoUpdate &&
                e.updateMatrixWorld(),
              !0 === It.enabled &&
                !0 === It.isPresenting &&
                (!0 === It.cameraAutoUpdate && It.updateCamera(e),
                (e = It.getCamera())),
              !0 === t.isScene && t.onBeforeRender(x, t, e, E),
              (g = Mt.get(t, v.length)),
              g.init(e),
              v.push(g),
              G.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
              H.setFromProjectionMatrix(G),
              (k = this.localClippingEnabled),
              (V = yt.init(this.clippingPlanes, k)),
              (m = xt.get(t, _.length)),
              m.init(),
              _.push(m),
              !0 === It.enabled && !0 === It.isPresenting)
            ) {
              const t = x.xr.getDepthSensingMesh();
              null !== t && Gt(t, e, -1 / 0, x.sortObjects);
            }
            Gt(t, e, 0, x.sortObjects),
              m.finish(),
              !0 === x.sortObjects && m.sort(N, O),
              (K =
                !1 === It.enabled ||
                !1 === It.isPresenting ||
                !1 === It.hasDepthSensing()),
              K && Et.addToRenderList(m, t),
              this.info.render.frame++,
              !0 === V && yt.beginShadows();
            const n = g.state.shadowsArray;
            St.render(n, t, e),
              !0 === V && yt.endShadows(),
              !0 === this.info.autoReset && this.info.reset();
            const i = m.opaque,
              r = m.transmissive;
            if ((g.setupLights(), e.isArrayCamera)) {
              const n = e.cameras;
              if (r.length > 0)
                for (let e = 0, a = n.length; e < a; e++) Xt(i, r, t, n[e]);
              K && Et.render(t);
              for (let e = 0, i = n.length; e < i; e++) {
                const i = n[e];
                Wt(m, t, i, i.viewport);
              }
            } else
              r.length > 0 && Xt(i, r, t, e), K && Et.render(t), Wt(m, t, e);
            null !== E &&
              (lt.updateMultisampleRenderTarget(E),
              lt.updateRenderTargetMipmap(E)),
              !0 === t.isScene && t.onAfterRender(x, t, e),
              Rt.resetDefaultState(),
              (T = -1),
              (b = null),
              v.pop(),
              v.length > 0
                ? ((g = v[v.length - 1]),
                  !0 === V &&
                    yt.setGlobalState(x.clippingPlanes, g.state.camera))
                : (g = null),
              _.pop(),
              (m = _.length > 0 ? _[_.length - 1] : null);
          }),
          (this.getActiveCubeFace = function () {
            return y;
          }),
          (this.getActiveMipmapLevel = function () {
            return S;
          }),
          (this.getRenderTarget = function () {
            return E;
          }),
          (this.setRenderTargetTextures = function (t, e, n) {
            (ot.get(t.texture).__webglTexture = e),
              (ot.get(t.depthTexture).__webglTexture = n);
            const i = ot.get(t);
            (i.__hasExternalTextures = !0),
              (i.__autoAllocateDepthBuffer = void 0 === n),
              i.__autoAllocateDepthBuffer ||
                (!0 === $.has("WEBGL_multisampled_render_to_texture") &&
                  (console.warn(
                    "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
                  ),
                  (i.__useRenderToTexture = !1)));
          }),
          (this.setRenderTargetFramebuffer = function (t, e) {
            const n = ot.get(t);
            (n.__webglFramebuffer = e),
              (n.__useDefaultFramebuffer = void 0 === e);
          }),
          (this.setRenderTarget = function (t, e = 0, n = 0) {
            (E = t), (y = e), (S = n);
            let i = !0,
              r = null,
              a = !1,
              s = !1;
            if (t) {
              const o = ot.get(t);
              void 0 !== o.__useDefaultFramebuffer
                ? (at.bindFramebuffer(Pt.FRAMEBUFFER, null), (i = !1))
                : void 0 === o.__webglFramebuffer
                ? lt.setupRenderTarget(t)
                : o.__hasExternalTextures &&
                  lt.rebindTextures(
                    t,
                    ot.get(t.texture).__webglTexture,
                    ot.get(t.depthTexture).__webglTexture
                  );
              const l = t.texture;
              (l.isData3DTexture ||
                l.isDataArrayTexture ||
                l.isCompressedArrayTexture) &&
                (s = !0);
              const c = ot.get(t).__webglFramebuffer;
              t.isWebGLCubeRenderTarget
                ? ((r = Array.isArray(c[e]) ? c[e][n] : c[e]), (a = !0))
                : (r =
                    t.samples > 0 && !1 === lt.useMultisampledRTT(t)
                      ? ot.get(t).__webglMultisampledFramebuffer
                      : Array.isArray(c)
                      ? c[n]
                      : c),
                w.copy(t.viewport),
                A.copy(t.scissor),
                (C = t.scissorTest);
            } else
              w.copy(F).multiplyScalar(D).floor(),
                A.copy(z).multiplyScalar(D).floor(),
                (C = B);
            if (
              (at.bindFramebuffer(Pt.FRAMEBUFFER, r) &&
                i &&
                at.drawBuffers(t, r),
              at.viewport(w),
              at.scissor(A),
              at.setScissorTest(C),
              a)
            ) {
              const i = ot.get(t.texture);
              Pt.framebufferTexture2D(
                Pt.FRAMEBUFFER,
                Pt.COLOR_ATTACHMENT0,
                Pt.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                i.__webglTexture,
                n
              );
            } else if (s) {
              const i = ot.get(t.texture),
                r = e || 0;
              Pt.framebufferTextureLayer(
                Pt.FRAMEBUFFER,
                Pt.COLOR_ATTACHMENT0,
                i.__webglTexture,
                n || 0,
                r
              );
            }
            T = -1;
          }),
          (this.readRenderTargetPixels = function (t, e, n, i, r, a, s) {
            if (!t || !t.isWebGLRenderTarget)
              return void console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
              );
            let o = ot.get(t).__webglFramebuffer;
            if ((t.isWebGLCubeRenderTarget && void 0 !== s && (o = o[s]), o)) {
              at.bindFramebuffer(Pt.FRAMEBUFFER, o);
              try {
                const s = t.texture,
                  o = s.format,
                  l = s.type;
                if (!tt.textureFormatReadable(o))
                  return void console.error(
                    "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
                  );
                if (!tt.textureTypeReadable(l))
                  return void console.error(
                    "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
                  );
                e >= 0 &&
                  e <= t.width - i &&
                  n >= 0 &&
                  n <= t.height - r &&
                  Pt.readPixels(e, n, i, r, At.convert(o), At.convert(l), a);
              } finally {
                const t = null !== E ? ot.get(E).__webglFramebuffer : null;
                at.bindFramebuffer(Pt.FRAMEBUFFER, t);
              }
            }
          }),
          (this.readRenderTargetPixelsAsync = async function (
            t,
            e,
            n,
            i,
            r,
            a,
            s
          ) {
            if (!t || !t.isWebGLRenderTarget)
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
              );
            let o = ot.get(t).__webglFramebuffer;
            if ((t.isWebGLCubeRenderTarget && void 0 !== s && (o = o[s]), o)) {
              at.bindFramebuffer(Pt.FRAMEBUFFER, o);
              try {
                const s = t.texture,
                  o = s.format,
                  l = s.type;
                if (!tt.textureFormatReadable(o))
                  throw new Error(
                    "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format."
                  );
                if (!tt.textureTypeReadable(l))
                  throw new Error(
                    "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type."
                  );
                if (e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r) {
                  const t = Pt.createBuffer();
                  Pt.bindBuffer(Pt.PIXEL_PACK_BUFFER, t),
                    Pt.bufferData(
                      Pt.PIXEL_PACK_BUFFER,
                      a.byteLength,
                      Pt.STREAM_READ
                    ),
                    Pt.readPixels(e, n, i, r, At.convert(o), At.convert(l), 0),
                    Pt.flush();
                  const s = Pt.fenceSync(Pt.SYNC_GPU_COMMANDS_COMPLETE, 0);
                  await (function (t, e) {
                    return new Promise(function (n, i) {
                      setTimeout(function r() {
                        switch (
                          t.clientWaitSync(e, t.SYNC_FLUSH_COMMANDS_BIT, 0)
                        ) {
                          case t.WAIT_FAILED:
                            i();
                            break;
                          case t.TIMEOUT_EXPIRED:
                            setTimeout(r, 4);
                            break;
                          default:
                            n();
                        }
                      }, 4);
                    });
                  })(Pt, s);
                  try {
                    Pt.bindBuffer(Pt.PIXEL_PACK_BUFFER, t),
                      Pt.getBufferSubData(Pt.PIXEL_PACK_BUFFER, 0, a);
                  } finally {
                    Pt.deleteBuffer(t), Pt.deleteSync(s);
                  }
                  return a;
                }
              } finally {
                const t = null !== E ? ot.get(E).__webglFramebuffer : null;
                at.bindFramebuffer(Pt.FRAMEBUFFER, t);
              }
            }
          }),
          (this.copyFramebufferToTexture = function (t, e = null, n = 0) {
            !0 !== t.isTexture &&
              (Fe(
                "WebGLRenderer: copyFramebufferToTexture function signature has changed."
              ),
              (e = arguments[0] || null),
              (t = arguments[1]));
            const i = Math.pow(2, -n),
              r = Math.floor(t.image.width * i),
              a = Math.floor(t.image.height * i),
              s = null !== e ? e.x : 0,
              o = null !== e ? e.y : 0;
            lt.setTexture2D(t, 0),
              Pt.copyTexSubImage2D(Pt.TEXTURE_2D, n, 0, 0, s, o, r, a),
              at.unbindTexture();
          }),
          (this.copyTextureToTexture = function (
            t,
            e,
            n = null,
            i = null,
            r = 0
          ) {
            let a, s, o, l, c, h;
            !0 !== t.isTexture &&
              (Fe(
                "WebGLRenderer: copyTextureToTexture function signature has changed."
              ),
              (i = arguments[0] || null),
              (t = arguments[1]),
              (e = arguments[2]),
              (r = arguments[3] || 0),
              (n = null)),
              null !== n
                ? ((a = n.max.x - n.min.x),
                  (s = n.max.y - n.min.y),
                  (o = n.min.x),
                  (l = n.min.y))
                : ((a = t.image.width), (s = t.image.height), (o = 0), (l = 0)),
              null !== i ? ((c = i.x), (h = i.y)) : ((c = 0), (h = 0));
            const u = At.convert(e.format),
              d = At.convert(e.type);
            lt.setTexture2D(e, 0),
              Pt.pixelStorei(Pt.UNPACK_FLIP_Y_WEBGL, e.flipY),
              Pt.pixelStorei(
                Pt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                e.premultiplyAlpha
              ),
              Pt.pixelStorei(Pt.UNPACK_ALIGNMENT, e.unpackAlignment);
            const p = Pt.getParameter(Pt.UNPACK_ROW_LENGTH),
              f = Pt.getParameter(Pt.UNPACK_IMAGE_HEIGHT),
              m = Pt.getParameter(Pt.UNPACK_SKIP_PIXELS),
              g = Pt.getParameter(Pt.UNPACK_SKIP_ROWS),
              _ = Pt.getParameter(Pt.UNPACK_SKIP_IMAGES),
              v = t.isCompressedTexture ? t.mipmaps[r] : t.image;
            Pt.pixelStorei(Pt.UNPACK_ROW_LENGTH, v.width),
              Pt.pixelStorei(Pt.UNPACK_IMAGE_HEIGHT, v.height),
              Pt.pixelStorei(Pt.UNPACK_SKIP_PIXELS, o),
              Pt.pixelStorei(Pt.UNPACK_SKIP_ROWS, l),
              t.isDataTexture
                ? Pt.texSubImage2D(Pt.TEXTURE_2D, r, c, h, a, s, u, d, v.data)
                : t.isCompressedTexture
                ? Pt.compressedTexSubImage2D(
                    Pt.TEXTURE_2D,
                    r,
                    c,
                    h,
                    v.width,
                    v.height,
                    u,
                    v.data
                  )
                : Pt.texSubImage2D(Pt.TEXTURE_2D, r, c, h, a, s, u, d, v),
              Pt.pixelStorei(Pt.UNPACK_ROW_LENGTH, p),
              Pt.pixelStorei(Pt.UNPACK_IMAGE_HEIGHT, f),
              Pt.pixelStorei(Pt.UNPACK_SKIP_PIXELS, m),
              Pt.pixelStorei(Pt.UNPACK_SKIP_ROWS, g),
              Pt.pixelStorei(Pt.UNPACK_SKIP_IMAGES, _),
              0 === r && e.generateMipmaps && Pt.generateMipmap(Pt.TEXTURE_2D),
              at.unbindTexture();
          }),
          (this.copyTextureToTexture3D = function (
            t,
            e,
            n = null,
            i = null,
            r = 0
          ) {
            let a, s, o, l, c, h, u, d, p;
            !0 !== t.isTexture &&
              (Fe(
                "WebGLRenderer: copyTextureToTexture3D function signature has changed."
              ),
              (n = arguments[0] || null),
              (i = arguments[1] || null),
              (t = arguments[2]),
              (e = arguments[3]),
              (r = arguments[4] || 0));
            const f = t.isCompressedTexture ? t.mipmaps[r] : t.image;
            null !== n
              ? ((a = n.max.x - n.min.x),
                (s = n.max.y - n.min.y),
                (o = n.max.z - n.min.z),
                (l = n.min.x),
                (c = n.min.y),
                (h = n.min.z))
              : ((a = f.width),
                (s = f.height),
                (o = f.depth),
                (l = 0),
                (c = 0),
                (h = 0)),
              null !== i
                ? ((u = i.x), (d = i.y), (p = i.z))
                : ((u = 0), (d = 0), (p = 0));
            const m = At.convert(e.format),
              g = At.convert(e.type);
            let _;
            if (e.isData3DTexture) lt.setTexture3D(e, 0), (_ = Pt.TEXTURE_3D);
            else {
              if (!e.isDataArrayTexture && !e.isCompressedArrayTexture)
                return void console.warn(
                  "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
                );
              lt.setTexture2DArray(e, 0), (_ = Pt.TEXTURE_2D_ARRAY);
            }
            Pt.pixelStorei(Pt.UNPACK_FLIP_Y_WEBGL, e.flipY),
              Pt.pixelStorei(
                Pt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                e.premultiplyAlpha
              ),
              Pt.pixelStorei(Pt.UNPACK_ALIGNMENT, e.unpackAlignment);
            const v = Pt.getParameter(Pt.UNPACK_ROW_LENGTH),
              x = Pt.getParameter(Pt.UNPACK_IMAGE_HEIGHT),
              M = Pt.getParameter(Pt.UNPACK_SKIP_PIXELS),
              y = Pt.getParameter(Pt.UNPACK_SKIP_ROWS),
              S = Pt.getParameter(Pt.UNPACK_SKIP_IMAGES);
            Pt.pixelStorei(Pt.UNPACK_ROW_LENGTH, f.width),
              Pt.pixelStorei(Pt.UNPACK_IMAGE_HEIGHT, f.height),
              Pt.pixelStorei(Pt.UNPACK_SKIP_PIXELS, l),
              Pt.pixelStorei(Pt.UNPACK_SKIP_ROWS, c),
              Pt.pixelStorei(Pt.UNPACK_SKIP_IMAGES, h),
              t.isDataTexture || t.isData3DTexture
                ? Pt.texSubImage3D(_, r, u, d, p, a, s, o, m, g, f.data)
                : e.isCompressedArrayTexture
                ? Pt.compressedTexSubImage3D(_, r, u, d, p, a, s, o, m, f.data)
                : Pt.texSubImage3D(_, r, u, d, p, a, s, o, m, g, f),
              Pt.pixelStorei(Pt.UNPACK_ROW_LENGTH, v),
              Pt.pixelStorei(Pt.UNPACK_IMAGE_HEIGHT, x),
              Pt.pixelStorei(Pt.UNPACK_SKIP_PIXELS, M),
              Pt.pixelStorei(Pt.UNPACK_SKIP_ROWS, y),
              Pt.pixelStorei(Pt.UNPACK_SKIP_IMAGES, S),
              0 === r && e.generateMipmaps && Pt.generateMipmap(_),
              at.unbindTexture();
          }),
          (this.initRenderTarget = function (t) {
            void 0 === ot.get(t).__webglFramebuffer && lt.setupRenderTarget(t);
          }),
          (this.initTexture = function (t) {
            t.isCubeTexture
              ? lt.setTextureCube(t, 0)
              : t.isData3DTexture
              ? lt.setTexture3D(t, 0)
              : t.isDataArrayTexture || t.isCompressedArrayTexture
              ? lt.setTexture2DArray(t, 0)
              : lt.setTexture2D(t, 0),
              at.unbindTexture();
          }),
          (this.resetState = function () {
            (y = 0), (S = 0), (E = null), at.reset(), Rt.reset();
          }),
          "undefined" != typeof __THREE_DEVTOOLS__ &&
            __THREE_DEVTOOLS__.dispatchEvent(
              new CustomEvent("observe", { detail: this })
            );
      }
      get coordinateSystem() {
        return ve;
      }
      get outputColorSpace() {
        return this._outputColorSpace;
      }
      set outputColorSpace(t) {
        this._outputColorSpace = t;
        const e = this.getContext();
        (e.drawingBufferColorSpace = t === ne ? "display-p3" : "srgb"),
          (e.unpackColorSpace =
            ke.workingColorSpace === ie ? "display-p3" : "srgb");
      }
    })({ antialias: !0 })),
    al.setSize(window.innerWidth, window.innerHeight, !0),
    al.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
    (nl = al.domElement),
    console.log(nl),
    document.body.appendChild(nl),
    (function () {
      hl = new ki();
      const t = new Float32Array(3 * fl.count),
        e = new Float32Array(3 * fl.count),
        n = new Ti(fl.insideColor),
        i = new Ti(fl.outsideColor);
      for (let r = 0; r < fl.count; r++) {
        const a = 3 * r,
          s = Math.random() * fl.radius,
          o = s * fl.spin,
          l = ((r % fl.branches) / fl.branches) * Math.PI * 2,
          c = 1 - Math.pow(s / fl.radius, 2),
          h = Math.sqrt(Math.random()) * fl.radius * c;
        Math.pow(Math.random(), fl.randomnessPower),
          Math.random(),
          Math.pow(Math.random(), fl.randomnessPower),
          Math.random(),
          Math.pow(Math.random(), fl.randomnessPower),
          Math.random(),
          (t[a + 0] = Math.cos(l + o) * h),
          (t[a + 1] = (Math.random() - 0.5) * fl.radius * c * 0.1),
          (t[a + 2] = Math.sin(l + o) * h);
        const u = n.clone();
        u.lerp(i, s / fl.radius),
          (e[a + 0] = u.r),
          (e[a + 1] = u.g),
          (e[a + 2] = u.b);
      }
      hl.setAttribute("position", new Li(t, 3)),
        hl.setAttribute("color", new Li(e, 3)),
        (ul = new vo({
          size: fl.size,
          sizeAttenuation: !0,
          depthWrite: !1,
          blending: 2,
          vertexColors: !0,
        })),
        (cl = new Eo(hl, ul)),
        il.add(cl);
    })(),
    (dl = new (class extends Me {
      constructor(t, e) {
        super(),
          (this.object = t),
          (this.domElement = e),
          (this.domElement.style.touchAction = "none"),
          (this.enabled = !0),
          (this.target = new an()),
          (this.cursor = new an()),
          (this.minDistance = 0),
          (this.maxDistance = 1 / 0),
          (this.minZoom = 0),
          (this.maxZoom = 1 / 0),
          (this.minTargetRadius = 0),
          (this.maxTargetRadius = 1 / 0),
          (this.minPolarAngle = 0),
          (this.maxPolarAngle = Math.PI),
          (this.minAzimuthAngle = -1 / 0),
          (this.maxAzimuthAngle = 1 / 0),
          (this.enableDamping = !1),
          (this.dampingFactor = 0.05),
          (this.enableZoom = !0),
          (this.zoomSpeed = 1),
          (this.enableRotate = !0),
          (this.rotateSpeed = 1),
          (this.enablePan = !0),
          (this.panSpeed = 1),
          (this.screenSpacePanning = !0),
          (this.keyPanSpeed = 7),
          (this.zoomToCursor = !1),
          (this.autoRotate = !1),
          (this.autoRotateSpeed = 2),
          (this.keys = {
            LEFT: "ArrowLeft",
            UP: "ArrowUp",
            RIGHT: "ArrowRight",
            BOTTOM: "ArrowDown",
          }),
          (this.mouseButtons = { LEFT: 0, MIDDLE: 1, RIGHT: 2 }),
          (this.touches = { ONE: 0, TWO: 2 }),
          (this.target0 = this.target.clone()),
          (this.position0 = this.object.position.clone()),
          (this.zoom0 = this.object.zoom),
          (this._domElementKeyEvents = null),
          (this.getPolarAngle = function () {
            return s.phi;
          }),
          (this.getAzimuthalAngle = function () {
            return s.theta;
          }),
          (this.getDistance = function () {
            return this.object.position.distanceTo(this.target);
          }),
          (this.listenToKeyEvents = function (t) {
            t.addEventListener("keydown", K), (this._domElementKeyEvents = t);
          }),
          (this.stopListenToKeyEvents = function () {
            this._domElementKeyEvents.removeEventListener("keydown", K),
              (this._domElementKeyEvents = null);
          }),
          (this.saveState = function () {
            n.target0.copy(n.target),
              n.position0.copy(n.object.position),
              (n.zoom0 = n.object.zoom);
          }),
          (this.reset = function () {
            n.target.copy(n.target0),
              n.object.position.copy(n.position0),
              (n.object.zoom = n.zoom0),
              n.object.updateProjectionMatrix(),
              n.dispatchEvent(Zo),
              n.update(),
              (r = i.NONE);
          }),
          (this.update = (function () {
            const e = new an(),
              h = new rn().setFromUnitVectors(t.up, new an(0, 1, 0)),
              u = h.clone().invert(),
              d = new an(),
              p = new rn(),
              f = new an(),
              m = 2 * Math.PI;
            return function (g = null) {
              const _ = n.object.position;
              e.copy(_).sub(n.target),
                e.applyQuaternion(h),
                s.setFromVector3(e),
                n.autoRotate &&
                  r === i.NONE &&
                  w(
                    (function (t) {
                      return null !== t
                        ? ((2 * Math.PI) / 60) * n.autoRotateSpeed * t
                        : ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed;
                    })(g)
                  ),
                n.enableDamping
                  ? ((s.theta += o.theta * n.dampingFactor),
                    (s.phi += o.phi * n.dampingFactor))
                  : ((s.theta += o.theta), (s.phi += o.phi));
              let v = n.minAzimuthAngle,
                S = n.maxAzimuthAngle;
              isFinite(v) &&
                isFinite(S) &&
                (v < -Math.PI ? (v += m) : v > Math.PI && (v -= m),
                S < -Math.PI ? (S += m) : S > Math.PI && (S -= m),
                (s.theta =
                  v <= S
                    ? Math.max(v, Math.min(S, s.theta))
                    : s.theta > (v + S) / 2
                    ? Math.max(v, s.theta)
                    : Math.min(S, s.theta))),
                (s.phi = Math.max(
                  n.minPolarAngle,
                  Math.min(n.maxPolarAngle, s.phi)
                )),
                s.makeSafe(),
                !0 === n.enableDamping
                  ? n.target.addScaledVector(c, n.dampingFactor)
                  : n.target.add(c),
                n.target.sub(n.cursor),
                n.target.clampLength(n.minTargetRadius, n.maxTargetRadius),
                n.target.add(n.cursor);
              let E = !1;
              if ((n.zoomToCursor && y) || n.object.isOrthographicCamera)
                s.radius = D(s.radius);
              else {
                const t = s.radius;
                (s.radius = D(s.radius * l)), (E = t != s.radius);
              }
              if (
                (e.setFromSpherical(s),
                e.applyQuaternion(u),
                _.copy(n.target).add(e),
                n.object.lookAt(n.target),
                !0 === n.enableDamping
                  ? ((o.theta *= 1 - n.dampingFactor),
                    (o.phi *= 1 - n.dampingFactor),
                    c.multiplyScalar(1 - n.dampingFactor))
                  : (o.set(0, 0, 0), c.set(0, 0, 0)),
                n.zoomToCursor && y)
              ) {
                let i = null;
                if (n.object.isPerspectiveCamera) {
                  const t = e.length();
                  i = D(t * l);
                  const r = t - i;
                  n.object.position.addScaledVector(x, r),
                    n.object.updateMatrixWorld(),
                    (E = !!r);
                } else if (n.object.isOrthographicCamera) {
                  const t = new an(M.x, M.y, 0);
                  t.unproject(n.object);
                  const r = n.object.zoom;
                  (n.object.zoom = Math.max(
                    n.minZoom,
                    Math.min(n.maxZoom, n.object.zoom / l)
                  )),
                    n.object.updateProjectionMatrix(),
                    (E = r !== n.object.zoom);
                  const a = new an(M.x, M.y, 0);
                  a.unproject(n.object),
                    n.object.position.sub(a).add(t),
                    n.object.updateMatrixWorld(),
                    (i = e.length());
                } else
                  console.warn(
                    "WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."
                  ),
                    (n.zoomToCursor = !1);
                null !== i &&
                  (this.screenSpacePanning
                    ? n.target
                        .set(0, 0, -1)
                        .transformDirection(n.object.matrix)
                        .multiplyScalar(i)
                        .add(n.object.position)
                    : (Qo.origin.copy(n.object.position),
                      Qo.direction
                        .set(0, 0, -1)
                        .transformDirection(n.object.matrix),
                      Math.abs(n.object.up.dot(Qo.direction)) < el
                        ? t.lookAt(n.target)
                        : (tl.setFromNormalAndCoplanarPoint(
                            n.object.up,
                            n.target
                          ),
                          Qo.intersectPlane(tl, n.target))));
              } else if (n.object.isOrthographicCamera) {
                const t = n.object.zoom;
                (n.object.zoom = Math.max(
                  n.minZoom,
                  Math.min(n.maxZoom, n.object.zoom / l)
                )),
                  t !== n.object.zoom &&
                    (n.object.updateProjectionMatrix(), (E = !0));
              }
              return (
                (l = 1),
                (y = !1),
                !!(
                  E ||
                  d.distanceToSquared(n.object.position) > a ||
                  8 * (1 - p.dot(n.object.quaternion)) > a ||
                  f.distanceToSquared(n.target) > a
                ) &&
                  (n.dispatchEvent(Zo),
                  d.copy(n.object.position),
                  p.copy(n.object.quaternion),
                  f.copy(n.target),
                  !0)
              );
            };
          })()),
          (this.dispose = function () {
            n.domElement.removeEventListener("contextmenu", J),
              n.domElement.removeEventListener("pointerdown", G),
              n.domElement.removeEventListener("pointercancel", X),
              n.domElement.removeEventListener("wheel", j),
              n.domElement.removeEventListener("pointermove", W),
              n.domElement.removeEventListener("pointerup", X),
              n.domElement
                .getRootNode()
                .removeEventListener("keydown", Y, { capture: !0 }),
              null !== n._domElementKeyEvents &&
                (n._domElementKeyEvents.removeEventListener("keydown", K),
                (n._domElementKeyEvents = null));
          });
        const n = this,
          i = {
            NONE: -1,
            ROTATE: 0,
            DOLLY: 1,
            PAN: 2,
            TOUCH_ROTATE: 3,
            TOUCH_PAN: 4,
            TOUCH_DOLLY_PAN: 5,
            TOUCH_DOLLY_ROTATE: 6,
          };
        let r = i.NONE;
        const a = 1e-6,
          s = new Ko(),
          o = new Ko();
        let l = 1;
        const c = new an(),
          h = new Pe(),
          u = new Pe(),
          d = new Pe(),
          p = new Pe(),
          f = new Pe(),
          m = new Pe(),
          g = new Pe(),
          _ = new Pe(),
          v = new Pe(),
          x = new an(),
          M = new Pe();
        let y = !1;
        const S = [],
          E = {};
        let T = !1;
        function b(t) {
          const e = Math.abs(0.01 * t);
          return Math.pow(0.95, n.zoomSpeed * e);
        }
        function w(t) {
          o.theta -= t;
        }
        function A(t) {
          o.phi -= t;
        }
        const R = (function () {
            const t = new an();
            return function (e, n) {
              t.setFromMatrixColumn(n, 0), t.multiplyScalar(-e), c.add(t);
            };
          })(),
          C = (function () {
            const t = new an();
            return function (e, i) {
              !0 === n.screenSpacePanning
                ? t.setFromMatrixColumn(i, 1)
                : (t.setFromMatrixColumn(i, 0), t.crossVectors(n.object.up, t)),
                t.multiplyScalar(e),
                c.add(t);
            };
          })(),
          P = (function () {
            const t = new an();
            return function (e, i) {
              const r = n.domElement;
              if (n.object.isPerspectiveCamera) {
                const a = n.object.position;
                t.copy(a).sub(n.target);
                let s = t.length();
                (s *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
                  R((2 * e * s) / r.clientHeight, n.object.matrix),
                  C((2 * i * s) / r.clientHeight, n.object.matrix);
              } else
                n.object.isOrthographicCamera
                  ? (R(
                      (e * (n.object.right - n.object.left)) /
                        n.object.zoom /
                        r.clientWidth,
                      n.object.matrix
                    ),
                    C(
                      (i * (n.object.top - n.object.bottom)) /
                        n.object.zoom /
                        r.clientHeight,
                      n.object.matrix
                    ))
                  : (console.warn(
                      "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                    ),
                    (n.enablePan = !1));
            };
          })();
        function L(t) {
          n.object.isPerspectiveCamera || n.object.isOrthographicCamera
            ? (l /= t)
            : (console.warn(
                "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
              ),
              (n.enableZoom = !1));
        }
        function U(t) {
          n.object.isPerspectiveCamera || n.object.isOrthographicCamera
            ? (l *= t)
            : (console.warn(
                "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
              ),
              (n.enableZoom = !1));
        }
        function I(t, e) {
          if (!n.zoomToCursor) return;
          y = !0;
          const i = n.domElement.getBoundingClientRect(),
            r = t - i.left,
            a = e - i.top,
            s = i.width,
            o = i.height;
          (M.x = (r / s) * 2 - 1),
            (M.y = (-a / o) * 2 + 1),
            x
              .set(M.x, M.y, 1)
              .unproject(n.object)
              .sub(n.object.position)
              .normalize();
        }
        function D(t) {
          return Math.max(n.minDistance, Math.min(n.maxDistance, t));
        }
        function N(t) {
          h.set(t.clientX, t.clientY);
        }
        function O(t) {
          p.set(t.clientX, t.clientY);
        }
        function F(t) {
          if (1 === S.length) h.set(t.pageX, t.pageY);
          else {
            const e = Q(t),
              n = 0.5 * (t.pageX + e.x),
              i = 0.5 * (t.pageY + e.y);
            h.set(n, i);
          }
        }
        function z(t) {
          if (1 === S.length) p.set(t.pageX, t.pageY);
          else {
            const e = Q(t),
              n = 0.5 * (t.pageX + e.x),
              i = 0.5 * (t.pageY + e.y);
            p.set(n, i);
          }
        }
        function B(t) {
          const e = Q(t),
            n = t.pageX - e.x,
            i = t.pageY - e.y,
            r = Math.sqrt(n * n + i * i);
          g.set(0, r);
        }
        function H(t) {
          if (1 == S.length) u.set(t.pageX, t.pageY);
          else {
            const e = Q(t),
              n = 0.5 * (t.pageX + e.x),
              i = 0.5 * (t.pageY + e.y);
            u.set(n, i);
          }
          d.subVectors(u, h).multiplyScalar(n.rotateSpeed);
          const e = n.domElement;
          w((2 * Math.PI * d.x) / e.clientHeight),
            A((2 * Math.PI * d.y) / e.clientHeight),
            h.copy(u);
        }
        function V(t) {
          if (1 === S.length) f.set(t.pageX, t.pageY);
          else {
            const e = Q(t),
              n = 0.5 * (t.pageX + e.x),
              i = 0.5 * (t.pageY + e.y);
            f.set(n, i);
          }
          m.subVectors(f, p).multiplyScalar(n.panSpeed), P(m.x, m.y), p.copy(f);
        }
        function k(t) {
          const e = Q(t),
            i = t.pageX - e.x,
            r = t.pageY - e.y,
            a = Math.sqrt(i * i + r * r);
          _.set(0, a),
            v.set(0, Math.pow(_.y / g.y, n.zoomSpeed)),
            L(v.y),
            g.copy(_),
            I(0.5 * (t.pageX + e.x), 0.5 * (t.pageY + e.y));
        }
        function G(t) {
          !1 !== n.enabled &&
            (0 === S.length &&
              (n.domElement.setPointerCapture(t.pointerId),
              n.domElement.addEventListener("pointermove", W),
              n.domElement.addEventListener("pointerup", X)),
            (function (t) {
              for (let e = 0; e < S.length; e++)
                if (S[e] == t.pointerId) return !0;
              return !1;
            })(t) ||
              ((function (t) {
                S.push(t.pointerId);
              })(t),
              "touch" === t.pointerType
                ? Z(t)
                : (function (t) {
                    let e;
                    switch (t.button) {
                      case 0:
                        e = n.mouseButtons.LEFT;
                        break;
                      case 1:
                        e = n.mouseButtons.MIDDLE;
                        break;
                      case 2:
                        e = n.mouseButtons.RIGHT;
                        break;
                      default:
                        e = -1;
                    }
                    switch (e) {
                      case 1:
                        if (!1 === n.enableZoom) return;
                        !(function (t) {
                          I(t.clientX, t.clientX), g.set(t.clientX, t.clientY);
                        })(t),
                          (r = i.DOLLY);
                        break;
                      case 0:
                        if (t.ctrlKey || t.metaKey || t.shiftKey) {
                          if (!1 === n.enablePan) return;
                          O(t), (r = i.PAN);
                        } else {
                          if (!1 === n.enableRotate) return;
                          N(t), (r = i.ROTATE);
                        }
                        break;
                      case 2:
                        if (t.ctrlKey || t.metaKey || t.shiftKey) {
                          if (!1 === n.enableRotate) return;
                          N(t), (r = i.ROTATE);
                        } else {
                          if (!1 === n.enablePan) return;
                          O(t), (r = i.PAN);
                        }
                        break;
                      default:
                        r = i.NONE;
                    }
                    r !== i.NONE && n.dispatchEvent(Jo);
                  })(t)));
        }
        function W(t) {
          !1 !== n.enabled &&
            ("touch" === t.pointerType
              ? (function (t) {
                  switch (($(t), r)) {
                    case i.TOUCH_ROTATE:
                      if (!1 === n.enableRotate) return;
                      H(t), n.update();
                      break;
                    case i.TOUCH_PAN:
                      if (!1 === n.enablePan) return;
                      V(t), n.update();
                      break;
                    case i.TOUCH_DOLLY_PAN:
                      if (!1 === n.enableZoom && !1 === n.enablePan) return;
                      !(function (t) {
                        n.enableZoom && k(t), n.enablePan && V(t);
                      })(t),
                        n.update();
                      break;
                    case i.TOUCH_DOLLY_ROTATE:
                      if (!1 === n.enableZoom && !1 === n.enableRotate) return;
                      !(function (t) {
                        n.enableZoom && k(t), n.enableRotate && H(t);
                      })(t),
                        n.update();
                      break;
                    default:
                      r = i.NONE;
                  }
                })(t)
              : (function (t) {
                  switch (r) {
                    case i.ROTATE:
                      if (!1 === n.enableRotate) return;
                      !(function (t) {
                        u.set(t.clientX, t.clientY),
                          d.subVectors(u, h).multiplyScalar(n.rotateSpeed);
                        const e = n.domElement;
                        w((2 * Math.PI * d.x) / e.clientHeight),
                          A((2 * Math.PI * d.y) / e.clientHeight),
                          h.copy(u),
                          n.update();
                      })(t);
                      break;
                    case i.DOLLY:
                      if (!1 === n.enableZoom) return;
                      !(function (t) {
                        _.set(t.clientX, t.clientY),
                          v.subVectors(_, g),
                          v.y > 0 ? L(b(v.y)) : v.y < 0 && U(b(v.y)),
                          g.copy(_),
                          n.update();
                      })(t);
                      break;
                    case i.PAN:
                      if (!1 === n.enablePan) return;
                      !(function (t) {
                        f.set(t.clientX, t.clientY),
                          m.subVectors(f, p).multiplyScalar(n.panSpeed),
                          P(m.x, m.y),
                          p.copy(f),
                          n.update();
                      })(t);
                  }
                })(t));
        }
        function X(t) {
          switch (
            ((function (t) {
              delete E[t.pointerId];
              for (let e = 0; e < S.length; e++)
                if (S[e] == t.pointerId) return void S.splice(e, 1);
            })(t),
            S.length)
          ) {
            case 0:
              n.domElement.releasePointerCapture(t.pointerId),
                n.domElement.removeEventListener("pointermove", W),
                n.domElement.removeEventListener("pointerup", X),
                n.dispatchEvent($o),
                (r = i.NONE);
              break;
            case 1:
              const e = S[0],
                a = E[e];
              Z({ pointerId: e, pageX: a.x, pageY: a.y });
          }
        }
        function j(t) {
          !1 !== n.enabled &&
            !1 !== n.enableZoom &&
            r === i.NONE &&
            (t.preventDefault(),
            n.dispatchEvent(Jo),
            (function (t) {
              I(t.clientX, t.clientY),
                t.deltaY < 0 ? U(b(t.deltaY)) : t.deltaY > 0 && L(b(t.deltaY)),
                n.update();
            })(
              (function (t) {
                const e = t.deltaMode,
                  n = {
                    clientX: t.clientX,
                    clientY: t.clientY,
                    deltaY: t.deltaY,
                  };
                switch (e) {
                  case 1:
                    n.deltaY *= 16;
                    break;
                  case 2:
                    n.deltaY *= 100;
                }
                return t.ctrlKey && !T && (n.deltaY *= 10), n;
              })(t)
            ),
            n.dispatchEvent($o));
        }
        function Y(t) {
          "Control" === t.key &&
            ((T = !0),
            n.domElement
              .getRootNode()
              .addEventListener("keyup", q, { passive: !0, capture: !0 }));
        }
        function q(t) {
          "Control" === t.key &&
            ((T = !1),
            n.domElement
              .getRootNode()
              .removeEventListener("keyup", q, { passive: !0, capture: !0 }));
        }
        function K(t) {
          !1 !== n.enabled &&
            !1 !== n.enablePan &&
            (function (t) {
              let e = !1;
              switch (t.code) {
                case n.keys.UP:
                  t.ctrlKey || t.metaKey || t.shiftKey
                    ? A(
                        (2 * Math.PI * n.rotateSpeed) /
                          n.domElement.clientHeight
                      )
                    : P(0, n.keyPanSpeed),
                    (e = !0);
                  break;
                case n.keys.BOTTOM:
                  t.ctrlKey || t.metaKey || t.shiftKey
                    ? A(
                        (-2 * Math.PI * n.rotateSpeed) /
                          n.domElement.clientHeight
                      )
                    : P(0, -n.keyPanSpeed),
                    (e = !0);
                  break;
                case n.keys.LEFT:
                  t.ctrlKey || t.metaKey || t.shiftKey
                    ? w(
                        (2 * Math.PI * n.rotateSpeed) /
                          n.domElement.clientHeight
                      )
                    : P(n.keyPanSpeed, 0),
                    (e = !0);
                  break;
                case n.keys.RIGHT:
                  t.ctrlKey || t.metaKey || t.shiftKey
                    ? w(
                        (-2 * Math.PI * n.rotateSpeed) /
                          n.domElement.clientHeight
                      )
                    : P(-n.keyPanSpeed, 0),
                    (e = !0);
              }
              e && (t.preventDefault(), n.update());
            })(t);
        }
        function Z(t) {
          switch (($(t), S.length)) {
            case 1:
              switch (n.touches.ONE) {
                case 0:
                  if (!1 === n.enableRotate) return;
                  F(t), (r = i.TOUCH_ROTATE);
                  break;
                case 1:
                  if (!1 === n.enablePan) return;
                  z(t), (r = i.TOUCH_PAN);
                  break;
                default:
                  r = i.NONE;
              }
              break;
            case 2:
              switch (n.touches.TWO) {
                case 2:
                  if (!1 === n.enableZoom && !1 === n.enablePan) return;
                  !(function (t) {
                    n.enableZoom && B(t), n.enablePan && z(t);
                  })(t),
                    (r = i.TOUCH_DOLLY_PAN);
                  break;
                case 3:
                  if (!1 === n.enableZoom && !1 === n.enableRotate) return;
                  !(function (t) {
                    n.enableZoom && B(t), n.enableRotate && F(t);
                  })(t),
                    (r = i.TOUCH_DOLLY_ROTATE);
                  break;
                default:
                  r = i.NONE;
              }
              break;
            default:
              r = i.NONE;
          }
          r !== i.NONE && n.dispatchEvent(Jo);
        }
        function J(t) {
          !1 !== n.enabled && t.preventDefault();
        }
        function $(t) {
          let e = E[t.pointerId];
          void 0 === e && ((e = new Pe()), (E[t.pointerId] = e)),
            e.set(t.pageX, t.pageY);
        }
        function Q(t) {
          const e = t.pointerId === S[0] ? S[1] : S[0];
          return E[e];
        }
        n.domElement.addEventListener("contextmenu", J),
          n.domElement.addEventListener("pointerdown", G),
          n.domElement.addEventListener("pointercancel", X),
          n.domElement.addEventListener("wheel", j, { passive: !1 }),
          n.domElement
            .getRootNode()
            .addEventListener("keydown", Y, { passive: !0, capture: !0 }),
          this.update();
      }
    })(rl, nl)),
    (dl.minDistance = 5),
    (dl.maxDistance = 50),
    (dl.autoRotate = !0),
    window.addEventListener("resize", function () {
      (rl.aspect = window.innerWidth / window.innerHeight),
        rl.updateProjectionMatrix(),
        al.setSize(window.innerWidth, window.innerHeight);
    }),
    (function t() {
      requestAnimationFrame(t),
        0 == pl && (pl = !0),
        dl.update(),
        al.render(il, rl);
    })();
})();
