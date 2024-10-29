import {
    Show,
    SimpleShowLayout,
    TextField,
    DateField,
    ReferenceField,
} from 'react-admin';

export const OrderShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" label="ID" />

            {/* Reference to Driver */}
            <ReferenceField
                label="Водитель"
                source="driverId"
                reference="drivers"
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
            <DateField source="startTime" label="Время начала" />
            <DateField source="arrivalTime" label="Время прибытия" />
            <TextField source="lat" label="Широта" />
            <TextField source="lng" label="Долгота" />
            <TextField source="price" label="Цена" />
            <TextField source="comment" label="Комментарий" />
            <DateField source="createdAt" label="Создано" />
            <DateField source="updatedAt" label="Обновлено" />
            <TextField source="orderStatus" label="Статус заказа" />
            <TextField source="rating" label="Рейтинг" />
        </SimpleShowLayout>
    </Show>
);
