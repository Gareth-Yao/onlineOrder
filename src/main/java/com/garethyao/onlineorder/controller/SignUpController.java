package com.garethyao.onlineorder.controller;

import com.garethyao.onlineorder.dao.CustomerDao;
import com.garethyao.onlineorder.entity.Customer;
import com.garethyao.onlineorder.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;

@Controller
public class SignUpController {

    private CustomerService customerService;
    @Autowired
    public SignUpController(CustomerService customerService) {
        this.customerService = customerService;
    }
    @RequestMapping(value="/signup", method = RequestMethod.POST)

    public ResponseEntity<Void> signup(@RequestBody Customer customer) {

        try {
            customerService.signUp(customer);
        }catch (Exception ex) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
