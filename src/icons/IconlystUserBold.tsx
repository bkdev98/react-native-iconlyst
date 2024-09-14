import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserBold = ({
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
      d="M12.151 12.516c2.608 0 4.73-2.12 4.73-4.725a4.733 4.733 0 0 0-4.73-4.725 4.733 4.733 0 0 0-4.73 4.725 4.733 4.733 0 0 0 4.73 4.725M12.15 14.496c-3.044 0-7.094.333-7.094 3.21 0 3.227 5.34 3.227 7.095 3.227 3.045 0 7.094-.333 7.094-3.209 0-3.228-5.34-3.228-7.094-3.228"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserBold;
