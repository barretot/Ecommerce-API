import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';

import bcrypt from 'bcryptjs';
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ select: true })
  password: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  async createPasswordHash() {
    const hash = await bcrypt.hash(this.password, 8);
    this.password = hash;
  }

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
