import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoginUserOutline = ({
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
      d="M19.262 7.631a.75.75 0 0 1-.003 1.06l-.595.594h2.85a.75.75 0 0 1 0 1.5h-2.85l.595.591a.75.75 0 1 1-1.058 1.064l-1.882-1.874a.75.75 0 0 1 0-1.063L18.2 7.63a.75.75 0 0 1 1.06.002M10.518 13.43c2.14.02 4.028.253 5.403.87.697.312 1.298.738 1.722 1.318.431.588.646 1.288.642 2.078v.018l-.002.018c-.042.792-.33 1.526-.881 2.065-.554.543-1.314.83-2.185.83H5.804c-.871 0-1.633-.287-2.188-.83-.552-.539-.841-1.275-.879-2.07v-.035c0-.792.217-1.492.648-2.08.426-.58 1.026-1.008 1.723-1.32 1.375-.616 3.26-.847 5.397-.862zm-6.282 4.244c.026.468.191.819.428 1.051.238.232.605.402 1.14.402h9.413c.533 0 .899-.17 1.135-.402.238-.232.404-.585.433-1.056 0-.49-.13-.863-.352-1.165-.23-.314-.594-.598-1.125-.836-1.083-.485-2.713-.718-4.798-.738-2.082.015-3.707.246-4.788.73-.53.239-.895.522-1.127.839-.223.304-.355.68-.359 1.175M10.517 4.875a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6m-4.3 2.8a4.3 4.3 0 1 1 8.6 0 4.3 4.3 0 0 1-8.6 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoginUserOutline;
