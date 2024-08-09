import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
} from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { CreateFileDto } from './dto/create-file.dto';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileStorage } from './storage';
import { UserId } from 'src/decorators/user-id.decorator';

@Controller("files")
@ApiTags("files")
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get()
  findAll() {
    return this.filesService.findAll();
  }

  @Post("upload")
  @UseInterceptors(FileInterceptor("file", { storage: fileStorage }))
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  create(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 })],
      })
    )
    file: Express.Multer.File,
    @UserId() userId: number
  ) {
    return this.filesService.create(file, userId);
  }
}
