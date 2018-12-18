import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()
export class GlobalService {
    public inboxClientData :any={
        "id" : "null",
        "counter" :"null",
        "type" : "ADD_CORE_KYC",
        "trigger" : "Manual",
        "workItemTriggerDesc" : "Manual",
        "creationDate" : "12-12-2018",
        "status" : "Reserved",
        "gfcId" : "1009125309",
        "clientId" : null,
        "clientIdType" : null,
        "clientName" : "Vatsa Educations Limited",
        "businessInternalName" : "VATSA EDUCATIONS LIMITED",
        "kycOwner" : "PE55524",
        "workItemOwner" : null,
        "prrGroupName" : null,
        "gfpId" : "1009125309",
        "gfpIdReadOnly" : null,
        "assignedDate" : "12-12-2018",
        "priority" : "1",
        "priorityDescription" : "High Importance",
        "dueDate" : "",
        "countryOfService" : "IN",
        "riskRating" : null,
        "role" : "KYC_OWNER",
        "roleDescription" : null,
        "roleCode" : "KYC Owner",
        "assignedTo" : "PE55524",
        "imageStatus" : "1",
        "clientType" : "BANK",
        "businessUnit" : "CIB",
        "clientSegment" : "Institution",
        "idType" : "GFCID",
        "clientFirstName" : null,
        "clientLastName" : null,
        "clientMiddleName" : null,
        "clientLegalName" : "Vatsa Educations Limited",
        "recordStatus" : "DRAFT",
        "clientDomicileCountryCode" : "IN",
        "groupId" : null,
        "relationshipManager" : false,
        "processInstanceId" : "a1c18e86-0167-1000-aa00-28f0000493e0",
        "globalWorkItemID" : "a1c19b28-0167-1000-aa01-28f0000493e0",
        "slaBreachIndicator" : "No",
        "slaDays" : null,
        "workItemName" : "KYC_MAKER",
        "workItemHold" : false,
        "workItemStatusDesc" : "Owner Review",
        "managedCountry" : "IN",
        "workItemIdReadOnly" : "61395843",
        "referenceId" : null,
        "componentType" : "CORE",
        "componentID" : "a1c15095-0167-1000-a954-28f000061e7c",
        "slaHoldFlag" : null,
        "businessOwner" : null,
        "l3ClientName" : null,
        "l2ClientName" : null,
        "workItemTypeDesc" : "Add New KYC Record",
        "subWorkItemTypeDesc" : null,
        "workItemAssigneeName" : "Pavan Ediga",
        "subWorkItemFlag" : null,
        "countryOfServiceName" : "India",
        "recordCreationDate" : "12-12-2018",
        "periodicRevDate" : "",
        "clientTypeDesc" : "Financial Institutions - Bank",
        "isSmryAPF" : "N",
        "workItemCountry" : "India",
        "parentTaskId" : null,
        "componentStatus" : "DRAFT",
        "workItemCountryCode" : "IN",
        "prevRecStatus" : null,
        "workItemOnHold" : null,
        "workItemOnHoldReasonCode" : null,
        "workItemOnHoldReasonDesc" : null,
        "groupQueueName" : null,
        "pupType" : null,
        "workItemTriggerReason" : null,
        "wiResponse" : null,
        "coreBusinessUnit" : "CIB",
        "region" : "ASPAC",
        "exceptionQueue" : false,
        "kycid" : "a1c15095-0167-1000-a954-28f000061e7c",
        "subworkitemName" : ""
    
    };
    
    getInboxClientData(){
        return this.inboxClientData;
    }

    setInboxClientData(obj){
       this.inboxClientData = obj ;
    }

   
}