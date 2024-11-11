from pydantic import BaseModel
from math import sin, sqrt
from decimal import Decimal

class Values(BaseModel):
    B0_1st_iteration: int|Decimal
    B0_2nd_iteration: int|Decimal
    B0_3rd_iteration: int|Decimal
    B0_4th_iteration: int|Decimal
    B0_5th_iteration: int|Decimal
    P0_chromosphere: int|Decimal
    P0_corona: int|Decimal
    P0_troposphere: int|Decimal
    beta_1st_iteration: int|Decimal
    beta_2nd_iteration: int|Decimal
    beta_3rd_iteration: int|Decimal
    beta_4th_iteration: int|Decimal
    beta_5th_iteration: int|Decimal


def calculate(values: Values)->dict:
    iterations = [values.speed_1st_iteration, values.speed_2nd_iteration, values.speed_3rd_iteration, values.speed_4th_iteration, values.speed_5th_iteration]
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
        # I am now in the scope of troposphere, chromosphere and corona
        
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