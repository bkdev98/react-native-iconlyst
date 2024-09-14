import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCipherLight = ({
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
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.06 15.31-1.617-1.617a.626.626 0 0 0-.885 0L9.941 15.31a.626.626 0 0 0 0 .885l1.617 1.617c.245.245.64.245.885 0l1.617-1.617a.626.626 0 0 0 0-.885M14.058 7.8l-1.617-1.617a.626.626 0 0 0-.885 0L9.94 7.8a.626.626 0 0 0 0 .885l1.617 1.617c.245.245.64.245.885 0l1.617-1.617a.626.626 0 0 0 0-.885M10.306 11.554 8.69 9.937a.626.626 0 0 0-.885 0l-1.617 1.617a.626.626 0 0 0 0 .885l1.617 1.617c.245.245.64.245.885 0l1.617-1.617a.626.626 0 0 0 0-.885M17.812 11.554l-1.617-1.617a.626.626 0 0 0-.885 0l-1.617 1.617a.626.626 0 0 0 0 .885l1.617 1.617c.245.245.64.245.885 0l1.617-1.617a.626.626 0 0 0 0-.885"
    />
  </Svg>
);
export default IconlystCipherLight;
