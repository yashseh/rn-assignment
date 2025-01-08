import { IVendor } from '@/components/pages/home/VendorCard/VendorCard.types';

export const vendors: IVendor[] = [
    {
        name: 'Vendor 1',
        location: {
            type: 'Point',
            coordinates: [77.004601, 28.457148]
        },
        vendor_brand: 'Guess',
        rating: 6,
        id: '89a5acbe-7c67-42ad-9af4-362128b38e09',
        brand_logo:
            'https://cloudinary-marketing-res.cloudinary.com/image/upload/c_scale,w_96,h_96,dpr_1.25/c_scale,w_auto,dpr_auto/f_auto,q_auto/v1724772832/website_2021/Marquee-Logos-16.png',
        brand_image:
            'https://cloudinary-marketing-res.cloudinary.com/image/upload/c_fill,g_auto,w_334,h_225,dpr_1.25/c_scale,w_auto,dpr_auto/f_auto,q_auto/v1724777696/par-Guess-Horz_2x.jpg',
        address: '51 ABC Road, India',
        vendor_products: [
            {
                id: '8fd39567-1c00-4810-9041-09cb0c97c599',
                products: [
                    {
                        sale_price: 895.25,
                        product_variation: {
                            product_id: 'bf02454d-a127-49c4-b5a8-759640d0496f',
                            product: {
                                name: 'Product 001'
                            }
                        }
                    },
                    {
                        sale_price: 988.1,
                        product_variation: {
                            product_id: '4b6a1246-76a1-4b97-9374-0bf5c2318235',
                            product: {
                                name: 'Product 002'
                            }
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'Vendor 2',
        location: {
            type: 'Point',
            coordinates: [77.025318, 28.480459]
        },
        vendor_brand: 'Puma',
        rating: 10,
        id: '0a53259f-ff5c-44a8-9693-10664b7901ab',
        brand_logo:
            'https://cloudinary-marketing-res.cloudinary.com/image/upload/c_scale,w_96,h_96,dpr_1.25/c_scale,w_auto,dpr_auto/f_auto,q_auto/v1724772778/website_2021/Marquee-Logos-28.png',
        brand_image:
            'https://cloudinary-marketing-res.cloudinary.com/image/upload/c_fill,g_auto,w_301,h_195,dpr_1.25/c_scale,w_auto,dpr_auto/f_auto,q_auto/v1724185950/shutterstock_742155007.jpg',
        address: '201 XYZ Road, India',
        vendor_products: [
            {
                id: '2146f8e5-b2d1-4c66-916c-e4cf096fbd1f',
                products: [
                    {
                        sale_price: 670.0,
                        product_variation: {
                            product_id: 'bf02454d-a127-49c4-b5a8-759640d0496f',
                            product: {
                                name: 'Product 001'
                            }
                        }
                    },
                    {
                        sale_price: 1099.99,
                        product_variation: {
                            product_id: '4b6a1246-76a1-4b97-9374-0bf5c2318235',
                            product: {
                                name: 'Product 002'
                            }
                        }
                    },
                    {
                        sale_price: 777.99,
                        product_variation: {
                            product_id: '4b6a1246-76a1-4b97-9374-0bf5c2312354',
                            product: {
                                name: 'Product 003'
                            }
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'Vendor 3',
        location: {
            type: 'Point',
            coordinates: [77.004384, 28.468932]
        },
        vendor_brand: 'Neiman Marcus',
        rating: 9,
        id: '7f9cf1ef-413d-40fb-8fe8-7dbe59814f90',
        brand_logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTEa_H_7YW7E2cxsG5z1Wn5kIiUHwKortv8g&s',
        brand_image:
            'https://cloudinary-marketing-res.cloudinary.com/image/upload/c_fill,g_auto,w_301,h_195,dpr_1.25/c_scale,w_auto,dpr_auto/f_auto,q_auto/v1724180918/neiman-marcus-diff_2x.jpg',
        address: '364 LMN Road, India',
        vendor_products: [
            {
                id: '5f44e3da-ac23-40c5-86fb-7bfdf9c1ae22',
                products: [
                    {
                        sale_price: 588.1,
                        product_variation: {
                            product_id: '4b6a1246-76a1-4b97-9374-0bf5c2318235',
                            product: {
                                name: 'Product 002'
                            }
                        }
                    },
                    {
                        sale_price: 915.25,
                        product_variation: {
                            product_id: 'bf02454d-a127-49c4-b5a8-759640d0496f',
                            product: {
                                name: 'Product 001'
                            }
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'Vendor 4',
        location: {
            type: 'Point',
            coordinates: [77.013431, 28.44089]
        },
        vendor_brand: 'Paul Smith',
        rating: 6,
        id: '9130e240-4171-4061-92d2-d849c5ff6d4a',
        brand_logo:
            'https://cloudinary-marketing-res.cloudinary.com/image/upload/c_scale,w_96,h_96,dpr_1.25/c_scale,w_auto,dpr_auto/f_auto,q_auto/v1724772791/website_2021/Marquee-Logos-26.png',
        brand_image:
            'https://cloudinary-marketing-res.cloudinary.com/image/upload/c_fill,g_auto,w_301,h_195,dpr_1.25/c_scale,w_auto,dpr_auto/f_auto,q_auto/v1724185893/shutterstock_443212471.jpg',
        address: '159 UVW Road, India',
        vendor_products: [
            {
                id: '507843b6-36f4-4fe9-a2ed-84f2d3ee5bf3',
                products: [
                    {
                        sale_price: 999.1,
                        product_variation: {
                            product_id: '4b6a1246-76a1-4b97-9374-0bf5c2318235',
                            product: {
                                name: 'Product 002'
                            }
                        }
                    },
                    {
                        sale_price: 295.25,
                        product_variation: {
                            product_id: 'bf02454d-a127-49c4-b5a8-759640d0496f',
                            product: {
                                name: 'Product 001'
                            }
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'Vendor 5',
        location: {
            type: 'Point',
            coordinates: [77.01524652219007, 28.47985294053705]
        },
        vendor_brand: 'Rapha',
        rating: 7,
        id: 'ed8d8034-3d70-4cab-bea3-d7f40f2f0661',
        brand_logo:
            'https://cloudinary-marketing-res.cloudinary.com/image/upload/c_scale,w_96,h_96,dpr_1.25/c_scale,w_auto,dpr_auto/f_auto,q_auto/v1724772756/website_2021/Marquee-Logos-29.png',
        brand_image:
            'https://cloudinary-marketing-res.cloudinary.com/image/upload/c_fill,g_auto,w_301,h_195,dpr_1.25/c_scale,w_auto,dpr_auto/f_auto,q_auto/v1730741841/shutterstock_1875042193_after.jpg',
        address: '89 GHF Road, India',
        vendor_products: [
            {
                id: '8f4ffbf0-fef4-4a7d-bb76-84f06ab4a07c',
                products: [
                    {
                        sale_price: 597.18,
                        product_variation: {
                            product_id: 'bf02454d-a127-49c4-b5a8-759640d0496f',
                            product: {
                                name: 'Product 001'
                            }
                        }
                    },
                    {
                        sale_price: 490.05,
                        product_variation: {
                            product_id: '4b6a1246-76a1-4b97-9374-0bf5c2318235',
                            product: {
                                name: 'Product 002'
                            }
                        }
                    },
                    {
                        sale_price: 190.05,
                        product_variation: {
                            product_id: '4b6a1246-76a1-4b97-9374-0b318235f5c2',
                            product: {
                                name: 'Product 004'
                            }
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'Vendor 6',
        location: {
            type: 'Point',
            coordinates: [78.025318, 28.480459]
        },
        vendor_brand: 'Puma',
        rating: 9,
        id: '0a53259f-ff5c-44a8-9693-1b7901ab0664',
        brand_logo:
            'https://cloudinary-marketing-res.cloudinary.com/image/upload/c_scale,w_96,h_96,dpr_1.25/c_scale,w_auto,dpr_auto/f_auto,q_auto/v1724772778/website_2021/Marquee-Logos-28.png',
        brand_image:
            'https://cloudinary-marketing-res.cloudinary.com/image/upload/c_fill,g_auto,w_301,h_195,dpr_1.25/c_scale,w_auto,dpr_auto/f_auto,q_auto/v1724185950/shutterstock_742155007.jpg',
        address: '777 JKL Road, India',
        vendor_products: [
            {
                id: '2146f8e5-b2d1-4c66-916c-96fbd1fe4cf0',
                products: [
                    {
                        sale_price: 690.99,
                        product_variation: {
                            product_id: 'bf02454d-a127-49c4-b5a8-759640d0496f',
                            product: {
                                name: 'Product 001'
                            }
                        }
                    },
                    {
                        sale_price: 899.99,
                        product_variation: {
                            product_id: '4b6a1246-76a1-4b97-9374-0bf5c2318235',
                            product: {
                                name: 'Product 002'
                            }
                        }
                    },
                    {
                        sale_price: 757.59,
                        product_variation: {
                            product_id: '4b6a1246-76a1-4b97-9374-0bf5c2312354',
                            product: {
                                name: 'Product 003'
                            }
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'Vendor 7',
        location: {
            type: 'Point',
            coordinates: [77.884384, 28.298932]
        },
        vendor_brand: 'Neiman Marcus',
        rating: 8,
        id: '7f9cf1ef-413d-40fb-8fe8-7dbe59814f90',
        brand_logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTEa_H_7YW7E2cxsG5z1Wn5kIiUHwKortv8g&s',
        brand_image:
            'https://cloudinary-marketing-res.cloudinary.com/image/upload/c_fill,g_auto,w_301,h_195,dpr_1.25/c_scale,w_auto,dpr_auto/f_auto,q_auto/v1724180918/neiman-marcus-diff_2x.jpg',
        address: '34 QRS Road, India',
        vendor_products: [
            {
                id: '5f44e3da-ac23-40c5-86fb-c1ae227bfdf9',
                products: [
                    {
                        sale_price: 688.1,
                        product_variation: {
                            product_id: '4b6a1246-76a1-4b97-9374-0bf5c2318235',
                            product: {
                                name: 'Product 002'
                            }
                        }
                    },
                    {
                        sale_price: 975.25,
                        product_variation: {
                            product_id: 'bf02454d-a127-49c4-b5a8-759640d0496f',
                            product: {
                                name: 'Product 001'
                            }
                        }
                    }
                ]
            }
        ]
    }
];
