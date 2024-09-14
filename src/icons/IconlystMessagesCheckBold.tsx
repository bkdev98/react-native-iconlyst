import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesCheckBold = ({
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
      d="m15.685 10.56-3.686 3.699a.75.75 0 0 1-1.063 0l-1.843-1.85a.75.75 0 1 1 1.062-1.06l1.313 1.318L14.623 9.5a.75.75 0 0 1 1.062 1.059m5.231.223c-.399-4.057-3.596-7.33-7.601-7.781-2.382-.265-4.684.426-6.476 1.954-1.903 1.62-3.063 4.043-3.185 6.645-.242 5.198 3.962 9.149 8.239 10.367a.98.98 0 0 0 .87-.164c.255-.193.408-.5.408-.82v-1.486s.004-.006.018-.008c4.995-.601 8.173-4.182 7.727-8.707"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesCheckBold;
