import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoStandLight = ({
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
      d="M13.39 5.926H7.504c-2.05 0-3.336 1.451-3.336 3.506v3.752c0 2.055 1.28 3.508 3.336 3.508h5.885c2.058 0 3.338-1.453 3.338-3.508V9.432c0-2.055-1.28-3.506-3.337-3.506"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.191 3h4.196M16.72 10.463l2.953-2.416a1.12 1.12 0 0 1 1.828.867l-.01 4.795a1.118 1.118 0 0 1-1.83.862l-2.94-2.415M8.145 21l3.136-4.309 3.074 4.224M12.826 9.41v-.047m0-.254a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5"
    />
  </Svg>
);
export default IconlystVideoStandLight;
