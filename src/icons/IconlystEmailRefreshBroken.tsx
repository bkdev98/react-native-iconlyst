import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailRefreshBroken = ({
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
      d="M11.565 19.564H7.4C4.77 19.572 3 17.412 3 14.757V8.82c0-2.654 1.772-4.815 4.4-4.815h.86M20.287 10.435V8.821c0-2.654-1.771-4.815-4.4-4.815h-4.243M16.366 14.327a3.053 3.053 0 1 0 2.952-.116"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.318 15.9v-1.69H21M16.744 9.063l-3.84 3.123a1.99 1.99 0 0 1-2.472 0L6.559 9.063"
    />
  </Svg>
);
export default IconlystEmailRefreshBroken;
