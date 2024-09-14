import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashAutoLight = ({
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
      d="M16.527 18.71h3.5M21 20.79l-2.724-5.825-2.723 5.826"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.351 3.59-6.174 8.504a.917.917 0 0 0 .742 1.457h5.052v5.34c0 .889 1.137 1.258 1.66.538l6.174-8.503a.918.918 0 0 0-.743-1.457h-5.05V4.13c0-.888-1.138-1.258-1.661-.54"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlashAutoLight;
