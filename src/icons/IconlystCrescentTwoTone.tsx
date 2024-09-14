import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCrescentTwoTone = ({
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
      d="M12.121 3.011v.032M5.777 5.65l.02.02m12.65 0 .045-.046m-6.37 15.366v-.032M5.776 18.35l.02-.02m-2.633-6.325h-.05m18 0h-.042m-2.626 6.325.046.046"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.1 13.407c.027-.014.058.01.05.039a5.25 5.25 0 0 1-5.041 3.804 5.245 5.245 0 0 1-1.446-10.286c.028-.008.052.023.038.05a4.74 4.74 0 0 0 .839 5.56 4.73 4.73 0 0 0 5.56.833"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCrescentTwoTone;
