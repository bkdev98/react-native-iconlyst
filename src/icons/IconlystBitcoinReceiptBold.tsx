import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinReceiptBold = ({
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
      d="M17.05 13.402a2.17 2.17 0 0 1-.55 1.66c-.363.4-.867.635-1.402.682v.1a.75.75 0 0 1-1.5 0v-.08h-.707a.75.75 0 0 1-.75-.75v-5.6a.75.75 0 0 1 .75-.75h.707v-.079a.75.75 0 0 1 1.5 0v.102c1.02.116 1.856.915 1.952 1.926a2.15 2.15 0 0 1-.517 1.613c.286.323.474.731.517 1.176M7.47 17.82c0 1.02-.83 1.85-1.86 1.85-.5 0-.96-.19-1.31-.52-.35-.36-.55-.83-.55-1.33v-7.25c0-.22.13-.31.17-.34.1-.06.19-.02.22 0l.64.33c.57.32 1.26.34 1.91.07l.78-.35zM20.86 3.66c-.51-.31-1.14-.34-1.69-.06l-.66.34c-.18.1-.39.11-.59.02l-1.84-.82c-.95-.42-1.99-.42-2.94 0l-1.84.82c-.2.09-.41.08-.6-.02l-.66-.34c-.54-.28-1.17-.25-1.68.06-.56.35-.89.95-.89 1.62v3.38c-.05 0-.1.02-.15.04l-1.23.55a.68.68 0 0 1-.61-.01l-.65-.34c-.54-.28-1.17-.26-1.69.05-.56.34-.89.95-.89 1.62v7.25c0 .9.35 1.74.99 2.39.64.62 1.48.96 2.37.96h12.14c2.46 0 3.99-1.69 3.99-4.41l.01-11.48c0-.67-.33-1.28-.89-1.62"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.848 12.965h-1.207v1.3h1.268a.64.64 0 0 0 .481-.213.65.65 0 0 0 .166-.507c-.03-.32-.348-.58-.708-.58M14.848 10.164h-1.207v1.3h1.268a.645.645 0 0 0 .647-.708c-.03-.326-.348-.592-.708-.592"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinReceiptBold;
