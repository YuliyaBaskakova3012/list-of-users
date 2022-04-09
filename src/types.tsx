export type AddressType={
    street: string,
    suite: string,
    city: string,
    zipcode: string
}

export type GeoType={
    lat: string,
    lng: string
}
export type CompanyType={
    name: string,
    catchPhrase: string,
    bs: string
}
export type UsersType={
    id: number,
    name: string,
    username: string,
    email: string,
    address: AddressType,
    geo: GeoType,
    phone: string,
    website: string,
    company: CompanyType
}

