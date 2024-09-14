import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWheelchairOutline = ({
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
      d="M16.466 21.75H8.032c-3.308 0-5.532-2.321-5.532-5.776V8.026c0-3.455 2.224-5.776 5.532-5.776h8.435C19.776 2.25 22 4.571 22 8.026v7.948c0 3.455-2.224 5.776-5.534 5.776m-8.434-18C5.583 3.75 4 5.429 4 8.026v7.948c0 2.6 1.583 4.276 4.032 4.276h8.434c2.45 0 4.034-1.679 4.034-4.276V8.026c0-2.6-1.583-4.276-4.033-4.276z"
    />
    <Path
      fill={props.color}
      d="M11.832 18.137q-.12.001-.242-.006a4.847 4.847 0 0 1-1.148-9.488.75.75 0 1 1 .428 1.437 3.348 3.348 0 0 0 .792 6.553 3.3 3.3 0 0 0 2.727-1.19.75.75 0 0 1 1.15.963 4.8 4.8 0 0 1-3.707 1.731"
    />
    <Path
      fill={props.color}
      d="M16.782 15.226a.75.75 0 0 1-.638-.355l-.736-1.185-1.79.016a1.05 1.05 0 0 1-1.037-.9l-.33-2.384a1.05 1.05 0 0 1 1.156-1.185l1.986.23a.75.75 0 0 1-.172 1.49l-1.4-.162.2 1.411h1.424a1.48 1.48 0 0 1 1.247.694l.735 1.184a.751.751 0 0 1-.645 1.146M12.911 8.063a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
    />
  </Svg>
);
export default IconlystWheelchairOutline;
