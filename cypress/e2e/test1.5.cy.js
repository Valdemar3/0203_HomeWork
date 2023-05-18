///<reference types="cypress"/>
import math from "mathjs"

//fixures
import * as userAuthoriz from "../fixtures/userAuthoriz.json"
import * as dataComments from "../fixtures/dataComments.json"

//pages
import authoriztion from "../support/pages/authoriztion"

//faker
import { fakerDataComments } from "../support/fakerDataComments"
import customerFedb from "../support/pages/customerFedb/customerFedb"

describe ('test suites for Customer`s fedback page', () => {
    it('Visit Customer fedback page', () => {
        //call authoriztion fuction
        authoriztion.authorizationUser(userAuthoriz)
        //create fake data for Comment
        fakerDataComments(dataComments)
        //call comments fuction
        customerFedb.customerFedb(userAuthoriz, dataComments)

    })
})