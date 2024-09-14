import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFood3Outline = ({
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
      d="M20.521 17.439a1.75 1.75 0 0 1 1.138 2.221 2.62 2.62 0 0 1-2.483 1.79H4.824a2.62 2.62 0 0 1-2.484-1.79 1.75 1.75 0 0 1 1.139-2.221l-.006-.119c-.208-4.165 2.593-7.754 6.454-8.717V8.08a2.073 2.073 0 0 1 4.145 0v.523a8.55 8.55 0 0 1 6.455 8.717zM4.977 17.36l-.006-.12a7.04 7.04 0 0 1 5.73-7.27.7.7 0 0 0 .203-.035 7.1 7.1 0 0 1 2.19 0 .7.7 0 0 0 .206.035 7.04 7.04 0 0 1 5.729 7.27l-.006.12zm14.722 1.5H4.003a.252.252 0 0 0-.24.33c.152.46.58.76 1.06.76h14.353c.48 0 .909-.3 1.06-.76a.25.25 0 0 0-.081-.274.25.25 0 0 0-.158-.056H19.7M12.572 8.369V8.08c0-.31-.257-.57-.572-.57a.575.575 0 0 0-.573.57v.289a9 9 0 0 1 1.145 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M3.143 6.27c.293-.3.768-.3 1.061 0 .759.76.76 1.99 0 2.75a.756.756 0 0 1-1.062 0 .75.75 0 0 1 .002-1.06.447.447 0 0 0 0-.63.75.75 0 0 1 0-1.06M18.554 4.58a.75.75 0 0 1 0 1.06.446.446 0 0 0-.001.63.749.749 0 1 1-1.06 1.06c-.76-.76-.76-1.99 0-2.75.293-.3.768-.3 1.06 0M7.606 2.27c.293-.3.768-.3 1.061 0 .759.76.76 1.99-.001 2.75a.446.446 0 0 0 0 .63.749.749 0 1 1-1.06 1.06 1.94 1.94 0 0 1 0-2.75.446.446 0 0 0 0-.63.75.75 0 0 1 0-1.06"
    />
  </Svg>
);
export default IconlystFood3Outline;
