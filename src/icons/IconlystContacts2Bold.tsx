import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystContacts2Bold = ({
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
      d="M12.25 18.45c-1 0-4 0-4-2 0-1.9 3-1.9 4-1.9s4 0 4 2c0 1.9-3 1.9-4 1.9m0-10.6c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7-2.7-1.2-2.7-2.7 1.2-2.7 2.7-2.7m4.8-4v-1.1c0-.6-.4-1-1-1s-1 .4-1 1v3.1c0 .4.2.7.5.8-.1.1-.3.2-.5.2-.6 0-1-.4-1-1v-2.1h-4.7v-1c0-.6-.4-1-1-1s-1 .4-1 1v3.1c0 .4.2.7.5.8-.1.1-.3.2-.5.2-.6 0-1-.4-1-1v-1.9c-2 .6-3.2 2.2-3.2 4.7v8.6c0 3.1 1.9 5 5 5h8c3.2 0 5-1.8 5-4.9v-8.7c0-2.8-1.5-4.5-4.1-4.8"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystContacts2Bold;
