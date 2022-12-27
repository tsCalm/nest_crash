## memo

- controller의 dto를 그대로 service에 넘기는 경우가 많은데 service의 파라메터의 타입을 재정의 하는 이유는 validate를 통해 오브젝트의 형태가 변경되거나 타입이 변경 될 수 있기 때문이다.
- 개별적으로 validation을 하고 싶다면 @UsePipes(new ValidationPipe())을 사용한다.
- param | query 데이터 변경을 원할 경우 내장 Parse\_\_Pipe를 사용한다. 없는 경우 custom으로 만들 수 있다.
- 접근 권한을 부여할 경우 @UseGuards(권한)을 사용하여 설정한다.
- post 요청의 body는 class-validator, class-transformer를 사용하여 제작한다.
- post 요청의 body값의 변형을 원할 경우 customPipeline을 사용하여 @Body()의 파라메터로 전달하여 사용 가능하다.

## middleware

- NestModule을 미들웨어를 적용하고 싶은 모듈로 구현한다.
- configure 메서드의 파라메터로 전달되는 consumer의 .apply()에 적용하고 싶은 미들웨어를 순서대로 호출한다.
- .forRoutes()의 파라메터로 컨트롤러 자체를 호출하거나 개별적인 path와 method를 각각 적용할 수 있다.
