import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareTouchIdCloseOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M12.565 22.709H8.023c-3.308 0-5.532-2.321-5.532-5.776V8.985c0-3.455 2.224-5.776 5.532-5.776h8.435c3.31 0 5.533 2.321 5.533 5.776v6a.75.75 0 1 1-1.5 0v-6c0-2.6-1.583-4.276-4.033-4.276H8.023c-2.449 0-4.032 1.678-4.032 4.276v7.948c0 2.6 1.583 4.276 4.032 4.276h4.542a.75.75 0 0 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M8.259 11.522a.75.75 0 0 1-.652-1.12 5.35 5.35 0 0 1 4.636-2.7 5.3 5.3 0 0 1 2.053.41.75.75 0 1 1-.578 1.384 3.83 3.83 0 0 0-4.806 1.645.75.75 0 0 1-.653.381M7.663 17.178a.75.75 0 0 1-.75-.75v-2.836a.75.75 0 1 1 1.5 0v2.836a.75.75 0 0 1-.75.75M16.82 15.487a.75.75 0 0 1-.75-.75v-1.7a3.8 3.8 0 0 0-.7-2.205.75.75 0 0 1 1.226-.864 5.3 5.3 0 0 1 .972 3.069v1.7a.75.75 0 0 1-.748.75"
    />
    <Path
      fill={props.color}
      d="M14.005 18.218a.75.75 0 0 1-.75-.75v-4.272a1.053 1.053 0 1 0-2.106 0v.483a.75.75 0 1 1-1.5 0v-.483a2.553 2.553 0 1 1 5.106 0v4.272a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M10.4 18.219a.75.75 0 0 1-.75-.75v-1.623a.75.75 0 1 1 1.5 0v1.623a.75.75 0 0 1-.75.75M21.24 22.705a.74.74 0 0 1-.53-.22l-1.282-1.282-1.283 1.283a.75.75 0 0 1-1.06-1.062l1.282-1.282-1.283-1.282a.75.75 0 0 1 1.06-1.062l1.285 1.284L20.71 17.8a.75.75 0 1 1 1.06 1.06l-1.282 1.283 1.281 1.283a.749.749 0 0 1-.53 1.28"
    />
  </Svg>
);
export default IconlystSquareTouchIdCloseOutline;
