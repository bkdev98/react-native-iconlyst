import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbDislikeSquareBroken = ({
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
      d="M14.1 13.373c-.637 0-1.75 2.032-2.219 2.95-.084.162-.126.244-.19.306a.6.6 0 0 1-.21.128c-.085.028-.16.028-.31.027a2 2 0 0 1-.303-.023c-.705-.145-1.254-1-.543-3.21.025-.079.038-.119.03-.149a.1.1 0 0 0-.048-.067c-.027-.016-.068-.016-.149-.016h-.57c-1.072 0-1.607 0-1.972-.219a1.54 1.54 0 0 1-.685-.895c-.117-.409.023-.926.302-1.96l.26-.965c.148-.548.222-.822.377-1.026a1.3 1.3 0 0 1 .553-.424c.237-.096.521-.096 1.088-.096h2.308c.185 0 .277 0 .367.013q.126.017.246.058c.087.03.17.072.333.155l1.335.678M16.62 8.953c0-.422 0-.633-.08-.795a.76.76 0 0 0-.343-.343c-.162-.08-.373-.08-.795-.08h-.081c-.422 0-.634 0-.795.08a.77.77 0 0 0-.344.343c-.081.162-.081.373-.081.795v3.861c0 .422 0 .633.08.795a.77.77 0 0 0 .345.343c.16.081.373.081.795.081h.08c.423 0 .634 0 .796-.08a.76.76 0 0 0 .343-.344c.08-.162.08-.373.08-.795v-1.167"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.216 20.999c2.95 0 4.778-2.08 4.778-5.026V8.03c.01-2.944-1.824-5.026-4.772-5.026H7.784c-2.936 0-4.778 2.082-4.778 5.026v7.943c0 2.946 1.834 5.026 4.778 5.026h3.926"
    />
  </Svg>
);
export default IconlystThumbDislikeSquareBroken;
