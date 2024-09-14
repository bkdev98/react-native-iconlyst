import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInformationTwoTone = ({
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
      d="M21.5 15.094c0 2.766-1.845 5.013-4.582 5.006H8.082c-2.737.007-4.582-2.24-4.582-5.006v-6.18C3.5 6.15 5.345 3.9 8.082 3.9h8.836c2.737 0 4.582 2.25 4.582 5.013z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.191 13.008h2.7m-2.7 2.875h6.3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.252 10.817h-2.485a.557.557 0 0 1-.558-.558V8.226c0-.308.25-.557.558-.557h2.485c.307 0 .557.249.557.557v2.033c0 .307-.25.557-.558.557"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInformationTwoTone;
