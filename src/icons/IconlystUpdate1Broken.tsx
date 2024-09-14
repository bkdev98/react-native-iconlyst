import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpdate1Broken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3 17.574 2.963.685.681-2.947M21 6.923l-2.963-.685-.681 2.947"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.968 18.01a8.34 8.34 0 0 1-1.843-8.639M6.048 6.341a8.33 8.33 0 0 1 7.396-2.335M18.032 6.488a8.34 8.34 0 0 1 1.978 8.235M17.953 18.156a8.33 8.33 0 0 1-7.396 2.335"
    />
  </Svg>
);
export default IconlystUpdate1Broken;
