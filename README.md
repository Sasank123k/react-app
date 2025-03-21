{
  "utcap_metadata_tag_template": {
    "type": "object",
    "required": true,
    "properties": {
      "Drt_id": { "type": "string", "required": true, "default": "ORT ID" },
      "Confidential_Data_Indicator": { "type": "string", "required": true, "default": "Confidential Data Indicator" }
    }
  },
  "utcap_taxonomy_tag_template": {
    "type": "object",
    "required": true,
    "properties": {
      "Confidential_Type": { "type": "string", "required": true, "default": "Confidential type of the field" },
      "GCP_infotype_1": { "type": "string", "required": true, "default": "Information type 1 of the confidential field" },
      "GCP_infotype_2": { "type": "string", "required": true, "default": "Information type 2 of the confidential field" },
      "Encryption_Level": { "type": "string", "required": true, "default": "Encryption level for the field" },
      "Filter_Criteria": { "type": "string", "required": true, "default": "Filter criteria for the confidential field" }
    }
  }
}



import java.util.LinkedHashMap;
import java.util.Map;

public class MetadataGenerator {

    public Object fileSetMetaData() {
        // Step 1: Define a reusable keyProp with type, required, and default (corrected values)
        Map<String, Object> createKeyProp(String key, String defaultValue) {
            Map<String, Object> prop = new LinkedHashMap<>();
            prop.put("type", "string");
            prop.put("required", true);
            prop.put("default", defaultValue);  // The default value is taken from the image
            return prop;
        }

        // Step 2: Define properties for utcap_metadata_tag_template
        Map<String, Object> metadataProperties = new LinkedHashMap<>();
        metadataProperties.put("Drt_id", createKeyProp("Drt_id", "ORT ID"));
        metadataProperties.put("Confidential_Data_Indicator", createKeyProp("Confidential_Data_Indicator", "Confidential Data Indicator"));

        Map<String, Object> utcapMetadataTagTemplate = new LinkedHashMap<>();
        utcapMetadataTagTemplate.put("type", "object");
        utcapMetadataTagTemplate.put("required", true);
        utcapMetadataTagTemplate.put("properties", metadataProperties);

        // Step 3: Define properties for utcap_taxonomy_tag_template
        Map<String, Object> taxonomyProperties = new LinkedHashMap<>();
        taxonomyProperties.put("Confidential_Type", createKeyProp("Confidential_Type", "Confidential type of the field"));
        taxonomyProperties.put("GCP_infotype_1", createKeyProp("GCP_infotype_1", "Information type 1 of the confidential field"));
        taxonomyProperties.put("GCP_infotype_2", createKeyProp("GCP_infotype_2", "Information type 2 of the confidential field"));
        taxonomyProperties.put("Encryption_Level", createKeyProp("Encryption_Level", "Encryption level for the field"));
        taxonomyProperties.put("Filter_Criteria", createKeyProp("Filter_Criteria", "Filter criteria for the confidential field"));

        Map<String, Object> utcapTaxonomyTagTemplate = new LinkedHashMap<>();
        utcapTaxonomyTagTemplate.put("type", "object");
        utcapTaxonomyTagTemplate.put("required", true);
        utcapTaxonomyTagTemplate.put("properties", taxonomyProperties);

        // Step 4: Combine both templates into the final metadata map
        Map<String, Object> metadata = new LinkedHashMap<>();
        metadata.put("utcap_metadata_tag_template", utcapMetadataTagTemplate);
        metadata.put("utcap_taxonomy_tag_template", utcapTaxonomyTagTemplate);

        return metadata;
    }

    public static void main(String[] args) {
        MetadataGenerator generator = new MetadataGenerator();
        Object metadata = generator.fileSetMetaData();
        System.out.println(metadata);
    }
}


{
  utcap_metadata_tag_template: {
    type: object,
    required: true,
    properties: {
      Drt_id: { type: string, required: true, default: ORT ID },
      Confidential_Data_Indicator: { type: string, required: true, default: Confidential Data Indicator }
    }
  },
  utcap_taxonomy_tag_template: {
    type: object,
    required: true,
    properties: {
      Confidential_Type: { type: string, required: true, default: Confidential type of the field },
      GCP_infotype_1: { type: string, required: true, default: Information type 1 of the confidential field },
      GCP_infotype_2: { type: string, required: true, default: Information type 2 of the confidential field },
      Encryption_Level: { type: string, required: true, default: Encryption level for the field },
      Filter_Criteria: { type: string, required: true, default: Filter criteria for the confidential field }
    }
  }
}
