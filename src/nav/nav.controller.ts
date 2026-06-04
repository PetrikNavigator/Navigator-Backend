import { Controller, Get, DefaultValuePipe, ParseBoolPipe, Query, UseGuards, Req } from '@nestjs/common';
import { NavService } from './nav.service';
import { ParseBigIntPipe } from 'src/other/pipes/ParseBigIntPipe';
import { AuthGuard } from 'src/users/auth/auth.guard';
import type { AuthenticatedRequest } from 'src/other/types/admin-types';

@Controller('api/navigator')
@UseGuards(AuthGuard)
export class NavController {
  constructor(private readonly navService: NavService) { }

  @Get("graph")
  full_graph() {
    return this.navService.full_graph()
  }
}
