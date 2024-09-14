import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAugurBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m16.054 14.848-3.667 2.2a.75.75 0 0 1-.771 0l-3.667-2.2a.75.75 0 0 1-.286-.978l.734-1.47a.75.75 0 1 1 1.342.67l-.424.849L12 15.529l2.686-1.61-.423-.85a.75.75 0 1 1 1.343-.67l.733 1.47a.75.75 0 0 1-.286.979m-6.574-4.5 1.88-3.13a.752.752 0 0 1 1.287.001l1.873 3.13a.749.749 0 0 1-.643 1.136.75.75 0 0 1-.644-.366l-1.23-2.056-1.237 2.058a.75.75 0 0 1-1.03.257.75.75 0 0 1-.256-1.03M12 2.505c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAugurBold;
