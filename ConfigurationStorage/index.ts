export type TypeChecker<T> = (data: unknown) => data is T;

export default class ConfigurationStorage {
  static get(key: string): string | null {
    return window.localStorage.getItem(`SchwebConfiguration:${key}`);
  }

  static set(key: string, value: string): void {
    return window.localStorage.setItem(key, value);
  }

  static getObject<T>(key: string, typeChecker?: TypeChecker<T>): T | null {
    const retrieved = this.get(key);
    if (!retrieved) return null;

    const parsedData: unknown = JSON.parse(retrieved);
    if (!typeChecker || typeChecker(typeChecker)) return parsedData as T;
    return null;
  }

  static setObject(key: string, value: unknown): void {
    const serialized = JSON.stringify(value);
    return this.set(key, serialized);
  }
}
