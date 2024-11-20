from pydantic import BaseModel
from decimal import Decimal

class Speed_ratio_values(BaseModel):
    speed_1st_iteration:Decimal
    speed_2nd_iteration:Decimal
    speed_3rd_iteration:Decimal
    speed_4th_iteration:Decimal
    speed_5th_iteration:Decimal
    va_lower_chromosphere:Decimal
    va_lower_corona:Decimal
    va_lower_photosphere:Decimal
    va_mid_chromosphere:Decimal
    va_mid_corona:Decimal
    va_mid_photosphere:Decimal
    va_upper_chromosphere:Decimal
    va_upper_corona:Decimal
    va_upper_photosphere:Decimal
    vs_lower_chromosphere:Decimal
    vs_lower_corona:Decimal
    vs_lower_photosphere:Decimal
    vs_mid_chromosphere:Decimal
    vs_mid_corona:Decimal
    vs_mid_photosphere:Decimal
    vs_upper_chromosphere:Decimal
    vs_upper_corona:Decimal
    vs_upper_photosphere:Decimal

class Group_velocity(BaseModel):
    B0_1st_iteration: Decimal 
    B0_2nd_iteration: Decimal 
    B0_3rd_iteration: Decimal 
    B0_4th_iteration: Decimal 
    B0_5th_iteration: Decimal 
    P0_lower_chromosphere: Decimal 
    P0_lower_corona: Decimal 
    P0_lower_photosphere: Decimal 
    P0_mid_chromosphere: Decimal 
    P0_mid_corona: Decimal 
    P0_mid_photosphere: Decimal 
    P0_upper_chromosphere: Decimal 
    P0_upper_corona: Decimal 
    P0_upper_photosphere: Decimal
    alpha1: Decimal 
    alpha2: Decimal 
    beta1: Decimal 
    beta2: Decimal 
    gamma1: Decimal 
    gamma2: Decimal
    mu: Decimal 

class tan(BaseModel):
    T_1st_iteration:Decimal
    T_2nd_iteration:Decimal
    T_3rd_iteration:Decimal
    T_4th_iteration:Decimal
    T_5th_iteration:Decimal
    Va_chromosphere_upper:Decimal
    Va_lower_chromosphere:Decimal
    Va_lower_corona:Decimal
    Va_lower_photosphere:Decimal
    Va_mid_chromosphere:Decimal
    Va_mid_corona:Decimal
    Va_photosphere_mid:Decimal
    Va_photosphere_upper:Decimal
    Va_upper_corona:Decimal
    Vp_chromosphere_upper:Decimal
    Vp_lower_chromosphere:Decimal
    Vp_lower_corona:Decimal
    Vp_lower_photosphere:Decimal
    Vp_mid_chromosphere:Decimal
    Vp_mid_corona:Decimal
    Vp_photosphere_mid:Decimal
    Vp_photosphere_upper:Decimal
    Vp_upper_corona:Decimal
    lambda_1st_iteration:Decimal
    lambda_2nd_iteration:Decimal
    lambda_3rd_iteration:Decimal
    lambda_4th_iteration:Decimal
    lambda_5th_iteration:Decimal