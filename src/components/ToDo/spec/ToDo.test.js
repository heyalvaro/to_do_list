const {ToDo} = require('../ToDo');
describe('ToDo',()=>{
    it('has a default project',()=>{
        expect(ToDo.projects.list.length).toBeGreaterThan(0);
    });
    it('can add a Project',()=>{
        let name = 'test';
        ToDo.addProject(name);
        expect(ToDo.projects.names()).toContain(name);
    });
});