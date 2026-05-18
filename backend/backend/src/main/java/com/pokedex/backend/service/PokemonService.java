package com.pokedex.backend.service;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class PokemonService {

    private final RestTemplate restTemplate;

    public PokemonService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "pokemon", key = "#name")
    public Map getPokemon(String name) {

        String url =
                "https://pokeapi.co/api/v2/pokemon/"
                        + name.toLowerCase();

        return restTemplate.getForObject(
                url,
                Map.class
        );
    }
}