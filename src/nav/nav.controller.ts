import { Controller, Get, UseGuards } from '@nestjs/common';
import { NavService } from './nav.service';
import { AuthGuard } from 'src/users/auth/auth.guard';

@Controller('api/graph')
@UseGuards(AuthGuard)
export class NavController {
  constructor(private readonly navService: NavService) { }

  @Get()
  full_graph() {
    return this.navService.full_graph()
  }
}
