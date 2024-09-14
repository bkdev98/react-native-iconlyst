import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDislikeTwoTone = ({
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
      d="M16.998 3.974a5.7 5.7 0 0 0-2.18-.048c-.884.144-1.72.749-2.44 1.286-.71-.537-1.546-1.152-2.43-1.296a5.6 5.6 0 0 0-2.64.182C4.014 5.164 2.842 8.766 3.85 11.916c.393 1.2 1.085 2.304 1.93 3.274"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.954 5.809c1.316 1.623 1.642 3.966.96 6.107-1.555 4.984-8.537 8.25-8.537 8.25s-2.036-.951-4.158-2.622M6.842 18.917 21.5 4.26"
    />
  </Svg>
);
export default IconlystDislikeTwoTone;
