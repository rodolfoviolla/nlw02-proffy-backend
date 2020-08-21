import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';

import Class from './Class';

@Entity('class_schedule')
class ClassSchedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('integer')
  week_day: number;

  @Column('integer')
  from: number;

  @Column('integer')
  to: number;

  @Column()
  class_id: string;

  @ManyToOne(() => Class, classes => classes.class_schedule)
  @JoinColumn({ name: 'class_id' })
  classes: Class;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ClassSchedule;
