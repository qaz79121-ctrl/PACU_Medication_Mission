const KEY='pacu-med-mission-v1';
export function loadProgress(){try{return JSON.parse(localStorage.getItem(KEY))||{mistakes:[],best:null}}catch{return {mistakes:[],best:null}}}
function save(v){localStorage.setItem(KEY,JSON.stringify(v))}
export function saveMistake(id){const p=loadProgress();p.mistakes=[...new Set([...p.mistakes,id])];save(p)}
export function clearMistakes(){const p=loadProgress();p.mistakes=[];save(p)}
export function saveBestResult(r){const p=loadProgress();if(!p.best||r.score>p.best.score)p.best=r;save(p)}
