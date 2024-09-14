import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongSquareOutline = ({
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
      d="M16.466 21.75H8.032c-3.308 0-5.532-2.321-5.532-5.776V8.027c0-3.455 2.224-5.777 5.532-5.777h8.435C19.776 2.25 22 4.572 22 8.027v7.947c0 3.455-2.224 5.776-5.534 5.776m-8.434-18C5.583 3.75 4 5.429 4 8.027v7.947c0 2.6 1.583 4.276 4.032 4.276h8.434c2.45 0 4.034-1.678 4.034-4.276V8.027c0-2.6-1.583-4.277-4.033-4.277z"
    />
    <Path
      fill={props.color}
      d="M10.948 16.92q-.176 0-.348-.021a2.91 2.91 0 1 1 3.236-2.54 2.915 2.915 0 0 1-2.888 2.56m0-4.32a1.41 1.41 0 1 0 1.4 1.579 1.41 1.41 0 0 0-1.4-1.578"
    />
    <Path
      fill={props.color}
      d="M13.094 15.016a1 1 0 0 1-.09 0 .75.75 0 0 1-.655-.834l.776-6.435a.75.75 0 0 1 .7-.659.74.74 0 0 1 .776.565 2.25 2.25 0 0 0 1.351 1.473.75.75 0 1 1-.472 1.424 3.4 3.4 0 0 1-1.105-.615l-.534 4.426a.75.75 0 0 1-.747.655"
    />
  </Svg>
);
export default IconlystSongSquareOutline;
