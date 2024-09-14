import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceIDLock2Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.36 10.485v-.47a1.34 1.34 0 0 0-.411-.951 1.364 1.364 0 0 0-2.306.954v.467zM13.768 11.984h-3.533c-.553 0-1.003.448-1.003 1v1.99c0 .552.45 1 1.003 1h3.533c.553 0 1.003-.448 1.003-1v-1.99c0-.552-.45-1-1.003-1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.271 14.974c0 1.38-1.123 2.5-2.503 2.5h-3.533a2.504 2.504 0 0 1-2.503-2.5v-1.99c0-.986.579-1.833 1.411-2.239v-.74a2.84 2.84 0 0 1 2.827-2.82 2.8 2.8 0 0 1 2.024.802 2.84 2.84 0 0 1 .867 2.017v.741a2.5 2.5 0 0 1 1.41 2.24zm-.054-12.15H7.782c-3.159 0-5.282 2.222-5.282 5.53v7.95c0 3.302 2.123 5.52 5.282 5.52h8.434c3.16 0 5.284-2.218 5.284-5.52v-7.95c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFaceIDLock2Bold;
