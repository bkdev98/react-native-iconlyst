import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieTimeBroken = ({
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
      d="M20.378 10.354V7.767c0-2.793-1.74-4.767-4.535-4.767H7.845C5.048 3 3.31 4.974 3.31 7.767v3.806M10.453 20.146H7.845c-2.797 0-4.536-1.975-4.536-4.767v-1.043M3.315 7.469h17.058M8.873 7.468V5.396m5.942 2.072V3M21.192 16.947a4.053 4.053 0 1 0-.713 2.296"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.399 18.002-1.282-.766V15.59"
    />
  </Svg>
);
export default IconlystMovieTimeBroken;
