import { format } from 'date-fns';
import { es } from 'date-fns/esm/locale';

const dateFormatter = (date: string | Date) => {
    const dateFormat = new Date(date);

    return format(dateFormat, 'dd/MMM/yyyy', { locale: es });
};

export { dateFormatter };
