import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuyBrokensharp = ({
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
      d="M14.624 10.964h2.672"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.908 20.027a.524.524 0 1 1 0 1.048.524.524 0 0 1 0-1.048"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M7.908 20.027a.524.524 0 1 1 0 1.048.524.524 0 0 1 0-1.048Z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.775 20.027a.525.525 0 1 1 0 1.05.525.525 0 0 1 0-1.05"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M18.775 20.027a.525.525 0 1 1 0 1.05.525.525 0 0 1 0-1.05Z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M8.734 7.053H21.5l-1.269 9.635H6.744L5.467 3.993H3"
    />
  </Svg>
);
export default IconlystBuyBrokensharp;
