---
layout: page
title: Transformar site em PDF
#background_style: bg-info
background_image: url('assets/img/backgrounds/text_header_img.jpg')

---
<section class="formulario">
<div id="topPage" class="text-information">
    <p> Pronto para começar?</p>
    <hr class="divider line-texto">
</div>

<form method="post">
  <div class="form-group input-group mb-3 group-url-site ">
    <div class="btn-url-bts">
      <input class="form-control inputURL" placeholder="URL do site" type="url" id="inputURL" name="inputURL" required> 
      <div class="input-group-append">
        <button id="callFunctionAPI" class="btn btn-success" type="button">Gerar</button>
      </div>
    </div> 
    <div class="text-information"> 
      <div id="waitingProcessArc" class="waitingProcessArc"> </div>
    </div>
  </div>

  <div class="text-information ">
    <p> Parâmetros Adicionais</p>
    <hr class="divider line-texto">
</div>
  <div class="row">
  <div class="form-group col-md-6">
    <label for="archiveName">Nome do arquivo PDF</label>
    <input class="form-control" maxlength="30" type="text" id="archiveName" name="archiveName">
    <small id="archiveHelp" class="form-text text-muted"> Apenas 30 caracteres são permitidos</small>
  </div>  
  <div class="form-group col-md-6">
    <label for="paperFormat">Formato do Papel</label>
    <select class="form-control" id="paperFormat">
      <option value="&pdf.format=A0&pdf.landscape=false">A0</option>
      <option value="&pdf.format=A1&pdf.landscape=false">A1</option>
      <option value="&pdf.format=A2&pdf.landscape=false">A2</option>
      <option value="&pdf.format=A3&pdf.landscape=false">A3</option>
      <option value="&pdf.format=A4&pdf.landscape=false" selected>A4</option>
      <option value="&pdf.format=A5&pdf.landscape=true">A5 - Landscape</option>
      <option value="&pdf.format=A6&pdf.landscape=true">A6 - Landscape</option>
    </select>
  </div>
  </div>

  <div class="form-group row">
    <div class="col-md-6">
      <label for="pageRangesFirst">Iniciar cópia na pagina</label>
      <input class="form-control" type="number" id="pageRangesFirst" name="pageRangesFirst">
    </div>
    <div class="col-md-6">
      <label for="pageRangesLast">Finalizar cópia na pagina</label>
      <input class="form-control" type="number" id="pageRangesLast" name="pageRangesLast">
    </div>
  
 </div> 
  <div class="form-group row">
    <div class="col-md-6">
      <label for="pdfWidth">Largura do arquivo</label>
      <input class="form-control" type="number" id="pdfWidth" name="pdfWidth">
    </div>
    <div class="col-md-6">
      <label for="pdfHeight">Altura do arquivo</label>
      <input class="form-control" type="number" id="pdfHeight" name="pdfHeight">
    </div>
  </div>
  <div class="form-group row">
    <div class="col-md-3">
      <label for="pdfMarginTop">Margem superior</label>
      <input class="form-control" type="number" id="pdfMarginTop" name="pdfMarginTop">
    </div>
    <div class="col-md-3">
      <label for="pdfMarginRight">Margem direita</label>
      <input class="form-control" type="number" id="pdfMarginRight" name="pdfMarginRight">
    </div>
    <div class="col-md-3">
      <label for="pdfMarginBottom">Margem inferior</label>
      <input class="form-control" type="number" id="pdfMarginBottom" name="pdfMarginBottom">
    </div>
    <div class="col-md-3">
      <label for="pdfMarginLeft">Margem esquerda</label>
      <input class="form-control" type="number" id="pdfMarginLeft" name="pdfMarginLeft">
    </div>
  </div>
  <div id="waitingProcessArc" class="waitingProcessArc"> </div>
  <button id="resetForms" type="reset" class="btn btn-danger">Limpar Parâmetros</button>
</form>



<section class="howToUse">
<div class="text-information">
    <p> Exemplos de uso</p>
    <hr class="divider line-texto">
</div>

<div>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th class="col-parameter" scope="col">Parâmetro</th>
        <th scope="col">Instrução de uso</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th  scope="row">Nome do arquivo</th>
        <td>A sequência de letras especificada será usada como o nome do arquivo.</td>
      </tr>
      <tr>
        <th scope="row">Páginas Personalizadas</th>
        <td>Faixas de papel para impressão, por exemplo, '1-5, 8, 11-13'. O padrão é a sequência vazia, o que significa imprimir todas as páginas.</td>
      </tr>
      <tr>
        <th scope="row">Formato do papel</th>
        <td>Especifica qual o formato de saída para o documento exportado - o padrão é A4 </td>
      </tr>
      <tr>
        <th  scope="row">Largura X Altura</th>
        <td>Especifica o tamanho de corte da pagina em questão. O conteúdo não será renderizado de acordo com as dimensões. </td>
      </tr>
      <tr>
        <th scope="row">Margens</th>
        <td>Defina as margens para o documento de saída. A escala é medida em centímetros. </td>
      </tr>
    </tbody>
  </table>
</div>

</section>


</section>