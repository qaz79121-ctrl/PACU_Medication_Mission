import test from 'node:test'; import assert from 'node:assert/strict';
import { STAGES, scorePercent, recordChoiceAttempt, createChoiceQuestion } from '../src/game.js';
test('stages are 6 12 18 37',()=>assert.deepEqual(STAGES,[6,12,18,37]));
test('score is capped at 100',()=>assert.equal(scorePercent(45,37),100));
test('first wrong retries; second reveals',()=>{let s={correctId:'a',wrong:0}; let r=recordChoiceAttempt(s,'b'); assert.equal(r.status,'retry'); r=recordChoiceAttempt(r.state,'c'); assert.equal(r.status,'reveal')});
test('choice question has 4 unique choices',()=>{let pool=['a','b','c','d','e'].map(id=>({id}));let q=createChoiceQuestion(pool[0],pool);assert.equal(new Set(q.choices.map(x=>x.id)).size,4);assert(q.choices.some(x=>x.id==='a'))});
