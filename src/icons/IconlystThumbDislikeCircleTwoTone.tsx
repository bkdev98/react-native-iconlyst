import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbDislikeCircleTwoTone = ({
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
      d="M14.6 13.37c-.637 0-1.75 2.032-2.219 2.949-.084.163-.126.245-.19.307a.6.6 0 0 1-.21.128c-.085.028-.16.028-.31.027-.112 0-.221-.007-.303-.023-.705-.145-1.254-1.001-.543-3.21.025-.08.038-.119.03-.15a.1.1 0 0 0-.048-.066c-.027-.016-.068-.016-.15-.016h-.57c-1.07 0-1.606 0-1.971-.22-.333-.2-.578-.52-.685-.893-.117-.41.023-.927.302-1.96l.26-.966c.148-.548.222-.822.377-1.026.143-.188.334-.335.553-.423.237-.097.521-.097 1.088-.097h2.308c.185 0 .277 0 .367.013q.126.017.246.058c.087.03.169.072.333.155l1.335.678M15.82 14.027h.082c.422 0 .633 0 .795-.08a.77.77 0 0 0 .343-.344c.081-.162.081-.373.081-.795v-3.86c0-.423 0-.634-.08-.796a.77.77 0 0 0-.344-.343c-.162-.08-.373-.08-.795-.08h-.081c-.422 0-.634 0-.795.08a.77.77 0 0 0-.344.343c-.08.162-.08.373-.08.796v3.86c0 .422 0 .633.08.795a.77.77 0 0 0 .344.344c.161.08.373.08.795.08"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystThumbDislikeCircleTwoTone;
