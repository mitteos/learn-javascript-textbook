const truncate = (str, maxLength) =>
    str.length > maxLength
        ? str.slice(0, maxLength - 1) + "..."
        : str

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)
truncate("Всем привет!", 20)
