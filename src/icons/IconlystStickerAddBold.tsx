import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerAddBold = ({
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
      d="M21.452 16.282c-.881-.003-1.92 0-2.666.008-1.185 0-2.162.986-2.162 2.183v2.853c0 .466.56.698.88.361l2.172-2.28 2.144-2.252a.516.516 0 0 0-.368-.873"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.367 11.22H9.32a.75.75 0 0 1 0-1.5h6.047a.75.75 0 0 1 0 1.5m-2.29 4.486H9.32a.75.75 0 0 1 0-1.5h3.758a.75.75 0 0 1 0 1.5m4.516-11.978H9.441a.2.2 0 0 0-.198.228c.021.155.038.312.038.473a5.02 5.02 0 0 1-5.056 5.02c-.114-.006-.209.073-.209.188v7.788c0 2.685 2.164 4.881 4.832 4.881h5.723a.494.494 0 0 0 .493-.498v-3.485c0-1.98 1.618-3.604 3.58-3.614h3.29a.483.483 0 0 0 .481-.487V8.587c0-2.684-2.154-4.86-4.822-4.86M4.578 7.68a.75.75 0 0 0 .75-.75V5.436h1.495a.75.75 0 0 0 0-1.5H5.328V2.441a.75.75 0 0 0-1.5 0v1.495H2.335a.75.75 0 0 0 0 1.5h1.493V6.93c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStickerAddBold;
