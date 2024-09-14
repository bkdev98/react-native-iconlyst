import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleDataStudioTwoTone = ({
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
      d="M18.487 7.723h-6.943a2.121 2.121 0 1 1 0-4.243h6.943M12.316 14.407H5.373a2.121 2.121 0 1 1 0-4.243h6.943M18.488 21.477h-6.943a2.121 2.121 0 1 1 0-4.243h6.943"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.487 21.477a2.121 2.121 0 1 0 0-4.243 2.121 2.121 0 0 0 0 4.243M12.317 14.407a2.121 2.121 0 1 0 0-4.243 2.121 2.121 0 0 0 0 4.243M18.487 7.72a2.121 2.121 0 1 0 0-4.243 2.121 2.121 0 0 0 0 4.242"
    />
  </Svg>
);
export default IconlystGoogleDataStudioTwoTone;
