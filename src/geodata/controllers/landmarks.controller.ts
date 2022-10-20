import { Controller, Get, Query } from '@nestjs/common';
import { ApiExtraModels, ApiQuery, ApiTags } from '@nestjs/swagger';
import { LandmarksService } from '../services/landmarks.service';
import { Landmark } from '../types/landmarks/landmark.type';
import { LandmarksResponse, LandmarksSummaryResponse } from '../responses';

@Controller('landmarks')
@ApiTags('Landmarks')
@ApiExtraModels(Landmark)
export class LandmarksController {
  constructor(private landmarksService: LandmarksService) {}

  @Get('summary')
  @ApiQuery({ type: String, name: 'zipCode' })
  getLandmarksSummary(
    @Query('zipCode') zipCode: string,
  ): LandmarksSummaryResponse {
    const parks = this.landmarksService.getParks(zipCode);
    const libraries = this.landmarksService.getLibraries(zipCode);
    const communityCenters = this.landmarksService.getCommunityCenters(zipCode);
    const ccf = this.landmarksService.getChildCareF(zipCode);
    const ccc = this.landmarksService.getChildCareC(zipCode);
    const ca = this.landmarksService.getCA(zipCode);
    const cbr = this.landmarksService.getCBR(zipCode);
    const cd = this.landmarksService.getCD(zipCode);
    const ct = this.landmarksService.getCT(zipCode);
    const co = this.landmarksService.getCO(zipCode);
    const cw = this.landmarksService.getCW(zipCode);

    return new LandmarksSummaryResponse(
      parks,
      communityCenters,
      libraries,
      ccf,
      ccc,
      ca,
      cbr,
      cd,
      ct,
      co,
      cw,
    );
  }

  @Get('parks')
  @ApiQuery({ type: String, required: false, name: 'zipCode' })
  getParks(@Query('zipCode') zipCode?: string): LandmarksResponse {
    const parks = this.landmarksService.getParks(zipCode);

    return new LandmarksResponse(parks);
  }

  @Get('libraries')
  @ApiQuery({ type: String, required: false, name: 'zipCode' })
  getLibraries(@Query('zipCode') zipCode?: string): LandmarksResponse {
    const libraries = this.landmarksService.getLibraries(zipCode);

    return new LandmarksResponse(libraries);
  }

  @Get('community')
  @ApiQuery({ type: String, required: false, name: 'zipCode' })
  getCommunityCenters(@Query('zipCode') zipCode?: string): LandmarksResponse {
    const centers = this.landmarksService.getCommunityCenters(zipCode);

    return new LandmarksResponse(centers);
  }

  @Get('cc_family')
  @ApiQuery({ type: String, required: false, name: 'zipCode' })
  getChildCareF(@Query('zipCode') zipCode?: string): LandmarksResponse {
    const ccf = this.landmarksService.getChildCareF(zipCode);

    return new LandmarksResponse(ccf);
  }

  @Get('cc_center')
  @ApiQuery({ type: String, required: false, name: 'zipCode' })
  getChildCareC(@Query('zipCode') zipCode?: string): LandmarksResponse {
    const ccc = this.landmarksService.getChildCareC(zipCode);

    return new LandmarksResponse(ccc);
  }

  @Get('cr_assault')
  @ApiQuery({ type: String, required: false, name: 'zipCode' })
  getCA(@Query('zipCode') zipCode?: string): LandmarksResponse {
    const ca = this.landmarksService.getCA(zipCode);

    return new LandmarksResponse(ca);
  }

  @Get('cr_burgrob')
  @ApiQuery({ type: String, required: false, name: 'zipCode' })
  getCBR(@Query('zipCode') zipCode?: string): LandmarksResponse {
    const cbr = this.landmarksService.getCBR(zipCode);

    return new LandmarksResponse(cbr);
  }

  @Get('cr_drug')
  @ApiQuery({ type: String, required: false, name: 'zipCode' })
  getCD(@Query('zipCode') zipCode?: string): LandmarksResponse {
    const cd = this.landmarksService.getCD(zipCode);

    return new LandmarksResponse(cd);
  }

  @Get('cr_theft')
  @ApiQuery({ type: String, required: false, name: 'zipCode' })
  getCT(@Query('zipCode') zipCode?: string): LandmarksResponse {
    const ct = this.landmarksService.getCT(zipCode);

    return new LandmarksResponse(ct);
  }

  @Get('cr_trafficother')
  @ApiQuery({ type: String, required: false, name: 'zipCode' })
  getCO(@Query('zipCode') zipCode?: string): LandmarksResponse {
    const co = this.landmarksService.getCO(zipCode);

    return new LandmarksResponse(co);
  }

  @Get('cr_weapon')
  @ApiQuery({ type: String, required: false, name: 'zipCode' })
  getCW(@Query('zipCode') zipCode?: string): LandmarksResponse {
    const cw = this.landmarksService.getCW(zipCode);

    return new LandmarksResponse(cw);
  }
}
