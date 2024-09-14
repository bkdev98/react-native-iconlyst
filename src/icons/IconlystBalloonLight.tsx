import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBalloonLight = ({
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
      d="M16.266 18.29s1.587.814.722 2.1c-.36.534-.436.901-.368 1.168M13.794 7.409a4.948 4.948 0 0 1 7.907 3.967c0 2.733-2.215 5.577-4.948 5.577-2.058 0-3.823-1.614-4.569-3.578"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.777 11.569a1.91 1.91 0 0 0-1.909-1.909M18.039 18.29H15.47l1.284-1.325zM9.932 16.425H7.28l1.326-1.37zM9.218 16.425s-1.732.42-.788 2.275c.704 1.382.416 2.413 0 3.006"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.006 8.966c0 2.984-2.418 6.09-5.402 6.09S3.2 11.95 3.2 8.966a5.403 5.403 0 0 1 10.805 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.259 9.16a2.345 2.345 0 0 1 2.345-2.345"
    />
  </Svg>
);
export default IconlystBalloonLight;
