package com.example.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.entity.Product;
@RepositoryRestResource
public interface ProductRepository extends CrudRepository<Product, Integer>{
//List<Product> getProduct();
}
