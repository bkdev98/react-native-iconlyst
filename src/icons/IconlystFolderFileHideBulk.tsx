import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileHideBulk = ({
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
      d="M21.43 2.995a.754.754 0 0 0-1.06 0L3.02 20.345c-.29.29-.29.76 0 1.06.15.14.34.22.53.22s.39-.08.53-.22l1.63-1.63c.81.43 1.79.66 2.92.66h6.92c3.49 0 5.57-2.08 5.57-5.56l.02-4.43c0-2.18-.53-3.62-1.64-4.46l1.93-1.93c.29-.29.29-.76 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.35 16.674c.07.02.13.04.2.04.13 0 .25-.05.34-.13L14.655 5.945c.15-.14.2-.36.12-.55a.5.5 0 0 0-.46-.32h-.555c-.5 0-.95-.23-1.24-.62l-.8-1.07a2.52 2.52 0 0 0-2.03-1.01H7.91c-3.27 0-4.86 1.81-4.86 5.55v8.289c0 .2.12.38.3.46"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFolderFileHideBulk;
