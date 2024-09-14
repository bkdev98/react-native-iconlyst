import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerMegaphone3Light = ({
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
      d="M18.42 14.111s-9.208 1.356-10.364 1.476-2.986-.786-3.637-2.575.167-3.66 1.13-4.31c.964-.652 8.85-5.509 8.85-5.509"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.297 15.555 1.476 4.055a2.11 2.11 0 0 0 3.967-1.443l-1.15-3.16"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.107 7.665c1.103 3.031.894 5.89-.468 6.386s-3.361-1.56-4.465-4.59c-1.103-3.032-.893-5.89.469-6.387s3.36 1.56 4.464 4.591"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpeakerMegaphone3Light;
