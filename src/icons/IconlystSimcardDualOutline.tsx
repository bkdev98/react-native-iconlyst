import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSimcardDualOutline = ({
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
      fillRule="evenodd"
      d="M13.664 13.203c.384.414.566.965.566 1.537v1.697c0 .573-.18 1.122-.565 1.536-.26.279-.59.47-.96.566a2.3 2.3 0 0 1-.578.072H9.166c-.604 0-1.148-.218-1.54-.638-.384-.414-.564-.963-.564-1.535V14.74c0-.572.18-1.12.564-1.535.392-.42.936-.639 1.54-.639h2.96c.601 0 1.147.22 1.538.637m-1.098 1.024c-.077-.084-.21-.16-.44-.16h-2.96c-.232 0-.364.078-.441.16-.083.09-.163.25-.163.513v1.697c0 .262.08.424.163.514.077.082.209.16.44.16h2.962c.231 0 .363-.078.44-.16a.5.5 0 0 0 .069-.098q.01-.019.02-.04a.9.9 0 0 0 .073-.375V14.74c0-.261-.08-.424-.163-.513"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.356 18.514a3.804 3.804 0 0 1-3.76 3.236l-5.898-.002a3.8 3.8 0 0 1-3.803-3.8V9.282a3.804 3.804 0 0 1 3.218-3.756 3.811 3.811 0 0 1 3.776-3.277h4.168c.666 0 1.298.271 1.757.752l3.112 3.246c.447.457.681 1.068.681 1.691v6.813a3.81 3.81 0 0 1-3.25 3.762m-1.46-.71.002-.054v-6.598a.92.92 0 0 0-.26-.642l-3.11-3.24a.93.93 0 0 0-.673-.288H7.698a2.3 2.3 0 0 0-2.303 2.301v8.664c0 .746.354 1.409.904 1.828.388.297.873.473 1.399.473l5.898.002a2.303 2.303 0 0 0 2.302-2.303v-.088zM8.65 5.483h3.207c.663 0 1.295.27 1.754.747l3.11 3.242c.436.45.678 1.056.678 1.681v5.825a2.31 2.31 0 0 0 1.71-2.225V7.939a.92.92 0 0 0-.256-.644l-.004-.006-3.117-3.248v-.002a.93.93 0 0 0-.674-.289h-4.168a2.314 2.314 0 0 0-2.24 1.732"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSimcardDualOutline;
