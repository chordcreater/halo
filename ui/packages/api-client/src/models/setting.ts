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
import { Metadata } from './metadata';
// May contain unused imports in some cases
// @ts-ignore
import { SettingSpec } from './setting-spec';

/**
 * 
 * @export
 * @interface Setting
 */
export interface Setting {
    /**
     * 
     * @type {string}
     * @memberof Setting
     */
    'apiVersion': string;
    /**
     * 
     * @type {string}
     * @memberof Setting
     */
    'kind': string;
    /**
     * 
     * @type {Metadata}
     * @memberof Setting
     */
    'metadata': Metadata;
    /**
     * 
     * @type {SettingSpec}
     * @memberof Setting
     */
    'spec': SettingSpec;
}
