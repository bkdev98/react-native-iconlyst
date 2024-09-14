import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarBadge2Broken = ({
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
      d="M20.996 11.079 21 5.34c0-.83-.794-1.37-1.483-1.016l-.653.344a1.43 1.43 0 0 1-1.245.035l-1.845-.82a2.9 2.9 0 0 0-2.33 0l-1.845.82a1.43 1.43 0 0 1-1.245-.035L9.7 4.325c-.69-.353-1.483.194-1.483 1.016v12.543a2.604 2.604 0 0 1-2.605 2.605h12.138c2.084 0 3.24-1.404 3.24-3.672l.002-2.87"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.963 9.69h-2.207a1.188 1.188 0 0 0 0 2.376h1.359a1.189 1.189 0 0 1 0 2.376h-2.207M14.436 14.444v.997m0-6.754v1.007M5.613 20.489A2.605 2.605 0 0 1 3 17.884v-7.247c0-.83.795-1.368 1.484-1.015l.653.344c.388.204.838.212 1.244.035"
    />
  </Svg>
);
export default IconlystDollarBadge2Broken;
