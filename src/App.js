import { Notifyer } from './Notifyer.js'
import { Timer } from './Timer.js'
import { Emitter } from './Emitter.js'

const App = {
   async start(){
      try {    
         
       await Notifyer.init()

       Emitter.on('countdown-start', () =>{
         Notifyer.notify({
            title: "Hora do Post",
            body: "Crie um conteudo novo!"
        })

       })

     

      Emitter.on('countdown-end', () =>{
         Timer.init()
      })

      Timer.init(0.4 * 60)

      } catch (error) {
          console.log(error.message)
      }
    }

}

export { App }