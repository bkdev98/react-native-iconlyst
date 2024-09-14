import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGasOilStationOutline = ({
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
      d="M4.854 3.455c.724-.777 1.751-1.205 2.945-1.205h5.789c1.196 0 2.224.428 2.948 1.206.719.772 1.083 1.828 1.083 2.993V21a.75.75 0 0 1-1.5 0V6.45c0-.856-.264-1.525-.68-1.972-.412-.442-1.025-.728-1.851-.728H7.799c-.822 0-1.436.286-1.848.728-.417.448-.682 1.116-.682 1.971V21a.75.75 0 0 1-1.5 0V6.45c0-1.167.366-2.223 1.085-2.995"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.508 21a.75.75 0 0 1 .75-.75h14.875a.75.75 0 0 1 0 1.5H3.258a.75.75 0 0 1-.75-.75M7.073 6.365c.399-.428.955-.651 1.571-.651h4.1c.617 0 1.174.223 1.573.651.393.422.578.984.578 1.57v2.327c0 .586-.185 1.148-.578 1.57-.399.429-.956.651-1.573.651h-4.1c-.616 0-1.173-.222-1.572-.65-.394-.423-.578-.985-.578-1.57V7.934c0-.587.186-1.149.58-1.57M8.17 7.388c-.091.098-.176.272-.176.547v2.327c0 .277.084.45.175.548.086.092.229.173.475.173h4.1c.247 0 .39-.081.475-.173.091-.098.176-.271.176-.548V7.935c0-.276-.085-.45-.176-.548-.085-.091-.228-.173-.475-.173h-4.1c-.244 0-.388.081-.474.174"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.538 8.494a.75.75 0 0 1 .465.953l-.872 2.531a.75.75 0 1 1-1.418-.489l.872-2.53a.75.75 0 0 1 .953-.465M18.865 6.111a.75.75 0 0 1 1.06 0l1.849 1.849c.14.14.22.331.22.53v7.532a1.876 1.876 0 1 1-3.754 0V14.59a.377.377 0 0 0-.377-.377h-.992a.75.75 0 0 1 0-1.5h.992c1.037 0 1.877.84 1.877 1.877v1.432a.377.377 0 0 0 .754 0V8.801l-1.63-1.63a.75.75 0 0 1 0-1.06M11.266 14.131l-.408.63-.407-.63a.75.75 0 0 1 .815 0m-.408 1.572c.218.187.464.43.654.699.102.168.119.437-.008.687a.69.69 0 0 1-.646.393.69.69 0 0 1-.645-.393c-.127-.25-.11-.518-.008-.687.19-.27.435-.512.653-.699m-.407-1.572.407.63.408-.63.002.002.004.002.01.007.033.022q.043.028.112.079c.093.067.22.163.365.285a5.5 5.5 0 0 1 .978 1.056c.435.681.404 1.53.072 2.184a2.19 2.19 0 0 1-1.984 1.214c-.94 0-1.639-.536-1.983-1.214-.332-.655-.364-1.503.072-2.184l.016-.025c.305-.437.678-.792.962-1.03a6 6 0 0 1 .476-.365l.034-.022.01-.007.004-.002v-.001z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGasOilStationOutline;