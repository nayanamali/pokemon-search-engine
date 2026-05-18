package com.pokedex.backend.controller;

import com.pokedex.backend.service.PokemonService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/pokemon")
@CrossOrigin(origins = "http://localhost:5173")
public class PokemonController {

    private final PokemonService pokemonService;

    public PokemonController(PokemonService pokemonService) {
        this.pokemonService = pokemonService;
    }

    @GetMapping("/{name}")
    public ResponseEntity<Map> getPokemon(
            @PathVariable String name
    ) {

        return ResponseEntity.ok(
                pokemonService.getPokemon(name)
        );
    }
}