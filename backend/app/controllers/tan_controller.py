from pydantic import BaseModel
from math import atan, degrees
from decimal import Decimal
from app.utils import types

def calculate(values: types.tan)->dict:
    iterations = [{'T':values.T_1st_iteration, 'lambda': values.lambda_1st_iteration}, {'T':values.T_2nd_iteration, 'lambda': values.lambda_2nd_iteration}, {'T':values.T_3rd_iteration, 'lambda': values.lambda_3rd_iteration}, {'T':values.T_4th_iteration, 'lambda': values.lambda_4th_iteration}, {'T':values.T_5th_iteration, 'lambda': values.lambda_5th_iteration}]
    atmospheres = {
        'photosphere': {
            'lower':{
                'Va': values.Va_lower_photosphere,
                'Vp': values.Vp_lower_photosphere
            },
            'mid':{
                'Va': values.Va_photosphere_mid,
                'Vp': values.Vp_photosphere_mid
            },
            'upper':{
                'Va': values.Va_photosphere_upper,
                'Vp': values.Vp_photosphere_upper
            }
        },
        'chromosphere': {
            'lower':{
                'Va': values.Va_lower_chromosphere,
                'Vp': values.Vp_lower_chromosphere
            },
            'mid':{
                'Va': values.Va_mid_chromosphere,
                'Vp': values.Vp_mid_chromosphere
            },
            'upper':{
                'Va': values.Va_chromosphere_upper,
                'Vp': values.Vp_chromosphere_upper
            }
        },
        'corona': {
            'lower':{
                'Va': values.Va_lower_corona,
                'Vp': values.Vp_lower_corona
            },
            'mid':{
                'Va': values.Va_mid_corona,
                'Vp': values.Vp_mid_corona
            },
            'upper':{
                'Va': values.Va_upper_corona,
                'Vp': values.Vp_upper_corona
            }
        },
    
    }

    result = {}
    layers = {}

    for key_layer, layer in atmospheres.items():
        layers[f"{key_layer}"] = {}

        for key_position, position in layer.items(): 
            # I am now inside the scope of lower, mid and upper
            Va = position['Va']
            Vp = position['Vp']
            inL = (Vp/Va)
            angles_array = []
            layers[f'{key_layer}'][f"{key_position}"] = {}

            for iteration in iterations:
                T = iteration['T']
                lambDa = iteration['lambda']
                print(key_layer, key_position, )
                print('SqrdInL -->', inL**2)
                print('Lambda -->', lambDa)
                sqrdDecimal = abs(1-(inL)**2).sqrt()
                angle = atan((T*Va/lambDa)*sqrdDecimal)
                angle = round(degrees(angle), 3)
                angles_array.append(angle)
            layers[f"{key_layer}"][f"{key_position}"]['angles'] = angles_array
    result['layers'] = layers
    result['iterations'] = iterations
    print(result)
    return result