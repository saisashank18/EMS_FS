package sashank.projects.ems.service;

import sashank.projects.ems.entity.User;

import java.util.Optional;

public interface UserService {
    Optional<User> findByEmail(String email);

    void save(User user);
}
