// aqui fiz a interface com os types isolada, por ter bastante parametro
export default interface IPais{
    country: string,
    cases: Number,
    confirmed: Number,
    deaths: Number,
    recovered: Number,
    updated_at: string
}