import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAlignLeftDecreaseBold = ({
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
      d="M20 6H4a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2m-8.889 14H4a1 1 0 1 1 0-2h7.111a1 1 0 1 1 0 2M15.556 13H4a1 1 0 1 1 0-2h11.556a1 1 0 1 1 0 2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAlignLeftDecreaseBold;
