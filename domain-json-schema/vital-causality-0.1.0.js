if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var vital_causality_0_1_0_schema = {
  "domainURI" : "http://vital.ai/ontology/vital-causality",
  "name" : "vital-causality-0.1.0",
  "version" : "0.1.0",
  "domainOWLHash" : "802f9fd996bb40cfd5c85e52390aa05d",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ "http://vital.ai/ontology/vital" ],
  "schemas" : [ ],
  "properties" : [ ]
};

VITAL_JSON_SCHEMAS.push(vital_causality_0_1_0_schema);

if(typeof(module) !== 'undefined') {

  module.exports = vital_causality_0_1_0_schema;

}