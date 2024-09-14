import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystJourneyTwoTone = ({
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
      d="m12.644 6.194 2.499-.014a2.583 2.583 0 0 1 2.588 2.593l-.004 1.012a2.584 2.584 0 0 1-2.584 2.573H9a2.584 2.584 0 0 0-2.584 2.583v.997a2.584 2.584 0 0 0 2.586 2.583l3.65-.005"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.27 9.286c-.42 0-2.63-1.787-2.63-3.658a2.628 2.628 0 0 1 5.259 0c0 1.871-2.21 3.658-2.63 3.658"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.27 5.64v-.034"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.73 21.001c-.42 0-2.628-1.787-2.628-3.658a2.629 2.629 0 0 1 5.258 0c0 1.87-2.21 3.658-2.63 3.658"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.73 17.355v-.034"
    />
  </Svg>
);
export default IconlystJourneyTwoTone;
