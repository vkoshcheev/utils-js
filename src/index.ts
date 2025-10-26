import { sleep } from './utils/sleep';
import { addStringToFilenameBeforeExtension } from './utils/strings/addStringToFilenameBeforeExtension';
import { formatFileSizeText } from './utils/strings/formatFileSizeText';
import { formatUnixTimeToDateMoscowTime } from './utils/strings/formatUnixTimeToDateMoscowTime';
import { getFileExtension } from './utils/strings/getFileExtension';
import { isEmailValid } from './utils/strings/isEmailValid';
import { isPhoneNumberValid } from './utils/strings/isPhoneNumberValid';
import { nbsp } from './utils/strings/nbsp';
import { newLine } from './utils/strings/newLine';
import { replaceSpacesWithNbsp } from './utils/strings/replaceSpacesWithNbsp';
import { shortenFileName } from './utils/strings/shortenFileName';

export {
  // strings
  newLine,
  nbsp,
  addStringToFilenameBeforeExtension,
  getFileExtension,
  shortenFileName,
  formatUnixTimeToDateMoscowTime,
  formatFileSizeText,
  isEmailValid,
  isPhoneNumberValid,
  replaceSpacesWithNbsp,

  // utils functions
  sleep,
};

