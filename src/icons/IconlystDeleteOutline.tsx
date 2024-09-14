import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeleteOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.385 8.72a.75.75 0 0 1 .688.808c-.006.068-.548 6.779-.86 9.594-.194 1.747-1.348 2.81-3.09 2.842a192.273 192.273 0 0 1-7.859-.006c-1.672-.033-2.83-1.117-3.018-2.829-.315-2.84-.854-9.534-.86-9.601a.75.75 0 0 1 .688-.808c.407-.011.775.275.808.687.003.043.223 2.777.463 5.482l.048.54c.121 1.344.244 2.636.344 3.535.107.973.632 1.475 1.558 1.494 2.5.053 5.05.056 7.8.006.985-.019 1.517-.511 1.627-1.507.31-2.794.85-9.482.856-9.55.033-.412.398-.7.807-.687M14.345 2c.918 0 1.725.62 1.962 1.506l.254 1.261a.9.9 0 0 0 .865.722h3.282a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5h3.281l.101-.007a.9.9 0 0 0 .765-.715l.243-1.216c.247-.932 1.054-1.55 1.972-1.55zm0 1.5h-4.233a.53.53 0 0 0-.512.392l-.233 1.17a2.4 2.4 0 0 1-.128.428h5.98a2.4 2.4 0 0 1-.129-.428l-.243-1.216c-.05-.185-.262-.346-.502-.346"
    />
  </Svg>
);
export default IconlystDeleteOutline;
