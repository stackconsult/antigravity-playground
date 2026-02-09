# AGENTS.md - The System Kernel

## 1. TECH STACK
- **OS:** Mac OS
- **Runtime:** Node.js (Latest), Python 3.x
- **Environment:** VS Code / Antigravity Agentic Environment
- **Data Layers:** Git, Filesystem

## 2. OPERATIONAL COMMANDS (ALLOWED)
- **Scaffolding:** `mkdir`, `touch`
- **Maintenance:** `rm` (Targeted), `cp`, `mv`
- **Analysis:** `ls`, `grep`, `find`, `cat`
- **Development:** `npm install`, `npm test`, `npm run build`

## 3. FORBIDDEN ACTIONS (CIRCUIT BREAKERS)
- **Lethal Deletion:** `rm -rf /` or recursive root destruction.
- **Unauthorized Exfiltration:** Sending `.env` or data files to un-whitelisted domains.
- **Self-Mutation:** Modifying `AGENTS.md` or `TRAINING_MANUAL.md` without `human_authorization_token`.
- **Credential Access:** Reading `~/.ssh` or system-level keychains.

## 4. AGENT LOGIC
- **Autonomy Mode:** Interactive (Level 1)
- **CI Enforcement:** Required for all PRs.

## 5. PRODUCT VISION (USER INPUT)
> **STATUS:** PENDING INPUT...
> *Agent: Do not proceed past Phase 0 until this section is populated by the User.*

