import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtonePlaying2Light = ({
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
      d="M14.989 3.23a6.73 6.73 0 0 1 4.757 8.24l-.349 1.307a5.4 5.4 0 0 0-.098 2.365l.198 1.104c.304 1.687-1.25 3.117-2.907 2.673L5.759 16.017c-1.656-.444-2.289-2.46-1.181-3.769l.724-.857a5.4 5.4 0 0 0 1.096-2.098L6.75 7.99a6.73 6.73 0 0 1 8.24-4.758M15.4 18.645a3.176 3.176 0 0 1-6.135-1.643"
    />
  </Svg>
);
export default IconlystRingtonePlaying2Light;
