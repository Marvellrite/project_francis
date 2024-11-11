from pydantic import BaseModel
from math import sin, sqrt
from decimal import Decimal

class Values(BaseModel):
    T_1st_iteration: int|Decimal
    T_2nd_iteration: int|Decimal
    T_3rd_iteration: int|Decimal
    T_4th_iteration: int|Decimal
    T_5th_iteration: int|Decimal
    Va: int|Decimal
    Vp: int|Decimal
    lambda_1st_iteration: int|Decimal
    lambda_2nd_iteration: int|Decimal
    lambda_3rd_iteration: int|Decimal
    lambda_4th_iteration: int|Decimal
    lambda_5th_iteration: int|Decimal

def calculate(values: Values)->dict:
    iterations = [{'T':values.T_1st_iteration, 'lambda': values.lambda_1st_iteration}, {'T':values.T_2nd_iteration, 'lambda': values.lambda_2nd_iteration}, {'T':values.T_3rd_iteration, 'lambda': values.lambda_3rd_iteration}, {'T':values.T_4th_iteration, 'lambda': values.lambda_4th_iteration}, {'T':values.T_5th_iteration, 'lambda': values.lambda_5th_iteration}]
    atmospheres = {
        'photosphere': {
            'lower':{
                'Vs': values.vs_lower_photosphere,
                'Va': values.va_lower_photosphere
            },
            'mid':{
                'Vs': values.vs_mid_photosphere,
                'Va': values.va_mid_photosphere
            },
            'upper':{
                'Vs': values.vs_upper_photosphere,
                'Va': values.va_upper_photosphere
            }
        },
        'chromosphere': {
            'lower':{
                'Vs': values.vs_lower_chromosphere,
                'Va': values.va_lower_chromosphere
            },
            'mid':{
                'Vs': values.vs_mid_chromosphere,
                'Va': values.va_mid_chromosphere
            },
            'upper':{
                'Vs': values.vs_upper_chromosphere,
                'Va': values.va_upper_chromosphere
            }
        },
        'corona': {
            'lower':{
                'Vs': values.vs_lower_corona,
                'Va': values.va_lower_corona
            },
            'mid':{
                'Vs': values.vs_mid_corona,
                'Va': values.va_mid_corona
            },
            'upper':{
                'Vs': values.vs_upper_corona,
                'Va': values.va_upper_corona
            }
        },
    
    }

    layers = {}

    for key_layer, layer in atmospheres.items():
        for key_position, position in layer.items(): 
            # I am now inside the scope of lower, mid and upper
            Vs = position['Vs']
            Va = position['Va']
            C2 = Vs**2 + Va**2 
            FMSW_array = []
            SMSW_array = []
            for angle in iterations:
                FMSW = (2*Vs**2(1-(sin(angle))**2)) / (C2 + sqrt(C2**2 + 4*Va**2*Vs**2(1-(sin(angle)**2))))
                SMSW = (2*Vs**2(1-(sin(angle))**2)) / (C2 - sqrt(C2**2 + 4*Va**2*Vs**2(1-(sin(angle)**2))))
                FMSW_array.push(FMSW)
                SMSW_array.push(SMSW)
            layers[f"{layer}"][f"{position}"]['FMSW'] = FMSW
            layers[f"{layer}"][f"{position}"]['SMSW'] = FMSW

    return layers