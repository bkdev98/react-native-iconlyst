import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChargeStationOutline = ({
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
      d="M4.854 3.704c.724-.778 1.751-1.206 2.946-1.206h5.788c1.197 0 2.224.428 2.948 1.206.719.772 1.084 1.828 1.084 2.993v13.801h.512a.75.75 0 1 1 0 1.5H3.257a.75.75 0 1 1 0-1.5h.512v-13.8c0-1.167.366-2.223 1.085-2.994m.415 16.794h10.85v-13.8c0-.856-.264-1.525-.68-1.972-.412-.441-1.025-.728-1.851-.728H7.8c-.823 0-1.437.286-1.849.728-.417.448-.682 1.116-.682 1.971z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.073 6.613c.399-.428.955-.651 1.571-.651h4.1c.617 0 1.174.223 1.573.651.393.422.578.984.578 1.57v2.327c0 .586-.185 1.148-.578 1.57-.399.429-.956.652-1.573.652h-4.1c-.616 0-1.173-.223-1.572-.652-.394-.422-.578-.984-.578-1.57V8.183c0-.587.186-1.148.58-1.57M8.17 7.636c-.091.098-.176.272-.176.547v2.327c0 .277.084.45.175.548.086.092.229.174.475.174h4.1c.247 0 .39-.082.475-.174.091-.098.176-.271.176-.548V8.183c0-.276-.085-.45-.176-.548-.085-.091-.228-.173-.475-.173h-4.1c-.244 0-.388.081-.474.174"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.538 8.742a.75.75 0 0 1 .465.954l-.872 2.53a.75.75 0 0 1-1.418-.488l.872-2.53a.75.75 0 0 1 .953-.466M18.865 6.36a.75.75 0 0 1 1.06 0l1.849 1.848c.14.14.22.331.22.53v7.532a1.876 1.876 0 1 1-3.754 0v-1.432a.377.377 0 0 0-.377-.377h-.992a.75.75 0 0 1 0-1.5h.992c1.037 0 1.877.84 1.877 1.877v1.432a.377.377 0 0 0 .754 0V9.05l-1.63-1.629a.75.75 0 0 1 0-1.06M10.782 14.292a.75.75 0 0 1 .3 1.018l-.274.503h.91a.75.75 0 0 1 .66 1.11l-.877 1.61a.75.75 0 1 1-1.318-.718l.273-.502h-.91a.75.75 0 0 1-.658-1.108l.877-1.612a.75.75 0 0 1 1.017-.3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChargeStationOutline;
