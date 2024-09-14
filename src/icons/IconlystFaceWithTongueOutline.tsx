import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceWithTongueOutline = ({
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
      d="M8.975 10a.975.975 0 1 1 0-1.95.975.975 0 0 1 0 1.95M15.475 10a.975.975 0 1 1 0-1.949.975.975 0 0 1 0 1.95M16.008 14.066h-7.52a.75.75 0 1 1 0-1.5h7.52a.75.75 0 1 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M12.25 17.4a2.607 2.607 0 0 1-2.6-2.6v-1.48a.75.75 0 1 1 1.5 0v1.48a1.104 1.104 0 1 0 2.21 0v-1.48a.75.75 0 1 1 1.5 0v1.48a2.61 2.61 0 0 1-2.61 2.6"
    />
  </Svg>
);
export default IconlystFaceWithTongueOutline;