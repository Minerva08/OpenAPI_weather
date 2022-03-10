package com.itbank.controller;

import java.io.IOException;
import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.json.XML;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itbank.service.Weatherservice;


@RestController
public class Ajaxcontroller {
	@Autowired Weatherservice ws;
	
	@GetMapping(value="/temp", produces="application/json; charset=utf-8")
	public String temp() throws IOException {
		
		String xml = ws.getData_t();
		if(xml != null) {
			System.out.println("1 :"
					+xml);
			String json = XML.toJSONObject(xml).toString();
			return json;
		}
		return "{\"message\" : \"no data\"}";
	}
	
	@GetMapping(value="/weather", produces="application/json; charset=utf-8")
	public String weather() throws IOException {
		
		String xml = ws.getData_w();
		if(xml != null) {
			System.out.println("1 :"
					+xml);
			String json = XML.toJSONObject(xml).toString();
			return json;
		}
		return "{\"message\" : \"no data\"}";
	}
	
}
