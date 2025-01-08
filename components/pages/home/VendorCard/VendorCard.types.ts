export interface IVendorCardProps extends IVendor {
    count: number;
    onPress: () => void;
}

export interface IVendor {
    name: string | null | undefined;
    location:
        | {
              type: 'Point' | null | undefined;
              coordinates: number[] | null | undefined;
          }
        | null
        | undefined;
    vendor_brand: string | null | undefined;
    rating: number | null | undefined;
    id: string | null | undefined;
    brand_logo: string | null | undefined;
    brand_image: string | null | undefined;
    address: string | null | undefined;
    vendor_products:
        | {
              id: string | null | undefined;
              products: IVendorProduct[] | null | undefined;
          }[]
        | null
        | undefined;
}

export interface IVendorProduct {
    sale_price: number | null | undefined;
    product_variation:
        | {
              product_id: string | null | undefined;
              product:
                  | {
                        name: string | null | undefined;
                    }
                  | null
                  | undefined;
          }
        | null
        | undefined;
}

export interface IVendorCard {}
