import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStacksOutline = ({
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
      d="M12.25 3.75A8.25 8.25 0 0 0 4 12a8.25 8.25 0 0 0 8.25 8.25A8.25 8.25 0 0 0 20.5 12a8.25 8.25 0 0 0-8.25-8.25M2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.184 10.912a.75.75 0 0 1 .75-.75h6.634a.75.75 0 0 1 0 1.5H8.934a.75.75 0 0 1-.75-.75M8.184 13.147a.75.75 0 0 1 .75-.75h6.634a.75.75 0 0 1 0 1.5H8.934a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.14 12.497a.75.75 0 0 1 .281 1.022l-1.728 3.042a.75.75 0 0 1-1.304-.741l1.728-3.042a.75.75 0 0 1 1.023-.282"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.214 12.497a.75.75 0 0 1 1.022.281l1.728 3.042a.75.75 0 0 1-1.304.74l-1.728-3.04a.75.75 0 0 1 .282-1.024M9.67 7.16a.75.75 0 0 1 1.023.282l1.761 3.102a.75.75 0 0 1-1.304.74L9.389 8.184A.75.75 0 0 1 9.67 7.16"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.682 7.16a.75.75 0 0 1 .282 1.023l-1.76 3.102a.75.75 0 0 1-1.305-.74l1.76-3.103a.75.75 0 0 1 1.023-.282"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStacksOutline;
