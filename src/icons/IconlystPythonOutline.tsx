import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPythonOutline = ({
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
      d="M10.501 3.75c-.99 0-1.792.802-1.792 1.793V7.96a.75.75 0 1 1-1.5 0V5.543a3.293 3.293 0 0 1 3.292-3.293h2.997a3.293 3.293 0 0 1 3.293 3.293v4.114a3.1 3.1 0 0 1-3.093 3.093h-3.396a1.6 1.6 0 0 0-1.593 1.593v4.115c0 .99.803 1.792 1.792 1.792h2.997c.99 0 1.793-.803 1.793-1.792V16.04a.75.75 0 1 1 1.5 0v2.417a3.293 3.293 0 0 1-3.293 3.292h-2.997a3.293 3.293 0 0 1-3.292-3.292v-4.115a3.1 3.1 0 0 1 3.093-3.093h3.396a1.6 1.6 0 0 0 1.592-1.593V5.543c0-.99-.802-1.793-1.792-1.793z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.44 18.5a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M10.05 5.5a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M2.25 10.503a3.293 3.293 0 0 1 3.292-3.292H12a.75.75 0 0 1 0 1.5H5.542c-.99 0-1.792.803-1.792 1.792V13.5c0 .99.803 1.793 1.792 1.793H7.96a.75.75 0 1 1 0 1.5H5.542A3.293 3.293 0 0 1 2.25 13.5zM15.29 7.96a.75.75 0 0 1 .75-.75h2.418a3.293 3.293 0 0 1 3.292 3.293V13.5a3.293 3.293 0 0 1-3.292 3.293H12a.75.75 0 0 1 0-1.5h6.458c.99 0 1.792-.803 1.792-1.793v-2.997c0-.99-.803-1.792-1.792-1.792H16.04a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPythonOutline;
