import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentHideOutline = ({
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
      d="M4.394 3.917A4.53 4.53 0 0 1 7.905 2.25h5.644c.773 0 1.491.326 2.015.862l.005.005 3.782 3.938c.34.353.582.788.694 1.268.07.232.094.457.094.674v8.162a4.4 4.4 0 0 1-.32 1.675.75.75 0 0 1-1.389-.567 2.9 2.9 0 0 0 .209-1.108V8.997a.8.8 0 0 0-.034-.254l-.018-.065a1.2 1.2 0 0 0-.316-.582L14.49 4.16a1.32 1.32 0 0 0-.94-.409H7.904c-.943 0-1.79.431-2.35 1.116a.75.75 0 1 1-1.161-.949"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.031 2.316a.75.75 0 0 1 .75.75v2.891c0 .996.806 1.806 1.802 1.808h2.736a.75.75 0 1 1 0 1.5h-2.738a3.307 3.307 0 0 1-3.3-3.308v-2.89a.75.75 0 0 1 .75-.75M3.2 2.614a.75.75 0 0 1 1.061 0l17.038 17.048a.75.75 0 0 1-1.06 1.06L3.2 3.676a.75.75 0 0 1 0-1.06M4.145 7.348a.75.75 0 0 1 .75.75v9.204a2.963 2.963 0 0 0 2.985 2.946h8.435a.75.75 0 0 1 0 1.5H7.891a4.463 4.463 0 0 1-4.496-4.44v-9.209999999999999a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentHideOutline;
