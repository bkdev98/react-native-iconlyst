import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarProgressBold = ({
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
      d="M21.67 10.62c-.18-.57-.66-.98-1.26-1.07l-4.84-.71-2.16-4.35s0-.01-.01-.01c0-.01 0-.01-.01-.02-.27-.52-.8-.84-1.39-.84-.6 0-1.14.33-1.41.87l-.44.9a.74.74 0 0 0 .34 1c.25.13.54.1.76-.06v12.15l-1.01.53a.745.745 0 1 0 .69 1.32l1.07-.55 4.33 2.26c.23.12.48.17.73.17.32 0 .65-.1.93-.3.48-.35.71-.94.61-1.53l-.82-4.78 3.49-3.38c.44-.42.59-1.03.4-1.6M7.738 20.305l-.763.4-.1-.067.168-.96a.75.75 0 1 0-1.48-.257l-.166.963a1.57 1.57 0 0 0 2.276 1.65l.762-.4a.75.75 0 0 0-.697-1.329M6.223 15.605l-.135.788a.749.749 0 1 0 1.48.253l.201-1.18a.75.75 0 0 0-.22-.669l-.627-.599a.75.75 0 1 0-1.037 1.083zM4.804 10.892a.75.75 0 0 0 .64-.847.756.756 0 0 0-.849-.638l-1.005.141c-.597.088-1.082.5-1.265 1.073a1.55 1.55 0 0 0 .402 1.597l1.28 1.24a.749.749 0 1 0 1.043-1.077l-1.28-1.24.035-.109z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.987 7.41a.75.75 0 0 0-1.006.334l-.55 1.101-1.041.153a.749.749 0 1 0 .219 1.484l1.428-.21a.75.75 0 0 0 .56-.406l.726-1.45a.75.75 0 0 0-.336-1.007"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarProgressBold;
