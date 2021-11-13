package com.garethyao.onlineorder.service;

import com.garethyao.onlineorder.dao.CustomerDao;
import com.garethyao.onlineorder.entity.Cart;
import com.garethyao.onlineorder.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class CustomerService {


    private CustomerDao customerDao;
    @Autowired
    public CustomerService(CustomerDao customerDao) {
        this.customerDao = customerDao;
    }
    public void signUp(Customer customer) throws Exception {
        customer.setEnabled(true);
        Cart cart = new Cart();
        customer.setCart(cart);
        try{
            customerDao.signUp(customer);
        } catch(Exception ex) {
            throw ex;
        }

    }

    public Customer getCustomer(String email) {
        return customerDao.getCustomer(email);
    }
}

