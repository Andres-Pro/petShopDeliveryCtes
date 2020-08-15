import fromState from 'core/store/selectors';
import {call, select} from 'redux-saga/effects';
import Swal from 'sweetalert2'
import map from 'lodash/map';


export function* submitInfoRequested() {
    try {
        const data = yield select(fromState.Home.getInformation);
        const form = yield new FormData();
        map(data, (value, key) => {
            form.append(key, value);
        })
        yield call(
            fetch,
            `una url`,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: form,
            },
        );
        return Swal.fire({
            icon: 'success',
            text: `${map(data, (value, key) =>`${key}: ${value} ` )}`,
            title: 'Datos Guardados',
            confirmButtonText: 'Aceptar'
        })
    } catch (error) {
        Swal.fire({
            icon: 'success',
            title: 'Error Inesperado Intente Nuevamente en unos Minutos',
            confirmButtonText: 'Aceptar'
        })
    }
}