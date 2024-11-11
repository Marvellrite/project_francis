from fastapi import APIRouter
from pydantic import BaseModel
from app.controllers import speed_ratio_controller, group_velocity_controller, tan_controller

router = APIRouter()

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

@router.post('/speed_ratio')
def get_speed_ratio(item: Values):
    print(item)
    return speed_ratio_controller.calculate(item)

# @router.post('/group_velocity')
# def get_group_velocity():
#     return group_velocity()

# @router.post('/tan')
# def get_tan():
#     return tan()

