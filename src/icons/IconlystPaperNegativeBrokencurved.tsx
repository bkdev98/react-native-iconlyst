import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperNegativeBrokencurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.245 21.25c6.3 0 8.4-2.31 8.4-9.25 0-1.42-.09-2.65-.28-3.7l-5.67-5.4a18 18 0 0 0-2.45-.15c-6.29 0-8.39 2.32-8.39 9.25 0 5.205 1.181 7.806 4.425 8.781"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.14 5.494a3.363 3.363 0 0 0 3.363 3.363h2.951M14.517 12.98h-4.9"
    />
  </Svg>
);
export default IconlystPaperNegativeBrokencurved;
