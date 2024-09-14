import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimeCircleBoldsharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m15.942 15.97-4.78-2.852V7.096h1.5v5.171l4.049 2.415zM12.25 2.25C6.874 2.25 2.5 6.624 2.5 12s4.374 9.75 9.75 9.75S22 17.376 22 12s-4.374-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTimeCircleBoldsharp;
