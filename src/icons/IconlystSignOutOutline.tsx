import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSignOutOutline = ({
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
      d="M19.498 7.631a.75.75 0 0 0 .002 1.06l.596.594h-2.85a.75.75 0 0 0 0 1.5h2.85l-.595.591a.75.75 0 1 0 1.058 1.064l1.882-1.874a.75.75 0 0 0 0-1.063L20.56 7.63a.75.75 0 0 0-1.06.002M10.916 13.43c2.14.02 4.028.253 5.403.87.698.312 1.298.738 1.723 1.318.43.588.646 1.288.641 2.078v.018l-.001.018c-.042.792-.331 1.526-.882 2.065-.554.543-1.314.83-2.185.83H6.203c-.872 0-1.634-.287-2.189-.83-.552-.539-.84-1.275-.878-2.07l-.001-.017v-.018c0-.792.217-1.492.649-2.08.425-.58 1.025-1.008 1.723-1.32 1.374-.616 3.259-.847 5.397-.862zm-6.281 4.244c.026.468.19.819.428 1.051.237.232.604.402 1.14.402h9.412c.534 0 .899-.17 1.136-.402s.403-.585.432-1.056c0-.49-.13-.863-.352-1.165-.23-.314-.593-.598-1.125-.836-1.082-.485-2.712-.718-4.798-.738-2.081.015-3.707.246-4.788.73-.53.239-.895.522-1.127.839-.223.304-.355.68-.358 1.175M10.915 4.875a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6m-4.3 2.8a4.3 4.3 0 1 1 8.6 0 4.3 4.3 0 0 1-8.6 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSignOutOutline;
