import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {




  // data: any =
  //   {
  //     "SaleInvoiceId": 5057668,
  //     "ClientInformationId": 1113,
  //     "Questions": [
  //       {
  //         "FeedbackQuestionId": 2,
  //         "QuestionsText": "How was the Quality & taste of food?",
  //         "Options": [
  //           {
  //             "FeedbackOptionId": 1,
  //             "FeedbackQuestionId": 2,
  //             "DisplayText": "Poor",
  //             "DisplayImage": null,
  //             "WithRemarks": false,
  //             "Points": 1,
  //             "UserId": 0,
  //             "DataEntryDate": "0001-01-01T00:00:00",
  //             "DataEntryStatus": 0,
  //             "DisplayBaseImage": null,
  //             "RequiredClientInformation": 0,
  //             "FlowUpFeedbackQuestionId": 8,
  //             "ThankYouImage": null,
  //             "SortBy": 4
  //           },
  //           {
  //             "FeedbackOptionId": 2,
  //             "FeedbackQuestionId": 2,
  //             "DisplayText": "Satisfactory ",
  //             "DisplayImage": null,
  //             "WithRemarks": false,
  //             "Points": 2,
  //             "UserId": 0,
  //             "DataEntryDate": "0001-01-01T00:00:00",
  //             "DataEntryStatus": 0,
  //             "DisplayBaseImage": null,
  //             "RequiredClientInformation": 0,
  //             "FlowUpFeedbackQuestionId": 0,
  //             "ThankYouImage": null,
  //             "SortBy": 3
  //           },
  //           {
  //             "FeedbackOptionId": 3,
  //             "FeedbackQuestionId": 2,
  //             "DisplayText": "Good",
  //             "DisplayImage": null,
  //             "WithRemarks": false,
  //             "Points": 3,
  //             "UserId": 0,
  //             "DataEntryDate": "0001-01-01T00:00:00",
  //             "DataEntryStatus": 0,
  //             "DisplayBaseImage": null,
  //             "RequiredClientInformation": 0,
  //             "FlowUpFeedbackQuestionId": 0,
  //             "ThankYouImage": null,
  //             "SortBy": 2
  //           },
  //           {
  //             "FeedbackOptionId": 4,
  //             "FeedbackQuestionId": 2,
  //             "DisplayText": "Excellent",
  //             "DisplayImage": null,
  //             "WithRemarks": false,
  //             "Points": 5,
  //             "UserId": 0,
  //             "DataEntryDate": "0001-01-01T00:00:00",
  //             "DataEntryStatus": 0,
  //             "DisplayBaseImage": null,
  //             "RequiredClientInformation": 0,
  //             "FlowUpFeedbackQuestionId": 0,
  //             "ThankYouImage": null,
  //             "SortBy": 1
  //           }
  //         ],
  //         "Products": [
  //           {
  //             "ProductItemId": 229,
  //             "ProductName": "BBQ CHICKEN BURGER",
  //             "Options": [
  //               {
  //                 "ProductIndex": 1,
  //                 "FeedbackOptionId": 1,
  //                 "FeedbackQuestionId": 2,
  //                 "DisplayText": "Poor",
  //                 "DisplayImage": null,
  //                 "WithRemarks": false,
  //                 "Points": 1,
  //                 "UserId": 0,
  //                 "DataEntryDate": "0001-01-01T00:00:00",
  //                 "DataEntryStatus": 0,
  //                 "DisplayBaseImage": null,
  //                 "RequiredClientInformation": 0,
  //                 "FlowUpFeedbackQuestionId": 8,
  //                 "ThankYouImage": null,
  //                 "SortBy": 4
  //               },
  //               {
  //                 "ProductIndex": 1,
  //                 "FeedbackOptionId": 2,
  //                 "FeedbackQuestionId": 2,
  //                 "DisplayText": "Satisfactory ",
  //                 "DisplayImage": null,
  //                 "WithRemarks": false,
  //                 "Points": 2,
  //                 "UserId": 0,
  //                 "DataEntryDate": "0001-01-01T00:00:00",
  //                 "DataEntryStatus": 0,
  //                 "DisplayBaseImage": null,
  //                 "RequiredClientInformation": 0,
  //                 "FlowUpFeedbackQuestionId": 0,
  //                 "ThankYouImage": null,
  //                 "SortBy": 3
  //               },
  //               {
  //                 "ProductIndex": 1,
  //                 "FeedbackOptionId": 3,
  //                 "FeedbackQuestionId": 2,
  //                 "DisplayText": "Good",
  //                 "DisplayImage": null,
  //                 "WithRemarks": false,
  //                 "Points": 3,
  //                 "UserId": 0,
  //                 "DataEntryDate": "0001-01-01T00:00:00",
  //                 "DataEntryStatus": 0,
  //                 "DisplayBaseImage": null,
  //                 "RequiredClientInformation": 0,
  //                 "FlowUpFeedbackQuestionId": 0,
  //                 "ThankYouImage": null,
  //                 "SortBy": 2
  //               },
  //               {
  //                 "ProductIndex": 1,
  //                 "FeedbackOptionId": 4,
  //                 "FeedbackQuestionId": 2,
  //                 "DisplayText": "Excellent",
  //                 "DisplayImage": null,
  //                 "WithRemarks": false,
  //                 "Points": 5,
  //                 "UserId": 0,
  //                 "DataEntryDate": "0001-01-01T00:00:00",
  //                 "DataEntryStatus": 0,
  //                 "DisplayBaseImage": null,
  //                 "RequiredClientInformation": 0,
  //                 "FlowUpFeedbackQuestionId": 0,
  //                 "ThankYouImage": null,
  //                 "SortBy": 1
  //               }
  //             ],
  //           },
  //           {
  //             "ProductItemId": 236,
  //             "ProductName": "CRISPY BROAST (LEG)",
  //             "Options": [
  //               {
  //                 "ProductIndex": 2,
  //                 "FeedbackOptionId": 1,
  //                 "FeedbackQuestionId": 2,
  //                 "DisplayText": "Poor",
  //                 "DisplayImage": null,
  //                 "WithRemarks": false,
  //                 "Points": 1,
  //                 "UserId": 0,
  //                 "DataEntryDate": "0001-01-01T00:00:00",
  //                 "DataEntryStatus": 0,
  //                 "DisplayBaseImage": null,
  //                 "RequiredClientInformation": 0,
  //                 "FlowUpFeedbackQuestionId": 8,
  //                 "ThankYouImage": null,
  //                 "SortBy": 4
  //               },
  //               {
  //                 "ProductIndex": 2,
  //                 "FeedbackOptionId": 2,
  //                 "FeedbackQuestionId": 2,
  //                 "DisplayText": "Satisfactory ",
  //                 "DisplayImage": null,
  //                 "WithRemarks": false,
  //                 "Points": 2,
  //                 "UserId": 0,
  //                 "DataEntryDate": "0001-01-01T00:00:00",
  //                 "DataEntryStatus": 0,
  //                 "DisplayBaseImage": null,
  //                 "RequiredClientInformation": 0,
  //                 "FlowUpFeedbackQuestionId": 0,
  //                 "ThankYouImage": null,
  //                 "SortBy": 3
  //               },
  //               {
  //                 "ProductIndex": 2,
  //                 "FeedbackOptionId": 3,
  //                 "FeedbackQuestionId": 2,
  //                 "DisplayText": "Good",
  //                 "DisplayImage": null,
  //                 "WithRemarks": false,
  //                 "Points": 3,
  //                 "UserId": 0,
  //                 "DataEntryDate": "0001-01-01T00:00:00",
  //                 "DataEntryStatus": 0,
  //                 "DisplayBaseImage": null,
  //                 "RequiredClientInformation": 0,
  //                 "FlowUpFeedbackQuestionId": 0,
  //                 "ThankYouImage": null,
  //                 "SortBy": 2
  //               },
  //               {
  //                 "ProductIndex": 2,
  //                 "FeedbackOptionId": 4,
  //                 "FeedbackQuestionId": 2,
  //                 "DisplayText": "Excellent",
  //                 "DisplayImage": null,
  //                 "WithRemarks": false,
  //                 "Points": 5,
  //                 "UserId": 0,
  //                 "DataEntryDate": "0001-01-01T00:00:00",
  //                 "DataEntryStatus": 0,
  //                 "DisplayBaseImage": null,
  //                 "RequiredClientInformation": 0,
  //                 "FlowUpFeedbackQuestionId": 0,
  //                 "ThankYouImage": null,
  //                 "SortBy": 1
  //               }
  //             ],
  //           },
  //           {
  //             "ProductItemId": 4021,
  //             "ProductName": "SAUCY BROAST (CHEST)",
  //             "Options": [
  //               {
  //                 "ProductIndex": 3,
  //                 "FeedbackOptionId": 1,
  //                 "FeedbackQuestionId": 2,
  //                 "DisplayText": "Poor",
  //                 "DisplayImage": null,
  //                 "WithRemarks": false,
  //                 "Points": 1,
  //                 "UserId": 0,
  //                 "DataEntryDate": "0001-01-01T00:00:00",
  //                 "DataEntryStatus": 0,
  //                 "DisplayBaseImage": null,
  //                 "RequiredClientInformation": 0,
  //                 "FlowUpFeedbackQuestionId": 8,
  //                 "ThankYouImage": null,
  //                 "SortBy": 4
  //               },
  //               {
  //                 "ProductIndex": 3,
  //                 "FeedbackOptionId": 2,
  //                 "FeedbackQuestionId": 2,
  //                 "DisplayText": "Satisfactory ",
  //                 "DisplayImage": null,
  //                 "WithRemarks": false,
  //                 "Points": 2,
  //                 "UserId": 0,
  //                 "DataEntryDate": "0001-01-01T00:00:00",
  //                 "DataEntryStatus": 0,
  //                 "DisplayBaseImage": null,
  //                 "RequiredClientInformation": 0,
  //                 "FlowUpFeedbackQuestionId": 0,
  //                 "ThankYouImage": null,
  //                 "SortBy": 3
  //               },
  //               {
  //                 "ProductIndex": 3,
  //                 "FeedbackOptionId": 3,
  //                 "FeedbackQuestionId": 2,
  //                 "DisplayText": "Good",
  //                 "DisplayImage": null,
  //                 "WithRemarks": false,
  //                 "Points": 3,
  //                 "UserId": 0,
  //                 "DataEntryDate": "0001-01-01T00:00:00",
  //                 "DataEntryStatus": 0,
  //                 "DisplayBaseImage": null,
  //                 "RequiredClientInformation": 0,
  //                 "FlowUpFeedbackQuestionId": 0,
  //                 "ThankYouImage": null,
  //                 "SortBy": 2
  //               },
  //               {
  //                 "ProductIndex": 3,
  //                 "FeedbackOptionId": 4,
  //                 "FeedbackQuestionId": 2,
  //                 "DisplayText": "Excellent",
  //                 "DisplayImage": null,
  //                 "WithRemarks": false,
  //                 "Points": 5,
  //                 "UserId": 0,
  //                 "DataEntryDate": "0001-01-01T00:00:00",
  //                 "DataEntryStatus": 0,
  //                 "DisplayBaseImage": null,
  //                 "RequiredClientInformation": 0,
  //                 "FlowUpFeedbackQuestionId": 0,
  //                 "ThankYouImage": null,
  //                 "SortBy": 1
  //               }
  //             ],
  //           },
  //           {
  //             "ProductItemId": 4025,
  //             "ProductName": "CRISPY BROAST (CHEST)",
  //             "Options": [
  //               {
  //                 "ProductIndex": 4,
  //                 "FeedbackOptionId": 1,
  //                 "FeedbackQuestionId": 2,
  //                 "DisplayText": "Poor",
  //                 "DisplayImage": null,
  //                 "WithRemarks": false,
  //                 "Points": 1,
  //                 "UserId": 0,
  //                 "DataEntryDate": "0001-01-01T00:00:00",
  //                 "DataEntryStatus": 0,
  //                 "DisplayBaseImage": null,
  //                 "RequiredClientInformation": 0,
  //                 "FlowUpFeedbackQuestionId": 8,
  //                 "ThankYouImage": null,
  //                 "SortBy": 4
  //               },
  //               {
  //                 "ProductIndex": 4,
  //                 "FeedbackOptionId": 2,
  //                 "FeedbackQuestionId": 2,
  //                 "DisplayText": "Satisfactory ",
  //                 "DisplayImage": null,
  //                 "WithRemarks": false,
  //                 "Points": 2,
  //                 "UserId": 0,
  //                 "DataEntryDate": "0001-01-01T00:00:00",
  //                 "DataEntryStatus": 0,
  //                 "DisplayBaseImage": null,
  //                 "RequiredClientInformation": 0,
  //                 "FlowUpFeedbackQuestionId": 0,
  //                 "ThankYouImage": null,
  //                 "SortBy": 3
  //               },
  //               {
  //                 "ProductIndex": 4,
  //                 "FeedbackOptionId": 3,
  //                 "FeedbackQuestionId": 2,
  //                 "DisplayText": "Good",
  //                 "DisplayImage": null,
  //                 "WithRemarks": false,
  //                 "Points": 3,
  //                 "UserId": 0,
  //                 "DataEntryDate": "0001-01-01T00:00:00",
  //                 "DataEntryStatus": 0,
  //                 "DisplayBaseImage": null,
  //                 "RequiredClientInformation": 0,
  //                 "FlowUpFeedbackQuestionId": 0,
  //                 "ThankYouImage": null,
  //                 "SortBy": 2
  //               },
  //               {
  //                 "ProductIndex": 4,
  //                 "FeedbackOptionId": 4,
  //                 "FeedbackQuestionId": 2,
  //                 "DisplayText": "Excellent",
  //                 "DisplayImage": null,
  //                 "WithRemarks": false,
  //                 "Points": 5,
  //                 "UserId": 0,
  //                 "DataEntryDate": "0001-01-01T00:00:00",
  //                 "DataEntryStatus": 0,
  //                 "DisplayBaseImage": null,
  //                 "RequiredClientInformation": 0,
  //                 "FlowUpFeedbackQuestionId": 0,
  //                 "ThankYouImage": null,
  //                 "SortBy": 1
  //               }
  //             ],
  //           }
  //         ]
  //       },
  //       {
  //         "FeedbackQuestionId": 3,
  //         "QuestionsText": "How was the Customer service?",
  //         "Options": [
  //           {
  //             "FeedbackOptionId": 5,
  //             "FeedbackQuestionId": 3,
  //             "DisplayText": "Poor",
  //             "DisplayImage": null,
  //             "WithRemarks": false,
  //             "Points": 1,
  //             "UserId": 0,
  //             "DataEntryDate": "0001-01-01T00:00:00",
  //             "DataEntryStatus": 0,
  //             "DisplayBaseImage": null,
  //             "RequiredClientInformation": 0,
  //             "FlowUpFeedbackQuestionId": 8,
  //             "ThankYouImage": null,
  //             "SortBy": 4
  //           },
  //           {
  //             "FeedbackOptionId": 6,
  //             "FeedbackQuestionId": 3,
  //             "DisplayText": "Satisfactory ",
  //             "DisplayImage": null,
  //             "WithRemarks": false,
  //             "Points": 2,
  //             "UserId": 0,
  //             "DataEntryDate": "0001-01-01T00:00:00",
  //             "DataEntryStatus": 0,
  //             "DisplayBaseImage": null,
  //             "RequiredClientInformation": 0,
  //             "FlowUpFeedbackQuestionId": 0,
  //             "ThankYouImage": null,
  //             "SortBy": 3
  //           },
  //           {
  //             "FeedbackOptionId": 7,
  //             "FeedbackQuestionId": 3,
  //             "DisplayText": "Good",
  //             "DisplayImage": null,
  //             "WithRemarks": false,
  //             "Points": 3,
  //             "UserId": 0,
  //             "DataEntryDate": "0001-01-01T00:00:00",
  //             "DataEntryStatus": 0,
  //             "DisplayBaseImage": null,
  //             "RequiredClientInformation": 0,
  //             "FlowUpFeedbackQuestionId": 0,
  //             "ThankYouImage": null,
  //             "SortBy": 2
  //           },
  //           {
  //             "FeedbackOptionId": 8,
  //             "FeedbackQuestionId": 3,
  //             "DisplayText": "Excellent",
  //             "DisplayImage": null,
  //             "WithRemarks": false,
  //             "Points": 5,
  //             "UserId": 0,
  //             "DataEntryDate": "0001-01-01T00:00:00",
  //             "DataEntryStatus": 0,
  //             "DisplayBaseImage": null,
  //             "RequiredClientInformation": 0,
  //             "FlowUpFeedbackQuestionId": 0,
  //             "ThankYouImage": null,
  //             "SortBy": 1
  //           }
  //         ]
  //       },
  //       {
  //         "FeedbackQuestionId": 4,
  //         "QuestionsText": "How was the restaurant’s ambience?",
  //         "Options": [
  //           {
  //             "FeedbackOptionId": 9,
  //             "FeedbackQuestionId": 4,
  //             "DisplayText": "Poor",
  //             "DisplayImage": null,
  //             "WithRemarks": false,
  //             "Points": 1,
  //             "UserId": 0,
  //             "DataEntryDate": "0001-01-01T00:00:00",
  //             "DataEntryStatus": 0,
  //             "DisplayBaseImage": null,
  //             "RequiredClientInformation": 0,
  //             "FlowUpFeedbackQuestionId": 8,
  //             "ThankYouImage": null,
  //             "SortBy": 4
  //           },
  //           {
  //             "FeedbackOptionId": 10,
  //             "FeedbackQuestionId": 4,
  //             "DisplayText": "Satisfactory ",
  //             "DisplayImage": null,
  //             "WithRemarks": false,
  //             "Points": 2,
  //             "UserId": 0,
  //             "DataEntryDate": "0001-01-01T00:00:00",
  //             "DataEntryStatus": 0,
  //             "DisplayBaseImage": null,
  //             "RequiredClientInformation": 0,
  //             "FlowUpFeedbackQuestionId": 0,
  //             "ThankYouImage": null,
  //             "SortBy": 3
  //           },
  //           {
  //             "FeedbackOptionId": 11,
  //             "FeedbackQuestionId": 4,
  //             "DisplayText": "Good",
  //             "DisplayImage": null,
  //             "WithRemarks": false,
  //             "Points": 3,
  //             "UserId": 0,
  //             "DataEntryDate": "0001-01-01T00:00:00",
  //             "DataEntryStatus": 0,
  //             "DisplayBaseImage": null,
  //             "RequiredClientInformation": 0,
  //             "FlowUpFeedbackQuestionId": 0,
  //             "ThankYouImage": null,
  //             "SortBy": 2
  //           },
  //           {
  //             "FeedbackOptionId": 12,
  //             "FeedbackQuestionId": 4,
  //             "DisplayText": "Excellent",
  //             "DisplayImage": null,
  //             "WithRemarks": false,
  //             "Points": 5,
  //             "UserId": 0,
  //             "DataEntryDate": "0001-01-01T00:00:00",
  //             "DataEntryStatus": 0,
  //             "DisplayBaseImage": null,
  //             "RequiredClientInformation": 0,
  //             "FlowUpFeedbackQuestionId": 0,
  //             "ThankYouImage": null,
  //             "SortBy": 1
  //           }
  //         ]
  //       },
  //       {
  //         "FeedbackQuestionId": 5,
  //         "QuestionsText": "How was your overall experience with us?",
  //         "Options": [
  //           {
  //             "FeedbackOptionId": 13,
  //             "FeedbackQuestionId": 5,
  //             "DisplayText": "Poor",
  //             "DisplayImage": null,
  //             "WithRemarks": false,
  //             "Points": 1,
  //             "UserId": 0,
  //             "DataEntryDate": "0001-01-01T00:00:00",
  //             "DataEntryStatus": 0,
  //             "DisplayBaseImage": null,
  //             "RequiredClientInformation": 0,
  //             "FlowUpFeedbackQuestionId": 8,
  //             "ThankYouImage": null,
  //             "SortBy": 4
  //           },
  //           {
  //             "FeedbackOptionId": 14,
  //             "FeedbackQuestionId": 5,
  //             "DisplayText": "Satisfactory ",
  //             "DisplayImage": null,
  //             "WithRemarks": false,
  //             "Points": 2,
  //             "UserId": 0,
  //             "DataEntryDate": "0001-01-01T00:00:00",
  //             "DataEntryStatus": 0,
  //             "DisplayBaseImage": null,
  //             "RequiredClientInformation": 0,
  //             "FlowUpFeedbackQuestionId": 0,
  //             "ThankYouImage": null,
  //             "SortBy": 3
  //           },
  //           {
  //             "FeedbackOptionId": 15,
  //             "FeedbackQuestionId": 5,
  //             "DisplayText": "Good",
  //             "DisplayImage": null,
  //             "WithRemarks": false,
  //             "Points": 3,
  //             "UserId": 0,
  //             "DataEntryDate": "0001-01-01T00:00:00",
  //             "DataEntryStatus": 0,
  //             "DisplayBaseImage": null,
  //             "RequiredClientInformation": 0,
  //             "FlowUpFeedbackQuestionId": 0,
  //             "ThankYouImage": null,
  //             "SortBy": 2
  //           },
  //           {
  //             "FeedbackOptionId": 16,
  //             "FeedbackQuestionId": 5,
  //             "DisplayText": "Excellent",
  //             "DisplayImage": null,
  //             "WithRemarks": false,
  //             "Points": 5,
  //             "UserId": 0,
  //             "DataEntryDate": "0001-01-01T00:00:00",
  //             "DataEntryStatus": 0,
  //             "DisplayBaseImage": null,
  //             "RequiredClientInformation": 0,
  //             "FlowUpFeedbackQuestionId": 0,
  //             "ThankYouImage": null,
  //             "SortBy": 1
  //           }
  //         ]
  //       },
  //       {
  //         "FeedbackQuestionId": 6,
  //         "QuestionsText": "Any Suggestions",
  //         "Options": [
  //           {
  //             "FeedbackOptionId": 17,
  //             "FeedbackQuestionId": 6,
  //             "DisplayText": "",
  //             "DisplayImage": null,
  //             "WithRemarks": true,
  //             "Points": 0,
  //             "UserId": 0,
  //             "DataEntryDate": "0001-01-01T00:00:00",
  //             "DataEntryStatus": 0,
  //             "DisplayBaseImage": null,
  //             "RequiredClientInformation": 0,
  //             "FlowUpFeedbackQuestionId": 0,
  //             "ThankYouImage": null,
  //             "SortBy": 1
  //           }
  //         ]
  //       }
  //     ]
  //   }

  data: any = {
    "SaleInvoiceId": 5057668,
    "ClientInformationId": 1113,
    "ClientName": "AAMIR BHAI",
    "InvoiceDate": "2022-09-26T16:37:01",
    "Questions": [
        {
            "FeedbackQuestionId": 3,
            "Question": "How was the Customer service?",
            "FeedbackControlId": 6,
            "Remarks": null,
            "SortOrder": 1,
            "Options": [
                {
                    "FeedbackOptionId": 5,
                    "FeedbackQuestionId": 3,
                    "DisplayText": "Poor",
                    "WithRemarks": false,
                    "Points": 1,
                    "SortBy": 4
                },
                {
                    "FeedbackOptionId": 6,
                    "FeedbackQuestionId": 3,
                    "DisplayText": "Satisfactory ",
                    "WithRemarks": false,
                    "Points": 2,
                    "SortBy": 3
                },
                {
                    "FeedbackOptionId": 7,
                    "FeedbackQuestionId": 3,
                    "DisplayText": "Good",
                    "WithRemarks": false,
                    "Points": 3,
                    "SortBy": 2
                },
                {
                    "FeedbackOptionId": 8,
                    "FeedbackQuestionId": 3,
                    "DisplayText": "Excellent",
                    "WithRemarks": false,
                    "Points": 5,
                    "SortBy": 1
                }
            ],
            "Products": null
        },
        {
            "FeedbackQuestionId": 2,
            "Question": "How was the Quality & taste of food?",
            "FeedbackControlId": 6,
            "Remarks": null,
            "SortOrder": 2,
            "Options": [
                {
                    "FeedbackOptionId": 1,
                    "FeedbackQuestionId": 2,
                    "DisplayText": "Poor",
                    "WithRemarks": false,
                    "Points": 1,
                    "SortBy": 4
                },
                {
                    "FeedbackOptionId": 2,
                    "FeedbackQuestionId": 2,
                    "DisplayText": "Satisfactory ",
                    "WithRemarks": false,
                    "Points": 2,
                    "SortBy": 3
                },
                {
                    "FeedbackOptionId": 3,
                    "FeedbackQuestionId": 2,
                    "DisplayText": "Good",
                    "WithRemarks": false,
                    "Points": 3,
                    "SortBy": 2
                },
                {
                    "FeedbackOptionId": 4,
                    "FeedbackQuestionId": 2,
                    "DisplayText": "Excellent",
                    "WithRemarks": false,
                    "Points": 5,
                    "SortBy": 1
                }
            ],
            "Products": [
                {
                    "ProductItemId": 229,
                    "ProductName": "BBQ CHICKEN BURGER",
                    "ProductShortName": "BBQ CHICKEN BURGER",
                    "ImageItemId": 2184,
                    "ImageBlock": "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",
                    "Options": [
                        {
                            "FeedbackOptionId": 1,
                            "FeedbackQuestionId": 2,
                            "DisplayText": "Poor",
                            "WithRemarks": false,
                            "Points": 1,
                            "SortBy": 4
                        },
                        {
                            "FeedbackOptionId": 2,
                            "FeedbackQuestionId": 2,
                            "DisplayText": "Satisfactory ",
                            "WithRemarks": false,
                            "Points": 2,
                            "SortBy": 3
                        },
                        {
                            "FeedbackOptionId": 3,
                            "FeedbackQuestionId": 2,
                            "DisplayText": "Good",
                            "WithRemarks": false,
                            "Points": 3,
                            "SortBy": 2
                        },
                        {
                            "FeedbackOptionId": 4,
                            "FeedbackQuestionId": 2,
                            "DisplayText": "Excellent",
                            "WithRemarks": false,
                            "Points": 5,
                            "SortBy": 1
                        }
                    ]
                },
                {
                    "ProductItemId": 236,
                    "ProductName": "CRISPY BROAST (LEG)",
                    "ProductShortName": "CRISPY BROAST (LEG)",
                    "ImageItemId": 2139,
                    "ImageBlock": "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",
                    "Options": [
                        {
                            "FeedbackOptionId": 1,
                            "FeedbackQuestionId": 2,
                            "DisplayText": "Poor",
                            "WithRemarks": false,
                            "Points": 1,
                            "SortBy": 4
                        },
                        {
                            "FeedbackOptionId": 2,
                            "FeedbackQuestionId": 2,
                            "DisplayText": "Satisfactory ",
                            "WithRemarks": false,
                            "Points": 2,
                            "SortBy": 3
                        },
                        {
                            "FeedbackOptionId": 3,
                            "FeedbackQuestionId": 2,
                            "DisplayText": "Good",
                            "WithRemarks": false,
                            "Points": 3,
                            "SortBy": 2
                        },
                        {
                            "FeedbackOptionId": 4,
                            "FeedbackQuestionId": 2,
                            "DisplayText": "Excellent",
                            "WithRemarks": false,
                            "Points": 5,
                            "SortBy": 1
                        }
                    ]
                },
                {
                    "ProductItemId": 4021,
                    "ProductName": "SAUCY BROAST (CHEST)",
                    "ProductShortName": "SAUCY BROAST (CHEST)",
                    "ImageItemId": 2134,
                    "ImageBlock": "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",
                    "Options": [
                        {
                            "FeedbackOptionId": 1,
                            "FeedbackQuestionId": 2,
                            "DisplayText": "Poor",
                            "WithRemarks": false,
                            "Points": 1,
                            "SortBy": 4
                        },
                        {
                            "FeedbackOptionId": 2,
                            "FeedbackQuestionId": 2,
                            "DisplayText": "Satisfactory ",
                            "WithRemarks": false,
                            "Points": 2,
                            "SortBy": 3
                        },
                        {
                            "FeedbackOptionId": 3,
                            "FeedbackQuestionId": 2,
                            "DisplayText": "Good",
                            "WithRemarks": false,
                            "Points": 3,
                            "SortBy": 2
                        },
                        {
                            "FeedbackOptionId": 4,
                            "FeedbackQuestionId": 2,
                            "DisplayText": "Excellent",
                            "WithRemarks": false,
                            "Points": 5,
                            "SortBy": 1
                        }
                    ]
                },
                {
                    "ProductItemId": 4025,
                    "ProductName": "CRISPY BROAST (CHEST)",
                    "ProductShortName": "CRISPY BROAST (CHEST)",
                    "ImageItemId": 2130,
                    "ImageBlock": "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",
                    "Options": [
                        {
                            "FeedbackOptionId": 1,
                            "FeedbackQuestionId": 2,
                            "DisplayText": "Poor",
                            "WithRemarks": false,
                            "Points": 1,
                            "SortBy": 4
                        },
                        {
                            "FeedbackOptionId": 2,
                            "FeedbackQuestionId": 2,
                            "DisplayText": "Satisfactory ",
                            "WithRemarks": false,
                            "Points": 2,
                            "SortBy": 3
                        },
                        {
                            "FeedbackOptionId": 3,
                            "FeedbackQuestionId": 2,
                            "DisplayText": "Good",
                            "WithRemarks": false,
                            "Points": 3,
                            "SortBy": 2
                        },
                        {
                            "FeedbackOptionId": 4,
                            "FeedbackQuestionId": 2,
                            "DisplayText": "Excellent",
                            "WithRemarks": false,
                            "Points": 5,
                            "SortBy": 1
                        }
                    ]
                }
            ]
        },
        {
            "FeedbackQuestionId": 4,
            "Question": "How was the restaurant’s ambience?",
            "FeedbackControlId": 6,
            "Remarks": null,
            "SortOrder": 3,
            "Options": [
                {
                    "FeedbackOptionId": 9,
                    "FeedbackQuestionId": 4,
                    "DisplayText": "Poor",
                    "WithRemarks": false,
                    "Points": 1,
                    "SortBy": 4
                },
                {
                    "FeedbackOptionId": 10,
                    "FeedbackQuestionId": 4,
                    "DisplayText": "Satisfactory ",
                    "WithRemarks": false,
                    "Points": 2,
                    "SortBy": 3
                },
                {
                    "FeedbackOptionId": 11,
                    "FeedbackQuestionId": 4,
                    "DisplayText": "Good",
                    "WithRemarks": false,
                    "Points": 3,
                    "SortBy": 2
                },
                {
                    "FeedbackOptionId": 12,
                    "FeedbackQuestionId": 4,
                    "DisplayText": "Excellent",
                    "WithRemarks": false,
                    "Points": 5,
                    "SortBy": 1
                }
            ],
            "Products": null
        },
        {
            "FeedbackQuestionId": 5,
            "Question": "How was your overall experience with us?",
            "FeedbackControlId": 6,
            "Remarks": null,
            "SortOrder": 4,
            "Options": [
                {
                    "FeedbackOptionId": 13,
                    "FeedbackQuestionId": 5,
                    "DisplayText": "Poor",
                    "WithRemarks": false,
                    "Points": 1,
                    "SortBy": 4
                },
                {
                    "FeedbackOptionId": 14,
                    "FeedbackQuestionId": 5,
                    "DisplayText": "Satisfactory ",
                    "WithRemarks": false,
                    "Points": 2,
                    "SortBy": 3
                },
                {
                    "FeedbackOptionId": 15,
                    "FeedbackQuestionId": 5,
                    "DisplayText": "Good",
                    "WithRemarks": false,
                    "Points": 3,
                    "SortBy": 2
                },
                {
                    "FeedbackOptionId": 16,
                    "FeedbackQuestionId": 5,
                    "DisplayText": "Excellent",
                    "WithRemarks": false,
                    "Points": 5,
                    "SortBy": 1
                }
            ],
            "Products": null
        },
        {
            "FeedbackQuestionId": 6,
            "Question": "Any Suggestions",
            "FeedbackControlId": 5,
            "Remarks": null,
            "SortOrder": 5,
            "Options": [
                {
                    "FeedbackOptionId": 17,
                    "FeedbackQuestionId": 6,
                    "DisplayText": null,
                    "WithRemarks": true,
                    "Points": 0,
                    "SortBy": 1
                }
            ],
            "Products": null
        }
    ]
}

  constructor(private http: HttpClient) { }


  async getFormData() {
    const data = await this.http.get('http://10.1.1.13:8081/TSBE/Feedback/v2/GetFeedbackQuestions?Token=UNE4LXMP1SEvn4QOOgjfyd1DhowuqlkU');
    return data;
  }
}
