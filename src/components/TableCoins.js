import React from "react";
import CoinRow from "./CoinRow";

const titles = ['#', 'MONEDAS', 'PRECIOS', 'CAMBIO DE PRECIO', '24h VOLUMEN']

const TableCoins = ({coins, search}) => {

    const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) | 
    coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
        <table className="table table-dark mt-4 table-hover">
            <thead>
                <tr>
                    {titles.map(title => (
                            <td>{title}</td>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {filteredCoins.map((coin, index) => (
                    <CoinRow coin={coin} key={index} index={index + 1}/>
                ))}
            </tbody>
        </table>
    )
}

export default TableCoins;
