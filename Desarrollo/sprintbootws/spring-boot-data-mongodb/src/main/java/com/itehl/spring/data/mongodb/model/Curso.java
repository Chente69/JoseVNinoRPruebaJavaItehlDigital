package com.itehl.spring.data.mongodb.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cursos")
public class Curso {
	@Id
	private String id;
	private String nombre;
	private String costo;
	private String descripcion;
	private String horas;
	private String dirigidoA;
	private Modalidad modalidad;
	
	
	
	public Curso() {
	}
	
	
	public Curso( String nombre,  String descripcion,String costo, String horas, String dirigidoA,
			Modalidad modalidad) {
		super();

		this.nombre = nombre;
		this.costo = costo;
		this.descripcion = descripcion;
		this.horas = horas;
		this.dirigidoA = dirigidoA;
		this.modalidad = modalidad;
	}

	 @Override
	  public String toString() {
	    return String.format(
	        "Curso[id='%s', nombre='%s', costo='%s', descripcion='%s', horas='%s', dirigido a='%s', modalida='%s']",
	        id, nombre, costo,descripcion,horas,dirigidoA, modalidad.getNombre());
	  }




	public String getId() {
		return id;
	}


	public String getDescripcion() {
		return descripcion;
	}


	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}



	public String getNombre() {
		return nombre;
	}
	public String getCosto() {
		return costo;
	}

	public String getHoras() {
		return horas;
	}
	public String getDirigidoA() {
		return dirigidoA;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public void setCosto(String costo) {
		this.costo = costo;
	}

	public void setHoras(String horas) {
		this.horas = horas;
	}
	public void setDirigidoA(String dirigidoA) {
		this.dirigidoA = dirigidoA;
	}


	public Modalidad getModalidad() {
		return modalidad;
	}


	public void setModalidad(Modalidad modalidad) {
		this.modalidad = modalidad;
	}

	
	
	
}
