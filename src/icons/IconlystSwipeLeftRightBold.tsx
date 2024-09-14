import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwipeLeftRightBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.033 11.562c-.933-2.517-3.907-2.732-6.297-2.905q-.391-.028-.76-.059l-.067-4.344a2.044 2.044 0 0 0-2.034-2.004 2.037 2.037 0 0 0-2.036 2.034v9.314l-.786-1.141a2.195 2.195 0 0 0-2.6-.806c-1.095.42-1.648 1.594-1.257 2.672.727 2.003 1.795 3.938 3.012 5.45.907 1.13 2.662 1.843 4.815 1.96q.315.017.625.017c2.303 0 4.444-.688 5.573-1.817 1.724-1.723 2.907-5.414 1.812-8.37M5.655 7.06q.155 0 .303-.06a.79.79 0 0 0 .488-.73V3.63a.791.791 0 0 0-1.35-.56l-1.32 1.32a.79.79 0 0 0 0 1.119l1.32 1.32c.151.151.354.231.56.231"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.882 7q.148.06.302.06c.206 0 .408-.08.559-.232l1.32-1.32a.79.79 0 0 0 0-1.118l-1.32-1.32a.79.79 0 0 0-.861-.172.79.79 0 0 0-.488.73v2.64c0 .32.192.609.488.731"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwipeLeftRightBold;
