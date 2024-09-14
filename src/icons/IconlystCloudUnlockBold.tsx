import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudUnlockBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.515 8.228a.21.21 0 0 1-.183-.18c-.295-2.107-2.01-4.74-5.331-4.74-3.57 0-5.04 2.91-5.324 4.743a.21.21 0 0 1-.183.177c-2.36.289-3.957 2.098-3.957 4.583a4.64 4.64 0 0 0 2.739 4.222c.494.2.948.295 1.303.34a.193.193 0 0 0 .216-.195v-.336c0-1.085.443-2.065 1.153-2.781a.2.2 0 0 0 .06-.127c.225-2.16 1.97-3.8 4.153-3.827a4.3 4.3 0 0 1 2.802 1.01c.678.576.962 1.435.845 2.256a.22.22 0 0 0 .091.21 3.94 3.94 0 0 1 1.734 3.259v.264c0 .123.11.218.231.192a5.4 5.4 0 0 0 .884-.268 4.64 4.64 0 0 0 2.716-4.22c0-2.482-1.594-4.29-3.95-4.582"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.383 18.486a.704.704 0 0 1-.704.704h-2.93a.705.705 0 0 1-.704-.704v-1.644c0-.388.316-.704.704-.704h2.93c.389 0 .704.316.704.704zm-.704-3.848h-2.464v-.3a.993.993 0 0 1 .985-.98.91.91 0 0 1 .659.234.75.75 0 0 0 1.056-.085.75.75 0 0 0-.086-1.057c-.458-.39-1.026-.576-1.647-.593a2.49 2.49 0 0 0-2.467 2.47v.58a2.2 2.2 0 0 0-1.17 1.935v1.644c0 1.215.988 2.204 2.204 2.204h2.93a2.206 2.206 0 0 0 2.204-2.204v-1.644a2.206 2.206 0 0 0-2.204-2.204"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudUnlockBold;
