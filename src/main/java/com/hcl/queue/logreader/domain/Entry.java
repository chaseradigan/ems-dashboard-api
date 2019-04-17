package com.hcl.queue.logreader.domain;

import java.util.List;

import lombok.Data;

@Data
public class Entry {
	private String server;
	private List<String> consumers;
		public Entry(String server, List<String> consumers) {
		this.server = server;
		this.consumers = consumers;
	}
	
}
