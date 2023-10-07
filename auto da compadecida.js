async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`João Grilo: Hoje à noite na paroquia de Taperoá vai passar a paixão de cristo!
Chicó: Um filme de aventura, que mostra um cabra sozinho desarmado, enfrentando o império
romano todinho
João Grilo: não percam, a história de um vivente que é Deus e homem ao mesmo tempo!!!
Chicó: um filme de mistério, cheio de milagres e acontecimentos de outro mundo!!!
Pessoas entrando
João Grilo: Se jesus soubesse o mundanismo e a canalhice de uma certa qualidade de padre
de hoje em dia, era capaz dele sacudir essa cruz fora e subir direto pro céu
Chicó: Olha a falta de respeito rapaz
João Grilo: A jesus morreu pelos pobres chico, a gente pode se permitir certas intimidades
Chicó: A gente não, não me meto em confusão com povo do Céu, já chega as que você me
mete aqui na terra
João Grilo: Isso é que é ser mal agradecido, quem que foi que arrumou esse emprego de
passar filme?
Maquina quebra
Chicó: Vala-me nosso senhor jesus cristo!!!
João Grilo: Quebrou!!! Vai ter que apelar pra outro chico!!!
Chicó: To ferrado Joao, o que a gente faz?
João Grilo: A gente não, não me meto em suas confusão, quem mandou tu arranjar esse
emprego de passador de filme?
Chicó: Vamo devolver esse dinheiro
João Grilo: Que devolver uma pinoia, que assim eu perco minha porcentagem, e eles já não
viram quase o filme todo?
Chicó: Mas eles não viram o final homi!!!
João Grilo: Ochi que que tem? O final dessa história todo mundo conhece
Chicó: É, mas pelo jeito tão querendo ver de novo
João Grilo: Calma minha gente que aperreio é esse? N aconteceu nada chico parou o filme pq
quis não foi chico? E parou pq foi o padre Joao mesmo que pediu!!! N foi padre Joao?
Padre: É.... ah... é...
João Grilo: Então. E pq foi que padre João parou o filme no momento mais emocionante que é
a crucificação?
Padre: É.… ah... é...
João Grilo: exatamente!!! Pq agora vocês vão ver ele aqui mesmo na igreja!!! E não é em tela
de cinema não.... E quem vai nos mostrar é o padre João, ne padre João?
Padre: É.… então....
João Grilo: Pois é.… todo mundo para a igreja que o padre João vai rezar a missa, que
representa o sacrifício de Jesus que morreu na cruz coitado pra nos salvar!!!
Padre: E João disse que como oferenda vai dar todo dinheiro que recebeu por ter trabalhado
hoje, neh João?
Saem todos 
Padeiro: Já te falei Dorinha, já é a terceira vez que o povo vem comprar pão aqui e ainda não ta
assado!!! Por isso preciso de ajuda aqui na padaria!
Dorinha: Contrate alguém então homi
Chicó: o de casa
Padeiro: o de fora, quem é?
Chicó: Sou eu! Ouvi dizer que o senhor ta precisando de ajudante
Padeiro: Porque? Os dois querem ajudar é?
Chicó: Sim
Padeiro: Pois pode ajudar, porque ajuda e dinheiro são duas coisas totalmente diferentes
Chicó: Quanto o senhor paga?
Padeiro: To te fazendo o favor de deixar você me ajudar, queria mais oq?
João Grilo: N falei que vc tinha cara de besta
Dorinha: Ta parado é?
João Grilo: E doido pra ajudar!!!
Dorinha: O emprego é seu!!
Padeiro: Tudo bem o emprego é seu...
João Grilo: e quanto é o salário?
Dorinha: O salário é pouco...
Padeiro: Mas em compensação... o serviço é muito
João Grilo: Serviço muito tem que ter dois ajudantes
Padeiro: Só se for pelo preço de um
João Grilo: Quanto é o preço de um?
Dorinha: 5 tostões
Padeiro: 5 tostões
João Grilo: 5 tostões ta bom pra tu chico?
Chicó: Pra mim ta
João Grilo: Então vamo fazer essas conta. Chico trabalha por 2, ganha 5 tostões que é o preço
de um e cuida de uma metade e eu trabalho por mais 2 ganho mais 5 tostões que é o preço de
outro e dou conta da outra metade!
Padeiro: Nada disso, eu falei 2 pelo preço de 1
João Grilo: Mas o senhor ta ganhando 4 pelo preço de 2 que vem a dar no mesmo patrão!
Padeiro: I é?
Dorinha: É! N sabe fazer conta?
Padeiro: Então ta fechado
Chicó: Tu ta é doido? Agora cada um de nois vai ter que trabalhar por 2!!!
João Grilo: Eu esqueci de dizer que um dos meus 2 é um cara preguiçoso danado que so faz é
dormir o tempo todo
Chicó: E o outro
João Grilo: ah o outro é muito trabalhador... mas não veio hoje
Dorinha: Vai minha bichinha come
João Grilo: Desculpa perguntar, mas a senhora fala com cachorra?
Dorinha: Falo sim, porque?
Chicó: E ela escuta
Dorinha: Escutar ela escuta, mas não me dá ouvidos, desde hoje que eu digo pra essa danada
comer e ela nada
João Grilo: Se ela não quiser eu quero
Dorinha: A pobrezinha não comeu quase nada hoje...
João Grilo: Então ta melhor que nois que não comeu nem o quase!!!
Dorinha: De manhã cedo comeu só um cuscusinho com leite
Chicó: Ai cuscusinho com leite
Dorinha: Um tequim assim de macaxeira
João Grilo: Ai tequim assim de macaxeira
Dorinha: E um tiquinho de galinha guisada
Chicó: Ai uma galinha guisada
Dorinha: quando foi pras 10 horas, comeu uma tijelinha de papa, coisa pouca mas so pq adulei
muito
João Grilo: se n quiser adular também n tem problema, a gente come do mesmo jeito
Dorinha: ah seus cara lisa!!! Vocês n já tem a comida de vocês? A gente serve do bom e do
melhor e ainda vem um povo desse com caralhice
João e chico trocam a comida com a cachorra
João Grilo: Bife passado na manteira chico!!!
Chicó: N sei se como logo ou se fico olhando mais um bocadinho...
Cachorra começa a gritar
Chicó: João, ta dando uma pinoia na cachorra!!!
João Grilo: Ta com a gota!!!, deve ter sido a comida
Chicó: Vala-me Deus, será que a nossa comida tava envenenada?
João Grilo: Demência!!! Pra quem só come filé, nossa gororoba é veneno!!!
Chicó: Acho melhor você ir ligeiro da a noticia pra patroa 
Dorinha: Ave maria, o que aconteceu com minha filha, acode aqui que minha cachorrinha ta
doente!!! Valei-me meu santo... qual é o santo que cuida dos cachorro?
João Grilo: Eu tenho pra mim que é são Francisco que é o santo que falava com os bixo...
Dorinha: Valei-me meu são Francisco de... é de Pádoa ou Assis?
João Grilo: Ai eu já não sei, melhor perguntar pro padre
Dorinha: Isso!!! Va chamar padre João para benzer minha cachorrinha!!!
Chicó: Benzer?
Dorinha: Éee
João Grilo: O bispo ta pra chegar, tenho certeza que padre João não vai querer benzer a
cachorra
Chicó: Mas benzer bixo não tem nada demais... eu mesmo já tive um cavalo bento
João Grilo: Que isso chico? Já estou ficando por aqui com suas histórias, é sempre uma coisa
toda esquisita... e quando se pede uma explicação só sabe dizer: não sei, só sei que foi assim...
Chicó: Mas se eu tive o cavalo meu deus, vou fazer oque? Dizer que não tive? Vou mentir?
João Grilo: Mas e seu cavalo bento? Como foi?
Chicó: Ah... cavalo bom como aquele... nunca tinha visto. Uma vez corremos atrás de uma
carroça das 6 da manhã as 6 da noite sem parar nenhum momento!!! Comecei a correr a
ribeira de Taperoá na Paraíba, pois bem com 2 pés já tava em Sergipe.
João Grilo: Kkkkkkkk Sergipe, e o rio são Francisco chico?
Chicó: La vem você com sua mania de pergunta João
João Grilo: E eu tenho que saber!!! Como foi que você passou?
Chicó: Eu não disse que o cavalo era bento? Por isso que não me admiro mais de nada!!!
João Grilo: Agora chega de besteira chico!!! Vamo logo falar com o padre
Padre: Uma cachorra?
Chicó: Sim
Padre: Pra eu benzer?
Chicó: Sim
Padre: Que maluquice, que besteira!!!
João Grilo: Cansei de dizer pra chico que o senhor n benzia...
Padre: N benzo de jeito nenhum!!!
Chicó: Mas padre, não vejo nada de mal em se benzer o bixo
João Grilo: No dia que chegou o motor novo de major Antônio Moraes, o senhor não benzeu?
Padre: Motor é diferente, é coisa que todo mundo benze..., mas cachorra eu nunca ouvi falar!!
Não benzo e pronto
João Grilo: É chico, o padre tem razão... quem vai ficar engraçado é ele, que uma coisa é
benzer o motor do major Antônio Moraes, outra coisa é benzer a cachorra do major Antônio
Moraes
Padre: Como?
João Grilo: Eu disse que uma coisa é o motor, a outra é a cachorra do major Antônio Moraes
Padre: Menino!!! E o dono da cachorra que vocês estão falando é Antônio Moraes?
João Grilo e Chicó: É
João Grilo: Eu não queria vir, com medo que o senhor se zangasse, mas o major é rico e
poderoso e to trabalhando na fazenda dele, com medo de perder meu emprego, fui forçado a
obedecer... mas eu disse a chico, o padre vai se zangar!!!
Padre: Zanga nada João!!!! Quem é o ministro de deus pra ter o direito de se zangar?
João Grilo: Quer dizer que benze não é?
Padre: Você oque que acha?
Chicó: Acho nada de mais
Padre: nem eu, n vejo mal nenhum em se abençoar as criaturas de Deus...
João Grilo: então fica tudo na paz do senhor, com a cachorra benzida, e todo mundo
satisfeito!!!
Padre: Diga a major que venha, diga que estou esperando!!!
Major: EURICO, SEU ENGOLE COBRA, CABRA FROOOCHO!!! 
Padeiro: Seu Antônio Moraes! A quanto tempo não aparece em nossa cidade!
Major: Isso aqui ta pior que merda de cachorro, só venho por obrigação.
Padeiro: E a que devemos a honra?
Major: Se alembra da minha filha rosinha? 
Padeiro: Osh é claro!!! Cabelo liso, olhos pretos, ombros fortes, seios fartos, cintura...
Major: Continua que você se lasca
Padeiro: Major, com todo respeito, porque quando ela saiu daqui ainda era uma menina
Major: Pois então, rosinha anda meio adoentada e ta vindo do recife pra descansar na fazenda
João Grilo: Ave maria, o que a gente faz chicó?
Chicó: Eu sei la eu, não tenho nada a ver com isso
João Grilo: Por nossa senhora!!! Vamo la impedir o homi de se encontrar com o padre!
Chicó: Você que inventou essa história, agora que resolva 9
João Grilo: Mas você também foi la comigo, encomendar a morte da cachorra, agora vamo la?!
Chicó: Vou nada!!!
João Grilo: mas vamo chicó!!! Você ta acostumado com essas coisas, já teve até cavalo bento!
Chicó: Acontece que major pode ter alguma coisa de cavalo, mas de bento ele não tem é nada
João Grilo: Ora viva seu major Antônio Moraes, quanto tempo, como vai a vossa senhoria?
Major: Do jeito que você ta vendo
João Grilo: Bem demais, veio procurar o padre?
Major: Ta perguntando muito!!!
João Grilo: Se a vossa senhoria quer, eu posso chama-lo
Major: Se eu quisesse já tinha mandado
João Grilo: É que eu queria avisar a vossa senhoria pra não se espantar, é que o padre ta meio
doido
Major: O padre? Doido?
João Grilo: É kkk o padre está de um jeito que n respeita mais ninguém, ta com uma mania de
benzer tudo e chamar o outros de cachorro!!! Até meu patrão o padeiro ele chamou de
cachorro de disse que mesmo assim iria benze-lo
Major: Isso porque era com seu patão, comigo é diferente
João Grilo: Vossa senhoria me desculpe, mas eu penso que não
Major: E porquê?
João Grilo: Digo isso porque ouvi o padre dizer: aquele cachorro só porque é amigo do major
pensa que é alguma coisa
Major: Que história é essa? Você tem certeza?
João Grilo: Certeza plena! Esta doidinho o pobre padre
Major: É isso o que vamos ver
Severino: Uma esmolinha pra ajudar um pobre que não tem o que comer
Major: Va arranjar um serviço pra fazer
Severino: Posso trabalhar não meu patão, só tenho um olho
Major: Use o outro e vá trabalhar na feira
Padre: Olha quanta honra, major Antônio Moraes!!! Mas o que o trouxe aqui? Não me diga eu
já sei, a bixinha está doente...
Major: Já sabia?
Padre: É.… as coisas se espalham num instante sabe... já está fedendo?
Major: Fedendo? Como é que é?
Padre: É modo de dizer major, digo isso com todo respeito, temos que respeitar as criaturas de
deus mesmo que sejam da mais baixa qualidade
Major: BAIXA QUALIDADE? É O QUE? SEMPRE RESPEITEI MUITO A IGREJA, MAS TUDO TEM
LIMITE
Padre: Mas o que eu falei de mal?
Major: Mais baixa qualidade... você fique sabendo que meu nome é Antônio Noronha de brito
Moraes e esse Noronha de brito veio do conde nas caravelas!!!
Padre: E os da bixinha na certa vieram nas caravelas também, não é?
Major: É claro, se é meu antepassado é dela também... você ta querendo insinuar que a mãe
dela era uma...
Padre: Uma cachorra
Major: O QUE?
Padre: Uma cachorra
Major: REPITA
Padre: Eu não vejo mal nenhum em repetir ela não era mesmo uma cachorra?
Major: Eu só não lhe mato porque você é padre e está louco, eu vou me queixar ao bispo!!!
João Grilo: Agora danou-se chico!!! Major vai falar com o bispo
Chico: Não tenho nada a ver com isso João... Esse negócio todo me deu uma fome do
caramba... lembro de um dia que eu estava amarelo de fome e fui caçar na beira do rio... pego
quase mais de 15 pacas pra comer...
João Grilo: Estou quase te pegando na mentira
Chico: Osh, quando foi que já me viu mentindo?
João Grilo: Nunca vi, só ouvi
Chico: Você devia tá lá pra ver
João Grilo: A mentira?
Chico: Não homi, as paca... eu tava no canto do riacho onde as paca atravessa... é tanta paca,
tanta paca que a trilha delas fica marcada na agua,
João Grilo: Osh e agua é barro pra ficar com caminho marcado?
Chico: N sei, só sei que foi assim 
Eu tava lá tocaiando quando apareceu mais de 30 paca
João Grilo: Você tinha falado mais de 15
Chico: Ochente homi e 30 não é mais que 15?
João Grilo: Ta certo, eu vou calar minha boca pra n espantar suas paca
Chico: E é melhor mesmo, pois apontei pro buxo da paca e puxei o gatilho e de repente
apareceu na minha frente a égua do major Antônio Moraes, se eu mato a égua dele o major
me mata, ai pensei, vou dar um jeito nisso!!!
João Grilo: Que jeito se já tinha puxado o gatilho homi?
Chico: Tudo isso eu pensei e fui ligeiro, mais ligeiro ainda eu tapei a boca da espingarda com a
mão pro tiro n sair, chega a bixa ficou assim ó hmmm hmmm hmmm , quando soltei a bala, as
paca já tinha ganhado mato!!
João Grilo: Ta bom chico... chega disso, vamo logo pra padaria antes que a gente arrume mais
problema...
Dorinha: Ai minha cachorrinha!!! Aiaiaiaiaiaiai
João Grilo: Aiaiaiaiaiai
Chico: Aiaiaiaiaiai
Padre: Todos devem se resignar
Dorinha: Se o senhor tivesse benzido a bixinha, a essas horas ainda tava viva!!!
Padre: Oh mas quem sou eu?....
Dorinha: Mas tem uma coisa padre... agora o senhor vai enterrar a cachorra!!!
Padre: Enterrar a cachorra?
Dorinha: Vai enterrar, e tem que ser em latim!!! De outro jeito não serve, não é?
Padeiro: É, em latim não serve
Dorinha: Em latim é que serve
Padeiro: É, em latim é que serve
Padre: Vocês estão loucos? Não enterro de jeito nenhum!!!
Dorinha: Esta cortado o rendimento da irmandade!
Padre: NÃO ENTERRO!
Padeiro: Esta cortado o rendimento da irmandade!
Padre: NÃO ENTERRO!
Dorinha: Meu marido considera-se demitido da presidência
Padre: NÃO ENTERRO!
Padeiro: Me considero demitido da presidência!
Padre: NÃO ENTERRO!
Dorinha: A VACA QUE DOEI PRA PRA IGREJA PRA DAR LEITE!!! VAI VOLTAR IMEDIATAMENTE!!!
Padre: O mulher sem coração...
Dorinha: Sem coração? Eu que não quero ver minha cachorrinha ser comida pelos urubus...
ENTERRA OU NÃO ENTERRA?
Padre: Eu até enterrava, mas com o bispo não tem conversa!!!
Dorinha: Domingo vamos a igreja, pegar todo dinheiro com o vigário!!!!
Padre: O mulher desalmada...
Severino: Uma esmolinha para um homem aleijado do olho
Padeiro: E FOI EU QUE FUREI SEU OLHO?
Severino: Foi não senhor...
Padeiro: E então suma da minha frente, e se quiser lhe furo o outro pra eu ter obrigação de te
dar esmola!!!
Padeiro: Ai meu deus... Dorinha vai ficar chorando o dia todo
João Grilo: Se o senhor me desse carta branca eu arranjaria o enterro...
Padeiro: Pois já tem a carta branca!!!
João Grilo: Posso gastar o que eu quiser?
João Grilo: O padre João
Padre: Que foi?
João Grilo: A patroa mandou buscar a vaquinha que te emprestou
Padre: Oh mulher desalmada, se eu pudesse eu enterrava o cachorro, o papagaio, o diabo, mas
acontece que o bispo ta ai!!!
João Grilo: É padre joão, esse povo é todo doido... pensa que bicho é gente... a cachorra tinha
até um testamento em que deixava uma parte do dinheiro pro padre
Padre: Cachorro com testamento?
João Grilo: Dorinha tinha uma cachorra inteligente. Nos últimos tempos, antes de morrer, ela
ficava com os olhos vem compridos toda vez que o sino batia, até que meu patão entendeu
que ela queria ser enterrada, e como ela era católica, fez meu patrão prometer que em troca
do enterro dela deixaria 3 contos de reis pra igreja...
Padre: que animal inteligente! Que sentimento nobre
João Grilo: Mas agora não adianta mais... a cachorrinha vai ser comida pelos urubus...
Padre: Uma criatura de Deus não pode ser comida por urubus, vem comigo!!!
Padre: Não esperava a vossa reverendice aqui agora
Bispo: Deixe disso, “passon” como dizem os franceses. Mas ah coisas que eu não posso deixar
passar com essa facilidade
Padre: Não estou entendendo
Bispo: Pois entenderá quando eu disser que Antônio Moraes veio falar comigo
Padre: Antônio Moraes falou com o senhor?
Bispo: Falou, justamente para reclamar do seu procedimento para com ele
Padre: Não entendo o que vossa reverendíssima quer dizer
Bispo: Eu não vejo problema nenhum de entender isso padre João. Ele veio reclamar da sua
brutalidade para com ele
Padre: Como é?
Bispo: VAMO DEIXAR DE BRINCADEIRA PADRE JOÃO!!! O SENHOR SABE PERFEITAMENTE A QUE
ESTOU ME REFERINDO!!! PORQUE CHAMOU A MULHER DELE DE CACHORRA!
Padre: Eeeeeu?
Bispo: SIM O SENHOR
Padre: Eu juro que nunca chamei a mulher dele de cachorra
Bispo: Chamou ou não chamou padre João?
Padre: Não chamei seu bispo
Bispo: Chamou padre João?
Padre: Não chamei seu bispo
Bispo: CHAMOU PADRE JOÃO?
Padre: Chamei seu bispo...
Bispo: Mas a final de contas, o senhor chamou ou não chamou?
Padre: Eu não chamei, mas se o senhor está dizendo, é porque sabe mais do que eu
Bispo: Mas não é verdade que ele veio lhe pedir para que o senhor o abençoasse a filha e o
senhor chamou a mulher dele de cachorra?
Padre: A filha?
Bispo: Sim, a filha
Padre: É a filha que ele queria abençoar?
Bispo: E não é isso que estou dizendo?
Padre: O grilo tinha me dito que era a cachorra...
Bispo: Grilo? Padre João, o senhor está querendo brincar comigo? Que história é essa de grilo
com cachorra?
Padre: Vossa reverendíssima me perdoe, mas agora eu entendo tudo!!!
Bispo: Agora quem não está mais entendendo sou eu...
Padre: Seu safado!!!!
João Grilo: Mas porque é que o senhor ta me chamando de safado?
Padre: Porque você é um safado!!!
João Grilo: Pois esqueceram de colocar isso na minha certidão
Padre: Agora você vai ter que explicar tudo pro bispo, o porque você me falou que a cachorra
de Antônio Moraes estava doente, me fazendo chamar a mulher dele de cachorra
João Grilo: Ahhhh... é isso? Isso é nada padre João. Muito pior é enterrar a cachorra em latim,
como se fosse cristã, e nem por isso eu vou chama-lo de safado!!!
Padre: Aaaaahhhhhhhhhh
Bispo: O que é isso?
Padre: É uma dor que me deu assim de repente, ahhhhhhhhhhh
João Grilo: Coitado, mas o senhor tinha que ver era o grito que a minha patroa dava enquanto
ele fazia o enterro da cachorra
Padre: Ahhhhhhhhh JOÃO GRILO MEU QUERIDO, ME ACUDA QUE EU TO MORRENDO
AHHHHHHHHHH
João Grilo: Eu? Quem sou eu pra socorrer padre? Eu, um safado
Padre: Eu retiro o que disse João
João Grilo: Retirando ou não retirando, o fato, é que a cachorra enterrou-se em latim
Bispo: Cachorra enterrada em latim?
Padre: Enterrada em latim seu bispo, auauauauau, não sabe?
Bispo: Não sei não senhor, e nunca vi cachorra morta, latir. Que história é essa?
Padre: AHHHHHHHHHH (e morreu)
Bispo: Então ouve isso? Uma cachorra enterrada em latim?
João Grilo: Então é proibido?
Bispo: Padre João, o senhor será suspenso!
Padre: Aahgggggg
Bispo: Enquanto ao senhor João grilo, vai se arrepender de ter colocado a igreja conta Antônio
Moraes!!! Isso é uma vergonha!!! Uam desmoralização
João Grilo: É mesmo!!! Uma vergonha, uma desmoralização! Uma cachorra safada daquela, se
atrever a deixar 3 contos pro padre e 6 pro bispo!!! É demais
Bispo: Como?
João Grilo: O senhor não sabe do testamento ainda não? 
Bispo: Testamento? Que testamento?
João Grilo: O testamento da cachorra
Bispo: Testamento da cachorra?
Padre: Sim seu bispo... a cachorra tinha um testamento, deixou 3 contos para a paroquia e 6
para a diocese
Bispo: É por isso que eu sempre digo que os animais também são criaturas de deus. Que
animalzinho inteligente, que sentimento nobre
Padre: E a pedido da dona eu acompanhei a cachorra no...
Bispo: No enterro... Em latim!!!
Padre: Que nada... eu disse mas 4 ou 5 coisas, coisa pouca...
João Grilo: Não sei que, não sei que, defutorum amem!!!
Bispo: Vamos ver... é um assunto para se discutir com muito cuidado... vamos reunir o
concilho...
Chicó: Boa noite, já esta mais consolada?
Dorinha: Como se além de perder minha cachorra ainda tive que pagar 9 contos pra ela ser
enterrada?
Chicó: E foi barato! A senhora pagou 9 contos pra uma pessoa benzer um bixo, eu já vi pagar 15
pra um bicho benzer uma pessoa
Dorinha: E que bicho é esse chico?
Chicó: Foi um papagaio que eu tive, quanto ele nasceu eu trabalhava num seminário, de tanto
ouvir as aulas ele saia a bíblia de cor. Depois fui morar num lugar onde só tinha padre a mais de
10 leguas de distancia, o bicho é que costumava dispensar os sacramentos.
Dorinha: E que fim levou esse papagaio?
Chicó: Se converteu ao protestantismo. A uns dois anos, soube que morreu de velhice
Dorinha: E como morreu de velhice se você disse que viu ele nasce? Papagaio vive mais de 10
anos!
Chicó: Eu não sei, só sei que foi assim
Dorinha: Ai chico, eu me sinto tão sozinha depois que minha cachorrinha morreu...
Chicó: O que resta é a senhora arranjar outro bichinho de estimação
Dorinha: E o que é que você sugere?
Chicó: Ah, um canário é bom pra alegrar
Dorinha: Eu quero um bichinho maior
Chicó: Uma lebre, um preá
Dorinha: Maior
Chicó: Um cachorro um cabrito
Dorinha: Maior, maior...
Chicó: Parece que eu to entendendo...
Dorinha: E vai ficar ai é?
Chicó: E se seu Eurico chegar?
Dorinha: E tu ta com medo?
Chicó: MEDO? (coff) medo? Eu? Agarro ele pelo chifre, rodo, rodo e jogo pra cima
Dorinha: Sacode mesmo?
Chicó: Sacudo
Dorinha: Ai que eu adoro um homem brabo. Repete!
Chicó: Sacudo, sacudo, sacudo
Dorinha: Então vem me sacudir um pouquinho, vem me valentão!
Chicó: Assim?
Dorinha: Assim!!!
Chicó: E agora o que é que eu faço?
Dorinha: Fala que quem manda aqui é você fala
Chicó: Quem manda aqui sou eu!!! QUEM MANDA AQUI SOU...
Vicentão: TOC TOC TOC DOORAAA
Dorinha: Eita que eu esqueci que marquei com o vicentão
Chicó: Danou-se, que com a senhora a gente bora e leva chifre ao mesmo tempo!
Vicentão: Abra aqui dora!!
Dorinha: Agora lascou, o que é que eu faço?
Chicó: E eu é que sei? Quem manda aqui é a senhora
Vicentão: ABRAAAAAA
Chicó: Que que eu faço agora eihn?
Dorinha: Se esconda debaixo da mesa
Vicentão: Eeeita que hoje eu to com a gota!!! Hoje eu to com a mulesta. Porque não abriu a
porta logo quando eu te mandei? Eihn?
Dorinha: Mas como não abri? Olha ela ai, abertinha
Vicentão: E porque a demora?
Dorinha: E não foi você mesmo que mandou eu me arrumar todinha pra você?
Vicentão: Foi, mandei...
Dorinha: Então, eu tava me arrumando. Afinal de contas, quem é que manda aqui?
Vicentão: Quem manda aqui sou eu!!!
Dorinha: Ai que eu adoro um homem brabo. Repete
Vicentão: Quem manda aqui sou eu!!!
Dorinha: Repete
Vicentão: QUEM MANDA AQUI...
Padeiro: TOC TOC TOC: OOHH DORA!!!
Dorinha: É meu marido
Vicentão: Agora lascou
Dorinha: O que que eu faço?
Vicentão: E eu é que sei? A casa é sua, quem manda aqui é você!!!
Padeiro: DOOORAAA
Vicentão: O que que eu faço agora eihn?
Dorinha: Você vai fingir que entrou aqui pra pegar alguém
Vicentão: Ihhhh, eu não to entendendo é nada!
Dorinha: E nem precisa entender. Pega essa tua peixeira e sai gritando por ai: eu te pego cabra
safado, eu te pego... Entendeu?
Padeiro: Eu to perdendo a paciência
Vicentão: Eu te pego cabra safado, eu te pego...
Dorinha: Isso
Vicentão: Eu te pego cabra safado, eu te pego...
Vicentão: Eu te pego cabra safado, eu te pego...
Padeiro: Mas que diabo é isso?
Dorinha: Euriquinho, você chegou na hora exata!!!
Padeiro: Hora exata de que?
Dorinha: O condenado do vicentão jurou de morte o coitado do chico
Padeiro: Que chico?
Dorinha: Pode sair chicó
Chicó: Boa noite meu patão
Dorinha: Coitado, chega ta amarelo
Padeiro: Mais amarelo vai ficar se não me contar direitinho o que está fazendo aqui?
Dorinha: Foi vicentão!!! Jurou ele de morte!!!
Padeiro: E é? Kkkkk vicentão te jurou de morte?
Chicó: Jurou, pela mãezinha dele -que Deus a tenha- se o patrão não tivesse chegado...
Chico sai PELA DIREITA
Padeiro: Também... cabra frocho você é chico, porque não enfrentou o homem? Se fosse eu
descangotava ele!!!
Dorinha: Ai que eu adoro um homi brabo !!!
João Grilo: Emprego, trabalho, serviço... qualquer coisa serve
Major: Tua reputação não é das melhores
João Grilo: Ah seu major, vivem querendo que pobre não tenha defeito
Major: E pra que que você quer emprego? Já não um na padaria de Eurico?
João Grilo: Aquilo não é patrão de gente não major, aquilo é o cão!!! 3 dia eu passei em cima
de uma cama e nem um copo d’agua me mandaram!!!
Major: Mesmo assim dizem que você é embrulhão, abusado, cheio de 9 horas. Mas vou fazer
uma aposta com você, te faço 3 perguntas, se você acertar, ganha o emprego
João Grilo: Agora! Não tenho nada a perder
Major: Tem sim!!! Se errar eu arranco uma tira de couro das suas costas
João Grilo: Danou-se!!! Eu topo mas só falta convencer minhas perna que tão se tremendo
toda!!! 
Major: Muito bem, lá vai a primeira: qual é a distância de uma ponta do mundo, na outra?
João Grilo: Um dia de jornada, que é o tempo que o sol leva pra percorre-la
Major: O que é que existe acima de um rei?
João Grilo: A coroa
Major: O que é que eu to pensando agora?
João Grilo: Em me ganhar!!!
Major: Muito bem João grilo. Então quer dizer que você é sabido mesmo...
João Grilo: Mais sabido é o senhor que agora manda em mim
Major: Então vá a Taperoá buscar minha filha que ta voltando do recife
Cangaceiro: Quer morrer cabra?
Severino: VOOOU MAS LEVO TUDO COMIGOOO!!!
Cangaceiro: Severino? É o senhor chefe?
Severino: E quem mais seria? E falando nisso, onde estavam indo sem minha permissão
Cangaceiro: O senhor demorou, então decidimos ir atrás
Severino: Rodei a cidade inteira e não encontrei uma alma que me desse esmola... mas foi até
bom, que eu ganhei mais raiva desse povo
Cangaceiro: Eita que não vai sobrar ninguém chefe!!!
Severino: Vai ser mais fácil do que dar tapa na cara de bêbado!!! Agora vamo que temos um
negocinho pra faze
Cabo 70: Esquerda, direita, esquerda, direita...
Dorinha: Eita que Taperoá já pode declarar guerra ao brasil!!!
Cabo 70: Cabo 70 pra servi-la no que for preciso
Dorinha: Ah não fala isso não que eu aceito. Cabo deixa eu lhe apresentar o pessoal daqui:
Eurico meu marido, vicentão meu.... Nosso amigo!
Vicentão/ Padeiro: MUITO PRAZER!!!
Padeiro: Rosinha, como você cresceu! Embunitou, ficou mais apanhada, e...
Rosinha: Bondade sua seu Eurico, osh eu tive até meio adoentada, e né por isso que eu vim
passar um tempinho em Taperoá!!!
Dorinha: E quando é que vai embora? Quer dizer.. eu digo, quanto tempo fica entre nós?
Rosinha: Por mim eu não saia daqui, mas mae só quer saber da capital...
Dorinha: Osh mas eu se pudesse vivia por la!!!
Rosinha: Com licença antes de ir pra fazenda eu tenho que passar na igreja, o bispo vai dar a
benção!!!
Vicentão: Homi, é até um pecado perder uma missa dessa
Cabo 70: Com licença dona dora, a autoridade militar vai saudade as autoridades religiosas
Padeiro: Hoje não é dia de novena?
Dorinha: Mas o senhor está dispensado!!!
oão Grilo: Oooh chico, eita cabra folgado, aproveitando a festa e eu aqui trabalhando neh?
Chicó: Ih é, é?
João Grilo: Osh, andou bebendo foi?
Chicó: É o que?
João Grilo: Nada não, a missa já vai começar
Rosinha: Quem é ele?
João Grilo: E não é Chicó?
Rosinha: Chico de que?
João Grilo: Não sei não, é só falar chico que ele vem
Rosinha: Me deu uma vontade de comer um confeito, João, vá me comprar um canudo!
João Grilo: E a missa?
Rosinha: Quando tem essas vontades tem que ser na hora! 
Vicentão: Desistiu da benção foi?
Rosinha: Vou comprar um confeito
Vicentão: Deixa que eu compro pra senhora!
Cabo 70: Dona rosinha manda as ordens
Rosinha: Va me comprar um confeito!
Cabo 70: Um confeito?
Rosinha: É, direita volver!!!
Rosinha: Obrigada chico
Chicó: Como sabe meu nome?
Rosinha: Eu adivinhei!!!
João Grilo: Seu confeito
Rosinha: Você demorou tanto que chicó já me trouxe um
João Grilo: Mas a senhora pediu foi pra mim
Rosinha: Ele adivinhou
Rosinha: Obrigada, Obrigada
João Grilo: Eita que aqui todo mundo lê pensamento!!! 
Major: Rosinha!!! Você já é uma mocinha eu tenho que tomar providências pra proteger sua
honra! Eu quero que você volte pro recife casada
Rosinha: Eu meu pai?
Major: Sim, você não se faça de lesa!!! Major pega a porca em uma mão do além que estará
na porta DIREITA Aqui está o seu dote, que pertenceu a sua bisavó Rosa Benigna Vaz de
Medeiros. Todo santo dia, ela enfiava uma moeda na porca. Quando ela morreu, deixou essa
porca de presente de casamento pra você, que recebeu esse nome em homenagem a ela!!!
João Grilo: Eu rogo a deus que essa santa senhora tenha tido uma vida longa!!!
Major: Ela viveu até quase 100 anos, ela porca ta cheinha!!! Agora só falta você encontrar um
homem que senha doutor e valente pra você se casar!!!
Rosinha: Como meu pai? Se não gosto de ninguém?
Major: Besteira!!! Com o tempo você se acostuma e acaba gostando
Rosinha: Ah minha nossa senhora!!! Desse jeito vou ter que casar obrigada!
João Grilo: Se aperrei não dona rosa, a senhora vai encontrar alguém pra querer bem, com a
ajuda dessa porca e de sua beleza... pretendente é que não vai faltar!
Chicó: Consigo comer não João, é tanto amor que não e até chega da uma gastura aqui dentro
João Grilo: Porque você não fala isso pra ela?
Chicó: Pobre do jeito que eu sou...
João Grilo: Casando com ela você fica rico!
Chicó: Casando de que jeito João?
João Grilo: Jeito eu dou, mas casando com ela você esquece seu amigo João Grilo...
Chicó: Pra que que eu quero dinheiro João, se nem comeu eu quero mais?
João Grilo: Casando com ela seu problema acaba! E de sobra ainda ganha uma porca cheinha
de dinheiro que a bisavó de dona rosinha deixou pra ela
Chicó: Pois se você arranjar esse casamento metade é seu!
João Grilo: O casamento esta arranjado! Vou agora mesmo falar com o cabo 70!
Chicó: CABO 70?! QUER ME AJUDAR OU ME DESGRAÇAR? CABO 70 É LOUCO PELA ROSINHA,
SE ELE DESCOBRIR QUE TO ME ENGRAÇANDO PRO LADO DELA ELE ME MATA! E VICENTÃO
TAMBEM!
João Grilo: Com o plano que eu tenho você bota os 2 pra correr e de sobra ainda casa com
rosinha!
Cabo 70: (Catarro)
João Grilo: Bom dia seu cabo, está bonzinho?
Cabo 70: Oshente seu cabra, que intimidade é essa comigo?
João Grilo: Que que foi seu cabo 70, a gente não pode nem dar bom dia? Isso é uma regra de
civilidade e cortesia! É ou não é?
Cabo 70: Se tem uma coisa que eu não gosto, é de gente que fala: é ou não é? Eu fico tinindo
João Grilo: E é?
Cabo 70: É!
João Grilo: É que esses viciozinhos que a gente pega são danados, é ou não é?
Cabo 70: Olha que hoje você dorme na cadeia! To doidinho pra prender alguém!!!
João Grilo: Queria ver essa valentia toda pra prender Vicentão
Cabo 70: Você está insinuando que o Cabo 70 tem medo de um valentão?
João Grilo: Se acalme seu cabo!!!
Cabo 70: Dessa vez passa. Mas so passa por um motivo
João Grilo: Acho que já sei o motivo
Cabo 70: Sabe nada homi
João Grilo: Sei sim, eu conheço os recantos mais íntimos desse seu coração militar!!!
Cabo 70: Rapaz, deixe de intimidade comigo seu cabra
João Grilo: Eu seu que se o senhor quisesse o senhor me prendia, mas a sua intimidade comigo
é por causa da minha intimidade na casa de uma certa moça... que o seu cabo anda querendo
muuuito
Cabo 70: Ai como eu sofro joão!!! E ela não gosta de mim!!!
João Grilo: Quem disse?
Cabo 70: Eu é que penso
João Grilo: E todo penso, é torto. É ou não? E eu já andei conversando esses assuntos com ela!
E ela até me disse que simpatizava muito com certo cabo!!
Cabo 70: Jura?
João Grilo: Por essa luz que me alumia!!
Cabo 70: João, você sabe que eu lhe tenho muita amizade, não é?
João Grilo: Menino, olha como isso mudou!!! É seu cabo.. eu sei que o senhor é doido por
mim! É ou não é?
Cabo 70: É! Kkkkk E bem que você podia me ajudar!! Eu queria que você entregasse esse
broche pra Rosinha!!!
João Grilo: O presente será dado!! Até mais ver cabo 70!!! 
Cabo 70: Até mais ver João!!! Obrigado. Fico lhe devendo um favor!!!
Vicentão: (Catarro)
João Grilo: Bom dia seu vicentão
Vicentão: Vou fingir que não vi. Hoje eu jurei que a primeira pessoa que eu visse, eu enfiava a
faca na apendicite
João Grilo: Mas hoje não é dia de ter raiva não
Vicentão: Mas pra mim todo dia é dia de ter raiva. Eu quero ter raiva e você não se meta!!!
João Grilo: Logo hoje no aniversário de dona rosinha?
Vicentão: E hoje é aniversário dela é? E de que adianta? Ela não gosta de mim mesmo
João Grilo: Que injustiça! Logo hoje que ela disse que estava apaixonada pelo valentão da
cidade!
Vicentão: Eita!!! Só pode ser por mim neh?
João Grilo: Logo hoje que o senhor acordou tão mau humorado!!!
Vicentão: Passou João! E você me faz uma fineza? Vc entrega esse par de brinco pra ela?
João Grilo: Isso não é coincidência não, é o destino
Vicentão: Pois diga isso a ela: que a própria sorte que quer nos juntar, cruzando nossas vidas
na teia do destino!!!
João Grilo: Pode Deixar!!!
Rosinha: Que joias lindas! Quem mandou?
Chicó: Alguém na cidade que doido pela senhorita
Rosinha: Osh que história, ninguém gosta de mim!
Chicó: Esse gosta demais
Rosinha: Quem é ele?
Chicó: Posso dizer não que ele pediu
Rosinha: Ele é bonito?
Chicó: Posso dizer não que eu sou modesto
Rosinha: É você chico!!!
Chicó: Já que a senhora adivinhou, não posso negar que desde que te vi, eu vivo pra morrer e
só não morro porque vivo pensando na senhora!
Rosinha: Eu fico muito agradecida, mas eu não posso aceitar o seu presente
Chicó: Oh rosinha eu sei que sou pobre
Rosinha: É que se pelo menos você tivesse um diploma
Chicó: Eu sou doutor em ciências ocultas, filosofia dramática, pediatria charlatânica, biologia
dogmática e astrologia eletrônica.
Rosinha: Se você fosse valente
Chicó: Sou o cabra mais valente dessa cidade
Rosinha: É nada! Os homens mais valentes dessa cidade é Vicentão e cabo 70!
Chicó: Sou doido pra acabar com a valentia deles!!!
Rosinha: É nada, você tinha coragem de enfrentar um dos dois?
Chicó: Brigo é com os dois de uma vez só, boto os 2 pra correr dessa cidade!
Rosinha: Isso eu queria ver
Chicó: A senhora aceita as joias?
Rosinha: Aceito e se você fizer o que disse, sou capaz até de usa-las
Cabo 70: Opa João!!! Até que enfim você chegou!!! Eai? Como foi?
João Grilo: Como foi o que?
Cabo 70: Do presente rapaz, responda logo que to ficando louco
João Grilo: Ahhh o presente! Ela ficou com ele...
Cabo 70: Só?
João Grilo: E você achou pouco?
Cabo 70: Pelo menos ela podia ter ficado feliz
João Grilo: Feliz ela ficou, também, quem não ia ficar feliz ganhando um broche e dois brincos
no mesmo dia?
Cabo 70: Oshente e eu só não mandei 1 broche?
João Grilo: Sim mas teve um esperto que mandou 2 brincos. Um pra cada orelha!!!
Cabo 70: E diga quem foi esse miseravi, que eu vou lhe comer o fígado e arrancar-lhe os
corações!!!
João Grilo: Quem foi eu não sei, só sei que chico tava andando pelos lados da fazenda de major
Antônio Moraes e disse que quer te encontrar as 7hrs na saída da missa
Vicentão: Chicó?
João Grilo: As 7 hrs na saída da missa
Vicentão: E o que que ele quer comigo?
João Grilo: Disse que a respeito a um par de brincos que você deu a dona rosinha
Vicentão: Será que aquele sebento ta me desafiando? O magrelo ta doido pra morrer... e eu to
doido pra matar
João Grilo: E eu sei também que dona rosinha tava toda contente por causa de um par de
broche que ela tinha acabado de ganhar
Vicentão: Mas é hoje que eu vou fazer a festa
João Grilo: Ta tudo marcado!!! A missa ta acabando e no final dela vamos botar aqueles
valentões pra correr
Chicó: O João, você se esqueceu que eu sou frocho?
João Grilo: Mas eles são mais frocho que você!!!
Chicó: QUER ME HUMILHAR É? FIQUE SABENDO QUE NÃO EXISTE CABRA MAIS FROCHO QUE
EU AQUI EM TAPEROÁ
João Grilo: Mas rosinha não precisa saber disso
Chicó: O João grilo, eles vão é me matar
João Grilo: Pois eu digo que vai dar tudo certo, e você finalmente vai conquistar o coração de
rosinha
Chicó: Vale-me nossa senhora ou eu morro ou me desmoralizo e de todo jeito perco rosinha.
Oh minha nossa senhora: Que a faca de vicentão entre macia no meu bucho vazio, que as bala
de cabo 70 me vare de uma vez pra que eu tenha uma morte bem rápida
Rosinha: Você me acompanha chico?
Chicó: Ave maria a missa já acabou
Rosinha: Você tava rezando com tanta fé que nem notou
Chicó: É eu tava fazendo uma promessa pra nossa senhora
Rosinha: E qual é a graça que você quer obter?
Chicó: Uma graça tão grande que chega a ser um milagre
Rosinha: Aposto que era um pedido de amor
Chicó: Não deixa de ser, rezei pra não morrer desse mal
Rosinha: Seu coração ta batendo tão forte assim?
Chicó: Ta quase pulando pra fora da caixa dos peito
João Grilo: O cabo e vicentão vieram tomar satisfação com você
Rosinha: Satisfação de que meu deus?
João Grilo: Chico não contou pra senhora que ele vai botar aqueles 2 pra correr não?
Rosinha: Não por isso chico, você está dispensado do compromisso
Chicó: Já que a senhora insiste
João Grilo: Não dona rosinha a senhora vai ver uma coisa... esse ai é calmo e ponderado mas
quando explode vira uma fera
Rosinha: CHICO!!!
Chicó: Senhora
Rosinha: Cuidado pra não judiar demais desse pobres
João Grilo: Se aperreie não, esses dois correm só com o grito de chico
Vicentão: Tava me procurando seu chico?
Chicó: Tava mas já encontrei seu vicentão
Vicentão: Pois trate e fazer logo seu último pedido, porque eu to doidinho pra enfiar a faca no
seu bucho
Cabo 70: To atrapalhando alguma coisa?
Vicentão: O seu cabo vai me desculpar, mas esse daqui é um safado. Carece gastar autoridade
não 
Cabo 70: Dispensa a patente vicentão, hoje eu to aqui de civil
Vicentão: Então o senhor não vai poder me prender se eu resolver acabar com a raça de um
cabra aqui mesmo na sua frente
Cabo 70: Osh esse amarelo foi quem marcou comigo, esse aqui já tem dono
Rosinha: Osh o que ta acontecendo João
João Grilo: O chico desafiou os 2 pra um truelo
Rosinha: Um truelo?
João Grilo: É, um duelo de 3
Vicentão: Então chico? Marcou comigo ou com o cabo
Chicó: Marquei foi com os 2, mas foi só pra dar um recado de dona rosinha. Ela ta ali e mandou
dizer que adorou as joias que os dois mandaram pra ela e disse que vai usar o presente do que
sair vencedor de um duelo
Cabo 70: Ai o caso exige reflexão
Chicó: Osh ta com medo seu cabo?
Cabo 70: Osh que medo o que? Tu já viu autoridade ter medo?
Chicó: Ta preparado seu vicentão?
Vicentão: Mas agora? Não rapaz, vai assustar dona rosinha
Chicó: Osh mas ela ta doida pra ver um homi furado de bala
Rosinha: E agora?
João Grilo: Chico começa a contar
Chicó: É um
João Grilo: Os cabra vão andando
Chicó: E é dois
João Grilo: Quando ouvirem já se vira atirando em chico
Rosinha: Mas ele nem armado está!!!
João Grilo: Pra que? Revolver é coisa de frocho
Chicó: E é três. E é já
Cabo 70: Vixi meu padin cicero
Vicentão: Vala-me nossa senhora
Chicó: Espere ai seus fulero!!! To dizendo! Uns mequetrefe desses metido a valente pro meu
lado. Pronto, esses dois vão sumir do oco do mundo
Rosinha: Pode se preparar pra pagar a promessa pra nossa senhora que seu pedido de amor foi
atendido
Chicó: O pedido que fiz pra ela é fácil cumprir, jurei que daqui pra frente só vou gostar da
senhora
BEEEIJOOOO UIIUI (esta parte é uma das mais difíceis, portanto, deve ser repetida inúmeras
vezes)
Major: Um conhecido seu de serra talhada?
João Grilo: É seu major, desculpe a impertinência, mas ele é um pretendente ótimo
Major: Tem que ser no mínimo fazendeiro ou doutor
João Grilo: Pois esse é os dois, é fazendeiro e é doutor
Major: Muito prazer seu...
Chicó: É chico
Major: Chico? Chico de que?
João Grilo: Francisco Antônio Ronaldo Ermenegildo de Aragão Correia Vaz pereira Góes. Chico
é somente o apelido dele
Major: Também com um nome desse ninguém decora. Como que chama a sua fazenda
Chicó: Que fazenda?
João Grilo: É tanta fazenda que ele até se confunde. Doutor chico, como se chama aquela de
serra talhada?
Chicó: Fazenda de serra talhada?
João Grilo: Fazenda de serra talhada tai um nome bonito, simples e sem arrudeois
Major: Então o senhor além de fazendeiro ainda é doutor?
João Grilo: Doutor advogado
Major: Então sabe tudo sobre leis
Chicó: Tudo, tudo, tudo também não ne
João Grilo: Ele é muito modesto
Major: E você pretende se casar com minha filha?
Chicó: é... na verdade...
João Grilo: Tão acostumado a falar alemão quando chega a hora de falar brasileiro fica todo
arrastado
Major: ROSINHAA!!!
Rosinha: Senhor
Major: Venha cá, venha conhecer um pretendente seu
Rosinha: Um pretendente?
Major: Pretendente é pretendente, mas já foi promovido
Rosinha: Mas eu gosto de outro meu pai
Major: Osh e quem mandou?
Rosinha: Começou sem querer, mas agora nem que eu não quisesse
Major: Quem é o cabra
Rosinha: Ele é pobre mas é valente e honesto
Major: O meu ganhou: é doutor, fazendeiro e fala alemão
Rosinha: Eu não posso mandar no meu coração.
Major: Então deixa que eu mando! Você tem uma semana pra esquecer de um e gostar do
outro
Rosinha: EU PREFIRO MORRER!!! (Ela vê chico) Mas já que o senhor insiste, a gente se casa
semana que vem
Major: Já?
Rosinha: Eu tenho mais é que lhe obedecer meu pai
Padre: Boas tardes!!!
Chicó: Lascou
João Grilo: O veja só, falando em casamento chega o padre
Padre: Casamento de quem?
Major: É! Eu quero que o senhor conheça meu futuro genro
Padre: Chicó?
Major: O senhor já conhece?
João Grilo: Todo mundo conhece chico. Vai ser o casamento do ano, a igreja vai ser até
reformada
Padre: E vai?
João Grilo: E o senhor não acha que precisa?
Padre: Demais!!! Acho que uns 10 contos faça a reforma
Major: Pode mandar fazer a reforma que seu Chico manda pagar! Venha comigo que eu lhe
empresto o dinheiro, pelo sim pelo não vamos trocar um papel entre nós! Mas eu gosto de
trabalhar diferente... como garantia de que vai me pagar esse dinheiro assine esse contrato
Chicó: E o diz esse contrato?
Major: Nada demais, ou me paga ou eu tiro uma tira de couro das costas de Seu chico. Assine
aqui
Chicó: Assino nada
João Grilo: É que ele está sem óculos, é só carimbar com o dedo!!!
Major: Agora vão-se embora que tenho mais o que fazer
Padre: venha cá seu bispo, sente-se aqui. Vamos la... 7 para a paroquia e 3 para a diocese
Bispo: Nada disso, 3 para a paroquia e 7 para a diocese
Padre: Como representante do senhor temos sempre que pregar a justiça e isso não é justo
senhor bispo
Bispo: Como representante do senhor temos sempre que pregar a justiça e a humildade
Padre: Temos sempre que pregar a justiça e a humildade e o desapego as coisas materiais
Bispo: A justiça, a humildade, o desapego as coisas materiais e a obediência, portanto o senhor
me obedeça.
João Grilo: Sei não chico... espremo, espremo e não sai uma ideiazinha
Chicó: Mas cadê aquele João grilo? O quengo mais fino do Nordeste, capaz de fazer dormindo
o que ninguém faz acordado
João Grilo: Acabou-se, o poço secou chico. Nem uma gota de pensamento, nenhum clarão de
entendimento, estou como num quarto sem porta e pra onde quer que eu me vire dou com as
veta na parede. FRANZINO, POBRE E AGORA BURRO!!! O JEITO QUE TEM É ME MATAR!!!
AHHHH ADEUS, CHICÓ!!! NUNCA MAIS!!!
Chicó: João!! Que desgraça é essa? Você não pode morrer no meio dessa história!!! 
João Grilo: Pronto!!! Acordei!!!
Chicó: O homi pra morrer, o homi pra ressucitar...
João Grilo: Você ainda não entendeu que isso foi a grande ideia que eu tive?
Chicó: Você não tinha ficado burro e por isso ficou morto?
João Grilo: Chico, se burrice matasse você já tinha batido a caçoleta faz tempo. Eu enfiei a faca
foi nessa bexiga cheia de sangue que eu escondi debaixo da camisa
Chicó: Menino!!! Vige que to tremendo até agora
João Grilo: Você vai botar essa bexiga que eu enchi de sangue debaixo da camisa, vai fingir que
morreu mas deixe que você vai fugir pra bem longe. Ai rosinha finge que ficou doida de tristeza
e vai te encontrar
Chicó: E quem que vai me matar?
João Grilo: Um cangaceiro e você vai morrer feito herói, defendendo a cidade
Chicó: Tu ta é doido? E eu la quero história com essa gente?
João Grilo: O cangaceiro sou eu!!! DEMENCIAA. Eu vou chegar disfarçado
Chicó: Vala-me nossa senhora
João Grilo: Pois confie em mim. Pode começar a rodar valentia por ai porque agora você vai
enfrentar, O REI DO CANGAÇOOO
Chicó: A vidinha aqui anda muito parada!!! Minha mão ta coçando pra dar uns bufete em
alguém
Padeiro: Osh mas faz só 3 dias que você botou pra correr os valente da cidade
Chicó: E já to doido pra uma briga de foice
Padeiro: E quem é besta de vim topar com você?
Chicó: Já pensei até em me alistar na volante pra sair por ai matando cangaceiro
Padeiro: Homi se aquiete, aquilo la é uma guerra
Chicó: É isso memo que eu quero!!! O pipoco dos tiro, a mulherada gritando, a bala zunindo
pelos ouvido
Dorinha: Ahhhhh, acabou tudo!!! Os cangaceiro invadiram a cidade!!!
Chicó: Eita que agora eu me esparro
Dorinha: Ele invadiram a igreja e a policia fugiu pelo o outro lado!!!
Chicó: Sabe que me deu uma vontade de rezar?
Padeiro: Homi, você se lasca
Chicó: Comigo é assim, escreveu não leu... o pau comeu. Vou até sem arma... vou acabar com
esse cabra é na dentada
Padeiro: Vamo-se embora dorinha 
Chicó: Seja quem for o corno que invadiu essa igreja!!! Venha aqui pra fora que e pra eu lhe
aparar os chifre! Vai conhecer o que é o macho, porque comigo eu volto é por dentro!!! Que
nem pavio de macaxeira!!!
Severino: Ta aí duas coisas que eu não sabia, uma que eu era corno e outra que defunto falava
Chicó: Ai mamãe
Severino: Tava me desafiando cabra safado?
Chicó: Eu? Desafiando? O senhor?
Severino: RESPONDA!!! Em vez de ficar perguntando. Falou comigo ou não falou?
Chicó: Foi engano meu patrão
Severino: Se fosse comigo eu ia deixar viver só pela coragem, mas como foi engano, vai morrer
com os outros!!!
Cangaceiro: Chefinho!!! Encontrei mais esses daqui no meio do caminho!!! Já peguei todo o
dinheiro do cofre da padaria e o dinheiro que o bispo e o padre tavam escondendo na bata
Severino: É hoje!!! Um, dois, três, quatro, cinco... quem vai ser o primeiro?
João Grilo: SE PREPAREM PORQUE SEVERINO DE ARACAJU ACABA DE CHEGAR!!!
Cangaceiro: Eiita, mas se ele é o senhor, o senhor quem é?
Severino: Eu sou eu ué
Cangaceiro: Mas se o senhor é o senhor e ele quem é?
Severino: Isso é o que a gente vai saber agora. Quem é esse toco de amarrar jegue?
João Grilo: Qual?
Severino: Você mesmo que acaba de chegar dizendo que sou eu
João Grilo: Acabo de chegar e já vou dando meia volta
Severino: Meia volta nada 
João Grilo: Isso é apenas uma visão, vocês estão vendo dois, mas na verdade e apenas um: ele.
Com licença
Severino: Um momento!!!
João Grilo: É que está ficando tarde e eu tenho o que fazer, a vocês uma boa tarde e uma boa
viagem a todos
Severino: Nada disso!!! Agora você fica e vai morrer com os outros. Falando nisso. Leve o casal
e os dois padre daqui e de cabo deles, porque meu papo é com esses dois
Cangaceiro: Se tem uma coisa que eu não gosto é matar mulher, mas se é o jeito
Dorinha: Pode deixar. Tenho mais coragem que muito homem. (padeiro quase cai) não disse?
Severino: E você? Qual seu nome?
João Grilo: É João grilo!
Severino: Pois bem João grilo ta na hora de sua degracença!!! O cabra mais frocho que já tive o
prazer de matar!!!
João Grilo: UM MOMENTO!!! Antes de morrer eu queria fazer uma coisa!!! É dar-lhe essa gaita
de presente
Severino: Uma gaita? Pra que que eu quero uma gaita?
João Grilo: É pra nunca mais morrer, essa gaita foi benzida por padinho padre Cicero, pouco
antes dele morrer!!!
Severino: Isso eu só acredito vendo
João Grilo: Pois não, queira a vossa excelência me ceder seu punhal
Severino: Aponte o rifle pra esse cabra porque é desse povo que eu tenho medo. E agora?
João Grilo: Agora eu vou dar uma apunhalada na barriga de chico
Chicó: Osh na minha, não
João Grilo: Osh mas deixe de moleza chico, depois eu toco na gaita e você vive de novo (a
bexiga, a bexiga)
Chicó: Muito obrigado, mas eu não quero não
João Grilo: Eu já não disse que depois eu toco a gaita?
Chicó: Pois vamo fazer o seguinte, você leva a punhalada e eu toco a gaita
João Grilo: Homi, quer saber do que mais, vamo deixar de conversa... TOME LÁ ( A bexiga...)
MORRE DESGRAÇADO!!!. Estão vendo o sangue?
Severino: Estou... agora eu quero ver é você curar o homem
João Grilo: É já...
Severino: Você não ta sentindo nada?
Chicó: Nadinha
Severino: E antes?
Chicó: Antes como?
Severino: Antes de João tocar a gaita
Chicó: A tava morto
Severino: Morto?
Chicó: Completamente morto
Severino: Mas como isso?
Chicó: Não sei, só sei que foi assim... E padin padre cicero mandou um recado pro senhor: essa
gaitinha que abençoei antes de morrer, entregue ela a Severino porque ele precisa muito mais
dela do que você.
Severino: Meu deus, só pode ter sido mesmo meu padin padre cicero... ATIRE EM MIM!!!
QUERO CONHECER MEU PADIN PADRE CICERO
Cangaceiro: Mas capitão...
Severino: ATIRE CABRA FROCHO QUE EU TO MANDANDO
João Grilo: O homi atire de uma vez pelo amor de deus!!!
Cangaceiro: Ah eu não gosto de matar o chefinho não mas já que tem que matar...
Severino: Espere!!! Não esqueça de tocar a gaita. E atire!!!
Tiro/Cangaceiro tenta tocar a gaita enquanto João e chico tentam fugir
Cangaceiro: Você matou o capitão ne grilo? Fi duma égua, pela primeira vez na minha vida vou
matar alguém com gosto
Chicó: JOÃO!!! JOÃO!!! SERA QUE VOCÊ VAI MORRER JOÃO?
João Grilo: Acho que vou chico... Estou ficando com a vista escura...
Chicó: AI MEU DEUS, O COITADO DO JOÃO GRILO VAI MORRER!!!
João Grilo: Deixe disso chico, parece que nunca viu homem morrer... Disso tudo eu só lamento
não ganhar o dinheiro da porca que você vai ganhar quando casar com rosinha...
Chicó: JOÃO, JOAÃOOO!!! Ai meu deus... morreu o pobre de João grilo... O que que eu faço no
mundo sem João? O que que eu faço no mundo sem João? JOÃO, JOAÕOO (fecha os olhos de
João arruma ele no chão, faz o sinal da cruz e vai embora)
Severino: João, seu cabra safado!!!
João Grilo: Mas será possível? Será que nem aqui você me dá sossego capitão? Vige que ta
chegando mais, olha ali mais quatro que o senhor já despachou
Severino: Falando nisso o que é que você ta fazendo aqui que não ta la em baixo?
João Grilo: Eu to morto que nem você
Severino: Olha o respeito, e eu sou homem de morrer?
João Grilo: O senhor não se lembra da história da gaita?
Severino: É mesmo, e o que que o meu homem ta fazendo que não toca essa gaita?
João Grilo: O leseira, Severino veio, besta
Severino: Olha como fala comigo que eu te mato!!!
João Grilo: ME MATAR COMO SE EU JÁ MORRI?
Severino: Escuta aqui seu bixo froucho, você vai me pagar por essa historia da gaita!!!
João Grilo: BIXO FROUCHO É SUA VÓ, Já morri mesmo, não vou ficar ouvindo desaforo e mais
ninguém. Agora não tem pobre nem rico, valente nem froucho. Todo mundo igual diante de
Deus, OU DO DIABO
Diabo: Mas porque essas caras de espanto? Por acaso eu sou algum monstro?
Coro: NÃOOO
Bispo: Não de jeito nenhum, estamos até impressionados com você beleza, com vossa finura...
Dorinha: Parece até um artista
Padeiro: E você acha mesmo é?
Dorinha: Acho
Padeiro: Então também acho
Padre: Alguém já lhe disse que o senhor é muito mais simpático pessoalmente?
Diabo: Estão vendo... O diabo não é tão feio assim
João Grilo: Pode ser, mas esse cheirinho de enxofre...
Diabo: Talvez o meu cheiro esteja incomodando vocês
Coro: Nãoo... imagina
João Grilo: Pois eu já estou à beira de ter uma pinura com esse fedor
Diabo: OOII? RESPEITO É BOM E EU GOSTO
Severino: Você de graças a deus que o diabo é um cara bom, eu no lugar dele...
João Grilo: Eu no lugar dele tomava era um banho com chá de amulece cacho que é pra ver se
diminui essa nhaca
Diabo: VOCÊS AGORA VÃO PAGAR TUDO OQUE FIZERAM!!! VOU MANDAR TODOS PARA O 5°
DOS INFERNOS, PARA PADECER COMIGO!!!
João Grilo: QUE TRIBUNAL É ESSE QUE NÃO TEM APELAÇÃO? EU SEMPRE OUVI DIZER QUE PRA
UMA PESSOA SER CONDENADA, ELA TEM QUE SER OUVIDA!!!
Diabo: BESTEIRAAAAA
João Grilo: BESTEIRA OU MALUQUICE, EU APELO PRA QUEM PODE MAIS!!! VALEI-ME NOSSO
SENHOR, JESUS CRISTOOOOOOO
Diabo: QUEM É? É MANUEL?
Jesus: Venham todos, pois vão ser julgados.
João Grilo: Eu não quero faltar com respeito com o senhor não, mas se não me engano, aquele
senhor acaba de te chamar de Manuel
Jesus: Isso mesmo João, esse é um dos meus nomes, mas você também pode me chamar de
Jesus, de Senhor, de Deus.
João Grilo: Mas espere... O senhor é que é Jesus?
Jesus: Sou porquê?
João Grilo: Porque... não é lhe faltando com respeito não, mas eu pensava que o senhor era
muito menos queimado!!! Kkkkk
Bispo: Cale-se
Jesus: Cale-se você!!! Você estava mais espantado do que ele e só escondeu essa admiração
por tolice mundana. O tempo da mentira já passou
João Grilo: Muito bem!!! A cor pode não ser das melhores, mas o senhor fala bem que faz
gosto
Jesus: Muito obrigado João... muito obrigado, mas você também é cheio de preconceitos de
raça. Eu fim assim desse jeito pois sabia que ia gerar comentários. Chega de mais delongas,
comece seu relatório pelo bispo
Diabo: Simonia, negociou com o padre aprovando um enterro em latim de uma cachorra
porque o dono lhe deu 6 contos e mais, arrogância com os pequenos, subserviência com os
grandes e tudo o que disser do bispo pode se aplicar ao padre.
Jesus: E o padeiro?
Diabo: Ele e o patão foram os piores patrões que Taperoá já teve
Dorinha: É mentira
João Grilo: É não, é verdade!!! 3 dias...
Jesus: Que você passou com febre em cima de uma cama e nenhum copinho de agua lhe
mandaram, eu já sei João, todo mundo sabe dessa história de tanto você contar
João Grilo: Mas eu posso, me diz se eu posso? Bife passado na manteiga pra cachorra e fome
pra João grilo?
Diabo: Avareza do marido e adultério da mulher, um pior do que o outro
Jesus: Acuse Severino
Diabo: E precisa? Matou mais de 30!!!
Jesus: E agora o que você diz em sua defesa João?
João Grilo: O senhor vai me desculpar, mas eu não fui acusado de coisa nenhuma
Diabo: Foi mesmo não, começou com uma confusão tão grande que esqueci de acusa-lo, mas
agora você me paga, FROCHO. Tramou o enterro da cachorra, incitação a simonia. Encorajou
encontros de chico com uma mulher casada, incitação a concupiscência. Arquitetou a morte de
Severino, Crime com premeditação
Jesus: É João, realmente, você passou da conta
Diabo: De modo que o caso dele é sem jeito.... É o primeiro que eu vou levar
João Grilo: Ah, você pensa que eu me entreguei? Pode ser que eu vá mas não é assim não! Eu
vou apelar!
Padre: Pra quem joão? Você mesmo ouviu nosso senhor dizer que a situação está difícil
Jesus: Espere!! Em quem você vai se pegar João?
João Grilo: Vou pedir pra alguém está mais perto de nós, por gente que é gente mesmo.
Jesus: É algum santo?
João Grilo: O senhor não repare não, mas de besta só tenho a cara, meu trunfo é maior que
qualquer santo!!!
Jesus: Quem é?
João Grilo: VALA-ME NOSSA SENHORA MÃE DE DEUS DE NAZARÉ, A VACA MANSA DÁ LEITE, A
BRAVA DA QUANDO QUER, A MANSA DA SOSSEGADA, A BRAVA LEVANTA O PÉ. JÁ FUI BARCO,
FUI NAVIO, AGORA SOU ESCALÉ. JÁ FUI MENINO, FUI HOMEM, SÓ ME FALTA SER MULHER.
VALA-ME NOSSA SENHORA, MÃE DE DEUS DE NAZARÉ!!!
Diabo: Lá vem a compadecida, mulher em tudo se mete!!!
João Grilo: A senhora se zangou com o versinho que eu recitei?
N.Senhora: Não João, porque iria me zangar? Tem umas graças, mas até acho bom!!! Quem
gosta de tristeza, é o diabo
Diabo: PROTESTO
Jesus: Eu sei que você protesta, mas eu não tenho o que fazer meu velho, discordar da minha
mãe é que eu não vou!
N.Senhora: Pra que você me chamou João? 
João Grilo: É que esse filho de chocadeira quer levar a gente pro inferno, eu só pudia me pegar
com a senhora mesmo
N.Senhora: Vou ver o que eu posso fazer. Intercedo por esses pobres meu filho, porque não
tem ninguém por eles. Não os condene
Diabo: Eu apelo pra justiça
João Grilo: E eu pra misericórdia
N.Senhora: Precisa levar em conta a pobre e triste condição do homem. Os homens começam
com medo coitados, e terminam fazendo o que não presta quase sem querer... é medo!!!
Diabo: MEDO? MEDO DE QUE?
N.Senhora: Medo de muitas coisas, do sofrimento, da solidão e no fundo de tudo medo da
morte
Diabo: Medo da morte todo mundo tem e nem por isso as pessoas se tornam virtuosas. Em
quem que esse medo por exemplo fizeram a mulher e seu padeiro se tornarem melhores? E o
padre e o bispo? Faça-me o favor, medo da morte não redime os pecados
N.Senhora: Mas na hora da morte as vezes sim!!! Na oração da ave maria, os homens me
pedem para eu rogar por eles na hora da morte. Eu rogo e olho para eles nessa hora e vejo que
muitas vezes é na hora da morte que eles encontram o que muitas vezes procuraram a vida
toda.
Como na morte de Eurico em Dora: mesmo com toda a traição da esposa, ele a foi fiel,
morrendo junto com ela. E ela se arrependendo de seus pecados
Já o bispo e o padre seguiram seus ensinamentos, morrendo com as mesmas palavras que você
pronunciou na hora da morte, perdoando seus assassinos.
Diabo: É sempre assim, depois de morrer todo mundo fica bonzinho
N.Senhora: Quanto a Severino
Jesus: Quanto a esse deixe comigo, não foi a sua morte que o redimiu, mas a de seus pais. Com
8 anos de idade conheceu a fúria que existia dentro do homem. Severino enlouqueceu depois
que a polícia matou a família dele, e ele não era responsável pelos seus atos. Está salvo!
Diabo: Isto é um absurdo quanto o qual...
Jesus: Quanto o qual, e eu sei que você protesta e eu não recebo seus protestos. Você não
entende nada dos planos de Deus! Severino meu filho, pode ir para ali!
Padre: E quanto a nós?
Diabo: E a final qual é a sentença?
João Grilo: Um momento senhor, eu posso dar uma palavra?
Jesus: Pode
João Grilo: Os quatro últimos lugares do purgatório estão desocupados?
Jesus: Estão
João Grilo: Então pegue esses 4 camaradas e bote lá
Jesus: Minha mãe o que que acha?
N.Senhora: Eu ficaria muito satisfeita
Jesus: Então está concedido, podem ir vocês 4
Diabo: Mas esse eu faço questão de levar
Jesus: Você que é tão sabido, o que que você tem a dizer em sua defesa?
João Grilo: Nada não senhor
Jesus: Como nada? Chegou a hora da verdade
João Grilo: E é por isso que estou lascado, comigo era na mentira.
Diabo: Ainda bem que reconhece!!!
N.Senhora: Você mentia pra sobreviver João
João Grilo: Mas eu também gostava, eu acabei pegando gosto de enganar aquele povo
N.Senhora: Mas porque eles te exploravam, a esperteza era a única arma que você dispunha
contra os maus patrões
João Grilo: Agradeço sua intercessão mas tenho que assumir que não fui nenhum santo
N.Senhora: João foi um pobre como nós meu filho, e teve que suportar as maiores dificuldades
de uma terra seca e pobre como a nossa, acostumou-se a pouco pão e muito suor. Humilhado,
derrotado... peço muito e simplesmente que não o condene
Jesus: O caso é duro, compreendo as circunstâncias em que João viveu, mas tudo tem limite!
Eu acho que não posso salva-lo
N.Senhora: De-lhe então meu filho, outra oportunidade
Jesus: Como?
N.Senhora: Deixa João voltar
Jesus: Você se dá por satisfeito?
João Grilo: DEMAIS! E pra mim é até melhor que eu tomo cuidado na hora de morrer e não
passo nem pelo purgatório que é pra não dar gosto ao cão
N.Senhora: Então João? Se dá por satisfeito?
João Grilo: Eu fico, quem deve estar danado é o filho de chocadeira
João Grilo: Que é isso meu deus?
N.Senhora: Na raiva olhou pra você e me viu kkkkkk
João Grilo: Então quer dizer que eu posso voltar?
Jesus: Pode João, vá com Deus
João Grilo: Com Deus e com Nossa Senhora que foi a que me valeu. Até a vista, grande
advogada! E não me deixe de mão não, estou decidido a tomar jeito, mas a senhora sabe que a
carne é fraca kkkk
N.Senhora: Até a vista João
João Grilo: Obrigado senhor
N.Senhora: Até a vista!!!
Jesus: Até a vista, João... JOÃO?
João Grilo: Senhor?
Jesus: Veja como se porta
João Grilo: Sim senhor
Jesus: Mãe, se a senhora continuar intercedendo desse jeito por todos, o inferno vai virar uma
repartição pública: Existe, mas não funciona 
Chico: Quando penso que o pobre João não teve nem direito a enterro no cemitério que nem
os outros. Coitado do João, ta mais abandonado que o cachorro do padeiro!
João Grilo: Um pai nosso e uma ave maria pra uma alma que aqui pena!
Chico: Ai meu deus é o João! João, dizei-me o que quereis, se estais no seu, no inferno ou no
purgatório!!
João Grilo: O leseira besta, um homem falando com alma, ‘João dizei-me se estais, não sei o
que’. Tenha vergonha chico, estou vivo.
Chico: Ai minha nossa senhora!!!
João Grilo: Levante chico, levante chico, não está vendo que sou eu? Estou vivo rapaz
Chico: E é possível?
João Grilo: E é tão possível que estou aqui
Chico: Só acredito vendo
João Grilo: Pois então veja
Chico: Aaaainnn
João Grilo: Que isso homi, você não disse que só acreditava vendo?
Chico: Disse, mas não era pra me mostrar não
João Grilo: E como é que vai ser agora chico?
Chico: Vai ser assim mesmo, você sem me mostrar e eu sem acreditar
João Grilo: E nossa velha amizade? Vai acabar?
Chico: Já acabou! É contra meus princípios ser amigo de defunto!!!
João Grilo: Mas estou vivo rapaz!!! Veja... pegue aqui no meu braço, coragem homem, pegue!
Chico: É mesmo João!! Como é que foi isso?
João Grilo: Não sei eu acho que a bala pegou de raspão
Chico: Eita noticia boa
João Grilo: Quer dizer que estamos ricos
Chico: É milhardário, além do dinheiro do padre o e do bispo, tem o dinheiro que Severino
tirou da padaria
João Grilo: Bem que a gente podia ficar com a padaria
Chico: Ai meu meus, ai minha nossa senhora
João Grilo: Que foi João
Chico: Ai meu meus, ai minha nossa senhora
João Grilo: Pois diga homi
Chico: Ai meu deus, ai minha nossa senhora era rico nesse instante, agora é pobre de novo!!!
João Grilo: Mas pra que essa gritaria toda homi de deus?
Chico: Eu pensei que você tinha morrido João e eu prometi dar a nossa senhora todo o
dinheiro se você escapasse
João Grilo: Ai meu meus, ai minha nossa senhora
Chico: Ai meu meus, ai minha nossa senhora
João Grilo: Mas chico como que você faz uma promessa dessa?
Chico: O homi duro de morrer meu Deus
João Grilo: Ah promessa desgraçado, ah promessa sem jeito. Mas não terá sido a metade?
Chico: Não João, foi tudo... AI MEU DEUS, AI MINHA NOSSA SENHORA!!!
João Grilo: Oh mas parece disco arranhado
Chico: Com essa encrenca toda esqueci o dinheiro que devia pro major!!!! E você que me fez
dever esse dinheiro e ainda prometeu uma tira de couro das minhas costas
João Grilo: Ah promessa desgraçada, ah promessa sem jeito!
Chico: Ah promessa desgraçado, ah promessa sem jeito! Vamo pagar logo o que se deve!!!
João Grilo: Se fosse pra outro santo eu ia até tentar resolver... mas foi logo pra nossa senhora,
vai que foi ela que me tirou dessa...
Major: Então como é que é? Tem ou não tem dinheiro?
Chico: Tenho! Quer dizer, tinha!
Major: Então pode se virando pra cumprir o contrato
Rosinha: Pera ai meu pai. O que que estava no contrato mesmo?
Major: 10 contos de reis e uma tira de couro
João Grilo: Couro, couro?
Major: Couro, couro
Rosinha: Só couro?
Major: Só uma tirinha
Rosinha: Mas sem nenhuma gota de sangue que sangue não estava no contrato!!!
Major: Que história é essa?
João Grilo: A única palavra que se pronunciou nesse contrato foi couro! Ou o senhor tira uma
tirar de couro do chico sem tirar nenhum sangue ou não tira é nada!!!
Major: Eu devia lhe sangrar pelo pescoço cabra safado, mas só não faço isso porque o pior
castigo que eu posso dar pra minha filha é deixar ela casada com uma desgraça como você
Chico: Todo mundo liso de novo
Rosinha: De novo não meu filho, comigo é a primeira vez
João Grilo: Eu estive penando se não é melhor assim, quem sabe se ficando rico não terminava
como o padeiro, e depois que com a desgraça estamos acostumados
Chico: Falando nisso estou ficando com uma fome da mulesta
Rosinha: Sorte que eu fiquei com um pedacinho de bolo da festa
João Grilo: Oh dona rosinha, a senhora ta começando a aprender a ser pobre!!!!
Jesus: Uma esmola pelo amor de deus Que é pra eu tirar a barriga da miséria
Rosinha: Tome, meu senhor, e vá com Deus
Jesus: E vocês vão com ele
João Grilo: Danou-se dona rosinha, foi-se a comida quase toda
Chico: Deixa ué, ele também é filho de Deus
Rosinha: Jesus as vezes se disfarça de mendigo pra testar a bondade dos homens
João Grilo: Pode até acontecer, mas aquele ali não era não
Chico: Osh como é que você sabe?
João Grilo: Jesus? Pretinho daquele jeito? Kkkkkk

ACABOOOOOOU, ACABOOOUU GLORAI A DEUSSS, MEUS DEDOS ESTÃO
DOENDOOOOOOOOOO

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)