class ReactiveEffect {
  private fn;
  constructor(_fn, public scheduler?) {
    this.fn = _fn;
  }
  run() {
    activeEffect = this;
    return this.fn();
  }
}

let activeEffect;

const targetMap = new Map();

export function track(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Set();
    depsMap.set(key, dep);
  }

  if (activeEffect) {
    dep.add(activeEffect);
  }
}

export function trigger(target, key) {
  let depsMap = targetMap.get(target);
  let dep = depsMap.get(key);

  dep.forEach((effect: any) => {
    if (effect.scheduler) {
      effect.scheduler();
    } else {
      effect.run();
    }
  });
}

export function effect(fn, options?) {
  const _effect = new ReactiveEffect(fn, options?.scheduler);
  _effect.run();
  return _effect.run.bind(_effect);
}
