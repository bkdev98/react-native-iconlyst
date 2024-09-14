import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleGridInterfaceBold = ({
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
      d="M6.5 2.5c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4M17.5 13.5c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4M5.41 15.68a2.914 2.914 0 0 0-2.91 2.91 2.914 2.914 0 0 0 2.91 2.91 2.914 2.914 0 0 0 2.91-2.91 2.914 2.914 0 0 0-2.91-2.91M18.59 8.321a2.914 2.914 0 0 0 2.91-2.91A2.914 2.914 0 0 0 18.59 2.5a2.914 2.914 0 0 0-2.91 2.911 2.914 2.914 0 0 0 2.91 2.91"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCircleGridInterfaceBold;
