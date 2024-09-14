import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRulerTwoTone = ({
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
      d="m11.44 20.597 9.342-9.343a3.083 3.083 0 0 0 0-4.36l-2.49-2.491a3.086 3.086 0 0 0-4.362 0L4.59 13.745a3.083 3.083 0 0 0 0 4.36l2.49 2.492a3.084 3.084 0 0 0 4.362 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m13.37 4.963 3.083 3.083M5.148 13.186l2.399 2.398M7.92 10.412l3.051 3.115M10.629 7.703l1.712 1.713"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRulerTwoTone;
