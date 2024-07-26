package com.ecarsm.petgo.api.model.animal;

import com.ecarsm.petgo.api.baseline.helper.MyDate;
import com.ecarsm.petgo.api.model.category.Category;
import java.io.Serializable;
import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PostLoad;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldNameConstants;

/**
 *
 * @author Ecar. S. M.
 */
@Entity
@Table(name = "ANIMAL")
@Data
@FieldNameConstants(innerTypeName = "Field")
@AllArgsConstructor
@NoArgsConstructor
public class Animal implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "ANIMAL_NAME", length = 100)
    @NotNull
    @Size(max = 100)
    private String name;

    @Column(name = "DESCRIPTION", length = 500)
    @Size(max = 500)
    @NotNull
    private String description;

    @Column(name = "IMAGE_URL", length = 1000)
    @Size(max = 1000)
    @NotNull
    private String imageUrl;

    @ManyToOne(optional = false)
    @JoinColumn(name = "CATEGORY", referencedColumnName = "ID")
    private Category category;

    @Column(name = "BIRTH_DATE")
    @NotNull
    private LocalDate birthDate;

    @Column(name = "STATUS")
    @NotNull
    private Boolean status;

    @Transient
    private MyDate birthDateConverted;

    @PostLoad
    public void convert() {
        this.birthDateConverted = new MyDate(this.birthDate);
    }
}
