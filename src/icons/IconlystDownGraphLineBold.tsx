import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownGraphLineBold = ({
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
      d="M21.5 20H6.441c-1.07 0-1.941-.87-1.941-1.939V3a1 1 0 1 0-2 0v15.061A3.946 3.946 0 0 0 6.441 22H21.5a1 1 0 1 0 0-2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.108 12.013a1 1 0 0 0 .668.38c.26.032.53-.041.74-.206l3.595-2.826 3.231 4.199a1 1 0 0 0 1.404.183 1 1 0 0 0 .182-1.402l-3.847-5a1.004 1.004 0 0 0-1.411-.177l-3.598 2.828-3.15-4.064a1 1 0 0 0-1.58 1.225z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownGraphLineBold;
