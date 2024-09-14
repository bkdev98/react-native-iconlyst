import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSweatDropletsLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.052 20.043c.905 1.055 2.291 1.47 3.593 1.29 2.204-.303 3.992-2.656 3.29-5.309-1.616-6.052-9.662-7.199-9.662-7.199s1.287 2.743 1.701 5.81c.245 1.816-.218 3.898 1.078 5.408M3.176 14.098c.255 1.618 1.846 2.74 3.56 2.499 1.716-.241 2.896-1.747 2.642-3.37-.494-3.144-4.08-5.84-4.08-5.84s-2.615 3.567-2.122 6.71M17.73 8.197c1.358.534 2.817-.207 3.257-1.643.44-1.442-.302-3.039-1.66-3.573-2.638-1.031-6.055.55-6.055.55s1.821 3.635 4.459 4.666"
    />
  </Svg>
);
export default IconlystSweatDropletsLight;
