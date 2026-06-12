import { Controller, Get, UseGuards } from '@nestjs/common';
import { NavService } from './nav.service';

@Controller('api/graph')
export class NavController {
  constructor(private readonly navService: NavService) { }

  @Get()
  full_graph() {
    return this.navService.full_graph()
  }
}
