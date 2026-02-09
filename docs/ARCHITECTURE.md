# docs/ARCHITECTURE.md - System Boundaries

## 1. DESIGN PHILOSOPHY
The Antigravity Framework is a **Deterministic State Machine**. Reliability is prioritized over speed.

## 2. COMPONENT BOUNDARIES
- **Kernel (`AGENTS.md`):** Fixed rules and environment definitions.
- **Memory (`.antigravity/`):** Short-term context and long-term skill crystallization.
- **Application (`src/`):** The logic being developed.
- **Truth (`tests/`):** The final authority on code correctness.

## 3. ASDLC WORKFLOW
1.  **Explore:** Identify files and context.
2.  **Plan:** Draft `PLAN.md` with atomic steps.
3.  **Execute:** Implementation with immediate verification (lint/build).
4.  **Reflect:** Post-mortem on failures and skill crystallization.

## 4. MCD TOOLS INTEGRATION
Tools are accessed via the `mcp_registry.json`. Any new tool must be vetted and registered before use in automated workflows.
