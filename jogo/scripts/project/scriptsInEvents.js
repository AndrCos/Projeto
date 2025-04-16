

const scriptsInEvents = {

	async Efase1_Event3_Act4(runtime, localVars)
	{
		//criando variavel local
		let vidas = runtime.globalVars.Vida;
		vidas --;
		
		//atualizando variavel local.
		runtime.globalVars.Vida = vidas;
		
		//pegando a instancia da sprite da vida 
		var sprite = runtime.getInstanceByUid(61);
		
		//criando variavel pra pegar a animação atual da aprite
		var actualAnimation = sprite.getAnimation;
		
		//tirando um coração da animação
		actualAnimation --;
		//setar animação subtraída ao layout.
		sprite.setAnimation(actualAnimation);
		
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
