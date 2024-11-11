from pydantic import BaseModel
from math import sin, sqrt, radians

class Values(BaseModel):
    speed_1st_iteration: int
    speed_2nd_iteration: int
    speed_3rd_iteration: int
    speed_4th_iteration: int
    speed_5th_iteration: int
    va_lower_chromosphere: int
    va_lower_corona: int
    va_lower_photosphere: int
    va_mid_chromosphere: int
    va_mid_corona: int
    va_mid_photosphere: int
    va_upper_chromosphere: int
    va_upper_corona: int
    va_upper_photosphere: int
    vs_lower_chromosphere: int
    vs_lower_corona: int
    vs_lower_photosphere: int
    vs_mid_chromosphere: int
    vs_mid_corona: int
    vs_mid_photosphere: int
    vs_upper_chromosphere: int
    vs_upper_corona: int
    vs_upper_photosphere: int


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
    precision = 5

    for key_layer, layer in atmospheres.items():
        layers[f"{key_layer}"] = {}
        # layer
        for key_position, position in layer.items(): 
            # I am now inside the scope of lower, mid and upper
            Vs = position['Vs']
            Va = position['Va']
            C2 = Vs**2 + Va**2 
            FMSW_array = []
            SMSW_array = []
            print('/n')
            print(layers)
            layers[f'{key_layer}'][f"{key_position}"] = {}
            print(layers)

            for angle in iterations:
                print('')
                print('')
                FMSW1 =(2*Vs**2*(1-(sin(radians(angle))**2)))
                FMSW2 = ((C2 + sqrt(C2**2 + 4*Va**2*Vs**2*(1-(sin(radians(angle)))**2))))  
                print(FMSW1, '-->', FMSW2)
                FMSW = (2*Vs**2*(1-(sin(radians(angle))**2)) / (C2 + sqrt(C2**2 + 4*Va**2*Vs**2*(1-(sin(radians(angle)))**2))))
                FMSW = f"{FMSW:.{precision}g}"
                print('FMSW-->', FMSW)
                print('SMSW1-->', (C2 - sqrt(C2**2 + 4*Va**2*Vs**2*(1-(sin(radians(angle)))**2))) )
                try:
                    SMSW = (2*Vs**2*(1-(sin(radians(angle))**2)) / (C2 - sqrt(C2**2 + 4*Va**2*Vs**2*(1-(sin(radians(angle)))**2))))
                    SMSW = f"{SMSW:.{precision}g}"
                except ZeroDivisionError:
                    SMSW = 0
                print('SMSW-->', SMSW)
                FMSW_array.append(FMSW)
                SMSW_array.append(SMSW)
                print(angle)
                print(sin(radians(angle)))
            layers[f"{key_layer}"][f"{key_position}"]['FMSW'] = FMSW_array
            layers[f"{key_layer}"][f"{key_position}"]['SMSW'] = SMSW_array

    return layers