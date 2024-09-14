import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouse2Bold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.043 9.59a.39.39 0 0 0 .39-.39V7.525a.39.39 0 0 0-.78 0V9.2c0 .215.174.39.39.39"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.195 9.258c-.001-3.4-2.66-6.224-6.116-6.718a.29.29 0 0 0-.329.292v2.742c0 .122.075.23.183.288.594.318 1 .944 1 1.664v1.673c0 1.042-.848 1.89-1.89 1.89a1.893 1.893 0 0 1-1.891-1.89V7.526c0-.69.375-1.291.929-1.62.1-.06.169-.165.169-.281V2.83a.29.29 0 0 0-.328-.291 7.3 7.3 0 0 0-4 1.904C5.556 5.728 4.804 7.439 4.804 9.26l.002 5.409c0 3.746 3.228 6.794 7.195 6.794 1.917 0 3.72-.703 5.077-1.98 1.367-1.285 2.118-2.996 2.118-4.817z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMouse2Bold;
