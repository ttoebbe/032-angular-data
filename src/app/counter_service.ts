import { Injectable } from '@angular/core';

// Variante 1 (aktiv): Kein Scope — der Service muss in jedem Component in providers[] eingetragen werden.
// Jede Komponente bekommt eine eigene, unabhängige Instanz (isolierter State).
// @Injectable()

// Variante 2: providedIn: 'root' — eine globale Singleton-Instanz für die gesamte App.
// Kein providers[] in den Komponenten nötig. Alle Komponenten teilen dieselbe Instanz.
// @Injectable({ providedIn: 'root' })

// Variante 3: providedIn: 'platform' — Singleton, der über mehrere Angular-Apps
// auf derselben Seite geteilt wird (Sonderfall, z. B. Micro-Frontends).
// @Injectable({ providedIn: 'platform' })

@Injectable()
export class CounterService {
  count = 0;

  increment() {
    this.count++;
  }
}
