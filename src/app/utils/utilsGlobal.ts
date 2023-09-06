export type InputData = {
  date: string;
  sleepTime: number;
  name: string;
};

export type OutputData = {
  date: string;
  sleepTimeEverson: string;
  sleepTimeGabriel: string;
  sleepTimeHenrique: string;
  sleepTimeDavy: string;
  sleepTimeRobson: string;
  sleepTimeKaiki: string;
  sleepTimeLuiz: string;
  sleepTimeGuilherme: string;
};

export function transformData(data: InputData[]): OutputData[] {
  const groupedData: { [key: string]: any } = {};

  data.forEach((item) => {
    const key = `${item.date}`;

    if (!groupedData[key]) {
      groupedData[key] = {
        date: item.date,
      };
    }

    const sleepTimeString = item.sleepTime.toFixed(2).toString();

    switch (item.name) {
      case "Everson":
        groupedData[key].sleepTimeEverson = sleepTimeString;
        break;
      case "Gabriel":
        groupedData[key].sleepTimeGabriel = sleepTimeString;
        break;
      case "Henrique":
        groupedData[key].sleepTimeHenrique = sleepTimeString;
        break;
      case "Davy":
        groupedData[key].sleepTimeDavy = sleepTimeString;
        break;
      case "Robson":
        groupedData[key].sleepTimeRobson = sleepTimeString;
        break;
      case "Kaiki":
        groupedData[key].sleepTimeKaiki = sleepTimeString;
        break;
      case "Luiz":
        groupedData[key].sleepTimeLuiz = sleepTimeString;
        break;
      case "Guilherme":
        groupedData[key].sleepTimeGuilherme = sleepTimeString;
        break;
    }
  });

  return Object.values(groupedData) as OutputData[];
}

export function timeToDecimal(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  const decimal = hours + minutes / 60;
  return parseFloat(decimal.toFixed(2));
}
