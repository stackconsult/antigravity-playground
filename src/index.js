/**
 * Antigravity Ground Zero - Core Entry Point
 * 
 * This file demonstrates the basic state machine logic of an Antigravity Agent.
 * It acts as a live demonstration of the ASDLC (Explore, Plan, Execute, Reflect).
 */

const fs = require('fs');
const path = require('path');

function bootSequence() {
    console.log('🚀 Antigravity Boot Sequence Initiated...');

    // Check for Kernel
    if (fs.existsSync(path.resolve(__dirname, '../AGENTS.md'))) {
        console.log('✅ Kernel (AGENTS.md) LOADED');
    } else {
        console.log('❌ Kernel MISSING');
        process.exit(1);
    }

    // Check for Brain
    if (fs.existsSync(path.resolve(__dirname, '../.antigravity/config.json'))) {
        const config = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../.antigravity/config.json'), 'utf8'));
        console.log(`✅ Brain ACTIVE (Level: ${config.autonomy_level})`);
    } else {
        console.log('❌ Brain OFFLINE');
        process.exit(1);
    }

    console.log('🏁 Framework Ready for Operation.\n');
}

bootSequence();
