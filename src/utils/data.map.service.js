class DataMapService {
  getIngredientTypes = (data) => {
    const burgerIngredientTypes = [];

    data.forEach((burgerIngredient) => {
      const needlyBurgerIngredientType = burgerIngredientTypes.find(
        (burgerIngredientType) =>
          burgerIngredient.type === burgerIngredientType.type
      );

      if (!needlyBurgerIngredientType) {
        burgerIngredientTypes.push({
          type: burgerIngredient.type,
          name: this.getIngredientTypeName(burgerIngredient.type),
        });
      }
    });

    return burgerIngredientTypes;
  };

  getIngredientTypeName = (ingredientType) => {
    let ingredientTypeName = null;

    switch (ingredientType.toLowerCase()) {
      case "bun":
        ingredientTypeName = "Булка";
        break;
      case "main":
        ingredientTypeName = "Начинка";
        break;
      case "sauce":
        ingredientTypeName = "Соусы";
        break;
      default: // Do nothing
    }

    return ingredientTypeName;
  };

  getIngredients = (data) => {
    const burgerIngredients = [];
    const burgerIngredientTypes = this.getIngredientTypes(data);

    burgerIngredientTypes.forEach((burgerIngredientType) => {
      const needlyBurgerIngredients = data.filter(
        (burgerIngredient) =>
          burgerIngredient.type === burgerIngredientType.type
      );
      burgerIngredients.push({
        ...burgerIngredientType,
        elements: [...needlyBurgerIngredients],
      });
    });

    return burgerIngredients;
  };
}

export const dataMapService = new DataMapService();
