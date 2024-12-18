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
} from 'react-admin';

export const UserShow = (props) => (
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
                    <Datagrid>
                        <TextField source="id" label="ID заказа" />
                        <ChipField source="orderType" label="Тип заказа" />
                        <ChipField source="orderStatus" label="Статус" />
                        <TextField source="from" label="Откуда" />
                        <TextField source="to" label="Куда" />
                        <DateField source="startTime" label="Время начала" />
                        <DateField source="arrivalTime" label="Время прибытия" />
                        <NumberField source="price" label="Цена" options={{ style: 'currency', currency: 'KZT' }} />
                        <TextField source="comment" label="Комментарий" />
                        <TextField source="rejectReason" label="Причина отказа" />
                        <DateField source="endedAt" label="Окончено" />
                        <NumberField source="rating" label="Рейтинг" />
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);
