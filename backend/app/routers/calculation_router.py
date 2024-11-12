from fastapi import APIRouter
from pydantic import BaseModel
from app.controllers import speed_ratio_controller, group_velocity_controller, tan_controller
from app.utils import types

router = APIRouter()


@router.post('/speed_ratio')
def get_speed_ratio(item: types.Speed_ratio_values):
    print(item)
    return speed_ratio_controller.calculate(item)


# @router.post('/tan')
# def get_tan():
#     return tan()

@router.post('/tan')
def get_group_velocity(item: types.Group_velocity):
    return tan_controller.calculate(item)
