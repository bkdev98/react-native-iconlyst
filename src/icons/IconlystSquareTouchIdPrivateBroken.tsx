import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareTouchIdPrivateBroken = ({
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
      d="M12.573 20.945H8.045c-2.939 0-4.767-2.075-4.767-5.011v-3.961M21.222 12.053V8.011c0-2.936-1.83-5.011-4.769-5.011H8.045c-2.93 0-4.767 2.075-4.767 5.011"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.28 9.788a4.56 4.56 0 0 1 3.971-2.311c.622 0 1.217.125 1.758.35M14.01 14.027v-1.819a1.798 1.798 0 0 0-3.597 0v.482M15.981 9.414c.525.743.833 1.65.833 2.63M10.413 16.469v-1.617M7.687 15.433v-2.828M20.799 18.305c0 1.978-2.37 2.696-2.37 2.696s-2.37-.718-2.37-2.696c0-1.98-.086-2.133.104-2.323.19-.191 1.955-.806 2.265-.806s2.267.806 2.267.806"
    />
  </Svg>
);
export default IconlystSquareTouchIdPrivateBroken;
