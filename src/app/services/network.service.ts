import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  data: any =
    {
      "SaleInvoiceId": 5057668,
      "ClientInformationId": 1113,
      "Questions": [
        {
          "FeedbackQuestionId": 2,
          "QuestionsText": "How was the Quality & taste of food?",
          "Options": [
            {
              "FeedbackOptionId": 1,
              "FeedbackQuestionId": 2,
              "DisplayText": "Poor",
              "DisplayImage": null,
              "WithRemarks": false,
              "Points": 1,
              "UserId": 0,
              "DataEntryDate": "0001-01-01T00:00:00",
              "DataEntryStatus": 0,
              "DisplayBaseImage": null,
              "RequiredClientInformation": 0,
              "FlowUpFeedbackQuestionId": 8,
              "ThankYouImage": null,
              "SortBy": 4
            },
            {
              "FeedbackOptionId": 2,
              "FeedbackQuestionId": 2,
              "DisplayText": "Satisfactory ",
              "DisplayImage": null,
              "WithRemarks": false,
              "Points": 2,
              "UserId": 0,
              "DataEntryDate": "0001-01-01T00:00:00",
              "DataEntryStatus": 0,
              "DisplayBaseImage": null,
              "RequiredClientInformation": 0,
              "FlowUpFeedbackQuestionId": 0,
              "ThankYouImage": null,
              "SortBy": 3
            },
            {
              "FeedbackOptionId": 3,
              "FeedbackQuestionId": 2,
              "DisplayText": "Good",
              "DisplayImage": null,
              "WithRemarks": false,
              "Points": 3,
              "UserId": 0,
              "DataEntryDate": "0001-01-01T00:00:00",
              "DataEntryStatus": 0,
              "DisplayBaseImage": null,
              "RequiredClientInformation": 0,
              "FlowUpFeedbackQuestionId": 0,
              "ThankYouImage": null,
              "SortBy": 2
            },
            {
              "FeedbackOptionId": 4,
              "FeedbackQuestionId": 2,
              "DisplayText": "Excellent",
              "DisplayImage": null,
              "WithRemarks": false,
              "Points": 5,
              "UserId": 0,
              "DataEntryDate": "0001-01-01T00:00:00",
              "DataEntryStatus": 0,
              "DisplayBaseImage": null,
              "RequiredClientInformation": 0,
              "FlowUpFeedbackQuestionId": 0,
              "ThankYouImage": null,
              "SortBy": 1
            }
          ],
          "Products": [
            {
              "ProductItemId": 229,
              "ProductName": "BBQ CHICKEN BURGER"
            },
            {
              "ProductItemId": 236,
              "ProductName": "CRISPY BROAST (LEG)"
            },
            {
              "ProductItemId": 4021,
              "ProductName": "SAUCY BROAST (CHEST)"
            },
            {
              "ProductItemId": 4025,
              "ProductName": "CRISPY BROAST (CHEST)"
            }
          ]
        },
        {
          "FeedbackQuestionId": 3,
          "QuestionsText": "How was the Customer service?",
          "Options": [
            {
              "FeedbackOptionId": 5,
              "FeedbackQuestionId": 3,
              "DisplayText": "Poor",
              "DisplayImage": null,
              "WithRemarks": false,
              "Points": 1,
              "UserId": 0,
              "DataEntryDate": "0001-01-01T00:00:00",
              "DataEntryStatus": 0,
              "DisplayBaseImage": null,
              "RequiredClientInformation": 0,
              "FlowUpFeedbackQuestionId": 8,
              "ThankYouImage": null,
              "SortBy": 4
            },
            {
              "FeedbackOptionId": 6,
              "FeedbackQuestionId": 3,
              "DisplayText": "Satisfactory ",
              "DisplayImage": null,
              "WithRemarks": false,
              "Points": 2,
              "UserId": 0,
              "DataEntryDate": "0001-01-01T00:00:00",
              "DataEntryStatus": 0,
              "DisplayBaseImage": null,
              "RequiredClientInformation": 0,
              "FlowUpFeedbackQuestionId": 0,
              "ThankYouImage": null,
              "SortBy": 3
            },
            {
              "FeedbackOptionId": 7,
              "FeedbackQuestionId": 3,
              "DisplayText": "Good",
              "DisplayImage": null,
              "WithRemarks": false,
              "Points": 3,
              "UserId": 0,
              "DataEntryDate": "0001-01-01T00:00:00",
              "DataEntryStatus": 0,
              "DisplayBaseImage": null,
              "RequiredClientInformation": 0,
              "FlowUpFeedbackQuestionId": 0,
              "ThankYouImage": null,
              "SortBy": 2
            },
            {
              "FeedbackOptionId": 8,
              "FeedbackQuestionId": 3,
              "DisplayText": "Excellent",
              "DisplayImage": null,
              "WithRemarks": false,
              "Points": 5,
              "UserId": 0,
              "DataEntryDate": "0001-01-01T00:00:00",
              "DataEntryStatus": 0,
              "DisplayBaseImage": null,
              "RequiredClientInformation": 0,
              "FlowUpFeedbackQuestionId": 0,
              "ThankYouImage": null,
              "SortBy": 1
            }
          ]
        },
        {
          "FeedbackQuestionId": 4,
          "QuestionsText": "How was the restaurant’s ambience?",
          "Options": [
            {
              "FeedbackOptionId": 9,
              "FeedbackQuestionId": 4,
              "DisplayText": "Poor",
              "DisplayImage": null,
              "WithRemarks": false,
              "Points": 1,
              "UserId": 0,
              "DataEntryDate": "0001-01-01T00:00:00",
              "DataEntryStatus": 0,
              "DisplayBaseImage": null,
              "RequiredClientInformation": 0,
              "FlowUpFeedbackQuestionId": 8,
              "ThankYouImage": null,
              "SortBy": 4
            },
            {
              "FeedbackOptionId": 10,
              "FeedbackQuestionId": 4,
              "DisplayText": "Satisfactory ",
              "DisplayImage": null,
              "WithRemarks": false,
              "Points": 2,
              "UserId": 0,
              "DataEntryDate": "0001-01-01T00:00:00",
              "DataEntryStatus": 0,
              "DisplayBaseImage": null,
              "RequiredClientInformation": 0,
              "FlowUpFeedbackQuestionId": 0,
              "ThankYouImage": null,
              "SortBy": 3
            },
            {
              "FeedbackOptionId": 11,
              "FeedbackQuestionId": 4,
              "DisplayText": "Good",
              "DisplayImage": null,
              "WithRemarks": false,
              "Points": 3,
              "UserId": 0,
              "DataEntryDate": "0001-01-01T00:00:00",
              "DataEntryStatus": 0,
              "DisplayBaseImage": null,
              "RequiredClientInformation": 0,
              "FlowUpFeedbackQuestionId": 0,
              "ThankYouImage": null,
              "SortBy": 2
            },
            {
              "FeedbackOptionId": 12,
              "FeedbackQuestionId": 4,
              "DisplayText": "Excellent",
              "DisplayImage": null,
              "WithRemarks": false,
              "Points": 5,
              "UserId": 0,
              "DataEntryDate": "0001-01-01T00:00:00",
              "DataEntryStatus": 0,
              "DisplayBaseImage": null,
              "RequiredClientInformation": 0,
              "FlowUpFeedbackQuestionId": 0,
              "ThankYouImage": null,
              "SortBy": 1
            }
          ]
        },
        {
          "FeedbackQuestionId": 5,
          "QuestionsText": "How was your overall experience with us?",
          "Options": [
            {
              "FeedbackOptionId": 13,
              "FeedbackQuestionId": 5,
              "DisplayText": "Poor",
              "DisplayImage": null,
              "WithRemarks": false,
              "Points": 1,
              "UserId": 0,
              "DataEntryDate": "0001-01-01T00:00:00",
              "DataEntryStatus": 0,
              "DisplayBaseImage": null,
              "RequiredClientInformation": 0,
              "FlowUpFeedbackQuestionId": 8,
              "ThankYouImage": null,
              "SortBy": 4
            },
            {
              "FeedbackOptionId": 14,
              "FeedbackQuestionId": 5,
              "DisplayText": "Satisfactory ",
              "DisplayImage": null,
              "WithRemarks": false,
              "Points": 2,
              "UserId": 0,
              "DataEntryDate": "0001-01-01T00:00:00",
              "DataEntryStatus": 0,
              "DisplayBaseImage": null,
              "RequiredClientInformation": 0,
              "FlowUpFeedbackQuestionId": 0,
              "ThankYouImage": null,
              "SortBy": 3
            },
            {
              "FeedbackOptionId": 15,
              "FeedbackQuestionId": 5,
              "DisplayText": "Good",
              "DisplayImage": null,
              "WithRemarks": false,
              "Points": 3,
              "UserId": 0,
              "DataEntryDate": "0001-01-01T00:00:00",
              "DataEntryStatus": 0,
              "DisplayBaseImage": null,
              "RequiredClientInformation": 0,
              "FlowUpFeedbackQuestionId": 0,
              "ThankYouImage": null,
              "SortBy": 2
            },
            {
              "FeedbackOptionId": 16,
              "FeedbackQuestionId": 5,
              "DisplayText": "Excellent",
              "DisplayImage": null,
              "WithRemarks": false,
              "Points": 5,
              "UserId": 0,
              "DataEntryDate": "0001-01-01T00:00:00",
              "DataEntryStatus": 0,
              "DisplayBaseImage": null,
              "RequiredClientInformation": 0,
              "FlowUpFeedbackQuestionId": 0,
              "ThankYouImage": null,
              "SortBy": 1
            }
          ]
        },
        {
          "FeedbackQuestionId": 6,
          "QuestionsText": "Any Suggestions",
          "Options": [
            {
              "FeedbackOptionId": 17,
              "FeedbackQuestionId": 6,
              "DisplayText": "",
              "DisplayImage": null,
              "WithRemarks": true,
              "Points": 0,
              "UserId": 0,
              "DataEntryDate": "0001-01-01T00:00:00",
              "DataEntryStatus": 0,
              "DisplayBaseImage": null,
              "RequiredClientInformation": 0,
              "FlowUpFeedbackQuestionId": 0,
              "ThankYouImage": null,
              "SortBy": 1
            }
          ]
        }
      ]
    }

  constructor(private http: HttpClient) { }


  async getFormData() {
    const data = await this.http.get('');
    return 'a';
  }
}
