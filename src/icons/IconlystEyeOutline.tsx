import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEyeOutline = ({
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
      fill={props.color}
      d="M12.247 20.812c-4.033 0-7.654-2.828-9.686-7.558a.75.75 0 0 1 0-.592c2.034-4.732 5.655-7.557 9.687-7.557s7.657 2.825 9.69 7.557a.75.75 0 0 1 0 .592c-2.032 4.73-5.653 7.554-9.685 7.557zm-8.182-7.853c1.806 3.983 4.846 6.352 8.18 6.352 3.334.002 6.373-2.369 8.18-6.352-1.808-3.986-4.848-6.354-8.182-6.354s-6.37 2.368-8.176 6.354z"
    />
    <Path
      fill={props.color}
      d="M12.247 16.789a3.825 3.825 0 1 1 0-7.651 3.825 3.825 0 0 1 0 7.65m0-6.152a2.326 2.326 0 1 0 0 4.651 2.326 2.326 0 0 0 0-4.651"
    />
  </Svg>
);
export default IconlystEyeOutline;
