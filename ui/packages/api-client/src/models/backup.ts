/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { BackupSpec } from './backup-spec';
// May contain unused imports in some cases
// @ts-ignore
import { BackupStatus } from './backup-status';
// May contain unused imports in some cases
// @ts-ignore
import { Metadata } from './metadata';

/**
 * 
 * @export
 * @interface Backup
 */
export interface Backup {
    /**
     * 
     * @type {string}
     * @memberof Backup
     */
    'apiVersion': string;
    /**
     * 
     * @type {string}
     * @memberof Backup
     */
    'kind': string;
    /**
     * 
     * @type {Metadata}
     * @memberof Backup
     */
    'metadata': Metadata;
    /**
     * 
     * @type {BackupSpec}
     * @memberof Backup
     */
    'spec'?: BackupSpec;
    /**
     * 
     * @type {BackupStatus}
     * @memberof Backup
     */
    'status'?: BackupStatus;
}
