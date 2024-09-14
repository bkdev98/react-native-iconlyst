import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChargeStationElectricityOutline = ({
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
      d="M4.854 3.455C5.578 2.678 6.605 2.25 7.8 2.25h5.788c1.197 0 2.224.428 2.948 1.206.719.772 1.084 1.828 1.084 2.993V20.25h.512a.75.75 0 1 1 0 1.5H3.257a.75.75 0 0 1 0-1.5h.512V6.45c0-1.167.366-2.223 1.085-2.995m.415 16.795h10.85V6.45c0-.856-.264-1.525-.68-1.972-.412-.442-1.025-.728-1.851-.728H7.8c-.823 0-1.437.286-1.849.728-.417.448-.682 1.116-.682 1.971z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.073 6.365c.399-.428.955-.651 1.571-.651h4.1c.617 0 1.174.223 1.573.651.393.422.578.984.578 1.57v2.327c0 .586-.185 1.148-.578 1.57-.399.429-.956.651-1.573.651h-4.1c-.616 0-1.173-.222-1.572-.65-.394-.423-.578-.985-.578-1.57V7.934c0-.587.186-1.149.58-1.57M8.17 7.388c-.091.098-.176.272-.176.547v2.327c0 .277.084.45.175.548.086.092.229.173.475.173h4.1c.247 0 .39-.081.475-.173.091-.098.176-.271.176-.548V7.935c0-.276-.085-.45-.176-.548-.085-.091-.228-.173-.475-.173h-4.1c-.244 0-.388.081-.474.174"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.538 8.494a.75.75 0 0 1 .465.953l-.872 2.531a.75.75 0 0 1-1.418-.489l.872-2.53a.75.75 0 0 1 .953-.465M18.865 6.111a.75.75 0 0 1 1.06 0l1.849 1.849c.14.14.22.331.22.53v7.532a1.876 1.876 0 1 1-3.754 0V14.59a.377.377 0 0 0-.377-.377h-.992a.75.75 0 0 1 0-1.5h.992c1.037 0 1.877.84 1.877 1.877v1.432a.377.377 0 0 0 .754 0V8.801l-1.63-1.63a.75.75 0 0 1 0-1.06M10.782 14.044a.75.75 0 0 1 .3 1.017l-.274.504h.91a.75.75 0 0 1 .66 1.109l-.877 1.61a.75.75 0 1 1-1.318-.717l.273-.502h-.91a.75.75 0 0 1-.658-1.108l.877-1.612a.75.75 0 0 1 1.017-.3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChargeStationElectricityOutline;
