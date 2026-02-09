# Core Skills Library

*Crystallized knowledge for recurring agent tasks.*

---

## Skill 1: `scaffold_production_repo`
**Trigger:** "Initialize project" or missing directory structure.

```bash
#!/bin/bash
mkdir -p .antigravity/context .antigravity/skills
mkdir -p .github/workflows docs src tests
touch AGENTS.md README.md
touch .antigravity/config.json .antigravity/mcp_registry.json
echo '{"autonomy_level": 1, "cost_budget": 5.00}' > .antigravity/config.json
```

---

## Skill 2: `context_compaction`
**Trigger:** Token usage > 20,000 or context confusion detected.

```bash
#!/bin/bash
# 1. Read execution log
cat .antigravity/context/execution.log

# 2. Agent generates summary (use LLM)

# 3. Write to summary.md
echo "[GENERATED SUMMARY]" > .antigravity/context/summary.md

# 4. Clear log
> .antigravity/context/execution.log

# 5. Reload only: summary.md + AGENTS.md
```

---

## Skill 3: `autonomous_fix_loop`
**Trigger:** CI failure or test failure.

```bash
#!/bin/bash
# 1. Capture error
npm test 2>&1 | tail -50 > /tmp/error.log

# 2. Agent reads error, generates hypothesis

# 3. Apply minimal patch

# 4. Verify
npm test

# 5. Amend if successful
git commit --amend --no-edit
```

---

## Skill 4: `skill_crystallization`
**Trigger:** Successfully completed a novel, complex task.

1. Abstract the specific steps into a generic template
2. Create new file: `.antigravity/skills/[skill_name].md`
3. Register in `config.json`
4. Notify: "I have learned a new skill: `[skill_name]`"

---

## Skill 5: `git_feature_workflow`
**Trigger:** Starting new feature development.

```bash
#!/bin/bash
FEATURE_NAME=$1

# 1. Create branch
git checkout -b feature/$FEATURE_NAME

# 2. Initialize plan
echo "# PLAN: $FEATURE_NAME" > .antigravity/context/PLAN.md

# 3. Log start
echo "[$(date)] START: $FEATURE_NAME" >> .antigravity/context/execution.log
```

---

## Skill 6: `integrity_check`
**Trigger:** Phase 0 of bootloader or periodic health check.

```bash
#!/bin/bash
echo "=== Integrity Check ==="

# Check directories
for dir in .antigravity docs src tests; do
  if [ -d "$dir" ]; then
    echo "✅ $dir exists"
  else
    echo "❌ $dir MISSING"
  fi
done

# Check files
for file in AGENTS.md README.md .antigravity/AGENT_OS.md; do
  if [ -f "$file" ]; then
    echo "✅ $file exists"
  else
    echo "❌ $file MISSING"
  fi
done

echo "=== Check Complete ==="
```
