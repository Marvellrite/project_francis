from pydantic import BaseModel
from math import sin, sqrt, radians
from decimal import Decimal, InvalidOperation
from app.utils import types

def calculate(values: types.Speed_ratio_values)->dict:
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

    result = {'layers':{}}
    layers = {}
    precision = 5

    for key_layer, layer in atmospheres.items():
        layers[f"{key_layer}"] = {}
        # layer
        print(key_layer)
        for key_position, position in layer.items(): 
            print(key_position)
            # I am now inside the scope of lower, mid and upper
            Vs = Decimal(position['Vs'])
            Va = Decimal(position['Va'])
            # print('Vs-->', Vs)
            # print('Va-->', Va)
            C2 = round((Vs**2 + Va**2), 5)
            print('C2-->', C2) 
            FMSW_array = []
            SMSW_array = []
            layers[f'{key_layer}'][f"{key_position}"] = {}

            for angle in iterations:
                print(angle)
                # print('') 422500 
#                 print('')
                sinedAngle = round(sin(radians(angle)), 10)
                sqrdSine = Decimal(round((1-sinedAngle**2), 2))
                print('sqrdSine-->', sqrdSine)
                FMSW1 =(Decimal((2*Vs**2*(sqrdSine))))
                print('Sine of angle-->', sinedAngle)
                sqrt1 = sqrt(C2**2 + 4*Va**2*Vs**2*(sqrdSine))
                FMSW2 = Decimal(((C2 + Decimal(sqrt1))))
                print(FMSW1, '-->', FMSW2)
                FMSW = (FMSW1 / FMSW2)
                print('FMSW without rounding -->', FMSW)
                if(FMSW!=0):
                    FMSW = round((FMSW1 / FMSW2), 10)
                else:
                    FMSW = 0

                
                print('sqrt1-->', sqrt1, 'For FMSW')
                # print(FMSW)
                FMSW = f"{FMSW:.{precision}g}"
                # print('FMSW-->', FMSW)
                # print('SMSW1-->', (C2 + Decimal(sqrt(C2**2 + 4*Va**2*Vs**2*Decimal(1-sinedAngle**2)))) )
                try:
                    SMSW1 = round(Decimal((2*Vs**2*(sqrdSine))))
                    print('sqr2-->', C2**2 + 4*Va**2*Vs**2*(sqrdSine))
                    print('sqr2.1-->', C2**2 )
                    print('sqr2.2-->', 4*Va**2*Vs**2*(sqrdSine) )
                    sqrt2 = sqrt(C2**2 + 4*Va**2*Vs**2*(sqrdSine))
                    SMSW2 = Decimal(((C2 -  Decimal(sqrt2))))
                    SMSW = round((SMSW1 / SMSW2), 10)
                    print(SMSW1, '-->', SMSW2, 'For SMSW')
                    print('sqrt2-->', sqrt2)
                    print(SMSW, '-->', FMSW)
                    print()
                    print()
                    SMSW = f"{SMSW:.{precision}g}"
                except InvalidOperation:
                    SMSW = 0
                    SMSW = f"{SMSW:.{precision}g}"
                    print(SMSW1, '-->', SMSW2, 'For SMSW')
                    print('sqrt2-->', sqrt2)
                    print(SMSW, '-->', FMSW)
                    print()
                    print()
                # print('SMSW-->', SMSW)
                FMSW_array.append(FMSW)
                SMSW_array.append(SMSW)
                # print(angle)
                # print(sin(radians(angle)))
            layers[f"{key_layer}"][f"{key_position}"]['FMSW'] = FMSW_array
            layers[f"{key_layer}"][f"{key_position}"]['SMSW'] = SMSW_array

    result['layers'] = layers
    result['iterations'] = iterations
    return result