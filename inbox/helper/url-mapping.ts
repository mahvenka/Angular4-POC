export function getUrl(formId, section, moduleName){
    let loadCivQuestions = `restservices/FormMetaDataService/retrieveFormMetaData/formId/${formId}/sectionName/${section}/moduleName/${moduleName}`;
    return loadCivQuestions;
}