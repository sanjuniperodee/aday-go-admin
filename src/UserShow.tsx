import {
    Show,
    SimpleShowLayout,
    TextField,
    DateField,
} from 'react-admin';

export const UserShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            {/*<TextField source="id" label="ID" />*/}
            <TextField source="phone" label="Телефон" />
            <TextField source="firstName" label="Имя" />
            <TextField source="lastName" label="Фамилия" />
            <TextField source="middleName" label="Отчество" />
            <DateField source="birthDate" label="Дата рождения" />
            <DateField source="lastSms" label="Последнее SMS" />
            <DateField source="createdAt" label="Создан" />
            <DateField source="updatedAt" label="Обновлен" />
            <TextField source="deviceToken" label="Токен устройства" />
        </SimpleShowLayout>
    </Show>
);
