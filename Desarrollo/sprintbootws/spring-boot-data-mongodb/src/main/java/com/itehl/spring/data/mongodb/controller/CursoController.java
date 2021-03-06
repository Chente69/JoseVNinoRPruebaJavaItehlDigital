package com.itehl.spring.data.mongodb.controller;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.itehl.spring.data.mongodb.model.Curso;
import com.itehl.spring.data.mongodb.model.Descuento;
import com.itehl.spring.data.mongodb.model.Modalidad;
import com.itehl.spring.data.mongodb.repository.CursoRepository;
import com.itehl.spring.data.mongodb.repository.DescuentoRepository;
import com.itehl.spring.data.mongodb.repository.ModalidadRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")

public class CursoController {
	  @Autowired
	  CursoRepository cursoRepository;
	  
	  @Autowired
	  ModalidadRepository modalidadRepository;
	  
	  @Autowired
	  DescuentoRepository descuentoRepository;
	  
	  @GetMapping("/cursos")
	  public ResponseEntity<List<Curso>> getAllCursos(@RequestParam(required = false) String title) {
	    try {
	      List<Curso> cursos = new ArrayList<Curso>();

	      if (title == null)
	    	  cursoRepository.findAll().forEach(cursos::add);
	      //else
	    	//  cursoRepository.findByTitleContaining(title).forEach(cursos::add);

	      if (cursos.isEmpty()) {
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	      }

	      return new ResponseEntity<>(cursos, HttpStatus.OK);
	    } catch (Exception e) {
	      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }
	  
	  
	  @GetMapping("/cursos/{id}")
	  public ResponseEntity<Curso> getCursoById(@PathVariable("id") String id) {
	    Optional<Curso> cursoData = cursoRepository.findById(id);

	    if (cursoData.isPresent()) {
	      return new ResponseEntity<>(cursoData.get(), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }
	  
	  @PostMapping("/cursos")
	  public ResponseEntity<Curso> createCurso(@RequestBody Curso curso) {
		  
	    try { 
	      Modalidad _modaIns;
	      Modalidad moda= curso.getModalidad();
	      String nombreMod= moda.getNombre();
	      List<Modalidad> _modalidades = modalidadRepository.findByNombre(nombreMod);
	      if (_modalidades.isEmpty()) {
	    	  _modaIns= modalidadRepository.save(new Modalidad(moda.getNombre(),moda.getDescripcion()));
	      }else
	    	  _modaIns =_modalidades.get(0);
	    	  
	      Curso _curso = cursoRepository.save(new  Curso(curso.getNombre(), curso.getDescripcion(),curso.getCosto(),curso.getHoras(), curso.getDirigidoA(),_modaIns));
	      return new ResponseEntity<>(_curso, HttpStatus.CREATED);
	    } catch (Exception e) {
	      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }	  
	  


	  @PutMapping("/cursos/{id}")
	  public ResponseEntity<Curso> updateCurso(@PathVariable("id") String id, @RequestBody Curso curso) {
	    Optional<Curso> cursoData = cursoRepository.findById(id);

	    if (cursoData.isPresent()) {
	      Curso _curso = cursoData.get();

	      
	      _curso.setNombre(curso.getNombre());
	      _curso.setDescripcion(curso.getDescripcion());
	      _curso.setCosto(curso.getCosto());
	      _curso.setHoras(curso.getHoras());
	      _curso.setDirigidoA(curso.getDirigidoA());
	      
	      Modalidad _modaIns;
	      Modalidad moda= curso.getModalidad();
	      String nombreMod= moda.getNombre();
	      List<Modalidad> _modalidades = modalidadRepository.findByNombre(nombreMod);
	      if (_modalidades.isEmpty()) {
	    	  _modaIns= modalidadRepository.save(new Modalidad(moda.getNombre(),moda.getDescripcion()));
	      }else
	    	  _modaIns =_modalidades.get(0);
	 
	      _curso.setModalidad(_modaIns);
	      System.out.println("Curso a actualizar: " + _curso.toString());
	      return new ResponseEntity<>(cursoRepository.save(_curso), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }
	  @DeleteMapping("/cursos/{id}")
	  public ResponseEntity<HttpStatus> deleteCurso(@PathVariable("id") String id) {
	    try {
	      cursoRepository.deleteById(id);
	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }	 
	  
	  @DeleteMapping("/cursos")
	  public ResponseEntity<HttpStatus> deleteAllCursos() {
	    try {
	    	cursoRepository.deleteAll();
	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }	  
	  @GetMapping("/descuentos")
	  public ResponseEntity<List<Descuento>> getAllDescuentos(@RequestParam(required = false) String modalidad) {
	  
	    try {
		      List<Descuento> descuentos = new ArrayList<Descuento>();

		      if (modalidad == null)
		    	  descuentoRepository.findAll().forEach(descuentos::add);
		      else {
		    	//  cursoRepository.findByTitleContaining(title).forEach(cursos::add);
		    	 
		      }

		      if (descuentos.isEmpty()) {
		        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		      }

		      return new ResponseEntity<>(descuentos, HttpStatus.OK);
		    } catch (Exception e) {
		      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		    }

	  }
	  
	  @PostMapping("/descuentos")
	  public ResponseEntity<Descuento> createDescuento(@RequestBody Descuento descuento) {
		  try { 
			  Curso curso= descuento.getCurso();
			  Modalidad moda= curso.getModalidad();
			  Descuento nuevoDescuento = new Descuento(curso,descuento.getNombre(),descuento.getPais(),descuento.getDescuento(),descuento.getFechaFinal());
			  Descuento _descuento = descuentoRepository.save(nuevoDescuento);
			  return null;
		  } catch (Exception e) {
			      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		  }
	  }
}
