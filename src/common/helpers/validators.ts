export type ValidateFunctionType = (value: string) => string;

export enum EInputCharLimits {
  SEARCH = 100,
  PHONE = 12,
  CODE = 6,
  USERNAME = 30,
}

export const validators = {
  search: (value: string) => {
    if (/[<>{}]/.test(value)) {
      return "Запрос содержит недопустимые символы";
    }

    return "";
  },

  phone: (value: string) => {
    if (!value) return "Поле обязательно для заполнения";

    // Автоматическая замена в начале ввода
    let processedValue = value;
    if (processedValue.startsWith("7") || processedValue.startsWith("8")) {
      processedValue = "+7" + processedValue.slice(1);
    } else if (processedValue.startsWith("9")) {
      processedValue = "+79" + processedValue.slice(1);
    }

    // Удаляем все пробелы и дефисы для проверки
    const cleanValue = processedValue.replace(/[\s-]/g, "");

    if (cleanValue.length > EInputCharLimits.PHONE)
      return "Телефон не должен превышать 12 символов";

    // Проверка формата +78005553535
    if (!/^\+7\d{10}$/.test(cleanValue)) {
      return "Введен неверный номер телефона";
    }

    return "";
  },

  // Функция для форматирования телефона при вводе (можно использовать в компоненте)
  phoneFormatter: (value: string): string => {
    let processedValue = value;

    // Заменяем начало ввода
    if (processedValue.startsWith("7") || processedValue.startsWith("8")) {
      processedValue = "+7" + processedValue.slice(1);
    } else if (processedValue.startsWith("9")) {
      processedValue = "+79" + processedValue.slice(1);
    }

    // Ограничиваем длину
    if (processedValue.length > EInputCharLimits.PHONE) {
      processedValue = processedValue.slice(0, EInputCharLimits.PHONE);
    }

    return processedValue;
  },

  code: (value: string) => {
    if (!value) return "Поле обязательно для заполнения";

    // Удаляем все нецифровые символы
    const cleanValue = value.replace(/\D/g, "");

    // Проверяем длину
    if (cleanValue.length !== EInputCharLimits.CODE) {
      return `Код должен состоять из ${EInputCharLimits.CODE} цифр`;
    }

    // Проверяем, что все символы цифры
    if (!/^\d+$/.test(cleanValue)) {
      return "Код должен содержать только цифры";
    }

    return "";
  },

  // Функция для форматирования кода при вводе
  codeFormatter: (value: string): string => {
    // Удаляем все нецифровые символы
    let processedValue = value.replace(/\D/g, "");

    // Ограничиваем длину
    if (processedValue.length > EInputCharLimits.CODE) {
      processedValue = processedValue.slice(0, EInputCharLimits.CODE);
    }

    return processedValue;
  },

  username: (value: string) => {
    if (!value) return "Поле обязательно для заполнения";

    // Проверяем минимальную длину
    if (value.length < 2) {
      return "Имя должно содержать минимум 2 символа";
    }

    // Проверяем максимальную длину
    if (value.length > EInputCharLimits.USERNAME) {
      return `Имя не должно превышать ${EInputCharLimits.USERNAME} символов`;
    }

    // Проверяем, что содержатся только буквы (русские и английские)
    // Разрешаем буквы: а-я, А-Я, a-z, A-Z, а также букву ёЁ
    if (!/^[a-zA-Zа-яА-ЯёЁ]+$/.test(value)) {
      return "Имя может содержать только буквы";
    }

    return "";
  },

  // Функция для форматирования имени при вводе
  usernameFormatter: (value: string): string => {
    let processedValue = value;

    // Удаляем все не-буквенные символы (оставляем только русские/английские буквы и ёЁ)
    processedValue = processedValue.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, "");

    // Ограничиваем длину
    if (processedValue.length > EInputCharLimits.USERNAME) {
      processedValue = processedValue.slice(0, EInputCharLimits.USERNAME);
    }

    return processedValue;
  },
};
