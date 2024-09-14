import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowGlobeBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.924 13.523-1.911-1.506M9.258 9.886a2.741 2.741 0 1 0 .985-2.105"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.34 12.083a3.455 3.455 0 0 0 0 6.063M16.99 12.017l-1.91 1.517c.24.47.377 1.015.377 1.58a3.46 3.46 0 0 1-1.795 3.031M11.162 12.602v1.843"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3.365a7.839 7.839 0 0 0-3.645 14.78h7.29a7.84 7.84 0 0 0-.553-14.147M8.374 18.18l-.794 1.237c-.505.79-.758 1.184-.738 1.51a1 1 0 0 0 .408.745c.264.193.732.193 1.67.193H12M15.083 21.865c.937 0 1.406 0 1.67-.193a1 1 0 0 0 .407-.745c.02-.326-.233-.72-.738-1.51l-.797-1.243"
    />
  </Svg>
);
export default IconlystSnowGlobeBroken;
