export interface ApiResponse<T> {
    data: T;
    message: string;
    status: number;
  }
  
  export interface ApiError {
    message: string;
    status: number;
    errors?: Record<string, string[]>;
  }
  
  export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  }
  
  export interface QueryParams {
    page?: number;
    limit?: number;
    sort?: string;
    filter?: Record<string, any>;
  } 