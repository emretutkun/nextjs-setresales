
export interface RootResponse<T> {
    data: T;
    success: boolean;
    resultType: number;
    message: string;
}
