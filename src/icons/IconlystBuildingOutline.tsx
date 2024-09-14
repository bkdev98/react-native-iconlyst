import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuildingOutline = ({
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
      d="M5.79 21.228A2.84 2.84 0 0 1 2.955 18.4v-5.274a2.2 2.2 0 0 1 .88-1.751l3.946-3.167a2.666 2.666 0 0 1 3.32 0l3.983 3.18a2.2 2.2 0 0 1 .864 1.723v5.295a2.844 2.844 0 0 1-2.84 2.824H5.79zm3.654-12.1c-.265 0-.521.09-.729.254l-3.959 3.177a.72.72 0 0 0-.3.576v5.262a1.34 1.34 0 0 0 1.34 1.33h7.3a1.27 1.27 0 0 0 .954-.386 1.34 1.34 0 0 0 .4-.944V13.12a.71.71 0 0 0-.285-.551L10.17 9.38a1.17 1.17 0 0 0-.726-.252"
    />
    <Path
      fill={props.color}
      d="M9.447 20.99a.75.75 0 0 1-.75-.75V16.69a.75.75 0 1 1 1.5 0v3.548a.75.75 0 0 1-.75.75M19.569 21.12h-1.3a.75.75 0 1 1 0-1.5h1.3a1.39 1.39 0 0 0 1.386-1.386V5.598a1.39 1.39 0 0 0-1.386-1.387h-5.224a1.375 1.375 0 0 0-1.374 1.374v.879a.75.75 0 1 1-1.5 0v-.88a2.877 2.877 0 0 1 2.874-2.873h5.224a2.89 2.89 0 0 1 2.886 2.887v12.636a2.89 2.89 0 0 1-2.886 2.886"
    />
    <Path
      fill={props.color}
      d="M18.469 16.987a.753.753 0 1 1 .75-.76v.01a.75.75 0 0 1-.75.75M18.47 12.758a.746.746 0 0 1-.75-.745v-.01a.75.75 0 1 1 .75.755M15.41 8.541a.753.753 0 1 1 .75-.76v.01a.75.75 0 0 1-.75.75M18.473 8.541a.753.753 0 1 1 .75-.76v.01a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystBuildingOutline;
