package sashank.projects.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sashank.projects.ems.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
