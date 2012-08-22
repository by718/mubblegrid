/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"jsAAmq45RzvrQrqAGKA5SoBynEkdHqaA"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"lsnrmMO0nc2XD48szCkWCpfzKcSDdg7b"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"S2I8tMIMg3c9XXkB2nGFRqke1fsIKmNf"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"QBG83znrfhmosroYI0sVGaRoUF9I3LUy"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"oxHGviH2UenYkxOAMxKLLn6wTEVBqeoC"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"0JLqbtrC7GEPMwA22456nYB0GCOlR0gK"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
