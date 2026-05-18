package com.pokedex.backend.dto;

import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
public class PokemonResponse {

    private String name;
    private int height;
    private int weight;
    private int base_experience;

    private Map<String, Object> sprites;

    private List<Object> abilities;
    private List<Object> types;
    private List<Object> stats;
}