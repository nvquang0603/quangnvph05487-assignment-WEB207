import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  cateId: string;
  product = {
    name: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(''),
    detail: new FormControl(''),
    amount: new FormControl(''),
    status: new FormControl(false),
  };
  ngOnInit() {
    this.cateId = this.route.snapshot.params.cateId;
  }
  saveProduct() {
    const sendData = {
      name: this.product.name.value,
      image: this.product.image.value,
      price: this.product.price.value,
      detail: this.product.detail.value,
      amount: this.product.amount.value,
      status: this.product.status.value,
      cate_id: this.cateId
    };
    this.productService.addProduct(sendData)
      .subscribe(data => {
        this.product = {
          name: new FormControl(''),
          image: new FormControl(''),
          price: new FormControl(''),
          detail: new FormControl(''),
          amount: new FormControl(''),
          status: new FormControl(''),
        };
        this.router.navigate(['/']);
      });
  }
}
