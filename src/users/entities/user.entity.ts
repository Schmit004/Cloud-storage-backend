import { FileEntity } from 'src/files/entities/file.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  fullName: string;

  @OneToMany(() => FileEntity, (file) => file.user)
  files: FileEntity[];
}
