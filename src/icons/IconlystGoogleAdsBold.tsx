import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleAdsBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m11.137 15.482-2.32 4.01c-.45.79-1.18 1.35-2.06 1.58a3.433 3.433 0 0 1-2.57-.34 3.34 3.34 0 0 1-1.57-2.05c-.24-.88-.12-1.79.33-2.58l4.36-7.55c.11.38.27.76.47 1.11zM21.048 16.104l-6.105-10.58A3.35 3.35 0 0 0 12.89 3.95a3.36 3.36 0 0 0-2.57.34 3.35 3.35 0 0 0-1.58 2.047 3.37 3.37 0 0 0 .337 2.578l6.105 10.58a3.36 3.36 0 0 0 2.058 1.575q.436.115.877.115c.59 0 1.17-.154 1.692-.457a3.34 3.34 0 0 0 1.577-2.05 3.36 3.36 0 0 0-.337-2.574"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleAdsBold;
