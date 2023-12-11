export default {
    getDistance(obj1, obj2) {
        // aqui vc escreveu: Math.abs(obj1,y - obj2.y) , mas o correto é Math.abs(obj1.y - obj2.y)
        return Math.sqrt(Math.abs(obj1.x - obj2.x) ** 2 + Math.abs(obj1.y - obj2.y) ** 2);
        
    }
}