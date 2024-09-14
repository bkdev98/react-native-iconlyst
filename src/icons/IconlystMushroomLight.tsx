import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMushroomLight = ({
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
      strokeWidth={1.5}
      d="M12.015 3C7.343 3 3.538 5.648 3.02 10.031c-.725 6.131 18.635 4.44 17.963-.212S16.612 3 12.015 3Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.489 7.093c1.005.158 1.864 1.18 2 2M9.425 13.986c-.49 2.33-1.345 6.232.704 6.762 1.31.34 2.372.331 3.675.002 1.873-.472 1.317-4.42.794-6.764"
    />
  </Svg>
);
export default IconlystMushroomLight;
