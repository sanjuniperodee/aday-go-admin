import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    SelectInput,
    Filter
} from 'react-admin';

// Define choices for OrderStatus
const orderStatusChoices = [
    { id: 'CREATED', name: 'Создан' },
    { id: 'STARTED', name: 'Начат' },
    { id: 'WAITING', name: 'В ожидании' },
    { id: 'ONGOING', name: 'В процессе' },
    { id: 'COMPLETED', name: 'Завершен' },
    { id: 'REJECTED', name: 'Отклонен' },
];

// Define the filter component
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

export const OrderRequestList = (props) => (
    <List filters={<OrderRequestFilter />} {...props}>
        <Datagrid rowClick="show">
            {/*<TextField source="id" label="ID" />*/}

            {/* Reference to Driver */}
            <ReferenceField
                label="Водитель"
                source="driverId"
                reference="clients"
                link="show"
            >
                <TextField source="firstName" />
            </ReferenceField>

            {/* Reference to Client */}
            <ReferenceField
                label="Клиент"
                source="clientId"
                reference="clients"
                link="show"
            >
                <TextField source="firstName" />
            </ReferenceField>

            <TextField source="orderType" label="Тип заказа" />
            <TextField source="from" label="Откуда" />
            <TextField source="to" label="Куда" />
            <TextField source="startTime" label="Время начала" />
            <TextField source="arrivalTime" label="Время прибытия" />
            {/*<TextField source="lat" label="Широта" />*/}
            {/*<TextField source="lng" label="Долгота" />*/}
            <TextField source="price" label="Цена" />
            <TextField source="comment" label="Комментарий" />
            <TextField source="createdAt" label="Создано" />
            {/*<TextField source="updatedAt" label="Обновлено" />*/}
            <TextField source="orderStatus" label="Статус заказа" />
            <TextField source="rating" label="Рейтинг" />
        </Datagrid>
    </List>
);
