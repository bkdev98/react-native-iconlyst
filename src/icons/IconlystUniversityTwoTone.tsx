import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUniversityTwoTone = ({
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
      d="m4.377 8.409 8.198-5.293a.73.73 0 0 1 .791 0l8.199 5.293a.73.73 0 0 1 .333.613v.575a.73.73 0 0 1-.73.73H4.773a.73.73 0 0 1-.73-.73v-.575a.73.73 0 0 1 .334-.613"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.97 7.266v.01"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.926 20.379-.387-1.756a.51.51 0 0 0-.498-.4H4.9a.51.51 0 0 0-.5.4l-.386 1.756a.51.51 0 0 0 .498.62h16.915a.51.51 0 0 0 .498-.62"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.227 10.324v7.9m4.514-7.9v7.9m-13.544-7.9v7.9m4.514-7.9v7.9"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUniversityTwoTone;
