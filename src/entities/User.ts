import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


export enum UserStatus {
    DELETED = 'deleted',
    ACTIVE = 'active',
    ARCHIVED = 'archived'
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({
        length: 10
    })
    phone: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: UserStatus,
        default: UserStatus.ACTIVE
    })
    status:  UserStatus;
}
