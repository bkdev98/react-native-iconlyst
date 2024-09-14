import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRulerLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.94 20.597 9.342-9.343a3.083 3.083 0 0 0 0-4.36l-2.49-2.491a3.086 3.086 0 0 0-4.362 0L4.09 13.745a3.083 3.083 0 0 0 0 4.36l2.49 2.492a3.084 3.084 0 0 0 4.362 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m12.87 4.963 3.083 3.083M4.648 13.186l2.399 2.398M7.42 10.412l3.051 3.115M10.129 7.703l1.712 1.713"
    />
  </Svg>
);
export default IconlystRulerLight;
