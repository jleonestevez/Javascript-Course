// Ejercicio 1
let arrowFunc = (x) => {
    return Object.keys(x).map((key) => x[key]);
};
const person = {
    name: "Juan",
    age: 30,
    profession: "Developer"
};
console.log(arrowFunc(person));
console.log("Eejercicio 1");
// Ejercicio 2
import { Exercise02 } from "./exercise02.js";
const exercise02 = new Exercise02();
console.log(exercise02.sumOrConcatenate(4, 3)); // 7
console.log(exercise02.sumOrConcatenate(4, "hello")); // 4:hello
console.log(exercise02.sumOrConcatenate("hello", "world")); //hello-world
// Ejercicio 3
// Ejercicio 4
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjO0FBSWQsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFVLEVBQTJCLEVBQUU7SUFDcEQsT0FBUSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxDQUFDLEdBQVksRUFBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQW9CLENBQUMsQ0FBQyxDQUFDO0FBQzVFLENBQUMsQ0FBQTtBQUVELE1BQU0sTUFBTSxHQUFZO0lBQ3BCLElBQUksRUFBRSxNQUFNO0lBQ1osR0FBRyxFQUFFLEVBQUU7SUFDUCxVQUFVLEVBQUUsV0FBVztDQUMxQixDQUFBO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBRzNCLGNBQWM7QUFFZCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsTUFBTSxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztBQUVwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7QUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO0FBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYTtBQUV6RSxjQUFjO0FBRWQsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEVqZXJjaWNpbyAxXG5cbmltcG9ydCB7SXBlcnNvbn0gZnJvbSBcIi4vaVBlcnNvblwiO1xuXG5sZXQgYXJyb3dGdW5jID0gKHg6IElwZXJzb24gKTogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPiA9PiB7XG4gICAgcmV0dXJuICBPYmplY3Qua2V5cyh4KS5tYXAoIChrZXkgOiBzdHJpbmcgKSA9PiB4W2tleSBhcyBrZXlvZiBJcGVyc29uXSk7XG59XG5cbmNvbnN0IHBlcnNvbjogSXBlcnNvbiA9IHtcbiAgICBuYW1lOiBcIkp1YW5cIixcbiAgICBhZ2U6IDMwLFxuICAgIHByb2Zlc3Npb246IFwiRGV2ZWxvcGVyXCJcbn1cbmNvbnNvbGUubG9nKGFycm93RnVuYyhwZXJzb24pKTtcbmNvbnNvbGUubG9nKFwiRWVqZXJjaWNpbyAxXCIpXG5cblxuLy8gRWplcmNpY2lvIDJcblxuaW1wb3J0IHtFeGVyY2lzZTAyfSBmcm9tIFwiLi9leGVyY2lzZTAyLmpzXCI7XG5cbmNvbnN0IGV4ZXJjaXNlMDIgPSBuZXcgRXhlcmNpc2UwMigpO1xuXG5jb25zb2xlLmxvZyhleGVyY2lzZTAyLnN1bU9yQ29uY2F0ZW5hdGUoNCwgMykpOyAvLyA3XG5jb25zb2xlLmxvZyhleGVyY2lzZTAyLnN1bU9yQ29uY2F0ZW5hdGUoNCwgXCJoZWxsb1wiKSk7IC8vIDQ6aGVsbG9cbmNvbnNvbGUubG9nKGV4ZXJjaXNlMDIuc3VtT3JDb25jYXRlbmF0ZShcImhlbGxvXCIsIFwid29ybGRcIikpOyAvL2hlbGxvLXdvcmxkXG5cbi8vIEVqZXJjaWNpbyAzXG5cbi8vIEVqZXJjaWNpbyA0XG4iXX0=