import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp5Broken = ({
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
      d="m17.043 12.734-3.622-6.72a1.047 1.047 0 0 0-1.843 0l-7.242 13.44c-.376.698.129 1.544.921 1.544h14.486c.792 0 1.297-.846.921-1.543l-2.458-4.544"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.188 3.748 12.5 5.435l-1.686-1.687M12.5 5.435V3M15.788 21l-3.287-6.1-2.07 3.84M8.955 10.836l1.626 1.474 1.915-1.724 1.915 1.724 1.635-1.474"
    />
  </Svg>
);
export default IconlystCamp5Broken;
