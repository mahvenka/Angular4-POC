export function getUrl(formId, section, moduleName, kyc){
    let loadCivQuestions = `restservices/FormMetaDataService/retrieveFormMetaData/formId/${formId}/sectionName/${section}/moduleName/${moduleName}/clientType/XLGCORP/langID/EN/kycID/${kyc}`;
    return loadCivQuestions;
}