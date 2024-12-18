import {
    List,
    Datagrid,
    TextField,
    DateField,
    ShowButton, Filter, SelectInput, NumberInput, TextInput,
} from 'react-admin';

const orderStatusChoices = [
    { id: 'CREATED', name: 'Создан' },
    { id: 'STARTED', name: 'Начат' },
    { id: 'WAITING', name: 'В ожидании' },
    { id: 'ONGOING', name: 'В процессе' },
    { id: 'COMPLETED', name: 'Завершен' },
    { id: 'REJECTED', name: 'Отклонен водителем' },
    { id: 'REJECTED_BY_CLIENT', name: 'Отклонен клиентом' },
];
const orderTypeChoices = [
    { id: 'TAXI', name: 'Такси' },
    { id: 'CARGO', name: 'Груз' },
    { id: 'INTERCITY', name: 'Межгород' },
    { id: 'DELIVERY', name: 'Доставка' },
];
const OrderRequestFilter = (props) => (
    <Filter {...props}>
        <SelectInput
            label="Статус заказа"
            source="orderStatus"
            choices={orderStatusChoices}
            alwaysOn
        />
        <TextInput label="Номер телефона"
                     source="phone"
        alwaysOn/>
        <SelectInput
            label="Тип заказа"
            source="orderType"
            choices={orderTypeChoices}
            alwaysOn
        />
    </Filter>
);
export const ClientList = (props) => (
    <List filters={<OrderRequestFilter />} {...props}>
        <Datagrid rowClick="show">
            {/*<TextField source="id" label="ID" />*/}
            <TextField source="phone" label="Телефон" />
            <TextField source="orders.length" label="Заказы" />
            <TextField source="firstName" label="Имя" />
            <TextField source="lastName" label="Фамилия" />
            {/*<TextField source="middleName" label="Отчество" />*/}
            {/*<DateField source="birthDate" label="Дата рождения" />*/}
            <DateField source="createdAt" label="Создан" />
            <DateField source="updatedAt" label="Обновлен" />
            <ShowButton />
        </Datagrid>
    </List>
);
