import test from 'node:test'; import assert from 'node:assert/strict'; import fs from 'node:fs'; import { MEDICATIONS } from '../src/medications.js';
test('contains 37 unique medication records',()=>{assert.equal(MEDICATIONS.length,37);assert.equal(new Set(MEDICATIONS.map(x=>x.id)).size,37)});
test('all image files exist',()=>MEDICATIONS.forEach(m=>assert(fs.existsSync(new URL('../'+m.image,import.meta.url)))));
