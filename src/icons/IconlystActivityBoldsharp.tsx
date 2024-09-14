import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystActivityBoldsharp = ({
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
      fillRule="evenodd"
      d="m13.285 15.705-3.2-2.51-2.8 3.64-1.18-.92 3.72-4.84 3.2 2.52 2.74-3.54 1.19.92zm1.92-10.77c0-.2.01-.4.04-.59H2.465v18.21h18.21V9.215c-.33.09-.69.13-1.05.13a4.42 4.42 0 0 1-4.42-4.41"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.625 2.515c-1.13 0-2.08.78-2.34 1.83-.05.19-.08.39-.08.59a2.42 2.42 0 0 0 3.47 2.17c.8-.39 1.36-1.22 1.36-2.17 0-1.34-1.08-2.42-2.41-2.42"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystActivityBoldsharp;
