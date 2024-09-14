import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowGlobeLight = ({
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
      d="M12 3.365a7.839 7.839 0 0 1 3.644 14.78H8.355A7.839 7.839 0 0 1 12 3.366M12.001 7.992v6.423M14.782 9.598 9.22 12.81M14.782 12.81 9.22 9.598M8.374 18.18l-.794 1.237c-.505.79-.758 1.184-.738 1.51a1 1 0 0 0 .408.745c.263.193.732.193 1.669.193h6.164c.937 0 1.405 0 1.67-.193a1 1 0 0 0 .407-.745c.02-.326-.233-.72-.738-1.51l-.797-1.243"
    />
  </Svg>
);
export default IconlystSnowGlobeLight;
