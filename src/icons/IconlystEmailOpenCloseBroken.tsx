import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpenCloseBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.915 6.178-2.393-1.66a2.4 2.4 0 0 0-2.767 0L4.188 8.391c-.35.244-.634.57-.838.936A2.7 2.7 0 0 0 3 10.67v5.282c0 2.499 1.669 3.98 4.143 3.97h1.01M19.277 14.422v1.53c0 2.499-1.669 3.98-4.142 3.971h-3.996"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 10.405a4.312 4.312 0 1 1-1.072-2.845M17.717 11.435 15.66 9.377m0 2.058 2.057-2.058"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.354 9.328 5.916 4.769c1.115.88 2.686.88 3.793 0l.684-.553"
    />
  </Svg>
);
export default IconlystEmailOpenCloseBroken;
