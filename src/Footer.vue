<template>
    <div class="my-4">
        <b-row class="text-center">
            <b-col cols="12">
                <h1 class="py-5">Nuestro día a día</h1>
            </b-col>
        </b-row>
        <b-row class="text-center footer" >
            <b-col cols="3">
                <b-row>
                     <b-col cols="12">
                         <a href="https://www.facebook.com/PeonyFloristeria/" target="blank">
                        <font-awesome-icon :icon="['fab', 'facebook-square']" size="3x"  /></a>    
                    </b-col>
                    <b-col cols="12">
                        <h4 class="textoFooter">Facebook</h4>
                    </b-col>               
                </b-row>
            </b-col>
             <b-col cols="3">
                <b-row>
                     <b-col cols="12">
                        <a href="https://www.instagram.com/peony_floristeria/" target="blank">
                        <font-awesome-icon :icon="['fab', 'instagram-square']" size="3x"  /></a>       
                    </b-col>
                    <b-col cols="12">
                        <h4 class="textoFooter">Instagram</h4>
                    </b-col>            
                </b-row>
            </b-col>
            <b-col cols="3">
                <b-row>
                     <b-col cols="12">
                        <a href="https://pin.it/1jdnD6P" target="blank">
                        <font-awesome-icon :icon="['fab', 'pinterest-square']" size="3x"  /></a>
                    </b-col>
                    <b-col cols="12">
                        <h4 class="textoFooter">Pinterest</h4>
                    </b-col>
                    
                </b-row>
            </b-col>
            <b-col cols="3">
                <b-row>
                     <b-col cols="12">
                        <a href="https://vm.tiktok.com/ZMeGCjrYX/" target="blank">
                        <font-awesome-icon :icon="['fab', 'tiktok']" size="3x"  /></a>
                    </b-col>
                    <b-col cols="12">
                        <h4 class="textoFooter">TikTok</h4>
                    </b-col>
                    
                </b-row>
            </b-col>
        </b-row>
        <b-row class="text-center">
            <b-col cols="12">
                <h5 > <span> © Copyright Peony <strong>Floristería</strong></span> </h5>
            </b-col>
            <b-col cols="12">
                <h5 >Desarrollado por 
                <a class="shake" href="https://yosoy.digital/shakegp/" target="blank">
                Shake
                </a></h5>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>



<style lang="scss" scoped>

a{
    color: $texto;
    text-decoration: none;
}



</style>