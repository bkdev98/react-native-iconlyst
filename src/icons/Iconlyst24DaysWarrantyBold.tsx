import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst24DaysWarrantyBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.748 12.444V11.42l-.736 1.023z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.524 13.944h-.275v.459a.75.75 0 0 1-1.5 0v-.46h-2.2a.75.75 0 0 1-.608-1.187l2.948-4.101a.75.75 0 0 1 1.36.438v3.35h.275a.75.75 0 0 1 0 1.5m-5.67-.31a.75.75 0 0 1 0 1.5H8.026a.75.75 0 0 1-.75-.75c0-1.486 1.059-2.206 1.83-2.732.694-.47.998-.72.998-1.126a.665.665 0 0 0-1.33 0 .75.75 0 1 1-1.5 0c0-1.193.972-2.164 2.166-2.164s2.164.97 2.164 2.164c0 1.243-.917 1.866-1.653 2.367-.404.275-.713.494-.913.742zm9.85-3.548-.7-.7a1.7 1.7 0 0 1-.493-1.198v-1c0-1.49-1.211-2.7-2.7-2.7h-1.002c-.452 0-.877-.174-1.195-.491l-.711-.71a2.7 2.7 0 0 0-3.818.01l-.697.698a1.71 1.71 0 0 1-1.197.494H7.189a2.705 2.705 0 0 0-2.701 2.7v.997c0 .452-.175.877-.493 1.197l-.693.695-.021.02a2.7 2.7 0 0 0 .017 3.814l.699.699c.318.32.494.744.494 1.195v1.006A2.7 2.7 0 0 0 7.19 19.51h.998c.453 0 .878.177 1.196.494l.708.708q.013.013.027.024a2.68 2.68 0 0 0 1.877.76h.012a2.68 2.68 0 0 0 1.903-.796l.7-.7c.32-.317.745-.493 1.196-.493h1.006a2.703 2.703 0 0 0 2.699-2.696v-1.004c0-.45.176-.875.493-1.195l.712-.711a2.703 2.703 0 0 0-.012-3.816"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst24DaysWarrantyBold;
