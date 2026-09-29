export const STAGES=[6,12,18,37];
export function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
export function scorePercent(points,max){return max<=0?0:Math.min(100,Math.max(0,Math.round(points/max*100)))}
export function createMatchingRound(meds){return shuffle(meds.flatMap(m=>[{key:m.id+'-img',id:m.id,type:'image',med:m},{key:m.id+'-txt',id:m.id,type:'text',med:m}]))}
export function createChoiceQuestion(target,pool){const others=shuffle(pool.filter(x=>x.id!==target.id)).slice(0,3);return {target,correctId:target.id,choices:shuffle([target,...others]),wrong:0}}
export function recordChoiceAttempt(q,answerId){if(answerId===q.correctId)return {status:'correct',state:q};const state={...q,wrong:(q.wrong||0)+1};return {status:state.wrong>=2?'reveal':'retry',state}}
