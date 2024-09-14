import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystApronBroken = ({
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
      d="M14.803 3c0 3.85.383 6.04 3.755 7.94.602.338.962.988.914 1.676l-.23 3.303M9.197 3c0 3.85-.383 6.04-3.755 7.94a1.79 1.79 0 0 0-.914 1.676l.449 6.437c.059.862.724 1.557 1.583 1.651 2.926.322 7.963.383 10.815.173a1.78 1.78 0 0 0 1.637-1.656l.043-.616M8.932 6.586h6.136"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 17.451a3.07 3.07 0 0 0 3.067-3.068v-.43c0-.565-.457-1.023-1.022-1.023h-4.09c-.566 0-1.023.458-1.023 1.022v.431c0 .652.203 1.257.55 1.754"
    />
  </Svg>
);
export default IconlystApronBroken;
