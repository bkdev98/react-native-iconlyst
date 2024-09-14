import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEuroSquareBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.217 2.563H7.782c-3.159 0-5.282 2.222-5.282 5.53v7.95c0 3.302 2.123 5.52 5.282 5.52h8.434c3.16 0 5.284-2.218 5.284-5.52v-7.95c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M14.501 10.942a.75.75 0 0 0-.75-.75h-2.346a3.33 3.33 0 0 1 2.636-1.201c.417.041.764-.305.779-.719a.75.75 0 0 0-.718-.779 4.72 4.72 0 0 0-4.306 2.392c-.056.1-.099.204-.146.307h-.357a.746.746 0 0 0-.04 1.492 4.6 4.6 0 0 0 0 .766.746.746 0 0 0 .04 1.492h.36c.047.101.09.203.145.301a4.71 4.71 0 0 0 4.304 2.388.75.75 0 0 0 .718-.779c-.015-.413-.358-.761-.779-.719a3.32 3.32 0 0 1-2.6-1.191h2.31a.75.75 0 0 0 0-1.5h-2.98a2.9 2.9 0 0 1-.001-.75h2.981a.75.75 0 0 0 .75-.75"
    />
  </Svg>
);
export default IconlystEuroSquareBulk;
