import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightPolygonOutline = ({
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
      d="M12.309 8.452a.75.75 0 0 0 .002 1.06l1.744 1.736H8.13a.75.75 0 0 0 0 1.5h5.926l-1.745 1.74a.75.75 0 1 0 1.059 1.063l3.03-3.022a.75.75 0 0 0 0-1.062L13.37 8.45a.75.75 0 0 0-1.061.002"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.21 3.75c-.4 0-.784.159-1.066.441L4.192 8.143A1.5 1.5 0 0 0 3.75 9.21v5.58c0 .4.16.784.442 1.067l3.951 3.951c.282.283.667.442 1.067.442h5.581c.4 0 .783-.158 1.067-.442l3.951-3.951c.282-.282.441-.666.441-1.066V9.21c0-.401-.159-.785-.441-1.067l-3.951-3.951a1.5 1.5 0 0 0-1.067-.442zm-2.128-.618A3 3 0 0 1 9.21 2.25h5.581c.798 0 1.563.316 2.127.881l3.952 3.952c.564.564.88 1.329.88 2.127v5.58c0 .798-.316 1.563-.88 2.128l-3.952 3.95a3 3 0 0 1-2.126.882H9.21a3 3 0 0 1-2.128-.882l-3.95-3.95a3 3 0 0 1-.882-2.127V9.21c0-.8.318-1.564.881-2.127z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightPolygonOutline;
