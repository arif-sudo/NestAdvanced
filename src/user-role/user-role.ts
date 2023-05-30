import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { User } from "src/users/users.model";

interface UserRoleCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: "user_role", createdAt: false, updatedAt: false})
export class UserRole extends Model<UserRole, UserRoleCreationAttrs>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER})
    roleId: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

}
