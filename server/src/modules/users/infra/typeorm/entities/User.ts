import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import Class from '@modules/classes/infra/typeorm/entities/Class';
import Connection from '@modules/connections/infra/typeorm/entities/Connection';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  avatar: string;

  @Column()
  whatsapp: string;

  @Column()
  bio: string;

  @OneToMany(() => Class, classEntity => classEntity.user)
  class: Class[];

  @OneToMany(() => Class, connection => connection.user)
  connection: Connection[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
