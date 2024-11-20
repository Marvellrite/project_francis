from pydantic import BaseModel
from math import sin, sqrt, cos, degrees
from decimal import Decimal
from app.utils import types


def calculate(values: types.Group_velocity)->dict:
    # iterations = [values.B0_1st_iteration, values.B0_2nd_iteration, values.B0_3rd_iteration, values.B0_4th_iteration, values.B0_5th_iteration]
    BAG = {
        'alpha':[values.alpha1, values.alpha2],
        'beta':[values.beta1, values.beta2],
        'gamma':[values.gamma1, values.gamma2]
    }
    mu = values.mu
    atmospheres = {
        'photosphere': {
            'positions':{
            'lower':values.P0_lower_photosphere,
            'mid': values.P0_mid_photosphere,
            'upper':values.P0_upper_photosphere,
            },
            'B0': {
                'lower':{
                  '1st': values.Photosphere_lower_B0_1st_iteration,
                  '2nd': values.Photosphere_lower_B0_2nd_iteration,  
                  '3rd': values.Photosphere_lower_B0_3rd_iteration,  
                  '4th': values.Photosphere_lower_B0_4th_iteration,  
                  '5th': values.Photosphere_lower_B0_5th_iteration  
                },
                'mid':{
                  '1st': values.Photosphere_mid_B0_1st_iteration,
                  '2nd': values.Photosphere_mid_B0_2nd_iteration,  
                  '3rd': values.Photosphere_mid_B0_3rd_iteration,  
                  '4th': values.Photosphere_mid_B0_4th_iteration,  
                  '5th': values.Photosphere_mid_B0_5th_iteration  
                },
                'upper':{
                  '1st': values.Photosphere_upper_B0_1st_iteration,
                  '2nd': values.Photosphere_upper_B0_2nd_iteration,  
                  '3rd': values.Photosphere_upper_B0_3rd_iteration,  
                  '4th': values.Photosphere_upper_B0_4th_iteration,  
                  '5th': values.Photosphere_upper_B0_5th_iteration  
                }
            }
            },
        'chromosphere': {
            'positions':{
            'lower':values.P0_lower_chromosphere,
            'mid':values.P0_mid_chromosphere,
            'upper':values.P0_upper_chromosphere,
            },
             'B0': {
                'lower':{
                  '1st': values.Chromosphere_lower_B0_1st_iteration,
                  '2nd': values.Chromosphere_lower_B0_2nd_iteration,  
                  '3rd': values.Chromosphere_lower_B0_3rd_iteration,  
                  '4th': values.Chromosphere_lower_B0_4th_iteration,  
                  '5th': values.Chromosphere_lower_B0_5th_iteration  
                },
                'mid':{
                  '1st': values.Chromosphere_mid_B0_1st_iteration,
                  '2nd': values.Chromosphere_mid_B0_2nd_iteration,  
                  '3rd': values.Chromosphere_mid_B0_3rd_iteration,  
                  '4th': values.Chromosphere_mid_B0_4th_iteration,  
                  '5th': values.Chromosphere_mid_B0_5th_iteration  
                },
                'upper':{
                  '1st': values.Chromosphere_upper_B0_1st_iteration,
                  '2nd': values.Chromosphere_upper_B0_2nd_iteration,  
                  '3rd': values.Chromosphere_upper_B0_3rd_iteration,  
                  '4th': values.Chromosphere_upper_B0_4th_iteration,  
                  '5th': values.Chromosphere_upper_B0_5th_iteration  
                }
            }
            },
        'corona': {
            'positions':{
            'lower':values.P0_lower_corona,
            'mid':values.P0_mid_corona,
            'upper':values.P0_upper_corona,
            },
             'B0': {
                'lower':{
                  '1st': values.Corona_lower_B0_1st_iteration,
                  '2nd': values.Corona_lower_B0_2nd_iteration,  
                  '3rd': values.Corona_lower_B0_3rd_iteration,  
                  '4th': values.Corona_lower_B0_4th_iteration,  
                  '5th': values.Corona_lower_B0_5th_iteration  
                },
                'mid':{
                  '1st': values.Corona_mid_B0_1st_iteration,
                  '2nd': values.Corona_mid_B0_2nd_iteration,  
                  '3rd': values.Corona_mid_B0_3rd_iteration,  
                  '4th': values.Corona_mid_B0_4th_iteration,  
                  '5th': values.Corona_mid_B0_5th_iteration  
                },
                'upper':{
                  '1st': values.Corona_upper_B0_1st_iteration,
                  '2nd': values.Corona_upper_B0_2nd_iteration,  
                  '3rd': values.Corona_upper_B0_3rd_iteration,  
                  '4th': values.Corona_upper_B0_4th_iteration,  
                  '5th': values.Corona_upper_B0_5th_iteration  
                }
            }
        },
    
    }

    result = {}

    layers = {}

    for key_layer, layer in atmospheres.items():
        layers[f"{key_layer}"] = {}

        # The scope of photosphere, chromosphere and corona

        for key_category, category in layer.items():

        # The scope of positions and B0
            if(key_category=='B0'):
                continue
            
            for key_position, position in category.items(): 
                # The scope of lower, mid, upper
                P0 = position
                layers[f'{key_layer}'][f"{key_position}"] = {}
                layers[f'{key_layer}'][f"{key_position}"]['Vg'] = []

                for B0_pos_key, B0_pos in layer['B0'].items():
                    # The scope of BO.lower, BO.mid, BO.upper
                    for B0_key, B0_value in B0_pos.items():
                        if(key_layer=='photosphere'):
                            bag = BAG['alpha']
                        elif(key_layer=='chromosphere'):
                            bag = BAG['beta']
                        else:
                            bag = BAG['gamma']

                        B0 = B0_value
                        Vg0 = round((B0*Decimal(cos(degrees(bag[0]))))/Decimal(sqrt(mu*P0)), 3)
                        Vg1 = round((B0*Decimal(cos(degrees(bag[1]))))/Decimal(sqrt(mu*P0)), 3)
                        Vg = {'Vg0':Vg0, 'Vg1':Vg1}
                        layers[f"{key_layer}"][f"{key_position}"]['Vg'].append(Vg)
    result['layers'] = layers
    result['iterations'] = [ {
                'lower':{
                  '1st': values.Photosphere_lower_B0_1st_iteration,
                  '2nd': values.Photosphere_lower_B0_2nd_iteration,  
                  '3rd': values.Photosphere_lower_B0_3rd_iteration,  
                  '4th': values.Photosphere_lower_B0_4th_iteration,  
                  '5th': values.Photosphere_lower_B0_5th_iteration  
                },
                'mid':{
                  '1st': values.Photosphere_mid_B0_1st_iteration,
                  '2nd': values.Photosphere_mid_B0_2nd_iteration,  
                  '3rd': values.Photosphere_mid_B0_3rd_iteration,  
                  '4th': values.Photosphere_mid_B0_4th_iteration,  
                  '5th': values.Photosphere_mid_B0_5th_iteration  
                },
                'upper':{
                  '1st': values.Photosphere_upper_B0_1st_iteration,
                  '2nd': values.Photosphere_upper_B0_2nd_iteration,  
                  '3rd': values.Photosphere_upper_B0_3rd_iteration,  
                  '4th': values.Photosphere_upper_B0_4th_iteration,  
                  '5th': values.Photosphere_upper_B0_5th_iteration  
                }
            }, {
                'lower':{
                  '1st': values.Chromosphere_lower_B0_1st_iteration,
                  '2nd': values.Chromosphere_lower_B0_2nd_iteration,  
                  '3rd': values.Chromosphere_lower_B0_3rd_iteration,  
                  '4th': values.Chromosphere_lower_B0_4th_iteration,  
                  '5th': values.Chromosphere_lower_B0_5th_iteration  
                },
                'mid':{
                  '1st': values.Chromosphere_mid_B0_1st_iteration,
                  '2nd': values.Chromosphere_mid_B0_2nd_iteration,  
                  '3rd': values.Chromosphere_mid_B0_3rd_iteration,  
                  '4th': values.Chromosphere_mid_B0_4th_iteration,  
                  '5th': values.Chromosphere_mid_B0_5th_iteration  
                },
                'upper':{
                  '1st': values.Chromosphere_upper_B0_1st_iteration,
                  '2nd': values.Chromosphere_upper_B0_2nd_iteration,  
                  '3rd': values.Chromosphere_upper_B0_3rd_iteration,  
                  '4th': values.Chromosphere_upper_B0_4th_iteration,  
                  '5th': values.Chromosphere_upper_B0_5th_iteration  
                }
            },
            {
                'lower':{
                  '1st': values.Corona_lower_B0_1st_iteration,
                  '2nd': values.Corona_lower_B0_2nd_iteration,  
                  '3rd': values.Corona_lower_B0_3rd_iteration,  
                  '4th': values.Corona_lower_B0_4th_iteration,  
                  '5th': values.Corona_lower_B0_5th_iteration  
                },
                'mid':{
                  '1st': values.Corona_mid_B0_1st_iteration,
                  '2nd': values.Corona_mid_B0_2nd_iteration,  
                  '3rd': values.Corona_mid_B0_3rd_iteration,  
                  '4th': values.Corona_mid_B0_4th_iteration,  
                  '5th': values.Corona_mid_B0_5th_iteration  
                },
                'upper':{
                  '1st': values.Corona_upper_B0_1st_iteration,
                  '2nd': values.Corona_upper_B0_2nd_iteration,  
                  '3rd': values.Corona_upper_B0_3rd_iteration,  
                  '4th': values.Corona_upper_B0_4th_iteration,  
                  '5th': values.Corona_upper_B0_5th_iteration  
                }
            }
            ]
    result['BAG'] = BAG
    print(result)
    return result