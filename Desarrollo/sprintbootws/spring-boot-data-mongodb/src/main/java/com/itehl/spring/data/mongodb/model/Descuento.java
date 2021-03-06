package com.itehl.spring.data.mongodb.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "descuentos")
public class Descuento {
	@Id
	private String id;
	private String nombre;
	private Curso curso;
	private String pais;
    private String descuento;
	private String fechaFinal;
	
	public Descuento() {	}
	
	public Descuento(Curso curso, String nombre,String pais, String descuento, String fechaFinal) {
        this.nombre = nombre;
		this.curso = curso;
		this.pais = pais;
		this.descuento = descuento;
		this.fechaFinal = fechaFinal;
	}

	public String getId() {
		return id;
	}

	public String getNombre() {
		return nombre;
	}

	public Curso getCurso() {
		return curso;
	}

	public String getPais() {
		return pais;
	}

	public String getDescuento() {
		return descuento;
	}

	public String getFechaFinal() {
		return fechaFinal;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public void setCurso(Curso curso) {
		this.curso = curso;
	}

	public void setPais(String pais) {
		this.pais = pais;
	}

	public void setDescuento(String descuento) {
		this.descuento = descuento;
	}

	public void setFechaFinal(String fechaFinal) {
		this.fechaFinal = fechaFinal;
	}
	
	
		
	
		
	 
	
	
	
	
}
