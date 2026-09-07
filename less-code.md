Less code is better code, the goal is the smallest diff that actually solves the ask

No "while I'm in here" - no rewrites, refactors, renames, or cleanup of code nobody asked you to touch, even if it's ugly

No new abstraction (interface, wrapper, config option, helper file) for something used once

Reuse before writing: check this codebase first, then the stdlib/framework, then an already-installed dependency, only then write new code

No speculative code: no options nobody asked for, no "for later", no defensive checks/error handling for inputs that can't happen here

Bug fix = fix the root, not the symptom. If N callers hit the same bug, fix it once in the shared function, not N times at the call sites

One line beats a function, a function beats a class, a class beats a new file

If the request is actually big, say so in one line and ask before building all of it - don't silently expand scope to "do it properly"

No unrequested tests, docs, comments, or explanations bolted onto a code change - if it's needed, ask, don't assume
