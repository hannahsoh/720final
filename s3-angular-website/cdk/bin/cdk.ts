#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkStack } from '../lib/cdk-stack';

const app = new cdk.App();
new CdkStack(app, 'S3AngularWebsite');

const envUSA = { account: '8373873873', region: 'us-east-1’ };
new CdkStack(app, 'S3AngularWebsite', { env:envUSA });