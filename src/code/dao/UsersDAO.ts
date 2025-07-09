import { DynamoDB } from "aws-sdk";
import { APIResponse } from "../model/Responses";
import { DataMapper, QueryOptions } from '@aws/dynamodb-data-mapper';

export class UsersDAO {
  /**
   * Save user to "Users" table.
   * @param region
   * @param username
   * @param email
   * @param password
   */
  public putTransaction(region: string, username: string, email: string, password: string): Promise<APIResponse> {
    // return result as promise
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async function(resolve, reject): Promise<void> {
      // dynamodb-data-mapper
      const mapper = new DataMapper({
        client: new DynamoDB({ region })
      });
      const newUser = new User
      await mapper
        .put(transaction)
        .then((item: FunFangleOrderedTransactionModel) => {
          resolve(item); // the item was found
        })
        .catch(
          (err: Error) => reject(err) // the item was not found
        );
    });
  }
}