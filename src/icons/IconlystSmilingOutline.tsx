import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmilingOutline = ({
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
      d="M12.25 16.623a4.48 4.48 0 0 1-3.554-1.814.75.75 0 1 1 1.19-.914 2.888 2.888 0 0 0 4.726 0 .75.75 0 1 1 1.19.914 4.48 4.48 0 0 1-3.553 1.814M8.975 10.4a.975.975 0 1 1 0-1.951.975.975 0 0 1 0 1.95M15.475 10.4a.976.976 0 1 1 0-1.952.976.976 0 0 1 0 1.951"
    />
  </Svg>
);
export default IconlystSmilingOutline;
