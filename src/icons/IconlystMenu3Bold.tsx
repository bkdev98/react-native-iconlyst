import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMenu3Bold = ({
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
      d="M6.963 20.52h5.954a3.613 3.613 0 0 0 3.608-3.608V7.088a3.613 3.613 0 0 0-3.608-3.608H6.963a3.61 3.61 0 0 0-3.607 3.608v9.824a3.61 3.61 0 0 0 3.607 3.608M18.937 18.208a.75.75 0 0 1-.75-.75V6.543a.75.75 0 0 1 1.5 0v10.915a.75.75 0 0 1-.75.75M21.105 15.077a.75.75 0 0 0 1.5 0V8.922a.75.75 0 0 0-1.5 0z"
    />
  </Svg>
);
export default IconlystMenu3Bold;
