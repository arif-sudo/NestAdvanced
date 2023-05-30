import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UserRole } from "src/user-role/user-role";
import { User } from "src/users/users.model";

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, RoleCreationAttrs>{
    @ApiProperty({ example: '1', description: 'Unique identificator' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'ADMIN', description: 'Unique role value' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    value: string;

    @ApiProperty({ example: 'Administrator', description: 'Role description' })
    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @BelongsToMany(() => User, () => UserRole)
    users: User[]
}
