import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdTwoTone = ({
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
      d="M5.91 16.143a7 7 0 0 1-.054-.848V10.61A6.643 6.643 0 0 1 12.5 3.967a6.644 6.644 0 0 1 6.644 6.643v4.685q-.001.586-.098 1.143c-.19.923-.482 1.736-.908 2.402-.294.469-.645.9-1.043 1.28M13.927 21.814a6.636 6.636 0 0 1-7.063-2.972"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.063 14.84a3.435 3.435 0 0 0 6.872 0v-3.738c0-.9-.346-1.718-.91-2.33M12.5 7.662a3.436 3.436 0 0 0-3.437 3.436v.938M12.497 14.938v-3.932"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTouchIdTwoTone;
