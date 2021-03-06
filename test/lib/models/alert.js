/* eslint-env mocha */
'use strict'

const { Alert } = require('../../../lib')
const testModel = require('../../helpers/test_model')

describe('Alert model', () => {
  testModel({
    model: Alert,
    orderedFields: ['key', 'type', 'symbol', 'price']
  })
})
