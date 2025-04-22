const divData = document.getElementById("divData");
/**
 * Clase Person que representa a una persona y su informacion
 */
class Person {
    /**
     * @property {String} name
     * @property {String} email
     * @property {Number} age
     * @property {String} resume
     * @property {Number} id
     * @property {String} total
     */
    name = "";
    email = "";
    age = 0;
    resume = "";
    static total = 0;
    id = 0;
    /**
     * 
     * @param {String} name 
     * @param {String} email 
     * @param {Number} age 
     * @param {String} resume 
     */
    constructor(name, email, age, resume) {
        this.name = name.toUpperCase();
        this.email = email.toLowerCase();
        this.age = (age >= 18) ? age : 18;
        this.resume = resume;
        Person.total++;
        this.id = Person.total;
    }

    /**
     * Muestra una trajeta con la info de la persona
     * @param {JSON} div 
     */
    printInfo(div) {
        div.insertAdjacentHTML("beforeend",
            `
            <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${this.id}.- ${this.email}</div>
            <div class="card-body" id = cardbody_${this.id}>
            <h5 class="card-title">${this.name} - ${this.age} años</h5>
            <p class="card-text">${this.resume}</p>
            </div>
            </div>
            `
        );
    }
    
    /**
     * Cambia el valor de email
     * @param {String} email 
     */
    setEmail(email){
        /* regex.test(email) retorna un booleano */
        const regex = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
        
        /* Si no es un correo valido, entonces pone un correo default */
        this.email = (regex.test(email) ? email : "sincorreo@dominio.com"); 
    }
    
    /**
     * Muestra el total de clases creadas
     * @param {*} div 
    */
   static printTotal(div) {
       div.insertAdjacentHTML("afterbegin",
        `
            <div class = "alert alert-danger" role = "alert">
            Personas en total <strong>${Person.total}</strong>
            </div>
            `
        );
    }
} /* class Person */

/**
 * Clase que representa la empleabilidad de una clase Persona
 * @extends Person
*/
class Employee extends Person{
    department = "";
    salary = 0.0;
    /**
     * 
     * @param {String} name 
     * @param {String} email 
     * @param {Number} age 
     * @param {String} resume 
     * @param {String} department 
     * @param {Float} salary 
     */
    constructor(name, email, age, resume, department, salary) {
        super(name, email, age, resume);
        this.department = department;
        this.salary = salary;
    }

    /**
     * Muestra una trajeta con la info del empleado
     * @param {Json} div 
     */
    printInfo(div){
        super.printInfo(div);
        
        const cardbody = document.getElementById(`cardbody_${this.id}`);
        cardbody.insertAdjacentHTML("beforeend",
            `
            <p class="card-text">Departamento: ${this.department}</p>
            <p class="card-text">Salario: $${this.salary} MXN</p>
            `
        )

    }
} /* class Employee */


/* ========================================= */

const employees = new Array();

employees.push (new Employee(
    "El Bruno bb",
    "seccion891@gmail.com",
    20,
    "El papá de los pollitos",
    "Development",
    450.0
));

employees.push (new Person(
    "Daniel",
    "renegulGG8809@gmail.com",
    22,
    "Java JR FullStack Developer"
));

employees.push (new Employee(
    "Raúl",
    "renegulGG8809@gmail.com",
    13,
    "Java JR FullStack Developer",
    "Development",
    350.0
));

employees.push (new Employee(
    "Gaby",
    "gabriela1999@gmail.com",
    20,
    "Ella es Java JR FullStack Developer",
    "Development",
    350.0
));


/* Mostrar a todas las personas/empleados */
employees.forEach(emp => {
    emp.printInfo(divData);
});
