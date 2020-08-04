import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import Class from '@modules/classes/infra/typeorm/entities/Class';

@Entity('class_schedule')
class ClassSchedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int')
  week_day: number;

  @Column('int')
  from: number;

  @Column('int')
  to: number;

  @Column()
  class_id: string;

  @ManyToOne(() => Class, classEntity => classEntity.classSchedule, {
    eager: true,
  })
  @JoinColumn({ name: 'class_id' })
  class: Class;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ClassSchedule;
