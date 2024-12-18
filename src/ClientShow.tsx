import React from 'react';
import {
    Show,
    TabbedShowLayout,
    Tab,
    TextField,
    DateField,
    Datagrid,
    ReferenceManyField,
    NumberField,
    ChipField,
    Filter,
    TextInput,
    SelectInput, ReferenceField,
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
// Define the filter for order type
const OrderFilter = (props) => (
    <Filter {...props}>
        <SelectInput
            label="Тип заказа"
            source="orderType"
            choices={[
                { id: 'DELIVERY', name: 'Доставка' },
                { id: 'TAXI', name: 'Такси' },
                { id: 'MOVING', name: 'Переезд' },
            ]}
        />
    </Filter>
);
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

export const ClientShow = (props) => (
    <Show {...props}>
        <TabbedShowLayout>
            {/* General User Information Tab */}
            <Tab label="Основное">
                <TextField source="id" label="ID" />
                <TextField source="phone" label="Телефон" />
                <TextField source="firstName" label="Имя" />
                <TextField source="lastName" label="Фамилия" />
                <TextField source="middleName" label="Отчество" />
                <DateField source="birthDate" label="Дата рождения" />
                <DateField source="lastSms" label="Последнее SMS" />
                <DateField source="createdAt" label="Создан" />
                <DateField source="updatedAt" label="Обновлен" />
                <TextField source="deviceToken" label="Токен устройства" />
            </Tab>

            {/* Orders Tab */}
            <Tab label="Заказы">
                <ReferenceManyField
                    reference="order-requests"
                    target="clientId" // Link based on clientId
                    label="Заказы пользователя"
                >
                    <Datagrid rowClick="show">
                        <ChipField source="orderType" label="Тип заказа" />
                        <ChipField source="orderStatus" label="Статус" />
                        <DateField source="startTime" label="Время начала" />
                        <DateField source="arrivalTime" label="Время прибытия" />
                        <NumberField source="price" label="Цена" options={{ style: 'currency', currency: 'KZT' }} />
                        <TextField source="comment" label="Комментарий" />
                        <TextField source="rejectReason" label="Причина отказа" />
                        <NumberField source="rating" label="Рейтинг" />
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

                        {/*<TextField source="orderType" label="Тип заказа" />*/}
                        <TextField source="from" label="Откуда" />
                        <TextField source="to" label="Куда" />
                        {/*<TextField source="lat" label="Широта" />*/}
                        {/*<TextField source="lng" label="Долгота" />*/}
                        <DateField source="createdAt" label="Создано" />
                        {/*<TextField source="updatedAt" label="Обновлено" />*/}
                    </Datagrid>
                </ReferenceManyField>
            </Tab>

            {/* Accepted Orders Tab */}
            <Tab label="Принятые Заказы">
                <ReferenceManyField
                    reference="order-requests"
                    target="driverId" // Link based on driverId
                    label="Принятые заказы"
                >
                    <Datagrid rowClick="show">
                        <ChipField source="orderType" label="Тип заказа" />
                        <ChipField source="orderStatus" label="Статус" />
                        <DateField source="startTime" label="Время начала" />
                        <DateField source="arrivalTime" label="Время прибытия" />
                        <NumberField source="price" label="Цена" options={{ style: 'currency', currency: 'KZT' }} />
                        <TextField source="comment" label="Комментарий" />
                        <TextField source="rejectReason" label="Причина отказа" />
                        <NumberField source="rating" label="Рейтинг" />
                        <ReferenceField
                            label="Водитель"
                            source="driverId"
                            reference="clients"
                            link="show"
                        >
                            <TextField source="firstName" />
                        </ReferenceField>

                        <ReferenceField
                            label="Клиент"
                            source="clientId"
                            reference="clients"
                            link="show"
                        >
                            <TextField source="firstName" />
                        </ReferenceField>

                        <TextField source="from" label="Откуда" />
                        <TextField source="to" label="Куда" />
                        <DateField source="createdAt" label="Создано" />
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);
