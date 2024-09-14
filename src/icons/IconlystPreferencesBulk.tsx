import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPreferencesBulk = ({
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
      d="M8.762 21.5h8.435c3.16 0 5.284-2.221 5.284-5.526V8.026c0-3.305-2.123-5.526-5.283-5.526H8.762c-3.16 0-5.282 2.221-5.282 5.526v7.948c0 3.305 2.122 5.526 5.282 5.526"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M10.375 10.19a.75.75 0 0 0 1.5 0V7.655a.75.75 0 0 0-1.5 0v.516H8.807a.75.75 0 0 0 0 1.5h1.568zM13.295 16.343a.75.75 0 0 0 1.5 0v-2.532a.75.75 0 0 0-1.5 0v.515H8.806a.75.75 0 0 0 0 1.5h4.489zM17.15 15.827h-.648a.75.75 0 0 1 0-1.5h.648a.75.75 0 0 1 0 1.5M17.15 9.672h-3.566a.75.75 0 0 1 0-1.5h3.567a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystPreferencesBulk;
