import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClouds1Light = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.797 16.599h5.558c.3 0 .698-.059 1.1-.22a2.72 2.72 0 0 0 1.599-2.484c0-1.706-1.205-2.708-2.696-2.721 0-1.073-.843-3.22-3.22-3.22s-3.218 2.147-3.218 3.22c-1.366.012-2.492.853-2.672 2.304"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.52 15.39a3.9 3.9 0 0 1-1.406-.287 3.5 3.5 0 0 1-2.06-3.19c0-2.195 1.551-3.483 3.47-3.5 0-1.38 1.082-4.141 4.14-4.141 2.71 0 3.868 2.169 4.097 3.623"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.461 15.8c-1.08.01-1.952.735-1.952 1.97 0 .8.476 1.487 1.16 1.796.287.117.573.162.79.162h4.661a2.2 2.2 0 0 0 .796-.16c.684-.308 1.158-.999 1.158-1.798 0-1.235-.872-1.96-1.952-1.97 0-.777-.61-2.33-2.33-2.33-1.722 0-2.33 1.553-2.33 2.33"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClouds1Light;
