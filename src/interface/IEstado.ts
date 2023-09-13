// aqui fiz a interface com os types isolada, por ter bastante parametro

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