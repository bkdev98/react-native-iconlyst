import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudSearchBulk = ({
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
      fillRule="evenodd"
      d="M18.015 8.095a.21.21 0 0 1-.183-.18c-.294-2.107-2.009-4.74-5.33-4.74-3.572 0-5.042 2.91-5.326 4.743a.21.21 0 0 1-.183.177c-2.36.289-3.956 2.098-3.956 4.583a4.64 4.64 0 0 0 2.74 4.222c.468.19.898.285 1.244.331a.187.187 0 0 0 .21-.214 2 2 0 0 1-.025-.3 5.227 5.227 0 0 1 5.221-5.22 5.226 5.226 0 0 1 5.22 5.22c0 .109-.012.213-.025.317a.187.187 0 0 0 .203.215 5.2 5.2 0 0 0 1.423-.352 4.64 4.64 0 0 0 2.715-4.22c0-2.482-1.593-4.29-3.948-4.582"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.427 18.686a1.973 1.973 0 0 1-1.97-1.97c0-1.086.883-1.97 1.97-1.97s1.97.884 1.97 1.97-.884 1.97-1.97 1.97m2.868-.02a3.45 3.45 0 0 0 .602-1.95 3.474 3.474 0 0 0-3.47-3.47 3.475 3.475 0 0 0-3.471 3.47 3.475 3.475 0 0 0 3.471 3.47c.648 0 1.25-.19 1.77-.5l.92.917a.746.746 0 0 0 1.06 0 .75.75 0 0 0-.002-1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudSearchBulk;
