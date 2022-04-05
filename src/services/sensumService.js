import Service from '@/services/Services';


export default {
    getPropiedades(){
        const propiedades = "/propiedades";
        return Service.get(propiedades);
    },
    getPortadas(){
        const portadas = "/portadas";
        return Service.get(portadas);
    }
}