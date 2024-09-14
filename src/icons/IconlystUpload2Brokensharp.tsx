import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpload2Brokensharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M5.813 21.863H3V11.34h4.62M16.88 11.34h4.62v10.523H9.732M12.25 2.414v13.94M7.66 7.01c2.36 0 4.59-2.08 4.59-4.596M16.85 7.01c-2.37 0-4.6-2.08-4.6-4.596"
    />
  </Svg>
);
export default IconlystUpload2Brokensharp;
