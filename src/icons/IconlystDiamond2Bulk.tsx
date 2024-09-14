import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamond2Bulk = ({
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
      d="M12.05 2.651H12c-.501 0-.943.283-1.155.74L8.471 8.48a.3.3 0 0 1-.138.136l-5.098 2.381A1.26 1.26 0 0 0 2.5 12.15c0 .498.282.94.736 1.154l5.093 2.378a.3.3 0 0 1 .138.13l2.378 5.1a1.26 1.26 0 0 0 1.205.737z"
    />
    <Path
      fill={props.color}
      d="M12.05 21.65V2.65c.48.019.901.299 1.106.74l2.379 5.098c.025.052.074.1.138.131l5.092 2.377c.454.214.735.655.735 1.153s-.281.94-.734 1.153l-5.098 2.381a.3.3 0 0 0-.136.133l-2.376 5.094c-.205.441-.626.72-1.106.738"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDiamond2Bulk;
