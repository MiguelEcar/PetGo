package com.ecarsm.petgo.api.model.category.repository;

import com.ecarsm.petgo.api.model.category.Category;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CategoryRep extends JpaRepository<Category, Long> {


}
