export namespace main {
	
	export class Videos {
	    path: string;
	    name: string;
	    List: string;
	    thumb: string;
	    history: string[];
	
	    static createFrom(source: any = {}) {
	        return new Videos(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.path = source["path"];
	        this.name = source["name"];
	        this.List = source["List"];
	        this.thumb = source["thumb"];
	        this.history = source["history"];
	    }
	}

}

