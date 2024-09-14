import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarBadge2TwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.718 5.339v12.543a2.604 2.604 0 0 1-2.605 2.605h12.138c2.084 0 3.24-1.404 3.24-3.672L21.5 5.339c0-.83-.794-1.37-1.483-1.016l-.653.344a1.43 1.43 0 0 1-1.245.035l-1.845-.82a2.9 2.9 0 0 0-2.33 0l-1.845.82a1.43 1.43 0 0 1-1.245-.035l-.653-.344c-.69-.353-1.483.194-1.483 1.016"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.463 9.69h-2.207a1.188 1.188 0 0 0 0 2.376h1.359a1.189 1.189 0 0 1 0 2.376h-2.207M14.936 14.442v.997m0-6.753v1.006"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.113 20.487A2.605 2.605 0 0 1 3.5 17.882v-7.248c0-.83.795-1.368 1.484-1.014l.653.344c.388.203.838.212 1.244.035l1.245-.556c.097-.044.345.07.592.203"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDollarBadge2TwoTone;
