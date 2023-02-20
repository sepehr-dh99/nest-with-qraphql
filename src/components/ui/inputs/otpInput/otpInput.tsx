/*
 * this component is inspired by the following tutorial:
 * https://dominicarrojado.com/posts/how-to-create-your-own-otp-input-in-react-and-typescript-with-tests-part-1/
 * so you can find a good documentaion of the component there! 😁🙌
 */

import { useMemo } from 'react';
import styles from './otpInput.module.scss';

export type OtpInputProps = {
  value: string;
  valueLength: number;
  onChange: (value: string) => void;
};

export const RE_DIGIT = new RegExp(/^\d+$/);

export default function OtpInput({ value, valueLength, onChange }: OtpInputProps) {
  const valueItems = useMemo(() => {
    const valueArray = value.split('');
    const items: Array<string> = [];

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];
      RE_DIGIT.test(char) ? items.push(char) : items.push('');
    }

    return items;
  }, [value, valueLength]);

  const focusToNextInput = (target: HTMLElement) => {
    const nextElementSibling = target.nextElementSibling as HTMLInputElement | null;
    if (nextElementSibling) nextElementSibling.focus();
  };

  const focusToPrevInput = (target: HTMLElement) => {
    const previousElementSibling = target.previousElementSibling as HTMLInputElement | null;
    if (previousElementSibling) previousElementSibling.focus();
  };

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const target = e.target;
    let targetValue = target.value.trim();
    const isTargetValueDigit = RE_DIGIT.test(targetValue);

    /* check if input is number or '' 
    empty Quotation or '' is used for deletion */
    if (!isTargetValueDigit && targetValue !== '') return;

    // only delete digit if next input element has no value
    const nextInputEl = target.nextElementSibling as HTMLInputElement | null;
    if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== '') {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : ' ';

    const targetValueLength = targetValue.length;

    // if the input is one charechter
    if (targetValueLength === 1) {
      const newValue = value.substring(0, idx) + targetValue + value.substring(idx + 1);
      onChange(newValue);

      if (!isTargetValueDigit) return;
      focusToNextInput(target);
    } else if (targetValueLength === valueLength) {
      // handle paste
      onChange(targetValue);
      target.blur();
    }
  };

  const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const target = e.target as HTMLInputElement;

    // change focus with arrow keys for better accessibility
    if (key === 'ArrowRight' || key === 'ArrowDown') {
      e.preventDefault();
      return focusToNextInput(target);
    }

    if (key === 'ArrowLeft' || key === 'ArrowUp') {
      e.preventDefault();
      return focusToPrevInput(target);
    }

    const targetValue = target.value;

    // keep the selection range position
    // if the same digit was typed
    target.setSelectionRange(0, targetValue.length);

    if (e.key !== 'Backspace' || target.value !== '') return;

    const previousElementSibling = target.previousElementSibling as HTMLInputElement | null;

    // focus of previos input field
    if (previousElementSibling) previousElementSibling.focus();
  };

  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e;

    // keep focusing back until previous input element has value
    const prevInputEl = target.previousElementSibling as HTMLInputElement | null;
    if (prevInputEl && prevInputEl.value === '') return prevInputEl.focus();

    target.setSelectionRange(0, target.value.length);
  };

  // TODO: change stylings to mui styled
  return (
    <div className={styles['otp-group']}>
      {valueItems.map((digit, idx) => (
        <input
          key={idx}
          type='text'
          inputMode='numeric'
          autoComplete='one-time-code'
          pattern='\d{1}'
          maxLength={valueLength}
          className={`${styles['otp-input']} IRANYekanX`}
          value={digit}
          onChange={(e) => inputOnChange(e, idx)}
          onKeyDown={inputOnKeyDown}
          onFocus={inputOnFocus}
        />
      ))}
    </div>
  );
}
