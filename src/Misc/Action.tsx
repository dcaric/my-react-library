export class Action {
    private _callbacks: (() => any)[] = [];
  
  
    public AddCallback(callback: () => void) {
      this._callbacks.push(callback);
    }
  
  
    public RemoveCallback(callback: () => void) {
      this._callbacks = this._callbacks.filter(cb => cb != callback);
    }
  
  
    public Invoke(): void {
      for (let callback of this._callbacks) callback();
    }
  }
  
  
  
  
  
  