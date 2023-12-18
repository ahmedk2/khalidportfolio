import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('cloudresume3')


def lambda_handler(event, context):
    response = table.get_item(Key={
        'id': '1'
    })
    #print(response)
    visits = response['Item']['visits']
    visits = visits + 1
    #print(visits)
    response = table.put_item(Item={
            'id':'1',
            'visits': visits
    })

    #return response
    return visits
