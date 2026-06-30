import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('calcAPI', {
  calculate: (a: number, op: string, b: number) =>
    ipcRenderer.invoke('calculate', a, op, b),
});
