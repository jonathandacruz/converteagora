---
layout: page
title: Ferramentas de texto 
#background_style: bg-info
background_image: url('assets/img/backgrounds/text_header_img.jpg')


---

<section class="formulario">
<div class="textoHeader">
    <p> Basta escolher a formatação , inserir o texto e executar </p>
    <hr class="divider line-texto">
</div>



<form class="textoForm">

  <div class="align-rb">
      <div class="botao-p custom-control custom-radio">
        <input class="custom-control-input " type="radio" id="lowercase"  name="gender" value="lowercase" >
         <label class="custom-control-label rb-input" for="lowercase">Minúsculas</label>
      </div>
      <div class="botao-p custom-control custom-radio">
        <input class="custom-control-input" type="radio" id="uppercase" name="gender" value="uppercase">
        <label class="custom-control-label" for="uppercase">Maiúsculas</label>
      </div>
      <div class="botao-p custom-control custom-radio">   
        <input class="custom-control-input" type="radio" id="firstUppercase" name="gender" value="firstUppercase">
        <label class="custom-control-label" for="firstUppercase">Primeira Inicial Maiúscula</label>
      </div>
  </div>
  <div class="form-group">  
    <textarea class="form-control" type="text" id="textResult" name="fname"> </textarea>
    <small class="form-text text-muted"> Caracteres: <p class="lenghtTextArea" id="lenghtTextArea"> 0 </p></small>
  </div>

  <div class="align-bt">
    <button id="executeFunction" type="button" class="btn btn-secondary">Executar</button>
    <button id="executeFunctionCopy" type="button" class="btn btn-secondary">Copiar</button>
  </div>
</form>

<div class="text-information">
    <p> O que utilizar ?</p>
    <hr class="divider line-texto">
</div>

<div class="section-services-text">
    <div class="col-lg-3 col-md-6 text-center">
      <div class="mt-5">
        <i class="fas fa-4x fa-text-height text-primary mb-4"></i>
        <h3 class="h4 mb-2">Maiúsculas</h3>
        <div class="text-muted mb-0">
          Todas as letras MAIÚSCULAS, onde utilizar?
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 text-center">
      <div class="mt-5">
        <i class="fas fa-4x fa-file-powerpoint text-primary mb-4"></i>
        <h3 class="h4 mb-2">Minúsculas</h3>
        <div class="text-muted mb-0">
          Converter todas as letras minúsculas, como utilizar?
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 text-center">
      <div class="mt-5">
        <i class="fas fa-4x fa-subscript text-primary mb-4"></i>
        <h3 class="h4 mb-2">Primeira Inicial Maiúscula</h3>
        <div class="text-muted mb-0">
          A primeira inicial Maíúscula e sua utilização na prática.
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 text-center">
      <div class="mt-5">
        <i class="fas fa-4x fa-remove-format text-primary mb-4"></i>
        <h3 class="h4 mb-2">Formatação de Texto</h3>
        <div class="text-muted mb-0">
          Você pode copiar e colar um texto que possua uma fonte ou marcações.
        </div>
      </div>
    </div>
</div>

<div class="text-information">
    <p> Exemplos </p>
    <hr class="divider line-texto">
</div>

<div class="row suggest-format">
  <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Maiúsculas</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Minúsculas</a>
      <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Primeira Inicial Maiúscula</a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
        Em citações, quando utilizar o sobrenome de um autor<br>
        SOBRENOME, Nome. Título da obra: subtítulo (se houver). x. ed. Local: Editora, ano.
      </div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
        Para escrever nomes, substantivos ou objetos, usamos letra minúscula. Eles são chamados de nomes comuns e por isso são escritos com letras minúsculas.
      </div>
      <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
       - No começo do período, verso ou citação direta. <br>
       - Nos substantivos próprios de qualquer espécie - antropônimos, topônimos, patronímicos, cognomes, alcunhas, tribos e castas, designações de comunidades religiosas e políticas.<br>
       -  Nos nomes próprios de eras históricas e épocas notáveis <br>
       - Nos nomes de vias e lugares públicos<br>
       - Nos títulos de livros, jornais, revistas, produções artísticas, literárias e científicas
      </div>
    </div>
  </div>
</div>


</section>

