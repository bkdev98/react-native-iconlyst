import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesRemoveLight = ({
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
      d="M4.86 7.467c-1.669 2.593-1.857 5.86-.592 8.623.197.486.35.882.35 1.27 0 1.061-1.032 2.385-.342 3.078.683.684 2.001-.342 3.06-.351.386 0 .78.162 1.273.36 2.746 1.269 6.011 1.08 8.595-.604M3.309 5.906l15.464 15.519M19.886 17.152v-.01c2.216-3.465 1.813-8.127-1.202-11.161A8.914 8.914 0 0 0 7.56 4.774"
    />
  </Svg>
);
export default IconlystMessagesRemoveLight;
