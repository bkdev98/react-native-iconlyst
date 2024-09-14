import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagBroken = ({
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
      d="M16.019 20.999c2.812 0 4.562-1.984 4.562-4.793v-4.542c0-2.808-1.75-4.793-4.561-4.793H7.978c-2.803 0-4.56 1.985-4.56 4.793v4.542c0 2.809 1.748 4.793 4.56 4.793h4.02"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.885 11.145c.074.723.408 1.372.89 1.865a3.18 3.18 0 0 0 2.227.918 3.136 3.136 0 0 0 3.117-2.783M15.87 6.871a3.871 3.871 0 0 0-7.741 0"
    />
  </Svg>
);
export default IconlystShoppingBagBroken;
