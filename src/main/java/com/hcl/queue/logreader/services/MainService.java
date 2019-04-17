package com.hcl.queue.logreader.services;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.stereotype.Service;

import com.hcl.queue.logreader.domain.Entry;

@Service
public class MainService {
	Map<String, Map<String, List<String>>> globalMap = new HashMap<>();
	
	public List<Entry> parseFileFromPath(String path, List<Entry> entryList) throws IOException {

		parseFileToMap(path);

		for (Map.Entry<String, List<String>> e : globalMap.get(path).entrySet()) {
			entryList.add(new Entry(e.getKey(), e.getValue()));
		}

		return entryList;
	}
	
	public Set<String> parseFileToMap(String path) throws IOException{
		globalMap.put(path, getOutput(path)); // update map from file
		
		return globalMap.get(path).keySet(); // returns the queue list
	}
	
	public List<String> getConsumerList(String path, String queue) {
		Map<String, List<String>> entryMap = globalMap.get(path);
		if(entryMap == null || !entryMap.containsKey(queue)) return null;
		List<String> res = entryMap.get(queue);
		return res;
	}
	
	public Map<String, List<String>> getOutput(String path) throws IOException {
		Map<String, List<String>> map = new HashMap<>();
        List<String> getList;

            BufferedReader br = new BufferedReader(new FileReader(path));
            String line;
            while ((line = br.readLine()) != null) {
                String[] arr = line.split("\\s+");
                add(map, arr[0], arr[1]);
            }
//            for (String key : map.keySet()) {
//                getList = map.get(key);
//                System.out.println("Queue Name: " + key);
//                System.out.println("Consumers:");
//                for (int i = 0; i < getList.size(); i++) {
//                    System.out.println(getList.get(i));
//                }
//                System.out.println("---------");
//            }
            br.close();

        return map;
    }
	
	private void add(Map<String, List<String>> map, String key, String value) {
        if (map.containsKey(key)) {
            List<String> values = map.get(key);
            values.add(value);
        }

        else {
            List<String> values = new ArrayList<>();
            values.add(value);
            map.put(key, values);
        }
    }
	
}
