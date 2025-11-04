export type ValidateFunctionType = (value: string) => string;

export enum EInputCharLimits {
  SEARCH = 100,
  BRAND = 50,
  PRODUCT_NAME = 100,
  DESCRIPTION = 2000,
  PRICE = 15,
  URL = 500,
  IMAGE_URL = 1000,
  TAG = 20,
}

export const validators = {
  search: (value: string) => {
    if (/[<>{}]/.test(value)) {
      return "Запрос содержит недопустимые символы";
    }
    return "";
  },

  brand: (value: string) => {
    if (!value || !value.trim()) return "Название бренда обязательно";

    const trimmed = value.trim();

    if (trimmed.length < 2) {
      return "Название бренда должно содержать минимум 2 символа";
    }

    if (trimmed.length > EInputCharLimits.BRAND) {
      return `Название бренда не должно превышать ${EInputCharLimits.BRAND} символов`;
    }

    if (!/^[a-zA-Zа-яА-ЯёЁ0-9\s\-_&.,()]+$/.test(trimmed)) {
      return "Бренд может содержать только буквы, цифры, пробелы и символы (-_&.,())";
    }

    return "";
  },

  product_name: (value: string) => {
    if (!value || !value.trim()) return "Название товара обязательно";

    const trimmed = value.trim();

    if (trimmed.length < 2) {
      return "Название товара должно содержать минимум 2 символа";
    }

    if (trimmed.length > EInputCharLimits.PRODUCT_NAME) {
      return `Название товара не должно превышать ${EInputCharLimits.PRODUCT_NAME} символов`;
    }

    if (!/^[a-zA-Zа-яА-ЯёЁ0-9\s\-_&.,()!?@#%+=:;/]+$/.test(trimmed)) {
      return "Название товара содержит недопустимые символы";
    }

    return "";
  },

  price: (value: string) => {
    if (!value) return "Цена обязательна для заполнения";

    const trimmed = value.trim();

    if (trimmed.length > EInputCharLimits.PRICE) {
      return `Цена не должна превышать ${EInputCharLimits.PRICE} символов`;
    }

    if (!/^[\d\s.,]*$/.test(trimmed)) {
      return "Цена должна содержать только цифры, пробелы, точки или запятые";
    }

    const numericValue = trimmed.replace(/\s/g, "").replace(",", ".");

    if (numericValue && !isNaN(parseFloat(numericValue))) {
      const priceNumber = parseFloat(numericValue);

      if (priceNumber < 0) {
        return "Цена не может быть отрицательной";
      }

      if (priceNumber > 1000000000) {
        return "Цена слишком большая";
      }

      const decimalPart = numericValue.split(".")[1];
      if (decimalPart && decimalPart.length > 2) {
        return "Цена не может содержать больше 2 знаков после запятой";
      }
    } else if (numericValue) {
      return "Введите корректное числовое значение цены";
    }

    return "";
  },

  description: (value: string) => {
    if (!value || !value.trim()) return "Описание обязательно";

    const trimmed = value.trim();

    if (trimmed.length < 10) {
      return "Описание должно содержать минимум 10 символов";
    }

    if (trimmed.length > EInputCharLimits.DESCRIPTION) {
      return `Описание не должно превышать ${EInputCharLimits.DESCRIPTION} символов`;
    }

    if (
      /<script|<\/script>|javascript:|on\w+\s*=/.test(trimmed.toLowerCase())
    ) {
      return "Описание содержит недопустимые элементы";
    }

    return "";
  },

  image_url: (value: string) => {
    if (!value || !value.trim()) return "URL изображения обязателен";

    const trimmed = value.trim();

    if (trimmed.length > EInputCharLimits.IMAGE_URL) {
      return `URL изображения не должен превышать ${EInputCharLimits.IMAGE_URL} символов`;
    }

    if (/[<>{}]/.test(trimmed)) {
      return "URL содержит недопустимые символы";
    }

    try {
      const url = new URL(trimmed);

      if (!["http:", "https:"].includes(url.protocol)) {
        return "URL должен использовать протокол HTTP или HTTPS";
      }
    } catch (error) {
      return "Введите корректный URL";
    }

    return "";
  },

  url: (value: string) => {
    if (!value || !value.trim()) return "URL обязателен";

    const trimmed = value.trim();

    if (trimmed.length > EInputCharLimits.URL) {
      return `URL не должен превышать ${EInputCharLimits.URL} символов`;
    }

    if (/[<>{}]/.test(trimmed)) {
      return "URL содержит недопустимые символы";
    }

    try {
      const url = new URL(trimmed);

      if (!["http:", "https:"].includes(url.protocol)) {
        return "URL должен использовать протокол HTTP или HTTPS";
      }
    } catch (error) {
      return "Введите корректный URL";
    }

    return "";
  },

  tag: (value: string) => {
    if (!value || !value.trim()) return "Тег не может быть пустым";

    const trimmed = value.trim();

    if (trimmed.length < 1) {
      return "Тег должен содержать хотя бы 1 символ";
    }

    if (trimmed.length > EInputCharLimits.TAG) {
      return `Тег не должен превышать ${EInputCharLimits.TAG} символов`;
    }

    if (!/^[a-zA-Zа-яА-ЯёЁ0-9\s\-_]+$/.test(trimmed)) {
      return "Тег может содержать только буквы, цифры, пробелы, дефисы и подчеркивания";
    }

    if (/^\s+$/.test(trimmed)) {
      return "Тег не может состоять только из пробелов";
    }

    return "";
  },
};
