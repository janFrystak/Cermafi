export interface FieldModel {
    id: number,
    code: string,
    name: string, 
    count: number | null
}

export interface SchoolModel {
    id: number,
    place: string | null,
    redizo: string,
    ownerType: string | null,
    krajId: string | null, 
    okres: string | null,
    full_name: string,
    short_name: string,
    count: number | null
}