if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var vital_test_0_2_304_schema = {
  "domainURI" : "http://vital.ai/ontology/vital-test",
  "name" : "vital-test-0.2.304",
  "version" : "0.2.304",
  "domainOWLHash" : "8768dfdb595e2611ef119831c80afcce",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ "http://vital.ai/ontology/vital" ],
  "schemas" : [ {
    "id" : "http://vital.ai/ontology/vital-test#Edge_hasTestNode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-test#TestNode" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-test#TestNode" ],
    "properties" : {
    }
  }, {
    "id" : "http://vital.ai/ontology/vital-test#TestNode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "properties" : {
      "http://vital.ai/ontology/vital-test#hasTestDateTimeProperty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-test#hasTestDoubleProperty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-test#hasTestGeolocationProperty" : {
        "type" : "object",
        "properties" : {
          "longitude" : {
            "type" : "number"
          },
          "latitude" : {
            "type" : "number"
          }
        },
        "required" : [ "longitude", "latitude" ],
        "additionalProperties" : false
      },
      "http://vital.ai/ontology/vital-test#hasTestIntegerProperty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-test#hasTestMultiDateTimeProperty" : {
        "type" : "array",
        "items" : {
          "type" : "number"
        }
      },
      "http://vital.ai/ontology/vital-test#hasTestMultiGeoLocationProperty" : {
        "type" : "array",
        "items" : {
          "type" : "object",
          "properties" : {
            "longitude" : {
              "type" : "number"
            },
            "latitude" : {
              "type" : "number"
            }
          },
          "required" : [ "longitude", "latitude" ],
          "additionalProperties" : false
        }
      },
      "http://vital.ai/ontology/vital-test#hasTestMultiIntegerProperty" : {
        "type" : "array",
        "items" : {
          "type" : "number"
        }
      },
      "http://vital.ai/ontology/vital-test#hasTestMultiStringProperty" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/vital-test#hasTestMultiURIPropertyURIs" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/vital-test#hasTestStringProperty" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-test#hasTestTruthProperty" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-test#hasTestURIPropertyURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-test#isTestBooleanProperty" : {
        "type" : "boolean"
      }
    }
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/vital-test#hasTestDateTimeProperty",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-test#TestNode" ],
    "shortName" : "testDateTimeProperty",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-test#hasTestDoubleProperty",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-test#TestNode" ],
    "shortName" : "testDoubleProperty",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-test#hasTestGeolocationProperty",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-test#TestNode" ],
    "shortName" : "testGeolocationProperty",
    "multipleValues" : false,
    "type" : "GeoLocationProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-test#hasTestIntegerProperty",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-test#TestNode" ],
    "shortName" : "testIntegerProperty",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-test#hasTestMultiDateTimeProperty",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-test#TestNode" ],
    "shortName" : "testMultiDateTimeProperty",
    "multipleValues" : true,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-test#hasTestMultiGeoLocationProperty",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-test#TestNode" ],
    "shortName" : "testMultiGeoLocationProperty",
    "multipleValues" : true,
    "type" : "GeoLocationProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-test#hasTestMultiIntegerProperty",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-test#TestNode" ],
    "shortName" : "testMultiIntegerProperty",
    "multipleValues" : true,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-test#hasTestMultiStringProperty",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-test#TestNode" ],
    "shortName" : "testMultiStringProperty",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-test#hasTestMultiURIPropertyURIs",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-test#TestNode" ],
    "shortName" : "testMultiURIPropertyURIs",
    "multipleValues" : true,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-test#hasTestStringProperty",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-test#TestNode" ],
    "shortName" : "testStringProperty",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-test#hasTestTruthProperty",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-test#TestNode" ],
    "shortName" : "testTruthProperty",
    "multipleValues" : false,
    "type" : "TruthProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-test#hasTestURIPropertyURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-test#TestNode" ],
    "shortName" : "testURIPropertyURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-test#isTestBooleanProperty",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-test#TestNode" ],
    "shortName" : "testBooleanProperty",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

VITAL_JSON_SCHEMAS.push(vital_test_0_2_304_schema);

if(typeof(module) !== 'undefined') {

  module.exports = vital_test_0_2_304_schema;

}