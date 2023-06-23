import { Column } from 'typeorm';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'messages' })
export class Message {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'conversation_id', nullable: true })
  conversation_id: number;

  @Column({ default: true })
  status: boolean;

  @Column({ name: 'message', length: 255 })
  message: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: true })
  updatedAt: Date;
}
