

function Filter({ filter, setFilter, setSort }) {
    return (
        <div className="filter">
            <h2>Filtrar</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={e => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incompleted">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordenar por horário:</p>
                    <button onClick={() => setSort('Cresc')}>Cresc</button>
                    <button onClick={() => setSort('Dec')}>Dec</button>
                </div>
            </div>
        </div>
    )
}

export default Filter