import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRvTrailerOutline = ({
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
      d="M8.379 18.142a.75.75 0 0 1 .75-.75h6.717a.75.75 0 0 1 0 1.5H9.13a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.18 17.112a1.205 1.205 0 1 0 0 2.41 1.205 1.205 0 0 0 0-2.41m-2.705 1.205a2.705 2.705 0 1 1 5.41 0 2.705 2.705 0 0 1-5.41 0M17.808 17.112a1.205 1.205 0 1 0 0 2.41 1.205 1.205 0 0 0 0-2.41m-2.706 1.205a2.705 2.705 0 1 1 5.41 0 2.705 2.705 0 0 1-5.41 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.413 6.248A1.413 1.413 0 0 0 3 7.66v8.631c0 .764.65 1.414 1.413 1.414h.758a.75.75 0 0 1 0 1.5h-.758A2.935 2.935 0 0 1 1.5 16.292V7.661a2.913 2.913 0 0 1 2.913-2.913h13.562c1.727 0 3.177 1.387 3.177 3.142a1.13 1.13 0 0 1-1.13 1.13h-.712c.035 1.013.226 1.66.522 2.138.332.535.852.954 1.692 1.429.38.214.752.488 1.03.864.287.39.446.853.446 1.39v1.812c0 .772-.32 1.427-.85 1.877-.519.44-1.2.654-1.9.654h-.31a.75.75 0 1 1 0-1.5h.31c.404 0 .723-.123.929-.298.194-.164.32-.4.32-.733v-1.812a.8.8 0 0 0-.152-.5c-.106-.142-.281-.29-.56-.448-.92-.52-1.7-1.09-2.23-1.946-.531-.858-.753-1.909-.753-3.281 0-.633.513-1.146 1.146-1.146h.658a1.675 1.675 0 0 0-1.633-1.272z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.001 8.77c0-.69.56-1.25 1.25-1.25h5.867c.69 0 1.25.56 1.25 1.25v2.433c0 .69-.56 1.25-1.25 1.25H5.25c-.69 0-1.25-.56-1.25-1.25zm1.5.25v1.933h5.367V9.02zM13.443 8.77c0-.69.56-1.25 1.25-1.25h4.194a.75.75 0 0 1 0 1.5h-3.944v1.933h4.34a.75.75 0 0 1 0 1.5h-4.59c-.69 0-1.25-.56-1.25-1.25z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRvTrailerOutline;
