import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneRingVibration2Bulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m4.59 14.72-.8.8a.75.75 0 1 0 1.06 1.06l.802-.8a.75.75 0 1 0-1.061-1.06M4.851 7.32a.75.75 0 1 0-1.06 1.061l.8.8c.146.146.338.22.53.22a.749.749 0 0 0 .53-1.28zM20.651 14.72a.75.75 0 1 0-1.06 1.06l.8.8a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06zM20.121 9.4a.74.74 0 0 0 .53-.22l.8-.8a.749.749 0 1 0-1.06-1.06l-.8.8a.749.749 0 0 0 .53 1.28M4.721 12.7a.75.75 0 0 0 0-1.5h-1.1a.75.75 0 0 0 0 1.5zM21.621 11.2h-1.1a.75.75 0 0 0 0 1.5h1.1a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.721 3.25h-4.1c-2.06 0-3.8 1.74-3.8 3.8v9.9c0 2.06 1.74 3.8 3.8 3.8h4.1c2.06 0 3.8-1.74 3.8-3.8v-9.9c0-2.06-1.74-3.8-3.8-3.8"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.571 17.75c-.53 0-.95-.42-.95-.95 0-.54.5-.95.95-.95.53 0 .95.42.95.95 0 .54-.5.95-.95.95"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneRingVibration2Bulk;
