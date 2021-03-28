import { SetMetadata } from '@nestjs/common';
import { Roles } from 'src/guards/role/role.guard';

export const SetRoles = (...roles: Roles[]) => SetMetadata('roles', roles);
