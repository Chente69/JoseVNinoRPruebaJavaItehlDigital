package com.itehl.spring.data.mongodb.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.itehl.spring.data.mongodb.model.Descuento;
public interface DescuentoRepository extends MongoRepository<Descuento, String> {

}
