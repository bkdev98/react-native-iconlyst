import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanImageBroken = ({
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
      d="M21 8.47V6.893A3.89 3.89 0 0 0 17.107 3H15.85M3 8.47V6.893A3.89 3.89 0 0 1 6.893 3h1.29M3 15.531v1.577A3.89 3.89 0 0 0 6.893 21H8.15M21 15.531v1.577A3.89 3.89 0 0 1 17.107 21h-1.29M12 14.68h4.728a.764.764 0 0 0 .652-1.163l-1.715-2.805a.765.765 0 0 0-1.234-.097l-.647.758a.764.764 0 0 1-1.205-.052L10.777 8.79a.763.763 0 0 0-1.272.043L6.62 13.515a.764.764 0 0 0 .65 1.164h1.365"
    />
  </Svg>
);
export default IconlystScanImageBroken;