export const schema = {
    "models": {
        "Invitee": {
            "name": "Invitee",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "host": {
                    "name": "host",
                    "isArray": false,
                    "type": {
                        "enum": "InviteeHost"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "hasConfirmed": {
                    "name": "hasConfirmed",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Invitees",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "InviteeHost": {
            "name": "InviteeHost",
            "values": [
                "CARLOS",
                "PAOLA"
            ]
        }
    },
    "nonModels": {},
    "version": "3a88ea41db1b0eba5b22c03d2ce84dae"
};