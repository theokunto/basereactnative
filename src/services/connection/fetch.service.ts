import {ToastAndroid} from 'react-native';
import {BasicFetch} from '../../interfaces/fetch.interface.ts';

async function fetchService<T>(url: string, option: BasicFetch): Promise<T> {
  const handleError = (error: unknown): void => {
    ToastAndroid.show(
      `Error fetching data: ${String(error)}`,
      ToastAndroid.SHORT,
    );
  };
  try {
    let response = await fetch(url, option);
     return await response.json();
  } catch (error) {
      handleError(error);
      throw error;
  }
}

export default fetchService;
