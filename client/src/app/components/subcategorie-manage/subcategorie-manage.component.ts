import { Component, OnInit } from '@angular/core';
import { SubcategoriesService } from '../../services/subcategories.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-subcategorie-manage',
  templateUrl: './subcategorie-manage.component.html',
  styleUrls: ['./subcategorie-manage.component.css']
})
export class SubcategorieManageComponent implements OnInit {

  constructor( private subcategoriesService: SubcategoriesService) { }
  date = new Date() + '';

  selectedOption:string;
  categories: any = [];
  subcategories: any = [];

  catForm= FormGroup;
  
  ngOnInit(): void {
    this.getCategories();
    this.onChange;
  }

  getSubcategories(id: string){
    this.subcategoriesService.getSubcategories(id).subscribe(
      res => {
        this.subcategories = res;
      },
      err => console.error(err)
    );
  }

  getCategories(){
    this.subcategoriesService.getCategories().subscribe(
      res => {
        this.categories = res;
      },
      err => console.error(err)
    );
  }

  onChange(selectedOption){
    this.getSubcategories(selectedOption);
  }

  deleteSubcategorie(id:string){
    this.subcategoriesService.deleteSubcategorie(id).subscribe(
      res =>{
        console.log(res);
        this.onChange;
        this.getCategories();
      },
      err => console.error(err)
    );
  }

}
