import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbDislikeCircleBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.1 13.37c-.637 0-1.75 2.032-2.219 2.949-.084.163-.126.245-.19.306a.6.6 0 0 1-.21.128c-.085.029-.16.029-.31.027-.112 0-.22-.007-.303-.023-.705-.145-1.254-1-.543-3.21.025-.079.038-.119.03-.149a.1.1 0 0 0-.048-.066c-.027-.017-.068-.017-.149-.017h-.57c-1.072 0-1.607 0-1.972-.218a1.54 1.54 0 0 1-.685-.896c-.117-.409.023-.926.302-1.96l.26-.965c.148-.548.222-.822.377-1.026a1.3 1.3 0 0 1 .553-.423c.237-.097.521-.097 1.088-.097h2.308c.185 0 .277 0 .367.013q.126.017.246.058c.087.03.17.072.333.155l1.335.678M16.622 8.947c0-.423 0-.634-.081-.796a.76.76 0 0 0-.343-.343c-.162-.081-.373-.081-.795-.081h-.081c-.422 0-.634 0-.795.08a.77.77 0 0 0-.344.344c-.081.162-.081.373-.081.796v3.86c0 .422 0 .633.08.795a.77.77 0 0 0 .345.343c.16.08.373.08.795.08h.08c.423 0 .634 0 .796-.08a.76.76 0 0 0 .343-.343c.08-.162.08-.373.08-.795v-.961"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21a9 9 0 1 1 3.971-.921"
    />
  </Svg>
);
export default IconlystThumbDislikeCircleBroken;
