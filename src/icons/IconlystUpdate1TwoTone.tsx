import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpdate1TwoTone = ({
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
      d="m3.5 17.574 2.963.685.681-2.947M21.5 6.923l-2.963-.685-.681 2.947"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.468 18.01a8.34 8.34 0 0 1 .08-11.669 8.33 8.33 0 0 1 7.396-2.335M18.532 6.488a8.34 8.34 0 0 1-.08 11.669 8.33 8.33 0 0 1-7.395 2.335"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUpdate1TwoTone;
