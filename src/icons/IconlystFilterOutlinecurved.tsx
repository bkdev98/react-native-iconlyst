import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterOutlinecurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.921 18.279a.75.75 0 0 1 .75-.75h6.473a.75.75 0 0 1 0 1.5H4.67a.75.75 0 0 1-.75-.75M15.27 15.623c.648-.648 1.595-.815 2.657-.815s2.009.167 2.656.815.816 1.594.816 2.657-.168 2.009-.816 2.657c-.647.647-1.594.814-2.656.814s-2.009-.167-2.657-.814c-.648-.648-.815-1.595-.815-2.657s.167-2.01.815-2.657m1.06 1.06c-.202.203-.375.617-.375 1.597 0 .979.173 1.393.376 1.596s.617.375 1.596.375 1.393-.172 1.596-.375.375-.617.375-1.596-.172-1.394-.375-1.597c-.203-.202-.617-.375-1.596-.375s-1.393.173-1.596.375M13.427 7.79a.75.75 0 0 1 .75-.75h6.471a.75.75 0 1 1 0 1.5h-6.471a.75.75 0 0 1-.75-.75M4.736 5.132c.648-.647 1.595-.815 2.657-.815s2.01.168 2.657.815c.648.648.815 1.595.815 2.657s-.167 2.01-.815 2.657-1.595.815-2.657.815-2.009-.168-2.657-.815c-.648-.648-.815-1.595-.815-2.657s.167-2.01.815-2.657m1.06 1.061c-.202.203-.375.617-.375 1.596s.173 1.393.376 1.596.617.376 1.596.376 1.394-.173 1.596-.376.376-.617.376-1.596-.173-1.393-.376-1.596-.617-.376-1.596-.376S6 5.99 5.797 6.193"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilterOutlinecurved;
