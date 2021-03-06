package com.itehl.spring.data.mongodb.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "modalidades")
public class Modalidad {
	@Id
	private String id;
	private String nombre;
	private String descripcion;
	
	
	public Modalidad() {}
	
	
	
	public Modalidad(String nombre, String descripcion) {
		this.nombre = nombre;
		this.descripcion = descripcion;
	}




	public String getId() {
		return id;
	}



	public String getNombre() {
		return nombre;
	}
	public String getDescripcion() {
		return descripcion;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
	 @Override
	  public String toString() {
	    return String.format(
	        "Modalidad[id='%s',  nombre='%s',  descripcion='%s']",
	        id, nombre, descripcion);
	  }	
}
