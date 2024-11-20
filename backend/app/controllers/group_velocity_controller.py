from pydantic import BaseModel
from math import sin, sqrt, cos, degrees
from decimal import Decimal
from app.utils import types


def calculate(values: types.Group_velocity)->dict:
    iterations = [values.B0_1st_iteration, values.B0_2nd_iteration, values.B0_3rd_iteration, values.B0_4th_iteration, values.B0_5th_iteration]
    BAG = {
        'alpha':[values.alpha1, values.alpha2],
        'beta':[values.beta1, values.beta2],
        'gamma':[values.gamma1, values.gamma2]
    }
    mu = values.mu
    atmospheres = {
        'photosphere': {
            'lower':values.P0_lower_photosphere,
            'mid': values.P0_mid_photosphere,
            'upper':values.P0_upper_photosphere,
            },
        'chromosphere': {
            'lower':values.P0_lower_chromosphere,
            'mid':values.P0_mid_chromosphere,
            'upper':values.P0_upper_chromosphere,
            },
        'corona': {
            'lower':values.P0_lower_corona,
            'mid':values.P0_mid_corona,
            'upper':values.P0_upper_corona,
        },
    
    }

    result = {}

    layers = {}

    for key_layer, layer in atmospheres.items():
        layers[f"{key_layer}"] = {}

        for key_position, position in layer.items(): 
            # I am now inside the scope of lower, mid and upper where each holds single values of P0
            P0 = position
            layers[f'{key_layer}'][f"{key_position}"] = {}
            layers[f'{key_layer}'][f"{key_position}"]['Vg'] = []

            for iteration in iterations:
                if(key_layer=='photosphere'):
                    bag = BAG['alpha']
                elif(key_layer=='chromosphere'):
                    bag = BAG['beta']
                else:
                    bag = BAG['gamma']

                B0 = iteration
                Vg0 = (B0*Decimal(cos(degrees(bag[0]))))/Decimal(sqrt(mu*P0))
                Vg1 = (B0*Decimal(cos(degrees(bag[1]))))/Decimal(sqrt(mu*P0))
                Vg = {'Vg0':Vg0, 'Vg1':Vg1}
                layers[f"{key_layer}"][f"{key_position}"]['Vg'].append(Vg)
    result['layers'] = layers
    result['iterations'] = iterations
    result['BAG'] = BAG
    print(result)
    return result