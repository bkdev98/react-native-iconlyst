import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystContacts1TwoTone = ({
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
      d="M4.738 16.253V7.736c0-2.963 1.646-4.8 4.671-4.79h8.062c3.025 0 4.68 1.836 4.68 4.8v8.507c0 2.954-1.684 4.8-4.757 4.8H9.41c-3.025 0-4.67-1.846-4.67-4.8"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.92 14.047c-2.019 0-3.74.305-3.74 1.527s1.712 1.538 3.74 1.538c2.018 0 3.741-.306 3.741-1.528 0-1.22-1.712-1.537-3.74-1.537M16.295 9.277a2.374 2.374 0 1 1-4.748 0 2.374 2.374 0 0 1 4.747 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.15 7.934h3.311m-3.31 8.126h3.31"
    />
  </Svg>
);
export default IconlystContacts1TwoTone;
