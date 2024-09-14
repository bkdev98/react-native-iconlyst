import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrophoneMuteOutline = ({
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
      d="M12.249 18.745a7.99 7.99 0 0 1-7.958-7.976.758.758 0 0 1 1.036-.705.74.74 0 0 1 .464.687v.018a6.45 6.45 0 0 0 10.51 5.039.75.75 0 0 1 .943 1.166 7.96 7.96 0 0 1-4.995 1.77M15.89 11.863h-.058a.75.75 0 0 1-.69-.8c.008-.108.016-.215.016-.33V6.508a2.908 2.908 0 0 0-5.315-1.632.75.75 0 1 1-1.24-.844 4.407 4.407 0 0 1 8.055 2.476v4.227c0 .154-.01.3-.02.444a.75.75 0 0 1-.747.685"
    />
    <Path
      fill={props.color}
      d="M12.25 15.149a4.423 4.423 0 0 1-4.408-4.43v-2.51a.75.75 0 0 1 1.5 0v2.513a2.88 2.88 0 0 0 .847 2.063 2.876 2.876 0 0 0 3.615.4.75.75 0 1 1 .8 1.268 4.4 4.4 0 0 1-2.354.696"
    />
    <Path
      fill={props.color}
      d="M19.456 19.824a.74.74 0 0 1-.53-.22L4.51 5.19a.75.75 0 0 1 1.06-1.06l14.416 14.415a.75.75 0 0 1-.53 1.281M12.248 21.59a.75.75 0 0 1-.75-.75v-2.85a.75.75 0 0 1 1.5 0v2.848a.75.75 0 0 1-.75.752M18.72 14.69a.75.75 0 0 1-.671-1.083 6.4 6.4 0 0 0 .66-2.855.75.75 0 1 1 1.5 0 7.85 7.85 0 0 1-.816 3.52.75.75 0 0 1-.673.418"
    />
  </Svg>
);
export default IconlystMicrophoneMuteOutline;
