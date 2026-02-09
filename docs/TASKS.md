# docs/TASKS.md - Recurring Workflow Backlog

## Active Tasks
*None currently active.*

---

## Recurring Workflows

### Daily
- [ ] Run `npm test` to verify build integrity
- [ ] Check `.antigravity/context/execution.log` for anomalies

### On New Feature
- [ ] Create feature branch: `git checkout -b feature/[name]`
- [ ] Update `.antigravity/context/PLAN.md` with atomic steps
- [ ] Execute Phase 2 loop (code → lint → build → commit)
- [ ] Run full test suite
- [ ] Push and create PR

### On CI Failure
- [ ] Execute `SKILL 3: AUTONOMOUS FIX` from AGENT_OS.md
- [ ] If 3 attempts fail, escalate to human

### On Context Depletion
- [ ] Execute `SKILL 2: CONTEXT COMPACTION` from AGENT_OS.md
- [ ] Verify summary.md was created
- [ ] Continue with fresh context window

---

## Completed Tasks
*Archive of completed work.*

| Date | Task | Status |
|------|------|--------|
| 2026-02-08 | Framework Initialization | ✅ Complete |
| 2026-02-08 | Bootloader Protocol Added | ✅ Complete |
| 2026-02-08 | Gap Audit & Fixes | ✅ In Progress |
