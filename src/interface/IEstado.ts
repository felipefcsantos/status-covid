export default interface IEstado {
    uid: Number,
    uf: string,
    state: string,
    cases: Number,
    deaths: Number,
    suspects: Number,
    refuses: Number,
    datetime: string
}