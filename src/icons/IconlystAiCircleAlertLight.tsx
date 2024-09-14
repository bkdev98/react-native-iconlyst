import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiCircleAlertLight = ({
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
      d="M14.07 3.24a9 9 0 1 0 6.667 6.595"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.198 3a1.802 1.802 0 1 1 0 3.604 1.802 1.802 0 0 1 0-3.604"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.615 14.141-.094-.254a3.5 3.5 0 0 0-2.063-2.065l-.253-.094.253-.094a3.5 3.5 0 0 0 2.063-2.066l.094-.254.094.254a3.5 3.5 0 0 0 2.063 2.066l.253.094-.253.094a3.5 3.5 0 0 0-2.063 2.066zM15.702 14.686a1.64 1.64 0 0 0-1.092-1.094c.523-.16.933-.57 1.092-1.094.16.524.57.934 1.093 1.094-.524.16-.933.57-1.093 1.094"
    />
  </Svg>
);
export default IconlystAiCircleAlertLight;
