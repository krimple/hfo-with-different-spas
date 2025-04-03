
package com.example.orders;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderRepository repo;

    public OrderController(OrderRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Order> getOrders() {
        return repo.findAll();
    }

    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        return repo.save(order);
    }
}
