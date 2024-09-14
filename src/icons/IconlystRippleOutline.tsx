import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRippleOutline = ({
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
      d="M15.211 16.37a.75.75 0 0 1-.6-.3c-.853-1.124-1.989-2.148-2.384-2.148s-1.5 1.02-2.335 2.142a.75.75 0 0 1-1.206-.892c.477-.645 2.143-2.75 3.541-2.75s3.093 2.1 3.58 2.743a.75.75 0 0 1-.6 1.2zM12.227 11.578c-1.4 0-3.064-2.1-3.54-2.75a.75.75 0 0 1 1.205-.892c.831 1.121 1.944 2.142 2.335 2.142s1.531-1.024 2.384-2.15a.75.75 0 0 1 1.2.901c-.49.649-2.189 2.749-3.584 2.749"
    />
  </Svg>
);
export default IconlystRippleOutline;
