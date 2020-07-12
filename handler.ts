import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
//import 'source-map-support/register';

export const connect: APIGatewayProxyHandler = async event => {
  await new DynamoDB()
    .putItem({
      TableName: process.env.TABLE_NAME,
      Item: {
        connectionId: { S: event.requestContext.connectionId },
      },
    })
    .promise()
  return {
    statusCode: 200,
    body: "OK",
  }
}
