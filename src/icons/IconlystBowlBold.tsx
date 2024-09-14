import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBowlBold = ({
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
      d="M11.998 6.133c-2.524 0-4.832.233-6.53.622-.843.193-1.577.433-2.118.726-.27.147-.528.325-.726.547a1.37 1.37 0 0 0-.374.915q0 .105.017.202v.007l-.002.025v.015c-.011.16-.011.304-.011.436v.01c0 4.674 4.5 8.23 9.747 8.23 5.248 0 9.749-3.556 9.749-8.23v-.01c0-.131 0-.275-.01-.436v-.015l-.002-.025-.003-.041q.01-.082.011-.168c0-.38-.171-.689-.373-.915a2.7 2.7 0 0 0-.727-.547c-.541-.293-1.275-.533-2.118-.726-1.698-.389-4.006-.622-6.53-.622M4.064 9.085a2 2 0 0 1-.226-.142 2 2 0 0 1 .226-.142c.37-.2.953-.404 1.739-.584 1.558-.357 3.75-.584 6.195-.584s4.637.227 6.195.584c.786.18 1.37.384 1.74.584q.147.08.226.142a2 2 0 0 1-.227.142c-.37.2-.953.403-1.739.583-1.559.357-3.75.585-6.195.585s-4.637-.228-6.195-.585c-.786-.18-1.37-.383-1.739-.583"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBowlBold;
