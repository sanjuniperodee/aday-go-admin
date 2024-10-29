import {
    List,
    Datagrid,
    TextField,
    DateField,
    ShowButton,
} from 'react-admin';

export const UserList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" label="ID" />
            <TextField source="phone" label="Телефон" />
            <TextField source="firstName" label="Имя" />
            <TextField source="lastName" label="Фамилия" />
            <TextField source="middleName" label="Отчество" />
            <DateField source="birthDate" label="Дата рождения" />
            <DateField source="createdAt" label="Создан" />
            <DateField source="updatedAt" label="Обновлен" />
            <ShowButton />
        </Datagrid>
    </List>
);
