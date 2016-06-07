package com.example.dao;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.entity.Product;
@RepositoryRestResource
public interface ProductRepository extends PagingAndSortingRepository<Product, Integer>{
//List<Product> findById(@Param("id") int id);
}
