import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGasStationOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M4.854 3.704c.724-.778 1.751-1.206 2.945-1.206h5.789c1.196 0 2.224.428 2.948 1.206.719.772 1.083 1.828 1.083 2.993v14.551a.75.75 0 1 1-1.5 0V6.698c0-.856-.264-1.525-.68-1.972-.412-.441-1.025-.728-1.851-.728H7.799c-.822 0-1.436.286-1.848.728-.417.448-.682 1.116-.682 1.971v14.551a.75.75 0 1 1-1.5 0V6.698c0-1.167.366-2.223 1.085-2.994"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.508 21.248a.75.75 0 0 1 .75-.75h14.875a.75.75 0 0 1 0 1.5H3.258a.75.75 0 0 1-.75-.75M18.865 6.36a.75.75 0 0 1 1.06 0l1.849 1.848c.14.14.22.331.22.53v7.532a1.876 1.876 0 1 1-3.754 0v-1.432a.377.377 0 0 0-.377-.377h-.992a.75.75 0 0 1 0-1.5h.992c1.037 0 1.877.84 1.877 1.877v1.432a.377.377 0 0 0 .754 0V9.05l-1.63-1.629a.75.75 0 0 1 0-1.06M8.71 17.745a.75.75 0 0 1 .75-.75h2.474a.75.75 0 0 1 0 1.5H9.461a.75.75 0 0 1-.75-.75M7.073 6.613c.399-.428.955-.651 1.571-.651h4.1c.617 0 1.174.223 1.573.651.393.422.578.984.578 1.57v2.327c0 .586-.185 1.148-.578 1.57-.399.429-.956.652-1.573.652h-4.1c-.616 0-1.173-.223-1.572-.652-.394-.422-.578-.984-.578-1.57V8.183c0-.587.186-1.148.58-1.57M8.17 7.636c-.091.098-.176.272-.176.547v2.327c0 .277.084.45.175.548.086.092.229.174.475.174h4.1c.247 0 .39-.082.475-.174.091-.098.176-.271.176-.548V8.183c0-.276-.085-.45-.176-.548-.085-.091-.228-.173-.475-.173h-4.1c-.244 0-.388.081-.474.174"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.538 8.742a.75.75 0 0 1 .465.954l-.872 2.53a.75.75 0 0 1-1.418-.488l.872-2.53a.75.75 0 0 1 .953-.466"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGasStationOutline;
