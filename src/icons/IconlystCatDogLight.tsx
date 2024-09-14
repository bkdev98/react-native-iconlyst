import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCatDogLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.454 7.214v.009M16.063 14.361v.009M11.024 8.227c-.172.916-.338 2.42-.088 3.667m3.633-4.044c-.796-2.917-2.704-3.626-4.52-3.47l-1.6.126c-2.086.138-2.373 1.65-2.255 2.39L2.75 8.357c.03 1.28.627 3.78 2.773 3.536s2.845-.427 2.926-.488c.427 1.311.313 5.582-.806 7.42M20.98 20.242c.27-1.697.27-3.648.27-3.648 0-3.186-2.02-6.553-4.702-6.553v1.86c-1.296 0-2.396.498-2.94 1.823-.315.765-.833 1.171-1.589 1.171-.205.833.399 2.391 1.836 2.608 1.263.19 1.834.846 1.88 2.188"
    />
  </Svg>
);
export default IconlystCatDogLight;
