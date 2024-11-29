import {
    List,
    Datagrid,
    TextField,
    DateField,
    ShowButton, Filter, SelectInput,
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
const OrderRequestFilter = (props) => (
    <Filter {...props}>
        <SelectInput
            label="Статус заказа"
            source="orderStatus"
            choices={orderStatusChoices}
            alwaysOn
        />
    </Filter>
);
export const UserList = (props) => (
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
