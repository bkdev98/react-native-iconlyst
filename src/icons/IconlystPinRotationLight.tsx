import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinRotationLight = ({
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
      d="M6.71 8.287c0 3.762 4.442 7.357 5.287 7.357s5.287-3.595 5.287-7.357a5.287 5.287 0 0 0-10.574 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.761 8.242a1.762 1.762 0 1 0-3.524 0 1.762 1.762 0 0 0 3.524 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.003 19.765c-1.884 0-3.603-.294-4.915-.78a7 7 0 0 1-1.094-.505c-.93-.521-1.476-1.172-1.476-1.884 0-.713.546-1.364 1.476-1.885"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.807 18.508 1.246 1.246L10.807 21M18.004 14.71c.93.521 1.476 1.173 1.476 1.886s-.546 1.363-1.476 1.884c-.32.19-.677.356-1.085.504-.642.237-1.381.43-2.189.563"
    />
  </Svg>
);
export default IconlystPinRotationLight;
