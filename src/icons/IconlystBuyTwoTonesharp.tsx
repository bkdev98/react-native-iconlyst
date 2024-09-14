import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuyTwoTonesharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M14.625 10.964h2.672"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M7.909 20.027a.524.524 0 1 1 0 1.048.524.524 0 0 1 0-1.048ZM18.776 20.027a.525.525 0 1 1 0 1.05.525.525 0 0 1 0-1.05Z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M5.875 7.053H21.5l-1.27 9.635H6.745L5.467 3.992H3"
    />
  </Svg>
);
export default IconlystBuyTwoTonesharp;
