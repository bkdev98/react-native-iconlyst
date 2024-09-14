import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieTimeLight = ({
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
      d="M20.128 10.354V7.767c0-2.793-1.74-4.767-4.535-4.767H7.596C4.798 3 3.059 4.974 3.059 7.767v7.613c0 2.792 1.74 4.766 4.536 4.766h2.608M3.066 7.469h17.057M8.623 7.468V3m5.942 4.468V3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.888 21a4.053 4.053 0 1 0 0-8.106 4.053 4.053 0 0 0 0 8.105"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.149 18.002-1.282-.766V15.59"
    />
  </Svg>
);
export default IconlystMovieTimeLight;
