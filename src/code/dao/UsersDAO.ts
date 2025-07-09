import { DynamoDB } from "aws-sdk";
import { APIResponse } from "../model/Responses";
import { DataMapper } from '@aws/dynamodb-data-mapper';
import { UserModel } from "../model/UserModel";
import * as bcrypt from 'bcrypt';

export class UsersDAO {
  
  // Number of salt rounds for encryption
  private static SALT_ROUNDS = 10;

  /**
   * Save user to "Users" table.
   * @param region
   * @param username
   * @param email
   * @param password
   */
  public createUser(region: string, username: string, email: string, password: string): Promise<APIResponse> {
    // return result as promise
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async function(resolve, reject): Promise<void> {
      // dynamodb-data-mapper
      const mapper = new DataMapper({
        client: new DynamoDB({ region })
      });
      const newUser = new UserModel();
      newUser.username = username;
      newUser.email = email;

      // Encrypting the password
      bcrypt.hash(password, UsersDAO.SALT_ROUNDS, (err, hash) => {
        if (err) {
          console.error('Error hashing password:', err);
          return Promise.reject(err);
        }
        newUser.passwordHash = hash;
      });

      await mapper
        .put(newUser)
        .then(() => {
          resolve(new APIResponse(200, 'OK'))
        })
        .catch(
          (err: Error) => reject(err)
        );
    });
  }
}