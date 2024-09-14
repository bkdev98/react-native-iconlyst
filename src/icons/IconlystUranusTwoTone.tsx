import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUranusTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M3.114 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17.108 4.62c-5.455.363-7.152 7.09-13.94 7.09M19.264 6.788c-5.305 1.123-7.49 10.173-13.98 10.921M21.089 12.18c-2.155.286-7.362 2.388-10.95 8.51M7.861 13.366c-.967.631-3.162 1.823-4.204 1.54M15.483 17.534c1.094-.714 3.576-2.062 4.754-1.74"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUranusTwoTone;
