import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
    title: yup.string().required("Введите название категории"),
    transactionType: yup.string().required("Выберите тип"),
});