import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayRightBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.895 5.804a25 25 0 0 0-2.71-1.314c-2.273-.737-3.581.232-3.993 2.79a43 43 0 0 0-.258 4.972c-.007 1.71.078 3.373.258 4.974.398 2.567 1.722 3.51 3.992 2.79 2.792-1.125 6.466-3.484 8.496-5.323q2.778-2.44 0-4.882a25 25 0 0 0-2.138-1.7"
    />
  </Svg>
);
export default IconlystPlayRightBroken;
