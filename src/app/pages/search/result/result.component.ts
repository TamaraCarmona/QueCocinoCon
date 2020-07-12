import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/search.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private search : SearchService) { }

  titulo;
  categoria;
  usuario;
  urlFoto;


  ngOnInit(): void {
    this.titulo = this.search.tituloReceta;
    this.categoria = this.search.categoriaRpta;
    this.usuario = this.search.usuario;
    this.urlFoto = this.search.urlFotoReceta;
  }

}
