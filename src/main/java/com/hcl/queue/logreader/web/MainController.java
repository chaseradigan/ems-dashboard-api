package com.hcl.queue.logreader.web;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.queue.logreader.domain.Entry;
import com.hcl.queue.logreader.services.MainService;
import com.hcl.queue.logreader.services.MapValidationErrorService;
@CrossOrigin
@RestController
@RequestMapping("/")
public class MainController {
	
	@Autowired
	public MapValidationErrorService mapValidationErrorService;
	
	@Autowired
	public MainService mainService;
	
	//Change FILE PATHNAME in the method
	//
	
	@GetMapping("/test")
	public ResponseEntity<?> parseTargetFile(@RequestHeader(value="path") String path){
		
		String osname = System.getProperty("os.name");
		osname = osname.toLowerCase();
		System.out.println(osname);
		String homepath = System.getProperty("user.home");
		System.out.println(homepath);
		String pathname;
		if(osname.indexOf("win")>=0) {

			pathname = homepath+"\\"+path;
		}
		else {
		//Change this pathname to match your folder that contains the folders for EMS_U1 and EMS_U2
			pathname="/var/prod/tibco-shared/scripts/nikhil/"+path;
		}
		
		List<Entry> entries = new ArrayList<Entry>();
		try {
			entries = mainService.parseFileFromPath(pathname, entries);
		} catch (IOException e) {
			Map<String, String> responseMap = new HashMap<String, String>();
			responseMap.put("errors", e.getMessage());
			System.out.println(e.getMessage());
			return new ResponseEntity<Map<String, String>>(responseMap, HttpStatus.OK);
		} catch (ArrayIndexOutOfBoundsException e) {
			Map<String, String> responseMap = new HashMap<String, String>();
			responseMap.put("errors", "File format for "+pathname+" is incorrect seperate queue and consumer with space");
			System.out.println(e.getMessage());
			return new ResponseEntity<Map<String, String>>(responseMap, HttpStatus.OK);
		}
		return new ResponseEntity<List<Entry>>(entries, HttpStatus.OK);
	}

	@GetMapping("/queuelist")
	public ResponseEntity<?> queueList(@RequestHeader(value="path") String path){
		path = combinePath(path);
		Set<String> queueSet = new HashSet<>();
		try {
			queueSet = mainService.parseFileToMap(path);
		} catch (IOException e) {
			Map<String, String> responseMap = new HashMap<String, String>();
			responseMap.put("errors", e.getMessage());
			return new ResponseEntity<Map<String, String>>(responseMap, HttpStatus.OK);
		}
		Map<String, Set<String>> res = new HashMap<String, Set<String>>();
		res.put("queues", queueSet);
		return new ResponseEntity<Map<String, Set<String>>>(res, HttpStatus.OK);
	}
	
	@GetMapping("/getqueue")
	public ResponseEntity<?> getQueue(@RequestHeader(value="path") String path, @RequestHeader(value="queue") String queue){
		path = combinePath(path);
		System.out.println(path + " " + queue);
		List<String> list = mainService.getConsumerList(path, queue);
		if(list == null) {
			Map<String, String> responseMap = new HashMap<String, String>();
			responseMap.put("errors", "Please Refresh, Queue not found: " + queue);
			return new ResponseEntity<Map<String, String>>(responseMap, HttpStatus.OK);
		}
		Map<String, List<String>> res = new HashMap<String, List<String>>();
		res.put("consumers", list);
		return new ResponseEntity<Map<String, List<String>>>(res, HttpStatus.OK);
	}
	
	// path is up to /EMS_U1/APP_U1_p1d0_7022/logs/
		@GetMapping("/compare")
		public ResponseEntity<?> compare(@RequestHeader(value = "path") String path,
				@RequestHeader(value = "queue") String queue){
			String pathname = combinePath(path);
			
			List<String> list = mainService.getCompareList(pathname, queue);
			Map<String, List<String>> res = new HashMap<String, List<String>>();
			res.put("changes", list);
			return new ResponseEntity<Map<String, List<String>>>(res, HttpStatus.OK);
		}
		
		private String combinePath(String path) {
			String osname = System.getProperty("os.name");
			osname = osname.toLowerCase();
			System.out.println(osname);
			String homepath = System.getProperty("user.home");
			System.out.println(homepath);
			String pathname;
			if(osname.indexOf("win")>=0) {

				pathname = homepath+"\\"+path;
			}
			else {
			//Change this pathname to match your folder that contains the folders for EMS_U1 and EMS_U2
				pathname="/var/prod/tibco-shared/scripts/nikhil/"+path;
			}
			return pathname;
		}
}
