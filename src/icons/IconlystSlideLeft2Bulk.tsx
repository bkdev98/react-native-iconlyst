import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlideLeft2Bulk = ({
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
      d="M20.532 11.562c-.931-2.517-3.907-2.732-6.296-2.905q-.392-.028-.761-.059l-.067-4.344a2.044 2.044 0 0 0-2.034-2.004A2.037 2.037 0 0 0 9.34 4.284v9.314l-.786-1.141a2.195 2.195 0 0 0-2.6-.806c-1.095.42-1.648 1.593-1.257 2.672.726 2.003 1.795 3.938 3.011 5.45.908 1.13 2.663 1.843 4.816 1.96q.314.017.625.017c2.303 0 4.444-.688 5.573-1.817 1.724-1.723 2.907-5.414 1.811-8.37"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m5.394 6.83 1.32-1.32a.79.79 0 0 0 0-1.119l-1.32-1.32a.79.79 0 0 0-1.35.56v2.64a.79.79 0 0 0 1.35.558M17.445 6.83a.789.789 0 0 0 1.35-.56V3.63a.79.79 0 0 0-1.35-.558l-1.32 1.32a.79.79 0 0 0 0 1.118z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSlideLeft2Bulk;
