package com.itehl.spring.data.mongodb.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.itehl.spring.data.mongodb.model.Curso;

public interface CursoRepository extends MongoRepository<Curso, String> {
	
}
