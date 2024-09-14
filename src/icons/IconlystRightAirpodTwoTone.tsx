import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightAirpodTwoTone = ({
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
      d="M8.771 6.428v1.361m2.848.422c0 .448-.132.891-.404 1.247a4.39 4.39 0 0 1-3.484 1.714H6.609v6.231a1.554 1.554 0 1 1-3.109 0V7.306c0-2.363 2.292-4.41 4.655-4.302a4.1 4.1 0 0 1 3.059 1.623c.271.357.405.802.405 1.25z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.202 10.272a5.298 5.298 0 1 1 0 10.595 5.298 5.298 0 0 1 0-10.595"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.478 17.685-1.152-1.808m-1.223 1.808v-4.231h1.5a1.207 1.207 0 0 1 0 2.415h-1.5zM14.76 4.786a2.523 2.523 0 0 1 2.886 2.099"
    />
  </Svg>
);
export default IconlystRightAirpodTwoTone;
