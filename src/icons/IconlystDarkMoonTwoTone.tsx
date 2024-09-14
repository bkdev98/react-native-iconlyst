import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDarkMoonTwoTone = ({
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
      d="M20.663 14.412c.044-.024.098.017.083.067-1.076 3.765-4.544 6.52-8.641 6.52-4.97 0-8.99-4.03-8.99-8.99a8.98 8.98 0 0 1 6.511-8.642c.049-.014.09.04.066.084a8.12 8.12 0 0 0 1.438 9.533 8.1 8.1 0 0 0 9.533 1.428"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.478 5.635A9 9 0 1 1 5.75 18.363 9 9 0 0 1 18.478 5.635"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDarkMoonTwoTone;
