import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTriangle2Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.004 20.1H4.996c-1.534 0-2.493-1.66-1.726-2.988l7.048-12.215c.77-1.334 2.696-1.33 3.458.009l6.96 12.215c.757 1.328-.203 2.98-1.732 2.98M11.999 14.007 3.246 19.06M12 3.9v10.107M12 14.007l8.753 5.054"
    />
  </Svg>
);
export default IconlystTriangle2Light;
