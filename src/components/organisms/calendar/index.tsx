import React, { Fragment, useMemo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
    Calendar,
    Views,
    DateLocalizer,
    momentLocalizer,
} from 'react-big-calendar';

// em mobile é só dia e no desktop e dia e mes
// trabalhar com hora internacional, guardar no banco, mas na hora de mostrar pro usuário padrçao local 
// horarios de funcionamento
//calcular a quantdades de eventos na minha propria lista de eventos, por dia. em n dia tal esse vaga tem n serviços em andamento e atrasados
// calcular e dublicar e colocar para o dia seguinte. em caso de horario nao soficiente. teria que procurar o proximo dia disponivel
//n]ao remover eventos strasados
// trabalhar com liberação de vaga
// calcular as horas com base nos eventos no banco
// considerar os dias que o estabelecimento não abre
// defeinir hora mínima de serviço
// reagendar
// nome do evento: placa e nome
// cada vaga possui um calendario/ agenda

const events = [
    {
        title: "gflgflkgf",
        start: new Date(2024,5,1, 5,0,0).toISOString(),
        end: new Date(2024,5,1,8,0,0).toISOString(),
    }
];

const mLocalizer = momentLocalizer(moment);

export default function BasicCalendar({
    localizer = mLocalizer,
}) {
    const { defaultDate, max, min, views } = useMemo(
        () => schedProps(), []
    )

    function schedProps() {
        return ({
            defaultDate: new Date().toISOString(),
            //   max: dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours'),
            max: new Date(2100, 0, 1, 23, 59, 59).toISOString(),
            min: new Date(1972, 0, 1, 0, 0, 0, 0).toISOString(),
            views: ['week', 'day'],
        })  
    }

    return (
        <>
            <div className="height600" >
                <Calendar
                    defaultDate={defaultDate}
                    events={events}
                    resizable
                    localizer={localizer}
                    min={new Date(1900,1,1)}
                    showMultiDayTimes
                    views={['week', 'day']}
                />
            </div>
        </>
    )
};

BasicCalendar.propTypes = {
  localizer: PropTypes.instanceOf(DateLocalizer),
}