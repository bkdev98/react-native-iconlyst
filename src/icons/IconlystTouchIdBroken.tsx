import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdBroken = ({
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
      d="M5.66 15.184a7 7 0 0 1-.054-.848V9.65a6.643 6.643 0 0 1 6.644-6.643 6.64 6.64 0 0 1 5.972 3.727M18.895 9.652v4.685q-.001.586-.098 1.143c-.191.923-.482 1.736-.908 2.402-.294.47-.645.9-1.043 1.28M13.677 20.855a6.636 6.636 0 0 1-7.063-2.972"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.813 13.88a3.435 3.435 0 0 0 6.872 0v-3.737c0-.9-.346-1.718-.91-2.33M12.25 6.703a3.436 3.436 0 0 0-3.437 3.436v.938M12.247 13.979v-3.932"
    />
  </Svg>
);
export default IconlystTouchIdBroken;
