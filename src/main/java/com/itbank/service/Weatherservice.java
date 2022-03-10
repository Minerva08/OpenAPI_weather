package com.itbank.service;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

import org.springframework.stereotype.Service;

@Service
public class Weatherservice {

	
	public String getData_t() throws IOException {
		String url = "http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa";
		String serviceKey = "GEUhUxSO%2Bjvcfq6CUcBdlbPvTaGZOunL3C%2FIGVMguG%2F5Dm9Bl7tXeITod5ABHKYKmQ2jKwbbpRDXVBTUhVkkGQ%3D%3D";
		
		Date date = new Date();
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHH");
		
		String time = sdf.format(date);
		
		String time_f = time.substring(0,8);
		int time_e = Integer.parseInt(time.substring(8));
		
		String hour = "";
		if(time_e>18) {
			hour+="18";
		}
		else {
			hour+="06";
		}
		
		String today="";
		today+=(time_f+hour);
	 
		String queryString = "?";
		queryString += "serviceKey=" 	+ serviceKey 	+ "&";
		queryString += "pageNo=" 		+ 1 			+ "&";
		queryString += "numOfRows=" 	+ 10 			+ "&";
		queryString += "dataType=" 		+ "XML"			+ "&";
		queryString += "regId=" 		+ "11H20201"	+ "&";
		queryString += "tmFc=" 			+ today;
		
		URL requestURL = new URL(url + queryString);
		HttpURLConnection conn = (HttpURLConnection) requestURL.openConnection();
		conn.setRequestMethod("GET");
		conn.setRequestProperty("Content-Type", "application/json; charset=utf-8");
		
		Scanner sc = null;
		String xmlData = "";
		
		if(conn.getResponseCode() == 200) {
			sc = new Scanner(conn.getInputStream());
			while(sc.hasNextLine()) {
				xmlData += sc.nextLine();
			}
			sc.close();
			conn.disconnect();
			System.out.println("1:"+xmlData);
			return xmlData;
		}
		return null;
	}
	
	
	
public String getData_w() throws IOException {
	
		String url = "http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst";
		String serviceKey = "GEUhUxSO%2Bjvcfq6CUcBdlbPvTaGZOunL3C%2FIGVMguG%2F5Dm9Bl7tXeITod5ABHKYKmQ2jKwbbpRDXVBTUhVkkGQ%3D%3D";
		
		
		
		String queryString = "?";
		queryString += "serviceKey=" 	+ serviceKey 	+ "&";
		queryString += "pageNo=" 		+ 1 			+ "&";
		queryString += "numOfRows=" 	+ 10 			+ "&";
		queryString += "dataType=" 		+ "XML"			+ "&";
		queryString += "regId=" 		+ "11H20000"	+ "&";
		queryString += "tmFc=" 			+ 2022011706;
		
		URL requestURL = new URL(url + queryString);
		HttpURLConnection conn = (HttpURLConnection) requestURL.openConnection();
		conn.setRequestMethod("GET");
		conn.setRequestProperty("Content-Type", "application/json; charset=utf-8");
		
		Scanner sc = null;
		String xmlData = "";
		
		if(conn.getResponseCode() == 200) {
			sc = new Scanner(conn.getInputStream());
			while(sc.hasNextLine()) {
				xmlData += sc.nextLine();
			}
			sc.close();
			conn.disconnect();
			System.out.println("2:"+xmlData);
			return xmlData;
		}
		return null;
	}
}
