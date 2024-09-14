import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesSearchBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.928 11.439h-4.69c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h4.69c.42 0 .75.34.75.75 0 .42-.33.75-.75.75m-2.67 3.53h-2.02c-.42 0-.75-.34-.75-.75 0-.42.33-.75.75-.75h2.02c.42 0 .75.33.75.75 0 .41-.33.75-.75.75m7.86-2.53c.96 0 1.864.236 2.65.661.133.072.3-.015.305-.166a9.4 9.4 0 0 0-2.015-6.085c-1.7-2.15-4.22-3.48-6.93-3.63-2.7-.16-5.36.85-7.27 2.77-2.81 2.81-3.57 7.14-1.91 10.73.11.27.44.9.99 1.85.09.16.08.35-.03.51-.22.31-.5.71-.72 1.04-.28.43-.31.97-.07 1.42.24.44.7.72 1.21.72h7.25c.705 0 1.395-.082 2.07-.232.15-.033.203-.215.106-.332a5.6 5.6 0 0 1-1.296-3.586c0-3.13 2.54-5.67 5.66-5.67"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.928 11.439h-4.69c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h4.69c.42 0 .75.34.75.75 0 .42-.33.75-.75.75m-2.67 3.53h-2.02c-.42 0-.75-.34-.75-.75 0-.42.33-.75.75-.75h2.02c.42 0 .75.33.75.75 0 .41-.33.75-.75.75M18.098 20.389c-1.23 0-2.24-1.01-2.24-2.25s1.01-2.25 2.24-2.25 2.24 1.01 2.24 2.25-1.01 2.25-2.24 2.25m4.2 1.05-1.14-1.15a3.75 3.75 0 0 0-3.06-5.9 3.75 3.75 0 0 0 0 7.5c.72 0 1.39-.21 1.97-.57l1.17 1.18c.15.15.34.22.53.22.2 0 .39-.07.53-.22.3-.29.3-.76 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesSearchBulk;
