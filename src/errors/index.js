// 기본 HTTP 오류 클래스입니다.
// 다른 HTTP 오류 클래스가 이를 상속합니다.
class HttpError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

// 클라이언트의 요청이 유효하지 않거나 잘못된 데이터가 포함되어 있음을 나타냅니다.
class BadRequest extends HttpError {
  constructor(data) {
    super("BAD_REQUEST", 400);
    this.data = data;
  }
}

// 요청에 대한 인증이 필요하며, 인증이 실패했거나 제공되지 않았음을 나타냅니다.
class Unauthorized extends HttpError {
  constructor(data) {
    super("UNAUTHORIZED", 401);
    this.data = data;
  }
}

// 요청이 서버에서 거부되었으며, 권한이 없거나 접근이 허용되지 않음을 나타냅니다.
class Forbidden extends HttpError {
  constructor(data) {
    super("FORBIDDEN", 403);
    this.data = data;
  }
}

// 요청한 리소스가 서버에서 찾을 수 없음을 나타냅니다.
class NotFound extends HttpError {
  constructor(data) {
    super("NOT_FOUND", 404);
    this.data = data;
  }
}

module.exports = {
  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
};