import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConnectedCableBroken = ({
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
      d="m14.663 14.778 1.624-1.625a3.755 3.755 0 0 0-4.775-5.756M16.291 7.837l4.7-4.7M14.649 14.807l-1.625 1.625a3.755 3.755 0 1 1-5.31-5.311l1.624-1.625M15.286 15.423 8.714 8.852M5.694 18.453 3.01 21.137M19.003 14.438l1.473.394M3.511 9.3l1.473.396M14.163 19.14l.54 1.427M9.285 3.566l.54 1.427"
    />
  </Svg>
);
export default IconlystConnectedCableBroken;
