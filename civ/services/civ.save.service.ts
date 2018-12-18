import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()
export class CivSaveService {
  saveObj = {
    "clientIdentificationInfo": {
      "dirty": false,
      "entitledPrivileges": [],
      "address": {
        "primaryAddress": {
          "addressLine1": "901 E ALOSTA AVENUE SUITE 7000",
          "addressLine2": " ",
          "addressLine3": null,
          "addressLine4": null,
          "addressCity": "AZUSA",
          "addressStateProvince": "CA",
          "addressPostalCode": "91702-7000",
          "addressCountry": "US",
          "legacyMemberAddressId": null,
          "addressType": null
        },
        "primaryEmailAddress": null
      },
      "typesOfAddress": [],
      "phoneDetails": [],
      "mailingAddress": {
        "addressLine1": null,
        "addressLine2": null,
        "addressLine3": null,
        "addressLine4": null,
        "addressCity": null,
        "addressStateProvince": null,
        "addressPostalCode": null,
        "addressCountry": null,
        "legacyMemberAddressId": null,
        "addressType": null
      },
      "registeredAddress": {
        "addressLine1": "901 E LOSTA AVE ",
        "addressLine2": " ",
        "addressLine3": null,
        "addressLine4": null,
        "addressCity": "AZUSA",
        "addressStateProvince": "CA",
        "addressPostalCode": "91702-7000",
        "addressCountry": "US",
        "legacyMemberAddressId": null,
        "addressType": null
      },
      "incorporatedAddress": {
        "addressLine1": "901 E LOSTA AVE ",
        "addressLine2": " ",
        "addressLine3": null,
        "addressLine4": null,
        "addressCity": "AZUSA",
        "addressStateProvince": "CA",
        "addressPostalCode": "91702-7000",
        "addressCountry": "US",
        "legacyMemberAddressId": null,
        "addressType": null
      },
      "consumerInfo": {
        "customerFirstName": "Mahendran",
        "customerMiddleName": "Mahindra",
        "customerLastName": "Venkat",
        "prefix": null,
        "suffix": null,
        "suffixOther": null,
        "prefixOther": null,
        "maternalSurname": null,
        "dateOfBirth": null,
        "dateOfBirthMasked": null,
        "dateOfBirthAsLong": null,
        "memberIdType": null,
        "memberIdNum": null,
        "migratedInd": null
      },
      "clientName": "Madras University India",
      "businessInternalName": "Madras University India",
      "clientNameSpecial": false,
      "clientType": "XLGCORP",
      "clientNameDBA": false,
      "certificationOfDBAName": null,
      "certificationOfAssumedName": null,
      "employerInfo": null,
      "idNumType": "OTHG",
      "otherIdDesc": null,
      "countryGovId": "US",
      "govIdNumber": "95-1744369",
      "donorEvidenceCorroborateFunding": null,
      "idVerifyMeans": ["DOC"],
      "otherIdVerifyMeans": null,
      "documentaryProvidedByClient": ["OTHGID"],
      "photoIdType": null,
      "otherPhotoIdType": null,
      "photoIdLoc": null,
      "individualPhotoIdLoc": null,
      "nonDocumentaryProvidedByClient": null,
      "substDiscrepancy": false,
      "substDiscrepancyDetails": null,
      "documentTypeLocation": "Abc",
      "docDbVerifiedUpload": "09026843800a2d1c#~##~#Documentary ID#~#OTHGID#~#test.txt#~#667504d1-0159-1000-a7d8-c02e00018966",
      "docDocumentTypeLocation": null,
      "nonDocDbVerifiedUpload": null,
      "databaseTypeLink": null,
      "yearBankingLicenseGranted": null,
      "bankLicenseUpload": null,
      "bankLicenseLink": null,
      "countryDomicileInc": "US",
      "identifyJurisdictionIssuedBankLicense": null,
      "typeOfBank": null,
      "authorizationOperateMSB": null,
      "msbLicenseLink": null,
      "countryPrimaryOps": null,
      "governingInstrumentType": null,
      "docGoverningInstrumentUpload": null,
      "countryCitizenship": null,
      "legalStructureInstitutionType": "Association",
      "fundRelationshipType": null,
      "domicileOwnerInformation": null,
      "isEmployed": null,
      "centralBank": null,
      "govtRegulatoryTaxIDNumber": null,
      "dbagrid": [],
      "screenprintUpload": null,
      "addressList": null,
      "cipInformation": {
        "cipVerifyApplId": null,
        "cipFullLegalName": null,
        "cipAddress": "",
        "cipVerifyAddress": {
          "addressLine1": null,
          "addressLine2": null,
          "addressLine3": null,
          "addressLine4": null,
          "addressCity": null,
          "addressStateProvince": null,
          "addressPostalCode": null,
          "addressCountry": null,
          "legacyMemberAddressId": null,
          "addressType": null
        },
        "cipVerifyDateOfBirth": null,
        "cipVerifyGovId": null,
        "cipVerifyConfirmationCode": null,
        "cipSrcInfo": null
      },
      "citizenShipMaskingRequired": null,
      "otherDocumentary": null,
      "bankselect": null,
      "centralBankLocation": null,
      "centralBankService": null,
      "developmentBankCountry": null,
      "developmentBankActivity": null
    }
  };
  constructor() {}

  private globalSaveObj = new BehaviorSubject<object>(this.saveObj);
  finalObj = this.globalSaveObj.asObservable();

  getSaveObj(obj){
    this.globalSaveObj.next(this.saveObj);
  }
}