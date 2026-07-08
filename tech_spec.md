# Technical Specification - Portfolio Project

This document outlines the architectural decisions, coding patterns, and technology stack standards for the Portfolio application.

## 1. Technology Stack Overview

- **Core Framework**: Angular (v22.0.4)
- **Programming Language**: TypeScript
- **Styling**: Vanilla CSS for flexible layout control and clean design token implementation.
- **State Management**: Angular Signals (e.g., `signal()`, `computed()`) for reactive, performance-oriented UI updates.

---

## 2. Component Design Guidelines

### 2.1 File Separation (HTML / CSS / TS)
To ensure codebase maintainability and clean separation of concerns, all Angular components must be split into three distinct files:
- **`.component.ts`**: Contains only the component class, dependencies, inputs/outputs, signals, and controller logic.
- **`.component.html`**: Contains the declarative layout structure. No inline component styles should exist here.
- **`.component.css`**: Contains component-scoped styling.

Every component decorator must reference these external files using `templateUrl` and `styleUrl`:
```typescript
@Component({
  selector: 'app-example',
  standalone: true,
  imports: [...],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
```

---

## 3. Angular Template Syntax Standards

### 3.1 Control Flow (Angular Modern vs Legacy)
The project utilizes Angular's built-in block-based control flow (`@if`, `@else`, `@for`) instead of legacy directive-based controls (`*ngIf`, `*ngFor`).

#### Architectural Rationale
1. **Performance Optimizations**:
   - The native `@for` block requires a tracking expression (e.g. `@for (item of items; track item.id)`). This enforces best-practice DOM reconciliation. Tests show list rendering can be up to 90% faster compared to unoptimized `*ngFor` directives.
   - Reduced overhead on change detection cycles since control flow evaluations occur at compile-time block structures rather than runtime directive bindings.
2. **Simplified Imports**:
   - Built-in control blocks do not require importing `CommonModule`, `NgIf`, or `NgFor` in standalone components. This keeps the imports array clean and reduces component bundle overhead.
3. **Improved Developer Experience**:
   - The syntax aligns with JavaScript/TypeScript syntax blocks.
   - Provides much better type checking and type narrowing inside template blocks (e.g., automatically narrowing union types inside an `@if` block).

#### Syntax Examples

##### Conditional Rendering
*Legacy:*
```html
<div *ngIf="user.isLoggedIn; else guestTpl">
  Welcome back, {{ user.name }}
</div>
<ng-template #guestTpl>
  Please log in.
</ng-template>
```

*Modern (Standard):*
```html
@if (user.isLoggedIn) {
  <div>Welcome back, {{ user.name }}</div>
} @else {
  <div>Please log in.</div>
}
```

##### List Iteration
*Legacy:*
```html
<li *ngFor="let item of items; trackBy: trackById">
  {{ item.name }}
</li>
```

*Modern (Standard):*
```html
@for (item of items; track item.id; let idx = $index) {
  <li>{{ item.name }} (Index: {{ idx }})</li>
}
```
