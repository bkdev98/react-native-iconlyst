import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.885 21.251-1.78-2.477 2.464-1.77M3.826 5.422l3.034-.32.318 3.016M21.175 7.246l-1.278 2.77-2.754-1.27"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.578 13.672a8 8 0 0 1-.671 1.53 7.99 7.99 0 0 1-9.67 3.57M6.113 16.726a8 8 0 0 1-.998-1.34A7.99 7.99 0 0 1 6.8 5.215M10.291 3.421a8 8 0 0 1 1.663-.171 7.99 7.99 0 0 1 7.876 6.651"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRefreshTwoTone;
