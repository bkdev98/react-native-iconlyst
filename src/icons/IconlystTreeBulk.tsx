import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreeBulk = ({
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
      d="M19.862 17.303c-.1.09-3.08.12-6.23.13-.5.01-1 .01-1.5.01-3.04 0-5.82-.01-5.88-.01-.13 0-.25-.04-.34-.13a.496.496 0 0 1-.03-.71c1.19-1.28 2.25-2.78 3.15-4.48h-1.76a.494.494 0 0 1-.38-.82c1.97-2.32 3.79-5.15 5.55-8.65.16-.34.72-.34.89 0 1.76 3.5 3.58 6.33 5.55 8.65.13.15.15.36.07.53-.08.18-.26.29-.45.29h-1.77c.91 1.69 1.96 3.2 3.16 4.48.18.2.17.52-.03.71"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.631 17.433v3.43a.749.749 0 1 1-1.5 0v-3.42c.5 0 1 0 1.5-.01"
    />
  </Svg>
);
export default IconlystTreeBulk;
