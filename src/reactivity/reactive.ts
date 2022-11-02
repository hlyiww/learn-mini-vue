import { track, trigger } from "./effect";

export function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      // should track effects
      track(target, key);
      return Reflect.get(target, key);
    },
    set(target, key, value) {
      // should trigger effects
      const res = Reflect.set(target, key, value);
      trigger(target, key);
      return res;
    },
  });
}
