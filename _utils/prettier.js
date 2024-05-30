
const fs = require("fs");
const path = require("path");


   [
      ".css",
      ".graphql",
      ".js",
      ".json",
      ".jsx",
      ".less",
      ".sass",
      ".scss",
      ".ts",
      ".tsx",
      ".vue",
      ".yaml",
    ];

const DEFAULT_ENCODING = "utf-8";




    // Encoding to use when reading / writing files
    this.encoding = options.encoding || DEFAULT_ENCODING;
    delete options.encoding;

    // Only process these files
    this.extensions = options.extensions || DEFAULT_EXTENSIONS;
    delete options.extensions;

    // Utilize this config file for options
    this.configFile = options.configFile || DEFAULT_CONFIG_FILE;
    delete options.configFile;
    
    // Resolve the config options from file to an object
   
    
    
    
    // Fail silently
    this.failSilently = options.failSilently || false;
    delete options.failSilently;
}

 
    
        
  
        if (/node_modules/.exec(filepath)) {
          return;
        }
        promises.push(new Promise((resolve, reject) => {
          fs.readFile(filepath, this.encoding, (err, source) => {
            if (err) {
                return reject(err);
            }
            
            
              
                  resolve();
                });
              } else {
                resolve();
              }
            }
            catch(err){
                if(this.failSilently) resolve();
                else return reject(err);
            }
          });
        }));
      });
  
      Promise.all(promises).then(() => {
        callback();
      }).catch(err => {
        callback(err);
      });
    });
  }
};
