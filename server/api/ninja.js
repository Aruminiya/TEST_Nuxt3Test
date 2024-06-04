export default defineEventHandler(async (event) => {
    if(event.method === 'GET') {
        // GET 請求
        const name = getQuery(event).name || '你好！';
        return {
            message: `Hello, ${name}`
        }
    } else if (event.method === 'POST') {
        // POST 請求
        const name = getQuery(event).name || '你好！';
        const { age } = await readBody(event);
        
        return {
            message: `Hello, ${name}, 你的年紀是 ${age}`
        }
    }
    

})