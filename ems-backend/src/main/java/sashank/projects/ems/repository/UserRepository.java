package sashank.projects.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sashank.projects.ems.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

}
