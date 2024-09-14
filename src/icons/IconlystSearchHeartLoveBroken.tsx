import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchHeartLoveBroken = ({
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
      d="M20.008 12.485A8.45 8.45 0 0 1 3.87 14.726M3.184 11.383A8.45 8.45 0 0 1 10.58 3M17.379 17.571l3.438 3.43"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.022 5.712c-.329-1.028.056-2.204 1.135-2.55a1.84 1.84 0 0 1 1.666.28 1.86 1.86 0 0 1 1.664-.28c1.08.346 1.467 1.522 1.138 2.55-.513 1.63-2.802 2.885-2.802 2.885s-2.27-1.236-2.8-2.885"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchHeartLoveBroken;
