---
layout: home
header:
  title: Converter arquivos nunca foi tão fácil
  text: >
     Conheça nossas soluções em conversão de arquivos. Tudo 100% grátis.
  action: # action button is optional
    label: Converter
    url: '#services'


sections:

  - type: services.html
    section_id: services
    #background_style: bg-info
    title: Conversões
    services:
      - title: Converter Texto
        text:  Com uma simples caixa de texto resolva seu problema! Maiúsculas , Minúsculas e mais.
        icon: fa-spell-check text-info
        url: /texto
      - title: Site para PDF
        text: Transforme uma pagina da web em um arquivo PDF apenas inserindo a url.
        icon: fa-laptop-code text-info
        url: /url-to-pdf
      - title: Converter Arquivos   
        text: Em breve
        url: /#
        icon: fa-file-pdf text-info
      - title: Converter Moedas
        text: Em Breve
        icon: fa-coins text-info
        url: /#
  


  

  - type: call-to-action.html
    section_id: about
    background_style: bg-primary
    title: Tem alguma ideia? Conta mais!
    text: Se você tiver alguma sugestão ou alguma demanda para facilitar seu dia, e otimizar seu tempo , o que acha de resolver tudo por aqui mesmo? Gostaria de compartilhar com a gente ? 
    actions:
      - title: Demorou!
        url: '#contacts'
        class: btn-light


  - type: contact.html
    section_id: contacts
    title: Um café, por favor!
    text: >-
      Tem alguma dúvida, algum ideia, algum problema que precisa contar pra gente? Pode abrir a caixa de contato ou mandar por aqui
    actions:
    - title: E-Mail
      icon: fa-envelope
      url: mailto:jonathanadcz@gmail.com
    - title: Instagram
      icon: fa-instagram
      icon_type: fab
      url: 'https://www.instagram.com/converteagora/'
    - title: Facebook
      icon: fa-facebook
      icon_type: fab
      url: 'https://www.facebook.com/converteagora/'


---
<section id="donate" class="page-section bg-primary">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8 text-center">
        <h2 class="text-white mt-0 text-center">Que tal um café?</h2>
        <hr class="divider light my-4">
        <div class="text-white mb-4 ">Ei, quer ajudar nosso time a criar novas funcionalidades no site? Nada melhor que patrocinar nosso café, rsrs! Todas nossas ferramentas sempre serão grátis para uso.</div>
      </div>
    </div>
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="GBVWETC6G5SSQ" />
    <div class="row justify-content-center">
      <div class="col md-auto text-center">
          <button  class="btn btn-xl js-scroll-trigger btn-light"> Pagar Café</button>
      </div>
    </div>
  </form>

  </div>
</section>

