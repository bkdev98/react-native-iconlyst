import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTempleBroken = ({
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
      d="M5.578 11.504a7.143 7.143 0 0 1 11.064-5.97M19.862 11.507a7.1 7.1 0 0 0-.937-3.538M12.72 4.362 12.721 3M4.24 21H21.2M4.24 11.504H21.2M16.292 11.504v7.033m3.57-7.033V21m-7.141-9.496V21m-7.143-9.496V21m3.572-6.675V21"
    />
  </Svg>
);
export default IconlystTempleBroken;
