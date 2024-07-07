class Car:
    total_cars = 0

    def __init__(self, brand, model):
        self.__brand = brand  # brand is private
        self.__model = model
        Car.total_cars += 1

    def get_brand(self):
        return f"{self.__brand} !"

    def full_name(self):
        return f"{self.__brand} {self.__model}"

    def fuel_type(self):
        return "Petrol or Diesel"

    @staticmethod
    def general_description():
        return "Cars are awesome!!!"

    # this ensures that our model is readonly
    @property
    def model(self):
        return self.__model


# my_first_car = Car("Toyota", "Corola")
# print(my_first_car.brand)
# print(my_first_car.model)
# print(my_first_car.full_name())

# my_second_car = Car(brand="Tata", model="Safari")
# print(my_second_car.model)


#! Inheritance
class ElectricCar(Car):
    def __init__(self, brand, model, battery_size):
        super().__init__(model=model, brand=brand)
        self.battery_size = battery_size

    def fuel_type(self):
        return "Electric charge"


my_tesla_car = ElectricCar("Tesla", "Model S", "100kwh")
# print(my_tesla_car.full_name())
# print(my_tesla_car.__brand) -> this can't be accessed directly via object instances
# print(my_tesla_car.get_brand())
# print(my_tesla_car.fuel_type())


# safari = Car(brand="Tata", model="Safari")
# print(safari.fuel_type())
# print(safari.model)

# print(Car.total_cars)

# print(Car.general_description())

# print(isinstance(my_tesla_car, Car))
# print(isinstance(my_tesla_car, ElectricCar))


# Multiple Inheritance


class Engine:
    def engine_info(self):
        return "This is engine information"


class Battery:
    def battery_info(self):
        return "This is battery information"


class AdvancedElectricCar(Car, Engine, Battery):
    pass


advanced_electric_car = AdvancedElectricCar(
    brand="Advanced Tesla", model="Advanced Model S"
)
print(advanced_electric_car.get_brand())
print(advanced_electric_car.battery_info())
print(advanced_electric_car.engine_info())
