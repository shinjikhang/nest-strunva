import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  name: string;

  @Column()
  avatar: string;

  @Column()
  user_ref: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  blocked_at: number;

  @Column()
  is_private: number;

  @Column({ default: new Date().getTime() })
  registed_at: number;
}
