package ee.mihkel.backend.controller;

import ee.mihkel.backend.model.Item;
import ee.mihkel.backend.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("items")
    public List<Item> getItems() {
        return itemService.getItems();
    }

    @PostMapping("items")
    public void postItem(@RequestBody Item item) {
        itemService.saveItem(item);
    }

    @DeleteMapping("delete-item/{id}")
    public List<Item> deleteItem(@PathVariable Long id) {
        itemService.deleteItem(id);
        return itemService.getItems();
    }

    @PostMapping("edit-item")
    public void editItem(@RequestBody Item item) {
        itemService.editItem(item);
    }

   /* @GetMapping("view-item/{id}")
    public Item getOneItem(@PathVariable Long id) {
        return itemService.getOneItem(id);
    }*/
    // tehke serverile restart
    // localhost:8080/items

    // delete päringu
    // edit päringu
    // view one item päringu

    // andmebaas

    // kategooria osas
}
