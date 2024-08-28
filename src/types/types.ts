export type UrlData = {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    address: string;
    short_url: string;
    user_id: number;
    clicks: number;
  };
  
  export type ApiResponse = {
    message: string;
    status: boolean;
    url: UrlData;
  };  