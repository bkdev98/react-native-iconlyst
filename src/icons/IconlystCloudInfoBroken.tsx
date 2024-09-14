import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudInfoBroken = ({
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
      d="M12.004 15.475v3.601-4.107M12.004 12.057v-.06M12 4.926c-3.617 0-4.897 3.265-4.897 4.898C4.833 9.844 3 11.369 3 13.964c0 1.68 1 3.126 2.436 3.775M18.563 17.739A4.14 4.14 0 0 0 21 13.964c0-2.595-1.83-4.139-4.103-4.14 0-1.07-.55-2.84-1.945-3.933"
    />
  </Svg>
);
export default IconlystCloudInfoBroken;
