import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPathFontBold = ({
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
      d="M17.946 7.259c-.51 0-.51-.34-.51-.44v-2.11c0-.11 0-.45.51-.45h1.98c.51 0 .51.34.51.45v2.11c0 .1 0 .44-.51.44zm1.98 10.51c.51 0 .51.33.51.44v2.11c0 .11 0 .44-.51.44h-1.98c-.51 0-.51-.33-.51-.44v-2.11c0-.11 0-.44.51-.44zm-4.58-2.08a.753.753 0 0 1-1.01-.33l-.49-.97h-3.3l-.49.97c-.19.37-.64.51-1.01.33a.75.75 0 0 1-.33-1.01l2.81-5.56a.76.76 0 0 1 .67-.41c.28 0 .54.16.67.41l2.81 5.56c.19.37.04.82-.33 1.01m-8.42-8.87c0 .1 0 .44-.5.44h-1.99c-.5 0-.5-.34-.5-.44v-2.11c0-.11 0-.45.5-.45h1.99c.5 0 .5.34.5.45zm0 13.5c0 .11 0 .44-.5.44h-1.99c-.5 0-.5-.33-.5-.44v-2.11c0-.11 0-.44.5-.44h1.99c.5 0 .5.33.5.44zm13-11.56c1.16 0 2.01-.82 2.01-1.94v-2.11c0-1.13-.85-1.95-2.01-1.95h-1.98c-1.17 0-2.01.82-2.01 1.95v.53h-7.51v-.53c0-1.13-.84-1.95-2-1.95h-1.99c-1.16 0-2 .82-2 1.95v2.11c0 1.12.84 1.94 2 1.94h.53v7.51h-.53c-1.16 0-2 .81-2 1.94v2.11c0 1.12.84 1.94 2 1.94h1.99c1.16 0 2-.82 2-1.94v-.56h7.51v.56c0 1.12.84 1.94 2.01 1.94h1.98c1.16 0 2.01-.82 2.01-1.94v-2.11c0-1.13-.85-1.94-2.01-1.94h-.49v-7.51z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.306 12.889h1.78l-.89-1.77z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPathFontBold;
