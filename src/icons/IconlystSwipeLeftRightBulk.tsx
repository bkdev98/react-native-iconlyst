import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwipeLeftRightBulk = ({
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
      d="M20.533 11.562c-.933-2.517-3.907-2.732-6.297-2.905q-.391-.028-.76-.059l-.067-4.344a2.044 2.044 0 0 0-2.034-2.004A2.037 2.037 0 0 0 9.34 4.284v9.314l-.787-1.141a2.195 2.195 0 0 0-2.599-.806c-1.096.42-1.648 1.594-1.257 2.672.726 2.003 1.795 3.938 3.01 5.45.908 1.13 2.663 1.843 4.817 1.96q.314.017.625.017c2.303 0 4.443-.688 5.572-1.817 1.724-1.723 2.907-5.414 1.812-8.37"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.155 7.061q.154 0 .302-.06a.79.79 0 0 0 .488-.73V3.63a.791.791 0 0 0-1.349-.56l-1.32 1.32a.79.79 0 0 0 0 1.119l1.32 1.32c.15.151.353.231.559.231M16.381 7q.148.061.303.06c.205 0 .408-.08.558-.231l1.321-1.32a.79.79 0 0 0 0-1.118l-1.32-1.32a.79.79 0 0 0-.862-.172.79.79 0 0 0-.488.73V6.27c0 .32.193.608.488.73"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwipeLeftRightBulk;
