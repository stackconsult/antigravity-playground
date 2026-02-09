# Antigravity Comprehensive Workflow

This document defines the end-to-end lifecycle for professional automation projects built with the Antigravity framework, spanning from ideation to multi-platform deployment.

---

## 1. Ideation & Planning
- **Goal**: Define the core value proposition and automation logic.
- **Workflow**:
    - Trigger `PLANNING AGENT` to generate `PLAN.md` in `.antigravity/context/`.
    - Perform "Gap Audit" using **Skill 6: `integrity_check`**.

## 2. Structure & Implementation
- **Goal**: Build the core logic and user interface.
- **Workflow**:
    - **Back-end**: Build Node.js modules for logic.
    - **Front-end**: Develop UI components.
    - **Feature Branching**: Use **Skill 5: `git_feature_workflow`**.
    - **Skill Application**: Leverage `.antigravity/skills/` for recurring patterns.

## 3. Integration & Electron Transition
- **Goal**: Convert the web/node project into a native desktop application.
- **Workflow**:
    - Trigger `SKILL: scaffold_electron_app`.
    - Implement `ipc_secure_bridge` for UI-Main communication.
    - Add native filesystem and system integration features.

## 4. Distribution & Deployment
- **Goal**: Package and sign the application for client delivery.
- **Workflow**:
    - Trigger `SKILL: package_electron_app`.
    - Configure `forge.config.js` for Code Signing (Apple Developer / Windows EV).
    - Deploy distributables to S3/CDN for auto-updates.

## 5. Maintenance & Updates
- **Goal**: Push new features and bug fixes to existing installations.
- **Workflow**:
    - Bump version in `package.json`.
    - Regenerate distributables and update `RELEASES` / `releases.json`.
    - Clients receive background updates via the auto-update infrastructure.
