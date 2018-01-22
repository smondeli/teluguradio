package org.sreekanth.teluguradio;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TeluguradioController {
	
	@RequestMapping(value="/")
	public String index() {
		return "radio";
	}

}
