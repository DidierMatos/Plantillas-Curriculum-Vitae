<template>
  <!-- <span>euuuuu</span> -->
  <v-content>
   <v-card id="cardcenter" width="600px">
     <!-- <h3 class="text-md-center"><b>Ingresa un texto y ve la traducción inmediatamente</b></h3> -->
      <v-layout row wrap px-3>
        <!-- :rules="rules.required" -->
        <v-select
          v-model="select.traductores"
          :items="traductores"
          label="Porfavor selecciona un traductor"
          required
          >
        </v-select>
      </v-layout>

      <v-layout row wrap px-3 v-if="select.traductores == 'Texto a Morse'">
        <!-- <v-card-text> -->   
         <v-flex xs12 sm6 pb-1 px-3>
            <v-textarea 
              v-model="input"
              label="Texto"
              @input = textMorse(input)
              hide-details>
            </v-textarea>
          </v-flex>
          
          <v-flex xs12 sm6 pb-1 px-3>
            <v-textarea 
              v-model="output"
              label="Traducción Morse"
              hide-details>
            </v-textarea>
          </v-flex>
          
          <v-flex>
          <!-- <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              
              @click="clean"
            >
              <v-icon>refresh</v-icon>Reiniciar
            </v-btn>
          </v-card-actions> -->
          </v-flex>

        <!-- </v-card-text> -->

      <!-- <v-layout row wrap>
          <v-flex xs12 sm3 pr-2 px-3>
            <v-textarea 
              v-model="output"
              label="Salida"
              hide-details>
            </v-textarea>
          </v-flex>
      </v-layout> -->

              
    </v-layout>

    <v-layout row wrap px-3 v-else-if="select.traductores == 'Morse a Texto'">
      
      <!-- <v-btn @click="morseText();">hey</v-btn> -->

          <v-flex xs12 sm6 pb-1 px-3>
            <v-textarea 
              v-model="input2"
              label="Código Morse"
              @input = morseText(input2)
              hint="Recuerda dar un espacio por cada código"
              >
            </v-textarea>
          </v-flex>
          
          <v-flex xs12 sm6 pb-1 px-3>
            <v-textarea 
              v-model="output2"
              label="Traducción a texto"
              hide-details>
            </v-textarea>
          </v-flex>



    </v-layout>

    <v-img px-3 pr-3 py-3
                    src="https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/8564424/cc3b3digo-morse-site.jpg?1478588923"
           
                  >
    </v-img>

  </v-card>
  </v-content>



</template>

<script>

export default {

  data: () => ({

      input: null,
      output: null,
      input2:null,
      output2:null,
      count: null,

      select:{

        traductores: null,


      },

        traductores: [
        'Texto a Morse',
        'Morse a Texto',
      ],
      
  }),



  methods: {

                clean:function(){
                  this.input = "";
                  this.output = ""
                },

                textMorse:function() {
                  // alert('function')
                  this.output = "";

                  var letters = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ .,?:-!1234567890";
                  var morse = new Array(
                  ".- ","-... ","-.-. ","-.. ",". ","..-. ",
                  "–. ",".... ",".. ",".--- ","-.- ",".-.. ",
                  "– ","-. ","–.– ","--- ",".–. ","–.- ",".-. ",
                  "... ","- ","..- ","...- ",".– ","-..- ",
                  "-.– ","–.. ",".- ","-... ","-.-. ","-.. ",". ","..-. ","–. ",".... ",".. ",".--- ",
                  "-.- ",".-.. ","– ","-. ","–.– ","--- ",".–. ",
                  "–.- ",".-. ","... ","- ","..- ","...- ",
                  ".– ","-..- ","-.– ","–.. ","  ",".-.-.- ",
                  "–..– ","..–.. ","---... ","-....- ","!",".---- ","..--- ","...-- ","....- ","..... ","-.... ","--... ","---.. ","----. ","----- ");
                  // form.output.value = "";
                  // var input = form.input.value;
                  // output = "";

                  
                  // var output = "";
                  // var count;
                  // var i;

                  for(this.count = 0; this.count < this.input.length; this.count++) {
                    var oneInput = this.input.charAt(this.count);
                    // alert("oneInput"+oneInput)
                      for (var i = 0; i < letters.length; i++) {
                        // alert("letters.chartAt(i)"+letters.charAt(i))
                        if (oneInput == letters.charAt(i)) {
                          this.output += morse[i];
                      break;
                        }
                      }
                   }
                  // form.output.value = output;
                  // alert(this.output)
                
                },


                morseText:function(input2){
                  
                  // alert(input2)
                  var letters = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ .,?:-!1234567890";
                  var arrayMorse = new Array(
                  ".- ","-... ","-.-. ","-.. ",". ","..-. ",
                  "–. ",".... ",".. ",".--- ","-.- ",".-.. ",
                  "– ","-. ","–.– ","--- ",".–. ","–.- ",".-. ",
                  "... ","- ","..- ","...- ",".– ","-..- ",
                  "-.– ","–.. ",".- ","-... ","-.-. ","-.. ",". ","..-. ","–. ",".... ",".. ",".--- ",
                  "-.- ",".-.. ","– ","-. ","–.– ","--- ",".–. ",
                  "–.- ",".-. ","... ","- ","..- ","...- ",
                  ".– ","-..- ","-.– ","–.. ","   ",".-.-.- ",
                  "–..– ","..–.. ","---... ","-....- ","!",".---- ","..--- ","...-- ","....- ","..... ","-.... ","--... ","---.. ","----. ","----- ");
                  
                  // var mensaje = ".- ..... .."
                  var morse = " "

                  // alert('MensajeSplit'+input2.split(" "))

                  var ArrayInputMorse = []

                  ArrayInputMorse = input2.split(" ")

                  // alert("??"+ArrayInputMorse)

                  var max = ArrayInputMorse.length;



                  // var splitMensaje = mensaje.split(" ")
                  // var splitM = "s" 
                  // splitM = splitMensaje

                  // alert("SLIT"+splitM)

                  // alert('splitMensaje'+splitMensaje)

                  // var max = splitMensaje.length;

                  // alert('max'+max)
                  // alert("mensaje.chart"+mensaje.charAt(0));


                  for(var i = 0; i < max; i++){
                    // if(ArrayInputMorse[i]!="  "){
                      var oneMorse = ArrayInputMorse[i]+" ";
                    // }else{
                      // var oneMorse = ArrayInputMorse[i]
                    // }
                    
                    // alert('onlyMorse'+oneMorse)

                    for(var j = 0; j < arrayMorse.length; j++){
                      // alert("arrayMorse[j]"+arrayMorse[j])
                      // alert('ArrayInputMorse[i]'+ArrayInputMorse[i])
                      // alert('arrayMorse[j]'+arrayMorse[j])

                      if(oneMorse == arrayMorse[j]){

                        morse = morse+letters[j];
                        this.output2 = morse;
                        // alert("morseTexto: " + morse)
		        			      break;

                      }
                    }
                  }

                  // alert("FIN morseTexto: " + morse)
                   this.output2 = morse


                  // return morse = morse.substring(1,morse.length());
                  // alert("split: "+mensaje.split(" "))

                }

  }

  
}
</script>

<style>

#cardcenter{
    /* position: absolute; */
    left: 50%;
    top: 54%;
    transform: translate(-50%, -50%);
}
/* 
#rightpos{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
} */

</style>