export function getProfile() {
  return "dev";
}

export function formatDateFromString(dateString) {
  
  dateString = dateString.split(' ');
  dateString = dateString[0].split('-');

  const [year, month, day ] = dateString;

  // Array de nomes de meses
  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  // Use o método String.padStart para garantir que os valores tenham 2 dígitos
  const formattedDate = `${day.toString().padStart(2, '0')} ${
    monthNames[month - 1]} ${year}`;

  return formattedDate;
}

export function formatDateFromArray(dateArray) {
  // Verifique se o array tem pelo menos 3 elementos (ano, mês, dia)
  if (dateArray.length < 3) {
    return "Data Inválida";
  }

  const [year, month, day, hour = 0, minute = 0, second = 0] = dateArray;

  // Array de nomes de meses
  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  // Use o método String.padStart para garantir que os valores tenham 2 dígitos
  const formattedDate = `${day.toString().padStart(2, '0')} ${
    monthNames[month - 1]} ${year}`;

  return formattedDate;
}

export function calculateDate(dateArray){

  let month, day;

  const startDate =  new Date();
  const currentMonth = startDate.getMonth();
  const currentDay = startDate.getDate();

  month = dateArray[1] - currentMonth;
  // Se o valor da subtração for negativo, recebe zero, caso não mantêm
  month = month < 0 ? 0 : month;

  day = dateArray[2] - currentDay;
  day = day < 0 ? 0 : day;

  if(month === 12) {
    return [1, "ANO"];
  }else if(month > 0 && month < 12) {
    return month > 1 ? [ month, "MESES"] : [ month, "MÊS"];
  }else if(month === 0) {
    return day != 1 ? [ day, "DIAS"] : [ day, "DIA"];
  }

}
