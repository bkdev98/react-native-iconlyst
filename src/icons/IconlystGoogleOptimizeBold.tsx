import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleOptimizeBold = ({
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
      d="M19.15 2.76h-6.78a2.83 2.83 0 0 0-2.82 2.82c0 1.56 1.27 2.82 2.82 2.82h3.96v3.96c0 1.56 1.26 2.82 2.82 2.82s2.82-1.26 2.82-2.82V5.58c0-1.55-1.26-2.82-2.82-2.82"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.56 9.837H7.44c.77.7 1.25 1.71 1.25 2.83 0 1.11-.47 2.11-1.23 2.81h2.28v3.96c0 1.56 1.26 2.82 2.82 2.82s2.82-1.26 2.82-2.82v-6.78c0-1.55-1.26-2.82-2.82-2.82"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.32 9.878c-.15-.03-.3-.04-.46-.04-1.56 0-2.83 1.27-2.83 2.83s1.27 2.83 2.83 2.83c.18 0 .36-.02.52-.05a2.828 2.828 0 0 0-.06-5.57"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleOptimizeBold;
