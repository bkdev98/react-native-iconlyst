import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobePhotoshopBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.492 10.227c-.501-.392-1.436-.386-2.083-.309v2.614c.65.056 1.576.04 2.073-.36.167-.135.39-.383.39-.984 0-.595-.217-.833-.38-.96"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.937 12.664.778.306c.313.129 1.232.506 1.362 1.579.079.637-.151 1.2-.647 1.584-.482.37-1.121.507-1.715.507-.479 0-.929-.09-1.244-.215a.75.75 0 0 1-.417-.976.754.754 0 0 1 .976-.417c.398.16 1.175.15 1.485-.088.057-.044.09-.08.073-.214-.011-.094-.024-.201-.432-.37l-.777-.303c-.31-.127-1.23-.501-1.363-1.577-.079-.64.15-1.203.647-1.586.871-.67 2.253-.575 2.959-.292a.75.75 0 0 1 .417.976.754.754 0 0 1-.976.417c-.397-.16-1.175-.15-1.485.088-.057.044-.09.08-.074.214.011.085.026.2.433.367m-3.52.68c-.883.708-2.149.762-3.008.697v1.848a.75.75 0 0 1-1.5 0v-6.6a.75.75 0 0 1 .57-.73c.258-.062 2.56-.59 3.937.488.436.34.956.989.956 2.14s-.519 1.809-.955 2.157M12 3.009c-5.238 0-9.5 4.26-9.5 9.5 0 5.238 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5c0-5.24-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobePhotoshopBold;
