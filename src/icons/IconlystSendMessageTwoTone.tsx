import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSendMessageTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.332 13.462 6.818 20.87c-1.225.672-2.664-.43-2.342-1.793l1.663-7.034-1.663-7.036c-.322-1.363 1.117-2.464 2.342-1.793l13.514 7.408c1.119.614 1.119 2.226 0 2.84"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.511 12.02-8.333.043"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSendMessageTwoTone;
