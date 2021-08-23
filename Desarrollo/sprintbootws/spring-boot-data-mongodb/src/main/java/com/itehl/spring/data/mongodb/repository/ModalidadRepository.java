package com.itehl.spring.data.mongodb.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.itehl.spring.data.mongodb.model.Modalidad;


public interface ModalidadRepository extends MongoRepository<Modalidad, String> {

	List<Modalidad> findByNombre(String nombre);	
	
}
