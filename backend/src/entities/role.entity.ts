import { Roles } from 'src/guards/role/role.guard';
import {
	BaseEntity,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToMany,
	JoinColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('roles')
export class Role extends BaseEntity {
	@PrimaryGeneratedColumn('increment')
	id!: number;

	@Column({ type: 'varchar', length: 20, nullable: false })
	name!: Roles;

	@Column({ type: 'text', nullable: false })
	description!: string;

	// @ManyToMany(() => User, (user) => user.roles)
	// @JoinColumn()
	// users!: User[];

	@Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
	status!: string;

	@CreateDateColumn({ type: 'timestamp', name: 'created_at' })
	createdAt!: Date;

	@UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
	updatedAt!: Date;
}
