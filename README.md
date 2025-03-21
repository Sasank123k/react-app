import java.util.LinkedHashMap;
import java.util.Map;

public class MetadataGenerator {

    public Object fileSetMetaData(String utcapMetadata, String utcapTaxonomy) {
        // Define properties for utcap_metadata_tag_template
        Map<String, Object> drtId = new LinkedHashMap<>();
        drtId.put("type", "string");
        drtId.put("required", true);

        Map<String, Object> confidentialDataIndicator = new LinkedHashMap<>();
        confidentialDataIndicator.put("type", "string");
        confidentialDataIndicator.put("required", true);

        Map<String, Object> metadataProperties = new LinkedHashMap<>();
        metadataProperties.put("Drt_id", drtId);
        metadataProperties.put("Confidential_Data_Indicator", confidentialDataIndicator);

        Map<String, Object> utcapMetadataTagTemplate = new LinkedHashMap<>();
        utcapMetadataTagTemplate.put("type", "object");
        utcapMetadataTagTemplate.put("required", true);
        utcapMetadataTagTemplate.put("properties", metadataProperties);

        // Define properties for utcap_taxonomy_tag_template
        Map<String, Object> confidentialType = new LinkedHashMap<>();
        confidentialType.put("type", "string");
        confidentialType.put("required", true);

        Map<String, Object> gcpInfotype1 = new LinkedHashMap<>();
        gcpInfotype1.put("type", "string");
        gcpInfotype1.put("required", true);

        Map<String, Object> gcpInfotype2 = new LinkedHashMap<>();
        gcpInfotype2.put("type", "string");
        gcpInfotype2.put("required", true);

        Map<String, Object> encryptionLevel = new LinkedHashMap<>();
        encryptionLevel.put("type", "string");
        encryptionLevel.put("required", true);

        Map<String, Object> filterCriteria = new LinkedHashMap<>();
        filterCriteria.put("type", "string");
        filterCriteria.put("required", true);

        Map<String, Object> taxonomyProperties = new LinkedHashMap<>();
        taxonomyProperties.put("Confidential_Type", confidentialType);
        taxonomyProperties.put("GCP_infotype_1", gcpInfotype1);
        taxonomyProperties.put("GCP_infotype_2", gcpInfotype2);
        taxonomyProperties.put("Encryption_Level", encryptionLevel);
        taxonomyProperties.put("Filter_Criteria", filterCriteria);

        Map<String, Object> utcapTaxonomyTagTemplate = new LinkedHashMap<>();
        utcapTaxonomyTagTemplate.put("type", "object");
        utcapTaxonomyTagTemplate.put("required", true);
        utcapTaxonomyTagTemplate.put("properties", taxonomyProperties);

        // Combine both templates into the final metadata map
        Map<String, Object> metadata = new LinkedHashMap<>();
        metadata.put("utcap_metadata_tag_template", utcapMetadataTagTemplate);
        metadata.put("utcap_taxonomy_tag_template", utcapTaxonomyTagTemplate);

        return metadata;
    }

    public static void main(String[] args) {
        MetadataGenerator generator = new MetadataGenerator();
        Object metadata = generator.fileSetMetaData("utcap_metadata", "utcap_taxonomy");
        System.out.println(metadata);
    }
}
