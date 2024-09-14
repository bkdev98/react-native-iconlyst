import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEffectFilterTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.333 10.013a5.863 5.863 0 1 0-11.726 0 5.863 5.863 0 0 0 11.726 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.358 15.108a5.857 5.857 0 0 1-2.664 5.715 5.8 5.8 0 0 1-3.14.917 5.87 5.87 0 0 1-5.868-5.867 5.83 5.83 0 0 1 2.979-5.094"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.693 20.823c.9.585 1.981.918 3.133.918a5.86 5.86 0 0 0 5.859-5.868 5.84 5.84 0 0 0-3.375-5.3"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystEffectFilterTwoTone;
